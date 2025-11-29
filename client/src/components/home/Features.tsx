import { motion } from "framer-motion";
import { FileText, PieChart, Table, Brain, Bot, Database, Workflow, Terminal, Layout, Command } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Features() {
  return (
    <div className="space-y-32 py-24">
      
      {/* Section 4: All-in-one research cockpit */}
      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Screenshot Collage (Simulated with CSS cards) */}
          <div className="relative h-[500px] w-full bg-slate-100 rounded-[2.5rem] p-8 overflow-hidden group">
             {/* Abstract Dotted BG */}
             <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" />
             
             {/* Floating Cards */}
             <motion.div 
                whileHover={{ y: -10 }}
                className="absolute top-12 left-12 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-10 rotate-[-3deg]"
             >
                <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                  <FileText size={14} className="text-violet-500" />
                  <span className="text-xs font-bold text-slate-700">Project_Brief.pdf</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-slate-100 rounded w-3/4" />
                  <div className="h-2 bg-slate-100 rounded w-full" />
                  <div className="h-2 bg-slate-100 rounded w-5/6" />
                </div>
             </motion.div>

             <motion.div 
                whileHover={{ y: -10 }}
                className="absolute bottom-20 right-12 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-20 rotate-[2deg]"
             >
                <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                  <PieChart size={14} className="text-cyan-500" />
                  <span className="text-xs font-bold text-slate-700">Q3 Data Analysis</span>
                </div>
                <div className="flex items-end gap-2 h-24">
                  <div className="flex-1 bg-cyan-100 rounded-t-md h-[60%]" />
                  <div className="flex-1 bg-cyan-200 rounded-t-md h-[80%]" />
                  <div className="flex-1 bg-cyan-500 rounded-t-md h-[40%]" />
                  <div className="flex-1 bg-violet-400 rounded-t-md h-[90%]" />
                </div>
             </motion.div>

             <motion.div 
                whileHover={{ y: -10 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-slate-900 text-white rounded-xl shadow-2xl p-5 z-30"
             >
                <div className="flex items-center gap-2 mb-3">
                  <Table size={14} className="text-slate-400" />
                  <span className="text-xs font-mono text-slate-400">data_view.csv</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-400">
                   <div className="p-2 bg-white/5 rounded">ID: 402</div>
                   <div className="p-2 bg-white/5 rounded">Val: 9.2</div>
                   <div className="p-2 bg-white/5 rounded">St: OK</div>
                   <div className="p-2 bg-white/5 rounded">ID: 403</div>
                   <div className="p-2 bg-white/5 rounded">Val: 8.1</div>
                   <div className="p-2 bg-white/5 rounded">St: ERR</div>
                </div>
             </motion.div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">An IDE for thinking, not just coding.</h2>
            
            <div className="space-y-6">
              {[
                { title: "Research Canvas", desc: "Drag notes, docs, PDFs, and datasets into a single infinite space.", icon: Layout },
                { title: "Office Mode", desc: "Write reports, briefs, and documentation without leaving the IDE.", icon: FileText },
                { title: "Timeline Streams", desc: "Replay how a project evolved, step by step.", icon: Workflow },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-violet">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Agentic AI */}
      <section className="bg-slate-50 py-24 border-y border-slate-100 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Agentic AI for real work</h2>
              <p className="text-lg text-slate-600">Not just a chatbot. Dedicated agents that work alongside you to process data, draft documents, and manage workflows.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Research Agent", desc: "Summarises papers, links notes to sources.", icon: Brain, color: "bg-violet-500" },
                { title: "Office Agent", desc: "Drafts project updates, meeting notes.", icon: Bot, color: "bg-pink-500" },
                { title: "Data Agent", desc: "Runs queries, updates charts, writes insights.", icon: Database, color: "bg-cyan-500" },
                { title: "Workflow Agent", desc: "Chains actions together on a schedule.", icon: Workflow, color: "bg-orange-500" },
              ].map((agent, i) => (
                <Card key={i} className="p-6 bg-white border-slate-200 hover:border-brand-violet/30 hover:shadow-xl transition-all duration-300 group">
                   <div className={`w-12 h-12 rounded-2xl ${agent.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <agent.icon className={agent.color.replace('bg-', 'text-')} size={24} />
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-2">{agent.title}</h3>
                   <p className="text-sm text-slate-600 leading-relaxed">{agent.desc}</p>
                </Card>
              ))}
            </div>

            {/* Visual Flow Diagram (Simplified) */}
            <div className="mt-16 flex justify-center items-center gap-4 opacity-60">
               <div className="px-4 py-2 rounded-full border border-slate-300 text-slate-400 text-xs">Input</div>
               <div className="w-12 h-px bg-slate-300" />
               <div className="px-4 py-2 rounded-full border border-brand-violet text-brand-violet text-xs font-medium bg-violet-50">Agent Processing</div>
               <div className="w-12 h-px bg-slate-300" />
               <div className="px-4 py-2 rounded-full border border-slate-300 text-slate-400 text-xs">Output</div>
            </div>
         </div>
      </section>

      {/* Section 6: Built like an IDE */}
      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Left: Text */}
           <div className="order-2 lg:order-1 space-y-8">
             <h2 className="text-4xl font-bold text-slate-900">Built like an IDE,<br/>feels like a notebook.</h2>
             
             <div className="space-y-4">
               {[
                 { label: "Keyboard shortcuts", icon: Command },
                 { label: "Command palette", icon: Terminal },
                 { label: "Multi-panel layout", icon: Layout },
               ].map((feature, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <feature.icon className="text-slate-400" size={20} />
                    <span className="font-medium text-slate-700">{feature.label}</span>
                 </div>
               ))}
             </div>
           </div>

           {/* Right: UI Mock */}
           <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-10 bg-gradient-to-bl from-cyan-100 to-violet-100 rounded-full blur-3xl opacity-50 -z-10" />
              <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden aspect-[4/3] p-4 flex flex-col">
                 <div className="flex items-center justify-between mb-4 text-slate-500">
                    <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-slate-700" />
                       <div className="w-3 h-3 rounded-full bg-slate-700" />
                    </div>
                    <div className="text-[10px] font-mono">CMD + K to search</div>
                 </div>
                 <div className="flex-1 flex gap-4">
                    <div className="w-1/3 bg-slate-800/50 rounded-lg border border-white/5 p-3">
                       <div className="w-full h-2 bg-slate-700 rounded mb-2" />
                       <div className="w-2/3 h-2 bg-slate-700 rounded mb-4" />
                       <div className="w-full h-20 bg-slate-700/30 rounded" />
                    </div>
                    <div className="flex-1 bg-slate-800/50 rounded-lg border border-white/5 p-3">
                       <div className="w-1/2 h-2 bg-slate-700 rounded mb-4" />
                       <div className="space-y-2">
                          <div className="w-full h-2 bg-slate-700/50 rounded" />
                          <div className="w-full h-2 bg-slate-700/50 rounded" />
                          <div className="w-5/6 h-2 bg-slate-700/50 rounded" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
