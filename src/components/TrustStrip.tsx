import { CheckCircle2 } from "lucide-react";

const trustPoints = [
  "Built for high-stakes operational workflows",
  "API-first, UI fallback",
  "Every action is verified",
  "Safe to retry, observable by default",
];

export function TrustStrip() {
  return (
    <div className="w-full border-y border-border bg-surface/30 backdrop-blur-sm py-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="text-sm md:text-base font-medium text-foreground/90">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
