import {
  ULTRA_EXPLANATION,
  ULTRA_GUIDANCE,
  type UltraItem,
} from "@/data/ultraprocessed";

interface Props {
  item: UltraItem;
}

export function UltraResultCard({ item }: Props) {
  return (
    <article
      aria-live="polite"
      className="overflow-hidden rounded-3xl border border-[var(--border)] shadow-lg"
    >
      <div className="bg-[var(--vermelho)] text-white px-8 py-8 sm:py-10">
        <div className="flex items-center gap-4">
          <span className="text-5xl sm:text-6xl" aria-hidden="true">
            ⚠️
          </span>
          <div>
            <p className="text-lg sm:text-xl font-semibold uppercase tracking-wide opacity-90">
              Ultraprocessado
            </p>
            <h2 className="mt-1 text-3xl sm:text-4xl font-bold leading-tight">
              Sim, evite consumir
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-[var(--vermelho-soft)] text-[var(--vermelho-deep)] px-8 py-7 sm:py-8">
        <p className="text-base sm:text-lg uppercase tracking-wide opacity-75">
          Produto
        </p>
        <p className="mt-1 text-3xl sm:text-4xl font-bold">{item.name}</p>
        <p className="mt-4 text-lg sm:text-xl">
          <span className="opacity-75">Categoria: </span>
          <span className="font-semibold">{item.category}</span>
        </p>

        <div className="mt-6 rounded-2xl border-2 border-[var(--vermelho)]/30 bg-white/70 p-5">
          <p className="text-base sm:text-lg font-semibold">
            Por que evitar?
          </p>
          <p className="mt-2 text-lg sm:text-xl leading-relaxed">
            {ULTRA_EXPLANATION}
          </p>
        </div>

        <p className="mt-5 text-lg sm:text-xl leading-relaxed">
          ✅ {ULTRA_GUIDANCE}
        </p>
      </div>
    </article>
  );
}
