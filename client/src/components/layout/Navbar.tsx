import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Atom } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-slate-100/50"
    >
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-brand text-white">
          <Atom size={20} className="animate-[spin_10s_linear_infinite]" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-slate-900">Antimomentum</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {["Product", "Workspace", "Agents", "Use cases", "Pricing", "Docs"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-sm font-medium text-slate-600 hover:text-brand-violet transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link href="/login" className="text-sm font-medium text-slate-900 hover:text-brand-violet transition-colors">
          Sign in
        </Link>
        <Button className="rounded-full px-6 bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg hover:shadow-brand-violet/20 transition-all duration-300">
          Get early access
        </Button>
      </div>
    </motion.nav>
  );
}
