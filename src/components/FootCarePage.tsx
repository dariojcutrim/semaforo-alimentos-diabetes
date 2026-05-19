"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ALERT_SIGNS,
  DAILY_CHECKLIST,
  ER_SIGNS,
  UBS_SIGNS,
  WEEKLY_CHECKLIST,
  type ChecklistItem,
} from "@/data/footcare";

// ─── helpers ───────────────────────────────────────────

function todayKey() {
  return `foot-daily-${new Date().toISOString().split("T")[0]}`;
}

function weekKey() {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(now.getFullYear(), now.getMonth(), diff);
  return `foot-weekly-${monday.toISOString().split("T")[0]}`;
}

function useChecklist(keyFn: () => string) {
  const [key, setKey] = useState("");
  const [checked, setChecked] = useState<Set<string>>(new Set());

  useEffect(() => {
    const k = keyFn();
    setKey(k);
    try {
      const saved = localStorage.getItem(k);
      if (saved) setChecked(new Set(JSON.parse(saved)));
    } catch {
      /* ignore */
    }
  }, [keyFn]);

  const toggle = useCallback(
    (id: string) => {
      setChecked((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        if (key) localStorage.setItem(key, JSON.stringify([...next]));
        return next;
      });
    },
    [key],
  );

  return { checked, toggle };
}

// ─── sub-components ────────────────────────────────────

function ChecklistSection({
  title,
  emoji,
  items,
  checked,
  onToggle,
}: {
  title: string;
  emoji: string;
  items: ChecklistItem[];
  checked: Set<string>;
  onToggle: (id: string) => void;
}) {
  const done = items.filter((i) => checked.has(i.id)).length;
  const total = items.length;
  const allDone = done === total;
  const pct = total > 0 ? (done / total) * 100 : 0;

  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
          {emoji} {title}
        </h2>
        <span
          className={`rounded-full px-3 py-1 text-sm font-bold ${
            allDone
              ? "bg-[var(--verde-soft)] text-[var(--verde-deep)]"
              : "bg-slate-100 text-[var(--muted)]"
          }`}
        >
          {done}/{total}
        </span>
      </div>

      {/* progress bar */}
      <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-[var(--verde)] transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>

      {allDone && (
        <p className="mt-3 text-base font-semibold text-[var(--verde)]">
          Parabéns! Todos os cuidados de hoje foram feitos! ✅
        </p>
      )}

      <ul className="mt-5 flex flex-col gap-2">
        {items.map((item) => {
          const isChecked = checked.has(item.id);
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onToggle(item.id)}
                className={`flex w-full items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left text-lg sm:text-xl font-medium transition-colors ${
                  isChecked
                    ? "border-[var(--verde)] bg-[var(--verde-soft)] text-[var(--verde-deep)]"
                    : "border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-slate-50"
                }`}
              >
                <span
                  className={`flex h-8 w-8 flex-none items-center justify-center rounded-lg text-base ${
                    isChecked
                      ? "bg-[var(--verde)] text-white"
                      : "bg-slate-100 text-[var(--muted)]"
                  }`}
                  aria-hidden="true"
                >
                  {isChecked ? "✓" : item.emoji}
                </span>
                <span className={`min-w-0 ${isChecked ? "line-through opacity-70" : ""}`}>
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// ─── main component ────────────────────────────────────

export function FootCarePage() {
  const daily = useChecklist(todayKey);
  const weekly = useChecklist(weekKey);

  return (
    <div className="flex flex-col gap-7">
      {/* Intro */}
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-sm">
        <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed">
          Cuidar dos pés todos os dias é uma das coisas mais importantes para
          quem tem diabetes. Marque cada cuidado conforme for fazendo ao longo
          do dia.
        </p>
      </section>

      {/* Daily checklist */}
      <ChecklistSection
        title="Todo dia"
        emoji="📅"
        items={DAILY_CHECKLIST}
        checked={daily.checked}
        onToggle={daily.toggle}
      />

      {/* Weekly checklist */}
      <ChecklistSection
        title="1x na semana"
        emoji="📆"
        items={WEEKLY_CHECKLIST}
        checked={weekly.checked}
        onToggle={weekly.toggle}
      />

      {/* Alert signs */}
      <section className="overflow-hidden rounded-3xl border border-[var(--border)] shadow-lg">
        <div className="bg-[var(--vermelho)] px-6 sm:px-8 py-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            🚨 Sinais de alerta
          </h2>
          <p className="mt-2 text-base sm:text-lg text-white/90 leading-relaxed">
            Se notar algum desses sinais nos pés, procure atendimento:
          </p>
        </div>
        <div className="bg-[var(--vermelho-soft)] px-6 sm:px-8 py-5">
          <ul className="flex flex-col gap-2">
            {ALERT_SIGNS.map((sign) => (
              <li
                key={sign}
                className="flex items-center gap-3 text-lg sm:text-xl font-medium text-[var(--vermelho-deep)]"
              >
                <span className="text-base" aria-hidden="true">
                  ⚠️
                </span>
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where to go */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* UBS */}
        <section className="overflow-hidden rounded-3xl border border-[var(--border)] shadow-sm">
          <div className="bg-[var(--verde)] px-6 py-5">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              ➡️ UBS
            </h3>
            <p className="mt-1 text-sm sm:text-base text-white/90">
              Rotina ou caso leve
            </p>
          </div>
          <div className="bg-[var(--verde-soft)] px-6 py-5">
            <ul className="flex flex-col gap-2">
              {UBS_SIGNS.map((sign) => (
                <li
                  key={sign}
                  className="flex items-center gap-2 text-base sm:text-lg text-[var(--verde-deep)]"
                >
                  <span className="text-sm" aria-hidden="true">
                    🟢
                  </span>
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pronto Socorro */}
        <section className="overflow-hidden rounded-3xl border border-[var(--border)] shadow-sm">
          <div className="bg-[var(--vermelho)] px-6 py-5">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              ➡️ Pronto Socorro
            </h3>
            <p className="mt-1 text-sm sm:text-base text-white/90">
              Urgência
            </p>
          </div>
          <div className="bg-[var(--vermelho-soft)] px-6 py-5">
            <ul className="flex flex-col gap-2">
              {ER_SIGNS.map((sign) => (
                <li
                  key={sign}
                  className="flex items-center gap-2 text-base sm:text-lg text-[var(--vermelho-deep)]"
                >
                  <span className="text-sm" aria-hidden="true">
                    🔴
                  </span>
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
