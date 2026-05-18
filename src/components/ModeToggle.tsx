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
            className={`flex min-h-14 items-center justify-center gap-2 rounded-xl px-4 text-base sm:text-lg font-semibold transition-colors ${
              active
                ? "bg-[var(--accent)] text-white shadow-sm"
                : "text-[var(--foreground)] hover:bg-slate-100"
            }`}
          >
            <span className="text-xl" aria-hidden="true">
              {opt.emoji}
            </span>
            <span className="hidden sm:inline">{opt.label}</span>
            <span className="sm:hidden">{opt.short}</span>
          </button>
        );
      })}
    </div>
  );
}
