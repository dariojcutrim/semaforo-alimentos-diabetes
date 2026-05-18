"use client";

import { TIER_INFO, type Food } from "@/data/foods";

interface Props {
  query: string;
  suggestions: Food[];
  onPick: (name: string) => void;
}

export function NotFoundState({ query, suggestions, onPick }: Props) {
  return (
    <section
      aria-live="polite"
      className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl" aria-hidden="true">
          🤔
        </span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
            Não encontramos &ldquo;{query}&rdquo;
          </h2>
          <p className="mt-2 text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
            Esse alimento não está na nossa lista. Veja se a escrita está
            correta ou tente um nome parecido.
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
                <span aria-hidden="true">{TIER_INFO[s.tier].emoji}</span>
                {s.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="mt-6 text-base sm:text-lg text-[var(--muted)]">
        Em caso de dúvida, pergunte ao profissional de saúde que acompanha você.
      </p>
    </section>
  );
}
