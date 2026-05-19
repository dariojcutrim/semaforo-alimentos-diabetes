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
  "Coma em pequenas quantidades e sempre combine com fibras (chia, linhaça, aveia), proteínas (iogurte sem açúcar, queijo branco, ovo, feijão) ou gorduras boas (castanhas, pasta de amendoim). Elas funcionam como uma 'barreira', fazendo o açúcar da comida entrar bem mais devagar no sangue, evitando picos de glicemia!";

export const FOODS: Food[] = [
  // ─────────────────────────────────────────────
  // 🟢 VERDE — Verduras, folhas e legumes
  // ─────────────────────────────────────────────
  { name: "Acelga", tier: "verde", category: "Verduras e legumes" },
  { name: "Agrião", tier: "verde", category: "Verduras e legumes", synonyms: ["agriao"] },
  { name: "Aipo", tier: "verde", category: "Verduras e legumes", synonyms: ["salsao", "salsão"] },
  { name: "Alcachofra", tier: "verde", category: "Verduras e legumes" },
  { name: "Alface", tier: "verde", category: "Verduras e legumes", synonyms: ["alface lisa", "alface crespa", "alface americana", "alface roxa", "alface romana"] },
  { name: "Almeirão", tier: "verde", category: "Verduras e legumes", synonyms: ["almeirao"] },
  { name: "Abóbora", tier: "verde", category: "Verduras e legumes", synonyms: ["abobora", "moranga", "cabotiá", "cabotia", "abóbora japonesa", "abóbora paulista", "abóbora menina"] },
  { name: "Abobrinha", tier: "verde", category: "Verduras e legumes", synonyms: ["abobrinha italiana", "abobrinha paulista"] },
  { name: "Batata yacon", tier: "verde", category: "Verduras e legumes", synonyms: ["yacon", "batata yacon"] },
  { name: "Berinjela", tier: "verde", category: "Verduras e legumes" },
  { name: "Bertalha", tier: "verde", category: "Verduras e legumes" },
  { name: "Beterraba", tier: "verde", category: "Verduras e legumes" },
  { name: "Brócolis", tier: "verde", category: "Verduras e legumes", synonyms: ["brocolis"] },
  { name: "Catalonha", tier: "verde", category: "Verduras e legumes" },
  { name: "Cebola", tier: "verde", category: "Verduras e legumes" },
  { name: "Cebolinha", tier: "verde", category: "Verduras e legumes" },
  { name: "Cenoura", tier: "verde", category: "Verduras e legumes" },
  { name: "Chicória", tier: "verde", category: "Verduras e legumes", synonyms: ["chicoria"] },
  { name: "Chuchu", tier: "verde", category: "Verduras e legumes" },
  { name: "Cogumelos", tier: "verde", category: "Verduras e legumes", synonyms: ["cogumelo", "shitake", "champignon", "funghi"] },
  { name: "Couve", tier: "verde", category: "Verduras e legumes", synonyms: ["couve manteiga"] },
  { name: "Couve-flor", tier: "verde", category: "Verduras e legumes", synonyms: ["couve flor"] },
  { name: "Espinafre", tier: "verde", category: "Verduras e legumes" },
  { name: "Folha de mostarda", tier: "verde", category: "Verduras e legumes", synonyms: ["mostarda folha"] },
  { name: "Jiló", tier: "verde", category: "Verduras e legumes", synonyms: ["jilo"] },
  { name: "Maxixe", tier: "verde", category: "Verduras e legumes" },
  { name: "Nabo", tier: "verde", category: "Verduras e legumes" },
  { name: "Ora-pro-nóbis", tier: "verde", category: "Verduras e legumes", synonyms: ["ora pro nobis", "ora-pro-nobis"] },
  { name: "Palmito", tier: "verde", category: "Verduras e legumes" },
  { name: "Pepino", tier: "verde", category: "Verduras e legumes" },
  { name: "Pimentão", tier: "verde", category: "Verduras e legumes", synonyms: ["pimentao"] },
  { name: "Quiabo", tier: "verde", category: "Verduras e legumes" },
  { name: "Rabanete", tier: "verde", category: "Verduras e legumes" },
  { name: "Repolho", tier: "verde", category: "Verduras e legumes" },
  { name: "Rúcula", tier: "verde", category: "Verduras e legumes", synonyms: ["rucula"] },
  { name: "Taioba", tier: "verde", category: "Verduras e legumes" },
  { name: "Tomate", tier: "verde", category: "Verduras e legumes" },

  // ─────────────────────────────────────────────
  // 🟢 VERDE — Frutas
  // ─────────────────────────────────────────────
  { name: "Abacate", tier: "verde", category: "Frutas" },
  { name: "Abiu", tier: "verde", category: "Frutas" },
  { name: "Açaí", tier: "verde", category: "Frutas", synonyms: ["acai", "açaí natural", "polpa de açaí", "polpa de acai"] },
  { name: "Acerola", tier: "verde", category: "Frutas" },
  { name: "Ameixa fresca", tier: "verde", category: "Frutas", synonyms: ["ameixa"] },
  { name: "Amora", tier: "verde", category: "Frutas", synonyms: ["amora preta", "amora branca", "amora vermelha"] },
  { name: "Araçá", tier: "verde", category: "Frutas", synonyms: ["araca"] },
  { name: "Araticum", tier: "verde", category: "Frutas" },
  { name: "Atemoia", tier: "verde", category: "Frutas" },
  { name: "Bacuri", tier: "verde", category: "Frutas" },
  { name: "Buriti", tier: "verde", category: "Frutas" },
  { name: "Cacau", tier: "verde", category: "Frutas" },
  { name: "Cagaita", tier: "verde", category: "Frutas" },
  { name: "Cajá", tier: "verde", category: "Frutas", synonyms: ["caja"] },
  { name: "Caju", tier: "verde", category: "Frutas" },
  { name: "Carambola", tier: "verde", category: "Frutas" },
  { name: "Cereja", tier: "verde", category: "Frutas" },
  { name: "Ciriguela", tier: "verde", category: "Frutas", synonyms: ["seriguela"] },
  { name: "Cupuaçu", tier: "verde", category: "Frutas", synonyms: ["cupuacu"] },
  { name: "Figo", tier: "verde", category: "Frutas" },
  { name: "Framboesa", tier: "verde", category: "Frutas" },
  { name: "Fruta-do-conde", tier: "verde", category: "Frutas", synonyms: ["fruta do conde", "ata", "pinha"] },
  { name: "Fruta-pão", tier: "verde", category: "Frutas", synonyms: ["fruta pao", "fruta-pao"] },
  { name: "Goiaba", tier: "verde", category: "Frutas" },
  { name: "Graviola", tier: "verde", category: "Frutas" },
  { name: "Jabuticaba", tier: "verde", category: "Frutas" },
  { name: "Jambo", tier: "verde", category: "Frutas" },
  { name: "Jamelão", tier: "verde", category: "Frutas", synonyms: ["jamelao", "jambolão", "jambolao"] },
  { name: "Jenipapo", tier: "verde", category: "Frutas" },
  { name: "Kiwi", tier: "verde", category: "Frutas" },
  { name: "Laranja", tier: "verde", category: "Frutas", synonyms: ["laranja lima", "laranja baía", "laranja baia"] },
  { name: "Limão", tier: "verde", category: "Frutas", synonyms: ["limao", "lima"] },
  { name: "Maçã", tier: "verde", category: "Frutas", synonyms: ["maca", "maçã verde", "maca verde"] },
  { name: "Macaúba", tier: "verde", category: "Frutas", synonyms: ["macauba"] },
  { name: "Mamão", tier: "verde", category: "Frutas", synonyms: ["mamao", "papaia", "mamão formosa", "mamao formosa"] },
  { name: "Mangaba", tier: "verde", category: "Frutas" },
  { name: "Maracujá", tier: "verde", category: "Frutas", synonyms: ["maracuja"] },
  { name: "Mirtilo", tier: "verde", category: "Frutas", synonyms: ["blueberry"] },
  { name: "Morango", tier: "verde", category: "Frutas" },
  { name: "Murici", tier: "verde", category: "Frutas" },
  { name: "Nectarina", tier: "verde", category: "Frutas" },
  { name: "Pera", tier: "verde", category: "Frutas" },
  { name: "Pequi", tier: "verde", category: "Frutas" },
  { name: "Pêssego", tier: "verde", category: "Frutas", synonyms: ["pessego"] },
  { name: "Pitanga", tier: "verde", category: "Frutas" },
  { name: "Pitomba", tier: "verde", category: "Frutas" },
  { name: "Romã", tier: "verde", category: "Frutas", synonyms: ["roma"] },
  { name: "Tamarindo", tier: "verde", category: "Frutas" },
  { name: "Tangerina", tier: "verde", category: "Frutas", synonyms: ["mexerica", "bergamota"] },
  { name: "Umbu", tier: "verde", category: "Frutas" },

  // ─────────────────────────────────────────────
  // 🟢 VERDE — Proteínas
  // ─────────────────────────────────────────────
  { name: "Ovo", tier: "verde", category: "Proteínas", synonyms: ["ovos"] },
  { name: "Frango", tier: "verde", category: "Proteínas", synonyms: ["galinha", "peito de frango"] },
  { name: "Peixe", tier: "verde", category: "Proteínas", synonyms: ["tilapia", "sardinha", "atum"] },
  { name: "Carne cozida", tier: "verde", category: "Proteínas", synonyms: ["carne", "carne de panela"] },
  { name: "Ricota", tier: "verde", category: "Proteínas", synonyms: ["queijo ricota"] },
  { name: "Queijo minas frescal", tier: "verde", category: "Proteínas", synonyms: ["minas frescal", "queijo minas", "queijo branco", "queijo fresco"] },

  // ─────────────────────────────────────────────
  // 🟢 VERDE — Grãos integrais e leguminosas
  // ─────────────────────────────────────────────
  { name: "Aveia", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["aveia em flocos", "farelo de aveia", "flocos de aveia"] },
  { name: "Arroz integral", tier: "verde", category: "Grãos integrais e leguminosas" },
  { name: "Macarrão integral", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["macarrao integral", "massa integral"] },
  { name: "Quinoa", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["quinua"] },
  { name: "Feijão", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["feijao"] },
  { name: "Lentilha", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["lentilhas"] },
  { name: "Grão-de-bico", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["grao de bico", "grão de bico", "chickpea"] },
  { name: "Ervilha", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["ervilhas"] },
  { name: "Soja", tier: "verde", category: "Grãos integrais e leguminosas", synonyms: ["feijão de soja", "feijao de soja"] },

  // ─────────────────────────────────────────────
  // 🟢 VERDE — Oleaginosas e sementes
  // ─────────────────────────────────────────────
  { name: "Castanhas", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["castanha", "castanha do pará", "castanha do para", "castanha do brasil", "castanha de caju"] },
  { name: "Nozes", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["noz"] },
  { name: "Chia", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["semente de chia", "sementes de chia"] },
  { name: "Linhaça", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["linhaca", "semente de linhaça", "semente de linhaca"] },
  { name: "Semente de abóbora", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["sementes de abóbora", "sementes de abobora", "semente de abobora"] },

  // ─────────────────────────────────────────────
  // 🟢 VERDE — Gorduras boas
  // ─────────────────────────────────────────────
  { name: "Azeite de oliva extra virgem", tier: "verde", category: "Gorduras boas", synonyms: ["azeite", "azeite de oliva", "oliva", "azeite extra virgem"] },

  // ─────────────────────────────────────────────
  // 🟢 VERDE — Bebidas
  // ─────────────────────────────────────────────
  { name: "Água", tier: "verde", category: "Bebidas", synonyms: ["agua"] },
  { name: "Café sem açúcar", tier: "verde", category: "Bebidas", synonyms: ["cafe", "cafe sem acucar", "cafe preto"] },
  { name: "Chá sem açúcar", tier: "verde", category: "Bebidas", synonyms: ["cha", "cha sem acucar"] },

  // ─────────────────────────────────────────────
  // 🟡 AMARELO — Massas e carboidratos
  // ─────────────────────────────────────────────
  { name: "Arroz branco", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["arroz"] },
  { name: "Macarrão", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["macarrao", "espaguete", "talharim", "massa"] },
  { name: "Pão francês", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["pao", "pao frances", "pãozinho", "paozinho"] },
  { name: "Cuscuz", tier: "amarelo", category: "Massas e carboidratos" },
  { name: "Tapioca", tier: "amarelo", category: "Massas e carboidratos" },
  { name: "Batata", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["batata inglesa", "purê", "pure"] },
  { name: "Batata-doce", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["batata doce", "batata doce branca", "batata doce amarela"] },
  { name: "Inhame", tier: "amarelo", category: "Massas e carboidratos" },
  { name: "Cará", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["cara"] },
  { name: "Mandioquinha", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["batata baroa", "batata salsa"] },
  { name: "Mandioca", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["aipim", "macaxeira"] },
  { name: "Farinha de mandioca", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["farinha de tapioca"] },

  // ─────────────────────────────────────────────
  // 🟡 AMARELO — Frutas mais doces
  // ─────────────────────────────────────────────
  { name: "Banana", tier: "amarelo", category: "Frutas mais doces", synonyms: ["banana nanica", "banana caturra", "banana da terra", "banana maçã", "banana maca", "banana ouro", "banana prata", "pacova"] },
  { name: "Manga", tier: "amarelo", category: "Frutas mais doces", synonyms: ["manga espada", "manga haden", "manga palmer"] },
  { name: "Melancia", tier: "amarelo", category: "Frutas mais doces" },
  { name: "Melão", tier: "amarelo", category: "Frutas mais doces", synonyms: ["melao"] },
  { name: "Abacaxi", tier: "amarelo", category: "Frutas mais doces" },
  { name: "Caqui", tier: "amarelo", category: "Frutas mais doces" },
  { name: "Jaca", tier: "amarelo", category: "Frutas mais doces" },
  { name: "Uva", tier: "amarelo", category: "Frutas mais doces", synonyms: ["uvas", "uva rubi", "uva itália", "uva italia", "uva niágara", "uva niagara"] },
  { name: "Uva passa", tier: "amarelo", category: "Frutas mais doces", synonyms: ["passas", "uvas passas", "uva-passa", "uva passa branca", "uva passa escura"] },
  { name: "Tâmaras", tier: "amarelo", category: "Frutas mais doces", synonyms: ["tamara", "tâmara", "tamaras"] },
  { name: "Damasco seco", tier: "amarelo", category: "Frutas mais doces", synonyms: ["damasco"] },
  { name: "Ameixa seca", tier: "amarelo", category: "Frutas mais doces", synonyms: ["ameixas secas"] },
  { name: "Figo seco", tier: "amarelo", category: "Frutas mais doces" },
  { name: "Maçã seca", tier: "amarelo", category: "Frutas mais doces", synonyms: ["maca seca", "maçã desidratada", "maca desidratada"] },
  { name: "Frutas em calda", tier: "amarelo", category: "Frutas mais doces", synonyms: ["fruta em calda", "pêssego em calda", "pessego em calda", "abacaxi em calda"] },

  // ─────────────────────────────────────────────
  // 🟡 AMARELO — Outros
  // ─────────────────────────────────────────────
  { name: "Suco natural", tier: "amarelo", category: "Outros", synonyms: ["suco", "suco de fruta", "suco de laranja", "suco natural sem açúcar"] },
  { name: "Açaí com farinha", tier: "amarelo", category: "Outros", synonyms: ["acai com farinha", "açaí na tigela", "acai na tigela", "bowl de açaí", "bowl de acai"] },
  { name: "Bolacha cream cracker", tier: "amarelo", category: "Outros", synonyms: ["bolacha", "biscoito cream cracker", "cream cracker"] },
  { name: "Iogurte adoçado", tier: "amarelo", category: "Outros", synonyms: ["iogurte", "danone"] },
  { name: "Pipoca", tier: "amarelo", category: "Outros", synonyms: ["pipoca caseira"] },

  // ─────────────────────────────────────────────
  // 🔴 VERMELHO — Doces
  // ─────────────────────────────────────────────
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

  // ─────────────────────────────────────────────
  // 🔴 VERMELHO — Industrializados
  // ─────────────────────────────────────────────
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
  { name: "Mostarda", tier: "vermelho", category: "Industrializados", synonyms: ["mostarda condimento"] },
  { name: "Molho shoyu", tier: "vermelho", category: "Industrializados", synonyms: ["shoyu", "molho de soja", "molho soja"] },
  { name: "Maionese", tier: "vermelho", category: "Industrializados", synonyms: ["maionese industrializada", "hellmanns"] },

  // ─────────────────────────────────────────────
  // 🔴 VERMELHO — Outros
  // ─────────────────────────────────────────────
  { name: "Achocolatado", tier: "vermelho", category: "Outros", synonyms: ["nescau", "toddy"] },
  { name: "Suco de caixinha", tier: "vermelho", category: "Outros", synonyms: ["suco de caixa", "suco industrializado"] },

  // ─────────────────────────────────────────────
  // 🔴 VERMELHO — Bebidas alcoólicas
  // ─────────────────────────────────────────────
  { name: "Bebida alcoólica", tier: "vermelho", category: "Bebidas alcoólicas", synonyms: ["alcool", "álcool", "cerveja", "vinho", "vodka", "cachaça", "cachaca", "whisky", "uisque", "drink", "caipirinha"] },
];

export const IMPORTANT_TIPS: string[] = [
  "Comer salada todos os dias",
  "Diminuir açúcar e refrigerante",
  "Evitar colocar muito açúcar no café",
  "Preferir comida feita em casa",
  "Fazer caminhada ou atividade física",
  "Tomar os remédios corretamente",
  "Preferir sempre a fruta inteira ao suco — as fibras controlam melhor a glicemia",
  "Escolher legumes e verduras orgânicos e de base agroecológica quando possível",
];

export const CLOSING_QUOTE =
  "Pequenas mudanças ajudam a controlar o diabetes e melhorar a saúde!";
