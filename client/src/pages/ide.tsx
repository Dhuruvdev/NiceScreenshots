import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Layout, 
  FileText, 
  MessageSquare, 
  Clock, 
  Settings, 
  Plus, 
  ChevronRight, 
  MoreHorizontal,
  Command,
  Sparkles,
  Paperclip,
  Mic,
  Send,
  Menu,
  X,
  File,
  Folder,
  Hash
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Ide() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [aiPanelOpen, setAiPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("editor");

  return (
    <div className="flex h-screen w-full bg-[#0F1117] text-slate-300 font-sans overflow-hidden">
      
      {/* Left Sidebar */}
      <motion.aside 
        initial={{ width: 260 }}
        animate={{ width: sidebarOpen ? 260 : 0 }}
        className="flex-shrink-0 border-r border-white/5 bg-[#0F1117] flex flex-col overflow-hidden"
      >
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-white tracking-tight">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-[10px]">
              AM
            </div>
            Antimomentum
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-500 hover:text-white">
            <Settings size={14} />
          </Button>
        </div>

        <div className="px-3 mb-4">
          <Button className="w-full justify-start gap-2 bg-white/5 hover:bg-white/10 text-slate-200 border-0 font-medium">
            <Plus size={16} />
            New Project
          </Button>
        </div>

        <ScrollArea className="flex-1 px-3">
          <div className="space-y-6">
            {/* Workspace Section */}
            <div>
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Workspace</h3>
              <div className="space-y-0.5">
                {["Research Q3", "Product Strategy", "Marketing Plan"].map((item) => (
                  <Button key={item} variant="ghost" className="w-full justify-start gap-2 h-8 text-sm font-normal text-slate-400 hover:text-white hover:bg-white/5 px-2">
                    <Folder size={14} className="text-slate-600" />
                    {item}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Access */}
            <div>
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Recent</h3>
              <div className="space-y-0.5">
                <Button variant="ghost" className="w-full justify-start gap-2 h-8 text-sm font-normal text-slate-400 hover:text-white hover:bg-white/5 px-2">
                  <FileText size={14} className="text-cyan-500" />
                  User Interviews.pdf
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 h-8 text-sm font-normal text-slate-400 hover:text-white hover:bg-white/5 px-2">
                  <FileText size={14} className="text-violet-500" />
                  Launch Memo.md
                </Button>
              </div>
            </div>

            {/* AI Agents */}
            <div>
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Agents</h3>
              <div className="space-y-0.5">
                <Button variant="ghost" className="w-full justify-start gap-2 h-8 text-sm font-normal text-slate-400 hover:text-white hover:bg-white/5 px-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Research Assistant
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 h-8 text-sm font-normal text-slate-400 hover:text-white hover:bg-white/5 px-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  Editor Bot
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Bottom User Section */}
        <div className="p-3 border-t border-white/5">
          <div className="flex items-center gap-3 px-2 py-1 rounded-lg hover:bg-white/5 cursor-pointer">
            <Avatar className="w-8 h-8 rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-medium text-slate-200 truncate">Sarah Connor</div>
              <div className="text-[10px] text-slate-500 truncate">Pro Plan</div>
            </div>
            <MoreHorizontal size={14} className="text-slate-500" />
          </div>
        </div>
      </motion.aside>


      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#0F1117] relative">
        
        {/* Top Command Bar */}
        <header className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#0F1117]">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu size={16} />
            </Button>
            <div className="hidden md:flex items-center gap-1 text-sm text-slate-500">
               <span>Research Q3</span>
               <ChevronRight size={14} />
               <span className="text-white">Launch Memo</span>
            </div>
          </div>

          {/* Command Palette Trigger */}
          <div className="flex-1 max-w-lg mx-4">
            <button className="w-full flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg px-3 py-1.5 text-sm text-slate-500 transition-colors group">
              <Search size={14} className="group-hover:text-white transition-colors" />
              <span className="flex-1 text-left">Search or type a command...</span>
              <kbd className="hidden md:inline-flex h-5 items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-slate-400">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button 
               variant="ghost" 
               size="sm" 
               className={activeTab === 'editor' ? 'bg-white/10 text-white' : 'text-slate-500'}
               onClick={() => setActiveTab('editor')}
            >
              Write
            </Button>
            <Button 
               variant="ghost" 
               size="sm" 
               className={activeTab === 'visual' ? 'bg-white/10 text-white' : 'text-slate-500'}
               onClick={() => setActiveTab('visual')}
            >
              Visual
            </Button>
            <Separator orientation="vertical" className="h-4 bg-white/10 mx-2" />
            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500" onClick={() => setAiPanelOpen(!aiPanelOpen)}>
              <Layout size={16} />
            </Button>
          </div>
        </header>

        {/* Editor Canvas */}
        <div className="flex-1 overflow-hidden relative flex">
          <div className="flex-1 overflow-y-auto">
             <div className="max-w-3xl mx-auto py-12 px-8 min-h-full">
                <h1 className="text-4xl font-bold text-white mb-8 font-display">Q3 Product Launch Strategy</h1>
                
                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                  <p>
                    The primary objective of the Q3 launch is to penetrate the enterprise market with our new "Teams" feature set. 
                    Based on initial research, we have identified three key vectors for growth.
                  </p>
                  
                  <div className="my-6 p-4 rounded-xl bg-white/5 border border-white/5 not-prose">
                    <div className="flex items-center gap-2 mb-2 text-xs font-medium text-violet-400 uppercase tracking-wider">
                      <Sparkles size={12} />
                      AI Insight
                    </div>
                    <p className="text-sm text-slate-400 mb-3">
                      I've analyzed 15 competitor launches from the last year. Enterprise adoption typically spikes 
                      when security compliance (SOC2) is highlighted in the first fold of the landing page.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-7 text-xs border-white/10 bg-transparent hover:bg-white/5">Apply Suggestion</Button>
                      <Button size="sm" variant="ghost" className="h-7 text-xs text-slate-500">Dismiss</Button>
                    </div>
                  </div>

                  <h2>1. Market Analysis</h2>
                  <p>
                    Current market sentiment leans heavily towards consolidated tooling. Users are tired of switching between 
                    Notion, Linear, and Slack. <span className="bg-yellow-500/20 text-yellow-200 px-1 rounded cursor-pointer border-b border-yellow-500/30">citation needed</span>
                  </p>

                  <ul>
                    <li>Consolidation of toolchains</li>
                    <li>AI-native workflows</li>
                    <li>Real-time collaboration latency</li>
                  </ul>

                  <h2>2. Key Differentiators</h2>
                  <p>
                    Unlike traditional IDEs, Antimomentum focuses on the "pre-code" phase: thinking, planning, and researching.
                  </p>
                </div>
                
                {/* Bottom padding for scroll */}
                <div className="h-32" />
             </div>
          </div>
        </div>

        {/* Bottom Timeline Bar */}
        <div className="h-12 border-t border-white/5 bg-[#0F1117] flex items-center px-4 justify-between z-10">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-xs text-slate-500 hover:text-white gap-2">
              <Clock size={12} />
              Timeline View
            </Button>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs text-slate-500">All systems operational</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <span className="text-xs text-slate-600">Last saved 2m ago</span>
          </div>
        </div>

      </main>


      {/* Right AI Panel */}
      <AnimatePresence>
        {aiPanelOpen && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 320, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="border-l border-white/5 bg-[#0F1117] flex flex-col overflow-hidden hidden lg:flex"
          >
            <div className="p-4 border-b border-white/5">
              <div className="flex items-center gap-2 text-sm font-medium text-white mb-1">
                <Sparkles size={14} className="text-violet-500" />
                Research Assistant
              </div>
              <p className="text-xs text-slate-500">Context: Q3 Launch Strategy</p>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-6">
                {/* Message History */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Avatar className="w-6 h-6 mt-1">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="bg-white/5 p-3 rounded-lg rounded-tl-none text-sm text-slate-300 border border-white/5">
                        Find me statistics on enterprise tool consolidation in 2024.
                      </div>
                      <div className="text-[10px] text-slate-600">10:23 AM</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-6 h-6 mt-1 rounded bg-violet-600/20 flex items-center justify-center text-violet-400">
                      <BotIcon size={14} />
                    </div>
                    <div className="space-y-2">
                      <div className="bg-violet-500/5 p-3 rounded-lg rounded-tl-none text-sm text-slate-300 border border-violet-500/20">
                        <p className="mb-2">Here are key findings from Gartner and Forrester reports (2024):</p>
                        <ul className="list-disc pl-4 space-y-1 text-slate-400">
                          <li>73% of CIOs are prioritizing tool consolidation to reduce costs.</li>
                          <li>Average enterprise uses 143 SaaS apps, but wants to reduce this by 30%.</li>
                        </ul>
                      </div>
                      <div className="flex gap-2">
                         <Button size="sm" variant="outline" className="h-6 text-[10px] border-white/10 bg-white/5 hover:bg-white/10 text-slate-400">Cite Sources</Button>
                         <Button size="sm" variant="outline" className="h-6 text-[10px] border-white/10 bg-white/5 hover:bg-white/10 text-slate-400">Copy to Doc</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-[#0F1117]">
              <div className="relative">
                <Input 
                  placeholder="Ask AI to research, write, or code..." 
                  className="bg-white/5 border-white/10 text-slate-200 pr-10 focus-visible:ring-violet-500/50 placeholder:text-slate-600"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <Button size="icon" variant="ghost" className="h-6 w-6 text-slate-500 hover:text-white">
                    <Mic size={14} />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-1">
                   <Button size="icon" variant="ghost" className="h-6 w-6 text-slate-500 hover:text-white">
                      <Paperclip size={14} />
                   </Button>
                </div>
                <div className="text-[10px] text-slate-600">
                   CMD + Enter to send
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

function BotIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}
