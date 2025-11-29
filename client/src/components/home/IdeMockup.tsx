import { motion } from "framer-motion";
import { FileText, Database, Brain, Code2, Search, Sidebar, Terminal, Play } from "lucide-react";

export function IdeMockup() {
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800 ring-1 ring-white/10">
      {/* Window Controls */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-slate-950/50 flex items-center px-4 gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <div className="mx-auto text-[10px] font-mono text-slate-500">project-research-v1</div>
      </div>

      {/* IDE Layout */}
      <div className="flex h-full pt-8">
        {/* Sidebar */}
        <div className="w-48 border-r border-white/5 bg-slate-900/50 p-3 flex flex-col gap-4 hidden md:flex">
          <div className="space-y-1">
            <div className="text-xs font-medium text-slate-400 px-2 mb-2 uppercase tracking-wider">Explorer</div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-white/5 text-xs text-sky-300 font-mono">
              <FileText size={12} />
              <span>research_notes.md</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-xs text-slate-400 font-mono hover:bg-white/5 rounded cursor-pointer">
              <Database size={12} />
              <span>dataset_q3.csv</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-xs text-slate-400 font-mono hover:bg-white/5 rounded cursor-pointer">
              <Code2 size={12} />
              <span>analysis.py</span>
            </div>
          </div>
          
          <div className="mt-auto space-y-1">
             <div className="text-xs font-medium text-slate-400 px-2 mb-2 uppercase tracking-wider">Agents</div>
             <div className="flex items-center gap-2 px-2 py-1.5 text-xs text-violet-400 font-mono">
              <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              <span>Research Agent</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-slate-950">
          {/* Tabs */}
          <div className="flex border-b border-white/5">
            <div className="px-4 py-2 bg-slate-900 text-xs text-sky-300 border-r border-white/5 font-mono flex items-center gap-2">
              <FileText size={12} />
              research_notes.md
            </div>
            <div className="px-4 py-2 text-xs text-slate-500 border-r border-white/5 font-mono flex items-center gap-2">
              <Code2 size={12} />
              analysis.py
            </div>
          </div>

          {/* Editor Area */}
          <div className="flex-1 p-6 font-mono text-sm text-slate-300 leading-relaxed relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-12 border-r border-white/5 bg-slate-900/30 flex flex-col items-end pr-3 pt-6 text-slate-700 text-xs select-none">
              {Array.from({length: 20}).map((_, i) => <div key={i}>{i + 1}</div>)}
            </div>
            <div className="pl-16">
              <span className="text-violet-400"># Quantum Coherence Study</span>
              <br /><br />
              <span className="text-slate-500">{">"} Note: Initial findings from Q3 dataset analysis.</span>
              <br /><br />
              The momentum shifts observed in the <span className="text-sky-300 bg-sky-500/10 px-1 rounded">secondary particle stream</span> suggest a non-linear correlation with the observed field density.
              <br /><br />
              <div className="p-3 rounded bg-white/5 border border-white/5 my-2">
                <div className="flex items-center justify-between mb-2 border-b border-white/5 pb-2">
                   <span className="text-xs text-slate-400 flex items-center gap-2"><Brain size={12} /> AI Insight</span>
                   <span className="text-[10px] text-slate-600">Just now</span>
                </div>
                <p className="text-xs text-slate-400 italic">
                  Based on your previous notes, this aligns with the <span className="text-sky-300">Casimir Effect</span> variations noted in Paper #204. Would you like me to pull that reference?
                </p>
                <div className="mt-2 flex gap-2">
                  <button className="text-[10px] px-2 py-1 rounded bg-violet-500/20 text-violet-300 hover:bg-violet-500/30 transition-colors">Yes, link it</button>
                  <button className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-400 hover:bg-white/10 transition-colors">Summarize it</button>
                </div>
              </div>
              <br />
              Continued observation is required for the tertiary sector...
              <span className="inline-block w-2 h-4 bg-violet-500 ml-1 animate-pulse align-middle"></span>
            </div>
          </div>

          {/* Terminal/Console */}
          <div className="h-32 border-t border-white/5 bg-slate-900 p-3 font-mono text-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-500 uppercase text-[10px] tracking-wider">Terminal</span>
              <div className="flex gap-2">
                <Terminal size={12} className="text-slate-500" />
              </div>
            </div>
            <div className="text-green-400">$ python analysis.py --stream-live</div>
            <div className="text-slate-400 mt-1">Processing stream data... [================--] 82%</div>
            <div className="text-slate-500 mt-1">Detected anomaly in sector 7G. Auto-flagging for review.</div>
          </div>
        </div>

        {/* Right Panel - Agents */}
        <div className="w-64 border-l border-white/5 bg-slate-900/50 hidden lg:flex flex-col">
            <div className="p-3 border-b border-white/5 flex items-center justify-between">
               <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Active Agents</span>
               <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            </div>
            <div className="p-3 space-y-3">
              <div className="p-3 rounded bg-violet-500/10 border border-violet-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Brain size={14} className="text-violet-400" />
                  <span className="text-xs font-medium text-violet-200">Research Agent</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-normal">
                  Indexing 4 new papers related to "Antigravity mechanics".
                </p>
                <div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-violet-500 w-2/3"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
      
      {/* Floating "Run" FAB */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/30 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer z-10">
        <Play size={20} fill="currentColor" className="w-4 h-4 md:w-5 md:h-5" />
      </div>
    </div>
  );
}
