import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Paperclip,
  Mic,
  Zap,
  SlidersHorizontal,
  ArrowUp,
  Monitor,
  Plus,
  Search,
  X,
  Lock,
  Database,
  Users,
  LayoutGrid,
  Check,
  ChevronDown,
  ChevronRight,
  Sparkles,
  FileText,
  Folder,
  Settings,
  Clock,
  ArrowLeft,
  RotateCcw,
  MoreVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Ide() {
  const [inputValue, setInputValue] = useState("");
  const [activeToolTab, setActiveToolTab] = useState("agents");
  const [showLayoutPanel, setShowLayoutPanel] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("design");
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setLeftSidebarOpen(false);
    }
  }, [isMobile]);

  return (
    <div className="h-screen w-full bg-slate-100 font-sans overflow-hidden flex flex-col">
      
      {/* Main Container with zoom effect */}
      <motion.div 
        className="flex-1 flex flex-col min-h-0"
        animate={{
          scale: showLayoutPanel ? 0.85 : 1,
          y: showLayoutPanel ? -20 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          transformOrigin: "top center",
        }}
      >
        <div className={`flex-1 flex flex-col min-h-0 bg-white ${showLayoutPanel ? "rounded-2xl shadow-xl border border-slate-200 m-3" : ""}`}>
          
          {/* Top Navbar - macOS Style */}
          <header className="h-12 border-b border-slate-200 flex items-center justify-between px-3 bg-white z-20 shrink-0">
            {/* Left Section */}
            <div className="flex items-center gap-1">
              <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors" data-testid="button-back">
                <ArrowLeft size={20} className="text-slate-600" />
              </button>
              <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors" data-testid="button-history">
                <RotateCcw size={18} className="text-slate-600" />
              </button>
            </div>

            {/* Center Section - Agent Branding */}
            <div className="flex items-center gap-2">
              <AgentLogoIcon />
              <span className="text-base font-semibold text-slate-800">Agent</span>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-1">
              <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors" data-testid="button-add-tab">
                <AddTabIcon />
              </button>
              <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors" data-testid="button-menu">
                <MoreVertical size={20} className="text-slate-600" />
              </button>
            </div>
          </header>

          {/* Tab Bar */}
          <div className="h-10 border-b border-slate-200 flex items-end px-4 bg-white shrink-0">
            <button 
              onClick={() => setActiveTab("design")}
              className={`relative px-3 pb-2 text-sm font-medium transition-colors ${
                activeTab === "design" ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
              }`}
              data-testid="tab-design"
            >
              design
              {activeTab === "design" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
              )}
            </button>
          </div>

          {/* Content Area - Scrollable */}
          <div className="flex-1 overflow-auto min-h-0">
            <div className="max-w-3xl mx-auto py-8 px-6">
              <div className="prose prose-slate prose-lg max-w-none">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                  Q3 Product Launch Strategy
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 mb-6">
                  The primary objective of the Q3 launch is to penetrate the enterprise market with our new "Teams" feature set.
                </p>
                
                {/* AI Insight Block */}
                <div className="my-8 p-0 rounded-xl border border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] not-prose overflow-hidden">
                  <div className="bg-slate-50 px-4 py-2 border-b border-slate-900 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                    <Sparkles size={14} />
                    AI Insight
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-sm text-slate-700 mb-4 font-medium leading-relaxed">
                      I've analyzed 15 competitor launches from the last year. Enterprise adoption typically spikes 
                      when security compliance (SOC2) is highlighted in the first fold.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      <Button size="sm" className="h-8 bg-black text-white hover:bg-slate-800 rounded-md text-xs font-bold">
                        Apply Suggestion
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 border-slate-200 text-slate-600 hover:text-black rounded-md text-xs">
                        Dismiss
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Fixed at bottom of content area */}
          <div className="border-t border-slate-200 bg-white shrink-0">
            
            {/* Timer Header */}
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock size={16} className="text-slate-400" />
                <span>1 minute of work</span>
              </div>
              <ChevronDown size={16} className="text-slate-400" />
            </div>

            {/* Main Input Box with Cyan Border */}
            <div className="px-4 py-4">
              <div className="relative bg-white rounded-2xl border-2 border-cyan-400 shadow-sm overflow-hidden">
                <Input 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Make, test, iterate..." 
                  className="border-0 focus-visible:ring-0 p-4 h-auto text-base placeholder:text-slate-400 bg-transparent pr-4"
                  data-testid="input-chat-message"
                />
                
                <div className="flex items-center justify-between px-4 pb-3">
                  <div className="flex items-center gap-4">
                    <button className="text-slate-400 hover:text-slate-600 transition-colors" data-testid="button-attach">
                      <Paperclip size={20} />
                    </button>
                    <button className="text-slate-400 hover:text-slate-600 transition-colors" data-testid="button-mic">
                      <Mic size={20} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="text-amber-500 hover:text-amber-600 transition-colors" data-testid="button-zap">
                      <Zap size={20} />
                    </button>
                    <button className="text-slate-400 hover:text-slate-600 transition-colors" data-testid="button-sliders">
                      <SlidersHorizontal size={20} />
                    </button>
                    <button 
                      className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-colors"
                      data-testid="button-send"
                    >
                      <ArrowUp size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tools Toolbar - macOS Style */}
            <div className="px-4 pb-4">
              <div className="flex items-center justify-center gap-1 bg-slate-100/80 backdrop-blur-sm rounded-2xl p-1.5 shadow-sm border border-slate-200/50">
                
                {/* Local Button - Purple square with black square */}
                <button 
                  onClick={() => { setActiveToolTab("local"); setShowLayoutPanel(false); }}
                  className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    activeToolTab === "local" 
                      ? "bg-violet-200 shadow-sm" 
                      : "hover:bg-white/60"
                  }`}
                  data-testid="button-tool-local"
                >
                  <div className="w-8 h-8 bg-violet-400 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-slate-900 rounded-sm" />
                  </div>
                </button>

                {/* Monitor Button */}
                <button 
                  onClick={() => { setActiveToolTab("monitor"); setShowLayoutPanel(false); }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    activeToolTab === "monitor" ? "bg-white shadow-sm" : "hover:bg-white/60"
                  }`}
                  data-testid="button-tool-monitor"
                >
                  <MonitorIcon />
                </button>

                {/* Agents Button - 3x3 Grid of purple dots */}
                <button 
                  onClick={() => { setActiveToolTab("agents"); setShowLayoutPanel(false); }}
                  className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    activeToolTab === "agents" ? "bg-slate-200/80 shadow-sm" : "hover:bg-white/60"
                  }`}
                  data-testid="button-tool-agents"
                >
                  <AgentsGridIcon />
                  {activeToolTab === "agents" && (
                    <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-1 bg-cyan-400 rounded-full" />
                  )}
                </button>

                {/* Globe/Antenna Button with cross */}
                <button 
                  onClick={() => { setActiveToolTab("globe"); setShowLayoutPanel(false); }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    activeToolTab === "globe" ? "bg-white shadow-sm" : "hover:bg-white/60"
                  }`}
                  data-testid="button-tool-globe"
                >
                  <GlobeAntennaIcon />
                </button>

                {/* Divider */}
                <div className="w-px h-7 bg-slate-300 mx-1" />

                {/* Plus Button */}
                <button 
                  onClick={() => { setActiveToolTab("plus"); setShowLayoutPanel(false); }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    activeToolTab === "plus" ? "bg-white shadow-sm" : "hover:bg-white/60"
                  }`}
                  data-testid="button-tool-plus"
                >
                  <Plus size={22} className="text-slate-500" strokeWidth={1.5} />
                </button>

                {/* Layout Button - Two rectangles */}
                <button 
                  onClick={() => { 
                    setActiveToolTab("layout"); 
                    setShowLayoutPanel(!showLayoutPanel); 
                  }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    activeToolTab === "layout" ? "bg-white shadow-sm" : "hover:bg-white/60"
                  }`}
                  data-testid="button-tool-layout"
                >
                  <LayoutPanelIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Toolbar - Always visible at bottom when Layout is active */}
      <AnimatePresence>
        {showLayoutPanel && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white border-t border-slate-200 shrink-0"
          >
            <div className="px-4 py-3 flex items-center gap-2">
              <div className="flex-1 flex items-center gap-2">
                <button className="flex-1 flex flex-col items-center justify-center py-3 px-2 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors" data-testid="button-secrets">
                  <Lock size={20} className="text-slate-600 mb-1" />
                  <span className="text-xs text-slate-600 font-medium">Secrets</span>
                </button>

                <button className="flex-1 flex flex-col items-center justify-center py-3 px-2 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors" data-testid="button-database">
                  <Database size={20} className="text-slate-600 mb-1" />
                  <span className="text-xs text-slate-600 font-medium">Database</span>
                </button>

                <button className="flex-1 flex flex-col items-center justify-center py-3 px-2 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors" data-testid="button-auth-footer">
                  <Users size={20} className="text-slate-600 mb-1" />
                  <span className="text-xs text-slate-600 font-medium">Auth</span>
                </button>

                <button className="flex-1 flex flex-col items-center justify-center py-3 px-2 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors" data-testid="button-newtab-footer">
                  <Plus size={20} className="text-slate-600 mb-1" />
                  <span className="text-xs text-slate-600 font-medium">New Tab</span>
                </button>
              </div>
            </div>

            <div className="px-4 pb-4 flex items-center gap-2">
              <button className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200" data-testid="button-files">
                <LayoutGrid size={20} className="text-slate-600" />
              </button>
              <div className="flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200 px-4 py-3">
                <span className="text-slate-400 flex-1">Search...</span>
                <Search size={18} className="text-slate-400" />
              </div>
              <button 
                className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200" 
                data-testid="button-close-search"
                onClick={() => setShowLayoutPanel(false)}
              >
                <X size={20} className="text-slate-600" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LEFT SIDEBAR - Overlay */}
      <AnimatePresence>
        {leftSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setLeftSidebarOpen(false)}
            />
            
            <motion.aside 
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 z-50 h-full w-[280px] bg-white border-r border-slate-200 flex flex-col shadow-2xl"
            >
              <div className="p-4 h-14 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-2 font-bold tracking-tight">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-md text-xs">
                    AM
                  </div>
                  <span>Antimomentum</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setLeftSidebarOpen(false)}>
                  <X size={18} />
                </Button>
              </div>

              <div className="p-3">
                <Button className="w-full justify-start gap-2 bg-black text-white hover:bg-slate-800 shadow-sm">
                  <Plus size={16} />
                  New Project
                </Button>
              </div>

              <ScrollArea className="flex-1 px-3">
                <div className="space-y-6 py-2">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 px-2">Workspace</h3>
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                      <AccordionItem value="item-1" className="border-0">
                        <AccordionTrigger className="py-2 px-2 hover:bg-slate-100 rounded-md hover:no-underline text-sm font-medium text-slate-700 [&[data-state=open]>svg]:rotate-90">
                          <div className="flex items-center gap-2">
                             <Folder size={16} className="text-slate-500" />
                             <span>Research Q3</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 pb-2 pt-1">
                           <Button variant="ghost" className="w-full justify-start gap-2 h-8 text-sm font-normal text-slate-600 hover:text-black hover:bg-slate-100 px-2">
                              <FileText size={14} />
                              Launch Memo.md
                           </Button>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </ScrollArea>

              <div className="p-3 border-t border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white cursor-pointer transition-all group">
                  <Avatar className="w-8 h-8 rounded-md border border-slate-200">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <div className="text-sm font-bold text-slate-900 truncate">Sarah Connor</div>
                    <div className="text-xs text-slate-500 truncate">Pro Plan</div>
                  </div>
                  <Settings size={16} className="text-slate-400 group-hover:text-slate-600" />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Agent Logo Icon - 3x3 purple dots for navbar
function AgentLogoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="2.5" fill="#8B5CF6" />
      <circle cx="12" cy="6" r="2.5" fill="#8B5CF6" />
      <circle cx="18" cy="6" r="2.5" fill="#8B5CF6" />
      <circle cx="6" cy="12" r="2.5" fill="#8B5CF6" />
      <circle cx="12" cy="12" r="2.5" fill="#8B5CF6" />
      <circle cx="18" cy="12" r="2.5" fill="#8B5CF6" />
      <circle cx="6" cy="18" r="2.5" fill="#8B5CF6" />
      <circle cx="12" cy="18" r="2.5" fill="#8B5CF6" />
      <circle cx="18" cy="18" r="2.5" fill="#8B5CF6" />
    </svg>
  );
}

// 3x3 Grid of purple dots for toolbar
function AgentsGridIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="2.2" fill="#8B5CF6" />
      <circle cx="12" cy="6" r="2.2" fill="#8B5CF6" />
      <circle cx="18" cy="6" r="2.2" fill="#8B5CF6" />
      <circle cx="6" cy="12" r="2.2" fill="#8B5CF6" />
      <circle cx="12" cy="12" r="2.2" fill="#8B5CF6" />
      <circle cx="18" cy="12" r="2.2" fill="#8B5CF6" />
      <circle cx="6" cy="18" r="2.2" fill="#8B5CF6" />
      <circle cx="12" cy="18" r="2.2" fill="#8B5CF6" />
      <circle cx="18" cy="18" r="2.2" fill="#8B5CF6" />
    </svg>
  );
}

// Monitor Icon - outline style matching screenshot
function MonitorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

// Globe with antenna/cross icon
function GlobeAntennaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <circle cx="12" cy="2" r="1" fill="#64748B" stroke="none" />
    </svg>
  );
}

// Add Tab Icon - square with plus
function AddTabIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

// Layout Panel Icon - two rectangles side by side
function LayoutPanelIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5">
      <rect x="3" y="5" width="7" height="14" rx="1" />
      <rect x="14" y="5" width="7" height="14" rx="1" />
    </svg>
  );
}
