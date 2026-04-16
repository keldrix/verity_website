"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How is ShadowMap different from MCP (Model Context Protocol)?",
    answer: "MCP is a communication protocol—it’s the \"telephone wire\" that lets an AI talk to a data source. ShadowMap is the \"eyes and hands.\" While MCP helps an agent fetch data from an API, ShadowMap handles the non-API world. It provides a deterministic visual mapping of legacy UIs (Java, Silverlight, etc.), ensuring that when an agent sends a command via MCP, the physical execution on the UI is 100% accurate."
  },
  {
    question: "Is this just another \"Computer Vision\" (CV) play?",
    answer: "No. Traditional CV-based RPA still relies on probabilistic \"guessing\" and fixed coordinate clicks. ShadowMap uses Semantic Pixel Mapping. We don't just \"see\" a button; we create a deterministic digital twin of the UI state. This allows us to handle \"UI Drift\"—if a button moves, changes color, or is partially obscured, ShadowMap still identifies it with 100% certainty, whereas standard CV would likely fail."
  },
  {
    question: "What do you mean by \"Deterministic Execution\" in an AI world?",
    answer: "AI models are probabilistic (they guess). Verity is deterministic (it follows rules). In a Verity workflow, the AI handles the reasoning (\"Should I approve this invoice?\"), but Verity handles the action (\"Click the approve button in the ERP\"). We ensure the action is performed exactly the same way every time, with verifiable audit logs, removing the \"hallucination\" risk from the execution layer."
  },
  {
    question: "What happens when the legacy system’s UI actually changes?",
    answer: "Because ShadowMap maps the intent of the element rather than its code-level \"Selector\" (CSS/XPath), it is resilient to underlying changes. If your carrier portal updates from version 2.0 to 3.0, Verity’s visual anchors stay locked. If a change is so radical that it breaks the map, Verity triggers a \"Deterministic Halt\" instead of clicking the wrong thing, allowing for a 30-second manual re-map."
  },
  {
    question: "Can Verity work with my existing agents built in LangGraph or Flowise?",
    answer: "Absolutely. Verity is designed to be the \"Execution Plugin\" for your existing stack. You keep your logic in LangGraph/Flowise, and whenever your agent needs to touch a legacy UI, it calls a Verity \"Skill.\""
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border/50 bg-surface rounded-xl overflow-hidden mb-4 transition-colors hover:border-accent/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left"
      >
        <span className="font-semibold text-lg text-foreground/90 pr-8">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-foreground/70 leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know about deterministic execution vs probabilistic AI.
          </p>
        </div>
        
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
