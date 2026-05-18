"use client";

import { NOT_ULTRA_HINT, type UltraItem } from "@/data/ultraprocessed";

interface Props {
  query: string;
  suggestions: UltraItem[];
  onPick: (name: string) => void;
}

export function UltraNotFoundState({ query, suggestions, onPick }: Props) {
  return (
    <section
      aria-live="polite"
      className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl" aria-hidden="true">
          🔎
        </span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
            &ldquo;{query}&rdquo; não está na nossa lista
          </h2>
          <p className="mt-2 text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
            {NOT_ULTRA_HINT}
          </p>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div className="mt-6">
          <p className="text-base sm:text-lg font-semibold text-[var(--foreground)]">
            Você quis dizer:
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {suggestions.map((s) => (
              <button
                key={s.name}
                type="button"
                onClick={() => onPick(s.name)}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-[var(--border)] bg-white px-5 text-lg font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:bg-slate-50"
              >
                <span aria-hidden="true">⚠️</span>
                {s.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 rounded-2xl border-2 border-[var(--verde)]/30 bg-[var(--verde-soft)] p-5 text-[var(--verde-deep)]">
        <p className="text-base sm:text-lg font-semibold">💡 Dica</p>
        <p className="mt-2 text-lg sm:text-xl leading-relaxed">
          Prefira comida de verdade: feita em casa, com ingredientes naturais
          como frutas, verduras, legumes, grãos e carnes.
        </p>
      </div>
    </section>
  );
}
