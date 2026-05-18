import { CLOSING_QUOTE, IMPORTANT_TIPS } from "@/data/foods";

export function TipsFooter() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
        💡 Dicas importantes
      </h2>

      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {IMPORTANT_TIPS.map((tip) => (
          <li
            key={tip}
            className="flex items-start gap-3 text-lg sm:text-xl text-[var(--foreground)] leading-relaxed"
          >
            <span
              className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[var(--verde-soft)] text-[var(--verde-deep)] text-base font-bold"
              aria-hidden="true"
            >
              ✓
            </span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>

      <blockquote className="mt-7 rounded-2xl border-l-4 border-[var(--accent)] bg-slate-50 px-6 py-5 text-lg sm:text-xl italic text-[var(--foreground)]">
        “{CLOSING_QUOTE}”
      </blockquote>
    </section>
  );
}
