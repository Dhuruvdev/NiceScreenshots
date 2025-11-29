import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Layout, 
  FileText, 
  Clock, 
  Settings, 
  Plus, 
  ChevronRight, 
  MoreHorizontal,
  Sparkles,
  Paperclip,
  Mic,
  Menu,
  X,
  Folder,
  ArrowLeft,
  PanelRightOpen,
  PanelRightClose,
  PanelLeftOpen,
  PanelLeftClose
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Ide() {
  // State
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("editor");
  const isMobile = useIsMobile();

  // Auto-collapse panels on mobile
  useEffect(() => {
    if (isMobile) {
      setLeftSidebarOpen(false);
      setRightPanelOpen(false);
    } else {
      setLeftSidebarOpen(true);
      setRightPanelOpen(true);
    }
  }, [isMobile]);

  return (
    <div className="flex h-screen w-full bg-white text-slate-900 font-sans overflow-hidden selection:bg-black selection:text-white">
      
      {/* LEFT SIDEBAR - Desktop & Mobile */}
      <AnimatePresence mode="wait">
        {(leftSidebarOpen || !isMobile) && (
          <motion.aside 
            initial={isMobile ? { x: -280 } : { width: 280 }}
            animate={isMobile ? { x: leftSidebarOpen ? 0 : -280 } : { width: leftSidebarOpen ? 280 : 0 }}
            exit={isMobile ? { x: -280 } : { width: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`
              fixed md:relative z-40 h-full bg-white border-r border-slate-200 flex flex-col
              ${isMobile ? "w-[280px] shadow-2xl" : "flex-shrink-0 overflow-hidden"}
            `}
          >
            <div className="p-4 h-14 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-2 font-bold tracking-tight">
                <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-md text-xs">
                  AM
                </div>
                <span>Antimomentum</span>
              </div>
              {isMobile && (
                <Button variant="ghost" size="icon" onClick={() => setLeftSidebarOpen(false)}>
                  <X size={18} />
                </Button>
              )}
            </div>

            <div className="p-3">
              <Button className="w-full justify-start gap-2 bg-black text-white hover:bg-slate-800 shadow-sm">
                <Plus size={16} />
                New Project
              </Button>
            </div>

            <ScrollArea className="flex-1 px-3">
              <div className="space-y-6 py-2">
                {/* Workspace Section */}
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 px-2">Workspace</h3>
                  <div className="space-y-1">
                    {["Research Q3", "Product Strategy", "Marketing Plan"].map((item) => (
                      <Button key={item} variant="ghost" className="w-full justify-start gap-2 h-9 text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-100 px-2 border border-transparent hover:border-slate-200 transition-all">
                        <Folder size={16} />
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Recent */}
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 px-2">Recent</h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start gap-2 h-9 text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-100 px-2 border border-transparent hover:border-slate-200">
                      <FileText size={16} />
                      User Interviews.pdf
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2 h-9 text-sm font-medium text-slate-600 hover:text-black hover:bg-slate-100 px-2 border border-transparent hover:border-slate-200">
                      <FileText size={16} />
                      Launch Memo.md
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollArea>

            <div className="p-3 border-t border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 cursor-pointer transition-all">
                <Avatar className="w-8 h-8 rounded-md border border-slate-200">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <div className="text-sm font-bold text-slate-900 truncate">Sarah Connor</div>
                  <div className="text-xs text-slate-500 truncate">Pro Plan</div>
                </div>
                <Settings size={16} className="text-slate-400" />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile Overlay for Left Sidebar */}
      {isMobile && leftSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setLeftSidebarOpen(false)}
        />
      )}


      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 bg-white relative transition-all duration-300">
        
        {/* Header */}
        <header className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white z-20">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-black hover:bg-slate-100" onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}>
              {leftSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
            </Button>
            
            <div className="h-6 w-px bg-slate-200 mx-1 hidden md:block" />
            
            <div className="flex items-center gap-2 text-sm text-slate-500 overflow-hidden">
               <span className="hidden md:inline hover:text-black cursor-pointer hover:underline underline-offset-4">Research Q3</span>
               <ChevronRight size={14} className="flex-shrink-0 text-slate-300 hidden md:block" />
               <span className="font-semibold text-slate-900 truncate">Launch Memo</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
             {/* Mobile: Search Icon only */}
             <Button variant="ghost" size="icon" className="md:hidden text-slate-500">
                <Search size={18} />
             </Button>

             {/* Desktop: Mode Switcher */}
             <div className="hidden md:flex p-1 bg-slate-100 rounded-lg border border-slate-200">
                <button 
                   onClick={() => setActiveTab('editor')}
                   className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'editor' ? 'bg-white text-black shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Write
                </button>
                <button 
                   onClick={() => setActiveTab('visual')}
                   className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'visual' ? 'bg-white text-black shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Visual
                </button>
             </div>

             <Separator orientation="vertical" className="h-6 bg-slate-200 mx-1 hidden md:block" />

             <Button variant="ghost" size="icon" className={`text-slate-500 hover:text-black ${rightPanelOpen ? 'bg-slate-100' : ''}`} onClick={() => setRightPanelOpen(!rightPanelOpen)}>
               {rightPanelOpen ? <PanelRightClose size={18} /> : <PanelRightOpen size={18} />}
             </Button>
          </div>
        </header>

        {/* Editor Area */}
        <div className="flex-1 overflow-hidden relative flex flex-col">
          
          {/* Toolbar (Optional) */}
          <div className="border-b border-slate-100 px-4 md:px-8 py-2 flex items-center gap-4 overflow-x-auto no-scrollbar">
             <div className="flex items-center gap-1 p-1 rounded-md hover:bg-slate-100 cursor-pointer">
                <span className="text-sm font-serif font-bold">H1</span>
             </div>
             <div className="flex items-center gap-1 p-1 rounded-md hover:bg-slate-100 cursor-pointer">
                <span className="text-sm font-bold">B</span>
             </div>
             <div className="flex items-center gap-1 p-1 rounded-md hover:bg-slate-100 cursor-pointer">
                <span className="text-sm italic font-serif">I</span>
             </div>
             <div className="w-px h-4 bg-slate-200" />
             <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-black px-2 py-1 rounded-md hover:bg-slate-100">
                <Sparkles size={12} />
                Ask AI to edit
             </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-white">
             <div className="max-w-3xl mx-auto py-8 md:py-16 px-6 md:px-12 min-h-full">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 font-display tracking-tight leading-tight">
                  Q3 Product Launch Strategy
                </h1>
                
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="lead text-xl text-slate-600">
                    The primary objective of the Q3 launch is to penetrate the enterprise market with our new "Teams" feature set. 
                  </p>
                  
                  {/* AI Suggestion Block - White/Black Outline Style */}
                  <div className="my-8 p-0 rounded-xl border border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] not-prose overflow-hidden">
                    <div className="bg-slate-50 px-4 py-2 border-b border-slate-900 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                      <Sparkles size={14} />
                      AI Insight
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-slate-700 mb-4 font-medium leading-relaxed">
                        I've analyzed 15 competitor launches from the last year. Enterprise adoption typically spikes 
                        when security compliance (SOC2) is highlighted in the first fold.
                      </p>
                      <div className="flex gap-3">
                        <Button size="sm" className="h-8 bg-black text-white hover:bg-slate-800 rounded-md text-xs font-bold">
                          Apply Suggestion
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 border-slate-200 text-slate-600 hover:text-black rounded-md text-xs">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>

                  <h2>1. Market Analysis</h2>
                  <p>
                    Current market sentiment leans heavily towards consolidated tooling. Users are tired of switching between 
                    Notion, Linear, and Slack. <span className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-sm font-medium text-slate-900 align-middle cursor-pointer hover:bg-slate-200">citation needed</span>
                  </p>

                  <ul className="marker:text-black">
                    <li>Consolidation of toolchains into single-pane-of-glass interfaces.</li>
                    <li>AI-native workflows replacing manual data entry.</li>
                    <li>Real-time collaboration latency becoming a key decision factor.</li>
                  </ul>

                  <h2>2. Key Differentiators</h2>
                  <p>
                    Unlike traditional IDEs, Antimomentum focuses on the "pre-code" phase: thinking, planning, and researching.
                  </p>
                </div>
                
                <div className="h-32" />
             </div>
          </div>
        </div>

        {/* Bottom Timeline Bar */}
        <div className="h-10 border-t border-slate-200 bg-white flex items-center px-4 justify-between z-20 text-xs font-medium">
          <div className="flex items-center gap-4 text-slate-500">
            <div className="flex items-center gap-2 hover:text-black cursor-pointer">
              <Clock size={14} />
              <span className="hidden sm:inline">Timeline View</span>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-green-600">
              <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
              <span>Online</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
             <span>Autosaved</span>
          </div>
        </div>
      </main>


      {/* RIGHT AI PANEL - Desktop & Mobile */}
      <AnimatePresence>
        {(rightPanelOpen || (isMobile && rightPanelOpen)) && (
          <>
             {/* Mobile Overlay */}
             {isMobile && (
                <div 
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                  onClick={() => setRightPanelOpen(false)}
                />
             )}
             
             <motion.aside
               initial={isMobile ? { x: "100%" } : { width: 0, opacity: 0 }}
               animate={isMobile ? { x: 0 } : { width: 320, opacity: 1 }}
               exit={isMobile ? { x: "100%" } : { width: 0, opacity: 0 }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
               className={`
                 fixed md:relative right-0 z-50 h-full bg-white border-l border-slate-200 flex flex-col
                 ${isMobile ? "w-[85%] max-w-[320px] shadow-2xl" : "flex-shrink-0"}
               `}
             >
              <div className="p-4 h-14 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Sparkles size={16} className="text-violet-600" />
                  Research Assistant
                </div>
                {isMobile && (
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setRightPanelOpen(false)}>
                    <X size={16} />
                  </Button>
                )}
              </div>

              <ScrollArea className="flex-1 p-4 bg-slate-50/30">
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <Avatar className="w-8 h-8 rounded-md border border-slate-200 bg-white">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 max-w-[85%]">
                      <div className="bg-white p-3 rounded-xl rounded-tl-none text-sm text-slate-700 border border-slate-200 shadow-sm">
                        Find me statistics on enterprise tool consolidation in 2024.
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center flex-shrink-0">
                      <Sparkles size={14} />
                    </div>
                    <div className="space-y-3 max-w-[90%]">
                      <div className="bg-white p-4 rounded-xl rounded-tl-none text-sm text-slate-700 border border-slate-200 shadow-sm">
                        <p className="mb-3 font-medium">Key findings from Gartner (2024):</p>
                        <ul className="list-disc pl-4 space-y-2 text-slate-600">
                          <li><strong className="text-slate-900">73% of CIOs</strong> are prioritizing tool consolidation.</li>
                          <li>Enterprises want to reduce SaaS sprawl by <strong className="text-slate-900">30%</strong>.</li>
                        </ul>
                      </div>
                      <div className="flex gap-2">
                         <Button size="sm" variant="outline" className="h-7 text-xs bg-white hover:bg-slate-50 border-slate-200 text-slate-600">Cite</Button>
                         <Button size="sm" variant="outline" className="h-7 text-xs bg-white hover:bg-slate-50 border-slate-200 text-slate-600">Copy</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="p-4 border-t border-slate-200 bg-white">
                <div className="relative shadow-sm">
                  <Input 
                    placeholder="Ask AI..." 
                    className="pr-10 border-slate-200 focus-visible:ring-black focus-visible:border-black bg-slate-50"
                  />
                  <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-slate-400 hover:text-black">
                    <Mic size={16} />
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-black -ml-2">
                      <Paperclip size={16} />
                   </Button>
                  <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                     Context: Launch Memo
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Mobile FAB for AI Panel */}
      {isMobile && !rightPanelOpen && (
        <button
           onClick={() => setRightPanelOpen(true)} 
           className="fixed bottom-16 right-4 z-50 w-12 h-12 bg-black text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform border-2 border-white"
        >
          <Sparkles size={20} />
        </button>
      )}

    </div>
  );
}
