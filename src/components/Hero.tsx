"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Activity } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border mb-8 backdrop-blur-sm"
          >
            <Activity className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80 font-mono tracking-tight">
              Intent <ChevronRight className="w-3 h-3 inline text-accent" /> Action <ChevronRight className="w-3 h-3 inline text-accent" /> Execution <ChevronRight className="w-3 h-3 inline text-accent" /> Verification
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Give your AI Agents hands <br className="hidden md:block" />
            <span className="text-gradient-accent">that don't slip.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Stop letting your agents &quot;guess&quot; their way through messy UIs. Verity provides the Deterministic Execution Layer that makes AI automation 100% reliable—even on legacy apps without APIs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="https://forms.gle/q7U1DChHGkGFgfWw8"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative inline-flex items-center justify-center gap-2",
                "bg-accent hover:bg-accent-dark text-white",
                "px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300",
                "shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
              )}
            >
              Request Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
