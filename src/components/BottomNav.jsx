import { Home, Package, CreditCard, Settings } from "lucide-react";

const items = [
  { key: "home", label: "Home", Icon: Home },
  { key: "sold", label: "Coconut Sold", Icon: Package },
  { key: "payments", label: "Payment History", Icon: CreditCard },
  { key: "settings", label: "Settings", Icon: Settings },
];

export default function BottomNav({ active = "home", onSelect }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-md">
        <div className="m-4 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <ul className="grid grid-cols-4">
            {items.map(({ key, label, Icon }) => {
              const isActive = active === key;
              return (
                <li key={key}>
                  <button
                    className={`flex w-full flex-col items-center gap-1 py-3 text-[11px] font-medium transition-colors ${
                      isActive ? "text-emerald-400" : "text-slate-300/80 hover:text-white"
                    }`}
                    onClick={() => onSelect && onSelect(key)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon size={20} strokeWidth={2} />
                    <span className="truncate px-1">{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
