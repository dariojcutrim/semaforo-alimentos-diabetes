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

export function AlimentacaoPage() {
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

  return (
    <div className="flex flex-col gap-7">
      <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
        {SUBTITLES[mode]}
      </p>

      <ModeToggle value={mode} onChange={setMode} />

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
    </div>
  );
}
