export type Tier = "verde" | "amarelo" | "vermelho";

export type Category =
  | "Verduras e legumes"
  | "Frutas"
  | "Proteínas"
  | "Laticínios"
  | "Grãos integrais e leguminosas"
  | "Oleaginosas e sementes"
  | "Gorduras boas"
  | "Bebidas"
  | "Massas e carboidratos"
  | "Frutas mais doces"
  | "Comidas típicas"
  | "Adoçantes e açúcares"
  | "Low carb"
  | "Outros"
  | "Doces"
  | "Industrializados"
  | "Bebidas alcoólicas";

export interface Food {
  name: string;
  tier: Tier;
  category: Category;
  synonyms?: string[];
  tip?: string;
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
  { name: "Açaí", tier: "verde", category: "Frutas", synonyms: ["acai", "açaí natural", "polpa de açaí", "polpa de acai", "açaí puro", "acai puro"], tip: "Açaí natural, sem xarope de guaraná, granola ou banana, é rico em antioxidantes e gorduras boas. Cuidado: o açaí da tigela costuma vir adoçado — pergunte sempre antes de pedir." },
  { name: "Acerola", tier: "verde", category: "Frutas" },
  { name: "Ameixa fresca", tier: "verde", category: "Frutas", synonyms: ["ameixa"] },
  { name: "Amora", tier: "verde", category: "Frutas", synonyms: ["amora preta", "amora branca", "amora vermelha"] },
  { name: "Araçá", tier: "verde", category: "Frutas", synonyms: ["araca"] },
  { name: "Araticum", tier: "verde", category: "Frutas" },
  { name: "Atemoia", tier: "verde", category: "Frutas" },
  { name: "Bacuri", tier: "verde", category: "Frutas" },
  { name: "Cacau", tier: "verde", category: "Frutas" },
  { name: "Cagaita", tier: "verde", category: "Frutas" },
  { name: "Cajá", tier: "verde", category: "Frutas", synonyms: ["caja"] },
  { name: "Caju", tier: "verde", category: "Frutas" },
  { name: "Carambola", tier: "verde", category: "Frutas" },
  { name: "Cereja", tier: "verde", category: "Frutas" },
  { name: "Ciriguela", tier: "verde", category: "Frutas", synonyms: ["seriguela"] },
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
  { name: "Physalis", tier: "verde", category: "Frutas", synonyms: ["fisalis"] },
  { name: "Pitanga", tier: "verde", category: "Frutas" },
  { name: "Pitaya", tier: "verde", category: "Frutas", synonyms: ["pitaia", "fruta do dragão", "fruta do dragao"] },
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
  { name: "Peixe", tier: "verde", category: "Proteínas", synonyms: ["tilapia", "tilápia", "merluza", "pescada"] },
  { name: "Sardinha", tier: "verde", category: "Proteínas", synonyms: ["sardinhas", "sardinha em lata", "sardinha enlatada"] },
  { name: "Atum", tier: "verde", category: "Proteínas", synonyms: ["atum fresco", "atum em água", "atum em agua", "atum em lata"] },
  { name: "Bacalhau", tier: "verde", category: "Proteínas" },
  { name: "Camarão", tier: "verde", category: "Proteínas", synonyms: ["camarao", "camarões", "camaroes"] },
  { name: "Polvo", tier: "verde", category: "Proteínas" },
  { name: "Lula", tier: "verde", category: "Proteínas" },
  { name: "Tofu", tier: "verde", category: "Proteínas", synonyms: ["queijo de soja"] },
  { name: "Tempeh", tier: "verde", category: "Proteínas" },
  { name: "Fígado bovino", tier: "verde", category: "Proteínas", synonyms: ["figado", "fígado", "figado bovino", "fígado de boi"] },
  { name: "Coração de frango", tier: "verde", category: "Proteínas", synonyms: ["coracao de frango", "coraçãozinho", "coracaozinho"] },
  { name: "Carne cozida", tier: "verde", category: "Proteínas", synonyms: ["carne", "carne de panela"] },
  { name: "Sashimi", tier: "verde", category: "Proteínas", synonyms: ["sashimi de salmão", "sashimi de atum", "sashimi salmao", "sashimi atum"], tip: "Fatias de peixe cru sem arroz — tem 0g de carboidratos! Rico em ômega-3, ótimo para o coração. É a melhor escolha em um restaurante japonês para quem tem diabetes." },

  // ─────────────────────────────────────────────
  // 🟢 VERDE — Laticínios
  // ─────────────────────────────────────────────
  { name: "Iogurte natural integral", tier: "verde", category: "Laticínios", synonyms: ["iogurte natural", "iogurte integral", "iogurte natural sem açúcar", "iogurte natural sem acucar"] },
  { name: "Iogurte natural desnatado", tier: "verde", category: "Laticínios", synonyms: ["iogurte desnatado"] },
  { name: "Iogurte grego natural", tier: "verde", category: "Laticínios", synonyms: ["iogurte grego", "iogurte grego sem açúcar", "iogurte grego sem acucar"] },
  { name: "Skyr natural", tier: "verde", category: "Laticínios", synonyms: ["skyr"] },
  { name: "Kefir", tier: "verde", category: "Laticínios" },
  { name: "Queijo minas frescal", tier: "verde", category: "Laticínios", synonyms: ["minas frescal", "queijo minas", "queijo branco", "queijo fresco"] },
  { name: "Ricota", tier: "verde", category: "Laticínios", synonyms: ["queijo ricota"] },
  { name: "Queijo cottage", tier: "verde", category: "Laticínios", synonyms: ["cottage"] },
  { name: "Leite desnatado", tier: "verde", category: "Laticínios" },
  { name: "Leite de amêndoas", tier: "verde", category: "Laticínios", synonyms: ["leite de amendoas", "leite de amêndoa sem açúcar", "leite de amendoa sem acucar"] },
  { name: "Leite de soja sem açúcar", tier: "verde", category: "Laticínios", synonyms: ["leite de soja"] },

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
  { name: "Castanhas", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["castanha", "castanha do pará", "castanha do para", "castanha do brasil", "castanha de caju"], tip: "Excelentes para diabéticos: têm baixo índice glicêmico e ajudam a estabilizar a glicose. Mas coma com moderação por serem calóricas. Porção ideal: cerca de 4 castanhas-do-pará ou 10 castanhas-de-caju por dia. Prefira sempre in natura — evite as versões com sal ou açúcar." },
  { name: "Nozes", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["noz"], tip: "Ricas em gorduras boas, fibras e antioxidantes — ajudam a controlar a glicemia e proteger o coração. Porção ideal: cerca de 5 unidades por dia. São calóricas, então coma com moderação. Prefira sempre in natura, sem sal ou açúcar." },
  { name: "Amêndoas", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["amendoa", "amêndoa", "amendoas"], tip: "Ótimas para diabéticos: ricas em fibras, proteínas e gorduras boas que ajudam a evitar picos de glicemia. Porção ideal: cerca de 10 a 12 unidades por dia. São calóricas, então coma com moderação. Prefira sempre in natura, sem sal ou açúcar." },
  { name: "Amendoim", tier: "verde", category: "Oleaginosas e sementes", synonyms: ["amendoins", "pasta de amendoim"], tip: "Tem baixo índice glicêmico e é rico em proteínas e gorduras boas. Porção ideal: cerca de 20 unidades ou 1 colher de sopa de pasta (sem açúcar). Evite as versões salgadas de pacote ou caramelizadas — são processadas e prejudicam a saúde." },
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
  { name: "Chá verde", tier: "verde", category: "Bebidas", synonyms: ["cha verde"] },
  { name: "Chá de hibisco", tier: "verde", category: "Bebidas", synonyms: ["cha de hibisco", "hibisco"] },
  { name: "Chá preto", tier: "verde", category: "Bebidas", synonyms: ["cha preto"] },
  { name: "Mate sem açúcar", tier: "verde", category: "Bebidas", synonyms: ["mate", "chimarrão", "chimarrao", "tererê", "terere", "erva mate"] },

  // ─────────────────────────────────────────────
  // 🟢 VERDE — Adoçantes e açúcares
  // ─────────────────────────────────────────────
  { name: "Stevia", tier: "verde", category: "Adoçantes e açúcares", synonyms: ["estévia", "estevia"] },
  { name: "Eritritol", tier: "verde", category: "Adoçantes e açúcares" },
  { name: "Xilitol", tier: "verde", category: "Adoçantes e açúcares" },
  { name: "Gelatina diet", tier: "verde", category: "Adoçantes e açúcares", synonyms: ["gelatina zero", "gelatina sem açúcar", "gelatina sem acucar"] },

  // ─────────────────────────────────────────────
  // 🟢 VERDE — Low carb / fitness
  // ─────────────────────────────────────────────
  { name: "Whey protein", tier: "verde", category: "Low carb", synonyms: ["whey", "whey sem açúcar", "whey sem acucar", "proteína em pó", "proteina em po"] },
  { name: "Pão low carb", tier: "verde", category: "Low carb", synonyms: ["pao low carb", "pão lowcarb"] },
  { name: "Farinha de amêndoa", tier: "verde", category: "Low carb", synonyms: ["farinha de amendoa"] },
  { name: "Farinha de coco", tier: "verde", category: "Low carb" },
  { name: "Psyllium", tier: "verde", category: "Low carb", synonyms: ["psilio", "psílio"] },
  { name: "Pasta de amendoim integral", tier: "verde", category: "Low carb", synonyms: ["pasta de amendoim 100%", "pasta de amendoim sem açúcar", "pasta de amendoim sem acucar"] },
  { name: "Tahine", tier: "verde", category: "Low carb", synonyms: ["pasta de gergelim", "tahini"] },
  { name: "Chocolate 85%", tier: "verde", category: "Low carb", synonyms: ["chocolate 85", "chocolate 90%", "chocolate 90", "chocolate amargo 85", "chocolate amargo 90"], tip: "Em pequenas porções (1–2 quadradinhos) pode até ajudar na saciedade. Cuidado: chocolates 'amargos' abaixo de 70% ainda têm bastante açúcar." },

  // ─────────────────────────────────────────────
  // 🟡 AMARELO — Massas e carboidratos
  // ─────────────────────────────────────────────
  { name: "Arroz branco", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["arroz"] },
  { name: "Macarrão", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["macarrao", "espaguete", "talharim", "massa"] },
  { name: "Pão francês", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["pao", "pao frances", "pãozinho", "paozinho"] },
  { name: "Batata", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["batata inglesa", "purê", "pure"] },
  { name: "Batata-doce", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["batata doce", "batata doce branca", "batata doce amarela"] },
  { name: "Inhame", tier: "amarelo", category: "Massas e carboidratos" },
  { name: "Cará", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["cara"] },
  { name: "Mandioquinha", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["batata baroa", "batata salsa"] },
  { name: "Mandioca", tier: "amarelo", category: "Massas e carboidratos", synonyms: ["aipim", "macaxeira"] },

  // ─────────────────────────────────────────────
  // 🟡 AMARELO — Comidas típicas brasileiras
  // ─────────────────────────────────────────────
  { name: "Tapioca", tier: "amarelo", category: "Comidas típicas", synonyms: ["tapioca recheada"], tip: "É carboidrato refinado e tem índice glicêmico alto. Prefira recheios com proteína e gordura boa (ovo, queijo, frango, abacate) para reduzir o pico de glicemia. Evite recheios doces." },
  { name: "Cuscuz paulista", tier: "amarelo", category: "Comidas típicas" },
  { name: "Cuscuz nordestino", tier: "amarelo", category: "Comidas típicas", synonyms: ["cuscuz", "cuscuz de flocão", "cuscuz de flocao", "flocão de milho", "flocao de milho"] },
  { name: "Farinha de mandioca", tier: "amarelo", category: "Comidas típicas", synonyms: ["farinha de tapioca"] },
  { name: "Farofa simples", tier: "amarelo", category: "Comidas típicas", synonyms: ["farofa"] },
  { name: "Pão de queijo", tier: "amarelo", category: "Comidas típicas", synonyms: ["pao de queijo"], tip: "Melhor opção que pão francês por ter polvilho + queijo + ovo, mas ainda é carboidrato. Limite a 1–2 unidades pequenas." },
  { name: "Beiju", tier: "amarelo", category: "Comidas típicas" },
  { name: "Baião de dois", tier: "amarelo", category: "Comidas típicas", synonyms: ["baiao de dois"] },
  { name: "Acarajé", tier: "amarelo", category: "Comidas típicas", synonyms: ["acaraje"], tip: "O feijão fradinho é bom, mas é frito em dendê. Coma ocasionalmente e evite o vatapá doce no recheio." },
  { name: "Pamonha salgada", tier: "amarelo", category: "Comidas típicas" },
  { name: "Esfiha assada", tier: "amarelo", category: "Comidas típicas", synonyms: ["esfirra assada"] },
  { name: "Kibe assado", tier: "amarelo", category: "Comidas típicas", synonyms: ["quibe assado"] },

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
  { name: "Buriti", tier: "amarelo", category: "Frutas mais doces" },
  { name: "Cupuaçu", tier: "amarelo", category: "Frutas mais doces", synonyms: ["cupuacu"] },
  { name: "Uva passa", tier: "amarelo", category: "Frutas mais doces", synonyms: ["passas", "uvas passas", "uva-passa", "uva passa branca", "uva passa escura"], tip: "Açúcar concentrado. Limite a 1 colher de sopa rasa por vez." },
  { name: "Damasco seco", tier: "amarelo", category: "Frutas mais doces", synonyms: ["damasco"], tip: "Concentra muito açúcar no processo de desidratação. Porção segura: 2–3 unidades." },
  { name: "Ameixa seca", tier: "amarelo", category: "Frutas mais doces", synonyms: ["ameixas secas"], tip: "Boa para o intestino, mas tem bastante açúcar. Máximo 2–3 unidades por dia." },
  { name: "Figo seco", tier: "amarelo", category: "Frutas mais doces" },
  { name: "Maçã seca", tier: "amarelo", category: "Frutas mais doces", synonyms: ["maca seca", "maçã desidratada", "maca desidratada"] },
  { name: "Frutas em calda", tier: "amarelo", category: "Frutas mais doces", synonyms: ["fruta em calda", "pêssego em calda", "pessego em calda", "abacaxi em calda"] },

  // ─────────────────────────────────────────────
  // 🟡 AMARELO — Laticínios
  // ─────────────────────────────────────────────
  { name: "Mussarela", tier: "amarelo", category: "Laticínios", synonyms: ["muçarela", "queijo mussarela"] },
  { name: "Parmesão", tier: "amarelo", category: "Laticínios", synonyms: ["parmesao", "queijo parmesão"] },
  { name: "Requeijão", tier: "amarelo", category: "Laticínios", synonyms: ["requeijao", "catupiry"] },
  { name: "Cream cheese", tier: "amarelo", category: "Laticínios" },
  { name: "Leite integral", tier: "amarelo", category: "Laticínios", synonyms: ["leite"] },
  { name: "Leite de aveia", tier: "amarelo", category: "Laticínios" },
  { name: "Leite de coco", tier: "amarelo", category: "Laticínios" },

  // ─────────────────────────────────────────────
  // 🟡 AMARELO — Adoçantes e açúcares
  // ─────────────────────────────────────────────
  { name: "Sucralose", tier: "amarelo", category: "Adoçantes e açúcares", tip: "Adoçante seguro em uso moderado. Evite usar em grandes quantidades diariamente." },
  { name: "Aspartame", tier: "amarelo", category: "Adoçantes e açúcares" },
  { name: "Geleia diet", tier: "amarelo", category: "Adoçantes e açúcares", synonyms: ["geleia zero", "geleia sem açúcar", "geleia sem acucar"] },
  { name: "Refrigerante zero", tier: "amarelo", category: "Adoçantes e açúcares", synonyms: ["refri zero", "coca zero", "coca-cola zero", "guaraná zero", "guarana zero", "refrigerante diet", "refri diet"], tip: "Não eleva a glicemia, mas o consumo frequente está associado a maior compulsão por doces. Prefira água, água com limão ou chás." },
  { name: "Suco em pó zero", tier: "amarelo", category: "Adoçantes e açúcares", synonyms: ["suco em pó diet", "suco em po zero", "suco em po diet", "tang zero", "clight"] },

  // ─────────────────────────────────────────────
  // 🟡 AMARELO — Low carb / fitness
  // ─────────────────────────────────────────────
  { name: "Barrinha de proteína", tier: "amarelo", category: "Low carb", synonyms: ["barra de proteína", "barra de proteina", "barrinha de proteina", "barrinha proteica"], tip: "Varia muito entre marcas. Procure no rótulo: até 5g de açúcar e pelo menos 10g de proteína por unidade." },
  { name: "Chocolate 70%", tier: "amarelo", category: "Low carb", synonyms: ["chocolate 70", "chocolate amargo 70"] },

  // ─────────────────────────────────────────────
  // 🟡 AMARELO — Bebidas
  // ─────────────────────────────────────────────
  { name: "Kombucha", tier: "amarelo", category: "Bebidas", tip: "Tem um pouco de açúcar residual da fermentação. Versões com sabor adicionado podem ter bastante açúcar — leia o rótulo." },
  { name: "Água de coco", tier: "amarelo", category: "Bebidas", synonyms: ["agua de coco", "coco água", "coco agua"], tip: "Natural, mas contém carboidratos. Limite a 1 copo pequeno por vez e prefira a fruta inteira quando possível." },
  { name: "Café com leite", tier: "amarelo", category: "Bebidas", synonyms: ["cafe com leite", "pingado"] },

  // ─────────────────────────────────────────────
  // 🟡 AMARELO — Outros
  // ─────────────────────────────────────────────
  { name: "Suco natural", tier: "amarelo", category: "Outros", synonyms: ["suco", "suco de fruta", "suco de laranja", "suco natural sem açúcar"] },
  { name: "Açaí com farinha", tier: "amarelo", category: "Outros", synonyms: ["acai com farinha", "açaí na tigela", "acai na tigela", "bowl de açaí", "bowl de acai"] },
  { name: "Bolacha cream cracker", tier: "amarelo", category: "Outros", synonyms: ["bolacha", "biscoito cream cracker", "cream cracker"] },
  { name: "Iogurte adoçado", tier: "amarelo", category: "Outros", synonyms: ["iogurte adocado"] },
  { name: "Pipoca", tier: "amarelo", category: "Outros", synonyms: ["pipoca caseira"] },
  { name: "Sushi", tier: "amarelo", category: "Outros", synonyms: ["temaki", "hot roll", "hot philadelphia", "jow", "comida japonesa"], tip: "O arroz do sushi é refinado e preparado com açúcar, causando picos de glicemia. Cada unidade tem de 7 a 14g de carboidratos — várias unidades somam rápido! O peixe (salmão, atum) ajuda a frear a absorção do açúcar. Prefira o sashimi (só o peixe, 0g de carboidratos) e evite opções fritas como hot rolls e cream cheese." },

  // ─────────────────────────────────────────────
  // 🔴 VERMELHO — Comidas típicas brasileiras
  // ─────────────────────────────────────────────
  { name: "Pamonha doce", tier: "vermelho", category: "Comidas típicas" },
  { name: "Curau", tier: "vermelho", category: "Comidas típicas", synonyms: ["canjica"] },
  { name: "Coxinha", tier: "vermelho", category: "Comidas típicas" },
  { name: "Pastel frito", tier: "vermelho", category: "Comidas típicas", synonyms: ["pastel"] },
  { name: "Empada", tier: "vermelho", category: "Comidas típicas", synonyms: ["empadinha"] },
  { name: "Esfiha frita", tier: "vermelho", category: "Comidas típicas", synonyms: ["esfirra frita"] },
  { name: "Kibe frito", tier: "vermelho", category: "Comidas típicas", synonyms: ["quibe frito"] },
  { name: "Brigadeiro", tier: "vermelho", category: "Comidas típicas" },
  { name: "Beijinho", tier: "vermelho", category: "Comidas típicas", synonyms: ["branquinho"] },
  { name: "Quindim", tier: "vermelho", category: "Comidas típicas" },
  { name: "Bolo de fubá", tier: "vermelho", category: "Comidas típicas", synonyms: ["bolo de fuba"] },
  { name: "Bolo de cenoura com cobertura", tier: "vermelho", category: "Comidas típicas", synonyms: ["bolo de cenoura"] },
  { name: "Rapadura", tier: "vermelho", category: "Comidas típicas" },

  // ─────────────────────────────────────────────
  // 🔴 VERMELHO — Doces
  // ─────────────────────────────────────────────
  { name: "Refrigerante", tier: "vermelho", category: "Doces", synonyms: ["refri", "coca", "coca-cola", "pepsi", "guaraná", "guarana", "fanta", "sprite"] },
  { name: "Biscoito recheado", tier: "vermelho", category: "Doces", synonyms: ["bolacha recheada", "recheado"] },
  { name: "Balas", tier: "vermelho", category: "Doces", synonyms: ["bala", "doce", "doces"] },
  { name: "Chocolate", tier: "vermelho", category: "Doces", synonyms: ["bombom", "barra de chocolate", "chocolate ao leite"] },
  { name: "Bolo recheado", tier: "vermelho", category: "Doces", synonyms: ["bolo"] },
  { name: "Pudim", tier: "vermelho", category: "Doces" },

  // ─────────────────────────────────────────────
  // 🔴 VERMELHO — Frutas secas muito doces
  // ─────────────────────────────────────────────
  { name: "Tâmara", tier: "vermelho", category: "Doces", synonyms: ["tamara", "tâmaras", "tamaras"], tip: "Uma das frutas com maior concentração de açúcar do mundo. Evite no diabetes." },
  { name: "Banana passa", tier: "vermelho", category: "Doces", synonyms: ["banana-passa", "banana desidratada"] },

  // ─────────────────────────────────────────────
  // 🔴 VERMELHO — Adoçantes e açúcares
  // ─────────────────────────────────────────────
  { name: "Açúcar mascavo", tier: "vermelho", category: "Adoçantes e açúcares", synonyms: ["acucar mascavo"], tip: "Apesar da fama de saudável, sobe a glicemia praticamente igual ao açúcar branco." },
  { name: "Açúcar demerara", tier: "vermelho", category: "Adoçantes e açúcares", synonyms: ["acucar demerara"] },
  { name: "Açúcar de coco", tier: "vermelho", category: "Adoçantes e açúcares", synonyms: ["acucar de coco"], tip: "Não é uma alternativa segura para diabéticos. Sobe a glicemia como açúcar comum." },
  { name: "Mel", tier: "vermelho", category: "Adoçantes e açúcares", tip: "Açúcar natural, mas continua sendo açúcar. Eleva a glicemia rapidamente." },
  { name: "Melado", tier: "vermelho", category: "Adoçantes e açúcares", synonyms: ["melaço", "melaco de cana"] },

  // ─────────────────────────────────────────────
  // 🔴 VERMELHO — Laticínios
  // ─────────────────────────────────────────────
  { name: "Iogurte de frutas industrializado", tier: "vermelho", category: "Laticínios", synonyms: ["iogurte de frutas", "iogurte morango", "iogurte de morango", "danone de frutas"], tip: "Costuma ter tanto açúcar quanto um refrigerante. Leia o rótulo — busque versões 'natural' ou 'zero açúcar'." },

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
  // 🔴 VERMELHO — Bebidas
  // ─────────────────────────────────────────────
  { name: "Cappuccino industrializado", tier: "vermelho", category: "Bebidas", synonyms: ["cappuccino", "capuccino", "capuchino", "cappuccino em pó", "cappuccino em po"] },

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
