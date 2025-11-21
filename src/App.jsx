import { useState } from "react";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import EventList from "./components/EventList";
import NewsList from "./components/NewsList";
import BottomNav from "./components/BottomNav";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const stats = {
    totalSold: "12,450 nuts",
    pendingPayments: "₹ 86,500",
    nextPayout: "23 Nov",
  };

  const upcomingEvents = [
    { title: "Weekly collection at Village Center", date: "Fri, 22 Nov • 9:00 AM" },
    { title: "Buyers meetup & price update", date: "Mon, 25 Nov • 5:30 PM" },
  ];

  const news = [
    { title: "Coconut prices rise 3% in coastal markets", source: "AgriPulse" },
    { title: "New subsidy for drip irrigation announced", source: "Govt. Notice" },
  ];

  const tips = [
    "Dry mature nuts for 2-3 weeks before sale to reduce weight loss.",
    "Bundle invoices per buyer to speed up payments.",
    "Set reminders 3 days before scheduled pickup.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pb-24">
      <Header />

      <div className="max-w-md mx-auto p-4 space-y-4">
        {/* Greeting */}
        <div className="rounded-2xl border border-white/10 bg-[linear-gradient(120deg,rgba(16,185,129,0.12),transparent)] p-4">
          <p className="text-slate-300 text-sm">Welcome back</p>
          <h2 className="text-xl font-semibold text-white">Your coconut sales at a glance</h2>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Total Coconut Sold" value={stats.totalSold} sublabel="This season" tone="emerald" />
          <StatCard label="Pending Payments" value={stats.pendingPayments} sublabel={`Next payout ${stats.nextPayout}`} tone="amber" />
        </div>

        {/* Upcoming events */}
        <EventList title="Upcoming Events" items={upcomingEvents} />

        {/* News & updates */}
        <NewsList title="News & Updates" items={news} />

        {/* Quick tips */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <h3 className="text-sm font-semibold text-white mb-2">Quick Tips</h3>
          <ul className="list-disc list-inside space-y-1">
            {tips.map((t, i) => (
              <li key={i} className="text-sm text-slate-300">{t}</li>
            ))}
          </ul>
        </div>

        {/* Suggested additions section */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <h3 className="text-sm font-semibold text-white mb-2">Suggested items for home</h3>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• Today’s price per nut, kernel, copra</li>
            <li>• Last 7 days trend chart</li>
            <li>• Outstanding invoices by buyer</li>
            <li>• Next pickup schedule & vehicle status</li>
            <li>• Inventory: fresh, dried, damaged</li>
            <li>• Weather and rainfall alert</li>
            <li>• Fertilizer reminder & expense tracker</li>
            <li>• Quick action: create sale, add expense, request pickup</li>
          </ul>
        </div>
      </div>

      <BottomNav active={activeTab} onSelect={setActiveTab} />
    </div>
  );
}

export default App;
