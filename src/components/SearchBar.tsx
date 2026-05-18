"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative w-full">
      <label htmlFor="food-search" className="sr-only">
        Digite o nome de um alimento
      </label>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-2xl"
      >
        🔍
      </span>
      <input
        id="food-search"
        type="search"
        inputMode="search"
        autoComplete="off"
        autoFocus
        spellCheck={false}
        placeholder="Ex: maçã, arroz, refrigerante..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-16 rounded-2xl border-2 border-[var(--border)] bg-[var(--surface)] pl-14 pr-14 text-xl text-[var(--foreground)] placeholder:text-[var(--muted)] shadow-sm transition-colors focus:border-[var(--accent)]"
      />
      {value && (
        <button
          type="button"
          aria-label="Limpar busca"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full text-2xl text-[var(--muted)] hover:bg-slate-100 hover:text-[var(--foreground)]"
        >
          ×
        </button>
      )}
    </div>
  );
}
