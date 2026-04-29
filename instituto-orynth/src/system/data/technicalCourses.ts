import type { PassiveAbility } from "../types/abilities"

export type TechnicalCourseData = {
  id: string
  name: string
  description: string
  role: string
  usefulAttributes: string[]
  strongSynergies: {
    graduations: string[]
    subclasses: string[]
    archetypes: string[]
  }
  trainedSkills: string[]
  extraSkillChoices: string[]
  extraSkillChoiceCount: number
  bonusText: string[]
  passiveBonus?: {
    pfBonus?: number
    hpBonus?: number
    sanBonus?: number
    defenseBonus?: number
  }
  passives: PassiveAbility[]
}

export const technicalCourses: Record<string, TechnicalCourseData> = {
  enfermagem: {
    id: "enfermagem",
    name: "Técnico em Enfermagem",
    description:
      "Formação prática voltada para primeiros socorros, estabilização de feridos, avaliação de riscos biológicos e suporte emergencial.",
    role:
      "Suporte médico realista, estabilização, prevenção de agravamento e apoio físico e emocional leve.",
    usefulAttributes: ["SAB", "INT", "PER"],
    strongSynergies: {
      graduations: ["medicina", "psicologia", "educacao_fisica", "biologia"],
      subclasses: ["quieto", "maratonista"],
      archetypes: ["nerd", "representante_de_turma", "atleta", "cheerleader"],
    },
    trainedSkills: ["primeiros_socorros", "pesquisa"],
    extraSkillChoices: ["empatia", "oficio_ferramentas"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes para estabilizar colegas inconscientes",
      "+1 Resistência contra toxinas, doenças e radiações biológicas",
    ],
    passives: [
      {
        id: "treinamento_de_primeiros_socorros",
        name: "Treinamento de Primeiros Socorros",
        costPD: 2,
        rarity: "comum",
        description:
          "Você se torna treinado em Primeiros Socorros. Se já era treinado, recebe +1 adicional sempre.",
        effects: [
          "Pode estabilizar um aliado inconsciente com uma ação",
          "Reduz o risco de mortes acidentais na mesa",
        ],
        narrative: "Você sabe exatamente o que fazer quando alguém cai.",
      },
      {
        id: "analista_clinico_rapido",
        name: "Analista Clínico Rápido",
        costPD: 3,
        rarity: "incomum",
        description:
          "Uma vez por cena, você pode analisar rapidamente uma pessoa, aliado, vítima ou NPC.",
        effects: [
          "Detecta febre, anemia, desidratação, drogas e contaminação ambiental leve",
          "+2 em testes para identificar a causa de um sintoma",
          "Pode conceder +1 no teste de um aliado contra medo, confusão ou alucinação",
        ],
        uses: "1 vez por cena",
        narrative: "O olhar treinado salva vidas.",
      },
      {
        id: "ponto_de_compressao",
        name: "Ponto de Compressão",
        costPD: 3,
        rarity: "incomum",
        description:
          "Quando um aliado sofreria Sangramento, ferimento agravado ou condição física leve, você pode intervir.",
        effects: [
          "Cancela Sangramento imediatamente",
          "Reduz um ferimento leve para superficial",
          "Aliado recebe +1 em seu próximo teste físico",
        ],
        trigger: "Após um aliado levar dano físico direto",
        narrative: "Um gesto rápido, mão firme, pressão no ponto exato.",
      },
      {
        id: "kit_de_emergencia_completo",
        name: "Kit de Emergência (completo)",
        costPD: 4,
        rarity: "rara",
        description:
          "Você carrega um kit real de enfermagem, com uso limitado por cena.",
        effects: [
          "Reduz uma condição leve",
          "OU dá +2 em um teste de resistência física ou mental de um aliado",
          "OU restaura 1 PF de alguém usando técnicas de respiração",
        ],
        uses: "1 vez por cena",
        narrative:
          "Curativos rápidos, álcool, calmantes naturais e técnica precisa.",
      },
      {
        id: "protocolo_de_emergencia",
        name: "Protocolo de Emergência",
        costPD: 2,
        rarity: "comum",
        description:
          "Quando um aliado sofre dano massivo, você pode gritar instruções rápidas e restaurar foco por segundos preciosos.",
        effects: [
          "Aliado recebe +2 em Resistência Física contra o próximo ataque direcionado a ele",
          "A condição não pode ser agravada até o fim do turno",
        ],
        uses: "1 vez por combate",
      },
      {
        id: "medicacao_de_contencao",
        name: "Medicação de Contenção",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você pode administrar substâncias leves para controlar sintomas físicos leves.",
        effects: [
          "Remove Náusea",
          "Remove Ansiedade leve",
          "Remove Tontura",
          "Remove Tremor",
          "Remove Fadiga leve",
        ],
        uses: "1 vez por cena por aliado",
      },
      {
        id: "avaliacao_rapida_de_risco",
        name: "Avaliação Rápida de Risco",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você reconhece rapidamente perigos físicos e ambientais.",
        effects: [
          "Vantagem em testes para identificar contaminação, objetos perigosos, áreas instáveis e substâncias químicas",
          "+2 em testes para antecipar perigo físico",
        ],
        narrative: "Antes do grupo entrar, você já sabe que algo está errado.",
      },
      {
        id: "suporte_em_crise_mental",
        name: "Suporte em Crise Mental",
        costPD: 4,
        rarity: "rara",
        description:
          "Você usa grounding, respiração e fala terapêutica para estabilizar um aliado em colapso emocional.",
        effects: [
          "Reduz uma condição mental para um nível mais brando",
          "Aliado recebe +1 em Resistência Mental até o fim da cena",
        ],
        uses: "1 vez por cena",
        narrative:
          "Você segura o rosto da pessoa, faz ela focar em você e voltar à realidade.",
      },
    ],
  },

  informatica: {
    id: "informatica",
    name: "Técnico em Informática",
    description:
      "Formação prática voltada para sistemas, manutenção, redes, manipulação eletrônica e suporte tecnológico.",
    role:
      "Suporte tecnológico, tático e investigativo, com foco em invasão, manipulação e análise de sistemas digitais.",
    usefulAttributes: ["INT", "PER", "DES"],
    strongSynergies: {
      graduations: [
        "ciencia_da_computacao",
        "engenharia",
        "fisica",
        "administracao",
        "comunicacao",
      ],
      subclasses: ["quieto", "blogueiro"],
      archetypes: ["nerd", "reporter", "influencer", "artista"],
    },
    trainedSkills: ["oficio_ferramentas", "pesquisa"],
    extraSkillChoices: ["investigacao", "logica", "furtividade"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes para hackear, decodificar ou acessar sistemas digitais",
      "+1 Resistência contra efeitos paranormais que se manifestem por aparelhos",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "diagnostico_eletronico",
        name: "Diagnóstico Eletrônico",
        costPD: 2,
        rarity: "comum",
        description:
          "Você identifica rapidamente problemas em equipamentos digitais, câmeras, computadores, travas eletrônicas e sistemas.",
        effects: [
          "Vantagem ao identificar problemas em equipamentos digitais",
          "Detecta uso recente de qualquer aparelho",
        ],
        narrative: "Você entende máquinas como se fossem pessoas.",
      },
      {
        id: "kit_de_ferramentas_rapidas",
        name: "Kit de Ferramentas Rápidas",
        costPD: 2,
        rarity: "comum",
        description:
          "Uma vez por cena, você pode consertar ou improvisar um aparelho simples.",
        effects: [
          "Conserta ou improvisa rádio, lanterna, fechadura eletrônica, câmera ou cabo danificado",
          "Reduz a dificuldade em 1 nessas ações",
        ],
        uses: "1 vez por cena",
        narrative: "Me dá 30 segundos... e fita isolante.",
      },
      {
        id: "bloqueio_de_sinal",
        name: "Bloqueio de Sinal",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você cria um campo de interferência leve com dispositivos improvisados.",
        effects: [
          "Inimigos ou entidades digitais sofrem -2 em testes que dependem de tecnologia",
          "Comunicação eletrônica falha 50% das vezes",
        ],
        uses: "1 cena",
        narrative: "Você faz o ambiente ficar mudo.",
      },
      {
        id: "invasao_silenciosa",
        name: "Invasão Silenciosa",
        costPD: 3,
        rarity: "incomum",
        description:
          "Uma vez por cena, você recebe vantagem ao hackear, abrir, ocultar rastros ou extrair dados de um sistema simples.",
        effects: [
          "Vantagem para acessar computadores escolares, fechaduras, câmeras ou arquivos digitais",
        ],
        uses: "1 vez por cena",
        narrative: "Seus dedos dançam no teclado.",
      },
      {
        id: "alerta_de_sinal_anomalo",
        name: "Alerta de Sinal Anômalo",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você detecta interferências eletrônicas paranormais em um raio de 6 metros.",
        effects: [
          "Detecta ruídos estáticos, distorções de sinal, campos magnéticos irregulares e eletrônicos possuídos",
          "+2 em Percepção para identificar proximidade de entidades ligadas a aparelhos",
        ],
        narrative: "Antes que algo pisque, você já sabe.",
      },
      {
        id: "contencao_digital",
        name: "Contenção Digital",
        costPD: 4,
        rarity: "rara",
        description:
          "Você consegue travar ou congelar temporariamente sistemas eletrônicos.",
        effects: [
          "Trava câmeras, sensores, gravações, transmissões ou sistemas de segurança",
          "O alvo fica inutilizado por 1 rodada sem alerta sonoro",
        ],
        uses: "1 rodada",
        narrative: "Travei. Corre.",
      },
      {
        id: "modulo_improvisado",
        name: "Módulo Improvisado",
        costPD: 4,
        rarity: "rara",
        description:
          "Você monta rapidamente um gadget improvisado com função limitada.",
        effects: [
          "Pode criar microgravador, iluminador, sensor de movimento, amplificador de som ou rastreador básico",
          "O dispositivo funciona por 1 cena",
        ],
        uses: "1 cena",
        narrative: "Gambiarras geniais são seu idioma nativo.",
      },
      {
        id: "firewall_mental",
        name: "Firewall Mental",
        costPD: 4,
        rarity: "rara",
        description:
          "Você e um aliado recebem proteção mental contra ilusões e distorções digitais.",
        effects: [
          "+2 Resistência Mental contra telas, sons eletrônicos, vozes gravadas e distorções digitais",
          "Remove ilusão leve ligada a aparelhos",
        ],
        narrative:
          "Você sabe desligar o cérebro — e desligar o medo digital.",
      },
    ],
  },

  quimica: {
    id: "quimica",
    name: "Técnico em Química",
    description:
      "Formação prática voltada para análise de substâncias, reações, contaminações e manipulação controlada do ambiente material.",
    role:
      "Suporte científico, ambiental e investigativo, com foco em análise de materiais, neutralização de riscos e reações úteis.",
    usefulAttributes: ["INT", "SAB", "DES"],
    strongSynergies: {
      graduations: ["biologia", "medicina", "engenharia", "fisica", "gastronomia"],
      subclasses: [ "quieto", "representante_de_turma"],
      archetypes: ["qualquer"],
    },
    trainedSkills: ["investigacao", "oficio_ferramentas"],
    extraSkillChoices: ["pesquisa", "primeiros_socorros", "percepcao"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 Resistência contra toxinas, radiações, venenos e gases",
      "+1 em testes de Análise Ambiental",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "analise_imediata",
        name: "Análise Imediata",
        costPD: 2,
        rarity: "comum",
        description:
          "Você identifica rapidamente substâncias, partículas, resíduos, cheiros ou contaminações em uma cena.",
        effects: [
          "+2 em testes de Análise Ambiental",
          "Detecta até 3 tipos de materiais: toxina, corrosivo, inflamável, gasoso e semelhantes",
        ],
        narrative: "Você sabe o que está no ar em segundos.",
      },
      {
        id: "neutralizacao_quimica",
        name: "Neutralização Química",
        costPD: 2,
        rarity: "comum",
        description:
          "Uma vez por cena, você reduz efeitos contínuos de agentes químicos e remove condições leves relacionadas.",
        effects: [
          "Reduz em 1 o dano contínuo causado por venenos, agentes corrosivos, reagentes químicos e queimaduras leves",
          "Remove Ardência, Náusea ou Tontura Leve",
        ],
        uses: "1 vez por cena",
      },
      {
        id: "kit_de_reagentes_rapidos",
        name: "Kit de Reagentes Rápidos",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você sempre carrega reagentes básicos para improvisos técnicos.",
        effects: [
          "Cria fumaça leve por 1 rodada",
          "Produz solução que enfraquece fechaduras ou metais frágeis",
          "Revela rastros invisíveis, como sangue lavado ou pegadas químicas",
        ],
        uses: "1 vez por cena",
      },
      {
        id: "resistencia_organica",
        name: "Resistência Orgânica",
        costPD: 3,
        rarity: "incomum",
        description:
          "Seu treinamento o torna mais resistente a agentes químicos e biológicos.",
        effects: [
          "+2 Resistência contra venenos e doenças",
          "Vantagem contra efeitos respiratórios, como gases, mofo e pó químico",
        ],
      },
      {
        id: "reacao_controlada",
        name: "Reação Controlada",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você combina substâncias comuns para produzir efeitos moderados e utilitários.",
        effects: [
          "Cria pequenas faíscas narrativas",
          "Produz vapores irritantes que reduzem ataque inimigo em -1 por 1 rodada",
          "Gera ruído ou estouro forte que distrai alvos, causando -1 em Percepção",
        ],
        narrative: "Você não explode o laboratório. Ainda.",
      },
      {
        id: "sinal_quimico",
        name: "Sinal Químico",
        costPD: 4,
        rarity: "rara",
        description:
          "Você produz uma marca química visível apenas sob certas condições.",
        effects: [
          "Pode marcar inimigos, rotas ou pontos de interesse",
          "+2 Investigação para rastrear um alvo marcado",
        ],
      },
      {
        id: "reforco_protetivo",
        name: "Reforço Protetivo",
        costPD: 4,
        rarity: "rara",
        description:
          "Você aplica soluções químicas que criam uma proteção temporária.",
        effects: [
          "Um aliado recebe +1 Defesa por 2 rodadas",
          "OU recebe +2 Resistência contra flamejantes, corrosivos ou radiação leve",
        ],
      },
      {
        id: "catalisador_improvisado",
        name: "Catalisador Improvisado",
        costPD: 4,
        rarity: "rara",
        description:
          "Você usa o ambiente e reagentes para acelerar uma reação útil.",
        effects: [
          "Cria barreira fraca de vapor irritante",
          "Dissolve rapidamente uma trava fraca",
          "Purifica ar local por 1 rodada",
          "Acelera combustão de velas e incensos para sinergias rituais",
        ],
        uses: "1 vez por cena",
      },
    ],
  },

  artes_cenicas: {
    id: "artes_cenicas",
    name: "Técnico em Artes Cênicas",
    description:
      "Formação prática voltada para presença, corpo, voz, emoção, representação e controle de atmosfera social.",
    role:
      "Suporte social e psicológico, com foco em performance, distração, presença e manipulação emocional.",
    usefulAttributes: ["CAR", "DES", "INT"],
    strongSynergies: {
      graduations: [
        "artes_visuais",
        "cinema",
        "psicologia",
        "jornalismo",
        "direito",
        "pedagogia",
        "letras",
      ],
      subclasses: [
        "popular",
        "blogueiro",
        "quieto",
        "representante_de_turma",
      ],
      archetypes: ["artista", "reporter", "influencer", "maconheiro"],
    },
    trainedSkills: ["diplomacia", "enganacao"],
    extraSkillChoices: ["empatia", "artes_criatividade", "furtividade"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes de atuação, disfarce, persuasão ou manipulação emocional",
      "Vantagem 1x por cena em Leitura de Cena",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "presenca_cenica",
        name: "Presença Cênica",
        costPD: 2,
        rarity: "comum",
        description:
          "Sua postura e expressão dominam o ambiente social.",
        effects: [
          "+2 em testes de Diplomacia ou Intimidação por 1 cena",
          "Multidões simples ficam mais receptivas",
        ],
        narrative: "O ar muda quando você entra.",
      },
      {
        id: "manipulacao_emocional",
        name: "Manipulação Emocional",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você ajusta sua atuação para influenciar o estado psicológico de alguém.",
        effects: [
          "Pode acalmar um alvo",
          "Pode irritar um alvo, impondo -1 em testes sociais por 1 cena",
          "Pode encorajar um aliado, concedendo +1 Moral por 2 rodadas",
        ],
      },
      {
        id: "eco_dramatico",
        name: "Eco Dramático",
        costPD: 2,
        rarity: "comum",
        description:
          "Você usa pausas, ritmo e voz para aumentar o impacto das falas.",
        effects: [
          "O próximo teste social recebe +3",
          "Se falhar, não gera penalidades narrativas adicionais",
        ],
      },
      {
        id: "corpo_em_cena",
        name: "Corpo em Cena",
        costPD: 3,
        rarity: "incomum",
        description:
          "Seu controle corporal aprimora movimentação, infiltração e esquiva.",
        effects: [
          "+2 em Furtividade baseada em movimento",
          "+1 Esquiva por 1 rodada",
        ],
      },
      {
        id: "disfarce_expressivo",
        name: "Disfarce Expressivo",
        costPD: 3,
        rarity: "incomum",
        description:
          "Com expressão e adaptação visual leve, você altera a percepção social sobre si.",
        effects: [
          "Pode parecer mais velho",
          "Pode parecer cansado ou doente",
          "Pode parecer confiável",
          "Pode parecer agressivo ou intimidador",
          "Recebe vantagem em Enganação ou Diplomacia pela cena",
        ],
      },
      {
        id: "cenario_improvisado",
        name: "Cenário Improvisado",
        costPD: 4,
        rarity: "rara",
        description:
          "Você usa objetos próximos para montar distrações ou alterar simbolicamente a cena.",
        effects: [
          "Cria distração: inimigos sofrem -1 Percepção por 1 rodada",
          "Cria imagem simbólica: aliados ganham +1 Moral",
          "Cria obstáculo dramático: um alvo sofre -1 em movimento",
        ],
      },
      {
        id: "quebra_de_tensao",
        name: "Quebra de Tensão",
        costPD: 4,
        rarity: "rara",
        description:
          "Com humor, choque ou teatralidade, você altera imediatamente o clima da cena.",
        effects: [
          "Remove Medo Leve de até 2 aliados",
          "OU impõe Hesitação em 1 inimigo por 1 rodada",
        ],
      },
      {
        id: "voz_de_comando",
        name: "Voz de Comando",
        costPD: 4,
        rarity: "rara",
        description:
          "Sua voz é treinada para projeção, autoridade e impacto coletivo.",
        effects: [
          "Aliados a até 6m ganham +1 Defesa por 1 rodada",
          "NPCs fracos recuam temporariamente",
          "Concede vantagem em um teste grupal social",
        ],
        uses: "1 vez por cena",
      },
    ],
  },

    musica: {
    id: "musica",
    name: "Técnico em Música",
    description:
      "Formação prática voltada para ritmo, composição, harmonia, expressão sonora e impacto emocional por meio do som.",
    role:
      "Suporte emocional e atmosférico, com foco em ritmo, moral, distração sonora e modulação psicológica.",
    usefulAttributes: ["CAR", "SAB", "INT"],
    strongSynergies: {
      graduations: [
        "artes",
        "musica",
        "cinema",
        "psicologia",
        "pedagogia",
        "letras",
        "jornalismo",
      ],
      subclasses: [
        "quieto",
        "popular",
        "gotico",
        "blogueiro",
        "representante_de_turma",
      ],
      archetypes: ["artista", "influencer", "ocultista"],
    },
    trainedSkills: ["artes_criatividade", "empatia"],
    extraSkillChoices: ["percepcao", "diplomacia", "furtividade"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes envolvendo ritmo, concentração emocional ou interpretação auditiva",
      "Vantagem 1x por cena em testes de Percepção Auditiva",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "ritmo_interno",
        name: "Ritmo Interno",
        costPD: 2,
        rarity: "comum",
        description:
          "Você usa respiração técnica e marcação de compasso para estabilizar o próprio corpo.",
        effects: [
          "+1 Esquiva por 2 rodadas",
          "+2 em testes para resistir a Medo Leve ou Pânico Leve",
        ],
        narrative: "Você se sincroniza consigo mesmo.",
      },
      {
        id: "harmonia_social",
        name: "Harmonia Social",
        costPD: 3,
        rarity: "incomum",
        description:
          "Sua cadência vocal e sensibilidade musical ajudam a modular o clima social.",
        effects: [
          "Pode acalmar um alvo",
          "Concede +2 Diplomacia na próxima fala",
          "Reduz em -1 a agressividade social de um alvo",
        ],
      },
      {
        id: "pulso_de_grupo",
        name: "Pulso de Grupo",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você estabelece um ritmo coletivo que fortalece a moral dos aliados.",
        effects: [
          "Aliados a até 3m recebem +1 Moral por 2 rodadas",
          "Se um aliado falhar em Moral, pode repetir o teste 1x",
        ],
      },
      {
        id: "ruido_direcionado",
        name: "Ruído Direcionado",
        costPD: 2,
        rarity: "comum",
        description:
          "Você cria sons controlados para distrair, mascarar passos ou confundir a direção de atenção.",
        effects: [
          "Inimigos próximos sofrem -1 Percepção por 1 rodada",
          "Permite gerar barulho falso para enganar a direção de passos",
        ],
        narrative: "Você usa o som como isca.",
      },
      {
        id: "melodia_calmante",
        name: "Melodia Calmante",
        costPD: 4,
        rarity: "rara",
        description:
          "Você cria uma sequência sonora repetitiva que ajuda a estabilizar a mente.",
        effects: [
          "Remove Ansiedade Leve ou Confusão Leve de 1 aliado",
          "+1 Resistência Mental para o mesmo aliado por 1 cena",
        ],
      },
      {
        id: "batida_de_combate",
        name: "Batida de Combate",
        costPD: 4,
        rarity: "rara",
        description:
          "Um ritmo firme sincroniza os movimentos ofensivos do grupo.",
        effects: [
          "Até 2 aliados recebem +1 em ataques na próxima rodada",
          "Se ambos acertarem, você ganha +1 Moral",
        ],
      },
      {
        id: "crescendo_emocional",
        name: "Crescendo Emocional",
        costPD: 4,
        rarity: "rara",
        description:
          "Você constrói uma ascensão emocional sonora que fortalece aliados ou hesita inimigos.",
        effects: [
          "Se aliado: +2 no próximo teste social e +1 Moral temporário",
          "Se inimigo: impõe Hesitação por 1 rodada",
        ],
      },
      {
        id: "frequencia_disruptiva",
        name: "Frequência Disruptiva",
        costPD: 5,
        rarity: "epica",
        description:
          "Você usa frequências específicas para desorientar um alvo humano ou sobrenatural.",
        effects: [
          "Em falha do alvo: -2 em ataque OU perde reação",
          "Em sucesso do alvo: -1 em Percepção por 1 rodada",
        ],
        uses: "1 alvo por uso",
        narrative: "O som atinge mais do que os ouvidos.",
      },
    ],
  },

  mecanica: {
    id: "mecanica",
    name: "Técnico em Mecânica",
    description:
      "Formação prática voltada para ferramentas, estruturas, motores, reforços e improvisos físicos e táticos.",
    role:
      "Suporte técnico físico, manipulação de cenário, reforço estrutural e criação de dispositivos improvisados.",
    usefulAttributes: ["INT", "DES", "FOR"],
    strongSynergies: {
      graduations: [
        "engenharia",
        "fisica",
        "quimica",
        "administracao_industrial",
        "educacao_fisica",
        "seguranca_do_trabalho",
      ],
      subclasses: ["quieto", "representante_de_turma", "gotico"],
      archetypes: ["nerd", "atleta"],
    },
    trainedSkills: ["oficio_ferramentas", "investigacao"],
    extraSkillChoices: ["atletismo", "percepcao", "logica"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes que envolvam consertar, reforçar, construir ou analisar mecanismos",
      "Reduz o tempo de qualquer tarefa mecânica pela metade",
      "+1 Resistência contra dano físico por esmagamento ou impacto",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "mao_firme_mecanica",
        name: "Mão Firme",
        costPD: 2,
        rarity: "comum",
        description:
          "Sua precisão com ferramentas se mantém mesmo sob estresse.",
        effects: [
          "+2 em testes para usar ferramentas",
          "+1 em testes de Furtividade ligados à manipulação silenciosa",
        ],
      },
      {
        id: "diagnostico_rapido_mecanica",
        name: "Diagnóstico Rápido",
        costPD: 2,
        rarity: "comum",
        description:
          "Você analisa máquinas e estruturas com um olhar treinado.",
        effects: [
          "+2 em Investigação para analisar mecanismos",
          "Descobre ponto fraco ou falha estrutural de objetos",
        ],
      },
      {
        id: "reforco_improvisado",
        name: "Reforço Improvisado",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você usa sucata, metal, madeira ou móveis para reforçar algo rapidamente.",
        effects: [
          "Cria uma barreira leve que concede +1 Defesa por 2 rodadas",
          "Pode reforçar portas ou janelas, reduzindo quebra em -1",
        ],
      },
      {
        id: "ferramenta_certa",
        name: "Ferramenta Certa",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você sempre encontra ou adapta algo útil na hora crítica.",
        effects: [
          "Pode improvisar gancho, alavanca, suporte de transporte ou chave adaptada",
          "Facilita abertura ou estabilização de objetos perigosos",
        ],
        uses: "1 vez por cena",
      },
      {
        id: "golpe_pesado_mecanica",
        name: "Golpe Pesado",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você aplica peso, alavanca e impulso ao usar ferramentas pesadas como arma.",
        effects: [
          "+1d4 de dano adicional com ferramentas pesadas",
          "Em crítico, causa Atordoado Leve por 1 rodada",
        ],
      },
      {
        id: "engenho_tatico",
        name: "Engenho Tático",
        costPD: 4,
        rarity: "rara",
        description:
          "Você monta um dispositivo simples no meio da ação.",
        effects: [
          "Armadilha de impacto: 1d6 no primeiro inimigo que atravessar",
          "Escudo mecânico improvisado: +2 Defesa por 1 rodada",
          "Estabilizador: remove Cambaleio ou Atordoado Leve de um aliado",
        ],
        uses: "1 escolha por cena",
      },
      {
        id: "estalo_de_genio",
        name: "Estalo de Gênio",
        costPD: 4,
        rarity: "rara",
        description:
          "Você tem um insight técnico súbito em situações de pressão.",
        effects: [
          "Repete 1 teste de INT ou DES falho relacionado a tecnologia ou mecânica",
          "Se passar, ganha +1 Moral",
        ],
        uses: "1 vez por cena",
      },
      {
        id: "maquina_improvisada",
        name: "Máquina Improvisada",
        costPD: 5,
        rarity: "epica",
        description:
          "Você combina objetos do ambiente em uma engenhoca milagrosa e momentânea.",
        effects: [
          "Compressor de choque: alvo sofre penalidade ofensiva",
          "Propulsor improvisado: move um aliado +6m instantaneamente",
          "Vibração direcionada: remove Confusão Leve ou dá +2 em Resistência Mental",
        ],
        uses: "1 escolha por cena",
      },
    ],
  },

  gastronomia: {
    id: "gastronomia",
    name: "Técnico em Gastronomia",
    description:
      "Formação prática voltada para preparo técnico de alimentos, suporte emocional por comida, sobrevivência culinária e buffs leves narrativos.",
    role:
      "Suporte utilitário e emocional, com foco em moral, energia, mitigação de exaustão e preparo funcional.",
    usefulAttributes: ["SAB", "INT", "CAR"],
    strongSynergies: {
      graduations: [
        "nutricao",
        "psicologia",
        "biologia",
        "medicina",
        "administracao",
        "artes_visuais",
      ],
      subclasses: ["gotico", "representante_de_turma", "popular"],
      archetypes: ["artista", "maconheiro", "influencer"],
    },
    trainedSkills: ["artes_criatividade", "primeiros_socorros"],
    extraSkillChoices: ["diplomacia", "pesquisa", "empatia"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes contra intoxicação alimentar, venenos e substâncias naturais",
      "+1 em testes de apoio emocional ou moral relacionados a comida",
      "O grupo consome metade dos suprimentos em viagens ou investigações longas",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "chef_organizado",
        name: "Chef Organizado",
        costPD: 2,
        rarity: "comum",
        description:
          "Você domina mise en place, kits e organização de componentes com precisão.",
        effects: [
          "+2 em testes que envolvam preparar kits, separar componentes ou organizar suprimentos",
          "Reduz o tempo de preparo de qualquer item culinário pela metade",
        ],
      },
      {
        id: "degustacao_tecnica",
        name: "Degustação Técnica",
        costPD: 2,
        rarity: "comum",
        description:
          "Seu paladar reconhece riscos, toxinas e manipulações em alimentos.",
        effects: [
          "+2 para identificar toxinas, venenos, drogas leves e substâncias estranhas em alimentos",
          "Pode suspeitar narrativamente de manipulação mágica em comida",
        ],
      },
      {
        id: "calmante_culinario",
        name: "Calmante Culinário",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você prepara algo quente e acolhedor que ajuda a restaurar equilíbrio emocional.",
        effects: [
          "Remove Medo Leve ou Pânico Social de 1 aliado",
          "Concede +1 em Resistência Mental por 1 cena",
        ],
      },
      {
        id: "refeicao_energetica",
        name: "Refeição Energética",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você prepara um reforço rápido para devolver foco e energia funcional.",
        effects: [
          "Um aliado recupera 1 PF imediatamente",
          "O aliado recebe +1 em testes físicos por 2 rodadas",
        ],
      },
      {
        id: "improviso_de_sobrevivencia",
        name: "Improviso de Sobrevivência",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você transforma restos e escassez em suporte mínimo funcional.",
        effects: [
          "Produz comida para 2 pessoas com quase nada",
          "Cria um substituto leve de água",
          "Monta um kit de emergência para evitar 1 nível de exaustão",
          "Improvisa um lanche técnico que dá +1 Moral a 1 aliado",
        ],
        uses: "1 escolha por cena",
      },
      {
        id: "prato_bombastico",
        name: "Prato Bombástico",
        costPD: 4,
        rarity: "rara",
        description:
          "Uma receita improvisada explode sentidos e cria vantagem momentânea.",
        effects: [
          "Um aliado recebe +2 em ataque OU +2 em Percepção por 1 turno",
          "Se ingerido por inimigo narrativamente, causa Náusea Leve",
        ],
      },
      {
        id: "cozinha_terapeutica",
        name: "Cozinha Terapêutica",
        costPD: 4,
        rarity: "rara",
        description:
          "Sua comida atua como regulador emocional e físico leve para o grupo.",
        effects: [
          "Remove 1 condição leve: Fadiga, Confusão Leve, Desânimo ou dor física leve",
          "Aliados próximos recebem +1 Resistência Mental por 1 cena",
        ],
      },
      {
        id: "banquete_do_lider",
        name: "Banquete do Líder",
        costPD: 5,
        rarity: "epica",
        description:
          "Você prepara uma refeição icônica que fortalece a equipe como um todo.",
        effects: [
          "Até 3 aliados recebem +1 Moral",
          "+1 Defesa",
          "+1 em um atributo por 1 cena",
          "Se usado antes do combate, todos ganham +1 na iniciativa",
        ],
        uses: "1 vez por cena ou durante descanso longo",
      },
    ],
  },

  seguranca_do_trabalho: {
    id: "seguranca_do_trabalho",
    name: "Técnico em Segurança do Trabalho",
    description:
      "Formação prática voltada para prevenção de acidentes, leitura de riscos, contenção de crises e manutenção da equipe viva em ambientes hostis.",
    role:
      "Suporte preventivo, leitura de ambiente, contenção de danos e coordenação segura de grupo.",
    usefulAttributes: ["SAB", "INT", "DES"],
    strongSynergies: {
      graduations: [
        "engenharia",
        "biologia",
        "medicina",
        "administracao",
        "psicologia",
        "direito",
      ],
      subclasses: [
        "representante_de_turma",
        "maratonista",
        "gotico",
      ],
      archetypes: ["reporter", "nerd", "cheerleader"],
    },
    trainedSkills: ["investigacao", "percepcao"],
    extraSkillChoices: ["furtividade", "atletismo", "oficio_ferramentas"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes contra choque, queda, fogo, intoxicação e esmagamento",
      "+1 em testes para avaliar estruturas, ambientes, máquinas e riscos ocultos",
      "O grupo recebe +1 em testes coletivos de travessia perigosa enquanto você estiver junto",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "avaliacao_de_risco_imediata",
        name: "Avaliação de Risco Imediata",
        costPD: 2,
        rarity: "comum",
        description:
          "Você identifica perigos ambientais com rapidez e leitura técnica.",
        effects: [
          "+2 em testes para identificar perigos ambientais",
          "Pode perguntar ao narrador se existe algum risco escondido no local",
        ],
        uses: "1 vez por cena",
      },
      {
        id: "postura_de_protecao",
        name: "Postura de Proteção",
        costPD: 2,
        rarity: "comum",
        description:
          "Seu treinamento reflexivo ajuda a evitar danos acidentais.",
        effects: [
          "+1 Defesa contra armadilhas, quedas e ataques ambientais",
          "Vantagem em testes rápidos para evitar danos acidentais",
        ],
      },
      {
        id: "kit_preventivo_rapido",
        name: "Kit Preventivo Rápido",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você monta improvisos com EPIs, cordas, fitas e suportes de contenção.",
        effects: [
          "Reduz dano de queda de 1 aliado",
          "Cria ponto de apoio para travessia",
          "Reforça um objeto frágil por 1 cena",
          "Impede colapso imediato de porta, escada ou caminho",
        ],
      },
      {
        id: "controle_de_incidentes",
        name: "Controle de Incidentes",
        costPD: 3,
        rarity: "incomum",
        description:
          "Quando o caos começa, você responde com técnica e frieza.",
        effects: [
          "Remove uma condição física leve de 1 aliado",
          "Se a origem for ambiental, o aliado recebe +1 Resistência contra aquele tipo pelo resto da cena",
        ],
      },
      {
        id: "rota_segura",
        name: "Rota Segura",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você traça um caminho mais seguro e funcional para o grupo.",
        effects: [
          "O grupo recebe +1 em deslocamento e +1 em testes de travessia na cena",
          "Em perseguições, o grupo evita o primeiro obstáculo perigoso da cena",
        ],
      },
      {
        id: "sinalizacao_instantanea",
        name: "Sinalização Instantânea",
        costPD: 4,
        rarity: "rara",
        description:
          "Você marca rapidamente zonas de risco e reposiciona o grupo com eficiência visual.",
        effects: [
          "Aliados dentro de 6m ganham +1 Defesa OU +1 em testes de reação",
          "Dura 2 turnos",
        ],
        uses: "Pode ser ativado como ação ou reação",
      },
      {
        id: "isolamento_de_area",
        name: "Isolamento de Área",
        costPD: 4,
        rarity: "rara",
        description:
          "Você bloqueia, amarra, lacra ou cria uma contenção improvisada em área crítica.",
        effects: [
          "Bloqueia passagem de inimigos ou perigos ambientais por 1 cena",
          "Pode impedir propagação de gás, reforçar porta danificada ou conter avanço momentâneo",
          "Aliados próximos recebem +1 Defesa",
        ],
      },
      {
        id: "protocolo_de_evacuação",
        name: "Protocolo de Evacuação",
        costPD: 5,
        rarity: "epica",
        description:
          "Sua liderança técnica move o grupo com disciplina em meio ao desastre.",
        effects: [
          "Até 3 aliados recebem +2 na iniciativa",
          "+1 em testes de Reflexo ou Esquiva por 1 cena",
          "Podem se reposicionar 3m gratuitamente na rodada de ativação",
          "Em colapso, fogo ou perseguição, todos ganham +1 Defesa",
        ],
        uses: "1 vez por cena",
      },
    ],
  },

    meio_ambiente: {
    id: "meio_ambiente",
    name: "Técnico em Meio Ambiente",
    description:
      "Formação prática voltada para leitura de ambiente, contenção de riscos biológicos, rastreamento ecológico e sobrevivência em territórios hostis.",
    role:
      "Suporte de exploração e prevenção ambiental, com foco em rastros, contaminação, travessia e leitura de ecossistemas.",
    usefulAttributes: ["SAB", "INT", "PER"],
    strongSynergies: {
      graduations: [
        "biologia",
        "medicina",
        "psicologia",
        "direito",
        "arquitetura",
        "engenharia",
      ],
      subclasses: [
        "quieto",
        "gotico",
        "maratonista",
        "representante_de_turma",
      ],
      archetypes: ["reporter", "atleta", "influencer"],
    },
    trainedSkills: ["intuicao", "investigacao"],
    extraSkillChoices: ["atletismo", "furtividade", "oficio_ferramentas"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes contra toxinas, venenos, fungos e agentes biológicos",
      "+1 em testes para identificar rastros, plantas e ambientes instáveis",
      "O grupo recebe +1 em testes de travessia ambiental enquanto você estiver junto",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "leitura_de_paisagem",
        name: "Leitura de Paisagem",
        costPD: 2,
        rarity: "comum",
        description:
          "Você interpreta sinais do ambiente com rapidez e percebe quando algo está fora do equilíbrio natural.",
        effects: [
          "+2 em testes para identificar sinais ambientais",
          "Pode perguntar ao narrador se algo está errado neste ambiente",
        ],
        uses: "1 vez por cena",
      },
      {
        id: "bussola_biologica",
        name: "Bússola Biológica",
        costPD: 2,
        rarity: "comum",
        description:
          "Você sente a direção de água potável, vegetação saudável, fluxo de ar e caminhos mais seguros.",
        effects: [
          "Vantagem em testes de navegação natural",
          "+1 deslocamento em ambientes naturais para você e 1 aliado",
        ],
      },
      {
        id: "conhecimento_de_flora_e_fauna",
        name: "Conhecimento de Flora e Fauna",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você identifica espécies úteis ou perigosas e improvisa respostas naturais.",
        effects: [
          "Identifica plantas curativas, venenos naturais e fungos perigosos",
          "Pode criar um extrato leve por cena",
          "O extrato pode dar +1 resistência contra veneno ou impor -1 Defesa em um inimigo tocado",
        ],
      },
      {
        id: "deteccao_de_contaminacao",
        name: "Detecção de Contaminação",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você percebe quando um ambiente está contaminado, morto ou espiritualmente corrompido.",
        effects: [
          "+2 em testes de percepção ambiental ou espiritual em locais suspeitos",
          "Determina se água, solo ou ar estão contaminados",
          "Se houver presença sobrenatural, recebe uma pista narrativa",
        ],
      },
      {
        id: "caminho_ecologico",
        name: "Caminho Ecológico",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você traça uma rota segura e discreta em ambientes naturais.",
        effects: [
          "Grupo recebe +1 em Furtividade em ambientes naturais",
          "Ignora terreno difícil natural",
          "Aliados recebem +1 em testes de travessia na cena",
        ],
      },
      {
        id: "contencao_ambiental_rapida",
        name: "Contenção Ambiental Rápida",
        costPD: 4,
        rarity: "rara",
        description:
          "Você improvisa barreiras e medidas para conter perigos biológicos e naturais.",
        effects: [
          "Reduz em 2 pontos dano causado por fogo, gás, fungo, lama ou água contaminada",
          "Pode isolar um local pequeno por 1 cena para evitar expansão do risco",
        ],
      },
      {
        id: "sinais_da_natureza",
        name: "Sinais da Natureza",
        costPD: 4,
        rarity: "rara",
        description:
          "Você interpreta fauna, vento, água e silêncio como aviso antecipado.",
        effects: [
          "Recebe um aviso antecipado de perigo próximo",
          "Aliados ganham +2 na iniciativa no primeiro turno",
          "Em zonas corrompidas, você recebe +1 Resistência Mental",
        ],
        uses: "1 vez por cena",
      },
      {
        id: "guardiao_do_ecossistema",
        name: "Guardião do Ecossistema",
        costPD: 5,
        rarity: "epica",
        description:
          "Sua conexão com o ambiente protege aliados e estabiliza áreas naturais hostis.",
        effects: [
          "Aliados a até 6m recebem +1 Resistência",
          "Aliados a até 6m recebem +1 Defesa em terreno natural",
          "Pode dispersar animais hostis fracos, reduzir efeitos ambientais ou estabilizar estruturas naturais",
        ],
      },
    ],
  },

  terapias_integrativas: {
    id: "terapias_integrativas",
    name: "Técnico em Terapias Integrativas",
    description:
      "Formação prática voltada para respiração guiada, relaxamento, apoio emocional, equilíbrio energético e suporte terapêutico leve.",
    role:
      "Suporte emocional e mental, com foco em estabilização, redução de exaustão e mitigação de condições leves.",
    usefulAttributes: ["SAB", "CAR", "PER"],
    strongSynergies: {
      graduations: [
        "psicologia",
        "medicina",
        "biologia",
        "artes_visuais",
        "cinema",
        "direito",
        "educacao_fisica",
      ],
      subclasses: [
        "quieto",
        "popular",
        "gotico",
        "representante_de_turma",
        "blogueiro",
      ],
      archetypes: ["artista", "influencer", "reporter", "maconheiro"],
    },
    trainedSkills: ["empatia", "primeiros_socorros"],
    extraSkillChoices: ["intuicao", "diplomacia", "oficio_ferramentas"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes para acalmamento, estabilização emocional e respiração guiada",
      "+1 Resistência contra condições mentais leves",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "respiracao_guiada",
        name: "Respiração Guiada",
        costPD: 2,
        rarity: "comum",
        description:
          "Você conduz um aliado a recuperar foco e controle interno.",
        effects: [
          "Remove medo leve, ansiedade leve ou confusão leve",
          "Concede +1 Resistência Mental por 1 cena",
        ],
      },
      {
        id: "massagem_terapeutica_breve",
        name: "Massagem Terapêutica Breve",
        costPD: 2,
        rarity: "comum",
        description:
          "Seu toque reduz tensão muscular e alivia o corpo de forma rápida.",
        effects: [
          "Reduz 1 ponto de Exaustão de um aliado",
          "Concede +1 Defesa por 1 cena",
        ],
        uses: "1 vez por descanso",
      },
      {
        id: "aromaterapia_essencial",
        name: "Aromaterapia Essencial",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você prepara aromas que acalmam ou estimulam a mente e o corpo.",
        effects: [
          "Modo relaxante: +2 Resistência Mental por 1 cena",
          "Modo estimulante: +1 ataque e +1 iniciativa por 1 cena",
          "Afeta até 2 aliados",
        ],
      },
      {
        id: "alinhamento_energetico",
        name: "Alinhamento Energético",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você percebe pontos de tensão e ajuda o alvo a resistir melhor a influências mentais.",
        effects: [
          "Aliado recebe +2 em testes contra manipulação mental",
          "Se usado em cena paranormal, você percebe distorções emocionais do ambiente",
        ],
      },
      {
        id: "cristaloterapia_leve",
        name: "Cristaloterapia Leve",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você utiliza cristais preparados como catalisadores simbólicos e emocionais.",
        effects: [
          "Quartzo: +1 em rolagens sociais",
          "Ametista: +1 Resistência Mental",
          "Ônix: reduz em 1 dano espiritual ou mental recebido",
        ],
        uses: "1 cristal ativo por cena",
      },
      {
        id: "harmonizacao_corporal",
        name: "Harmonização Corporal",
        costPD: 4,
        rarity: "rara",
        description:
          "Você realinha corpo e foco de um aliado antes da missão ou em meio à tensão.",
        effects: [
          "Remove uma condição física leve",
          "Aliado recebe +1 em Atletismo, Reflexo ou Furtividade por 1 cena",
        ],
      },
      {
        id: "mapa_emocional",
        name: "Mapa Emocional",
        costPD: 4,
        rarity: "rara",
        description:
          "Você lê o campo emocional de pessoas ou ambientes e traduz isso para o grupo.",
        effects: [
          "Descobre uma emoção oculta ou intenção de um NPC",
          "Em ambientes, detecta carga emocional ou energia espiritual residual",
          "Aliados recebem +1 em Investigação e Percepção por 1 cena",
        ],
      },
      {
        id: "restauracao_integrativa",
        name: "Restauração Integrativa",
        costPD: 5,
        rarity: "epica",
        description:
          "Sua presença estabiliza corpo e mente de forma profunda e controlada.",
        effects: [
          "Remove duas condições leves ou uma moderada",
          "O alvo recupera 1 PF adicional no próximo descanso",
          "Durante 1 cena, recebe +1 Resistência Mental, +1 Defesa e +1 em Empatia ou Intuição",
        ],
      },
    ],
  },

  linguagens_e_libras: {
    id: "linguagens_e_libras",
    name: "Técnico em Linguagens e Libras",
    description:
      "Formação prática voltada para comunicação humana, leitura corporal, interpretação simbólica, Libras e mediação entre diferentes formas de linguagem.",
    role:
      "Suporte investigativo e social, com foco em leitura de sinais, tradução, diplomacia e resistência a distorções comunicativas.",
    usefulAttributes: ["SAB", "INT", "CAR"],
    strongSynergies: {
      graduations: [
        "letras",
        "psicologia",
        "jornalismo",
        "cinema",
        "direito",
        "pedagogia",
      ],
      subclasses: [
        "quieto",
        "popular",
        "blogueiro",
        "representante_de_turma",
      ],
      archetypes: ["artista", "influencer", "reporter"],
    },
    trainedSkills: ["diplomacia", "investigacao"],
    extraSkillChoices: ["enganacao", "empatia", "artes_criatividade"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes de comunicação não verbal, leitura de sinais e interpretação emocional",
      "+1 Resistência contra efeitos de confusão comunicativa",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "leitura_labial",
        name: "Leitura Labial",
        costPD: 2,
        rarity: "comum",
        description:
          "Você interpreta falas silenciosas a distância observando expressão e movimento labial.",
        effects: [
          "Lê conversas silenciosas a até 15 metros com linha de visão",
          "+2 em Investigação para extrair informações de diálogos observados",
        ],
      },
      {
        id: "linguagem_universal",
        name: "Linguagem Universal",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você consegue se comunicar de forma básica com quase qualquer criatura inteligente.",
        effects: [
          "Comunicação básica por gestos, desenhos, sinais e mímicas",
          "+1 Diplomacia com grupos que não compartilham seu idioma",
        ],
      },
      {
        id: "sinais_rapidos",
        name: "Sinais Rápidos",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você transmite mensagens complexas aos aliados sem emitir som.",
        effects: [
          "Aliados que enxergam seus sinais recebem +1 em testes furtivos ou táticos por 1 cena",
        ],
      },
      {
        id: "interpretacao_simbolica",
        name: "Interpretação Simbólica",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você decifra símbolos, glifos, rituais e estruturas de sentido ocultas.",
        effects: [
          "+2 em testes para decifrar símbolos, diagramas, glifos ou mensagens codificadas",
          "Ao analisar algo sobrenatural, recebe uma pista narrativa adicional",
        ],
      },
      {
        id: "comunicacao_empatica",
        name: "Comunicação Empática",
        costPD: 4,
        rarity: "rara",
        description:
          "Você compreende a motivação emocional central de alguém após interação suficiente.",
        effects: [
          "Após 1 minuto de conversa, entende a motivação emocional mais forte do NPC",
          "Aliados recebem +1 em testes sociais com esse NPC até o fim da cena",
        ],
      },
      {
        id: "contra_sussurro",
        name: "Contra-Sussurro",
        costPD: 4,
        rarity: "rara",
        description:
          "Você protege sua mente e a de um aliado contra linguagem hostil, ruído mental e distorções verbais.",
        effects: [
          "Você e 1 aliado recebem +2 Resistência Mental contra efeitos sonoros",
          "Ambos ficam imunes a linguagem desorientadora por 1 cena",
        ],
      },
      {
        id: "traducao_avancada",
        name: "Tradução Avançada",
        costPD: 5,
        rarity: "epica",
        description:
          "Você entende o sentido geral de formas de comunicação desconhecidas após observação suficiente.",
        effects: [
          "Após observar uma forma de comunicação por 1 minuto, entende seu sentido geral",
          "Reduz em -1 a dificuldade de testes sociais com criaturas desconhecidas",
          "Aliados recebem +1 em Percepção e Investigação ao agir com base na sua interpretação",
        ],
      },
    ],
  },

  manutencao_eletrica: {
    id: "manutencao_eletrica",
    name: "Técnico em Manutenção Elétrica",
    description:
      "Formação prática voltada para circuitos, quadros, sistemas elétricos, improviso técnico e leitura de interferências energéticas.",
    role:
      "Suporte técnico e investigativo, com foco em manipulação de sistemas elétricos, contenção de falhas e leitura de anomalias energéticas.",
    usefulAttributes: ["INT", "SAB", "DES"],
    strongSynergies: {
      graduations: [
        "engenharia",
        "fisica",
        "mecatronica",
        "robotica",
        "informatica",
        "quimica",
      ],
      subclasses: [
        "quieto",
        "representante_de_turma",
        "blogueiro",
      ],
      archetypes: ["nerd", "reporter", "ocultista"],
    },
    trainedSkills: ["oficio_ferramentas", "investigacao"],
    extraSkillChoices: ["percepcao", "logica", "pesquisa"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes contra choque elétrico, queimaduras térmicas e ruído eletromagnético",
      "+2 em testes para detectar falhas energéticas ou interferências misteriosas",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "ferramentas_improvisadas",
        name: "Ferramentas Improvisadas",
        costPD: 2,
        rarity: "comum",
        description:
          "Você sempre consegue dar um jeito com materiais limitados e montagem rápida.",
        effects: [
          "+2 em testes para consertar ou improvisar dispositivos",
          "Pode criar uma ferramenta simples em cena",
        ],
      },
      {
        id: "diagnostico_instantaneo",
        name: "Diagnóstico Instantâneo",
        costPD: 2,
        rarity: "comum",
        description:
          "Você identifica falhas elétricas e riscos energéticos em segundos.",
        effects: [
          "Ao analisar um sistema elétrico, aprende o ponto fraco, defeito provável e risco imediato",
          "+1 em testes de Investigação envolvendo máquinas",
        ],
      },
      {
        id: "isolamento_de_risco",
        name: "Isolamento de Risco",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você evita acidentes energéticos antes que se tornem desastre.",
        effects: [
          "Você e 1 aliado recebem +2 Resistência Física contra eletricidade, calor ou faíscas por 1 cena",
          "Anula o primeiro choque leve recebido",
        ],
      },
      {
        id: "curto_controlado",
        name: "Curto Controlado",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você usa um curto proposital de forma segura para interferir no ambiente.",
        effects: [
          "Pode destravar portas elétricas, desligar alarmes, cegar sensores ou distrair criaturas sensíveis à luz",
          "+1 em testes para sabotar mecanismos elétricos",
        ],
      },
      {
        id: "resistencia_eletromagnetica",
        name: "Resistência Eletromagnética",
        costPD: 3,
        rarity: "incomum",
        description:
          "Sua mente já se acostumou ao ruído invisível de correntes e distorções.",
        effects: [
          "+2 Resistência Mental contra estática sobrenatural, sussurros metálicos e interferência sonora",
          "Reduz vertigem e confusão ligadas a campos eletromagnéticos",
        ],
      },
      {
        id: "circuito_vivo",
        name: "Circuito Vivo",
        costPD: 4,
        rarity: "rara",
        description:
          "Você lê vibrações elétricas como sinais do próprio ambiente.",
        effects: [
          "+2 em testes de Percepção para detectar movimentação por ruído elétrico",
          "Pode perguntar ao mestre se algo grande mudou no sistema elétrico ao redor",
        ],
        uses: "1 vez por cena",
      },
      {
        id: "engenheiro_de_campo",
        name: "Engenheiro de Campo",
        costPD: 4,
        rarity: "rara",
        description:
          "Você restaura parcialmente sistemas quebrados e transforma isso em cobertura tática.",
        effects: [
          "Pode criar iluminação mínima, energia emergencial ou estabilização de máquinas instáveis",
          "Aliados próximos recebem +1 Defesa enquanto permanecerem na área estabilizada",
        ],
      },
      {
        id: "mestre_da_energia",
        name: "Mestre da Energia",
        costPD: 5,
        rarity: "epica",
        description:
          "Você entende energia como fluxo vivo, inclusive quando ela se torna anômala.",
        effects: [
          "Pode desviar uma descarga elétrica para outro alvo",
          "Pode redistribuir energia para proteger um aliado",
          "Pode estabilizar artefatos paranormais instáveis",
          "Pode detectar assinaturas energéticas ocultas",
          "+1 geral em testes envolvendo sistemas elétricos complexos ou anômalos",
        ],
        uses: "1 vez por cena",
      },
    ],
  },

    rituais_e_tradicoes: {
    id: "rituais_e_tradicoes",
    name: "Rituais e Tradições",
    description:
      "Curso oculto e não oficial, voltado para tradições espirituais, simbologia antiga, abertura e fechamento de caminhos e interação cuidadosa com forças invisíveis.",
    role:
      "Suporte paranormal adaptável, focado em percepção espiritual, proteção ritual, mitigação de efeitos mentais e leitura de instabilidade energética.",
    usefulAttributes: ["VON", "SAB", "CAR", "INT"],
    strongSynergies: {
      graduations: [],
      subclasses: ["quieto", "gotico"],
      archetypes: ["ocultista", "artista", "maconheiro", "nerd", "reporter", "cheerleader", "atleta", "influencer"],
    },
    trainedSkills: ["percepcao_espiritual", "intuicao"],
    extraSkillChoices: ["pesquisa", "empatia"],
    extraSkillChoiceCount: 1,
    bonusText: [
      "+1 em testes contra efeitos espirituais ou mentais vindos do Outro Lado",
      "Você sempre reconhece quando um ambiente está energeticamente instável",
    ],
    passiveBonus: {
      pfBonus: 1,
    },
    passives: [
      {
        id: "toque_purificador",
        name: "Toque Purificador",
        costPD: 2,
        rarity: "comum",
        description:
          "Você remove uma condição espiritual leve através de contato e intenção ritual.",
        effects: [
          "Remove assombro leve, sussurros, visões fracas ou arrepio constante",
        ],
        risk: "10% de chance de assumir a condição por 1 turno.",
      },
      {
        id: "simbolo_de_afastamento",
        name: "Símbolo de Afastamento",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você traça rapidamente um símbolo ritual que dificulta a aproximação de entidades fracas.",
        effects: [
          "Entidades espirituais fracas recebem -2 para se aproximar de você por 2 rodadas",
        ],
        risk: "Espíritos mais fortes percebem que você interferiu.",
      },
      {
        id: "fio_de_prata",
        name: "Fio de Prata",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você cria uma conexão sutil com um aliado, percebendo sua direção e seu sofrimento mental.",
        effects: [
          "Sempre sabe a direção do aliado conectado",
          "+1 em testes para ajudá-lo",
          "Percebe quando sua mente está sob ataque",
        ],
        risk: "Você compartilha 1 ponto de dano mental quando o aliado sofre dano psíquico.",
      },
      {
        id: "sussurro_da_tradicao_antiga",
        name: "Sussurro da Tradição Antiga",
        costPD: 3,
        rarity: "incomum",
        description:
          "Você invoca um eco de tradição antiga para ampliar sua percepção do invisível.",
        effects: [
          "Recebe vantagem em um teste de Intuição ou Percepção Espiritual",
        ],
        uses: "1 vez por cena",
        risk: "Uma voz responde; teste de VON CD 13 para não ficar enjoado mentalmente por 1 rodada.",
      },
      {
        id: "acalmar_o_vazio",
        name: "Acalmar o Vazio",
        costPD: 4,
        rarity: "rara",
        description:
          "Você reduz o impacto espiritual ou mental recebido por um aliado ao absorver parte da tensão.",
        effects: [
          "Reduz em 1 dado de intensidade o dano espiritual ou mental recebido por 1 aliado por 1 rodada",
        ],
        risk: "Você sofre 1 de dano espiritual ao absorver parte do impacto.",
      },
      {
        id: "veu_de_protecao_temporario",
        name: "Véu de Proteção Temporário",
        costPD: 4,
        rarity: "rara",
        description:
          "Você cria um campo ritual protetivo ao seu redor por um curto período.",
        effects: [
          "Aliados em 2 metros recebem +1 Resistência contra ataques espirituais",
          "Dura 2 rodadas",
        ],
        risk: "Enquanto ativo, você sofre -1 em ataque por foco extremo.",
      },
      {
        id: "marcador_de_presenca_oculta",
        name: "Marcador de Presença Oculta",
        costPD: 5,
        rarity: "epica",
        description:
          "Você marca um ponto ritual que alerta o grupo quando algo cruza a área vigiada.",
        effects: [
          "Durante 10 minutos, o grupo sabe instintivamente se algo cruzar o ponto marcado",
        ],
        risk: "A marca gera um brilho visível para criaturas do Outro Lado.",
      },
      {
        id: "abertura_delicada",
        name: "Abertura Delicada",
        costPD: 6,
        rarity: "epica",
        description:
          "Você abre uma pequena e controlada brecha no véu espiritual para obter contato ou pista simbólica.",
        effects: [
          "Permite comunicação curta com espíritos",
          "Permite detectar intenções",
          "Permite obter 1 pista simbólica",
        ],
        uses: "1 vez por cena",
        risk: "Teste de VON CD 14. Em falha, você ganha Assombro Leve por 1 cena. Em falha crítica, algo olha de volta.",
      },
    ],
  },

}