import { Atom, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        
        {/* CTA Section */}
        <div className="flex flex-col items-center text-center mb-24">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Ready to reverse your momentum?</h2>
           <div className="flex gap-4">
              <Button size="lg" className="rounded-full bg-slate-900 text-white px-8 h-12 hover:bg-slate-800 hover:shadow-lg">Get early access</Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-slate-300 bg-white hover:bg-slate-50">Talk to us</Button>
           </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-t border-slate-200 pt-12">
           <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center">
                    <Atom size={14} />
                 </div>
                 <span className="font-bold text-slate-900">Antimomentum</span>
              </div>
              <p className="text-slate-500 text-sm">
                 The research-first IDE for the age of agentic AI.
              </p>
           </div>
           
           {[
             { header: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
             { header: "Company", links: ["About", "Blog", "Careers", "Contact"] },
             { header: "Resources", links: ["Documentation", "Community", "Help Center", "API Status"] },
           ].map((col, i) => (
              <div key={i}>
                 <h4 className="font-bold text-slate-900 mb-4">{col.header}</h4>
                 <ul className="space-y-2">
                    {col.links.map((link) => (
                       <li key={link}>
                          <a href="#" className="text-slate-500 text-sm hover:text-brand-violet transition-colors">{link}</a>
                       </li>
                    ))}
                 </ul>
              </div>
           ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-slate-200 text-sm text-slate-400">
           <div>© 2025 Antimomentum Inc. All rights reserved.</div>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-600"><Twitter size={16} /></a>
              <a href="#" className="hover:text-slate-600"><Github size={16} /></a>
              <a href="#" className="hover:text-slate-600"><Linkedin size={16} /></a>
           </div>
        </div>
      </div>
    </footer>
  );
}
