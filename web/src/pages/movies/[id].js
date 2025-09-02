import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';
import RatingStars from '../../components/RatingStars';

export default function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [myScore, setMyScore] = useState(0);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingDesc, setEditingDesc] = useState('');
  const [editingYear, setEditingYear] = useState('');
  const [editingPoster, setEditingPoster] = useState('');

  const load = async () => {
    if (!id) return;
    const m = await api(`/movies/${id}`);
    setMovie(m);
    setEditingTitle(m.title || '');
    setEditingDesc(m.description || '');
    setEditingYear(m.releaseYear || '');
    setEditingPoster(m.posterUrl || '');
    const mine = m.ratings?.find(r => r.user?.id === user?.id);
    setMyScore(mine?.score || 0);
    const c = await api(`/movies/${id}/comments`);
    setComments(c.data);
  };

  useEffect(() => { load(); }, [id]);

  const onSaveRating = async (s) => {
    await api(`/movies/${id}/rating`, { method: 'POST', body: { score: s } });
    setMyScore(s);
    load();
  };

  const onComment = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const text = fd.get('text');
    if (!text) return;
    await api(`/movies/${id}/comments`, { method: 'POST', body: { text } });
    e.currentTarget.reset();
    load();
  };

  const onDeleteComment = async (cid) => {
    if (!confirm('Delete this comment?')) return;
    await api(`/movies/comments/${cid}`, { method: 'DELETE' });
    load();
  };

  const onUpdateMovie = async () => {
    await api(`/movies/${id}`, { method: 'PUT', body: {
      title: editingTitle,
      description: editingDesc,
      releaseYear: editingYear ? Number(editingYear) : undefined,
      posterUrl: editingPoster || undefined
    }});
    load();
  };

  if (!movie) return null;

  const isOwner = user && movie.author?.id === user.id;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card overflow-hidden">
          <div className="h-[420px] bg-black/20">
            {movie.posterUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full grid place-items-center text-8xl opacity-30">🎬</div>
            )}
          </div>
        </div>
        <div className="card p-4 space-y-3">
          {isOwner ? (
            <>
              <input className="input" value={editingTitle} onChange={e=>setEditingTitle(e.target.value)} />
              <input className="input" value={editingPoster} onChange={e=>setEditingPoster(e.target.value)} placeholder="Poster URL" />
              <input className="input" value={editingYear} onChange={e=>setEditingYear(e.target.value)} placeholder="Release year" />
              <textarea className="input min-h-[120px]" value={editingDesc} onChange={e=>setEditingDesc(e.target.value)} />
              <button className="btn" onClick={onUpdateMovie}>Save changes</button>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-semibold">{movie.title}</h1>
              {movie.releaseYear && <p className="text-gray-400">{movie.releaseYear}</p>}
              <p className="text-gray-300">{movie.description || 'No description.'}</p>
            </>
          )}

          <div className="pt-2">
            <p className="text-sm text-gray-400">Average rating</p>
            <div className="flex items-center gap-2">
              <div className="text-xl">⭐ {movie.averageRating?.toFixed(1) || '0.0'}</div>
              <div className="text-sm text-gray-400">({movie.ratingsCount} ratings)</div>
            </div>
          </div>

          {user && (
            <div className="pt-2">
              <p className="text-sm text-gray-400">Your rating</p>
              <RatingStars value={myScore} onChange={onSaveRating} size={28} />
            </div>
          )}
        </div>
      </div>

      <div className="card p-4 mt-6">
        <h2 className="font-semibold mb-3">Comments</h2>
        {user && (
          <form onSubmit={onComment} className="flex items-center gap-2 mb-4">
            <input className="input flex-1" name="text" placeholder="Write a comment..." />
            <button className="btn">Send</button>
          </form>
        )}
        <div className="space-y-3">
          {comments.map(c => (
            <div key={c.id} className="bg-white/5 rounded-xl p-3 flex items-start justify-between">
              <div>
                <div className="text-sm text-gray-400">{c.user?.name || 'User'} • {new Date(c.createdAt).toLocaleString()}</div>
                <div>{c.text}</div>
              </div>
              {user && c.user?.id === user.id && (
                <button className="text-red-400 hover:text-red-300" onClick={()=>onDeleteComment(c.id)}>Delete</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
