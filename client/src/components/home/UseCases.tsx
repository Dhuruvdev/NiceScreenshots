import { Card } from "@/components/ui/card";
import { ArrowRight, GraduationCap, BarChart3, FileBadge, Presentation } from "lucide-react";

export function UseCases() {
  const cases = [
    { title: "Academic research", icon: GraduationCap, desc: "Organize papers, citations, and raw data." },
    { title: "Data & analytics teams", icon: BarChart3, desc: "Combine SQL queries, Python notebooks, and reports." },
    { title: "Product & strategy docs", icon: FileBadge, desc: "Draft specs linked directly to user research." },
    { title: "Client reports & proposals", icon: Presentation, desc: "Turn messy research into polished deliverables." },
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200" id="use-cases">
      <div className="container mx-auto px-6">
         <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Built for deep work</h2>
            <a href="#" className="text-brand-violet font-medium hover:underline">View all use cases</a>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((item, i) => (
               <Card key={i} className="p-6 bg-white hover:shadow-lg transition-all group cursor-pointer border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-brand-violet group-hover:text-white transition-colors">
                     <item.icon size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{item.desc}</p>
                  <div className="flex items-center text-xs font-medium text-brand-violet opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                     See example workflow <ArrowRight size={12} className="ml-1" />
                  </div>
               </Card>
            ))}
         </div>
      </div>
    </section>
  );
}
