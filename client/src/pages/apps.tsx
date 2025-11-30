import { Globe, MoreVertical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AppsPage() {

  return (
    <div className="h-screen w-full bg-white font-sans overflow-hidden flex flex-col">
      {/* Top status bar - green + green circle + icon */}
      <div className="h-8 border-b border-slate-200 flex items-center justify-start px-4 bg-white gap-2">
        <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0" />
        <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0" />
        <span className="text-xs text-slate-500">N</span>
      </div>

      {/* Header */}
      <div className="h-14 border-b border-slate-200 flex items-center px-4 bg-white">
        <h1 className="text-2xl font-bold text-slate-900">Apps</h1>
      </div>

      {/* Content */}
      <ScrollArea className="flex-1">
        <div className="max-w-2xl mx-auto p-4 space-y-4">
          {/* All Apps Button */}
          <button className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <span className="text-base font-semibold text-slate-900">All Apps</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400 group-hover:text-slate-600">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Working Section */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-1">Working...</h2>
            
            {/* Card */}
            <div className="p-4 rounded-lg border-2 border-slate-300 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
              {/* Card Image/Preview */}
              <div className="mb-3 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="text-xs font-semibold text-purple-600 mb-2">Messaging for Momentum AI</div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">
                    Flip your momentum<br />into<span className="bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent"> flow state</span>.
                  </h3>
                  <p className="text-xs text-slate-600 mb-3">The first IDE designed for thinking. Merge your notes, data, and agentic AI into a single, infinite workspace.</p>
                  <div className="flex gap-2 justify-center mb-3">
                    <Button size="sm" className="h-7 text-xs bg-slate-900 text-white hover:bg-slate-800">Start building</Button>
                    <Button size="sm" variant="outline" className="h-7 text-xs border-slate-300 text-slate-700">See how it works</Button>
                  </div>
                  <div className="absolute bottom-3 left-3 w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3D</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Apps List */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-1">My Apps</h2>
            
            {/* NiceScreenshots App */}
            <button 
              className="w-full p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors group text-left"
              data-testid="app-nicescreenshots"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-slate-900">NiceScreenshots</h3>
                  <p className="text-sm text-slate-500">antique939</p>
                </div>
                <button className="text-slate-400 hover:text-slate-600 p-1 -m-1">
                  <MoreVertical size={16} />
                </button>
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-600">
                <Globe size={14} />
                <span>Public</span>
              </div>
            </button>
          </div>
        </div>
      </ScrollArea>

      {/* Bottom Navigation */}
      <div className="h-16 border-t border-slate-200 flex items-center justify-around bg-white">
        <button className="flex flex-col items-center justify-center py-2 gap-1 text-slate-600 hover:text-slate-900 transition-colors group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          <span className="text-xs font-medium">Apps</span>
        </button>
        
        <button className="flex flex-col items-center justify-center py-2 gap-1 text-slate-400 hover:text-slate-600 transition-colors">
          <Plus size={24} strokeWidth={1.5} />
          <span className="text-xs font-medium">Create</span>
        </button>
        
        <button className="flex flex-col items-center justify-center py-2 gap-1 text-slate-400 hover:text-slate-600 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-xs font-medium">Account</span>
        </button>
      </div>
    </div>
  );
}
