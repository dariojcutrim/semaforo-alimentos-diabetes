import { TIER_INFO } from "@/data/foods";

const EXAMPLES = [
  { tier: "verde" as const, food: "Maçã" },
  { tier: "amarelo" as const, food: "Arroz branco" },
  { tier: "vermelho" as const, food: "Refrigerante" },
];

const COLORS = {
  verde: "border-[var(--verde)]/30 bg-[var(--verde-soft)] text-[var(--verde-deep)]",
  amarelo: "border-[var(--amarelo)]/30 bg-[var(--amarelo-soft)] text-[var(--amarelo-deep)]",
  vermelho: "border-[var(--vermelho)]/30 bg-[var(--vermelho-soft)] text-[var(--vermelho-deep)]",
};

export function EmptyState() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
        Como funciona
      </h2>
      <p className="mt-3 text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
        Digite o nome de um alimento no campo acima. O semáforo mostra se ele
        ajuda ou prejudica o controle do açúcar no sangue.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-3">
        {EXAMPLES.map((ex) => {
          const info = TIER_INFO[ex.tier];
          return (
            <div
              key={ex.tier}
              className={`rounded-2xl border-2 p-5 ${COLORS[ex.tier]}`}
            >
              <div className="text-3xl" aria-hidden="true">
                {info.emoji}
              </div>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide opacity-80">
                {info.short}
              </p>
              <p className="mt-1 text-lg font-bold">{ex.food}</p>
              <p className="mt-2 text-base leading-snug">{info.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
