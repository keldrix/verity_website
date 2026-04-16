"use client";

import { motion } from "framer-motion";
import { AlertOctagon, CheckSquare, Bot } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Most automation tools are good at demos and weak at execution
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          
          <div className="flex flex-col gap-8 tracking-tight">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-surface border border-border/50 relative overflow-hidden group flex-1"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Bot className="w-24 h-24 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground/90">Current AI Agent Way</h3>
              <p className="text-foreground/70 leading-relaxed font-medium">
                AI Agents are probabilistic—they hallucinate, time out, and lack the precision for mission-critical tasks.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-surface border border-border/50 relative overflow-hidden group flex-1"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <AlertOctagon className="w-24 h-24 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground/90">Traditional RPA Way</h3>
              <p className="text-foreground/70 leading-relaxed font-medium">
                Built on brittle DOM selectors that break the moment a browser updates.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-10 rounded-2xl bg-gradient-to-br from-surface to-accent/10 border border-accent/20 glow-border relative overflow-hidden flex flex-col justify-center h-full"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <CheckSquare className="w-32 h-32 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-accent">The Verity Way</h3>
            <p className="text-lg text-foreground/90 leading-relaxed font-medium max-w-md">
              A deterministic execution backend for web operations, with verification, retry safety, and explicit failure handling built in.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
