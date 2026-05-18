export type Tier = "verde" | "amarelo" | "vermelho";

export type Category =
  | "Verduras e legumes"
  | "Frutas"
  | "Proteínas"
  | "Grãos integrais e leguminosas"
  | "Oleaginosas e sementes"
  | "Gorduras boas"
  | "Bebidas"
  | "Massas e carboidratos"
  | "Frutas mais doces"
  | "Outros"
  | "Doces"
  | "Industrializados"
  | "Bebidas alcoólicas";

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
  "Coma em pequenas quantidades e junto com salada, feijão ou proteína. As fibras e proteínas funcionam como uma 'barreira', fazendo o açúcar da comida entrar bem mais devagar no sangue, evitando picos de glicemia!";

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
  { name: "Abacate", tier: "verde", category: "Frutas" },

  // 🟢 Proteínas
  { name: "Ovo", tier: "verde", category: "Proteínas", synonyms: ["ovos"] },
  { name: "Frango", tier: "verde", category: "Proteínas", synonyms: ["galinha", "peito de frango"] },
  { name: "Peixe", tier: "verde", category: "Proteínas", synonyms: ["tilapia", "sardinha", "atum"] },
  { name: "Carne cozida", tier: "verde", category: "Proteínas", synonyms: ["carne", "carne de panela"] },
  { name: "Ricota", tier: "verde", category: "Proteínas", synonyms: ["queijo ricota"] },
  { name: "Queijo minas frescal", tier: "verde", category: "Proteínas", synonyms: ["minas frescal", "queijo minas", "queijo branco", "queijo fresco"] },

  // 🟢 Grãos integrais e leguminosas
  { name: "Aveia", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["aveia em flocos", "farelo de aveia", "flocos de aveia"] },
  { name: "Arroz integral", tier: "verde", category: "Grãos integrais e leguminosas" },
  { name: "Macarrão integral", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["macarrao integral", "massa integral"] },
  { name: "Quinoa", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["quinua"] },
  { name: "Feijão", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["feijao"] },
  { name: "Lentilha", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["lentilhas"] },
  { name: "Grão-de-bico", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["grao de bico", "grão de bico", "chickpea"] },
  { name: "Ervilha", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["ervilhas"] },
  { name: "Soja", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["feijão de soja", "feijao de soja"] },

  // 🟢 Oleaginosas e sementes
  { name: "Castanhas", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["castanha", "castanha do pará", "castanha do para", "castanha do brasil", "castanha de caju"] },
  { name: "Nozes", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["noz"] },
  { name: "Chia", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["semente de chia", "sementes de chia"] },
  { name: "Linhaça", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["linhaca", "semente de linhaça", "semente de linhaca"] },
  { name: "Semente de abóbora", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["sementes de abóbora", "sementes de abobora", "semente de abobora"] },

  // 🟢 Gorduras boas
  { name: "Azeite de oliva extra virgem", tier: "verde", category: "Gorduras boas", synonyms: ["azeite", "azeite de oliva", "oliva", "azeite extra virgem"] },

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
  { name: "Batata-doce", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["batata doce"] },
  { name: "Inhame", tier: "amarelo", category: "Massas e carboidratos" },
  { name: "Mandioquinha", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["batata baroa", "batata salsa"] },
  { name: "Mandioca", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["aipim", "macaxeira"] },

  // 🟡 Frutas mais doces
  { name: "Banana", tier: "amarelo", category: "Frutas mais doces" },
  { name: "Manga", tier: "amarelo", category: "Frutas mais doces" },
  { name: "Uva", tier: "amarelo", category: "Frutas mais doces", synonyms: ["uvas"] },
  { name: "Uva passa", tier: "amarelo", category: "Frutas mais doces", synonyms: ["passas", "uvas passas", "uva-passa"] },
  { name: "Damasco seco", tier: "amarelo", category: "Frutas mais doces", synonyms: ["damasco"] },
  { name: "Ameixa seca", tier: "amarelo", category: "Frutas mais doces", synonyms: ["ameixas secas", "ameixa"] },

  // 🟡 Outros
  { name: "Suco natural", tier: "amarelo", category: "Outros", synonyms: ["suco", "suco de fruta"] },
  { name: "Bolacha cream cracker", tier: "amarelo", category: "Outros", synonyms: ["bolacha", "biscoito cream cracker", "cream cracker"] },
  { name: "Iogurte adoçado", tier: "amarelo", category: "Outros", synonyms: ["iogurte", "danone"] },
  { name: "Pipoca", tier: "amarelo", category: "Outros", synonyms: ["pipoca caseira"] },

  // 🔴 Doces
  { name: "Refrigerante", tier: "vermelho", category: "Doces", synonyms: ["refri", "coca", "coca-cola", "pepsi", "guaraná", "guarana", "fanta", "sprite"] },
  { name: "Biscoito recheado", tier: "vermelho", category: "Doces", synonyms: ["bolacha recheada", "recheado"] },
  { name: "Balas", tier: "vermelho", category: "Doces", synonyms: ["bala", "doce", "doces"] },
  { name: "Chocolate", tier: "vermelho", category: "Doces", synonyms: ["bombom", "barra de chocolate"] },
  { name: "Bolo recheado", tier: "vermelho", category: "Doces", synonyms: ["bolo"] },
  { name: "Pudim", tier: "vermelho", category: "Doces" },
  { name: "Mel", tier: "vermelho", category: "Doces" },
  { name: "Melado", tier: "vermelho", category: "Doces", synonyms: ["melaço", "melaco de cana"] },
  { name: "Açúcar mascavo", tier: "vermelho", category: "Doces", synonyms: ["acucar mascavo"] },
  { name: "Açúcar de coco", tier: "vermelho", category: "Doces", synonyms: ["acucar de coco"] },

  // 🔴 Industrializados
  { name: "Salgadinho", tier: "vermelho", category: "Industrializados", synonyms: ["chips", "doritos", "ruffles", "cheetos"] },
  { name: "Miojo", tier: "vermelho", category: "Industrializados", synonyms: ["lamen", "macarrão instantâneo", "macarrao instantaneo", "nissin"] },
  { name: "Salsicha", tier: "vermelho", category: "Industrializados", synonyms: ["hot dog", "cachorro quente"] },
  { name: "Mortadela", tier: "vermelho", category: "Industrializados", synonyms: ["frios"] },
  { name: "Presunto", tier: "vermelho", category: "Industrializados" },
  { name: "Bacon", tier: "vermelho", category: "Industrializados", synonyms: ["toucinho defumado"] },
  { name: "Salame", tier: "vermelho", category: "Industrializados" },
  { name: "Linguiça", tier: "vermelho", category: "Industrializados", synonyms: ["linguica", "linguiça calabresa", "calabresa"] },
  { name: "Peito de peru defumado", tier: "vermelho", category: "Industrializados", synonyms: ["peito de peru", "blanquet", "peru defumado"] },
  { name: "Hambúrguer", tier: "vermelho", category: "Industrializados", synonyms: ["hamburguer", "x-burguer", "lanche"] },
  { name: "Caldo em cubo", tier: "vermelho", category: "Industrializados", synonyms: ["caldo knorr", "caldo de galinha", "caldo de carne", "caldos em cubo"] },
  { name: "Catchup", tier: "vermelho", category: "Industrializados", synonyms: ["ketchup"] },
  { name: "Mostarda", tier: "vermelho", category: "Industrializados" },
  { name: "Molho shoyu", tier: "vermelho", category: "Industrializados", synonyms: ["shoyu", "molho de soja", "molho soja"] },
  { name: "Maionese", tier: "vermelho", category: "Industrializados", synonyms: ["maionese industrializada", "hellmanns"] },

  // 🔴 Outros
  { name: "Achocolatado", tier: "vermelho", category: "Outros", synonyms: ["nescau", "toddy"] },
  { name: "Suco de caixinha", tier: "vermelho", category: "Outros", synonyms: ["suco de caixa", "suco industrializado"] },

  // 🔴 Bebidas alcoólicas
  { name: "Bebida alcoólica", tier: "vermelho", category: "Bebidas alcoólicas", synonyms: ["alcool", "álcool", "cerveja", "vinho", "vodka", "cachaça", "cachaca", "whisky", "uisque", "drink", "caipirinha"] },
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
