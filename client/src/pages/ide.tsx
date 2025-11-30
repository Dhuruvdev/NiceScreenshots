import { useState } from "react";
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
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Ide() {
  const [inputValue, setInputValue] = useState("");
  const [activeToolTab, setActiveToolTab] = useState("local");

  return (
    <div className="flex flex-col h-screen w-full bg-white font-sans overflow-hidden">
      
      {/* Main Content Area */}
      <ScrollArea className="flex-1 bg-white">
        <div className="max-w-2xl mx-auto py-6 px-4">
          {/* Document Content */}
          <div className="space-y-4">
            <ul className="space-y-3 text-slate-700 text-[15px] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-slate-900 font-semibold">Slide-over Navigation:</span>
                <span>The Left Sidebar and Right AI Panel now slide in smoothly over the content on mobile, instead of squishing the layout.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-900 font-semibold">Backdrop Overlays:</span>
                <span>Added dark backdrops when menus are open on mobile to focus attention.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-900 font-semibold">Simplified Header:</span>
                <span>The top bar adapts to show only essential icons on small screens.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-900 font-semibold">Floating Action Button:</span>
                <span>Added a floating button on mobile to quickly access the AI Assistant.</span>
              </li>
            </ul>

            <p className="text-slate-700 text-[15px] leading-relaxed">
              The IDE now feels like a clean, structured, and responsive workspace, matching your "white and black outline" request while handling mobile interactions gracefully.
            </p>

            {/* Status Card */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-xs text-slate-500">1 minute ago</span>
              </div>
              <p className="text-sm text-slate-800 font-medium mb-3">
                Update IDE to use white and black outline design with mobile responsiveness
              </p>
              <div className="flex items-center gap-2">
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
          </div>
        </div>
      </ScrollArea>

      {/* Bottom Section */}
      <div className="border-t border-slate-200 bg-white">
        
        {/* Timer Header */}
        <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <div className="w-4 h-4 rounded-full border-2 border-cyan-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            </div>
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
              {/* Left Icons */}
              <div className="flex items-center gap-4">
                <button className="text-slate-400 hover:text-slate-600 transition-colors" data-testid="button-attach">
                  <Paperclip size={20} />
                </button>
                <button className="text-slate-400 hover:text-slate-600 transition-colors" data-testid="button-mic">
                  <Mic size={20} />
                </button>
              </div>
              
              {/* Right Icons */}
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
            {/* Local Button - Active (Purple gradient with black square) */}
            <button 
              onClick={() => setActiveToolTab("local")}
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
              onClick={() => setActiveToolTab("monitor")}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                activeToolTab === "monitor" 
                  ? "bg-white shadow-md" 
                  : "bg-white hover:bg-slate-50"
              }`}
              data-testid="button-tool-monitor"
            >
              <Monitor size={22} className="text-slate-500" />
            </button>

            {/* Agents Button - Purple dots */}
            <button 
              onClick={() => setActiveToolTab("agents")}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                activeToolTab === "agents" 
                  ? "bg-white shadow-md" 
                  : "bg-white hover:bg-slate-50"
              }`}
              data-testid="button-tool-agents"
            >
              <AgentsIcon />
            </button>

            {/* Auth/Globe Button */}
            <button 
              onClick={() => setActiveToolTab("auth")}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                activeToolTab === "auth" 
                  ? "bg-white shadow-md" 
                  : "bg-white hover:bg-slate-50"
              }`}
              data-testid="button-tool-auth"
            >
              <Globe size={22} className="text-slate-500" />
            </button>

            {/* Divider */}
            <div className="w-px h-8 bg-slate-300 mx-1" />

            {/* Plus/New Tab Button */}
            <button 
              onClick={() => setActiveToolTab("newtab")}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                activeToolTab === "newtab" 
                  ? "bg-white shadow-md" 
                  : "bg-white hover:bg-slate-50"
              }`}
              data-testid="button-tool-newtab"
            >
              <Plus size={22} className="text-slate-500" />
            </button>

            {/* Layout Button */}
            <button 
              onClick={() => setActiveToolTab("layout")}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                activeToolTab === "layout" 
                  ? "bg-white shadow-md" 
                  : "bg-white hover:bg-slate-50"
              }`}
              data-testid="button-tool-layout"
            >
              <LayoutIcon />
            </button>
          </div>
        </div>

        {/* Footer Toolbar */}
        <div className="px-4 pb-3 flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2">
            {/* Secrets */}
            <button className="flex-1 flex flex-col items-center justify-center py-3 px-2 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors" data-testid="button-secrets">
              <Lock size={20} className="text-slate-600 mb-1" />
              <span className="text-xs text-slate-600 font-medium">Secrets</span>
            </button>

            {/* Database */}
            <button className="flex-1 flex flex-col items-center justify-center py-3 px-2 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors" data-testid="button-database">
              <Database size={20} className="text-slate-600 mb-1" />
              <span className="text-xs text-slate-600 font-medium">Database</span>
            </button>

            {/* Auth */}
            <button className="flex-1 flex flex-col items-center justify-center py-3 px-2 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors" data-testid="button-auth">
              <Users size={20} className="text-slate-600 mb-1" />
              <span className="text-xs text-slate-600 font-medium">Auth</span>
            </button>

            {/* New Tab */}
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
          <button className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200" data-testid="button-close-search">
            <X size={20} className="text-slate-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Custom Agents Icon (Purple swirling dots)
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

// Custom Layout Icon (Overlapping rectangles)
function LayoutIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-500">
      <rect x="3" y="5" width="10" height="14" rx="2" />
      <rect x="11" y="5" width="10" height="14" rx="2" />
    </svg>
  );
}
