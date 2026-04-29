export type GraduationCategory =
  | "humanas"
  | "saude"
  | "tecnologia"
  | "artes"
  | "sociais"

export type GraduationCatalogEntry = {
  id: string
  name: string
  category: GraduationCategory

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

export const graduationCatalog: Record<string, GraduationCatalogEntry> = {
  administracao: {
    id: "administracao",
    name: "Administração",
    category: "sociais",

    description:
      "A Graduação em Administração do Instituto Orynth forma estudantes capazes de organizar recursos, coordenar equipes e tomar decisões sob pressão. O aluno aprende a transformar caos em estratégia e liderar grupos com lógica, planejamento e leitura situacional.",

    summary:
      "Curso voltado para estratégia, organização de equipe, leitura de cenário, negociação e tomada de decisão em contextos de crise.",

    recommendedAttributes: ["Inteligência", "Sabedoria", "Carisma"],

    abilityPreview: [
      "Leitura Fria de Situação",
      "Comando de Reorganização",
      "Negociação de Crise",
      "Plano Contingencial",
      "Análise de Padrões Hostis",
    ],

    whatYouLearn: [
      "Organizar grupos e minimizar riscos",
      "Tomar decisões com base em dados",
      "Resolver conflitos sem escaloná-los",
      "Otimizar recursos e rotas de ação",
      "Criar planos alternativos rapidamente",
      "Liderar discretamente sob pressão",
    ],

    classStructure: [
      "Disciplinas teóricas de administração, negociação e lógica organizacional",
      "Laboratórios de gestão de crise e simulação empresarial",
      "Projetos de logística, liderança e reorganização de equipes",
      "Avaliações táticas e relatórios estruturais",
    ],

    monthlyCost: "R$ 1.040,00 por mês",
    yearlyCost: "R$ 12.480,00 por ano",
    scholarships: [
      "Bolsa Mérito Acadêmico (30% a 70%)",
      "Bolsa Social (20% a 60%)",
      "Bolsa Monitoria",
      "Descontos para projetos institucionais",
    ],

    duration: "4 anos (8 semestres)",
    workload: "3.120 horas",
    shifts: ["Matutino", "Noturno"],
    modality: "Presencial com atividades híbridas opcionais",

    profile: [
      "Gosta de organizar pessoas e processos",
      "Pensa com estratégia e lógica",
      "Consegue tomar decisões sob pressão",
      "Tem perfil de liderança discreta",
    ],
  },

  arquitetura: {
    id: "arquitetura",
    name: "Arquitetura",
    category: "tecnologia",

    description:
      "A Graduação em Arquitetura do Instituto Orynth prepara o estudante para compreender, projetar e transformar espaços físicos, psicológicos e até simbolicamente instáveis. O aluno aprende a interpretar ambientes, prever riscos e criar soluções estruturais úteis em campo.",

    summary:
      "Curso focado em leitura espacial, análise estrutural, rotas de fuga, improviso de campo e interpretação tática de ambientes.",

    recommendedAttributes: ["Inteligência", "Sabedoria", "Destreza"],

    abilityPreview: [
      "Olho Estrutural",
      "Mapa Mental Profissional",
      "Improviso Estrutural",
      "Análise Acústica",
      "Diagnóstico de Espaço Hostil",
    ],

    whatYouLearn: [
      "Ler ambientes como mapas vivos",
      "Prever falhas e riscos estruturais",
      "Criar reforços, barricadas e improvisos úteis",
      "Projetar rotas de fuga e zonas seguras",
      "Interpretar o impacto emocional do espaço",
    ],

    classStructure: [
      "Fundamentos de arquitetura, design espacial e estudo de materiais",
      "Laboratórios de modelagem 3D e análise estrutural",
      "Psicologia ambiental e leitura de movimento em espaços",
      "Saídas de campo, inspeções prediais e projetos práticos",
    ],

    monthlyCost: "R$ 1.120,00 por mês",
    yearlyCost: "R$ 17.200,00 por ano",
    scholarships: [
      "Bolsa por desempenho acadêmico",
      "Bolsa por criatividade arquitetônica",
      "Bolsa por análise espacial aplicada",
    ],

    duration: "4 anos",
    workload: "Formação integral com módulos teóricos e práticos",
    shifts: ["Integral"],
    modality: "Presencial",

    profile: [
      "Tem olhar criativo e analítico",
      "Gosta de mapas, espaços e estruturas",
      "Pensa em rotas e soluções concretas",
      "Se adapta bem a ambientes incomuns",
    ],
  },

  artes_visuais: {
    id: "artes_visuais",
    name: "Artes Visuais",
    category: "artes",

    description:
      "A Graduação em Artes Visuais do Instituto Orynth forma estudantes capazes de interpretar, transformar e comunicar realidades por meio da imagem, da composição e da simbologia. No Instituto, a arte também funciona como investigação, expressão emocional e leitura do inexplicável.",

    summary:
      "Curso voltado para interpretação de símbolos, percepção estética, criação de atmosferas e uso da arte como investigação visual.",

    recommendedAttributes: ["Inteligência", "Carisma", "Sabedoria"],

    abilityPreview: [
      "Olho Simbólico",
      "Estética da Perturbação",
      "Composição Tática",
      "Cores que Falam",
      "Ilusão Rudimentar",
    ],

    whatYouLearn: [
      "Interpretar padrões, símbolos e imagens complexas",
      "Perceber detalhes visuais ignorados pelo olhar comum",
      "Criar atmosferas emocionais através da arte",
      "Usar a arte como forma de investigação e expressão",
      "Documentar visualmente fenômenos difíceis de explicar",
    ],

    classStructure: [
      "Ateliês práticos de desenho, pintura, escultura e técnicas mistas",
      "Estudos da imagem, semiótica e psicologia das cores",
      "Laboratórios de projeções, ilusões ópticas e distorções visuais",
      "Projetos autorais, exposições e documentação gráfica",
    ],

    monthlyCost: "R$ 1.020,00 por mês",
    yearlyCost: "R$ 15.200,00 por ano",
    scholarships: [
      "Bolsas por mérito artístico",
      "Descontos por portfólio visual",
    ],

    duration: "Bacharelado",
    workload: "Formação híbrida entre teoria, prática e laboratório",
    shifts: ["Presencial integral"],
    modality: "Presencial",

    profile: [
      "Tem sensibilidade estética",
      "Gosta de símbolos e significados ocultos",
      "Observa o mundo em detalhes",
      "Quer transformar arte em ferramenta prática",
    ],
  },

  biologia_ciencias_naturais: {
    id: "biologia_ciencias_naturais",
    name: "Biologia e Ciências Naturais",
    category: "saude",

    description:
      "A Graduação em Biologia e Ciências Naturais do Instituto Orynth forma estudantes capazes de compreender sistemas vivos, ecossistemas, anatomia, mutações e fenômenos biológicos incomuns. O curso desenvolve um olhar científico preciso para leitura de ambientes e organismos.",

    summary:
      "Curso focado em análise ambiental, criaturas, rastros biológicos, contaminação, mutações e padrões ecológicos.",

    recommendedAttributes: ["Inteligência", "Sabedoria", "Percepção"],

    abilityPreview: [
      "Análise Bioambiental",
      "Identificação de Espécies e Anomalias",
      "Derivação Ecológica",
      "Improviso Naturalista",
      "Resposta Biológica de Emergência",
    ],

    whatYouLearn: [
      "Analisar ambientes naturais e organismos desconhecidos",
      "Detectar toxinas, venenos e alterações biológicas",
      "Reconhecer mutações e padrões ecológicos anômalos",
      "Entender pistas corporais e biológicas em investigações",
      "Criar improvisos naturais para ajudar o grupo",
    ],

    classStructure: [
      "Laboratórios de anatomia, fisiologia e microbiologia",
      "Ecologia de campo e observação ambiental",
      "Microbiologia, química biológica e agentes patogênicos",
      "Pesquisa avançada sobre mutações e contaminações incomuns",
    ],

    monthlyCost: "R$ 1.180,00 por mês",
    yearlyCost: "R$ 17.200,00 por ano",
    scholarships: [
      "Bolsas para pesquisa científica",
      "Bolsas de monitoria em laboratório",
    ],

    duration: "Graduação plena",
    workload: "Formação intensiva com laboratórios e campo",
    shifts: ["Integral"],
    modality: "Presencial",

    profile: [
      "Gosta de natureza e investigação científica",
      "É detalhista com padrões biológicos",
      "Tem curiosidade por ecossistemas e criaturas",
      "Quer entender contaminação, mutação e vida anômala",
    ],
  },

  cinema_producao_audiovisual: {
    id: "cinema_producao_audiovisual",
    name: "Cinema e Produção Audiovisual",
    category: "artes",

    description:
      "A Graduação em Cinema e Produção Audiovisual do Instituto Orynth forma estudantes capazes de registrar, interpretar e manipular imagens, som, ritmo e narrativa. No Instituto, o audiovisual também funciona como ferramenta de investigação e revelação.",

    summary:
      "Curso voltado para direção de cena, registro de eventos, leitura visual, edição, luz, som e narrativa audiovisual investigativa.",

    recommendedAttributes: ["Inteligência", "Carisma", "Percepção"],

    abilityPreview: [
      "Direção de Cena",
      "Efeito Dramático",
      "Olho de Diretor",
      "Montagem Rápida",
      "Manipulação de Luz e Sombra",
    ],

    whatYouLearn: [
      "Registrar e interpretar cenas com precisão técnica",
      "Criar atmosferas por luz, som e enquadramento",
      "Usar audiovisual como ferramenta investigativa",
      "Editar, reconstruir e analisar acontecimentos",
      "Perceber o que a câmera revela além do olhar comum",
    ],

    classStructure: [
      "Linguagem cinematográfica e composição visual",
      "Gravação, captação de som e operação de equipamentos",
      "Montagem, edição e pós-produção",
      "Projetos de campo e laboratórios de registro sensorial",
    ],

    monthlyCost: "R$ 1.280,00 por mês",
    yearlyCost: "R$ 19.900,00 por ano",
    scholarships: [
      "Bolsas por portfólio artístico",
      "Bolsas por desempenho técnico",
    ],

    duration: "Graduação plena",
    workload: "Formação prática e teórica intensiva",
    shifts: ["Integral"],
    modality: "Presencial",

    profile: [
      "É observador e detalhista",
      "Gosta de contar histórias visualmente",
      "Tem interesse em vídeo, som e montagem",
      "Quer usar imagem como forma de descobrir a verdade",
    ],
  },

  direito: {
    id: "direito",
    name: "Direito",
    category: "humanas",

    description:
      "A Graduação em Direito do Instituto Orynth forma estudantes capazes de interpretar normas, argumentar sob pressão, mediar conflitos e desmontar contradições. No ambiente do Instituto, a lógica jurídica se torna uma arma de precisão social e investigativa.",

    summary:
      "Curso focado em argumentação, leitura de depoimentos, defesa lógica, negociação e controle social por discurso.",

    recommendedAttributes: ["Inteligência", "Carisma", "Sabedoria"],

    abilityPreview: [
      "Argumento Demolidor",
      "Objeção!",
      "Defesa Técnica",
      "Leitura de Testemunho",
      "Prova Conclusiva",
    ],

    whatYouLearn: [
      "Interpretar situações complexas com frieza",
      "Perceber contradições e brechas",
      "Defender aliados com lógica e postura",
      "Negociar em contextos hostis",
      "Reconstruir narrativas e ler testemunhos com precisão",
    ],

    classStructure: [
      "Fundamentos do direito e interpretação normativa",
      "Direito penal, processual e criminologia básica",
      "Mediação, diplomacia e resolução de conflitos",
      "Tribunais simulados, estudos de caso e prática argumentativa",
    ],

    monthlyCost: "R$ 1.280,00 por mês",
    yearlyCost: "R$ 18.500,00 por ano",
    scholarships: [
      "Bolsas por excelência em redação",
      "Bolsas por desempenho em oratória",
      "Bolsas por jurisprudência aplicada",
    ],

    duration: "Graduação plena",
    workload: "Formação com ênfase em teoria, prática e debate",
    shifts: ["Integral"],
    modality: "Presencial",

    profile: [
      "Gosta de argumentar e interpretar",
      "Lê nas entrelinhas com facilidade",
      "Consegue manter a calma sob pressão",
      "Quer usar lógica e fala como ferramenta de impacto",
    ],
  },

  educacao_fisica: {
    id: "educacao_fisica",
    name: "Educação Física",
    category: "saude",

    description:
      "A Graduação em Educação Física do Instituto Orynth forma estudantes capazes de compreender, orientar e aprimorar o corpo humano em seus aspectos biomecânicos, fisiológicos e estratégicos. O aluno aprende a agir, liderar e proteger sob esforço extremo.",

    summary:
      "Curso voltado para condicionamento, suporte corporal, resistência, mobilidade, liderança física e atuação em campo.",

    recommendedAttributes: ["Força", "Destreza", "Sabedoria"],

    abilityPreview: [
      "Corpo de Ferro",
      "Aceleração Tática",
      "Suporte Biomecânico",
      "Olho do Instrutor",
      "Guardião do Campo",
    ],

    whatYouLearn: [
      "Aumentar capacidade física aplicada",
      "Prevenir danos e ler sinais de exaustão",
      "Melhorar esquiva, movimento e resistência",
      "Apoiar aliados com biomecânica e instrução rápida",
      "Liderar grupos em situações de impacto corporal",
    ],

    classStructure: [
      "Aulas práticas corporais e circuitos físicos",
      "Laboratórios de performance humana e biomecânica",
      "Psicologia do movimento e estratégias de grupo",
      "Estágios em ambientes esportivos, clínicos e de campo",
    ],

    monthlyCost: "R$ 980,00 por mês",
    yearlyCost: "R$ 14.900,00 por ano",
    scholarships: [
      "Bolsas por mérito físico",
      "Bolsas por desempenho acadêmico",
    ],

    duration: "Formação integral",
    workload: "Curso com forte carga prática presencial",
    shifts: ["Integral"],
    modality: "Presencial",

    profile: [
      "Gosta de atividade física e disciplina",
      "Lida bem com esforço e pressão",
      "Quer proteger aliados no campo",
      "Tem boa adaptação a ambientes externos e dinâmicos",
    ],
  },

  engenharia_computacao: {
    id: "engenharia_computacao",
    name: "Engenharia da Computação",
    category: "tecnologia",

    description:
      "A Graduação em Engenharia da Computação do Instituto Orynth forma estudantes capazes de projetar, compreender e manipular sistemas computacionais, redes, hardware e padrões informacionais instáveis. No Instituto, tecnologia e anomalia frequentemente se encontram.",

    summary:
      "Curso voltado para lógica, redes, hardware, análise de sistemas e leitura de fenômenos tecnológicos ou informacionais anômalos.",

    recommendedAttributes: ["Inteligência", "Sabedoria", "Destreza"],

    abilityPreview: [
      "Arquitetura de Sistemas Mental",
      "Modelagem Computacional",
      "Engenharia Reversa",
      "Rede Sincronizada",
      "Algoritmo de Contra-Controle",
    ],

    whatYouLearn: [
      "Rastrear padrões digitais e comportamentos sistêmicos",
      "Criar e reparar dispositivos em campo",
      "Interpretar falhas tecnológicas e anomalias informacionais",
      "Lidar com redes, circuitos e sistemas críticos",
      "Proteger aliados por meio de coordenação e lógica técnica",
    ],

    classStructure: [
      "Fundamentos computacionais, algoritmos e criptografia",
      "Arquitetura de computadores e sistemas embarcados",
      "Redes, segurança e sistemas críticos",
      "Laboratórios de inteligência artificial e tecnologias anômalas",
    ],

    monthlyCost: "R$ 1.080,00 por mês",
    yearlyCost: "R$ 16.400,00 por ano",
    scholarships: [
      "Bolsas por mérito lógico",
      "Bolsas por desempenho técnico",
      "Bolsas por participação em projetos internos",
    ],

    duration: "Graduação plena",
    workload: "Curso integral com forte uso de laboratório",
    shifts: ["Integral"],
    modality: "Presencial",

    profile: [
      "Gosta de lógica, sistemas e tecnologia",
      "Lê padrões com facilidade",
      "Quer atuar com hardware, software e segurança",
      "Mantém o raciocínio em ambientes instáveis",
    ],
  },

  jornalismo: {
    id: "jornalismo",
    name: "Jornalismo",
    category: "humanas",

    description:
      "A Graduação em Jornalismo do Instituto Orynth forma estudantes capazes de apurar, registrar e narrar a verdade mesmo quando ela tenta se esconder. O curso treina observação, entrevista, reconstrução de fatos e documentação estratégica.",

    summary:
      "Curso focado em apuração, entrevista, documentação, reconstrução de acontecimentos e uso da informação como ferramenta de investigação.",

    recommendedAttributes: ["Inteligência", "Carisma", "Sabedoria"],

    abilityPreview: [
      "Apuração Imediata",
      "Pergunta Certeira",
      "Câmera não Mente",
      "Pressão Midiática",
      "Reportagem de Campo",
    ],

    whatYouLearn: [
      "Investigar, registrar e comunicar acontecimentos",
      "Conectar informações dispersas",
      "Conduzir entrevistas e ler contradições",
      "Criar relatórios, dossiês e reconstruções narrativas",
      "Transformar evidências em ferramenta de verdade",
    ],

    classStructure: [
      "Produção de reportagem e escrita jornalística",
      "Laboratório de áudio, vídeo e edição",
      "Técnicas de entrevista e observação social",
      "Jornalismo investigativo e estágios supervisionados",
    ],

    monthlyCost: "R$ 1.120,00 por mês",
    yearlyCost: "R$ 16.800,00 por ano",
    scholarships: [
      "Bolsas por desempenho em escrita",
      "Bolsas por investigação jornalística",
    ],

    duration: "Graduação plena",
    workload: "Formação prática e teórica com estúdios e campo",
    shifts: ["Integral"],
    modality: "Presencial",

    profile: [
      "Gosta de investigar e registrar fatos",
      "Tem curiosidade constante",
      "Se comunica bem oralmente e por escrito",
      "Quer descobrir o que realmente aconteceu",
    ],
  },

  letras_linguistica: {
    id: "letras_linguistica",
    name: "Letras e Linguística",
    category: "humanas",

    description:
      "A Graduação em Letras e Linguística do Instituto Orynth forma estudantes especializados na estrutura, interpretação e construção da linguagem humana, simbólica e, em certos casos, anômala. No Instituto, linguagem também pode influenciar a realidade.",

    summary:
      "Curso voltado para análise semântica, discurso, tradução, persuasão, identificação linguística e leitura de códigos verbais ou simbólicos.",

    recommendedAttributes: ["Inteligência", "Carisma", "Sabedoria"],

    abilityPreview: [
      "Análise Semântica Profunda",
      "Retórica Afiada",
      "Identificação Linguística",
      "Tradução Improvisada",
      "Palavra de Comando",
    ],

    whatYouLearn: [
      "Interpretar falas, textos e símbolos com precisão",
      "Detectar manipulações e ambiguidades",
      "Traduzir linguagens desconhecidas ou incomuns",
      "Usar discurso como ferramenta social e defensiva",
      "Ler como a linguagem molda percepção e intenção",
    ],

    classStructure: [
      "Análise linguística, fonética, sintaxe e semântica",
      "Literatura, narrativa e construção simbólica",
      "Linguagem, persuasão e comportamento humano",
      "Estudos de linguística aplicada ao paranormal",
    ],

    monthlyCost: "R$ 890,00 por mês",
    yearlyCost: "R$ 13.600,00 por ano",
    scholarships: [
      "Bolsas por mérito acadêmico",
      "Bolsas por proficiência linguística",
    ],

    duration: "Graduação plena",
    workload: "Formação com foco em linguagem e interpretação",
    shifts: ["Presencial"],
    modality: "Presencial",

    profile: [
      "Gosta de leitura, escrita e interpretação",
      "Percebe nuances no discurso",
      "Tem curiosidade por símbolos e significados",
      "Quer usar linguagem como ferramenta poderosa",
    ],
  },

  medicina: {
    id: "medicina",
    name: "Medicina",
    category: "saude",

    description:
      "A Graduação em Medicina do Instituto Orynth forma estudantes altamente capacitados para diagnosticar, estabilizar, tratar e proteger aliados em situações clínicas, emergenciais e biologicamente instáveis. No Instituto, isso inclui até ameaças difíceis de classificar.",

    summary:
      "Curso focado em diagnóstico, cura, estabilização, toxicologia, procedimentos de emergência e contenção biológica.",

    recommendedAttributes: ["Sabedoria", "Inteligência", "Destreza"],

    abilityPreview: [
      "Diagnóstico Clínico Imediato",
      "Estabilização de Emergência",
      "Farmacologia Improvisada",
      "Técnica de Sutura Rápida",
      "Contenção Biológica de Campo",
    ],

    whatYouLearn: [
      "Diagnosticar rapidamente condições físicas e psicológicas",
      "Tratar e estabilizar aliados em campo",
      "Lidar com toxinas, infecções e contaminações",
      "Aplicar procedimentos com precisão sob pressão",
      "Manter o grupo funcional em cenários críticos",
    ],

    classStructure: [
      "Anatomia, fisiologia e bioquímica aplicada",
      "Práticas clínicas, semiologia e diagnóstico",
      "Urgência, emergência e enfermagem avançada",
      "Farmacologia, toxicologia, patologia e microbiologia",
    ],

    monthlyCost: "R$ 2.360,00 por mês",
    yearlyCost: "R$ 30.000,00 por ano",
    scholarships: [
      "Bolsas integrais por destaque biomédico",
      "Bolsas por desempenho em pesquisa clínica",
    ],

    duration: "Graduação longa",
    workload: "Formação intensiva com forte carga clínica e laboratorial",
    shifts: ["Integral"],
    modality: "Presencial",

    profile: [
      "Mantém a calma em pressão extrema",
      "É detalhista e observador",
      "Quer proteger vidas a qualquer custo",
      "Lida bem com urgência, dor e responsabilidade",
    ],
  },

  moda_design: {
    id: "moda_design",
    name: "Moda e Design",
    category: "artes",

    description:
      "A Graduação em Moda e Design do Instituto Orynth estuda estética, identidade, vestuário, semiótica visual e influência da aparência sobre comportamento e percepção. No Instituto, roupa e design também podem ser ferramentas de investigação e disfarce.",

    summary:
      "Curso voltado para leitura estética, manipulação visual, disfarce, suporte social, adaptação têxtil e expressão estratégica.",

    recommendedAttributes: ["Carisma", "Inteligência", "Sabedoria"],

    abilityPreview: [
      "Olho Estético Clínico",
      "Desfile Social",
      "Reparação Improvisada",
      "Paleta Emocional",
      "Metamorfose Estética",
    ],

    whatYouLearn: [
      "Interpretar identidade e intenção pela aparência",
      "Criar disfarces e adaptações têxteis rápidas",
      "Usar estética para influenciar emoções e percepção",
      "Ler símbolos, padrões e sinais visuais em roupas",
      "Combinar utilidade, expressão e estratégia visual",
    ],

    classStructure: [
      "Laboratórios de modelagem, costura e criação",
      "Teoria da imagem, semiótica e comportamento",
      "Design funcional aplicado ao campo",
      "Estágios em oficinas, eventos e laboratórios têxteis",
    ],

    monthlyCost: "R$ 1.050,00 por mês",
    yearlyCost: "R$ 16.800,00 por ano",
    scholarships: [
      "Descontos por criação têxtil de destaque",
      "Bolsas por pesquisa simbólica aplicada",
    ],

    duration: "Curso integral",
    workload: "Formação prática diária com uso de laboratório",
    shifts: ["Integral"],
    modality: "Presencial",

    profile: [
      "Tem olhar artístico ou analítico",
      "Gosta de estética, cor e símbolos",
      "Se interessa por moda como linguagem",
      "Quer unir arte, presença e utilidade",
    ],
  },

  pedagogia: {
    id: "pedagogia",
    name: "Pedagogia",
    category: "humanas",

    description:
      "A Graduação em Pedagogia do Instituto Orynth forma estudantes capazes de compreender aprendizagem, mediação social, organização de grupo e desenvolvimento humano. No Instituto, o pedagogo se torna um suporte emocional e tático essencial para manter a coesão da equipe.",

    summary:
      "Curso voltado para acolhimento, condução de grupo, leitura comportamental, redução de tensão e organização humana sob pressão.",

    recommendedAttributes: ["Sabedoria", "Carisma", "Inteligência"],

    abilityPreview: [
      "Voz de Acolhimento",
      "Mediação de Conflitos",
      "Organização de Grupo",
      "Didática Adaptativa",
      "Tutor de Crise",
    ],

    whatYouLearn: [
      "Interpretar comportamento humano em momentos de estresse",
      "Reduzir tensões e impedir pânico coletivo",
      "Organizar grupos e delegar funções",
      "Conduzir diálogos estratégicos com clareza",
      "Apoiar emocionalmente aliados em crise",
    ],

    classStructure: [
      "Fundamentos da aprendizagem e desenvolvimento humano",
      "Psicopedagogia aplicada e acolhimento emocional",
      "Didática, comunicação estratégica e gestão de grupo",
      "Estágios supervisionados em apoio psicopedagógico",
    ],

    monthlyCost: "R$ 760,00 por mês",
    yearlyCost: "R$ 11.300,00 por ano",
    scholarships: [
      "Bolsas de liderança social",
      "Descontos por engajamento humano institucional",
    ],

    duration: "Formação superior",
    workload: "Curso presencial com projetos e atividades de campo",
    shifts: ["Integral"],
    modality: "Presencial",

    profile: [
      "Gosta de ajudar pessoas",
      "Tem boa comunicação e acolhimento",
      "Consegue manter grupos organizados",
      "Quer ser suporte social e emocional do time",
    ],
  },

  psicologia: {
    id: "psicologia",
    name: "Psicologia",
    category: "humanas",

    description:
      "A Graduação em Psicologia do Instituto Orynth forma estudantes capazes de compreender comportamento, analisar emoções e intervir para restaurar equilíbrio psicológico. O psicólogo do Instituto se torna especialista em crises emocionais, padrões de mente e suporte mental em campo.",

    summary:
      "Curso voltado para leitura emocional, suporte mental, intervenção em crise, observação comportamental e estabilização psicológica.",

    recommendedAttributes: ["Sabedoria", "Carisma", "Inteligência"],

    abilityPreview: [
      "Leitura de Microexpressões",
      "Voz Calmante",
      "Análise Rápida de Comportamento",
      "Reconstrução Narrativa",
      "Intervenção de Crise",
    ],

    whatYouLearn: [
      "Ler emoções e sinais de comportamento",
      "Identificar crises antes de explodirem",
      "Usar comunicação terapêutica e empática",
      "Ajudar aliados abalados por trauma ou medo",
      "Reconhecer manipulação emocional e padrões mentais perigosos",
    ],

    classStructure: [
      "Formação teórica em psicologia, neurociência e comportamento",
      "Laboratórios de microexpressões e linguagem corporal",
      "Simulações clínicas e treinamento de intervenção em crise",
      "Projetos de observação, apoio emocional e análise comportamental",
    ],

    monthlyCost: "R$ 1.230,00 por mês",
    yearlyCost: "R$ 14.760,00 por ano",
    scholarships: [
      "Mérito Acadêmico (até 70%)",
      "Bolsa Social (até 60%)",
      "Bolsa Apoio Emocional",
      "Descontos por participação em pesquisa",
    ],

    duration: "5 anos (10 semestres)",
    workload: "4.000 horas",
    shifts: ["Matutino", "Vespertino"],
    modality: "Presencial",

    profile: [
      "Gosta de compreender pessoas",
      "Tem boa leitura emocional",
      "Consegue manter a calma em crises",
      "Quer atuar como suporte mental do grupo",
    ],
  },
}