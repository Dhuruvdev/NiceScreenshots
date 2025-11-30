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
  Globe,
  Sparkles,
  FileText,
  Folder,
  Settings,
  Clock,
  PanelLeftOpen,
  PanelLeftClose
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
  const [activeToolTab, setActiveToolTab] = useState("local");
  const [showLayoutPanel, setShowLayoutPanel] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setLeftSidebarOpen(false);
    } else {
      setLeftSidebarOpen(true);
    }
  }, [isMobile]);

  return (
    <div className="flex h-screen w-full bg-white font-sans overflow-hidden">
      
      {/* LEFT SIDEBAR */}
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
                         <Button variant="ghost" className="w-full justify-start gap-2 h-8 text-sm font-normal text-slate-600 hover:text-black hover:bg-slate-100 px-2">
                            <FileText size={14} />
                            Competitor Analysis.pdf
                         </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </ScrollArea>

            <div className="p-3 border-t border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 cursor-pointer transition-all group">
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
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {isMobile && leftSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setLeftSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 bg-white relative">
        
        {/* Header */}
        <header className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white z-20">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-black hover:bg-slate-100" onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}>
              {leftSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
            </Button>
            
            <div className="h-6 w-px bg-slate-200 mx-1" />
            
            {/* Design Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700">
              <div className="w-4 h-4 rounded flex items-center justify-center bg-purple-500">
                <Sparkles size={10} className="text-white" />
              </div>
              <span className="text-xs font-semibold">Design</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="hover:text-black cursor-pointer">Research Q3</span>
            <ChevronRight size={14} className="text-slate-300" />
            <span className="font-semibold text-slate-900 flex items-center gap-2">
              <FileText size={14} className="text-slate-400" />
              Launch Memo
            </span>
          </div>
        </header>

        {/* Content Area */}
        <ScrollArea className="flex-1 bg-white">
          <div className="max-w-3xl mx-auto py-8 px-6 min-h-full">
            <div className="prose prose-slate prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                Q3 Product Launch Strategy
              </h1>
              
              <p className="text-lg text-slate-600 mb-6">
                The primary objective of the Q3 launch is to penetrate the enterprise market with our new "Teams" feature set.
              </p>
              
              {/* AI Insight Block */}
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

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Quick Tools Tabs:</h2>
              <ul className="space-y-2 text-slate-700 list-disc pl-5">
                <li><strong>Local</strong> - Purple gradient button (active state)</li>
                <li><strong>Monitor</strong> - Desktop monitor icon</li>
                <li><strong>Agents</strong> - Three purple dots</li>
                <li><strong>Auth</strong> - Antenna/signal icon</li>
                <li><strong>Divider</strong> - Visual separator</li>
                <li><strong>New Tab</strong> - Plus button</li>
                <li><strong>Layout</strong> - Panel layout icon</li>
              </ul>

              <p className="text-slate-700 mt-6 mb-6">
                The design now perfectly matches your screenshots with the cyan accent colors, proper spacing, and all the UI components positioned exactly as shown. The IDE is ready for demonstration!
              </p>

              {/* Status Card */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 not-prose">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-xs text-slate-500">just now</span>
                </div>
                <p className="text-sm text-slate-800 font-medium mb-3">
                  Add design elements and precise UI matching to the IDE
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <Button variant="outline" size="sm" className="h-7 text-xs rounded-full border-slate-300 text-slate-600">
                    Rollback here
                  </Button>
                  <Button variant="outline" size="sm" className="h-7 text-xs rounded-full border-slate-300 text-slate-600">
                    Changes
                  </Button>
                  <Button variant="outline" size="sm" className="h-7 text-xs rounded-full border-slate-300 text-slate-600">
                    Preview
                  </Button>
                </div>
              </div>

              {/* Upgrade Banner */}
              <div className="mt-6 flex items-center justify-between bg-slate-50 rounded-xl p-4 border border-slate-200 not-prose">
                <span className="text-sm text-slate-700">You're in fast mode, upgrade for a smarter Agent</span>
                <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium gap-1">
                  <Sparkles size={12} />
                  Upgrade to Core
                </Button>
              </div>

              {/* Secondary Input */}
              <div className="mt-4 not-prose">
                <div className="bg-white rounded-xl border border-slate-200 p-3">
                  <p className="text-slate-400 text-sm mb-2">Make targeted changes, 5x faster...</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Paperclip size={18} className="text-slate-400" />
                      <Mic size={18} className="text-slate-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={18} className="text-amber-500" />
                      <SlidersHorizontal size={18} className="text-slate-400" />
                      <ArrowUp size={18} className="text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-32" />
          </div>
        </ScrollArea>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 bg-white">
          
          {/* Timer Header */}
          <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock size={16} className="text-cyan-500" />
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
              
              {/* Input Action Icons */}
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
                    className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center text-white hover:bg-cyan-500 transition-colors"
                    data-testid="button-send"
                  >
                    <ArrowUp size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tools Toolbar */}
          <div className="px-4 pb-4">
            <div className="flex items-center justify-center gap-1 bg-slate-100 rounded-2xl p-2 shadow-sm">
              {/* Local Button */}
              <button 
                onClick={() => { setActiveToolTab("local"); setShowLayoutPanel(false); }}
                className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  activeToolTab === "local" 
                    ? "bg-gradient-to-br from-violet-400 to-violet-500 shadow-md" 
                    : "bg-white hover:bg-slate-50"
                }`}
                data-testid="button-tool-local"
              >
                <div className={`w-5 h-5 rounded ${activeToolTab === "local" ? "bg-slate-900" : "bg-slate-400"}`} />
                {activeToolTab === "local" && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-violet-600 rounded-full" />
                )}
              </button>

              {/* Monitor Button */}
              <button 
                onClick={() => { setActiveToolTab("monitor"); setShowLayoutPanel(false); }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  activeToolTab === "monitor" ? "bg-white shadow-md" : "bg-white hover:bg-slate-50"
                }`}
                data-testid="button-tool-monitor"
              >
                <Monitor size={22} className="text-slate-500" />
              </button>

              {/* Agents Button */}
              <button 
                onClick={() => { setActiveToolTab("agents"); setShowLayoutPanel(false); }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  activeToolTab === "agents" ? "bg-white shadow-md" : "bg-white hover:bg-slate-50"
                }`}
                data-testid="button-tool-agents"
              >
                <AgentsIcon />
              </button>

              {/* Auth/Globe Button */}
              <button 
                onClick={() => { setActiveToolTab("auth"); setShowLayoutPanel(false); }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  activeToolTab === "auth" ? "bg-white shadow-md" : "bg-white hover:bg-slate-50"
                }`}
                data-testid="button-tool-auth"
              >
                <Globe size={22} className="text-slate-500" />
              </button>

              {/* Divider */}
              <div className="w-px h-8 bg-slate-300 mx-1" />

              {/* Plus/New Tab Button */}
              <button 
                onClick={() => { setActiveToolTab("newtab"); setShowLayoutPanel(false); }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  activeToolTab === "newtab" ? "bg-white shadow-md" : "bg-white hover:bg-slate-50"
                }`}
                data-testid="button-tool-newtab"
              >
                <Plus size={22} className="text-slate-500" />
              </button>

              {/* Layout Button - Toggles footer panel */}
              <button 
                onClick={() => { 
                  setActiveToolTab("layout"); 
                  setShowLayoutPanel(!showLayoutPanel); 
                }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  activeToolTab === "layout" ? "bg-white shadow-md" : "bg-white hover:bg-slate-50"
                }`}
                data-testid="button-tool-layout"
              >
                <LayoutIcon />
              </button>
            </div>
          </div>

          {/* Footer Toolbar - Shows when Layout is clicked */}
          <AnimatePresence>
            {showLayoutPanel && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                {/* Footer Toolbar */}
                <div className="px-4 pb-3 flex items-center gap-2">
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

                {/* Search Bar */}
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
        </div>
      </main>
    </div>
  );
}

function AgentsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="6" r="2.5" fill="#8B5CF6" />
      <circle cx="6" cy="12" r="2.5" fill="#8B5CF6" />
      <circle cx="18" cy="12" r="2.5" fill="#8B5CF6" />
      <circle cx="8" cy="18" r="2.5" fill="#8B5CF6" />
      <circle cx="16" cy="18" r="2.5" fill="#8B5CF6" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-500">
      <rect x="3" y="5" width="10" height="14" rx="2" />
      <rect x="11" y="5" width="10" height="14" rx="2" />
    </svg>
  );
}
