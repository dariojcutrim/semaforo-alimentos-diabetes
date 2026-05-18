"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { EmptyState } from "@/components/EmptyState";
import { ModeToggle, type Mode } from "@/components/ModeToggle";
import { NotFoundState } from "@/components/NotFoundState";
import { ResultCard } from "@/components/ResultCard";
import { SearchBar } from "@/components/SearchBar";
import { TipsFooter } from "@/components/TipsFooter";
import { UltraEmptyState } from "@/components/UltraEmptyState";
import { UltraNotFoundState } from "@/components/UltraNotFoundState";
import { UltraResultCard } from "@/components/UltraResultCard";
import { search } from "@/lib/search";
import { searchUltra } from "@/lib/searchUltra";

const PLACEHOLDERS: Record<Mode, string> = {
  semaforo: "Ex: maçã, arroz, refrigerante...",
  ultraprocessado: "Ex: Nutella, Toddynho, miojo...",
};

const SUBTITLES: Record<Mode, string> = {
  semaforo:
    "Digite o nome de um alimento e veja na hora se você pode comer à vontade, com moderação ou se é melhor evitar.",
  ultraprocessado:
    "Digite o nome de um produto e descubra se é um alimento ultraprocessado que pode prejudicar sua saúde.",
};

export default function Page() {
  const [mode, setMode] = useState<Mode>("semaforo");
  const [semQuery, setSemQuery] = useState("");
  const [ultraQuery, setUltraQuery] = useState("");

  const query = mode === "semaforo" ? semQuery : ultraQuery;
  const setQuery = mode === "semaforo" ? setSemQuery : setUltraQuery;

  const deferredQuery = useDeferredValue(query);
  const trimmed = deferredQuery.trim();

  const semResult = useMemo(
    () => (mode === "semaforo" && trimmed ? search(trimmed) : null),
    [mode, trimmed],
  );
  const ultraResult = useMemo(
    () => (mode === "ultraprocessado" && trimmed ? searchUltra(trimmed) : null),
    [mode, trimmed],
  );

  function handleModeChange(next: Mode) {
    setMode(next);
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-7 px-5 py-10 sm:py-14">
      <header>
        <div className="flex items-center gap-3">
          <span className="text-4xl" aria-hidden="true">
            🚦
          </span>
          <p className="text-base sm:text-lg font-semibold uppercase tracking-wider text-[var(--accent)]">
            Alimentação e Diabetes
          </p>
        </div>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight text-[var(--foreground)]">
          {mode === "semaforo"
            ? "Descubra como cada alimento afeta o seu açúcar no sangue."
            : "Descubra se um produto é ultraprocessado."}
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
          {SUBTITLES[mode]}
        </p>
      </header>

      <ModeToggle value={mode} onChange={handleModeChange} />

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder={PLACEHOLDERS[mode]}
      />

      <div className="min-h-[200px]">
        {mode === "semaforo" && (
          <>
            {!trimmed && <EmptyState />}
            {trimmed && semResult?.match && <ResultCard food={semResult.match} />}
            {trimmed && semResult && !semResult.match && (
              <NotFoundState
                query={trimmed}
                suggestions={semResult.suggestions}
                onPick={setSemQuery}
              />
            )}
          </>
        )}

        {mode === "ultraprocessado" && (
          <>
            {!trimmed && <UltraEmptyState />}
            {trimmed && ultraResult?.match && (
              <UltraResultCard item={ultraResult.match} />
            )}
            {trimmed && ultraResult && !ultraResult.match && (
              <UltraNotFoundState
                query={trimmed}
                suggestions={ultraResult.suggestions}
                onPick={setUltraQuery}
              />
            )}
          </>
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
