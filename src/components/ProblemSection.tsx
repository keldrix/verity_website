"use client";

import { motion } from "framer-motion";
import { AlertOctagon, CheckSquare } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Automation breaks where operations get real</h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-medium">
            Most automation tools are good at demos and weak at execution. They trigger actions, but don't prove outcomes. Agent-only flows can decide what to do, but they don't guarantee state changes, verification, or safe recovery when something fails.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-surface border border-border/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertOctagon className="w-24 h-24 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground/90">The Old Way</h3>
            <p className="text-foreground/70 leading-relaxed">
              Operational work is different. A shipment update, status sync, or record change is only complete when the target state is actually observed and verified. Without verification, you are just blindly hoping scripts succeed.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-surface to-accent/5 border border-accent/20 glow-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <CheckSquare className="w-24 h-24 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-accent">The Verity Gap</h3>
            <p className="text-foreground/80 leading-relaxed font-medium">
              Verity is built for that gap: a deterministic execution backend for web operations, with verification, retry safety, and explicit failure handling built in.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
