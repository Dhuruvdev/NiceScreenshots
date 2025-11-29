import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <section className="py-24 container mx-auto px-6" id="pricing">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Start solo, grow as a team.</h2>
        
        <div className="inline-flex bg-slate-100 p-1 rounded-full">
           <button 
             onClick={() => setBilling("monthly")}
             className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billing === 'monthly' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
           >
             Monthly
           </button>
           <button 
             onClick={() => setBilling("yearly")}
             className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billing === 'yearly' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
           >
             Yearly <span className="text-xs text-brand-violet ml-1 font-bold">-20%</span>
           </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
         {/* Starter */}
         <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
            <div className="text-4xl font-bold text-slate-900 mb-6">$0<span className="text-base font-normal text-slate-500">/mo</span></div>
            <p className="text-slate-500 text-sm mb-8">Perfect for individual researchers and students.</p>
            <Button variant="outline" className="w-full rounded-full mb-8 border-slate-200">Get Started</Button>
            <div className="space-y-3">
               {["1 Workspace", "Unlimited Notes", "Basic AI Assistant", "Community Support"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                     <Check size={16} className="text-slate-400" />
                     {feat}
                  </div>
               ))}
            </div>
         </div>

         {/* Pro */}
         <div className="relative p-8 rounded-2xl border-2 border-brand-violet bg-white shadow-2xl shadow-brand-violet/10 scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-violet text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pro</h3>
            <div className="text-4xl font-bold text-slate-900 mb-6">{billing === 'yearly' ? '$12' : '$15'}<span className="text-base font-normal text-slate-500">/mo</span></div>
            <p className="text-slate-500 text-sm mb-8">For power users who need serious AI capabilities.</p>
            <Button className="w-full rounded-full mb-8 bg-brand-violet hover:bg-violet-700 text-white shadow-lg shadow-violet-500/30">Try Pro Free</Button>
            <div className="space-y-3">
               {["Everything in Starter", "Advanced Agentic AI", "Unlimited File Uploads", "Priority Support", "API Access"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                     <Check size={16} className="text-brand-violet" />
                     {feat}
                  </div>
               ))}
            </div>
         </div>

         {/* Team */}
         <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Team</h3>
            <div className="text-4xl font-bold text-slate-900 mb-6">{billing === 'yearly' ? '$29' : '$35'}<span className="text-base font-normal text-slate-500">/mo</span></div>
            <p className="text-slate-500 text-sm mb-8">Collaborative features for research labs and offices.</p>
            <Button variant="outline" className="w-full rounded-full mb-8 border-slate-200">Contact Sales</Button>
            <div className="space-y-3">
               {["Everything in Pro", "Shared Workspaces", "Team Permissions", "Admin Dashboard", "SSO & Audit Logs"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                     <Check size={16} className="text-slate-400" />
                     {feat}
                  </div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}
