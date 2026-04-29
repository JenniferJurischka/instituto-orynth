export type TechnicalCourseCategory =
  | "saude"
  | "tecnologia"
  | "operacional"
  | "social"
  | "criativo"
  | "oculto"

export type TechnicalCourseEntry = {
  id: string
  name: string
  category: TechnicalCourseCategory

  description: string
  summary: string

  recommendedAttributes: string[]
  abilityPreview: string[]

  whatYouLearn: string[]
  classStructure: string[]

  monthlyCost: string
  yearlyCost: string
  scholarships: string[]

  duration: string
  workload: string
  shifts: string[]
  modality: string

  profile: string[]
}

export const technicalCoursesCatalog: Record<string, TechnicalCourseEntry> = {
  enfermagem: {
    id: "enfermagem",
    name: "Técnico em Enfermagem",
    category: "saude",

    description:
      "O Curso Técnico em Enfermagem do Instituto Orynth prepara o estudante para primeiros socorros, estabilização de feridos, avaliação de riscos biológicos e suporte emergencial em situações críticas.",

    summary:
      "Curso técnico voltado para suporte médico realista, contenção de agravamentos, estabilização de aliados e resposta rápida em crises físicas.",

    recommendedAttributes: ["Sabedoria", "Inteligência", "Percepção"],

    abilityPreview: [
      "Treinamento de Primeiros Socorros",
      "Analista Clínico Rápido",
      "Ponto de Compressão",
      "Kit de Emergência",
      "Suporte em Crise Mental",
    ],

    whatYouLearn: [
      "Estabilizar aliados inconscientes",
      "Reconhecer sintomas clínicos rapidamente",
      "Evitar agravamento de ferimentos",
      "Lidar com toxinas, doenças e contaminações leves",
      "Oferecer suporte físico e emocional emergencial",
    ],

    classStructure: [
      "Treinamento de primeiros socorros e contenção emergencial",
      "Práticas de avaliação clínica rápida",
      "Estudo de materiais médicos e protocolos de crise",
      "Simulações de resgate, estabilização e suporte emocional",
    ],

    monthlyCost: "R$ 420,00 por mês",
    yearlyCost: "R$ 5.040,00 por ano",
    scholarships: [
      "Bolsa técnica por mérito prático",
      "Desconto por atuação em projetos de saúde estudantil",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico de formação prática intensiva",
    shifts: ["Matutino", "Noturno"],
    modality: "Presencial",

    profile: [
      "Quer atuar como suporte do grupo",
      "Consegue manter a calma em emergências",
      "Gosta de cuidado, prevenção e estabilização",
      "Prefere ajudar aliados diretamente em campo",
    ],
  },

  informatica: {
    id: "informatica",
    name: "Técnico em Informática",
    category: "tecnologia",

    description:
      "O Curso Técnico em Informática do Instituto Orynth prepara o estudante para compreender sistemas digitais, manipular dispositivos, contornar barreiras eletrônicas e lidar com falhas tecnológicas em campo.",

    summary:
      "Curso técnico voltado para hackeamento, reparo, análise de dispositivos, controle eletrônico e suporte investigativo digital.",

    recommendedAttributes: ["Inteligência", "Percepção", "Destreza"],

    abilityPreview: [
      "Diagnóstico Eletrônico",
      "Kit de Ferramentas Rápidas",
      "Bloqueio de Sinal",
      "Invasão Silenciosa",
      "Firewall Mental",
    ],

    whatYouLearn: [
      "Hackear e acessar sistemas simples",
      "Consertar ou improvisar equipamentos eletrônicos",
      "Detectar anomalias digitais e interferências estranhas",
      "Controlar câmeras, travas e sensores",
      "Proteger o grupo contra ameaças ligadas à tecnologia",
    ],

    classStructure: [
      "Práticas de hardware, redes e manutenção",
      "Simulações de invasão, bloqueio e extração de dados",
      "Treinamento com dispositivos, sensores e sistemas escolares",
      "Laboratórios de análise de falhas e interferência digital",
    ],

    monthlyCost: "R$ 460,00 por mês",
    yearlyCost: "R$ 5.520,00 por ano",
    scholarships: [
      "Bolsa técnica por desempenho em laboratório",
      "Desconto por participação em projetos de tecnologia interna",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico com foco em prática e laboratório",
    shifts: ["Vespertino", "Noturno"],
    modality: "Presencial",

    profile: [
      "Gosta de tecnologia e sistemas",
      "É curioso com máquinas, redes e dispositivos",
      "Prefere resolver problemas de forma técnica",
      "Quer atuar com suporte digital e controle eletrônico",
    ],
  },

  quimica: {
    id: "quimica",
    name: "Técnico em Química",
    category: "tecnologia",

    description:
      "O Curso Técnico em Química do Instituto Orynth prepara o estudante para identificar substâncias, manipular reagentes, neutralizar riscos ambientais e analisar materiais perigosos em campo.",

    summary:
      "Curso técnico voltado para análise de substâncias, neutralização de riscos químicos, improviso com reagentes e leitura ambiental.",

    recommendedAttributes: ["Inteligência", "Sabedoria", "Destreza"],

    abilityPreview: [
      "Análise Imediata",
      "Neutralização Química",
      "Kit de Reagentes Rápidos",
      "Resistência Orgânica",
      "Catalisador Improvisado",
    ],

    whatYouLearn: [
      "Identificar toxinas, venenos e reagentes perigosos",
      "Neutralizar condições químicas leves",
      "Improvisar compostos úteis em campo",
      "Ler riscos ambientais e materiais suspeitos",
      "Ajudar o grupo contra gases, corrosivos e contaminações",
    ],

    classStructure: [
      "Laboratórios de análise química e segurança",
      "Práticas de manuseio de reagentes e materiais perigosos",
      "Simulações de contenção e neutralização",
      "Estudos de campo sobre riscos químicos e ambientais",
    ],

    monthlyCost: "R$ 470,00 por mês",
    yearlyCost: "R$ 5.640,00 por ano",
    scholarships: [
      "Bolsa por desempenho em laboratório",
      "Desconto por pesquisa aplicada em materiais",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico prático com foco laboratorial",
    shifts: ["Matutino", "Noturno"],
    modality: "Presencial",

    profile: [
      "Gosta de ciência aplicada e análise",
      "Tem atenção a detalhes materiais",
      "Quer atuar contra riscos ambientais e químicos",
      "Prefere resolver problemas por conhecimento técnico",
    ],
  },

  artes_cenicas: {
    id: "artes_cenicas",
    name: "Técnico em Artes Cênicas",
    category: "criativo",

    description:
      "O Curso Técnico em Artes Cênicas do Instituto Orynth desenvolve presença, expressão corporal, manipulação emocional, atuação e leitura de cena para contextos sociais, investigativos e tensos.",

    summary:
      "Curso técnico voltado para atuação, distração, persuasão, controle de atmosfera e manipulação emocional em campo.",

    recommendedAttributes: ["Carisma", "Destreza", "Inteligência"],

    abilityPreview: [
      "Presença Cênica",
      "Manipulação Emocional",
      "Eco Dramático",
      "Disfarce Expressivo",
      "Voz de Comando",
    ],

    whatYouLearn: [
      "Atuar e se adaptar socialmente com rapidez",
      "Distrair, manipular ou inspirar pessoas",
      "Ler o clima emocional de uma cena",
      "Criar disfarces e interpretações funcionais",
      "Controlar a atmosfera ao redor com presença e fala",
    ],

    classStructure: [
      "Oficinas de atuação, corpo e voz",
      "Treinos de improvisação, disfarce e expressão emocional",
      "Simulações de infiltração social e presença de palco",
      "Exercícios de leitura de cena e manipulação de atmosfera",
    ],

    monthlyCost: "R$ 430,00 por mês",
    yearlyCost: "R$ 5.160,00 por ano",
    scholarships: [
      "Bolsa por desempenho artístico",
      "Desconto por participação em projetos performáticos",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico de formação prática em cena e presença",
    shifts: ["Vespertino", "Noturno"],
    modality: "Presencial",

    profile: [
      "Gosta de expressão, voz e atuação",
      "Tem boa leitura social",
      "Quer influenciar o clima das cenas",
      "Prefere resolver conflitos com presença e improviso",
    ],
  },

  musica: {
    id: "musica",
    name: "Técnico em Música",
    category: "criativo",

    description:
      "O Curso Técnico em Música do Instituto Orynth desenvolve ritmo, percepção sonora, harmonia emocional e uso estratégico do som como ferramenta de suporte, distração e foco.",

    summary:
      "Curso técnico voltado para ritmo, apoio emocional, distrações sonoras, controle de atenção e modulação de ambiente.",

    recommendedAttributes: ["Carisma", "Sabedoria", "Inteligência"],

    abilityPreview: [
      "Ritmo Interno",
      "Harmonia Social",
      "Pulso de Grupo",
      "Melodia Calmante",
      "Frequência Disruptiva",
    ],

    whatYouLearn: [
      "Usar som e ritmo para influenciar emoções",
      "Criar distrações sonoras e zonas de foco",
      "Acalmar, estimular ou coordenar aliados",
      "Perceber sinais auditivos sutis",
      "Manipular atmosfera por frequência e presença sonora",
    ],

    classStructure: [
      "Prática instrumental e percepção auditiva",
      "Estudos de ritmo, frequência e emoção",
      "Laboratórios de som, ruído e atenção",
      "Exercícios de coordenação de grupo por cadência e escuta",
    ],

    monthlyCost: "R$ 440,00 por mês",
    yearlyCost: "R$ 5.280,00 por ano",
    scholarships: [
      "Bolsa por mérito artístico-musical",
      "Desconto por atuação em projetos culturais",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico com prática sonora intensiva",
    shifts: ["Matutino", "Vespertino"],
    modality: "Presencial",

    profile: [
      "Gosta de som, música e ritmo",
      "Tem sensibilidade emocional",
      "Quer apoiar aliados de forma indireta",
      "Se interessa por percepção auditiva e atmosfera",
    ],
  },

  mecanica: {
    id: "mecanica",
    name: "Técnico em Mecânica",
    category: "operacional",

    description:
      "O Curso Técnico em Mecânica do Instituto Orynth prepara o estudante para manipular estruturas, ferramentas, máquinas e dispositivos improvisados em situações práticas e hostis.",

    summary:
      "Curso técnico voltado para manutenção física, improviso estrutural, reforço de ambiente, ferramentas e engenhosidade prática.",

    recommendedAttributes: ["Inteligência", "Destreza", "Força"],

    abilityPreview: [
      "Mão Firme",
      "Diagnóstico Rápido",
      "Reforço Improvisado",
      "Engenho Tático",
      "Máquina Improvisada",
    ],

    whatYouLearn: [
      "Analisar mecanismos e estruturas com rapidez",
      "Consertar, reforçar e improvisar soluções físicas",
      "Criar armadilhas leves e dispositivos simples",
      "Usar ferramentas com precisão sob pressão",
      "Controlar ambiente através de engenharia prática",
    ],

    classStructure: [
      "Oficinas de ferramenta, torque e estrutura",
      "Práticas de reforço, reparo e montagem",
      "Simulações de improviso em campo",
      "Estudos de mecanismos, vibração e resistência",
    ],

    monthlyCost: "R$ 450,00 por mês",
    yearlyCost: "R$ 5.400,00 por ano",
    scholarships: [
      "Bolsa por desempenho técnico-operacional",
      "Desconto por participação em manutenção institucional",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico fortemente prático",
    shifts: ["Matutino", "Noturno"],
    modality: "Presencial",

    profile: [
      "Gosta de ferramentas e estruturas",
      "Tem perfil prático e resolutivo",
      "Quer improvisar soluções físicas úteis",
      "Lida bem com manutenção e ambiente hostil",
    ],
  },

  rituais_tradicoes: {
    id: "rituais_tradicoes",
    name: "Rituais e Tradições",
    category: "oculto",

    description:
      "O Curso Técnico em Rituais e Tradições é uma formação não oficial do Instituto Orynth, voltada para estudo de símbolos, práticas espirituais, proteção ritual e interação cuidadosa com forças invisíveis.",

    summary:
      "Curso técnico oculto voltado para proteção espiritual, leitura energética, selos, vínculos e manipulação simbólica do ambiente.",

    recommendedAttributes: ["Vontade", "Sabedoria", "Carisma", "Inteligência"],

    abilityPreview: [
      "Toque Purificador",
      "Símbolo de Afastamento",
      "Fio de Prata",
      "Véu de Proteção Temporário",
      "Abertura Delicada",
    ],

    whatYouLearn: [
      "Perceber instabilidade espiritual em ambientes",
      "Criar pequenas proteções e selos simbólicos",
      "Acalmar, afastar ou conter influências sutis",
      "Estabelecer vínculos energéticos de suporte",
      "Interagir com o oculto sem tentar dominá-lo",
    ],

    classStructure: [
      "Estudo de símbolos, tradições e práticas espirituais",
      "Exercícios de proteção e leitura energética",
      "Treinos de selamento, foco e estabilidade ritual",
      "Observação de fenômenos e interpretação simbólica",
    ],

    monthlyCost: "Não divulgado oficialmente",
    yearlyCost: "Não divulgado oficialmente",
    scholarships: [
      "Curso não reconhecido oficialmente pelo Instituto",
    ],

    duration: "Variável",
    workload: "Formação paralela e não regulamentada",
    shifts: ["Horários irregulares"],
    modality: "Presencial / Oculto",

    profile: [
      "Tem sensibilidade espiritual",
      "Se interessa por símbolos, ritos e proteção",
      "Quer lidar com o invisível sem confronto bruto",
      "Consegue manter cautela diante do desconhecido",
    ],
  },

  gastronomia: {
    id: "gastronomia",
    name: "Técnico em Gastronomia",
    category: "social",

    description:
      "O Curso Técnico em Gastronomia do Instituto Orynth ensina a transformar alimento em suporte, organização, alívio emocional e estratégia prática para o grupo.",

    summary:
      "Curso técnico voltado para apoio utilitário, preparo de comidas funcionais, recuperação leve, moral do grupo e improviso alimentar.",

    recommendedAttributes: ["Sabedoria", "Inteligência", "Carisma"],

    abilityPreview: [
      "Chef Organizado",
      "Degustação Técnica",
      "Calmante Culinário",
      "Refeição Energética",
      "Banquete do Líder",
    ],

    whatYouLearn: [
      "Preparar alimentos úteis em situações difíceis",
      "Ajudar aliados com foco, moral e recuperação leve",
      "Identificar toxinas e alimentos suspeitos",
      "Improvisar refeições com poucos recursos",
      "Usar culinária como ferramenta de cuidado e estratégia",
    ],

    classStructure: [
      "Cozinha prática, conservação e preparo funcional",
      "Estudos de nutrição, improviso e segurança alimentar",
      "Simulações de suporte em campo por alimentação",
      "Oficinas de culinária terapêutica e energética",
    ],

    monthlyCost: "R$ 400,00 por mês",
    yearlyCost: "R$ 4.800,00 por ano",
    scholarships: [
      "Bolsa por desempenho culinário",
      "Desconto por atuação em projetos de apoio estudantil",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico com prática culinária e funcional",
    shifts: ["Matutino", "Noturno"],
    modality: "Presencial",

    profile: [
      "Gosta de cozinhar e cuidar dos outros",
      "Tem senso prático e criativo",
      "Quer apoiar o grupo de maneira indireta",
      "Se interessa por comida como ferramenta de suporte",
    ],
  },

  seguranca_trabalho: {
    id: "seguranca_trabalho",
    name: "Técnico em Segurança do Trabalho",
    category: "operacional",

    description:
      "O Curso Técnico em Segurança do Trabalho do Instituto Orynth prepara o estudante para identificar riscos, prevenir acidentes, organizar evacuações e proteger o grupo de ameaças ambientais e estruturais.",

    summary:
      "Curso técnico voltado para prevenção, leitura de risco, rotas seguras, contenção de incidentes e suporte contra perigos ambientais.",

    recommendedAttributes: ["Sabedoria", "Inteligência", "Destreza"],

    abilityPreview: [
      "Avaliação de Risco Imediata",
      "Postura de Proteção",
      "Controle de Incidentes",
      "Sinalização Instantânea",
      "Protocolo de Evacuação",
    ],

    whatYouLearn: [
      "Identificar perigos ocultos com rapidez",
      "Prevenir acidentes e minimizar danos",
      "Criar rotas seguras e pontos de apoio",
      "Atuar em crises ambientais e estruturais",
      "Proteger aliados de fogo, queda, choque e esmagamento",
    ],

    classStructure: [
      "Treinamento de prevenção e leitura de risco",
      "Simulações de incidentes, evacuação e contenção",
      "Prática com EPIs, sinalização e apoio emergencial",
      "Estudos de ambientes perigosos e travessia segura",
    ],

    monthlyCost: "R$ 430,00 por mês",
    yearlyCost: "R$ 5.160,00 por ano",
    scholarships: [
      "Bolsa por desempenho preventivo e técnico",
      "Desconto por participação em brigadas e projetos internos",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico prático com foco preventivo",
    shifts: ["Matutino", "Noturno"],
    modality: "Presencial",

    profile: [
      "Gosta de organização e prevenção",
      "Observa perigos com facilidade",
      "Quer manter o grupo vivo entre crises",
      "Prefere atuar reduzindo riscos antes do colapso",
    ],
  },

  meio_ambiente: {
    id: "meio_ambiente",
    name: "Técnico em Meio Ambiente",
    category: "operacional",

    description:
      "O Curso Técnico em Meio Ambiente do Instituto Orynth prepara o estudante para interpretar ecossistemas, detectar contaminações, identificar riscos biológicos e conduzir grupos em territórios naturais ou instáveis.",

    summary:
      "Curso técnico voltado para leitura ambiental, rastreamento, contenção ecológica, flora, fauna e travessia segura.",

    recommendedAttributes: ["Sabedoria", "Inteligência", "Percepção"],

    abilityPreview: [
      "Leitura de Paisagem",
      "Bússola Biológica",
      "Detecção de Contaminação",
      "Caminho Ecológico",
      "Guardião do Ecossistema",
    ],

    whatYouLearn: [
      "Ler sinais naturais e padrões ecológicos",
      "Detectar contaminações, venenos e fungos",
      "Guiar o grupo por ambientes hostis",
      "Interpretar comportamento de fauna e flora",
      "Criar respostas rápidas a riscos ambientais",
    ],

    classStructure: [
      "Aulas de ecologia, rastreamento e leitura de paisagem",
      "Práticas em campo sobre flora, fauna e água",
      "Simulações de travessia em ambientes instáveis",
      "Exercícios de contenção ecológica e identificação de risco",
    ],

    monthlyCost: "R$ 420,00 por mês",
    yearlyCost: "R$ 5.040,00 por ano",
    scholarships: [
      "Bolsa por pesquisa ambiental",
      "Desconto por participação em projetos ecológicos",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico de campo e análise ambiental",
    shifts: ["Matutino", "Vespertino"],
    modality: "Presencial",

    profile: [
      "Gosta de natureza, rastros e ambiente",
      "Tem boa leitura de terreno",
      "Quer ajudar o grupo em exploração e sobrevivência",
      "Se interessa por ecologia e contaminação",
    ],
  },

  terapias_integrativas: {
    id: "terapias_integrativas",
    name: "Técnico em Terapias Integrativas",
    category: "social",

    description:
      "O Curso Técnico em Terapias Integrativas do Instituto Orynth ensina práticas de equilíbrio corporal, emocional e energético, com foco em estabilização, acolhimento e redução de estresse.",

    summary:
      "Curso técnico voltado para suporte emocional, redução de condições leves, relaxamento, alinhamento e cuidado integrativo.",

    recommendedAttributes: ["Sabedoria", "Carisma", "Percepção"],

    abilityPreview: [
      "Respiração Guiada",
      "Massagem Terapêutica Breve",
      "Aromaterapia Essencial",
      "Mapa Emocional",
      "Restauração Integrativa",
    ],

    whatYouLearn: [
      "Reduzir medo, ansiedade e confusão leve",
      "Ajudar aliados a recuperar foco e equilíbrio",
      "Ler estados emocionais e energéticos",
      "Aplicar técnicas de toque, respiração e preparo natural",
      "Atuar como suporte psicológico e corporal do grupo",
    ],

    classStructure: [
      "Práticas de respiração, toque terapêutico e relaxamento",
      "Estudos de aromaterapia, cristais e preparos naturais",
      "Leitura de estado emocional e alinhamento energético",
      "Simulações de estabilização em crise leve",
    ],

    monthlyCost: "R$ 410,00 por mês",
    yearlyCost: "R$ 4.920,00 por ano",
    scholarships: [
      "Bolsa por atuação em apoio emocional estudantil",
      "Desconto por desempenho em práticas integrativas",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico de prática holística e suporte",
    shifts: ["Vespertino", "Noturno"],
    modality: "Presencial",

    profile: [
      "Gosta de cuidado e escuta",
      "Tem sensibilidade emocional",
      "Quer ajudar o grupo a manter o equilíbrio",
      "Prefere suporte mental e corporal ao confronto direto",
    ],
  },

  linguagens_libras: {
    id: "linguagens_libras",
    name: "Técnico em Linguagens e Libras",
    category: "social",

    description:
      "O Curso Técnico em Linguagens e Libras do Instituto Orynth prepara o estudante para comunicação humana ampla, leitura de sinais, interpretação de gestos, mediação verbal e compreensão de sistemas simbólicos.",

    summary:
      "Curso técnico voltado para comunicação não verbal, leitura de sinais, tradução prática, interpretação simbólica e apoio diplomático.",

    recommendedAttributes: ["Sabedoria", "Inteligência", "Carisma"],

    abilityPreview: [
      "Leitura Labial",
      "Linguagem Universal",
      "Sinais Rápidos",
      "Comunicação Empática",
      "Tradução Avançada",
    ],

    whatYouLearn: [
      "Ler gestos, sinais e microcomunicações",
      "Interpretar mensagens silenciosas ou simbólicas",
      "Ajudar o grupo a agir com coordenação muda",
      "Traduzir formas de comunicação incomuns",
      "Facilitar contato com pessoas e criaturas inteligentes",
    ],

    classStructure: [
      "Treinamento em Libras, leitura labial e gesto técnico",
      "Estudos de linguagem corporal e mediação",
      "Práticas de interpretação simbólica e comunicação silenciosa",
      "Simulações de coordenação tática sem fala",
    ],

    monthlyCost: "R$ 390,00 por mês",
    yearlyCost: "R$ 4.680,00 por ano",
    scholarships: [
      "Bolsa por desempenho em acessibilidade e linguagem",
      "Desconto por projetos de inclusão comunicativa",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico de comunicação aplicada",
    shifts: ["Matutino", "Noturno"],
    modality: "Presencial",

    profile: [
      "Gosta de comunicação e interpretação",
      "Percebe gestos e sinais com facilidade",
      "Quer atuar como mediador do grupo",
      "Se interessa por linguagem além da fala comum",
    ],
  },

  manutencao_eletrica: {
    id: "manutencao_eletrica",
    name: "Técnico em Manutenção Elétrica",
    category: "tecnologia",

    description:
      "O Curso Técnico em Manutenção Elétrica do Instituto Orynth prepara o estudante para compreender sistemas energéticos, diagnosticar falhas, manipular circuitos e responder a riscos elétricos ou interferências incomuns.",

    summary:
      "Curso técnico voltado para circuitos, energia, reparo elétrico, controle de sistemas e leitura de anomalias eletromagnéticas.",

    recommendedAttributes: ["Inteligência", "Sabedoria", "Destreza"],

    abilityPreview: [
      "Ferramentas Improvisadas",
      "Diagnóstico Instantâneo",
      "Isolamento de Risco",
      "Curto Controlado",
      "Energia Estranha",
    ],

    whatYouLearn: [
      "Diagnosticar falhas elétricas rapidamente",
      "Consertar circuitos e sistemas energéticos simples",
      "Proteger o grupo contra choque e interferência",
      "Manipular alarmes, portas e energia emergencial",
      "Ler variações estranhas em ambientes eletrificados",
    ],

    classStructure: [
      "Práticas de circuito, manutenção e segurança elétrica",
      "Simulações de falha, curto e restauração de energia",
      "Treino com quadros, cabos, sensores e sistemas de prédio",
      "Exercícios de leitura de ruído eletromagnético",
    ],

    monthlyCost: "R$ 450,00 por mês",
    yearlyCost: "R$ 5.400,00 por ano",
    scholarships: [
      "Bolsa por desempenho técnico em manutenção",
      "Desconto por participação em infraestrutura institucional",
    ],

    duration: "1 a 2 anos",
    workload: "Curso técnico prático com foco em sistemas energéticos",
    shifts: ["Matutino", "Noturno"],
    modality: "Presencial",

    profile: [
      "Gosta de energia, sistemas e reparo",
      "Tem raciocínio técnico e prático",
      "Quer lidar com tecnologia de infraestrutura",
      "Se interessa por circuitos e anomalias elétricas",
    ],
  },
}