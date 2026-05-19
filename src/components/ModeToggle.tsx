"use client";

export type Mode = "semaforo" | "ultraprocessado";

interface Props {
  value: Mode;
  onChange: (mode: Mode) => void;
}

const OPTIONS: { value: Mode; emoji: string; label: string; short: string }[] = [
  { value: "semaforo", emoji: "🚦", label: "Semáforo dos Alimentos", short: "Semáforo" },
  { value: "ultraprocessado", emoji: "🏭", label: "É ultraprocessado?", short: "Ultraprocessados" },
];

export function ModeToggle({ value, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Escolha a ferramenta"
      className="grid grid-cols-2 gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm"
    >
      {OPTIONS.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.value)}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 rounded-xl px-2 sm:px-4 py-3 sm:py-0 sm:min-h-14 text-[0.8125rem] sm:text-lg font-semibold transition-colors ${
              active
                ? "bg-[var(--accent)] text-white shadow-sm"
                : "text-[var(--foreground)] hover:bg-slate-100"
            }`}
          >
            <span className="text-lg sm:text-xl" aria-hidden="true">
              {opt.emoji}
            </span>
            <span className="hidden sm:inline">{opt.label}</span>
            <span className="sm:hidden leading-tight text-center">{opt.short}</span>
          </button>
        );
      })}
    </div>
  );
}
