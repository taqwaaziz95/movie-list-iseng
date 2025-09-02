import Link from 'next/link';

export default function MovieCard({ movie }) {
  return (
    <div className="card overflow-hidden group">
      <div className="h-56 bg-black/20 relative">
        {movie.posterUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full grid place-items-center text-6xl opacity-30">🎬</div>
        )}
        <div className="absolute top-2 right-2 bg-black/60 rounded-full px-3 py-1 text-sm">
          ⭐ {movie.averageRating?.toFixed(1) || '0.0'}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{movie.title}</h3>
        <p className="text-sm text-gray-400 line-clamp-2 min-h-[40px]">{movie.description || 'No description.'}</p>
        <div className="mt-4 flex items-center justify-between">
          <Link className="btn" href={`/movies/${movie.id}`}>Open</Link>
          {movie.releaseYear && <span className="text-sm text-gray-400">{movie.releaseYear}</span>}
        </div>
      </div>
    </div>
  )
}
