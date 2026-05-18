import { TIER_INFO, YELLOW_TIP, type Food } from "@/data/foods";

interface Props {
  food: Food;
}

const TIER_STYLES = {
  verde: {
    banner: "bg-[var(--verde)] text-white",
    body: "bg-[var(--verde-soft)] text-[var(--verde-deep)]",
  },
  amarelo: {
    banner: "bg-[var(--amarelo)] text-white",
    body: "bg-[var(--amarelo-soft)] text-[var(--amarelo-deep)]",
  },
  vermelho: {
    banner: "bg-[var(--vermelho)] text-white",
    body: "bg-[var(--vermelho-soft)] text-[var(--vermelho-deep)]",
  },
} as const;

export function ResultCard({ food }: Props) {
  const info = TIER_INFO[food.tier];
  const styles = TIER_STYLES[food.tier];

  return (
    <article
      aria-live="polite"
      className="overflow-hidden rounded-3xl border border-[var(--border)] shadow-lg"
    >
      <div className={`${styles.banner} px-8 py-8 sm:py-10`}>
        <div className="flex items-center gap-4">
          <span className="text-5xl sm:text-6xl" aria-hidden="true">
            {info.emoji}
          </span>
          <div>
            <p className="text-lg sm:text-xl font-semibold uppercase tracking-wide opacity-90">
              {info.short}
            </p>
            <h2 className="mt-1 text-3xl sm:text-4xl font-bold leading-tight">
              {info.label}
            </h2>
          </div>
        </div>
      </div>

      <div className={`${styles.body} px-8 py-7 sm:py-8`}>
        <p className="text-base sm:text-lg uppercase tracking-wide opacity-75">
          Alimento
        </p>
        <p className="mt-1 text-3xl sm:text-4xl font-bold">{food.name}</p>
        <p className="mt-4 text-lg sm:text-xl">
          <span className="opacity-75">Categoria: </span>
          <span className="font-semibold">{food.category}</span>
        </p>
        <p className="mt-4 text-lg sm:text-xl leading-relaxed">
          {info.description}
        </p>

        {food.tier === "amarelo" && (
          <div className="mt-6 rounded-2xl border-2 border-[var(--amarelo)]/40 bg-white/70 p-5">
            <p className="text-base sm:text-lg font-semibold">
              💡 Dica importante
            </p>
            <p className="mt-2 text-lg sm:text-xl leading-relaxed">
              {YELLOW_TIP}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
