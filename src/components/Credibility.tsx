export function Credibility() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Built around execution guarantees</h2>
        
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-left md:text-center font-medium">
          <p>
            Verity is organized around a canonical contract for actions, connectors, verification, evidence, and failure handling. The current product foundation includes reusable schemas, deterministic workflow execution, connector adapters, and a Shadow Map spec for UI-based fallback execution.
          </p>
          <p>
            This is not an agent wrapper and not another orchestration layer that stops at "task attempted." Verity is designed to become the execution foundation underneath higher-level systems that still need correctness guarantees.
          </p>
        </div>
      </div>
    </section>
  );
}
