"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { EmptyState } from "@/components/EmptyState";
import { NotFoundState } from "@/components/NotFoundState";
import { ResultCard } from "@/components/ResultCard";
import { SearchBar } from "@/components/SearchBar";
import { TipsFooter } from "@/components/TipsFooter";
import { search } from "@/lib/search";

export default function Page() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const trimmed = deferredQuery.trim();

  const result = useMemo(
    () => (trimmed ? search(trimmed) : null),
    [trimmed],
  );

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 py-10 sm:py-14">
      <header>
        <div className="flex items-center gap-3">
          <span className="text-4xl" aria-hidden="true">
            🚦
          </span>
          <p className="text-base sm:text-lg font-semibold uppercase tracking-wider text-[var(--accent)]">
            Semáforo dos Alimentos
          </p>
        </div>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight text-[var(--foreground)]">
          Descubra como cada alimento afeta o seu açúcar no sangue.
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
          Digite o nome de um alimento e veja na hora se você pode comer à
          vontade, com moderação ou se é melhor evitar.
        </p>
      </header>

      <SearchBar value={query} onChange={setQuery} />

      <div className="min-h-[200px]">
        {!trimmed && <EmptyState />}
        {trimmed && result?.match && <ResultCard food={result.match} />}
        {trimmed && result && !result.match && (
          <NotFoundState
            query={trimmed}
            suggestions={result.suggestions}
            onPick={setQuery}
          />
        )}
      </div>

      <TipsFooter />

      <footer className="pt-4 pb-2 text-center text-sm text-[var(--muted)]">
        Informações educativas. Não substitui a orientação de um profissional
        de saúde.
      </footer>
    </div>
  );
}
