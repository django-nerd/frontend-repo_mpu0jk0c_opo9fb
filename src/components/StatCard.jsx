export default function StatCard({ label, value, sublabel, tone = "emerald" }) {
  const tones = {
    emerald: {
      ring: "ring-emerald-400/30",
      bg: "bg-emerald-500/10",
      text: "text-emerald-300",
      badge: "bg-emerald-500/20 text-emerald-200",
    },
    amber: {
      ring: "ring-amber-400/30",
      bg: "bg-amber-500/10",
      text: "text-amber-300",
      badge: "bg-amber-500/20 text-amber-200",
    },
    sky: {
      ring: "ring-sky-400/30",
      bg: "bg-sky-500/10",
      text: "text-sky-300",
      badge: "bg-sky-500/20 text-sky-200",
    },
  };

  const t = tones[tone] || tones.emerald;

  return (
    <div className={`rounded-2xl border border-white/10 ${t.bg} p-4 ring-1 ${t.ring}`}>
      <p className="text-xs text-slate-400 mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <p className={`text-2xl font-semibold ${t.text}`}>{value}</p>
        {sublabel && (
          <span className={`text-[10px] px-2 py-1 rounded-full ${t.badge}`}>{sublabel}</span>
        )}
      </div>
    </div>
  );
}
