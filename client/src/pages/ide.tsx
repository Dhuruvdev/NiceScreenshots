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
  Sparkles,
  Paperclip,
  Mic,
  Menu,
  X,
  Folder,
  PanelRightOpen,
  PanelRightClose,
  PanelLeftOpen,
  PanelLeftClose,
  Zap,
  SlidersHorizontal,
  ArrowUp,
  Image,
  Link as LinkIcon,
  MessageSquare,
  MoreHorizontal,
  Trash2,
  Edit2,
  Copy,
  Share2,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent
} from "@/components/ui/context-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Ide() {
  // State
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("editor");
  const [showIntegrations, setShowIntegrations] = useState(false);
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
                
                {/* Workspace Tree (Recursive-like) */}
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
                         <ContextMenu>
                            <ContextMenuTrigger>
                              <Button variant="ghost" className="w-full justify-start gap-2 h-8 text-sm font-normal text-slate-600 hover:text-black hover:bg-slate-100 px-2">
                                <FileText size={14} />
                                Launch Memo.md
                              </Button>
                            </ContextMenuTrigger>
                            <ContextMenuContent className="w-48">
                              <ContextMenuItem><Edit2 size={14} className="mr-2"/> Rename</ContextMenuItem>
                              <ContextMenuItem><Copy size={14} className="mr-2"/> Duplicate</ContextMenuItem>
                              <ContextMenuItem><Share2 size={14} className="mr-2"/> Share</ContextMenuItem>
                              <ContextMenuSeparator />
                              <ContextMenuItem className="text-red-600"><Trash2 size={14} className="mr-2"/> Delete</ContextMenuItem>
                            </ContextMenuContent>
                         </ContextMenu>

                         <ContextMenu>
                            <ContextMenuTrigger>
                              <Button variant="ghost" className="w-full justify-start gap-2 h-8 text-sm font-normal text-slate-600 hover:text-black hover:bg-slate-100 px-2">
                                <FileText size={14} />
                                Competitor Analysis.pdf
                              </Button>
                            </ContextMenuTrigger>
                            <ContextMenuContent className="w-48">
                               <ContextMenuItem><Download size={14} className="mr-2"/> Download</ContextMenuItem>
                               <ContextMenuItem><Share2 size={14} className="mr-2"/> Share</ContextMenuItem>
                            </ContextMenuContent>
                         </ContextMenu>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-0">
                       <AccordionTrigger className="py-2 px-2 hover:bg-slate-100 rounded-md hover:no-underline text-sm font-medium text-slate-700 [&[data-state=open]>svg]:rotate-90">
                        <div className="flex items-center gap-2">
                           <Folder size={16} className="text-slate-500" />
                           <span>Product Strategy</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 pb-2 pt-1">
                         <Button variant="ghost" className="w-full justify-start gap-2 h-8 text-sm font-normal text-slate-600 hover:text-black hover:bg-slate-100 px-2">
                            <FileText size={14} />
                            Roadmap 2025.md
                         </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Integrations Tab */}
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 px-2">Connect</h3>
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowIntegrations(true)}
                    className={`w-full justify-start gap-2 h-9 text-sm font-medium px-2 border border-transparent transition-all ${showIntegrations ? 'bg-slate-100 text-black border-slate-200' : 'text-slate-600 hover:text-black hover:bg-slate-100 hover:border-slate-200'}`}
                  >
                    <LinkIcon size={16} />
                    Integrations
                  </Button>
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
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-500 overflow-hidden">
               <span className="hidden md:inline hover:text-black cursor-pointer hover:underline underline-offset-4">Research Q3</span>
               <ChevronRight size={14} className="flex-shrink-0 text-slate-300 hidden md:block" />
               <span className="font-semibold text-slate-900 truncate flex items-center gap-2">
                 <FileText size={14} className="text-slate-400" />
                 Launch Memo
               </span>
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
                   onClick={() => { setActiveTab('editor'); setShowIntegrations(false); }}
                   className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${!showIntegrations && activeTab === 'editor' ? 'bg-white text-black shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Write
                </button>
                <button 
                   onClick={() => { setActiveTab('visual'); setShowIntegrations(false); }}
                   className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${!showIntegrations && activeTab === 'visual' ? 'bg-white text-black shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Visual
                </button>
             </div>

             <Separator orientation="vertical" className="h-6 bg-slate-200 mx-1 hidden md:block" />

             <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="text-slate-500 hover:text-black">
                   <Share2 size={18} />
                </Button>
                <Button variant="ghost" size="icon" className={`text-slate-500 hover:text-black ${rightPanelOpen ? 'bg-slate-100' : ''}`} onClick={() => setRightPanelOpen(!rightPanelOpen)}>
                  {rightPanelOpen ? <PanelRightClose size={18} /> : <PanelRightOpen size={18} />}
                </Button>
             </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden relative flex flex-col">
          
          {showIntegrations ? (
            /* INTEGRATIONS VIEW */
            <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
              <div className="max-w-5xl mx-auto">
                 <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Integrations</h1>
                    <p className="text-slate-500">Connect your favorite tools to bring research and docs directly into Antimomentum.</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: "Google Docs", icon: "https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg", connected: true, desc: "Import and sync documents." },
                      { name: "Notion", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", connected: false, desc: "Sync pages and databases." },
                      { name: "Microsoft Word", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg", connected: false, desc: "Edit .docx files directly." },
                      { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", connected: true, desc: "Send daily summaries to channels." },
                      { name: "Linear", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Linear_logo.svg/1200px-Linear_logo.svg.png", connected: false, desc: "Create issues from research notes." },
                      { name: "GitHub", icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", connected: false, desc: "Link PRs to documentation." },
                    ].map((tool, i) => (
                       <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-4">
                             <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                                <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                             </div>
                             <div className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${tool.connected ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                                {tool.connected ? 'Active' : 'Connect'}
                             </div>
                          </div>
                          <h3 className="font-bold text-slate-900 mb-1">{tool.name}</h3>
                          <p className="text-xs text-slate-500 mb-4">{tool.desc}</p>
                          <Button variant={tool.connected ? "outline" : "default"} className={`w-full h-8 text-xs ${tool.connected ? '' : 'bg-black text-white'}`}>
                             {tool.connected ? 'Manage' : 'Connect'}
                          </Button>
                       </div>
                    ))}
                 </div>
              </div>
            </div>
          ) : (
            /* EDITOR VIEW */
            <div className="flex-1 overflow-y-auto bg-white">
               {/* Toolbar (Optional) */}
              <div className="border-b border-slate-100 px-4 md:px-8 py-2 flex items-center gap-4 overflow-x-auto no-scrollbar sticky top-0 bg-white z-10">
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

               <div className="max-w-3xl mx-auto py-8 md:py-16 px-6 md:px-12 min-h-full">
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <div className="prose prose-slate prose-lg max-w-none">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 font-display tracking-tight leading-tight outline-none" contentEditable suppressContentEditableWarning>
                          Q3 Product Launch Strategy
                        </h1>
                        
                        <p className="lead text-xl text-slate-600 outline-none" contentEditable suppressContentEditableWarning>
                          The primary objective of the Q3 launch is to penetrate the enterprise market with our new "Teams" feature set. 
                        </p>
                        
                        {/* AI Suggestion Block - White/Black Outline Style */}
                        <div className="my-8 p-0 rounded-xl border border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] not-prose overflow-hidden select-none">
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

                        <h2 contentEditable suppressContentEditableWarning className="outline-none">1. Market Analysis</h2>
                        <p contentEditable suppressContentEditableWarning className="outline-none">
                          Current market sentiment leans heavily towards consolidated tooling. Users are tired of switching between 
                          Notion, Linear, and Slack. <span className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-sm font-medium text-slate-900 align-middle cursor-pointer hover:bg-slate-200">citation needed</span>
                        </p>

                        <ul className="marker:text-black">
                          <li>Consolidation of toolchains into single-pane-of-glass interfaces.</li>
                          <li>AI-native workflows replacing manual data entry.</li>
                          <li>Real-time collaboration latency becoming a key decision factor.</li>
                        </ul>

                        <h2 contentEditable suppressContentEditableWarning className="outline-none">2. Key Differentiators</h2>
                        <p contentEditable suppressContentEditableWarning className="outline-none">
                          Unlike traditional IDEs, Antimomentum focuses on the "pre-code" phase: thinking, planning, and researching.
                        </p>
                      </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent className="w-64">
                      <ContextMenuItem><Sparkles size={14} className="mr-2 text-violet-600" /> Improve writing</ContextMenuItem>
                      <ContextMenuItem><Zap size={14} className="mr-2" /> Make shorter</ContextMenuItem>
                      <ContextMenuItem><MoreHorizontal size={14} className="mr-2" /> Make longer</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem>Copy as Markdown</ContextMenuItem>
                      <ContextMenuItem>Export to PDF</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                  
                  <div className="h-32" />
               </div>
            </div>
          )}
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
               animate={isMobile ? { x: 0 } : { width: 360, opacity: 1 }}
               exit={isMobile ? { x: "100%" } : { width: 0, opacity: 0 }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
               className={`
                 fixed md:relative right-0 z-50 h-full bg-white border-l border-slate-200 flex flex-col
                 ${isMobile ? "w-[90%] max-w-[360px] shadow-2xl" : "flex-shrink-0"}
               `}
             >
              <div className="p-4 h-14 border-b border-slate-200 flex items-center justify-between bg-white">
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
                <div className="space-y-6 pb-4">
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

              {/* CLONED INPUT AREA - Matches Screenshot */}
              <div className="p-4 border-t border-slate-200 bg-white">
                 <div className="relative bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 p-3">
                    <Input 
                      placeholder="Make, test, iterate..." 
                      className="border-0 focus-visible:ring-0 p-0 h-auto text-base placeholder:text-slate-400 bg-transparent mb-10"
                    />
                    
                    <div className="flex items-center justify-between absolute bottom-3 left-3 right-3">
                       <div className="flex items-center gap-2">
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg">
                             <Paperclip size={18} />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg">
                             <Mic size={18} />
                          </Button>
                       </div>
                       
                       <div className="flex items-center gap-2">
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg">
                             <Zap size={18} />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg">
                             <SlidersHorizontal size={18} />
                          </Button>
                          <Button size="icon" className="h-8 w-8 bg-slate-200 text-slate-400 hover:bg-black hover:text-white rounded-lg transition-colors">
                             <ArrowUp size={18} />
                          </Button>
                       </div>
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
