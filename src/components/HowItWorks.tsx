"use client";

import { motion } from "framer-motion";
import { ListTree, Route, ShieldCheck, Repeat } from "lucide-react";

const steps = [
  {
    icon: ListTree,
    title: "Intent becomes a canonical action",
    description: "Verity translates a requested task into a structured action contract with typed inputs, expected outcomes, and verification requirements.",
  },
  {
    icon: Route,
    title: "Execution uses the best available path",
    description: "Verity prefers APIs first. When APIs are unavailable, it can fall back to a Shadow Map execution spec for controlled UI-based execution.",
  },
  {
    icon: ShieldCheck,
    title: "Success is verified, not assumed",
    description: "Every action defines the observed state that proves it succeeded. Evidence, logs, and result shape are part of the product contract.",
  },
  {
    icon: Repeat,
    title: "Retries stay safe",
    description: "Idempotency and failure classification are built into the execution model so partial failures can be recovered without guessing what already happened.",
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">A backend for reliable execution</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 md:gap-10 items-start mb-12 last:mb-0 relative"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface border border-accent/30 text-accent z-10 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  <step.icon className="w-5 h-5" />
                </div>
                {index !== steps.length - 1 && (
                  <div className="w-px h-full bg-gradient-to-b from-accent/30 to-transparent absolute top-12 left-6 -z-0" />
                )}
              </div>
              
              <div className="pt-2 pb-8">
                <span className="text-accent text-sm font-mono tracking-wider font-semibold uppercase mb-2 block">Step {index + 1}</span>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground/90">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
