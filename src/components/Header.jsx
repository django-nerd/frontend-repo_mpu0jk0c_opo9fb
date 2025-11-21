import { Menu, Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="sticky top-0 z-10 bg-slate-900/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
        <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10">
          <Menu size={20} />
        </button>
        <div className="text-center">
          <h1 className="text-lg font-semibold text-white tracking-tight">Farmer Dashboard</h1>
          <p className="text-xs text-slate-400">Coconut Sales & Updates</p>
        </div>
        <button className="relative p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full"></span>
        </button>
      </div>
    </div>
  );
}
