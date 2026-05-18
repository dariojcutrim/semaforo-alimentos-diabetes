export type UltraCategory =
  | "Biscoitos e bolachas"
  | "Salgadinhos e snacks"
  | "Panificados industrializados"
  | "Refrigerantes e energéticos"
  | "Achocolatados e bebidas lácteas"
  | "Iogurtes e sobremesas industrializadas"
  | "Sorvetes e picolés"
  | "Balas, chocolates e confeitos"
  | "Embutidos"
  | "Pratos prontos e congelados"
  | "Fast food"
  | "Macarrão instantâneo"
  | "Caldos, molhos e temperos"
  | "Cereais matinais"
  | "Pães industrializados"
  | "Margarinas";

export interface UltraItem {
  name: string;
  category: UltraCategory;
  synonyms?: string[];
}

export const ULTRA_ITEMS: UltraItem[] = [
  // Biscoitos e bolachas
  { name: "Biscoito Passatempo", category: "Biscoitos e bolachas", synonyms: ["passatempo"] },
  { name: "Biscoito Trakinas", category: "Biscoitos e bolachas", synonyms: ["trakinas"] },
  { name: "Biscoito Mini Oreo", category: "Biscoitos e bolachas", synonyms: ["mini oreo", "oreo"] },
  { name: "Biscoito tipo wafer", category: "Biscoitos e bolachas", synonyms: ["wafer", "bolacha wafer", "biscoito wafer"] },

  // Salgadinhos e snacks
  { name: "Salgadinho Fandangos", category: "Salgadinhos e snacks", synonyms: ["fandangos"] },
  { name: "Salgadinho Cheetos", category: "Salgadinhos e snacks", synonyms: ["cheetos"] },
  { name: "Salgadinho Ruffles", category: "Salgadinhos e snacks", synonyms: ["ruffles"] },
  { name: "Batata Pringles", category: "Salgadinhos e snacks", synonyms: ["pringles"] },
  { name: "Salgadinho Pingo d'ouro", category: "Salgadinhos e snacks", synonyms: ["pingo de ouro", "pingo d'ouro", "pingo douro"] },

  // Panificados industrializados
  { name: "Chocotone", category: "Panificados industrializados" },
  { name: "Panetone industrializado", category: "Panificados industrializados", synonyms: ["panetone", "panetones"] },
  { name: "Rocambole pronto", category: "Panificados industrializados", synonyms: ["rocambole", "pullman", "rocambole pullman"] },
  { name: "Mistura para bolo", category: "Panificados industrializados", synonyms: ["misturas para bolo", "bolo de caixinha", "dr oetker"] },

  // Refrigerantes e energéticos
  { name: "Refrigerante Fanta", category: "Refrigerantes e energéticos", synonyms: ["fanta"] },
  { name: "Refrigerante Guaraná Antarctica", category: "Refrigerantes e energéticos", synonyms: ["guaraná antarctica", "guarana antarctica", "guaraná", "guarana"] },
  { name: "Refrigerante Kuat", category: "Refrigerantes e energéticos", synonyms: ["kuat"] },
  { name: "Bebida energética Red Bull", category: "Refrigerantes e energéticos", synonyms: ["red bull", "energético", "energetico", "monster", "energy drink"] },
  { name: "Suco de caixinha Kapo", category: "Refrigerantes e energéticos", synonyms: ["kapo", "suco kapo"] },
  { name: "Refresco em pó", category: "Refrigerantes e energéticos", synonyms: ["tang", "fresh", "clight", "refresco", "suco em pó", "suco em po"] },

  // Achocolatados e bebidas lácteas
  { name: "Achocolatado Toddynho", category: "Achocolatados e bebidas lácteas", synonyms: ["toddynho"] },
  { name: "Achocolatado Nescau Prontinho", category: "Achocolatados e bebidas lácteas", synonyms: ["nescau prontinho", "nescau"] },
  { name: "Bebida láctea Nesquik", category: "Achocolatados e bebidas lácteas", synonyms: ["nesquik"] },

  // Iogurtes e sobremesas industrializadas
  { name: "Iogurte Dan up", category: "Iogurtes e sobremesas industrializadas", synonyms: ["dan up", "danup"] },
  { name: "Iogurte Danoninho", category: "Iogurtes e sobremesas industrializadas", synonyms: ["danoninho"] },
  { name: "Sobremesa Danette", category: "Iogurtes e sobremesas industrializadas", synonyms: ["danette"] },
  { name: "Iogurte Activia com sabores", category: "Iogurtes e sobremesas industrializadas", synonyms: ["activia", "iogurte activia"] },

  // Sorvetes e picolés
  { name: "Sorvete industrializado", category: "Sorvetes e picolés", synonyms: ["sorvete", "kibon", "garoto", "sorvetes"] },
  { name: "Picolé Fruttare", category: "Sorvetes e picolés", synonyms: ["fruttare"] },
  { name: "Picolé Mega", category: "Sorvetes e picolés", synonyms: ["mega", "picole mega"] },
  { name: "Sorvete McFlurry", category: "Sorvetes e picolés", synonyms: ["mcflurry", "mc flurry"] },

  // Balas, chocolates e confeitos
  { name: "Bala 7 belo", category: "Balas, chocolates e confeitos", synonyms: ["7 belo", "sete belo"] },
  { name: "Balas e guloseimas", category: "Balas, chocolates e confeitos", synonyms: ["bala", "balas", "guloseima", "guloseimas", "halls", "mentos"] },
  { name: "Confeitos M&M's", category: "Balas, chocolates e confeitos", synonyms: ["m&m", "mms", "m&ms"] },
  { name: "Creme de avelã Nutella", category: "Balas, chocolates e confeitos", synonyms: ["nutella", "creme de avela"] },
  { name: "Chocolate KitKat", category: "Balas, chocolates e confeitos", synonyms: ["kitkat", "kit kat"] },
  { name: "Chocolate Kinder Bueno", category: "Balas, chocolates e confeitos", synonyms: ["kinder bueno", "kinder"] },
  { name: "Chocolate Bis", category: "Balas, chocolates e confeitos", synonyms: ["bis"] },
  { name: "Bombom Sonho de Valsa", category: "Balas, chocolates e confeitos", synonyms: ["sonho de valsa"] },
  { name: "Bombom Ouro Branco", category: "Balas, chocolates e confeitos", synonyms: ["ouro branco"] },
  { name: "Chocolate Alpino", category: "Balas, chocolates e confeitos", synonyms: ["alpino"] },

  // Embutidos
  { name: "Salsicha", category: "Embutidos", synonyms: ["hot dog", "cachorro quente"] },
  { name: "Mortadela", category: "Embutidos", synonyms: ["frios"] },
  { name: "Presunto", category: "Embutidos" },
  { name: "Salame", category: "Embutidos" },
  { name: "Linguiça calabresa", category: "Embutidos", synonyms: ["linguica calabresa", "calabresa", "linguiça", "linguica"] },
  { name: "Blanquet", category: "Embutidos", synonyms: ["blanquet de peru"] },
  { name: "Peito de peru defumado", category: "Embutidos", synonyms: ["peito de peru", "peru defumado"] },

  // Pratos prontos e congelados
  { name: "Nuggets de frango", category: "Pratos prontos e congelados", synonyms: ["nuggets", "nugget", "sadia nuggets", "perdigão nuggets"] },
  { name: "Hambúrguer industrializado", category: "Pratos prontos e congelados", synonyms: ["hamburguer industrializado", "hambúrguer congelado", "hamburguer congelado", "sadia hambúrguer", "perdigão hambúrguer"] },
  { name: "Lasanha congelada", category: "Pratos prontos e congelados", synonyms: ["lasanha pronta", "lasanha sadia", "lasanha perdigão"] },
  { name: "Pizza congelada", category: "Pratos prontos e congelados", synonyms: ["pizza pronta", "pizza sadia", "pizza perdigão"] },

  // Fast food
  { name: "Lanche Big Mac", category: "Fast food", synonyms: ["big mac", "bigmac"] },
  { name: "Lanche McNuggets", category: "Fast food", synonyms: ["mcnuggets", "mc nuggets"] },
  { name: "Lanche Quarteirão", category: "Fast food", synonyms: ["quarteirão", "quarteirao"] },
  { name: "Lanche Whopper", category: "Fast food", synonyms: ["whopper"] },
  { name: "Onion Rings", category: "Fast food", synonyms: ["onion rings", "anéis de cebola", "aneis de cebola"] },
  { name: "Fast food em geral", category: "Fast food", synonyms: ["mcdonalds", "burger king", "bobs", "bob's", "habibs", "habib's", "subway", "kfc"] },

  // Macarrão instantâneo
  { name: "Macarrão instantâneo", category: "Macarrão instantâneo", synonyms: ["miojo", "lamen", "nissin", "nissin lámen", "cup noodles"] },

  // Caldos, molhos e temperos
  { name: "Caldo em cubo", category: "Caldos, molhos e temperos", synonyms: ["caldos em cubo", "caldo knorr", "caldo maggi", "caldo de galinha", "caldo de carne", "caldo de legumes"] },
  { name: "Maionese industrializada", category: "Caldos, molhos e temperos", synonyms: ["maionese", "hellmanns"] },
  { name: "Catchup", category: "Caldos, molhos e temperos", synonyms: ["ketchup", "heinz"] },
  { name: "Molhos prontos", category: "Caldos, molhos e temperos", synonyms: ["molho pronto", "molho de tomate pronto", "molho pomarola", "tarantella"] },
  { name: "Temperos instantâneos", category: "Caldos, molhos e temperos", synonyms: ["tempero pronto", "tempero sazon", "sazon", "ajinomoto"] },

  // Cereais matinais
  { name: "Cereal matinal açucarado", category: "Cereais matinais", synonyms: ["cereal", "sucrilhos", "froot loops", "fruit loops", "nescau cereal", "chocapic", "kelloggs"] },

  // Pães industrializados
  { name: "Bisnaguinha", category: "Pães industrializados", synonyms: ["bisnaga", "bisnaguinhas", "pullman bisnaguinha"] },
  { name: "Pão de forma industrializado", category: "Pães industrializados", synonyms: ["pão de forma", "pao de forma", "wickbold", "pullman pão de forma"] },
  { name: "Pão de hambúrguer industrializado", category: "Pães industrializados", synonyms: ["pão de hambúrguer", "pao de hamburguer", "pão de hamburguer", "pão hambúrguer"] },
  { name: "Pão de hot dog industrializado", category: "Pães industrializados", synonyms: ["pão de hot dog", "pao de hot dog", "pão hot dog"] },

  // Margarinas
  { name: "Margarina", category: "Margarinas", synonyms: ["qualy", "becel", "doriana", "delícia"] },
];

export const ULTRA_EXPLANATION =
  "Alimentos ultraprocessados têm muitos ingredientes artificiais (conservantes, corantes, açúcares e gorduras escondidas) que aumentam o risco de obesidade, diabetes e doenças do coração.";

export const ULTRA_GUIDANCE =
  "Prefira sempre comida de verdade: feita em casa, com ingredientes naturais como frutas, verduras, legumes, grãos e carnes.";

export const NOT_ULTRA_HINT =
  "Não encontramos esse produto na nossa lista. Mesmo assim, leia o rótulo: se tiver muitos ingredientes que você não reconhece (corantes, conservantes, espessantes, açúcares com nomes estranhos), provavelmente é ultraprocessado.";
