import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { IdeMockup } from "./IdeMockup";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-violet-300/20 rounded-full blur-3xl animate-pulse-glow" />
         <div className="absolute top-[15%] right-[20%] w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              Research & Office IDE
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Flip your momentum into <span className="text-gradient">flow.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Antimomentum is a research-first IDE where notes, documents, data, and agentic AI live in a single workspace.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" className="h-12 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-base shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-brand-violet/20 transition-all">
                Try the web IDE
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="ghost" size="lg" className="h-12 px-8 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-base">
                <PlayCircle className="mr-2 w-4 h-4" />
                Watch a 2-minute demo
              </Button>
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 w-full max-w-[600px] lg:max-w-none relative"
          >
             {/* Glow behind mockup */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500/30 to-cyan-500/30 rounded-[2rem] blur-2xl -z-10" />
             <div className="animate-[float_6s_ease-in-out_infinite]">
               <IdeMockup />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
