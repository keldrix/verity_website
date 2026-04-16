"use client";

import { motion } from "framer-motion";
import { Network, ServerCog, PlugZap, CheckCircle } from "lucide-react";

const useCases = [
  {
    icon: Network,
    title: "Cross-system operational workflows",
    description: "Run workflows that need to coordinate actions across internal systems, SaaS tools, and web interfaces with explicit verification at each step."
  },
  {
    icon: ServerCog,
    title: "Back-office reliability layers",
    description: "Add a correctness and retry-safe execution layer underneath agentic or rules-based systems without trusting them to act directly."
  },
  {
    icon: PlugZap,
    title: "Long-tail SaaS operations",
    description: "Handle important actions in systems that do not expose clean APIs by using structured UI execution with verification instead of brittle scripts."
  },
  {
    icon: CheckCircle,
    title: "Operational state changes that matter",
    description: "Notifications, ticket updates, contact creation, inventory actions, shipment tracking, and similar workflows where correctness matters more than raw speed."
  }
];

export function UseCases() {
  return (
    <section className="py-24 bg-surface/20 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Where Verity fits first</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-8 rounded-2xl bg-surface/50 border border-border hover:bg-surface-hover/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-all group"
            >
              <div className="flex-shrink-0 mt-1">
                <useCase.icon className="w-8 h-8 text-accent opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground/90">{useCase.title}</h3>
                <p className="text-foreground/70 leading-relaxed font-medium">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
