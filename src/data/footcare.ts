export interface ChecklistItem {
  id: string;
  label: string;
  emoji: string;
}

export const DAILY_CHECKLIST: ChecklistItem[] = [
  { id: "olhar", label: "Olhar os pés", emoji: "👀" },
  { id: "lavar", label: "Lavar com água morna", emoji: "🚿" },
  { id: "secar", label: "Secar bem (entre os dedos)", emoji: "🧤" },
  { id: "hidratar", label: "Hidratar (não entre os dedos)", emoji: "💧" },
  { id: "sapato", label: "Usar sapato fechado", emoji: "👟" },
  { id: "descalco", label: "Não andar descalço", emoji: "🚫" },
];

export const WEEKLY_CHECKLIST: ChecklistItem[] = [
  { id: "examinar", label: "Examinar melhor os pés", emoji: "🔍" },
  { id: "sapatos", label: "Ver dentro dos sapatos", emoji: "👞" },
  { id: "pele", label: "Checar pele (ressecamento/rachadura)", emoji: "🩹" },
];

export const ALERT_SIGNS: string[] = [
  "Ferida",
  "Vermelhidão",
  "Secreção",
  "Dor ou dormência",
];

export const UBS_SIGNS: string[] = [
  "Pequena ferida",
  "Vermelhidão leve",
  "Sem dor intensa",
  "Sem secreção",
  "Sem sinais de infecção",
];

export const ER_SIGNS: string[] = [
  "Ferida profunda",
  "Secreção/pus",
  "Mau cheiro",
  "Dor intensa",
  "Febre",
  "Área escura (necrose)",
  "Inchaço importante",
];
