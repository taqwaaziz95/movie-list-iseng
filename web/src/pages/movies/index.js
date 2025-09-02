import { useEffect, useMemo, useState } from "react";
import { api } from "../../lib/api";
import { useAuth } from "../../context/AuthContext";
import MovieCard from "../../components/MovieCard";

export default function Movies() {
	const { user, loading, logout } = useAuth();
	const [list, setList] = useState({
		data: [],
		total: 0,
		page: 1,
		pageSize: 12,
	});
	const [q, setQ] = useState("");
	const [err, setErr] = useState(null);

	const fetchMovies = async (page = 1) => {
		const data = await api(
			`/movies?search=${encodeURIComponent(q)}&page=${page}&pageSize=12`
		);
		setList(data);
	};

	useEffect(() => {
		fetchMovies(1).catch((e) => setErr(e.message));
	}, []);

	const onCreate = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = new FormData(e.currentTarget);
		const payload = Object.fromEntries(fd.entries());
		// if (payload.releaseYear) payload.releaseYear = Number(payload.releaseYear);
		if (payload.posterUrl === "") delete payload.posterUrl;
		if (payload.description === "") delete payload.description;
		if (payload.releaseYear === "") {
			delete payload.releaseYear;
		} else if (payload.releaseYear != null) {
			payload.releaseYear = Number(payload.releaseYear);
		}
		try {
			await api("/movies", { method: "POST", body: payload });
			form.reset();
			fetchMovies(1);
		} catch (e) {
			alert(e.message);
		}
	};

	const onDelete = async (id) => {
		if (!confirm("Delete this movie?")) return;
		try {
			await api(`/movies/${id}`, { method: "DELETE" });
			fetchMovies(list.page);
		} catch (e) {
			alert(e.message);
		}
	};

	const canCreate = !!user;

	return (
		<div className="max-w-6xl mx-auto p-4">
			<header className="flex items-center justify-between mb-6">
				<h1 className="text-2xl font-semibold">Kakakwawa95 Nonton Bajakan</h1>
				<div className="flex items-center gap-3">
					<input
						className="input w-64"
						placeholder="Search..."
						value={q}
						onChange={(e) => setQ(e.target.value)}
					/>
					<button className="btn" onClick={() => fetchMovies(1)}>
						Search
					</button>
					{user ? (
						<>
							<button className="btn" onClick={logout}>
								Logout
							</button>
							<span className="text-sm text-gray-300">
								Hi, {user.name || user.email}
							</span>
						</>
					) : (
						<a className="btn" href="/login">
							Login
						</a>
					)}
				</div>
			</header>

			{canCreate && (
				<div className="card p-4 mb-6">
					<h2 className="font-medium mb-2">Add a movie</h2>
					<form onSubmit={onCreate} className="grid md:grid-cols-4 gap-3">
						<input
							className="input"
							name="title"
							placeholder="Title"
							required
						/>
						<input
							className="input"
							name="posterUrl"
							placeholder="Poster URL (optional)"
						/>
						<input
							className="input"
							name="releaseYear"
							placeholder="Year (optional)"
							type="number"
						/>
						<input
							className="input md:col-span-4"
							name="description"
							placeholder="Description (optional)"
						/>
						<button className="btn md:col-span-4">Create</button>
					</form>
				</div>
			)}

			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
				{list.data.map((m) => (
					<div key={m.id} className="relative">
						<MovieCard movie={m} />
						{user && m.author?.id === user.id && (
							<button
								onClick={() => onDelete(m.id)}
								className="absolute top-2 left-2 bg-red-500/80 hover:bg-red-500 text-white rounded-full px-3 py-1 text-sm"
							>
								Delete
							</button>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
