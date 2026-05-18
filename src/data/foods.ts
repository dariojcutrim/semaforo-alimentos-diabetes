export type Tier = "verde" | "amarelo" | "vermelho";

export type Category =
  | "Verduras e legumes"
  | "Frutas"
  | "Proteínas"
  | "Bebidas"
  | "Massas e carboidratos"
  | "Frutas mais doces"
  | "Outros"
  | "Doces"
  | "Industrializados";

export interface Food {
  name: string;
  tier: Tier;
  category: Category;
  synonyms?: string[];
}

export interface TierInfo {
  label: string;
  short: string;
  description: string;
  emoji: string;
}

export const TIER_INFO: Record<Tier, TierInfo> = {
  verde: {
    label: "Pode comer mais vezes",
    short: "Verde",
    description: "Ajuda a controlar o açúcar no sangue.",
    emoji: "🟢",
  },
  amarelo: {
    label: "Comer com moderação",
    short: "Amarelo",
    description: "Pode comer, mas sem exagero.",
    emoji: "🟡",
  },
  vermelho: {
    label: "Evitar",
    short: "Vermelho",
    description: "Aumenta muito o açúcar no sangue.",
    emoji: "🔴",
  },
};

export const YELLOW_TIP =
  "Coma em pequenas quantidades e junto com salada, feijão ou proteína.";

export const FOODS: Food[] = [
  // 🟢 Verduras e legumes
  { name: "Alface", tier: "verde", category: "Verduras e legumes" },
  { name: "Couve", tier: "verde", category: "Verduras e legumes" },
  { name: "Repolho", tier: "verde", category: "Verduras e legumes" },
  { name: "Chuchu", tier: "verde", category: "Verduras e legumes" },
  { name: "Abobrinha", tier: "verde", category: "Verduras e legumes" },
  { name: "Tomate", tier: "verde", category: "Verduras e legumes" },
  { name: "Pepino", tier: "verde", category: "Verduras e legumes" },
  { name: "Cenoura", tier: "verde", category: "Verduras e legumes" },
  { name: "Quiabo", tier: "verde", category: "Verduras e legumes" },

  // 🟢 Frutas
  { name: "Maçã", tier: "verde", category: "Frutas", synonyms: ["maca"] },
  { name: "Pera", tier: "verde", category: "Frutas" },
  { name: "Goiaba", tier: "verde", category: "Frutas" },
  { name: "Mamão", tier: "verde", category: "Frutas", synonyms: ["mamao", "papaia"] },
  { name: "Melão", tier: "verde", category: "Frutas", synonyms: ["melao"] },

  // 🟢 Proteínas
  { name: "Ovo", tier: "verde", category: "Proteínas", synonyms: ["ovos"] },
  { name: "Frango", tier: "verde", category: "Proteínas", synonyms: ["galinha", "peito de frango"] },
  { name: "Peixe", tier: "verde", category: "Proteínas", synonyms: ["tilapia", "sardinha", "atum"] },
  { name: "Carne cozida", tier: "verde", category: "Proteínas", synonyms: ["carne", "carne de panela"] },
  { name: "Feijão", tier: "verde", category: "Proteínas", synonyms: ["feijao"] },

  // 🟢 Bebidas
  { name: "Água", tier: "verde", category: "Bebidas", synonyms: ["agua"] },
  { name: "Café sem açúcar", tier: "verde", category: "Bebidas", synonyms: ["cafe", "cafe sem acucar", "cafe preto"] },
  { name: "Chá sem açúcar", tier: "verde", category: "Bebidas", synonyms: ["cha", "cha sem acucar"] },

  // 🟡 Massas e carboidratos
  { name: "Arroz branco", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["arroz"] },
  { name: "Macarrão", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["macarrao", "espaguete", "talharim", "massa"] },
  { name: "Pão francês", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["pao", "pao frances", "pãozinho", "paozinho"] },
  { name: "Cuscuz", tier: "amarelo", category: "Massas e carboidratos" },
  { name: "Tapioca", tier: "amarelo", category: "Massas e carboidratos" },
  { name: "Batata", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["batata inglesa", "purê", "pure"] },
  { name: "Mandioca", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["aipim", "macaxeira"] },

  // 🟡 Frutas mais doces
  { name: "Banana", tier: "amarelo", category: "Frutas mais doces" },
  { name: "Manga", tier: "amarelo", category: "Frutas mais doces" },
  { name: "Uva", tier: "amarelo", category: "Frutas mais doces", synonyms: ["uvas"] },

  // 🟡 Outros
  { name: "Suco natural", tier: "amarelo", category: "Outros", synonyms: ["suco", "suco de fruta"] },
  { name: "Bolacha cream cracker", tier: "amarelo", category: "Outros", synonyms: ["bolacha", "biscoito cream cracker", "cream cracker"] },
  { name: "Iogurte adoçado", tier: "amarelo", category: "Outros", synonyms: ["iogurte", "danone"] },

  // 🔴 Doces
  { name: "Refrigerante", tier: "vermelho", category: "Doces", synonyms: ["refri", "coca", "coca-cola", "pepsi", "guaraná", "guarana", "fanta", "sprite"] },
  { name: "Biscoito recheado", tier: "vermelho", category: "Doces", synonyms: ["bolacha recheada", "recheado"] },
  { name: "Balas", tier: "vermelho", category: "Doces", synonyms: ["bala", "doce", "doces"] },
  { name: "Chocolate", tier: "vermelho", category: "Doces", synonyms: ["bombom", "barra de chocolate"] },
  { name: "Bolo recheado", tier: "vermelho", category: "Doces", synonyms: ["bolo"] },
  { name: "Pudim", tier: "vermelho", category: "Doces" },

  // 🔴 Industrializados
  { name: "Salgadinho", tier: "vermelho", category: "Industrializados", synonyms: ["chips", "doritos", "ruffles", "cheetos"] },
  { name: "Miojo", tier: "vermelho", category: "Industrializados", synonyms: ["lamen", "macarrão instantâneo", "nissin"] },
  { name: "Salsicha", tier: "vermelho", category: "Industrializados", synonyms: ["hot dog", "cachorro quente"] },
  { name: "Mortadela", tier: "vermelho", category: "Industrializados", synonyms: ["frios", "presunto"] },
  { name: "Hambúrguer", tier: "vermelho", category: "Industrializados", synonyms: ["hamburguer", "x-burguer", "lanche"] },

  // 🔴 Outros
  { name: "Achocolatado", tier: "vermelho", category: "Outros", synonyms: ["nescau", "toddy"] },
  { name: "Suco de caixinha", tier: "vermelho", category: "Outros", synonyms: ["suco de caixa", "suco industrializado"] },
];

export const IMPORTANT_TIPS: string[] = [
  "Comer salada todos os dias",
  "Diminuir açúcar e refrigerante",
  "Evitar colocar muito açúcar no café",
  "Preferir comida feita em casa",
  "Fazer caminhada ou atividade física",
  "Tomar os remédios corretamente",
];

export const CLOSING_QUOTE =
  "Pequenas mudanças ajudam a controlar o diabetes e melhorar a saúde!";
