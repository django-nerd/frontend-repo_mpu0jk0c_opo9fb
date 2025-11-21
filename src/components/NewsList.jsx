export default function NewsList({ title, items = [] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <button className="text-xs text-emerald-300 hover:text-emerald-200">View all</button>
      </div>
      <ul className="space-y-3">
        {items.length === 0 && (
          <li className="text-xs text-slate-400">No news</li>
        )}
        {items.map((it, idx) => (
          <li key={idx} className="text-sm text-white/90">
            <p className="leading-tight">{it.title}</p>
            {it.source && (
              <p className="text-[10px] text-slate-400">{it.source}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
