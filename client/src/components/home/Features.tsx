import { motion } from "framer-motion";
import { 
  Brain, 
  Database, 
  FileText, 
  Sparkles, 
  Zap, 
  GitBranch, 
  Globe, 
  Search,
  Bot
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  className?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgContent?: React.ReactNode;
  dark?: boolean;
}

function BentoCard({ className, title, description, icon, bgContent, dark = false }: BentoCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group",
        dark ? "bg-slate-900 text-white" : "bg-white border border-slate-200 shadow-sm hover:shadow-xl",
        className
      )}
    >
      {/* Background Content / Decoration */}
      <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        {bgContent}
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg",
          dark ? "bg-white/10" : "bg-slate-900"
        )}>
          {icon}
        </div>
        <h3 className={cn("text-2xl font-display font-bold mb-2", dark ? "text-white" : "text-slate-900")}>
          {title}
        </h3>
        <p className={cn("text-sm leading-relaxed", dark ? "text-slate-400" : "text-slate-500")}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="py-24 px-6 bg-slate-50/50" id="solutions">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Everything you need to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600">think deeper.</span>
          </h2>
          <p className="text-xl text-slate-600">
            Replace your scattered toolset with a cohesive operating system for knowledge work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto_auto_auto] gap-6 h-auto md:h-[800px]">
          
          {/* Large Card - AI */}
          <BentoCard 
            className="md:col-span-2 md:row-span-2 min-h-[400px]"
            title="Agentic Research Assistants"
            description="Autonomous agents that read, summarize, and connect your documents while you sleep. They don't just chat; they do the work."
            icon={<Bot size={24} />}
            dark
            bgContent={
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent">
                 <div className="absolute top-10 right-10 w-64 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <div className="flex gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded w-3/4" />
                      <div className="h-2 bg-white/20 rounded w-full" />
                      <div className="h-2 bg-white/20 rounded w-1/2" />
                    </div>
                 </div>
              </div>
            }
          />

          {/* Card - Infinite Canvas */}
          <BentoCard 
            className="md:col-span-1 md:row-span-1 min-h-[200px]"
            title="Infinite Canvas"
            description="Drag and drop PDFs, datasets, and code blocks onto a boundless surface."
            icon={<Globe size={24} />}
            bgContent={
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            }
          />

          {/* Card - Live Data */}
          <BentoCard 
            className="md:col-span-1 md:row-span-1 min-h-[200px]"
            title="Live Data Streams"
            description="Connect to live APIs and visualize data in real-time directly in your docs."
            icon={<Zap size={24} />}
            bgContent={
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-100 rounded-tl-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
            }
          />

          {/* Wide Card - Version Control */}
          <BentoCard 
            className="md:col-span-3 md:row-span-1 min-h-[250px] flex-row items-center"
            title="Time-Travel for Thought"
            description="Every keystroke is versioned. Replay your entire thought process or branch off into new directions without fear."
            icon={<GitBranch size={24} />}
            bgContent={
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-slate-100 via-white to-slate-100 opacity-50" />
            }
          />
          
        </div>
      </div>
    </section>
  );
}
