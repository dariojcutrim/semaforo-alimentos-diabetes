"use client";

import { useState } from "react";
import { AlimentacaoPage } from "@/components/AlimentacaoPage";
import { FootCarePage } from "@/components/FootCarePage";

type Section = "pe-diabetico" | "alimentacao";

const SECTIONS: {
  value: Section;
  emoji: string;
  label: string;
  short: string;
}[] = [
  { value: "pe-diabetico", emoji: "🦶", label: "Cuidados com os Pés", short: "Pés" },
  { value: "alimentacao", emoji: "🍎", label: "Alimentação", short: "Alimentação" },
];

const TITLES: Record<Section, string> = {
  "pe-diabetico": "Cuide dos seus pés todos os dias.",
  alimentacao: "Descubra como cada alimento afeta o seu açúcar no sangue.",
};

export default function Page() {
  const [section, setSection] = useState<Section>("pe-diabetico");

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-7 px-5 py-10 sm:py-14">
      <header>
        <div className="flex items-center gap-3">
          <span className="text-4xl" aria-hidden="true">
            💙
          </span>
          <p className="text-base sm:text-lg font-semibold uppercase tracking-wider text-[var(--accent)]">
            Diabetes — Cuidados Diários
          </p>
        </div>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight text-[var(--foreground)]">
          {TITLES[section]}
        </h1>
      </header>

      {/* Main navigation */}
      <nav
        role="tablist"
        aria-label="Escolha a seção"
        className="grid grid-cols-2 gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm"
      >
        {SECTIONS.map((s) => {
          const active = s.value === section;
          return (
            <button
              key={s.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSection(s.value)}
              className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 rounded-xl px-2 sm:px-4 py-3 sm:py-0 sm:min-h-14 text-[0.8125rem] sm:text-lg font-semibold transition-colors ${
                active
                  ? "bg-[var(--accent)] text-white shadow-sm"
                  : "text-[var(--foreground)] hover:bg-slate-100"
              }`}
            >
              <span className="text-lg sm:text-xl" aria-hidden="true">
                {s.emoji}
              </span>
              <span className="hidden sm:inline">{s.label}</span>
              <span className="sm:hidden leading-tight text-center">
                {s.short}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Content */}
      {section === "pe-diabetico" && <FootCarePage />}
      {section === "alimentacao" && <AlimentacaoPage />}

      <footer className="pt-4 pb-2 text-center text-sm text-[var(--muted)]">
        Informações educativas. Não substitui a orientação de um profissional
        de saúde.
      </footer>
    </div>
  );
}
