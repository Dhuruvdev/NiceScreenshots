import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { IdeMockup } from "./IdeMockup";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex flex-col items-center pt-40 overflow-hidden">
      
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
         <div className="absolute top-[-20%] left-[-10%] w-[60rem] h-[60rem] bg-violet-200/30 rounded-full blur-[100px] animate-pulse-glow" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-cyan-200/30 rounded-full blur-[100px] animate-pulse-glow delay-700" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-white/50 shadow-sm mb-8 hover:scale-105 transition-transform cursor-pointer"
        >
          <Sparkles size={14} className="text-brand-violet" />
          <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600">
            Reimagining the Research IDE
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-display font-extrabold tracking-tight text-slate-900 mb-8 leading-[0.9]"
        >
          Flip your momentum <br />
          into <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 animate-gradient-x">flow state.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The first IDE designed for thinking. Merge your notes, data, and agentic AI into a single, infinite workspace.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <Button size="lg" className="h-14 px-8 rounded-full bg-slate-900 text-white text-lg hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-900/20">
            Start Building
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="ghost" size="lg" className="h-14 px-8 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/50 text-lg">
            <PlayCircle className="mr-2 w-5 h-5" />
            See how it works
          </Button>
        </motion.div>
      </div>

      {/* 3D Tilt Mockup Container */}
      <motion.div 
        style={{ y, opacity, scale, rotateX, perspective: 1000 }}
        className="w-full max-w-6xl mx-auto px-4 relative"
      >
         {/* Ambient Glow */}
         <div className="absolute -inset-10 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-[3rem] blur-3xl -z-10" />
         
         {/* Glass border wrapper */}
         <div className="p-2 rounded-[2rem] bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
            <IdeMockup />
         </div>
      </motion.div>

    </section>
  );
}
