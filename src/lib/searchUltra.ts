import { ULTRA_ITEMS, type UltraItem } from "@/data/ultraprocessed";
import { normalize } from "./normalize";

export interface UltraSearchResult {
  match: UltraItem | null;
  suggestions: UltraItem[];
}

interface IndexEntry {
  item: UltraItem;
  terms: string[];
}

const INDEX: IndexEntry[] = ULTRA_ITEMS.map((item) => ({
  item,
  terms: [item.name, ...(item.synonyms ?? [])].map(normalize),
}));

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  let prev = new Array(b.length + 1);
  let curr = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;

  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[b.length];
}

function fuzzyDistance(query: string, term: string): number {
  if (term.length <= 4) return query === term ? 0 : Infinity;
  return levenshtein(query, term);
}

export function searchUltra(rawQuery: string): UltraSearchResult {
  const q = normalize(rawQuery);
  if (!q) return { match: null, suggestions: [] };

  for (const entry of INDEX) {
    if (entry.terms.some((t) => t === q)) {
      return { match: entry.item, suggestions: [] };
    }
  }

  for (const entry of INDEX) {
    if (entry.terms.some((t) => t.startsWith(q) || q.startsWith(t))) {
      return { match: entry.item, suggestions: [] };
    }
  }

  if (q.length >= 3) {
    for (const entry of INDEX) {
      if (entry.terms.some((t) => t.includes(q) || q.includes(t))) {
        return { match: entry.item, suggestions: [] };
      }
    }
  }

  const tolerance = q.length <= 5 ? 1 : 2;
  const scored = INDEX.map((entry) => {
    const best = Math.min(...entry.terms.map((t) => fuzzyDistance(q, t)));
    return { item: entry.item, score: best };
  })
    .filter((s) => s.score <= tolerance)
    .sort((a, b) => a.score - b.score);

  if (scored.length > 0 && scored[0].score === 0) {
    return { match: scored[0].item, suggestions: [] };
  }

  if (scored.length === 1) {
    return { match: scored[0].item, suggestions: [] };
  }

  return {
    match: null,
    suggestions: scored.slice(0, 3).map((s) => s.item),
  };
}
