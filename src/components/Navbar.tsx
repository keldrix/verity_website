import Link from "next/link";
import { Activity } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-border group-hover:border-accent/40 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.2)] transition-all">
            <Activity className="w-4 h-4 text-accent" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground/90">Verity</span>
        </Link>
        <Link
          href="https://forms.gle/q7U1DChHGkGFgfWw8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors px-4 py-2"
        >
          Early Access
        </Link>
      </div>
    </header>
  );
}
