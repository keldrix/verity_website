"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Deterministic by design",
    description: "Verity is built around verified state change, not best-effort task completion."
  },
  {
    title: "Schema-first execution",
    description: "Actions, verification, evidence, and failure handling are explicit contracts instead of connector-specific glue code."
  },
  {
    title: "API-first, UI fallback",
    description: "Use stable system interfaces when available, and fall back to structured browser execution only when necessary."
  },
  {
    title: "Observable from the start",
    description: "Logs, evidence, and execution status are first-class so operators can understand what happened and why."
  },
  {
    title: "Safe under retries",
    description: "Verity is designed for real operational environments where timeouts, partial writes, and retries are normal."
  }
];

export function WhyVerity() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What makes Verity different</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-8 rounded-xl bg-surface border border-border/60 hover:border-accent/40 transition-colors ${
                index === 0 ? "md:col-span-2 lg:col-span-2 bg-surface-hover" : ""
              }`}
            >
              <h3 className="text-xl font-bold mb-3 text-foreground/90">{point.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
