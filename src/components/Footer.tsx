export function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-surface/30">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center gap-4">
        <p className="text-foreground/80 font-medium">
          Verity: Deterministic execution backend for cross-web operations
        </p>
        <p className="text-foreground/50 text-sm">
          © 2026 Keldrix Ventures · <a href="mailto:hello@keldrix.co" className="hover:text-accent transition-colors">hello@keldrix.co</a>
        </p>
      </div>
    </footer>
  );
}
