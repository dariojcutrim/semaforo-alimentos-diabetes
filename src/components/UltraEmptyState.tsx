const EXAMPLES = ["Nutella", "Toddynho", "Miojo", "Salsicha"];

export function UltraEmptyState() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
        Como funciona
      </h2>
      <p className="mt-3 text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
        Digite o nome de um produto industrializado e veja se ele faz parte da
        lista de alimentos ultraprocessados que aumentam o risco de diabetes e
        outras doenças.
      </p>

      <div className="mt-6">
        <p className="text-base sm:text-lg font-semibold text-[var(--foreground)]">
          Tente buscar por exemplo:
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {EXAMPLES.map((ex) => (
            <span
              key={ex}
              className="inline-flex items-center rounded-full border-2 border-[var(--border)] bg-white px-4 py-2 text-base sm:text-lg font-medium text-[var(--foreground)]"
            >
              {ex}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
