import type { ActiveAbility } from "../types/activeAbilities"

export type GraduationData = {
  id: string
  name: string
  description: string

  favoredAttributes?: string[]
  role?: string
  strengths?: string[]
  weaknesses?: string[]

  academicBonus?: string

  abilities: ActiveAbility[]
}

export const graduations: Record<string, GraduationData> = {
  administracao: {
    id: "administracao",
    name: "Administração",
    description:
      "O estudante de Administração é especialista em organização, coordenação de recursos e tomada de decisões sob pressão. Seu papel é transformar caos em estratégia.",
    favoredAttributes: ["INT", "SAB", "CAR"],
    role: "Suporte tático, coordenação de grupo e controle de crise.",
    strengths: [
      "Organiza recursos e pessoas com rapidez",
      "Reduz caos e melhora posicionamento do grupo",
      "Fortalece decisões, negociação e leitura estratégica",
    ],
    weaknesses: [
      "Pouco foco em dano direto",
      "Depende de leitura de situação e boa coordenação",
      "Brilha mais com aliados por perto do que sozinho",
    ],
    academicBonus:
      "+1 em testes de Lógica, Pesquisa ou Diplomacia quando aplicados a gerenciamento, negociação ou organização.",

    abilities: [
      {
        id: "leitura_fria_de_situacao",
        name: "Leitura Fria de Situação",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "INT ou SAB",
        range: "pessoal ou aliado próximo",
        duration: "instantânea",
        type: "suporte tático",
        description:
          "Você avalia rapidamente o ambiente, calculando riscos, rotas e prioridades.",
        effects: [
          "Escolha 1 bônus por cena",
          "+2 para você ou um aliado em teste de Percepção, Investigação ou Lógica",
          "OU reduz a CD de um teste complexo do grupo em -1",
        ],
      },
      {
        id: "comando_de_reorganizacao",
        name: "Comando de Reorganização",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "CAR ou INT",
        range: "6 metros",
        duration: "1 rodada",
        type: "suporte de campo",
        description:
          "Você redistribui os esforços do grupo como se estivesse coordenando uma equipe.",
        effects: [
          "Aliados em alcance podem mover 1,5m sem provocar ataques de oportunidade",
          "Todos recebem +1 Defesa até o próximo turno",
          "Se pelo menos 2 aliados ficarem adjacentes após o movimento, recebem +1 ataque contra o mesmo alvo",
        ],
      },
      {
        id: "negociacao_de_crise",
        name: "Negociação de Crise",
        costPEH: 1,
        rarity: "comum",
        pfCost: 4,
        attributeBase: "CAR",
        range: "9 metros",
        duration: "1 rodada",
        type: "social / controle",
        description:
          "Você assume liderança verbal de uma situação emocionalmente instável.",
        effects: [
          "Um alvo humanoide faz teste de Vontade CD 12",
          "Em falha: sofre -2 em ataques e -2 em ações agressivas por 1 rodada",
          "Em sucesso: sofre apenas -1 em ataques",
          "Não funciona em entidades do Outro Lado",
        ],
      },
      {
        id: "racionalizacao_forcada",
        name: "Racionalização Forçada",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "INT ou CAR",
        range: "6 metros",
        duration: "instantânea",
        type: "suporte mental",
        description:
          "Você guia o raciocínio de um aliado em pânico com lógica fria.",
        effects: [
          "Remove uma condição mental leve de um aliado",
          "Exemplos: medo leve, confusão leve, paranoia momentânea, desorientação emocional",
          "O alvo recebe +1 Resistência Mental pela cena",
        ],
      },
      {
        id: "otimizacao_improvisada",
        name: "Otimização Improvisada",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: "INT",
        range: "pessoal",
        duration: "1 rodada",
        type: "suporte operacional",
        description:
          "Você reorganiza recursos com velocidade impressionante.",
        effects: [
          "Trocar item, puxar ferramenta, usar objeto ou equipar algo vira ação gratuita nesta rodada",
          "Você recebe +2 em testes de Ofício / Ferramentas ou Primeiros Socorros até o fim da rodada",
        ],
      },
      {
        id: "plano_contingencial",
        name: "Plano Contingencial",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: "INT ou SAB",
        range: "reação",
        duration: "instantânea",
        type: "estratégia",
        trigger: "Você ou um aliado falha em um teste importante",
        description:
          "Você sempre tem uma segunda opção preparada.",
        effects: [
          "Permite repetir o teste falho",
          "Se o segundo teste falhar também, o usuário sofre -2 Defesa no próximo turno",
        ],
      },
      {
        id: "analise_de_padroes_hostis",
        name: "Análise de Padrões Hostis",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: "INT",
        range: "9 metros",
        duration: "1 rodada",
        type: "suporte tático ofensivo",
        description:
          "Você observa o comportamento do inimigo e identifica sua rotina de combate.",
        effects: [
          "Todo aliado que atacar o mesmo alvo ganha +2 no ataque",
          "Se pelo menos 2 aliados acertarem o alvo, ele sofre -1 Defesa até o fim da rodada",
        ],
      },
    ],
  },

    arquitetura: {
    id: "arquitetura",
    name: "Arquitetura",
    description:
      "A Graduação em Arquitetura do Instituto Orynth prepara o estudante para compreender, projetar e transformar espaços físicos, simbólicos, psicológicos e até sobrenaturais. O arquiteto se torna um especialista em leitura de ambientes, análise de riscos e criação de soluções espaciais sob pressão.",
    favoredAttributes: ["INT", "SAB", "DES"],
    role: "Leitura de ambientes, controle espacial e suporte tático estrutural.",
    strengths: [
      "Analisa ambientes com rapidez",
      "Detecta riscos, pontos fracos e rotas ocultas",
      "Cria soluções improvisadas usando o espaço ao redor",
    ],
    weaknesses: [
      "Depende bastante do ambiente para brilhar",
      "Tem menos foco em confronto direto",
      "Seu valor cai em cenas sem espaço para leitura estrutural",
    ],
    academicBonus:
      "+1 em testes de Percepção, Investigação ou Lógica quando aplicados à análise de estruturas, rotas, riscos ambientais ou organização espacial.",

    abilities: [
      {
        id: "olho_estrutural",
        name: "Olho Estrutural",
        costPEH: 1,
        rarity: "comum",
        attributeBase: "INT",
        type: "passiva",
        description:
          "Você identifica fragilidades, reforços e pontos-chave de qualquer construção quase instantaneamente.",
        effects: [
          "+2 em Percepção e Investigação para analisar ambientes internos e externos",
          "Descobre automaticamente se um local está em risco de desabamento",
          "Descobre reforços recentes, portas ocultas, dutos e paredes ocas",
        ],
      },
      {
        id: "mapa_mental_profissional",
        name: "Mapa Mental Profissional",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "INT",
        range: "até 20 metros",
        duration: "próxima cena",
        type: "ação",
        description:
          "Após observar o ambiente por alguns instantes, você cria um mapa mental preciso da área.",
        effects: [
          "Aliados recebem +1 em deslocamento dentro do ambiente analisado",
          "O grupo ganha vantagem em testes para não se perder",
          "O grupo ganha vantagem para evitar armadilhas estruturais ou planejar rotas de fuga",
        ],
        risk:
          "Em falha crítica, você interpreta o espaço errado e os aliados sofrem -1 em deslocamento por 1 rodada.",
      },
      {
        id: "improviso_estrutural",
        name: "Improviso Estrutural",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "DES + INT",
        duration: "1 cena",
        type: "ação",
        uses: "1 vez por cena",
        description:
          "Você usa materiais do ambiente para erguer rapidamente uma solução física improvisada.",
        effects: [
          "Pode criar uma barricada que concede +2 Defesa para quem estiver atrás",
          "Pode criar uma rampa improvisada de 1 uso",
          "Pode reforçar piso ou porta, aumentando a CD de quebra em +3",
        ],
        risk:
          "Em falha crítica, o improviso colapsa e 1 aliado sofre -1 Defesa por 1 rodada.",
      },
      {
        id: "logica_espacial",
        name: "Lógica Espacial",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: "INT",
        duration: "instantânea",
        type: "ação",
        description:
          "Você prevê padrões geométricos, rotas, distâncias e possibilidades de movimento com precisão.",
        effects: [
          "Concede +2 em um teste de fuga, perseguição, movimentação tática ou coordenação espacial",
          "Permite antecipar se um inimigo pode alcançar determinada área no próximo turno",
        ],
      },
      {
        id: "analise_acustica",
        name: "Análise Acústica",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: "SAB",
        duration: "1 rodada",
        type: "ação",
        description:
          "Você usa eco, vibração e ruído do ambiente para localizar movimento e rotas mais seguras.",
        effects: [
          "Detecta pessoas, entidades ou movimentos atrás de portas, paredes e divisórias falsas",
          "Você e aliados recebem +1 em testes de Furtividade ao usar rotas menos ecoantes",
        ],
        risk:
          "Em falha crítica, o ruído é mal interpretado e o grupo sofre -1 em Percepção por 1 turno.",
      },
      {
        id: "selo_geometrico",
        name: "Selo Geométrico",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: "INT + VON",
        duration: "até o fim da cena",
        type: "ação / ritual leve",
        description:
          "Você usa padrões geométricos e alinhamento físico para criar uma área de contenção simbólica e espiritual.",
        effects: [
          "Criaturas sobrenaturais sofrem -2 para atravessar a área selada",
          "Humanos sofrem -1 para atravessar por desconforto visual e espacial",
          "Aliados dentro da área recebem +1 Resistência Mental",
        ],
        risk:
          "Em falha crítica, o selo amplifica a interferência e aliados sofrem -1 Resistência Mental por 1 turno.",
      },
      {
        id: "diagnostico_de_espaco_hostil",
        name: "Diagnóstico de Espaço Hostil",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: "INT + SAB",
        duration: "próxima cena",
        type: "ação",
        description:
          "Você avalia rapidamente o ambiente em busca de riscos imediatos e pontos perigosos.",
        effects: [
          "Identifica risco de desabamento, fragilidade de piso, ameaça elétrica, química ou estrutural",
          "Aliados recebem +2 em Defesa contra perigos ambientais na próxima cena",
        ],
        risk:
          "Em falha crítica, você subestima um risco e o primeiro teste ambiental do grupo recebe -1.",
      },
    ],
  },

    artes_visuais: {
    id: "artes_visuais",
    name: "Artes Visuais",
    description:
      "A Graduação em Artes Visuais do Instituto Orynth forma profissionais capazes de compreender, interpretar e transformar a realidade por meio da imagem. No Instituto, a arte se torna ferramenta de investigação, canal emocional e ponte simbólica com fenômenos inexplicáveis.",
    favoredAttributes: ["INT", "CAR", "SAB"],
    role: "Investigação simbólica, suporte emocional e manipulação visual do ambiente.",
    strengths: [
      "Interpreta símbolos, padrões e cenas visuais complexas",
      "Altera clima emocional e percepção do grupo",
      "Cria distrações, ilusões simples e proteção simbólica",
    ],
    weaknesses: [
      "Menor foco em confronto físico direto",
      "Depende bastante de leitura de cena e sensibilidade interpretativa",
      "Algumas habilidades são mais situacionais do que ofensivas",
    ],
    academicBonus:
      "+1 em testes de Investigação, Percepção ou Diplomacia quando aplicados à análise visual, leitura simbólica, composição estética ou interpretação de atmosfera.",

    abilities: [
      {
        id: "olho_simbolico",
        name: "Olho Simbólico",
        costPEH: 1,
        rarity: "comum",
        attributeBase: "SAB",
        type: "passiva",
        description:
          "Você enxerga padrões, símbolos e mensagens ocultas com mais clareza do que a maioria.",
        effects: [
          "+2 em testes de Investigação ou Percepção voltados a imagens, símbolos, padrões ou cenas visuais",
          "Sempre que falhar por 1 ponto em uma análise visual, pode rolar novamente uma vez",
        ],
      },
      {
        id: "estetica_da_perturbacao",
        name: "Estética da Perturbação",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "CAR ou INT",
        range: "6 metros",
        duration: "1 rodada",
        type: "ação",
        description:
          "Você cria uma intervenção visual ou gesto artístico que abala emocionalmente quem observa.",
        effects: [
          "Escolha um efeito ao usar",
          "Intimidar: alvo sofre -2 em Defesa ou Moral por 1 rodada",
          "Desestabilizar: alvo perde a próxima reação",
          "Inspirar: um aliado recebe +2 em ataque OU +2 em Resistência contra medo por 1 rodada",
        ],
      },
      {
        id: "composicao_tatica",
        name: "Composição Tática",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "INT",
        range: "até 2 aliados",
        duration: "fim da rodada",
        type: "bônus / suporte",
        description:
          "Você reorganiza mentalmente o quadro da cena e indica o melhor posicionamento para seus aliados.",
        effects: [
          "Até 2 aliados podem se mover 2 metros imediatamente sem provocar ataques",
          "Se ambos aceitarem a orientação, recebem +1 Defesa até o fim da rodada",
        ],
      },
      {
        id: "cores_que_falam",
        name: "Cores que Falam",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "CAR",
        range: "9 metros",
        duration: "até o próximo descanso curto",
        type: "ação",
        description:
          "Você usa cor, luz e forma para alterar o clima emocional e cognitivo do grupo.",
        effects: [
          "Escolha 1 efeito ao ativar",
          "Cor Viva: aliados recebem +1 em testes de ataque",
          "Cor Fria: aliados recebem +2 em testes de Resistência contra medo e pânico",
          "Cor Sépia: aliados recebem +2 em testes de Investigação na cena",
        ],
      },
      {
        id: "icone_guia",
        name: "Ícone-Guia",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 4,
        attributeBase: "INT",
        range: "6 metros",
        duration: "1 cena",
        type: "ação / suporte ritualístico",
        description:
          "Você cria um símbolo, desenho ou marca que orienta, inspira ou protege o grupo.",
        effects: [
          "Escolha 1 efeito ao usar",
          "Marca de Proteção: +1 Defesa para todos os aliados próximos",
          "Sinalizador: cada aliado encontra automaticamente o caminho certo em ambientes labirínticos ou com confusão espacial",
          "Chamado da Inspiração: 1 aliado recebe vantagem em um teste criativo ou intelectual",
        ],
      },
      {
        id: "ilusao_rudimentar",
        name: "Ilusão Rudimentar",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: "CAR",
        range: "curto alcance visual",
        duration: "1 rodada",
        type: "ação",
        description:
          "Você cria uma pequena ilusão visual não-tátil para distrair, ocultar ou confundir.",
        effects: [
          "Pode criar sombra, silhueta, movimento falso ou pista visual enganosa",
          "Inimigos fazem teste de Percepção contra CD 10 + modificador de Carisma + metade do nível",
          "Em falha: ficam confusos ou distraídos por 1 rodada, sofrendo -2 em ataque",
          "Em sucesso crítico: ignoram completamente a ilusão",
        ],
      },
      {
        id: "sinestesia_criativa",
        name: "Sinestesia Criativa",
        costPEH: 1,
        rarity: "rara",
        attributeBase: "SAB",
        type: "passiva / explorativa",
        description:
          "Sua sensibilidade artística conecta visão, textura, cheiro, sensação e atmosfera em uma leitura única da realidade.",
        effects: [
          "Após observar uma cena por 1 rodada completa, pode fazer uma pergunta extra ao narrador sobre cheiro, textura, sensação, clima emocional ou atmosfera",
          "Em combate, 1 vez por cena, pode ignorar penalidades de iluminação como escuridão parcial, névoa leve ou luz estroboscópica",
        ],
      },
    ],
  },

    biologia_ciencias_naturais: {
    id: "biologia_ciencias_naturais",
    name: "Biologia e Ciências Naturais",
    description:
      "A Graduação em Biologia e Ciências Naturais do Instituto Orynth forma estudantes capazes de compreender sistemas vivos, ecossistemas, anatomia, mutações e organismos desconhecidos, incluindo manifestações biológicas naturais e paranormais.",
    favoredAttributes: ["INT", "SAB", "VON"],
    role: "Investigação biológica, leitura ambiental e suporte científico em campo.",
    strengths: [
      "Analisa organismos, rastros e contaminações com precisão",
      "Detecta riscos naturais e anomalias biológicas rapidamente",
      "Oferece suporte utilitário com improvisos orgânicos e leitura ecológica",
    ],
    weaknesses: [
      "Tem pouco foco em dano direto",
      "Brilha mais em investigação, exploração e suporte do que em confronto frontal",
      "Depende de observação e tempo de análise para render melhor",
    ],
    academicBonus:
      "+1 em testes de Investigação, Pesquisa ou Percepção quando aplicados a anatomia, ecossistemas, mutações, rastros biológicos ou análise de organismos.",

    abilities: [
      {
        id: "analise_bioambiental",
        name: "Análise Bioambiental",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "INT + SAB",
        duration: "1 cena",
        type: "investigativa / passiva de cena",
        description:
          "Ao analisar rapidamente um ambiente natural, você descobre informações úteis sobre alterações ecológicas e sinais biológicos anormais.",
        effects: [
          "Descobre 2 informações úteis sobre vegetação, solo, água, poeira, cheiro ou sons",
          "Exemplos: tempo desde a passagem de algo, presença de toxinas naturais, esporos, fungos, insetos ou resíduos anormais",
          "Recebe +2 em testes de Investigação ligados à natureza durante a cena",
        ],
      },
      {
        id: "identificacao_de_especies_e_anomalias",
        name: "Identificação de Espécies & Anomalias",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "INT",
        duration: "instantânea",
        type: "ação curta",
        description:
          "Você identifica rapidamente espécies naturais, organismos alterados e anomalias biológicas ou sobrenaturais.",
        effects: [
          "Identifica espécies naturais, animais, insetos, plantas e versões corrompidas ou sobrenaturais",
          "Garante vantagem em testes de Resistência contra toxinas naturais, venenos biológicos, odores alucinógenos, vapores e esporos",
        ],
      },
      {
        id: "derivacao_ecologica",
        name: "Derivação Ecológica",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "INT",
        duration: "1 cena",
        type: "investigativa lógica / ação",
        description:
          "Ao observar vestígios deixados por uma criatura, você deduz características relevantes do alvo responsável.",
        effects: [
          "Deduz tamanho aproximado, velocidade, padrão de movimento, tipo de alimentação e direção seguida",
          "Aliados recebem +2 em testes de rastreamento contra esse alvo",
          "Aliados recebem +1 em Furtividade contra esse alvo",
        ],
      },
      {
        id: "estudo_de_patogenos_nao_convencionais",
        name: "Estudo de Patógenos Não-Convecionais",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "INT + VON",
        type: "investigativa / resistência",
        description:
          "Você reconhece e interpreta agentes biológicos estranhos, incluindo mutações e contaminações do Outro Lado.",
        effects: [
          "+2 em Resistência contra condições causadas por agentes biológicos",
          "Pode detectar a origem de uma doença sobrenatural com teste de INT CD 13",
          "Reconhece contaminação sobrenatural, mutações, parasitas anômalos e radiação espiritual",
        ],
      },
      {
        id: "improviso_naturalista",
        name: "Improviso Naturalista",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "INT ou SAB",
        duration: "1 cena",
        type: "suporte utilitário",
        description:
          "Usando materiais do ambiente, você improvisa uma solução biológica ou natural útil para o grupo.",
        effects: [
          "Escolha 1 efeito ao usar",
          "Antisséptico natural: 1 aliado remove condição de Contaminação leve",
          "Repelente: aliados recebem +1 Defesa contra criaturas animais ou insetos",
          "Extrato estimulante: 1 aliado recebe +1 em testes físicos por 1 turno",
          "Fumigação leve: cria desvantagem narrativa para inimigos com olfato ou sensores biológicos",
        ],
      },
      {
        id: "hiperobservacao_de_habitat",
        name: "Hiperobservação de Habitat",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: "INT + SAB",
        duration: "1 cena",
        type: "ação / investigativa avançada",
        description:
          "Você analisa um habitat em profundidade e revela detalhes ocultos sobre sua estrutura viva e seus perigos.",
        effects: [
          "Revela até 3 fatos ocultos sobre a área",
          "Exemplos: esconderijos, trajetórias, predadores naturais, anomalias ambientais, hotspots energéticos, portas do Outro Lado abertas por processos ecológicos",
          "Aliados recebem +2 em Percepção na área analisada",
          "Aliados ganham vantagem em testes de emboscada contra criaturas nativas do ambiente",
        ],
      },
      {
        id: "resposta_biologica_de_emergencia",
        name: "Resposta Biológica de Emergência",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: "INT + SAB",
        duration: "1 turno ou 1 rodada",
        type: "ação / suporte corporal",
        description:
          "Você ativa seu conhecimento fisiológico para proteger ou fortalecer um aliado em situação crítica.",
        effects: [
          "Escolha 1 modo ao usar",
          "Estímulo Adrenal: aliado recebe +2 em Reflexo/Esquiva por 1 turno e remove Lentidão",
          "Estabilização Muscular: reduz 1d4 do dano recém-recebido e remove Tontura ou Desorientação Física",
          "Respiração Guiada: aliado recebe +2 em Resistência Mental por 1 rodada e remove Medo Leve",
        ],
      },
    ],
  },

    cinema_producao_audiovisual: {
    id: "cinema_producao_audiovisual",
    name: "Cinema e Produção Audiovisual",
    description:
      "A Graduação em Cinema e Produção Audiovisual do Instituto Orynth prepara artistas e técnicos capazes de transformar ideias, emoções e medos em narrativas que atravessam o real. Aqui, o audiovisual funciona como arte, investigação, registro e influência.",
    favoredAttributes: ["INT", "CAR", "SAB"],
    role: "Suporte narrativo, investigação visual e manipulação emocional da cena.",
    strengths: [
      "Reorganiza aliados e controla o foco da cena",
      "Detecta ilusões, inconsistências e pistas visuais",
      "Usa luz, sombra e narrativa para proteger, inspirar e desestabilizar",
    ],
    weaknesses: [
      "Depende bastante de contexto visual e leitura de ambiente",
      "Tem menos força em confronto físico direto",
      "Algumas habilidades brilham mais em grupo do que sozinho",
    ],
    academicBonus:
      "+1 em testes de Investigação, Percepção ou Diplomacia quando aplicados a registro visual, linguagem narrativa, análise de cena, gravações ou manipulação audiovisual.",

    abilities: [
      {
        id: "direcao_de_cena",
        name: "Direção de Cena",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "INT + CAR",
        range: "9 metros",
        duration: "fim do turno",
        type: "ação / suporte tático",
        description:
          "Você reorganiza a atenção e o foco dos aliados como se estivesse dirigindo um set em tempo real.",
        effects: [
          "Aliados em alcance podem reposicionar até 2 metros imediatamente",
          "Todos recebem +1 em ataque OU +1 em Defesa até o final do turno",
          "Se houver iluminação controlada, o bônus aumenta para +2",
        ],
        risk:
          "Em falha crítica, a instrução confusa gera -1 em iniciativa do grupo por 1 turno.",
      },
      {
        id: "efeito_dramatico",
        name: "Efeito Dramático",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "CAR",
        type: "reação / controle emocional",
        trigger: "Um aliado falha em um teste social ou de moral",
        description:
          "Você altera o clima da cena com uma intervenção dramática súbita e precisa.",
        effects: [
          "O aliado refaz o teste com vantagem ou +3",
          "Se passar, recebe +1 adicional em Moral",
          "Se for sucesso crítico, um inimigo fica desconcertado e sofre -1 em ataque",
        ],
      },
      {
        id: "olho_de_diretor",
        name: "Olho de Diretor",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "SAB",
        type: "ação / investigativa visual",
        description:
          "Sua leitura de mise-en-scène detecta erros na encenação do real.",
        effects: [
          "+3 em testes para identificar inconsistências, ilusões, truques visuais ou pistas baseadas em movimento",
          "Em sucesso crítico, revela a verdadeira intenção do alvo ou do ambiente",
        ],
      },
      {
        id: "montagem_rapida",
        name: "Montagem Rápida",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "INT",
        duration: "1 turno",
        type: "ação / suporte estratégico",
        description:
          "Você organiza lembranças, registros e fragmentos de informação numa lógica clara e útil.",
        effects: [
          "O grupo recebe +2 em Investigação por 1 turno",
          "Se houver fotos, vídeos ou áudio, o bônus sobe para +3",
          "O grupo pode refazer 1 teste coletivo de Percepção falho recentemente",
        ],
        risk:
          "Em falha crítica, a montagem sai confusa e aliados sofrem -1 em Investigação por 1 turno.",
      },
      {
        id: "manipulacao_de_luz_e_sombra",
        name: "Manipulação de Luz e Sombra",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "SAB + INT",
        duration: "1 turno",
        type: "ação / controle ambiental",
        description:
          "Usando luz, tela, reflexos ou sombra, você altera a leitura visual do ambiente.",
        effects: [
          "Escolha 1 efeito ao usar",
          "Ofuscar inimigos: Resistência CD 13; em falha sofrem -2 em ataque e perdem reação, em sucesso sofrem -1 em ataque",
          "Criar sombra protetora: 1 aliado recebe +2 Defesa por 1 turno; em baixa luz ou escuridão, recebe +3",
        ],
      },
      {
        id: "corte_de_tensao",
        name: "Corte de Tensão",
        costPEH: 1,
        rarity: "rara",
        pfCost: 2,
        attributeBase: "CAR",
        type: "reação / suporte emocional",
        trigger: "Um aliado sofre uma condição mental leve",
        description:
          "Você quebra o ritmo do medo e reorienta emocionalmente um aliado.",
        effects: [
          "Remove imediatamente medo leve, confusão leve ou ansiedade",
          "O aliado recebe +1 Resistência Mental até o próximo turno",
          "Se houver música ou som ambiente, o bônus sobe para +2",
        ],
        risk:
          "Em falha crítica, o corte vem errado e aumenta o medo do aliado por 1 turno.",
      },
      {
        id: "cena_final",
        name: "Cena Final",
        costPEH: 1,
        rarity: "rara",
        pfCost: 5,
        attributeBase: "CAR + INT",
        range: "9 metros",
        duration: "2 turnos",
        type: "ação / ofensiva narrativa",
        description:
          "Você transforma a situação em um clímax cinematográfico que inspira, revela ou aterroriza.",
        effects: [
          "Escolha 1 estilo ao usar",
          "Cena Inspiradora: aliados recebem +2 Moral, +1 ataque, +1 Defesa; o primeiro ataque aliado no turno causa +2 de dano adicional",
          "Cena de Revelação: revela 1 verdade oculta da cena; aliados ganham vantagem em Investigação e Percepção",
          "Cena de Terror Controlado: inimigos em 9 metros fazem teste de Vontade CD 15; em falha sofrem -2 em ataque, -2 em Moral e perdem reação; em sucesso sofrem -1 em Moral",
        ],
        risk:
          "Após o uso, você sofre -1 em Carisma até descansar, por exaustão narrativa.",
      },
    ],
  },

    direito: {
    id: "direito",
    name: "Direito",
    description:
      "A Graduação em Direito no Instituto Orynth forma estudantes capazes de interpretar normas, construir argumentos sólidos, mediar conflitos e agir com precisão lógica sob pressão. No Instituto, isso os torna especialistas em retórica, negociação e leitura de contradições.",
    favoredAttributes: ["INT", "CAR", "SAB"],
    role: "Controle social, investigação lógica e proteção tática por argumentação.",
    strengths: [
      "Desmonta argumentos e intenções hostis",
      "Protege aliados com leitura lógica e autoridade simbólica",
      "Excelente em mediação, leitura social e reconstrução de eventos",
    ],
    weaknesses: [
      "Menor foco em dano direto",
      "Algumas habilidades perdem valor contra criaturas irracionais",
      "Depende de leitura social, linguagem e contexto para render melhor",
    ],
    academicBonus:
      "+1 em testes de Lógica, Diplomacia, Investigação ou leitura social quando aplicados a negociação, análise de contradições, interpretação de documentos ou reconstrução de eventos.",

    abilities: [
      {
        id: "argumento_demolidor",
        name: "Argumento Demolidor",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "INT + CAR",
        range: "6 metros",
        duration: "até o próximo turno",
        type: "ação / suporte ofensivo",
        description:
          "Você destrincha a lógica ou moral do inimigo com precisão jurídica, apontando contradições, brechas e dilemas éticos.",
        effects: [
          "Um inimigo faz teste de Vontade com CD 12 + INT",
          "Em falha: sofre -2 em ataque até o próximo turno e -1 em Defesa",
          "Em sucesso: sofre apenas -1 em ataque",
        ],
        risk:
          "Se o teste falhar por 5 ou mais, o inimigo fica furioso contra você e te prioriza por 1 rodada.",
      },
      {
        id: "objecao",
        name: "Objeção!",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "CAR",
        range: "9 metros",
        type: "reação / controle",
        trigger: "Um inimigo está prestes a realizar uma ação hostil",
        description:
          "Você interrompe verbalmente a ação inimiga, impondo uma revisão brusca da intenção dele.",
        effects: [
          "O inimigo faz teste de Resistência Mental CD 13",
          "Em falha: a ação é atrasada e ele só pode agir na última iniciativa da rodada",
          "Em sucesso: a ação ocorre normalmente, mas com -1 em ataque",
        ],
        risk:
          "Se o alvo for imune a influência mental, o efeito não funciona.",
      },
      {
        id: "defesa_tecnica",
        name: "Defesa Técnica",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "INT",
        range: "6 metros",
        duration: "2 turnos",
        type: "ação / suporte defensivo",
        description:
          "Você orienta um aliado com explicações rápidas sobre falhas no ataque inimigo ou brechas no ambiente.",
        effects: [
          "Um aliado recebe +2 em Defesa e +1 em Resistência",
          "Se esse aliado for atacado duas vezes durante a duração, recebe +1 em ataque no próximo turno",
        ],
      },
      {
        id: "leitura_de_testemunho",
        name: "Leitura de Testemunho",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: "SAB + INT",
        range: "1 alvo em até 6 metros",
        duration: "instantânea",
        type: "ação / investigação e social",
        description:
          "Você analisa discurso, postura, tique nervoso e intenção por trás das palavras do alvo.",
        effects: [
          "Descobre uma informação sobre o alvo",
          "Pode identificar se está mentindo, omitindo, sob efeito mental, com medo ou com intenção agressiva",
          "Se a pessoa estiver mentindo, você recebe +1 no próximo teste social contra ela",
        ],
        risk:
          "Se falhar por 5 ou mais, você interpreta errado e recebe uma informação falsa.",
      },
      {
        id: "clausula_de_protecao",
        name: "Cláusula de Proteção",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 4,
        attributeBase: "INT",
        range: "3 metros",
        duration: "1 rodada",
        type: "ação / defesa de grupo",
        description:
          "Você declara uma zona de proteção simbólica, impondo autoridade, coerência e segurança ao grupo.",
        effects: [
          "Todos os aliados na área recebem +1 em Resistência",
          "Todos recebem redução de dano 1",
          "Todos ficam imunes a efeitos de medo leve durante a duração",
        ],
      },
      {
        id: "negociacao_forcada",
        name: "Negociação Forçada",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: "CAR",
        range: "6 metros",
        duration: "1 turno",
        type: "ação / controle social",
        description:
          "Você força o inimigo a reavaliar prioridades usando lógica, pressão verbal e autoridade.",
        effects: [
          "O alvo faz teste de Resistência com CD 12 + CAR",
          "Em falha: não pode atacar você nem seus aliados por 1 turno e deve fazer uma ação não-ofensiva",
          "Em sucesso: sofre apenas -1 em ataque",
        ],
        risk:
          "Não funciona em criaturas irracionais ou em fúria absoluta.",
      },
      {
        id: "prova_conclusiva",
        name: "Prova Conclusiva",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: "INT",
        range: "9 metros",
        duration: "instantânea",
        type: "ação / investigativa e tática",
        description:
          "Você conecta falas, provas e pistas para reconstruir a verdade ou encontrar a brecha certa.",
        effects: [
          "Escolha 1 efeito ao usar",
          "Descobrir a fraqueza de um inimigo, mecânica ou narrativa",
          "Reconstruir o último evento relevante de forma confiável",
          "Ganhar vantagem no próximo teste investigativo",
          "Permitir que um aliado role novamente um teste investigativo",
          "Se usada após Leitura de Testemunho, custa -1 PF",
        ],
      },
    ],
  },

    educacao_fisica: {
    id: "educacao_fisica",
    name: "Educação Física",
    description:
      "A Graduação em Educação Física forma profissionais capazes de compreender, orientar e aprimorar o corpo humano em seus aspectos biomecânicos, fisiológicos e comportamentais. No Instituto Orynth, isso se traduz em resistência, liderança em campo, prevenção de riscos e suporte físico sob pressão.",
    favoredAttributes: ["FOR", "DES", "SAB"],
    role: "Mobilidade, proteção de aliados, resistência física e suporte biomecânico.",
    strengths: [
      "Aumenta resistência e eficiência corporal",
      "Protege aliados e melhora desempenho físico do grupo",
      "Ótima mobilidade, leitura corporal e reação sob pressão",
    ],
    weaknesses: [
      "Menor foco em investigação abstrata ou social",
      "Brilha mais em situações físicas e táticas do que em análise complexa",
      "Depende de proximidade e movimento para render melhor",
    ],
    academicBonus:
      "+1 em testes de Atletismo, Reflexo, Resistência ou leitura corporal quando aplicados a esforço físico, biomecânica, liderança de campo, postura ou prevenção de danos.",

    abilities: [
      {
        id: "corpo_de_ferro",
        name: "Corpo de Ferro",
        costPEH: 1,
        rarity: "comum",
        attributeBase: "FOR",
        type: "passiva",
        description:
          "Seu treinamento físico eleva sua resistência a impactos, esforço e desgaste prolongado.",
        effects: [
          "+2 PV máximos permanentemente",
          "+1 em testes de Resistência contra fadiga, dor corporal, frio intenso e esforço prolongado",
          "1 vez por descanso longo, pode ignorar uma penalidade por cansaço",
        ],
      },
      {
        id: "aceleracao_tatica",
        name: "Aceleração Tática",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "DES",
        duration: "1 turno",
        type: "ação de movimento",
        description:
          "Você entra em uma explosão de energia precisa, cobrindo distâncias e evitando ameaças com técnica corporal.",
        effects: [
          "Dobra seu deslocamento por 1 turno",
          "Recebe +2 em Reflexo ou Esquiva até o final do turno",
          "Pode atravessar terreno difícil sem penalidade",
        ],
      },
      {
        id: "suporte_biomecanico",
        name: "Suporte Biomecânico",
        costPEH: 1,
        rarity: "comum",
        pfCost: 1,
        attributeBase: "SAB",
        duration: "até o próximo ataque recebido",
        type: "ação",
        description:
          "Você corrige postura, respiração e tensão corporal para estabilizar rapidamente um aliado ou a si mesmo.",
        effects: [
          "Remove 1 condição leve física: dor, tontura, câimbra, penalidade por queda ou ofegante",
          "Se usada logo após dano físico, o alvo recebe +1 Defesa até o próximo ataque recebido",
        ],
      },
      {
        id: "estilo_de_combate_adaptativo",
        name: "Estilo de Combate Adaptativo",
        costPEH: 1,
        rarity: "incomum",
        attributeBase: "FOR ou DES",
        type: "passiva",
        description:
          "Você adapta seu corpo para combate improvisado, usando técnica, postura e movimento eficiente.",
        effects: [
          "+1 em ataques corpo a corpo desarmados",
          "Seu dano desarmado passa a 1d6; se já era 1d6, passa a 1d6+1",
          "Pode usar DES ou FOR para ataques desarmados",
        ],
      },
      {
        id: "olho_do_instrutor",
        name: "Olho do Instrutor",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: "SAB",
        type: "reação",
        trigger:
          "Um aliado falha por 1 a 3 pontos em um teste físico ou de movimento",
        description:
          "Você percebe o erro corporal exato e corrige o aliado no instante crítico.",
        effects: [
          "O aliado refaz o teste com +2",
          "Funciona em Atletismo, Reflexo, Esquiva, Furtividade baseada em movimento ou outras ações físicas similares",
        ],
      },
      {
        id: "controle_do_ritmo_respiratorio",
        name: "Controle do Ritmo Respiratório",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: "SAB",
        duration: "2 turnos",
        type: "ação",
        description:
          "Você entra em um estado de respiração controlada que estabiliza corpo e mente sob pressão.",
        effects: [
          "Remove pânico leve, estresse baixo ou desorientação",
          "Concede vantagem ou +2 no próximo teste de Resistência ou Vontade",
          "Os benefícios duram 2 turnos",
        ],
      },
      {
        id: "guardiao_do_campo",
        name: "Guardião do Campo",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: "FOR + DES",
        range: "3 metros",
        duration: "até o fim do seu próximo turno",
        type: "ação",
        description:
          "Você assume a posição ideal para se interpor entre o perigo e um aliado, usando técnica corporal e estabilidade.",
        effects: [
          "Escolha 1 aliado a até 3 metros",
          "Até o fim do seu próximo turno, você pode interpor seu corpo entre ele e um ataque físico",
          "Ao fazer isso, recebe o ataque com +2 Defesa",
          "Se proteger o aliado com sucesso, ele recebe +1 no próximo teste físico",
        ],
      },
    ],
  },
    engenharia_computacao: {
    id: "engenharia_computacao",
    name: "Engenharia da Computação",
    description:
      "A Graduação em Engenharia da Computação forma especialistas capazes de compreender e manipular sistemas computacionais em níveis lógico, físico e informacional. No Instituto Orynth, esses conhecimentos são aplicados também a tecnologias instáveis e fenômenos informacionais ligados ao Outro Lado.",
    favoredAttributes: ["INT", "SAB"],
    role: "Investigação tecnológica, análise lógica e suporte contra sistemas ou influências informacionais.",
    strengths: [
      "Especialista em tecnologia, redes e dispositivos",
      "Excelente em detectar padrões e distorções em sistemas",
      "Protege o grupo contra manipulação informacional ou tecnológica",
    ],
    weaknesses: [
      "Depende de análise e preparação para render melhor",
      "Menor eficiência em combate direto",
      "Algumas habilidades exigem contexto tecnológico ou analítico",
    ],
    academicBonus:
      "+1 em testes de Investigação tecnológica, Lógica, Programação ou análise de padrões digitais e informacionais.",

    abilities: [
      {
        id: "arquitetura_de_sistemas_mental",
        name: "Arquitetura de Sistemas Mental",
        costPEH: 1,
        rarity: "comum",
        attributeBase: "INT",
        type: "passiva",
        description:
          "Sua mente funciona como um sistema organizado e difícil de corromper.",
        effects: [
          "+1 em Resistência Mental contra efeitos caóticos ou confusos",
          "Pode refazer um teste de lógica se falhar por apenas 1 ponto",
        ],
      },
      {
        id: "modelagem_computacional",
        name: "Modelagem Computacional",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "INT",
        duration: "1 cena",
        type: "ação investigativa",
        description:
          "Você cria mentalmente um modelo lógico para prever o comportamento de um alvo ou fenômeno.",
        effects: [
          "Escolha um alvo ou fenômeno",
          "Você e aliados recebem +2 em testes de previsão, estratégia ou antecipação envolvendo esse alvo",
          "Contra inimigos previsíveis, aliados recebem +1 Defesa contra padrões repetitivos de ataque",
        ],
      },
      {
        id: "engenharia_reversa",
        name: "Engenharia Reversa",
        costPEH: 1,
        rarity: "comum",
        pfCost: 4,
        attributeBase: "INT + SAB",
        type: "ação investigativa",
        description:
          "Ao analisar um dispositivo ou objeto anômalo, você entende seu funcionamento oculto.",
        effects: [
          "Descobre que tipo de entidade ou energia influenciou o objeto",
          "Identifica funções ocultas ou comportamentos anômalos",
          "Recebe +2 em testes futuros relacionados a esse objeto",
        ],
      },
      {
        id: "otimizacao_emergencial",
        name: "Otimização Emergencial",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: "INT",
        type: "reação",
        trigger: "Um aliado falha em um teste envolvendo equipamento ou tecnologia",
        description:
          "Você orienta rapidamente o aliado para corrigir o erro técnico.",
        effects: [
          "O aliado repete o teste com +2",
          "Se envolver tecnologia, o bônus aumenta para +3",
        ],
      },
      {
        id: "rede_sincronizada",
        name: "Rede Sincronizada",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "INT",
        duration: "2 turnos",
        range: "9 metros",
        type: "ação suporte",
        description:
          "Você coordena o grupo como se todos estivessem conectados por um protocolo eficiente.",
        effects: [
          "Aliados no alcance recebem +1 em ataque e +1 em esquiva",
          "Aliados podem gastar reação para ajudar outro aliado com ações rápidas",
        ],
      },
      {
        id: "protocolo_anticolapso",
        name: "Protocolo Anti-Colapso",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: "INT",
        duration: "1 turno",
        type: "ação suporte",
        description:
          "Você organiza mentalmente o grupo para evitar pânico ou colapso psicológico.",
        effects: [
          "Remove condições leves de medo, pânico ou desorientação",
          "Aliados recebem +2 em Resistência Mental até o próximo turno",
        ],
      },
      {
        id: "algoritmo_de_contracontrole",
        name: "Algoritmo de Contra-Controle",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: "INT + VON",
        range: "9 metros",
        type: "ação sobrenatural",
        description:
          "Você identifica a lógica por trás de uma influência mental e cria um contra-algoritmo para neutralizá-la.",
        effects: [
          "Um aliado afetado por manipulação mental pode repetir o teste de Resistência Mental com +2",
          "Se passar, o inimigo sofre -2 em influência mental por 1 turno",
        ],
      },
    ],
  },
    jornalismo: {
    id: "jornalismo",
    name: "Jornalismo",
    description:
      "A Graduação em Jornalismo do Instituto Orynth forma profissionais capazes de apurar, registrar e narrar a verdade mesmo quando ela tenta se esconder. O curso enfatiza investigação, análise crítica, comunicação precisa e documentação de eventos em ambientes de alta pressão.",
    favoredAttributes: ["INT", "CAR", "SAB"],
    role: "Investigação, documentação de eventos e pressão social baseada em informação.",
    strengths: [
      "Excelente em reunir, interpretar e comunicar pistas",
      "Consegue pressionar socialmente e extrair informações",
      "Fortalece o grupo ao registrar e organizar a verdade dos fatos",
    ],
    weaknesses: [
      "Menor eficiência em confronto físico direto",
      "Depende de contexto, testemunhos ou evidências para brilhar mais",
      "Algumas habilidades rendem melhor com equipamento ou preparação mínima",
    ],
    academicBonus:
      "+1 em testes de Investigação, Pesquisa, Percepção ou Diplomacia quando aplicados à apuração, entrevistas, reconstrução de eventos, documentação ou análise crítica de informações.",

    abilities: [
      {
        id: "apuracao_imediata",
        name: "Apuração Imediata",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "INT",
        range: "pessoal",
        duration: "instantânea",
        type: "ação / investigativa",
        description:
          "Você conecta informações soltas com rapidez e encontra o detalhe que estava escapando de todos.",
        effects: [
          "Faça um teste de Inteligência com CD definida pelo mestre",
          "Em sucesso, revela uma pista escondida ou um detalhe adicional importante sobre a cena, fenômeno, mentira ou falha narrativa",
          "Em sucesso crítico, descobre duas pistas ou conecta duas informações aparentemente desconexas",
        ],
        risk:
          "Em falha crítica, você segue uma pista falsa por 1 rodada ou até receber nova evidência confiável.",
      },
      {
        id: "pergunta_certeira",
        name: "Pergunta Certeira",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "CAR",
        range: "3 metros",
        duration: "instantânea",
        type: "ação / social",
        description:
          "Sua experiência com entrevistas permite pressionar o alvo exatamente no ponto em que a verdade escapa.",
        effects: [
          "Faça um teste de Carisma contra a Vontade do alvo",
          "Em sucesso, o alvo revela um pedaço de informação verdadeira, mesmo tentando esconder",
          "Funciona como pressão social e jornalística, não como magia da verdade",
        ],
        risk:
          "Em falha crítica, o alvo se fecha completamente e recebe +2 para resistir a perguntas sociais até o fim da cena.",
      },
      {
        id: "camera_nao_mente",
        name: "Câmera não Mente",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "SAB",
        range: "6 metros",
        duration: "instantânea",
        type: "ação / investigativa",
        description:
          "Você revisa rapidamente imagens, vídeos ou gravações e encontra detalhes que passariam despercebidos.",
        effects: [
          "Detecta detalhes ocultos, rostos, símbolos, movimentos ou a linha do tempo básica de um evento",
          "Recebe +2 em um teste de Percepção ou Investigação relacionado ao material",
          "Em sucesso crítico, descobre algo que estava invisível a olho nu, como reflexos, figuras ao fundo ou objetos escondidos",
        ],
        risk:
          "Em falha crítica, você interpreta o material errado e sofre -1 em investigações envolvendo esse registro até o fim da cena.",
      },
      {
        id: "pressao_midiatica",
        name: "Pressão Midiática",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "CAR",
        range: "6 metros",
        duration: "1 rodada",
        type: "ação / social",
        description:
          "Você usa a ameaça de exposição, denúncia ou registro público para desestabilizar um alvo humano.",
        effects: [
          "O alvo sofre -2 em testes sociais contra você",
          "Se você passar em um teste de Carisma CD 12, o alvo também sofre -1 em ataque devido à hesitação",
          "Em sucesso crítico, o alvo fica Desestabilizado e não pode usar vantagens sociais por 1 rodada",
        ],
        risk:
          "Em falha crítica, o inimigo se irrita e recebe +1 para atacar você.",
      },
      {
        id: "construcao_da_narrativa",
        name: "Construção da Narrativa",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: "INT",
        range: "6 metros",
        duration: "1 rodada",
        type: "ação / suporte",
        description:
          "Você organiza fatos, falas e detalhes para dar clareza e direção ao grupo.",
        effects: [
          "Escolha até 2 aliados",
          "Eles recebem +1 em testes de Investigação, Pesquisa ou Percepção nesta rodada",
          "Se você passar em um teste de INT CD 11, um deles também recebe +1 em Defesa Mental",
          "Em sucesso crítico, ambos recebem os bônus automaticamente",
        ],
      },
      {
        id: "testemunha_ocular",
        name: "Testemunha Ocular",
        costPEH: 1,
        rarity: "rara",
        pfCost: 2,
        attributeBase: "SAB",
        type: "reação / investigativa",
        trigger:
          "Um evento relevante acontece na sua linha de visão, como um ataque, ritual ou manifestação sobrenatural",
        description:
          "Seu olhar treinado registra o detalhe exato no momento em que tudo acontece.",
        effects: [
          "Você pode refazer imediatamente um teste de Percepção relacionado ao evento",
          "Se o novo teste for maior, use o novo resultado",
          "Em sucesso crítico, o mestre concede uma informação extra, mesmo que pequena",
        ],
        risk:
          "Em falha crítica, você foca no detalhe errado e perde sua próxima ação menor.",
      },
      {
        id: "reportagem_de_campo",
        name: "Reportagem de Campo",
        costPEH: 1,
        rarity: "rara",
        attributeBase: "INT + CAR",
        range: "6 metros",
        type: "passiva",
        description:
          "Seu treinamento em documentação de campo transforma o registro da verdade em vantagem tática.",
        effects: [
          "Recebe +1 em testes para encontrar pistas físicas ou testemunhais",
          "Aliados a até 6 metros recebem +1 em Moral se você estiver documentando a cena",
          "1 vez por cena, pode registrar um detalhe importante e declarar: 'Eu tenho isso gravado.'",
          "Esse registro garante +2 em um único teste futuro relacionado ao evento registrado, como descobrir, comprovar, intimidar ou explicar",
        ],
        requirement:
          "Ativa enquanto você estiver consciente e com equipamento básico, como celular, gravador ou caderno.",
      },
    ],
  },
    letras_linguistica: {
    id: "letras_linguistica",
    name: "Letras / Linguística",
    description:
      "A Graduação em Letras ou Linguística forma especialistas na estrutura, interpretação e construção da linguagem humana. No Instituto Orynth, isso inclui também o estudo de símbolos, discursos alterados, textos ritualísticos e fenômenos em que a linguagem molda percepção, comportamento e realidade.",
    favoredAttributes: ["INT", "CAR", "SAB"],
    role: "Decodificação, interpretação de linguagem, suporte investigativo e controle social verbal.",
    strengths: [
      "Excelente em textos, símbolos, discursos e códigos",
      "Consegue interpretar pistas linguísticas e significados ocultos",
      "Oferece suporte social e proteção contra manipulação verbal",
    ],
    weaknesses: [
      "Menor foco em combate físico direto",
      "Brilha mais em cenas com discurso, escrita, símbolos ou comunicação",
      "Algumas habilidades rendem menos contra criaturas irracionais ou sem linguagem",
    ],
    academicBonus:
      "+1 em testes de Investigação, Pesquisa, Diplomacia ou resistência mental quando aplicados à interpretação de textos, fala, símbolos, narrativas, códigos ou manipulação verbal.",

    abilities: [
      {
        id: "analise_semantica_profunda",
        name: "Análise Semântica Profunda",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "INT",
        type: "ação / investigativa",
        description:
          "Você identifica significados ocultos, ambiguidades e padrões linguísticos em falas, textos, códigos e símbolos.",
        effects: [
          "Recebe +2 em Investigação quando a pista envolver texto, fala, código ou símbolos",
          "Pode detectar incongruências, mensagens duplas, manipulações ou palavras-chave escondidas",
        ],
      },
      {
        id: "retorica_afiada",
        name: "Retórica Afiada",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "CAR",
        type: "ação / social",
        description:
          "Você conduz o discurso com precisão para desarmar tensões e redirecionar a conversa.",
        effects: [
          "Recebe +2 em Diplomacia ou Enganação naquele turno",
          "Pode reduzir hostilidade leve de um NPC, mudando sua atitude de Desconfiado para Neutro",
        ],
      },
      {
        id: "identificacao_linguistica",
        name: "Identificação Linguística",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "INT ou SAB",
        type: "ação / investigativa",
        description:
          "Você analisa sotaques, estilo textual, escolha de palavras e estrutura discursiva para rastrear a origem de uma mensagem.",
        effects: [
          "Identifica origem provável, faixa etária, estado emocional e intenção do autor de uma fala ou texto",
          "Recebe +2 para rastrear quem produziu mensagens, ameaças ou pistas anônimas",
        ],
      },
      {
        id: "autoridade_gramatical",
        name: "Autoridade Gramatical",
        costPEH: 1,
        rarity: "incomum",
        attributeBase: "CAR + INT",
        range: "6 metros",
        type: "passiva",
        description:
          "Sua forma articulada e precisa de falar impõe respeito intelectual e dificulta manipulações verbais.",
        effects: [
          "Aliados a até 6 metros recebem +1 em testes sociais enquanto você estiver presente",
          "Você recebe +1 em testes de Vontade contra manipulação verbal, persuasão forçada ou encantos sonoros",
        ],
      },
      {
        id: "traducao_improvisada",
        name: "Tradução Improvisada",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "INT",
        type: "ação / suporte",
        description:
          "Você improvisa traduções de idiomas, cifras ou linguagens simbólicas usando lógica, contexto e estrutura.",
        effects: [
          "Entende cerca de 80% de qualquer idioma falado ou escrito não sobrenatural",
          "Para linguagens paranormais, faça um teste de INT CD 14",
          "Em sucesso, revela 1 pista crucial do conteúdo",
        ],
      },
      {
        id: "construcao_de_narrativa",
        name: "Construção de Narrativa",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: "CAR + INT",
        type: "ação / suporte social e investigativo",
        description:
          "Você organiza fatos, discursos e versões em uma narrativa coerente e convincente.",
        effects: [
          "Aliados recebem +2 em testes de Investigação que envolvam reconstrução de eventos",
          "Você recebe +2 em testes sociais para convencer NPCs com uma explicação narrativa clara e lógica",
        ],
      },
      {
        id: "palavra_de_comando",
        name: "Palavra de Comando",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: "CAR",
        type: "ação / controle social",
        description:
          "Você usa entonação, ritmo e escolha exata de palavras para forçar uma reação imediata.",
        effects: [
          "Um alvo humano faz teste de Vontade CD 14",
          "Em falha, deve obedecer um comando curto como 'Pare', 'Fuja', 'Solte', 'Corra' ou 'Fale'",
          "Em sucesso parcial, o alvo hesita e sofre -1 em uma ação relacionada",
        ],
        risk:
          "Não funciona em criaturas completamente irracionais, sem linguagem ou incapazes de compreender a ordem.",
      },
    ],
  },
    medicina: {
    id: "medicina",
    name: "Medicina",
    description:
      "A Graduação em Medicina do Instituto Orynth forma profissionais capazes de diagnosticar, tratar e estabilizar aliados mesmo sob pressão extrema. No ambiente do Instituto, isso inclui também lidar com contaminações estranhas, crises físicas súbitas e manifestações biológicas ligadas ao Outro Lado.",
    favoredAttributes: ["SAB", "INT", "DES"],
    role: "Cura, estabilização, diagnóstico clínico e contenção de riscos biológicos.",
    strengths: [
      "Melhor graduação para manter aliados vivos e funcionais",
      "Excelente contra condições físicas, toxinas e colapsos biológicos",
      "Grande capacidade de leitura clínica e decisão sob pressão",
    ],
    weaknesses: [
      "Menor foco ofensivo direto",
      "Brilha mais com aliados por perto e alvos a serem tratados",
      "Algumas habilidades dependem de proximidade e toque",
    ],
    academicBonus:
      "+1 em testes de Primeiros Socorros, Investigação clínica, diagnóstico, farmacologia, resistência biológica ou tratamento de condições físicas e psicológicas leves.",

    abilities: [
      {
        id: "diagnostico_clinico_imediato",
        name: "Diagnóstico Clínico Imediato",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "SAB",
        range: "toque ou 1 metro",
        duration: "instantânea",
        type: "ação / suporte analítico",
        description:
          "Você avalia rapidamente sinais vitais, reflexos e estado físico ou mental do alvo para entender o que está acontecendo.",
        effects: [
          "Identifica imediatamente a principal condição física ou psicológica afetando o alvo",
          "Remove 1 condição leve: Tontura, Sangramento Leve, Náusea ou Medo Leve",
          "O alvo recebe +1 em Resistência Física até o fim da cena",
        ],
        risk:
          "Em falha crítica, você interpreta errado e o alvo sofre -1 em Resistência por 1 rodada.",
      },
      {
        id: "estabilizacao_de_emergencia",
        name: "Estabilização de Emergência",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "SAB",
        range: "toque",
        duration: "instantânea",
        type: "ação / suporte",
        description:
          "Você aplica um procedimento rápido para impedir que um aliado entre em colapso total.",
        effects: [
          "Um aliado a 0 HP é estabilizado e volta a 1 HP",
          "Remove Sangramento e Desmaio",
          "O alvo recebe +1 em Defesa até o final do próximo turno",
        ],
        risk:
          "Em falha crítica, o procedimento falha e o alvo continua instável.",
      },
      {
        id: "farmacologia_improvisada",
        name: "Farmacologia Improvisada",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "INT",
        range: "toque",
        duration: "1 cena",
        type: "ação / suporte químico",
        description:
          "Você improvisa um composto paliativo ou estimulante usando conhecimento farmacológico e recursos limitados.",
        effects: [
          "Escolha 1 efeito ao usar",
          "Analgésico: o alvo ignora a próxima fonte de dano leve",
          "Estimulante: o alvo recebe +2 em Reflexo ou Esquiva até o fim da cena",
          "Calmante: remove Pânico Leve ou Desorientação",
          "Tônico: recupera 2 PF (não pode ser usado em si mesmo)",
        ],
        risk:
          "Em falha crítica, o composto irrita o alvo e ele sofre -1 em Movimento por 1 rodada.",
      },
      {
        id: "protocolo_de_triagem_avancada",
        name: "Protocolo de Triagem Avançada",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "INT",
        range: "6 metros",
        duration: "instantânea",
        type: "ação / análise em área",
        description:
          "Você avalia rapidamente quem corre mais risco, quais condições estão ativas e qual ameaça biológica exige atenção imediata.",
        effects: [
          "Identifica todas as condições físicas dos aliados em alcance",
          "Até 2 aliados podem repetir um teste de Resistência Física neste turno",
          "Você recebe +2 em testes para detectar doenças, toxinas ou efeitos corporais sobrenaturais",
        ],
        risk:
          "Em falha crítica, você se confunde e sofre -1 em Percepção por 1 cena.",
      },
      {
        id: "resposta_adrenal",
        name: "Resposta Adrenal",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: "SAB",
        range: "6 metros",
        type: "reação / biológica",
        trigger:
          "Um aliado seria atingido ou falharia em evitar um perigo físico",
        description:
          "Você ativa o instinto de sobrevivência do aliado com um comando preciso e imediato.",
        effects: [
          "O aliado repete o teste de Defesa, Reflexo ou Resistência Física",
          "Se passar, recebe +1 em Movimento e +1 em Defesa até o próximo turno",
        ],
        risk:
          "Em falha crítica, o comando assusta o aliado e ele sofre -1 em Reflexo por 1 rodada.",
      },
      {
        id: "tecnica_de_sutura_rapida",
        name: "Técnica de Sutura Rápida",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: "DES + SAB",
        range: "toque",
        duration: "instantânea",
        type: "ação / recuperação",
        description:
          "Você realiza uma intervenção rápida e precisa para fechar ferimentos e devolver estabilidade física ao alvo.",
        effects: [
          "Cura HP igual ao seu modificador de SAB + 1d6",
          "Remove Sangramento e Fratura Leve",
          "O alvo recebe +1 em Resistência Física por 2 rodadas",
        ],
        risk:
          "Em falha crítica, a sutura inflama e o alvo sofre 1 ponto de dano contínuo até receber tratamento adequado.",
      },
      {
        id: "contencao_biologica_de_campo",
        name: "Contenção Biológica de Campo",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: "INT",
        range: "3 metros",
        duration: "2 rodadas",
        type: "ação / defesa e controle",
        description:
          "Você cria um perímetro improvisado de proteção contra contaminações, fluidos perigosos e ameaças biológicas.",
        effects: [
          "Aliados na área recebem +2 em Resistência contra toxinas, doenças, corrosão e sangue contaminado",
          "Inimigos que usem efeitos biológicos sofrem -1 em ataque dentro da área",
          "Se um inimigo infectante entrar na área, deve fazer Resistência CD 13 ou ter sua força biológica suprimida por 1 rodada",
        ],
        risk:
          "Em falha crítica, o perímetro falha e aliados recebem -1 em Resistência contra efeitos biológicos neste turno.",
      },
    ],
  },

    moda_design: {
    id: "moda_design",
    name: "Moda e Design",
    description:
      "A Graduação em Moda e Design do Instituto Orynth estuda estética, identidade, linguagem visual e construção de imagem. No contexto do Instituto, isso inclui leitura de padrões simbólicos, adaptação de vestuário, disfarce, proteção têxtil e influência emocional por presença visual.",
    favoredAttributes: ["CAR", "INT", "SAB"],
    role: "Disfarce, leitura estética, suporte social e adaptação visual/têxtil em campo.",
    strengths: [
      "Excelente em leitura visual de pessoas, roupas e padrões",
      "Consegue criar disfarces, ajustes funcionais e reforços improvisados",
      "Manipula presença, imagem e impacto emocional com eficiência",
    ],
    weaknesses: [
      "Menor foco em combate direto",
      "Brilha mais em cenas sociais, investigativas ou de preparação",
      "Parte do potencial depende de observação, materiais ou tempo mínimo de ajuste",
    ],
    academicBonus:
      "+1 em testes de Investigação, Empatia, Diplomacia, Furtividade Social ou análise simbólica quando aplicados à aparência, vestuário, linguagem visual, identidade, padrões estéticos ou adaptação têxtil.",

    abilities: [
      {
        id: "olho_estetico_clinico",
        name: "Olho Estético Clínico",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "SAB + INT",
        type: "ação / investigativa",
        description:
          "Seu olhar treinado detecta detalhes mínimos em roupas, tecidos, desgaste, manchas, costuras e padrões de uso.",
        effects: [
          "Recebe +2 em Investigação quando a cena envolver roupas, objetos pessoais, rastros têxteis, maquiagem ou adereços",
          "Identifica tempo aproximado de uso, danos recentes e origem provável do material",
          "Em cenas de crime, pode revelar 1 pista oculta ligada a textura, marca ou costura",
        ],
        risk:
          "Em falha crítica, você interpreta o padrão errado e aliados sofrem -1 em Investigação até o próximo turno.",
      },
      {
        id: "desfile_social",
        name: "Desfile Social",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "CAR",
        type: "ação / social",
        description:
          "Você usa presença, postura e estilo para controlar a impressão que causa nos outros.",
        effects: [
          "Recebe vantagem em Diplomacia ou Enganação por 1 cena",
          "Em multidões, civis tornam-se mais receptivos e abrem espaço para você ou aliados",
          "Contra NPCs hostis humanos, causa -1 em Moral por intimidação estética",
        ],
        risk:
          "Em falha crítica, sua postura é vista como arrogante e você sofre -1 em testes sociais até o fim da cena.",
      },
      {
        id: "reparacao_improvisada",
        name: "Reparação Improvisada",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "DES",
        type: "ação / utilidade",
        description:
          "Você improvisa ajustes rápidos com linha, fita, clipes ou ferramentas simples para restaurar ou adaptar roupas.",
        effects: [
          "Remove penalidades de roupas rasgadas, úmidas ou mal ajustadas",
          "Cria uma adaptação funcional por 1 cena",
          "Escolha 1: bolsos ocultos, luvas protetoras, reforço de tecido (+1 Resistência Física) ou redução de barulho no movimento (+1 Furtividade)",
        ],
        risk:
          "Em falha crítica, a costura falha em momento crítico e causa -1 em Furtividade ou Defesa.",
      },
      {
        id: "paleta_emocional",
        name: "Paleta Emocional",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "CAR + SAB",
        type: "ação / social e suporte",
        description:
          "Você usa cor, textura, composição visual e presença para modular o estado emocional de alguém.",
        effects: [
          "Escolha 1 aliado",
          "Calma: remove Medo Leve ou ansiedade narrativa e concede +1 em Resistência Mental",
          "Foco: concede +2 em testes de Percepção por 1 turno",
          "Confiança: concede +1 em ataques e testes sociais",
          "Ou escolha 1 inimigo humano para sofrer -1 em Moral ou -1 em Percepção",
        ],
        risk:
          "Em falha crítica, a leitura emocional sai errada e o alvo recebe o efeito oposto, quando fizer sentido narrativo.",
      },
      {
        id: "silhueta_protetora",
        name: "Silhueta Protetora",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "INT",
        type: "ação / defensiva",
        description:
          "Você reforça rapidamente camadas, fechos, costuras e acessórios para transformar roupa em proteção funcional.",
        effects: [
          "Um aliado recebe +2 em Defesa contra cortes, arranhões ou impactos moderados por 2 turnos",
          "Se usado em si mesmo, também recebe +1 em Resistência Física",
        ],
        risk:
          "Em falha crítica, o reforço atrapalha o movimento e o alvo sofre -1 em deslocamento ou perde o bônus após o primeiro golpe.",
      },
      {
        id: "traco_do_estilista",
        name: "Traço do Estilista",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: "INT + SAB",
        type: "ação / investigativa e social",
        description:
          "Você lê a identidade e o estado de alguém pela roupa, combinação visual, desgaste e coerência estética.",
        effects: [
          "Obtém 1 informação única e precisa sobre o alvo, como rotina, profissão, estado emocional ou tipo de ambiente em que esteve",
          "Recebe +2 em Empatia ou Intuição contra esse alvo por 1 cena",
          "Contra inimigos sobrenaturais que imitam humanos, detecta incongruências sutis e recebe +2 em Investigação",
        ],
        risk:
          "Em falha crítica, sua interpretação é incorreta e o alvo fica desconfiado, causando -1 em testes sociais contra ele.",
      },
      {
        id: "metamorfose_estetica",
        name: "Metamorfose Estética",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: "CAR + DES",
        type: "ação / suporte estratégico",
        description:
          "Você altera rapidamente visual, postura, penteado, maquiagem e composição de um aliado para transformar sua presença.",
        effects: [
          "Cria um Disfarce Narrativo funcional por 1 cena",
          "O alvo recebe +2 em Enganação ou Furtividade Social",
          "Civis não reconhecem o alvo a menos que passem em teste de Percepção CD 14",
          "Inimigos humanos sofrem -2 ao rastrear esse aliado",
          "Em sucesso crítico, o disfarce pode enganar entidades inteligentes por 1 turno",
        ],
        risk:
          "Em falha crítica, o disfarce chama atenção demais e o alvo sofre -1 em Furtividade e é notado com mais facilidade.",
      },
    ],
  },

    pedagogia: {
    id: "pedagogia",
    name: "Pedagogia",
    description:
      "A Graduação em Pedagogia do Instituto Orynth forma estudantes capazes de compreender comportamento humano, processos de aprendizagem, mediação social e organização de grupos. No contexto do Instituto, isso transforma o pedagogo em suporte emocional, mediador de conflitos e organizador de equipes sob pressão.",
    favoredAttributes: ["SAB", "CAR", "INT"],
    role: "Suporte emocional, coordenação de grupo, mediação social e leitura comportamental.",
    strengths: [
      "Excelente em manter o grupo funcional e emocionalmente estável",
      "Consegue reorganizar aliados e reduzir conflitos sociais",
      "Muito forte em leitura de comportamento e suporte mental leve",
    ],
    weaknesses: [
      "Baixo foco em dano direto ou enfrentamento bruto",
      "Brilha mais em equipe do que sozinho",
      "Parte do poder depende de interação humana ou aliados por perto",
    ],
    academicBonus:
      "+1 em testes de Empatia, Diplomacia, Intuição, organização de grupo, mediação de conflitos, leitura emocional ou apoio a aliados em situações de crise.",

    abilities: [
      {
        id: "voz_de_acolhimento",
        name: "Voz de Acolhimento",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "CAR",
        range: "6 metros",
        duration: "1 turno",
        type: "ação / suporte social",
        description:
          "Sua voz e postura transmitem calma, reduzindo o pânico e restabelecendo foco em um aliado.",
        effects: [
          "Remove Medo Leve ou Desespero Leve de 1 aliado",
          "Concede +1 em Moral ao alvo até o fim da cena",
          "Em situações sociais, reduz agressividade ou tensão narrativa",
        ],
        risk:
          "Em falha crítica, sua fala soa paternalista demais e o aliado sofre -1 em testes sociais por 1 turno.",
      },
      {
        id: "mediacao_de_conflitos",
        name: "Mediação de Conflitos",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "SAB",
        range: "6 metros",
        duration: "2 turnos",
        type: "ação / controle social",
        description:
          "Você usa escuta ativa e postura mediadora para interromper o ciclo de agressividade entre dois alvos.",
        effects: [
          "Escolha 2 alvos hostis",
          "Eles fazem teste de Vontade CD 13",
          "Em falha, entram em Conflito Suspenso: não podem atacar um ao outro, sofrem -1 em agressividade contra o grupo e ficam abertos a diálogo",
          "Aliados recebem +2 em Diplomacia contra esses alvos enquanto o efeito durar",
        ],
        risk:
          "Em falha crítica, o conflito piora e um dos alvos recebe +1 em agressividade contra você.",
      },
      {
        id: "organizacao_de_grupo",
        name: "Organização de Grupo",
        costPEH: 1,
        rarity: "comum",
        pfCost: 3,
        attributeBase: "INT",
        range: "9 metros",
        duration: "1 turno",
        type: "ação / suporte tático",
        description:
          "Você reorganiza a equipe com instruções simples, claras e funcionais.",
        effects: [
          "Todos os aliados no alcance recebem +1 em Defesa e +1 em testes de Percepção até o início do próximo turno",
          "Aliados podem trocar posição entre si sem provocar ataques de oportunidade",
        ],
        risk:
          "Em falha crítica, suas instruções saem confusas e aliados sofrem -1 em Defesa por 1 turno.",
      },
      {
        id: "didatica_adaptativa",
        name: "Didática Adaptativa",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: "INT ou CAR",
        range: "6 metros",
        duration: "1 cena",
        type: "ação / suporte de conhecimento",
        description:
          "Você traduz rapidamente uma informação difícil em algo simples, útil e aplicável.",
        effects: [
          "Escolha 1 aliado",
          "Ele recebe +2 em Inteligência ou Percepção para testes relacionados ao assunto que você explicou",
          "Pode ser usada para ensinar rapidamente lógica de enigmas, preparação mental ou uma instrução ritual simples",
        ],
        risk:
          "Em falha crítica, a explicação atrapalha e o aliado sofre -1 no próximo teste relacionado.",
      },
      {
        id: "olhar_educador",
        name: "Olhar Educador",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: "SAB",
        range: "9 metros",
        duration: "1 turno",
        type: "ação / investigativa emocional",
        description:
          "Você lê microexpressões, postura e comportamento com um olhar treinado para sinais humanos sutis.",
        effects: [
          "Recebe +2 em Empatia, Intuição ou testes para detectar mentira",
          "Revela se um NPC está escondendo algo, com medo ou sob influência mental leve",
        ],
        risk:
          "Em falha crítica, sua leitura sai errada e aliados sofrem -1 em testes sociais contra esse alvo por 1 turno.",
      },
      {
        id: "rede_de_apoio",
        name: "Rede de Apoio",
        costPEH: 1,
        rarity: "rara",
        pfCost: 3,
        attributeBase: "CAR",
        range: "cena inteira",
        duration: "1 cena",
        type: "ação / suporte social estratégico",
        description:
          "Você constrói confiança rapidamente e mobiliza pequenas ajudas práticas de NPCs ao redor.",
        effects: [
          "Pode pedir pequenas ajudas a até 2 NPCs amigáveis ou neutros, como vigiar uma área, guardar um item, avisar algo ou liberar um acesso simples",
          "Esses NPCs recebem +2 em Moral ao lidar com você",
          "Aliados recebem +1 em Diplomacia durante negociações com NPCs ajudantes até o fim da cena",
        ],
        risk:
          "Em falha crítica, o pedido soa invasivo e o NPC perde confiança em você.",
      },
      {
        id: "tutor_de_crise",
        name: "Tutor de Crise",
        costPEH: 1,
        rarity: "rara",
        pfCost: 2,
        attributeBase: "SAB",
        range: "6 metros",
        type: "reação / suporte mental",
        trigger: "Um aliado falha em Resistência Mental ou Moral",
        description:
          "Você intervém no instante certo com técnicas de ancoragem, foco e respiração guiada.",
        effects: [
          "O aliado refaz o teste falho com +1 de bônus",
          "Se for bem-sucedido, recebe +1 em Resistência Mental por 2 turnos",
          "Também remove Confusão Leve, se houver",
        ],
        risk:
          "Em falha crítica, sua intervenção atrapalha e o aliado sofre -1 em Resistência Mental por 1 turno.",
      },
    ],
  },
    psicologia: {
    id: "psicologia",
    name: "Psicologia",
    description:
      "A Graduação em Psicologia do Instituto Orynth forma estudantes capazes de compreender comportamento, emoções, memória, percepção e dinâmica grupal. No contexto do Instituto, o psicólogo se torna especialista em leitura emocional, intervenção em crises e prevenção de colapsos mentais em ambientes de alta pressão.",
    favoredAttributes: ["SAB", "CAR", "INT"],
    role: "Leitura emocional, suporte mental, intervenção em crise e estabilização psicológica do grupo.",
    strengths: [
      "Excelente em detectar desequilíbrios emocionais e manipulação mental",
      "Consegue proteger aliados de medo, pânico e colapso psicológico",
      "Muito forte em leitura de comportamento e suporte de grupo",
    ],
    weaknesses: [
      "Baixo foco em dano direto",
      "Brilha mais contra ameaças mentais, sociais ou emocionais",
      "Parte do potencial depende de aliados ou alvos emocionalmente legíveis",
    ],
    academicBonus:
      "+1 em testes de Empatia, Intuição, resistência mental, leitura comportamental, redução de crise, observação emocional ou apoio a aliados sob estresse, medo ou manipulação psicológica.",

    abilities: [
      {
        id: "leitura_de_microexpressoes",
        name: "Leitura de Microexpressões",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "SAB",
        range: "6 metros",
        duration: "instantânea",
        type: "ação / investigativa",
        description:
          "Você analisa trejeitos, microtensões e pequenas expressões involuntárias para revelar a verdade emocional do alvo.",
        effects: [
          "Escolha um alvo visível",
          "Faça um teste de SAB contra CD igual a 10 + Vontade do alvo",
          "Em sucesso, descubra 1 verdade emocional: se está mentindo, com medo, hostil, escondendo algo ou emocionalmente instável",
          "Em sucesso crítico, descubra 2 dessas informações",
        ],
        risk:
          "Em falha crítica, você interpreta errado e recebe uma informação emocional invertida.",
      },
      {
        id: "voz_calmante",
        name: "Voz Calmante",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "CAR",
        range: "6 metros",
        duration: "2 rodadas",
        type: "ação / suporte emocional",
        description:
          "Você usa voz, respiração guiada e presença terapêutica para estabilizar emocionalmente um aliado.",
        effects: [
          "Remove 1 condição emocional leve: Medo Leve, Ansiedade, Pânico Leve, Insegurança ou Desorientação Emocional",
          "O alvo recebe +1 em Resistência Mental enquanto durar o efeito",
        ],
        risk:
          "Em falha crítica, o aliado hesita e perde 1 ação menor.",
      },
      {
        id: "analise_rapida_de_comportamento",
        name: "Análise Rápida de Comportamento",
        costPEH: 1,
        rarity: "comum",
        pfCost: 2,
        attributeBase: "INT",
        range: "9 metros",
        type: "reação / técnica observacional",
        trigger: "Um aliado for alvo de uma ação social ou mental",
        description:
          "Você interpreta instantaneamente a intenção do agressor e orienta o aliado a reagir melhor.",
        effects: [
          "O aliado repete o teste contra o efeito social ou mental com +1 de bônus",
          "Se você passar em um teste de INT CD 12, o agressor sofre -1 na próxima tentativa de ataque social ou mental",
        ],
        risk:
          "Em falha crítica, sua leitura atrapalha e o aliado sofre -1 no teste repetido.",
      },
      {
        id: "reconstrucao_narrativa",
        name: "Reconstrução Narrativa",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 3,
        attributeBase: "CAR ou INT",
        range: "toque",
        duration: "instantânea",
        type: "ação / suporte psicológico",
        description:
          "Você reorganiza a forma como o alvo interpreta um trauma recente, reduzindo seu impacto imediato.",
        effects: [
          "Remove 1 condição emocional moderada, como pânico moderado, culpa intensa ou raiva incontrolável",
          "O alvo recebe +2 em um único teste de Resistência Mental nos próximos 5 minutos",
        ],
        risk:
          "Em falha crítica, a intervenção falha e o alvo sofre -1 em Resistência Mental por 1 rodada.",
      },
      {
        id: "racionalizacao_estrategica",
        name: "Racionalização Estratégica",
        costPEH: 1,
        rarity: "incomum",
        pfCost: 2,
        attributeBase: "INT",
        range: "6 metros",
        duration: "1 rodada",
        type: "ação / bônus tático",
        description:
          "Você traduz a situação em lógica clara, diminuindo o pânico e aumentando o foco operacional dos aliados.",
        effects: [
          "Até 2 aliados recebem +1 em testes que envolvam foco, como investigar, atacar com precisão, resistir a distrações ou resolver enigmas rápidos",
          "Se você passar em um teste de INT CD 11, esses aliados também recebem +1 em Defesa Mental",
        ],
      },
      {
        id: "intervencao_de_crise",
        name: "Intervenção de Crise",
        costPEH: 1,
        rarity: "rara",
        pfCost: 4,
        attributeBase: "SAB",
        range: "6 metros",
        duration: "instantânea",
        type: "ação / suporte intensivo",
        description:
          "Você intervém no instante crítico para impedir que um aliado entre em colapso mental completo.",
        effects: [
          "Escolha um aliado prestes a entrar em pânico, em colapso mental, sob ataque psíquico, dominado emocionalmente ou próximo de chegar a 0 PF por estresse mental",
          "Você pode anular a condição avançada",
          "Ou impedir que o aliado chegue a 0 PF por estresse mental nesta rodada",
        ],
        risk:
          "Em falha crítica, o abalo afeta você também, e você sofre -1 em Resistência Mental até o fim da cena.",
      },
      {
        id: "arquitetura_emocional",
        name: "Arquitetura Emocional",
        costPEH: 1,
        rarity: "rara",
        attributeBase: "SAB + CAR",
        range: "6 metros",
        type: "passiva / suporte de grupo",
        description:
          "Sua presença regula o clima emocional da equipe e diminui a duração de desequilíbrios leves.",
        effects: [
          "Enquanto estiver consciente, aliados a até 6 metros recebem +1 em testes de Moral",
          "Quando um aliado sofre uma condição emocional leve, você pode gastar sua reação para reduzir sua duração pela metade",
          "Se um aliado cair mental ou fisicamente, todos os aliados restantes recebem +1 em Resistência Mental por 1 rodada",
        ],
      },
    ],
  },

}