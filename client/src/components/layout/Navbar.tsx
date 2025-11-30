import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Atom, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth transforms for navbar
  const navWidth = useTransform(scrollY, [0, 150], ["100%", "90%"], { clamp: true });
  const navTop = useTransform(scrollY, [0, 150], [0, 16], { clamp: true });
  const navBorderRadius = useTransform(scrollY, [0, 150], [0, 20], { clamp: true });
  const navScale = useTransform(scrollY, [0, 150], [1, 0.98], { clamp: true });
  const navOpacity = useTransform(scrollY, [0, 150], [1, 0.95], { clamp: true });

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "Solutions", href: "#solutions" },
    { name: "Resources", href: "#resources" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <motion.div 
        style={{ 
          width: navWidth, 
          top: navTop, 
          borderRadius: navBorderRadius,
          scale: navScale,
          opacity: navOpacity
        }}
        className="fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-[95%] md:max-w-5xl"
      >
        <motion.nav 
          className="relative flex items-center justify-between px-4 md:px-6 py-3 bg-white/80 backdrop-blur-xl border border-white/20 shadow-sm"
          animate={{
            boxShadow: isScrolled 
              ? '0 10px 40px rgba(0, 0, 0, 0.08)' 
              : '0 2px 8px rgba(0, 0, 0, 0.04)',
            borderColor: isScrolled 
              ? 'rgba(100, 116, 139, 0.3)' 
              : 'rgba(255, 255, 255, 0.2)',
            backgroundColor: isScrolled
              ? 'rgba(255, 255, 255, 0.9)'
              : 'rgba(255, 255, 255, 0.8)',
          }}
          transition={{ 
            duration: 0.4, 
            ease: "easeOut"
          }}
        >
          {/* Logo Area */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Atom size={18} className="relative z-10 transition-transform duration-700 group-hover:rotate-180" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-slate-900 hidden sm:block">
              Antimomentum
            </span>
          </div>

          {/* Desktop Links - Centered Island Style */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/ide" className="text-sm font-medium text-slate-600 hover:text-slate-900 px-2">
              Log in
            </Link>
            <Link href="/ide">
              <Button size="sm" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 transition-all hover:scale-105">
                Get Access
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </motion.nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-display font-bold text-slate-900 flex items-center justify-between border-b border-slate-100 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="text-slate-300" />
                </a>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <Link href="/ide">
                  <Button size="lg" className="w-full rounded-full bg-slate-900">Get Started</Button>
                </Link>
                <Link href="/ide">
                  <Button size="lg" variant="outline" className="w-full rounded-full">Log in</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
