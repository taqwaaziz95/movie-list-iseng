const { prisma } = require("../../utils/prisma");
const { z } = require("zod");

const toUndef = (v) => (v === "" || v == null ? undefined : v);
const toNumOrUndef = (v) => (v === "" || v == null ? undefined : Number(v));

const movieSchema = z.object({
	title: z.string().min(1),
	description: z.preprocess(toUndef, z.string().min(1)).optional(),
	posterUrl: z.preprocess(toUndef, z.string().url()).optional(),
	releaseYear: z
		.preprocess(toNumOrUndef, z.number().int().min(1900).max(2200))
		.optional(),
});

const ratingSchema = z.object({
	score: z.number().int().min(1).max(5),
});

const commentSchema = z.object({
	text: z.string().min(1).max(2000),
});

exports.listMovies = async (req, res, next) => {
	try {
		const page = parseInt(req.query.page || "1", 10);
		const pageSize = parseInt(req.query.pageSize || "12", 10);
		const search = (req.query.search || "").trim();

		const where = search
			? { title: { contains: search, mode: "insensitive" } }
			: {};
		const [total, rows] = await Promise.all([
			prisma.movie.count({ where }),
			prisma.movie.findMany({
				where,
				orderBy: { createdAt: "desc" },
				skip: (page - 1) * pageSize,
				take: pageSize,
				select: {
					id: true,
					title: true,
					description: true,
					posterUrl: true,
					releaseYear: true,
					createdAt: true,
					updatedAt: true,
					author: { select: { id: true, name: true, email: true } },
				},
			}),
		]);

		// attach stats (avg rating + count)
		const ids = rows.map((r) => r.id);
		const stats = await prisma.rating.groupBy({
			by: ["movieId"],
			where: { movieId: { in: ids } },
			_avg: { score: true },
			_count: { score: true },
		});
		const statMap = new Map(
			stats.map((s) => [
				s.movieId,
				{ averageRating: s._avg.score ?? 0, ratingsCount: s._count.score },
			])
		);
		const data = rows.map((r) => ({
			...r,
			...{
				averageRating: statMap.get(r.id)?.averageRating || 0,
				ratingsCount: statMap.get(r.id)?.ratingsCount || 0,
			},
		}));

		res.json({ page, pageSize, total, data });
	} catch (err) {
		next(err);
	}
};

exports.getMovieById = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id, 10);
		const movie = await prisma.movie.findUnique({
			where: { id },
			include: {
				author: { select: { id: true, name: true, email: true } },
				ratings: {
					select: {
						id: true,
						score: true,
						user: { select: { id: true, name: true } },
					},
				},
				comments: {
					orderBy: { createdAt: "desc" },
					select: {
						id: true,
						text: true,
						createdAt: true,
						updatedAt: true,
						user: { select: { id: true, name: true } },
					},
				},
			},
		});
		if (!movie) return res.status(404).json({ message: "Not found" });

		const agg = await prisma.rating.aggregate({
			where: { movieId: id },
			_avg: { score: true },
			_count: { score: true },
		});
		res.json({
			...movie,
			averageRating: agg._avg.score || 0,
			ratingsCount: agg._count.score,
		});
	} catch (err) {
		next(err);
	}
};

exports.createMovie = async (req, res, next) => {
	try {
		const parsed = movieSchema.parse(req.body);
		const movie = await prisma.movie.create({
			data: { ...parsed, authorId: req.user.id },
		});
		res.status(201).json(movie);
	} catch (err) {
		next(err);
	}
};

exports.updateMovie = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id, 10);
		const parsed = movieSchema.partial().parse(req.body);
		const existing = await prisma.movie.findUnique({ where: { id } });
		if (!existing) return res.status(404).json({ message: "Not found" });
		if (existing.authorId !== req.user.id)
			return res.status(403).json({ message: "Forbidden" });
		const movie = await prisma.movie.update({ where: { id }, data: parsed });
		res.json(movie);
	} catch (err) {
		next(err);
	}
};

exports.deleteMovie = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id, 10);
		const existing = await prisma.movie.findUnique({ where: { id } });
		if (!existing) return res.status(404).json({ message: "Not found" });
		if (existing.authorId !== req.user.id)
			return res.status(403).json({ message: "Forbidden" });
		await prisma.movie.delete({ where: { id } });
		res.json({ ok: true });
	} catch (err) {
		next(err);
	}
};

exports.upsertRating = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id, 10);
		const { score } = ratingSchema.parse(req.body);
		const movie = await prisma.movie.findUnique({ where: { id } });
		if (!movie) return res.status(404).json({ message: "Movie not found" });

		const rating = await prisma.rating.upsert({
			where: { userId_movieId: { userId: req.user.id, movieId: id } },
			create: { userId: req.user.id, movieId: id, score },
			update: { score },
		});
		res.status(201).json(rating);
	} catch (err) {
		next(err);
	}
};

exports.deleteRating = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id, 10);
		await prisma.rating.delete({
			where: { userId_movieId: { userId: req.user.id, movieId: id } },
		});
		res.json({ ok: true });
	} catch (err) {
		next(err);
	}
};

exports.listComments = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id, 10);
		const comments = await prisma.comment.findMany({
			where: { movieId: id },
			orderBy: { createdAt: "desc" },
			select: {
				id: true,
				text: true,
				createdAt: true,
				updatedAt: true,
				user: { select: { id: true, name: true } },
			},
		});
		res.json({ data: comments });
	} catch (err) {
		next(err);
	}
};

exports.createComment = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id, 10);
		const { text } = commentSchema.parse(req.body);
		const movie = await prisma.movie.findUnique({ where: { id } });
		if (!movie) return res.status(404).json({ message: "Movie not found" });
		const comment = await prisma.comment.create({
			data: { text, movieId: id, userId: req.user.id },
		});
		res.status(201).json(comment);
	} catch (err) {
		next(err);
	}
};

exports.updateComment = async (req, res, next) => {
	try {
		const commentId = parseInt(req.params.commentId, 10);
		const { text } = commentSchema.parse(req.body);
		const existing = await prisma.comment.findUnique({
			where: { id: commentId },
		});
		if (!existing) return res.status(404).json({ message: "Not found" });
		if (existing.userId !== req.user.id)
			return res.status(403).json({ message: "Forbidden" });
		const comment = await prisma.comment.update({
			where: { id: commentId },
			data: { text },
		});
		res.json(comment);
	} catch (err) {
		next(err);
	}
};

exports.deleteComment = async (req, res, next) => {
	try {
		const commentId = parseInt(req.params.commentId, 10);
		const existing = await prisma.comment.findUnique({
			where: { id: commentId },
		});
		if (!existing) return res.status(404).json({ message: "Not found" });
		if (existing.userId !== req.user.id)
			return res.status(403).json({ message: "Forbidden" });
		await prisma.comment.delete({ where: { id: commentId } });
		res.json({ ok: true });
	} catch (err) {
		next(err);
	}
};
