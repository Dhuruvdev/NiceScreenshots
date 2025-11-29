import { Clock, Zap, Layout } from "lucide-react";

export function TrustStrip() {
  const stats = [
    { icon: Clock, label: "Save 5+ hours per week" },
    { icon: Zap, label: "Replace 6+ tools" },
    { icon: Layout, label: "Designed for research & office teams" }
  ];

  return (
    <section className="py-8 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-1.5 rounded-full bg-gradient-to-br from-violet-100 to-cyan-100 text-slate-700">
                <stat.icon size={16} className="text-brand-violet" />
              </div>
              <span className="text-sm font-medium text-slate-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
