export default function RatingStars({ value=0, onChange, size=22 }) {
  const stars = [1,2,3,4,5];
  return (
    <div className="flex items-center gap-1">
      {stars.map(s => (
        <button
          key={s}
          type="button"
          onClick={() => onChange && onChange(s)}
          aria-label={`Rate ${s}`}
          className="transition"
          style={{ fontSize: size }}
        >
          {value >= s ? '★' : '☆'}
        </button>
      ))}
    </div>
  )
}
