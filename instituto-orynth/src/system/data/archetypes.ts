import type { ActiveAbility } from "../types/activeAbilities"
import type { SkillKey } from "./skills"
import type { AttributeKey } from "../types/attributes"

export type ArchetypeData = {
  id: string
  name: string

  hpBase: number
  hpPerLevelBonus: number

  attributeBonuses: {
    type: "fixed" | "choice"
    value?: Partial<Record<AttributeKey, number>>
    options?: AttributeKey[]
    amount?: number
  }

  autoSkills?: SkillKey[]

  skillChoices?: {
    choose: number
    options: SkillKey[]
  }

  description?: string
  role?: string
  strengths?: string[]
  weaknesses?: string[]

  abilities: ActiveAbility[]

  tags?: string[]
}

export const archetypes: Record<string, ArchetypeData> = {
  cheerleader: {
    id: "cheerleader",
    name: "Cheerleader",
    hpBase: 10,
    hpPerLevelBonus: 5,

    attributeBonuses: {
      type: "fixed",
      value: {
        CAR: 2,
        DES: 2
      },
    },

    autoSkills: ["acrobacia"],

    skillChoices: {
      choose: 2,
      options: [
        "diplomacia",
        "reflexo",
        "empatia",
        "investigacao",
        "intuicao",
        "enganacao",
        "primeiros_socorros"
      ]
    },

    description:
      "A Cheerleader é a centelha de energia do grupo, capaz de elevar moral, coordenar aliados e transformar caos em ritmo tático.",
    role: "Suporte tático, liderança emocional e coordenação de grupo.",
    strengths: [
      "Melhora esquiva, coordenação e moral dos aliados",
      "Lê o ritmo do combate",
      "Transforma caos em ação coordenada",
    ],
    weaknesses: [
      "Depende do espírito de equipe",
      "Exige leitura emocional constante",
      "Pode hesitar em confrontos letais",
    ],

    abilities: [
      {
        id: "ritmo_de_batalha",
        name: "Ritmo de Batalha",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["CAR"],
        range: "6 metros",
        duration: "2 turnos",
        type: "suporte",
        description:
          "A Cheerleader sincroniza o grupo por meio de voz, postura e cadência tática.",
        effects: [
          "Aliados em alcance recebem +1 em iniciativa",
          "Se pelo menos dois aliados estiverem adjacentes, o bônus aumenta para +2",
          "A Cheerleader recebe +1 em Defesa enquanto mantiver a liderança ativa",
        ],
        risk:
          "Se falhar em teste de Carisma CD 12, os aliados não recebem o bônus e sofrem -1 em testes de reação até o próximo turno.",
      },
      {
        id: "salto_coreografado",
        name: "Salto Coreografado",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: ["DES"],
        range: "pessoal",
        duration: "instantânea",
        type: "mobilidade",
        description:
          "A Cheerleader realiza um movimento ágil e preciso para reposicionamento tático.",
        effects: [
          "Move-se até 6 metros ignorando terreno difícil e ataques de oportunidade",
          "Recebe +2 em Esquiva até o início do próximo turno",
          "Se passar adjacente a um aliado, esse aliado recebe +1 no próximo ataque",
        ],
      },
      {
        id: "golpe_coreografico",
        name: "Golpe Coreográfico",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: ["DES", "CAR"],
        range: "corpo a corpo",
        duration: "instantânea",
        type: "ofensiva leve",
        description:
          "Um golpe ritmado que mistura impulso, técnica e leitura de abertura.",
        effects: [
          "Causa 1d8 + modificador do atributo escolhido",
          "Se o alvo já estiver afetado por bônus de moral, causa +1d4 de dano adicional",
        ],
        risk:
          "Em falha crítica, a Cheerleader perde o equilíbrio e sofre -1 em Defesa até o próximo turno.",
      },
      {
        id: "grito_de_incentivo",
        name: "Grito de Incentivo",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: ["CAR"],
        range: "9 metros",
        duration: "instantânea",
        type: "reacao",
        trigger: "Um aliado falha em um teste de ataque, resistência ou moral",
        description:
          "A Cheerleader reacende o foco de um aliado com uma frase de impacto.",
        effects: [
          "O aliado repete o teste com +1",
          "Se ainda falhar, recebe +1 em Defesa até o início do próximo turno",
        ],
        uses: "1 vez por rodada",
      },
      {
        id: "brilho_sincronizado",
        name: "Brilho Sincronizado",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: ["DES"],
        range: "área próxima",
        duration: "instantânea",
        type: "controle leve",
        description:
          "Um giro ofuscante desorienta inimigos próximos e cria brecha para o grupo.",
        effects: [
          "Inimigos fazem teste de Resistência CD 13",
          "Em falha: sofrem -2 em ataque até o fim do próximo turno e ficam ofuscados",
          "Em sucesso: sofrem -1 em ataque",
        ],
      },
      {
        id: "ressonancia_de_equipe",
        name: "Ressonância de Equipe",
        costPEH: 1,
        rarity: "rara",
        type: "passiva de arquétipo",
        description:
          "A presença da Cheerleader coloca o grupo em sintonia emocional e tática.",
        effects: [
          "Aliados a até 6 metros recebem +1 em testes de Moral enquanto ela estiver consciente",
          "Se um aliado cair, os outros recebem +1 em ataque e defesa por 1 turno",
          "Se um aliado conseguir crítico, os aliados em alcance recebem +1 em ataque até o final da rodada",
        ],
      },
      {
        id: "leitura_coreografada",
        name: "Leitura Coreografada",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: ["CAR", "INT"],
        range: "9 metros",
        duration: "1 rodada",
        type: "suporte híbrido",
        description:
          "A Cheerleader lê o fluxo do combate e transforma desordem em vantagem defensiva ou ofensiva.",
        effects: [
          "Modo defensivo: aliados recebem +2 em Esquiva ou Resistência contra um ataque específico",
          "Modo ofensivo: aliados recebem +2 em ataque e +1 em dano contra inimigos desorganizados ou isolados",
        ],
      },
      {
        id: "sincronia_absoluta",
        name: "Sincronia Absoluta",
        costPEH: 2,
        rarity: "epica",
        pfCost: 6,
        attributeBase: ["CAR"],
        range: "9 metros",
        duration: "2 rodadas",
        type: "habilidade oculta",
        requirement: "Cheerleader nível 10+ e Moral de Equipe ≥ 6",
        description:
          "A Cheerleader atinge um estado de liderança total e coloca aliados e campo em sincronia extrema.",
        effects: [
          "Aliados em alcance recebem +1 em ataques e Defesa",
          "Aliados podem se mover adicionalmente usando a ação de movimento da Cheerleader",
          "Inimigos fazem teste de Resistência; em falha, ficam descompassados",
        ],
        risk:
          "Após o uso, a Cheerleader sofre 1 ponto de Exaustão e -2 em Carisma até descansar.",

          hidden: true,
      },
    ],
  },

  nerd: {
    id: "nerd",
    name: "Nerd",
    hpBase: 8,
    hpPerLevelBonus: 4,

    attributeBonuses: {
      type: "fixed",
      value: {
        INT: 2
      }
    },

    autoSkills: ["logica", "investigacao"],

    skillChoices: {
      choose: 2,
      options: [
        "pesquisa",
        "oficio",
        "percepcao",
        "empatia",
        "diplomacia",
      ]
    },

    description:
      "O Nerd é o cérebro estratégico do grupo, mestre da análise, da tecnologia e das soluções lógicas diante do desconhecido.",
    role: "Suporte analítico, tático e tecnológico.",
    strengths: [
      "Resolve padrões, códigos e sistemas",
      "Improvisa soluções técnicas",
      "Resiste bem a enganos lógicos e ilusões mal construídas",
    ],
    weaknesses: [
      "Baixa resistência física",
      "Pode travar sob pressão extrema",
      "Tende a negar o inexplicável no começo",
    ],

    abilities: [
      {
        id: "analise_de_padroes",
        name: "Análise de Padrões",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["INT"],
        range: "10 metros",
        duration: "1 rodada",
        type: "utilitária",
        description:
          "Você observa ambiente, pessoas ou dados e identifica padrões ocultos.",
        effects: [
          "Recebe +2 no próximo teste de Investigação ou Lógica",
          "Pode pedir ao mestre uma pista indireta sobre algo fora do comum",
        ],
        risk:
          "Em falha, confunde coincidências com padrões reais e sofre -1 em Investigação até o fim da cena.",
      },
      {
        id: "decifrar_codigos",
        name: "Decifrar Códigos",
        costPEH: 1,
        rarity: "comum",
        pfCost: 4,
        attributeBase: ["INT"],
        range: "toque",
        duration: "até 10 minutos",
        type: "utilitaria",
        description:
          "Você aplica lógica e reconhecimento de padrões para interpretar códigos, sistemas e mensagens cifradas.",
        effects: [
          "Decifra mensagens parciais ou completas",
          "Pode abrir acesso a informações ou sistemas bloqueados",
        ],
        risk:
          "Se falhar, pode interpretar o código errado ou ativar armadilhas físicas/digitais.",
      },
      {
        id: "raciocinio_computacional",
        name: "Raciocínio Computacional",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: ["INT"],
        range: "pessoal",
        duration: "1 rodada",
        type: "ativa",
        description:
          "Você entra em foco analítico extremo e reorganiza mentalmente as informações da cena.",
        effects: [
          "Pode refazer um teste de Lógica ou Investigação, mantendo o melhor resultado",
          "Se envolver sistemas digitais, enigmas ou padrões repetitivos, recebe +2 adicional",
        ],
        uses: "1 vez por combate",
        risk:
          "Em falha crítica, sofre -1 em testes de Vontade até o fim da cena.",
      },
      {
        id: "analise_dedutiva",
        name: "Análise Dedutiva",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: ["INT"],
        range: "6 metros",
        duration: "instantânea",
        type: "investigativa tática",
        description:
          "Você identifica inconsistências, fraquezas ou detalhes ocultos em criaturas e situações.",
        effects: [
          "Descobre uma pista, ilusão, fraqueza ou padrão escondido",
          "Em sucesso crítico, recebe +2 em Defesa contra o próximo ataque do alvo",
          "O alvo recebe -2 em sua próxima ação hostil contra você ou aliado visível",
        ],
      },
      {
        id: "calculo_de_probabilidade_avancado",
        name: "Cálculo de Probabilidade Avançado",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: ["INT"],
        range: "9 metros",
        duration: "2 turnos",
        type: "potencializacao",
        description:
          "Você força o cérebro a prever múltiplos desdobramentos da situação em tempo real.",
        effects: [
          "Rola 2d20 e escolhe o melhor resultado em um teste importante",
          "Se o teste envolver Lógica ou Investigação, recebe +3 adicional",
        ],
        risk:
          "Aumenta Corrupção Mental em 1 ponto a cada uso, se esse sistema estiver ativo.",
      },
      {
        id: "defesa_racional",
        name: "Defesa Racional",
        costPEH: 1,
        rarity: "rara",
        pfCost: 2,
        attributeBase: ["SAB"],
        range: "pessoal",
        duration: "instantânea",
        type: "reacao defensiva",
        description:
          "Você calcula a melhor resposta possível a um ataque físico ou mental.",
        effects: [
          "Reduz 1d8 + modificador de Inteligência de dano recebido",
          "Se o ataque for psíquico ou sobrenatural e você passar num teste de Lógica, pode anular completamente o dano",
        ],
        risk:
          "Após muitos usos na mesma cena, pode sofrer sobrecarga mental.",
      },
      {
        id: "improvisacao_logica",
        name: "Improvisação Lógica",
        costPEH: 1,
        rarity: "rara",
        pfCost: 2,
        attributeBase: ["INT"],
        range: "toque",
        duration: "variável",
        type: "utilitaria",
        description:
          "Você cria, repara ou burla algo com materiais improvisados usando pura lógica aplicada.",
        effects: [
          "Pode reparar ou criar dispositivo improvisado",
          "Pode burlar sistemas eletrônicos, reparar máquinas ou desativar armadilhas",
        ],
        uses: "3 vezes por dia",
      },
      {
        id: "sinapse_do_abismo",
        name: "Sinapse do Abismo",
        costPEH: 2,
        rarity: "epica",
        pfCost: 5,
        attributeBase: ["INT"],
        range: "6 metros ou toque",
        duration: "1 minuto por ponto de Inteligência",
        type: "habilidade oculta",
        requirement: "Nerd nível 10+ e Ressonância ao Oculto elevada",
        description:
          "Você conecta sua mente à estrutura mental de outro ser e traduz padrões mentais em memórias e sensações.",
        effects: [
          "Pode acessar lembranças, sentimentos reprimidos ou informações perdidas",
          "Funciona em humanos e, com mais dificuldade, em criaturas do Outro Lado",
        ],
        risk:
          "Cada uso exige rolagem de Corrupção Mental; falhas sucessivas atraem ecos mentais estranhos.",

          hidden: true,
      },
    ],
  },

  influencer: {
    id: "influencer",
    name: "Influencer",
    hpBase: 8,
    hpPerLevelBonus: 4,

    attributeBonuses: {
      type: "fixed",
      value: {
        CAR: 2,
      }
    },

    autoSkills: ["diplomacia", "enganacao"],

    skillChoices: {
      choose: 2,
      options: [
        "artes",
        "investigacao",
        "empatia",
        "intuicao",
        "pesquisa",
        "oficio",
      ]
    },

    description:
      "O Influencer domina imagem, narrativa, presença e opinião coletiva, manipulando moral, comportamento e percepção.",
    role: "Controle social, suporte emocional e manipulação narrativa.",
    strengths: [
      "Controla informação e moral social",
      "Cria distrações e desorganiza grupos",
      "Excelente em leitura de público e influência",
    ],
    weaknesses: [
      "Fragilidade física",
      "Pode depender demais de validação externa",
      "Atrai atenção indesejada",
    ],

    abilities: [
      {
        id: "chamada_de_fa",
        name: "Chamada de Fã",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["CAR"],
        range: "9 metros",
        duration: "2 turnos",
        type: "suporte moral",
        description:
          "Você inspira aliados e desestabiliza levemente inimigos com presença e fala marcante.",
        effects: [
          "Aliados recebem +2 em Moral ou Resistência Mental",
          "Inimigos podem sofrer -1 em ataques ou resistência se falharem em teste de Vontade",
          "Se houver boa visibilidade do grupo, o bônus sobe para +3",
        ],
        risk:
          "Em falha crítica, aliados sofrem -1 em testes e inimigos permanecem inalterados.",
      },
      {
        id: "desinformacao_viral",
        name: "Desinformação Viral",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["CAR", "INT"],
        range: "12 metros",
        duration: "2 turnos",
        type: "ofensiva psicologica",
        description:
          "Você espalha uma informação falsa ou interpretação manipulada para bagunçar o comportamento dos inimigos.",
        effects: [
          "Inimigos sofrem -2 em ataque ou resistência se falharem no teste",
          "Pode induzir ações erradas ou hesitação",
        ],
      },
      {
        id: "rastreador_digital",
        name: "Rastreador Digital",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: ["INT"],
        range: "18 metros",
        duration: "3 turnos",
        type: "investigativa",
        description:
          "Você rastreia informações, padrões e movimentos usando tecnologia e leitura de sinais.",
        effects: [
          "Descobre armadilhas, rotas secretas ou pontos fracos",
          "+2 em testes de Percepção ou Investigação ligados a comportamento ou tecnologia",
        ],
      },
      {
        id: "postagem_viral",
        name: "Postagem Viral",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: ["CAR", "INT"],
        range: "amplo",
        duration: "2 turnos",
        type: "suporte digital",
        description:
          "Você cria conteúdo que altera o estado emocional de aliados e a clareza dos inimigos.",
        effects: [
          "Aliados recebem +1 em Moral ou Resistência Mental",
          "Inimigos podem sofrer -1 em ataque ou confusão leve",
        ],
      },
      {
        id: "manipulacao_de_narrativa",
        name: "Manipulação de Narrativa",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: ["CAR", "INT"],
        range: "9 metros",
        duration: "1 rodada",
        type: "controle social",
        description:
          "Você redefine a história que os alvos acreditam estar vivendo e influencia sua percepção de realidade social.",
        effects: [
          "1 a 3 alvos podem seguir uma narrativa proposta se falharem em teste de Vontade",
          "Aliados próximos ganham +1 em Moral ou em ações sociais/mentais relacionadas",
        ],
      },
      {
        id: "eco_social",
        name: "Eco Social",
        costPEH: 1,
        rarity: "rara",
        pfCost: 2,
        attributeBase: ["CAR"],
        range: "9 metros",
        duration: "2 turnos",
        type: "suporte mental",
        description:
          "Você amplifica as emoções existentes em aliados e reforça o clima que favorece o grupo.",
        effects: [
          "Aliados recebem +1 em Moral ou Resistência Mental",
          "Aliados hesitantes podem repetir testes com +1",
        ],
      },
      {
        id: "olhar_analitico_social",
        name: "Olhar Analítico",
        costPEH: 1,
        rarity: "rara",
        pfCost: 2,
        attributeBase: ["INT"],
        range: "12 metros",
        duration: "1 rodada",
        type: "investigativa tática",
        description:
          "Você lê comportamento, intenção e ritmo social do ambiente com precisão estratégica.",
        effects: [
          "Identifica intenções, armadilhas ou movimentos sociais estratégicos",
          "Aliados ganham +2 em Percepção ou Investigação social",
        ],
      },
      {
        id: "viralidade_absoluta",
        name: "Viralidade Absoluta",
        costPEH: 2,
        rarity: "epica",
        pfCost: 6,
        attributeBase: ["CAR"],
        range: "30 metros ou rede digital",
        duration: "3 turnos",
        type: "habilidade oculta",
        requirement: "Influencer nível 10+ e Moral de Equipe ≥ 6",
        description:
          "Você atinge um estado de impacto máximo e molda emoções, percepção e comportamento em escala maior.",
        effects: [
          "Aliados recebem +3 em moral, resistência mental ou ações sociais/mentais",
          "Inimigos podem ficar desorientados, sofrer -3 em ataques e perder reações",
        ],
        risk:
          "Após o uso, você sofre 1 ponto de Exaustão e -2 em Carisma até descansar.",

          hidden: true,
      },
    ],
  },

  artista: {
    id: "artista",
    name: "Artista",
    hpBase: 8,
    hpPerLevelBonus: 4,

    attributeBonuses:{
    type:"choice",
    options:["INT", "CAR"],
    amount: 2
    },

    autoSkills: ["artes", "intuicao"],

    skillChoices: {
      choose: 2,
      options: [
        "percepcao",
        "empatia",
        "investigacao",
        "pesquisa",
        "oficio",
        "diplomacia",
      ]
    },

    description:
      "O Artista traduz emoções, símbolos e atmosferas em ação, influenciando o campo narrativo com expressão estética e sensibilidade.",
    role: "Suporte criativo, manipulação emocional e distorção simbólica.",
    strengths: [
      "Resolve símbolos e padrões estéticos",
      "Inspira, desorienta e altera atmosfera",
      "Usa expressão como ferramenta tática",
    ],
    weaknesses: [
      "Alta sensibilidade emocional",
      "Pode perder foco em combate direto",
      "Corre risco de interpretar demais a realidade",
    ],

    abilities: [
      {
        id: "expressao_autentica",
        name: "Expressão Autêntica",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: ["CAR", "INT"],
        range: "6 metros",
        duration: "2 turnos",
        type: "suporte adaptavel",
        description:
          "Você canaliza emoções por meio de arte, performance, gesto ou criação simbólica.",
        effects: [
          "Modo inspirador: aliados recebem +1 em moral, ataque e resistência",
          "Modo manipulador: um inimigo pode sofrer -2 em sua próxima ação",
          "Modo performático: você e um aliado recebem +2 em ataque coordenado",
          "Modo oculto: testes de Percepção contra você sofrem -2",
        ],
        risk:
          "Em falha crítica, quem deveria se inspirar pode sofrer -1 em moral.",
      },
      {
        id: "cative_o_coracao",
        name: "Cative o Coração",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["CAR"],
        range: "6 metros",
        duration: "3 rodadas",
        type: "influencia psicologica",
        description:
          "Você captura a atenção e o sentimento de alguém com presença, fala ou gesto artístico.",
        effects: [
          "Pode encantar um alvo, impedindo-o de atacar você diretamente",
          "Pode provocar raiva impulsiva no alvo",
          "Pode inspirar um aliado com +2 em Moral e +1 em ataque e resistência mental",
        ],
        risk:
          "Em falha crítica, o alvo percebe a manipulação e você sofre -2 em Carisma com ele até o fim da cena.",
      },
      {
        id: "eco_da_alma",
        name: "Eco da Alma",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 4,
        attributeBase: ["CAR", "VON"],
        range: "9 metros",
        duration: "2 rodadas",
        type: "influencia subconsciente",
        description:
          "Você manifesta uma emoção intensa no ambiente e afeta todos dentro da área.",
        effects: [
          "Pode evocar medo, tristeza, esperança ou raiva",
          "Cada emoção aplica efeitos diferentes em aliados e inimigos",
        ],
        risk:
          "Em falha crítica, a emoção se volta contra você e você sofre o efeito negativo correspondente.",
      },
      {
        id: "cenario_imaginario",
        name: "Cenário Imaginário",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 5,
        attributeBase: ["CAR", "INT"],
        range: "12 metros",
        duration: "3 rodadas",
        type: "ilusao sensorial",
        description:
          "Você projeta uma ilusão estética e emocional que toma forma no espaço e distorce a percepção.",
        effects: [
          "Inimigos podem sofrer -2 em ataque e Defesa e errar alvos por confusão visual",
          "Aliados recebem +1 em Moral e Esquiva",
          "Você pode mover a ilusão em até 3 metros por rodada",
        ],
        risk:
          "Em falha crítica, a ilusão reflete seus medos e você sofre -2 em Resistência Mental até o fim da cena.",
      },
      {
        id: "leitura_de_gestos",
        name: "Leitura de Gestos",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: ["INT", "CAR"],
        range: "9 metros",
        duration: "1 turno",
        type: "suporte tatico",
        description:
          "Você interpreta microgestos e prevê a ação provável de um alvo.",
        effects: [
          "Descobre a próxima ação provável do alvo",
          "Aliados podem receber +2 em Defesa ou ataque ao reagirem à sua leitura",
        ],
        risk:
          "Em falha crítica, aliados recebem -1 em Defesa ou ataque por interpretação errada.",
      },
      {
        id: "pulso_sentimental",
        name: "Pulso Sentimental",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: ["CAR", "VON"],
        range: "9 metros",
        duration: "2 turnos",
        type: "controle psicomotor",
        description:
          "Você sintoniza o pulso emocional de um alvo e influencia seu movimento ou reação.",
        effects: [
          "Pode forçar recuo, avanço impulsivo, lentidão, apoio a aliado ou perda de reação",
          "Em aliados consentindo, concede movimento adicional e +1 em Defesa",
        ],
        risk:
          "Em falha crítica, aliados próximos podem interpretar errado e sofrer -1 em Defesa até o fim da rodada.",
      },
      {
        id: "impacto_expressivo",
        name: "Impacto Expressivo",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: ["DES", "CAR"],
        range: "corpo a corpo ou 3 metros",
        duration: "instantânea",
        type: "ofensiva",
        description:
          "Você transforma gesto, movimento ou criação artística em ataque direto.",
        effects: [
          "Causa 1d8 + modificador do atributo escolhido",
          "Se o alvo estiver desorientado ou distraído, o dano aumenta",
        ],
        risk:
          "Em falha crítica, você sofre -1 em Defesa e perde a próxima ação para se recompor.",
      },
      {
        id: "tela_do_outro_lado",
        name: "Tela do Outro Lado",
        costPEH: 2,
        rarity: "epica",
        pfCost: 6,
        attributeBase: ["CAR", "INT"],
        range: "12 metros",
        duration: "3 rodadas",
        type: "habilidade oculta",
        requirement: "Artista nível 10+ e alta sintonia simbólica",
        description:
          "Sua arte deixa de ser apenas expressão e se torna uma abertura estética para algo além da realidade comum.",
        effects: [
          "Cria uma manifestação visual ou sensorial de grande impacto",
          "Desorienta inimigos, fortalece aliados e revela padrões ocultos no ambiente",
        ],
        risk:
          "Após o uso, você sofre desgaste mental intenso e pode atrair ecos do Outro Lado.",

          hidden: true,
      },
    ],
  },

    maconheiro: {
    id: "maconheiro",
    name: "Maconheiro",
    hpBase: 6,
    hpPerLevelBonus: 4,

    attributeBonuses:{
    type:"choice",
    options:["SAB", "CAR"],
    amount: 2
    },

    autoSkills: ["intuicao", "percepcao"],

    skillChoices: {
      choose: 2,
      options: [
        "empatia",
        "investigacao",
        "artes",
        "reflexo",
        "enganacao",
        "pesquisa",
      ]
    },

    description:
      "O Maconheiro é o viajante da mente, alguém que percebe padrões, presenças e distorções por meio de estados alterados de consciência.",
    role: "Suporte mental e sensorial, mediação entre o real e o espiritual.",
    strengths: [
      "Detecta presenças e padrões ocultos",
      "Afeta emoções e percepção do grupo",
      "Acessa o Outro Lado por visões e transe",
    ],
    weaknesses: [
      "Vulnerável a confusão e colapsos mentais",
      "Dificuldade em separar real e simbólico",
      "Pode perder o controle em momentos críticos",
    ],

    abilities: [
      {
        id: "aura_tranquilizante",
        name: "Aura Tranquilizante",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: ["CAR", "INT"],
        range: "9 metros",
        duration: "2 turnos",
        type: "suporte mental",
        description:
          "Você emana uma energia calma que relaxa aliados e reduz a agressividade de inimigos.",
        effects: [
          "Aliados recebem +1 em Moral ou Resistência Mental",
          "Inimigos fazem teste de Vontade CD 12; em falha, sofrem -1 em ataques e hesitação",
        ],
        risk:
          "Em falha crítica, aliados relaxam demais e sofrem -1 em Moral ou Resistência Mental por 1 turno.",
      },
      {
        id: "fumaca_confusa",
        name: "Fumaça Confusa",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["DES", "INT"],
        range: "6 metros",
        duration: "1 turno",
        type: "controle de campo",
        description:
          "Você cria uma nuvem de confusão sensorial que atrapalha inimigos e favorece aliados.",
        effects: [
          "Inimigos fazem teste de Vontade CD 13; em falha, sofrem -2 em ataques ou percepção",
          "Aliados recebem +1 em Furtividade ou Esquiva",
        ],
        risk:
          "Em falha crítica, a fumaça afeta aliados e alerta inimigos.",
      },
      {
        id: "insight_psicodelico",
        name: "Insight Psicodélico",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["INT", "SAB"],
        range: "12 metros",
        duration: "1 turno",
        type: "investigativa",
        description:
          "Você amplia a percepção e interpreta padrões e intenções de forma incomum.",
        effects: [
          "+2 em Percepção ou Investigação",
          "Pode detectar mentiras, intenções ou armadilhas de modo narrativo",
        ],
        risk:
          "Em falha crítica, a informação vem confusa e aliados sofrem -1 em Moral ou Percepção.",
      },
      {
        id: "rastros_olfativos",
        name: "Rastros Olfativos",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: ["SAB", "INT"],
        range: "12 metros",
        duration: "1 turno",
        type: "investigativa furtiva",
        description:
          "Você detecta rastros, odores e sinais sutis ignorados pelos demais.",
        effects: [
          "+2 em Percepção ou Investigação para localizar pessoas, objetos ou sinais recentes",
        ],
        risk:
          "Em falha crítica, interpreta o rastro errado e leva aliados ao local incorreto.",
      },
      {
        id: "visao_psicodelica",
        name: "Visão Psicodélica",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: ["INT", "SAB"],
        range: "9 metros",
        duration: "1 turno",
        type: "percepcao alterada",
        description:
          "Sua percepção capta detalhes distorcidos, ameaças ocultas e falhas do ambiente.",
        effects: [
          "+2 em Percepção ou Investigação",
          "Você sofre -1 em ataque ou reflexos pela distração sensorial",
        ],
        risk:
          "Em falha crítica, cria pânico desnecessário e impõe -1 em Moral ou Resistência Mental aos aliados.",
      },
      {
        id: "sinestesia_criativa",
        name: "Sinestesia Criativa",
        costPEH: 1,
        rarity: "rara",
        pfCost: 2,
        attributeBase: ["INT", "CAR"],
        range: "6 metros",
        duration: "2 turnos",
        type: "suporte criativo",
        description:
          "Você mistura sentidos e amplia a improvisação, encontrando soluções inusitadas.",
        effects: [
          "+2 em truques, improvisos ou uso criativo do ambiente",
          "Pode criar distrações únicas e desorientadoras",
        ],
        risk:
          "Em falha crítica, decisões arriscadas impõem -1 em Defesa ou Moral aos aliados próximos.",
      },
      {
        id: "furia_descomunal",
        name: "Fúria Descomunal",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: ["FOR", "CON"],
        range: "pessoal",
        duration: "3 turnos",
        type: "ofensiva fisica",
        description:
          "Você entra em um estado de raiva intensa que aumenta força e resistência, mas reduz o controle.",
        effects: [
          "+1d6 de dano corpo a corpo",
          "+2 em Força",
          "+1 em Atletismo",
          "+2 metros de deslocamento",
          "Reduz dano em 1d6",
        ],
        risk:
          "Você sofre -2 em testes sociais e de percepção, e pode atingir aliados em falha crítica.",
      },
      {
        id: "viagem_ao_outro_lado",
        name: "Viagem ao Outro Lado",
        costPEH: 2,
        rarity: "epica",
        pfCost: 5,
        attributeBase: ["SAB", "VON"],
        range: "pessoal",
        duration: "2 turnos",
        type: "habilidade oculta",
        requirement: "Nível 10+ e uso prévio de drogas verdes",
        description:
          "Você expande a consciência e se conecta ao Outro Lado para obter sinais, visões e rastros espirituais.",
        effects: [
          "+3 em Percepção, Investigação ou Intuição relacionadas ao sobrenatural",
          "Identifica presenças invisíveis, rastros espirituais e padrões ocultos",
          "Aliados próximos recebem +1 em Moral ou Resistência Mental se conectados à experiência",
        ],
        risk:
          "Após o término, faz teste de Vontade CD 14; em falha, sofre confusão e Exaustão adicional.",

          hidden: true,
      },
    ],
  },

  atleta: {
    id: "atleta",
    name: "Atleta",
    hpBase: 12,
    hpPerLevelBonus: 5,

    attributeBonuses:{
      type:"choice",
      options:["FOR", "DES"],
      amount: 2
    },

    autoSkills: ["atletismo", "reflexo"],
    
    skillChoices:{
      choose: 2,
      options:["furtividade", "primeiros_socorros", "intuicao", "diplomacia", "oficio", "acrobacia"]
    },

    description:
      "O Atleta é o corpo do grupo, alguém treinado para resistência, mobilidade e proteção física em situações extremas.",
    role: "Combatente de linha de frente e defensor.",
    strengths: [
      "Grande resistência física",
      "Excelente mobilidade",
      "Protege aliados e quebra formações inimigas",
    ],
    weaknesses: [
      "Pode subestimar ameaças sobrenaturais",
      "Tem dificuldade com ataques mentais",
      "Pode agir por impulso competitivo",
    ],

    abilities: [
      {
        id: "adrenalina_controlada",
        name: "Adrenalina Controlada",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["CON", "FOR"],
        range: "pessoal",
        duration: "2 turnos",
        type: "autossuporte",
        description:
          "Você canaliza tensão muscular e adrenalina para entrar em estado de foco físico absoluto.",
        effects: [
          "+2 em ataques corpo a corpo e Atletismo",
          "Reduz 1d6 + modificador de Constituição de dano físico",
          "Se estiver abaixo de metade dos PVs, o bônus de ataque sobe para +3",
        ],
        risk:
          "Ao terminar, faz teste de Constituição CD 12; em falha, sofre 1 nível de exaustão leve.",
      },
      {
        id: "movimento_explosivo",
        name: "Movimento Explosivo",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: ["DES"],
        range: "pessoal",
        duration: "instantânea",
        type: "mobilidade",
        description:
          "Você faz um avanço veloz que ignora obstáculos e cria vantagem tática.",
        effects: [
          "Dobra seu deslocamento no turno",
          "Ignora terreno difícil e obstáculos baixos",
          "Não provoca ataques de oportunidade",
          "Se terminar adjacente a um inimigo, recebe +1 no próximo ataque",
        ],
        risk:
          "Em falha crítica, você cai prono e perde o próximo turno para se levantar.",
      },
      {
        id: "corpo_inquebravel",
        name: "Corpo Inquebrável",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: ["FOR", "CON"],
        range: "pessoal",
        duration: "instantânea",
        type: "reacao defensiva",
        trigger: "Você sofre ataque físico, dano crítico ou condição física",
        description:
          "Seu corpo responde com reflexo extremo, absorvendo impacto e negando efeitos físicos.",
        effects: [
          "Pode reduzir dano em 1d10 + modificador",
          "Ou dividir o dano pela metade em situação crítica",
          "Ou negar condição física como derrubar, atordoar, imobilizar ou empurrar",
        ],
        uses: "1 uso por combate sem penalidade",
        risk:
          "Usos extras impõem -1 em FOR e CON até descansar; em falha crítica, sofre -1 em Defesa e fica Desorientado.",
      },
      {
        id: "escudo_corporal",
        name: "Escudo Corporal",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: ["CON"],
        range: "aliado adjacente",
        duration: "até o início do próximo turno",
        type: "suporte defensivo",
        description:
          "Você intercepta um ataque destinado a um aliado, usando o próprio corpo como barreira.",
        effects: [
          "Redireciona o próximo ataque físico ou projétil ao seu personagem",
          "Reduz o dano em 1d10 + modificador de Constituição",
          "Se anular totalmente o dano, o aliado protegido ganha +1 em ataque até o fim do próximo turno",
        ],
      },
      {
        id: "golpe_demolidor",
        name: "Golpe Demolidor",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: ["FOR"],
        range: "corpo a corpo",
        duration: "instantânea",
        type: "ofensiva",
        description:
          "Você ataca o ponto exato onde a defesa cede, concentrando impacto máximo.",
        effects: [
          "Causa 1d10 + modificador de Força",
          "Ignora metade da Defesa Física do alvo",
          "Se já tiver esquivado ou bloqueado esse inimigo, o dano sobe para 2 dados",
          "Em crítico, empurra o alvo 3 metros e pode atordoá-lo",
        ],
        risk:
          "Em falha crítica, você sofre 1d4 de dano verdadeiro por autolesão.",
      },
      {
        id: "forca_de_arranque",
        name: "Força de Arranque",
        costPEH: 1,
        rarity: "rara",
        pfCost: 2,
        attributeBase: ["FOR"],
        range: "1,5 metro",
        duration: "instantânea",
        type: "controle de campo",
        description:
          "Você usa impulso corporal para derrubar, empurrar ou desequilibrar um alvo.",
        effects: [
          "Causa 1d6 + Força",
          "Escolha: derrubar, empurrar 3 metros ou impor -2 na Defesa até o próximo turno",
        ],
        risk:
          "Em falha crítica, você cai prono.",
      },
      {
        id: "folego_inesgotavel",
        name: "Fôlego Inesgotável",
        costPEH: 1,
        rarity: "rara",
        type: "passiva de resistencia",
        description:
          "Seu condicionamento reduz exaustão e melhora sua recuperação física.",
        effects: [
          "+1 PF recuperado em cada descanso curto",
          "Você sofre -1 nível a menos de Exaustão causada por esforço físico",
          "Pode refazer testes de Atletismo 1 vez por descanso longo",
        ],
      },
      {
        id: "limite_biologico_zero",
        name: "Limite Biológico Zero",
        costPEH: 2,
        rarity: "epica",
        pfCost: 6,
        attributeBase: ["FOR", "CON"],
        range: "pessoal",
        duration: "10 rodadas",
        type: "habilidade oculta",
        requirement: "Atleta nível 10+ e Corrupção Física ≥ 5",
        description:
          "Você rompe os mecanismos naturais de autoproteção e entra em um estado extremo de sobrevivência corporal.",
        effects: [
          "+4 em Força e Constituição",
          "Ataques corpo a corpo causam +1 dado de dano",
          "Ignora exausto, sangrando, atordoado ou paralisado",
          "Se cair a 0 PF, continua ativo até o final da rodada seguinte com 1 PF temporário",
        ],
        risk:
          "Ao final, sofre dano verdadeiro, penalidade física e risco de colapso corporal permanente.",

          hidden: true,
      },
    ],
  },

  ocultista_espiritualista: {
    id: "ocultista_espiritualista",
    name: "Ocultista Espiritualista",
    hpBase: 6,
    hpPerLevelBonus: 4,

    attributeBonuses:{
    type:"choice",
    options:["VON", "INT"],
    amount: 2
    },

    autoSkills: ["percepcao", "controle_mental"],

    skillChoices: {
      choose: 2,
      options: [
        "intuicao",
        "empatia",
        "pesquisa",
        "artes",
        "diplomacia",
        "furtividade",
        "miticismo"
      ]
    },

    description:
      "O Ocultista é o mediador entre vivos e mortos, estudioso das forças invisíveis e manipulador cuidadoso do véu espiritual.",
    role: "Suporte místico, defesa espiritual e investigação sobrenatural.",
    strengths: [
      "Detecta e manipula energia espiritual",
      "Pode invocar, selar ou negociar com entidades",
      "Protege aliados de efeitos mentais e sobrenaturais",
    ],
    weaknesses: [
      "Risco constante de corrupção espiritual",
      "Grande desgaste mental",
      "Pode atrair ou ser marcado por entidades",
    ],

    abilities: [
      {
        id: "manifestacao_espiritual",
        name: "Manifestação Espiritual",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["CAR", "INT"],
        range: "6 metros",
        duration: "2 turnos",
        type: "suporte",
        description:
          "Você convoca uma presença espiritual que protege e fortalece um alvo escolhido.",
        effects: [
          "Concede +1 Defesa ou +1 Resistência Mental",
          "A manifestação absorve 1 ataque leve",
          "Pode anular 1 teste de medo ou terror espiritual de um aliado durante a duração",
        ],
        risk:
          "Em falha crítica, a entidade se manifesta de forma instável e impõe -1 Moral ao grupo por 1 turno.",
      },
      {
        id: "eco_dos_mortos",
        name: "Eco dos Mortos",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["INT", "SAB"],
        range: "pessoal",
        duration: "1 turno",
        type: "investigativa espiritual",
        description:
          "Você abre a mente para ecos residuais de mortes, emoções e magia deixados no ambiente.",
        effects: [
          "+2 em Investigação e Intuição espiritual",
          "Revela memórias psíquicas, restos de magia e verdades ocultas",
          "Pode refazer 1 teste de Investigação ou Percepção durante a cena",
        ],
        risk:
          "Em falha crítica, ecos distorcidos causam -1 em Percepção e -1 Moral por 1 turno.",
      },
      {
        id: "manto_das_almas",
        name: "Manto das Almas",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["CAR", "VON"],
        range: "raio de 6 metros",
        duration: "2 turnos",
        type: "defesa espiritual",
        description:
          "Você ergue um campo etéreo que protege aliados de ataques mentais e espirituais.",
        effects: [
          "Aliados recebem +2 Resistência Mental",
          "Reduz 1d6 de dano espiritual recebido dentro da área",
          "Aliados ganham vantagem contra medo sobrenatural",
        ],
        risk:
          "Em falha crítica, o ruído espiritual corrompe o campo e todos sofrem -1 Resistência Mental por 1 turno.",
      },
      {
        id: "visao_do_veu",
        name: "Visão do Véu",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: ["INT", "SAB"],
        range: "9 metros",
        duration: "1 turno",
        type: "percepcao espiritual",
        description:
          "Você enxerga através da realidade física e percebe entidades, sigilos, ilusões e fendas ocultas.",
        effects: [
          "+2 em Percepção",
          "Revela entidades invisíveis, ilusões, portais adormecidos e armadilhas mágicas",
          "Permite ignorar camuflagem espiritual contra entidades",
        ],
        risk:
          "Em falha crítica, sofre vertigem espiritual e recebe -1 em testes mentais por 1 turno.",
      },
      {
        id: "corrente_astral",
        name: "Corrente Astral",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 4,
        attributeBase: ["INT", "VON"],
        range: "9 metros",
        duration: "1 turno",
        type: "controle espiritual",
        description:
          "Você projeta uma corrente etérea que prende e drena a energia de um inimigo.",
        effects: [
          "Teste de Vontade CD 13; em falha, o alvo fica preso e perde 1 PF",
          "Causa 1d6 de dano espiritual",
        ],
        risk:
          "Em falha crítica, a corrente se volta contra você e impõe -1 PF e -1 Resistência Mental.",
      },
      {
        id: "ritual_de_purificacao",
        name: "Ritual de Purificação",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: ["CAR", "VON"],
        range: "6 metros",
        duration: "instantânea",
        type: "suporte espiritual",
        description:
          "Você canaliza energia purificadora para remover corrupção e aliviar estados negativos leves.",
        effects: [
          "Remove 1 condição negativa leve",
          "Aliados recuperam +1 Moral",
        ],
        risk:
          "Em falha crítica, sofre rejeição energética e recebe -1 Resistência Mental.",
      },
      {
        id: "expulsao_espiritual",
        name: "Expulsão Espiritual",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: ["CAR", "VON"],
        range: "9 metros",
        duration: "instantânea",
        type: "ofensiva espiritual",
        description:
          "Você repele ou bane entidades e alvos espirituais com energia purificadora concentrada.",
        effects: [
          "O alvo faz teste de Vontade CD 14; em falha, é banido ou disperso",
          "Causa 2d6 de dano espiritual",
        ],
        risk:
          "Em falha crítica, a energia se reverte parcialmente e você sofre 1d6 de dano espiritual e -1 Resistência Mental.",
      },
      {
        id: "chamado_do_vazio",
        name: "Chamado do Vazio",
        costPEH: 2,
        rarity: "epica",
        pfCost: 6,
        attributeBase: ["VON", "CAR"],
        range: "9 metros",
        duration: "2 turnos",
        type: "habilidade oculta",
        requirement: "Nível 10+ e afinidade espiritual estabelecida",
        description:
          "Você abre um ponto de convergência entre o plano físico e o espiritual, alterando o campo ao redor.",
        effects: [
          "Cria um Campo Espiritual em raio de 6 metros",
          "Aliados recebem +2 Resistência Mental e +1 Intuição",
          "Inimigos vivos fazem teste de Vontade; em falha, sofrem -2 em Moral e Ataques e 1d6 de dano espiritual",
          "Entidades espirituais podem ser atraídas e controladas por 1 turno",
        ],
        risk:
          "Ao final, você faz teste de Vontade CD 15; em falha, sofre confusão e Exaustão adicional. Em falha crítica, algo hostil atravessa o véu.",

          hidden: true,
      },
    ],
  },

  reporter: {
    id: "reporter",
    name: "Repórter",
    hpBase: 8,
    hpPerLevelBonus: 4,

    attributeBonuses:{
    type:"choice",
    options:["CAR", "INT"],
    amount: 2
    },

    autoSkills: ["investigacao", "empatia"],

    skillChoices: {
      choose: 2,
      options: [
        "diplomacia",
        "pesquisa",
        "intuicao",
        "artes",
        "furtividade",
        "controle_mental",
      ]
    },

    description:
      "O Repórter busca a verdade, conecta pistas e transforma observação em vantagem estratégica para o grupo.",
    role: "Investigador, suporte narrativo e revelador de padrões ocultos.",
    strengths: [
      "Descobre segredos e padrões",
      "Documenta, expõe e organiza informação",
      "Ajuda o grupo com leitura clara dos acontecimentos",
    ],
    weaknesses: [
      "Pouca resistência em combate direto",
      "Pode ser manipulado por ilusões",
      "Obsessão por provar a verdade",
    ],

    abilities: [
      {
        id: "olhar_investigativo",
        name: "Olhar Investigativo",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: ["INT", "SAB"],
        range: "12 metros",
        duration: "1 turno",
        type: "investigativa",
        description:
          "Você analisa pessoas, objetos ou interações para detectar detalhes relevantes.",
        effects: [
          "+2 em Percepção ou Investigação para pistas físicas, padrões ou mentiras",
        ],
        risk:
          "Em falha crítica, interpreta sinais errados e causa -1 em testes de investigação/social de aliados por 1 turno.",
      },
      {
        id: "entrevista_persuasiva",
        name: "Entrevista Persuasiva",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["CAR", "INT"],
        range: "9 metros presencial / 12 metros digital",
        duration: "1 turno",
        type: "social",
        description:
          "Você extrai informações através de perguntas, pressão suave e leitura corporal.",
        effects: [
          "Alvo faz teste de Vontade CD 13; em falha, fornece informações importantes",
          "Em sucesso parcial, fornece informações menores",
        ],
        risk:
          "Em falha crítica, o alvo se fecha ou fornece informação falsa.",
      },
      {
        id: "exposicao_critica",
        name: "Exposição Crítica",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: ["INT"],
        range: "15 metros ou rede digital",
        duration: "2 turnos",
        type: "ofensiva social",
        description:
          "Você expõe erros, mentiras ou corrupção para desestabilizar inimigos e influenciar o clima da cena.",
        effects: [
          "Inimigos fazem teste de Vontade CD 14; em falha, sofrem -2 em moral ou resistência mental",
          "Aliados próximos recebem +1 em Moral",
        ],
        risk:
          "Em falha crítica, inimigos ganham +1 em moral e aliados sofrem -1 em moral.",
      },
      {
        id: "rastro_digital",
        name: "Rastro Digital",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: ["INT"],
        range: "18 metros",
        duration: "1 a 3 turnos",
        type: "investigativa digital",
        description:
          "Você rastreia dados, mensagens e padrões digitais para localizar suspeitos e intenções.",
        effects: [
          "+2 em Investigação ou Percepção digital",
          "Pode revelar comportamentos suspeitos ou movimentos futuros",
        ],
        risk:
          "Em falha crítica, coleta informações erradas e prejudica a leitura do grupo.",
      },
      {
        id: "investigacao_sigilosa",
        name: "Investigação Sigilosa",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: ["DES", "INT"],
        range: "12 metros",
        duration: "até ser descoberta",
        type: "investigativa furtiva",
        description:
          "Você coleta dados e observa sem ser notado, favorecendo leitura e posicionamento do grupo.",
        effects: [
          "Aliados recebem +2 em Investigação, Percepção ou Furtividade ao colaborar",
          "Descobre informações valiosas sobre inimigos ou civis",
        ],
        risk:
          "Em falha crítica, você é detectado e os aliados sofrem -1 em Furtividade ou Moral por 1 turno.",
      },
      {
        id: "linha_direta",
        name: "Linha Direta",
        costPEH: 1,
        rarity: "rara",
        pfCost: 2,
        attributeBase: ["CAR"],
        range: "9 metros ou comunicação digital",
        duration: "2 turnos",
        type: "suporte social",
        description:
          "Você transmite instruções rápidas e diretas que reorganizam o grupo.",
        effects: [
          "Aliados recebem +1 em ataque, moral ou resistência mental",
          "Pode permitir repetição de um teste social ou de moral com +1 bônus",
        ],
        risk:
          "Em falha crítica, a mensagem é mal interpretada.",
      },
      {
        id: "olhos_na_multidao",
        name: "Olhos na Multidão",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: ["SAB", "INT"],
        range: "15 metros",
        duration: "2 turnos",
        type: "investigativa social",
        description:
          "Você analisa grupos inteiros e detecta suspeitos, mentiras coletivas e padrões escondidos.",
        effects: [
          "Identifica 1 a 3 alvos suspeitos ou comportamentos incomuns",
          "Concede +2 em Investigação ou Percepção social",
          "Aliados recebem +1 em testes sociais com os alvos detectados",
        ],
        risk:
          "Em falha crítica, acusa inocentes ou confunde padrões.",
      },
      {
        id: "verdade_oculta",
        name: "Verdade Oculta",
        costPEH: 2,
        rarity: "epica",
        pfCost: 5,
        attributeBase: ["INT", "SAB"],
        range: "30 metros ou dispositivo conectado",
        duration: "2 turnos",
        type: "habilidade oculta",
        requirement: "Repórter nível 10+ e pelo menos 2 habilidades investigativas",
        description:
          "Você entra em percepção máxima e revela padrões invisíveis, rastros sobrenaturais e inconsistências profundas.",
        effects: [
          "Revelação Sobrenatural: +3 em Investigação/Percepção do grupo para fenômenos do Outro Lado",
          "Insight Estratégico: identifica pontos fracos críticos de inimigos ou locais",
          "Verdade Oculta: detecta manipulações sociais ou digitais e pode conceder +2 em moral ou ataque social/mental aos aliados",
        ],
        risk:
          "Em falha crítica, interpreta mal os sinais e o grupo sofre -2 em moral/percepção por 1 turno.",

          hidden: true,
      },
    ],
  },
}