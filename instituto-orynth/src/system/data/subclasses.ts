import type { PassiveAbility } from "../types/abilities"

export type SubclassData = {
  id: string
  name: string
  description: string
  passives: PassiveAbility[]
}

export const subclasses: Record<string, SubclassData> = {
  quieto: {
    id: "quieto",
    name: "Quieto",
    description:
      "Estilo reservado, observador e discreto, focado em percepção, silêncio e leitura de ambiente.",
    passives: [
      {
        id: "silencio_natural",
        name: "Silêncio Natural",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe vantagem em testes de Furtividade baseados em som, como movimento, respiração e presença.",
        narrative: "É quase impossível saber quando você entrou na sala.",
      },
      {
        id: "camuflagem_social",
        name: "Camuflagem Social",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe +2 em testes para não ser notado em interações sociais.",
        narrative: "Você estava aqui o tempo todo?",
        risk: "Pode ser completamente ignorado por aliados distraídos.",
      },
      {
        id: "passo_leve",
        name: "Passo Leve",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe +1 de deslocamento e vantagem em movimentos delicados, como abrir portas ou contornar obstáculos.",
        narrative: "O típico aluno que nunca bate o pé no corredor.",
      },
      {
        id: "perfil_baixo",
        name: "Perfil Baixo",
        costPD: 2,
        rarity: "comum",
        description:
          "Reduz em 1 a dificuldade ao tentar evitar conflitos sociais e conversas indesejadas.",
        narrative: "Teachers forget you exist sometimes.",
        risk: "NPCs importantes podem ignorar você demais.",
      },
      {
        id: "olhar_analitico",
        name: "Olhar Analítico",
        costPD: 3,
        rarity: "incomum",
        description:
          "Recebe +2 em um teste de Percepção por cena.",
        narrative: "Você repara no detalhe que ninguém vê.",
      },
      {
        id: "leitura_silenciosa",
        name: "Leitura Silenciosa",
        costPD: 3,
        rarity: "incomum",
        description:
          "Recebe vantagem em testes para detectar emoções ocultas, mentiras ou intenções não ditas.",
        narrative: "Seus olhos dizem: te saquei.",
      },
      {
        id: "estrategia_silenciosa",
        name: "Estratégia Silenciosa",
        costPD: 3,
        rarity: "incomum",
        description:
          "Uma vez por cena, pode conceder +1 em um teste de um aliado ao sussurrar ou gesticular.",
        narrative: "Você aponta discretamente a coisa certa.",
      },
      {
        id: "memoria_observadora",
        name: "Memória Observadora",
        costPD: 3,
        rarity: "incomum",
        description:
          "Sempre que falhar por 1 ponto em Investigação, pode rolar novamente uma vez.",
        narrative: "Seu cérebro registra o que ninguém viu.",
      },
      {
        id: "sombra_entre_sombras",
        name: "Sombra entre Sombras",
        costPD: 4,
        rarity: "rara",
        description:
          "Uma vez por cena, pode tentar se esconder mesmo sob observação direta, com um teste difícil de Furtividade.",
        narrative: "Desaparece por alguns segundos, quase sem explicação.",
        risk: "Falhar chama atenção imediata.",
      },
      {
        id: "presenca_invisivel",
        name: "Presença Invisível",
        costPD: 4,
        rarity: "rara",
        description:
          "Inimigos e NPCs recebem -2 para notar você em emboscadas ou investigações.",
        narrative: "É como se você filtrasse sua própria presença.",
      },
      {
        id: "cacador_de_detalhes",
        name: "Caçador de Detalhes",
        costPD: 4,
        rarity: "rara",
        description:
          "Recebe +2 em qualquer ação investigativa que envolva pistas visuais.",
        narrative: "Vê arranhões, poeira fora do lugar e objetos movidos.",
      },
      {
        id: "invisibilidade_social_parcial",
        name: "Invisibilidade Social Parcial",
        costPD: 5,
        rarity: "epica",
        description:
          "NPCs não hostis têm 50% de chance de não perceber sua aproximação social.",
        narrative: "O aluno silencioso que nunca responde e nunca é notado.",
      },
    ],
  },

  popular: {
    id: "popular",
    name: "Popular",
    description:
      "Estilo magnético e social, focado em presença, influência e articulação com grupos.",
    passives: [
      {
        id: "carisma_natural",
        name: "Carisma Natural",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe vantagem em testes de Diplomacia para causar boa primeira impressão.",
        narrative: "As pessoas simplesmente gostam de você.",
      },
      {
        id: "sorriso_estrategico",
        name: "Sorriso Estratégico",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe +1 em interações sociais que envolvem encanto, humor ou leveza.",
      },
      {
        id: "presenca_radiante",
        name: "Presença Radiante",
        costPD: 2,
        rarity: "comum",
        description:
          "Aliados próximos recebem +1 moral se estiverem realizando ações sociais.",
      },
      {
        id: "conversas_fluidas",
        name: "Conversas Fluidas",
        costPD: 2,
        rarity: "comum",
        description:
          "Pode repetir uma rolagem de Diplomacia falha por 1 ponto.",
      },
      {
        id: "toque_social",
        name: "Toque Social",
        costPD: 3,
        rarity: "incomum",
        description:
          "Uma vez por cena, reduz em 1 a dificuldade de um teste de Empatia ou Diplomacia.",
      },
      {
        id: "rede_de_contatos",
        name: "Rede de Contatos",
        costPD: 3,
        rarity: "incomum",
        description:
          "Em ambientes escolares, sempre encontra alguém disposto a ajudar com informações simples.",
      },
      {
        id: "influencia_leve",
        name: "Influência Leve",
        costPD: 3,
        rarity: "incomum",
        description:
          "NPCs neutros têm +1 tendência a aceitar pedidos simples.",
      },
      {
        id: "desarmar_hostilidade",
        name: "Desarmar Hostilidade",
        costPD: 3,
        rarity: "incomum",
        description:
          "Uma vez por cena, reduz a hostilidade de um NPC em 1 nível.",
      },
      {
        id: "carisma_de_palco",
        name: "Carisma de Palco",
        costPD: 4,
        rarity: "rara",
        description:
          "Em interações com grupos de 3 ou mais pessoas, recebe vantagem e +1 adicional.",
      },
      {
        id: "influenciador_emocional",
        name: "Influenciador Emocional",
        costPD: 4,
        rarity: "rara",
        description:
          "Uma vez por cena, um aliado recebe +2 em seu próximo teste social.",
      },
      {
        id: "palavras_de_acucar",
        name: "Palavras de Açúcar",
        costPD: 4,
        rarity: "rara",
        description:
          "Pode transformar uma falha leve em sucesso parcial ao lidar com NPCs amigáveis ou neutros.",
      },
      {
        id: "conexao_instantanea",
        name: "Conexão Instantânea",
        costPD: 4,
        rarity: "rara",
        description:
          "Após 1 minuto de interação, cria uma vinculação leve com o alvo, facilitando interações e favores simples.",
      },
      {
        id: "aura_magnetica",
        name: "Aura Magnética",
        costPD: 5,
        rarity: "epica",
        description:
          "Em cenas sociais amplas, NPCs ao redor têm chance de já estarem inclinados positivamente a você antes da interação.",
      },
      {
        id: "lider_carismatico",
        name: "Líder Carismático",
        costPD: 6,
        rarity: "epica",
        description:
          "Uma vez por cena, inspira todos os aliados presentes: +1 em testes sociais e remove uma condição emocional leve.",
      },
      {
        id: "voz_que_convence",
        name: "Voz que Convence",
        costPD: 6,
        rarity: "epica",
        description:
          "Reduz a dificuldade para influenciar decisões importantes de NPCs, conforme a empatia estabelecida.",
      },
    ],
  },

  representante_de_turma: {
    id: "representante_de_turma",
    name: "Representante de Turma",
    description:
      "Estilo organizador e diplomático, focado em liderança, mediação e coordenação.",
    passives: [
      {
        id: "autoridade_natural",
        name: "Autoridade Natural",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe +1 em testes de Diplomacia com colegas e professores.",
      },
      {
        id: "organizacao_impecavel",
        name: "Organização Impecável",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe vantagem em testes para lembrar prazos, instruções e detalhes administrativos.",
      },
      {
        id: "apoio_estruturado",
        name: "Apoio Estruturado",
        costPD: 2,
        rarity: "comum",
        description:
          "Uma vez por cena, pode conceder +1 a um aliado explicando rapidamente uma tarefa.",
      },
      {
        id: "negociacao_educada",
        name: "Negociação Educada",
        costPD: 3,
        rarity: "incomum",
        description:
          "Reduz em 1 a dificuldade de convencer professores a conceder favores menores.",
      },
      {
        id: "mediacao_de_conflitos",
        name: "Mediação de Conflitos",
        costPD: 3,
        rarity: "incomum",
        description:
          "Pode transformar uma interação hostil entre NPCs em neutra com um teste de Diplomacia.",
      },
      {
        id: "organizador_de_grupo",
        name: "Organizador de Grupo",
        costPD: 3,
        rarity: "incomum",
        description:
          "Quando o grupo agir junto, todos recebem +1 em ações coordenadas.",
      },
      {
        id: "responsavel_inquestionavel",
        name: "Responsável Inquestionável",
        costPD: 3,
        rarity: "incomum",
        description:
          "NPCs tendem a acreditar em você por padrão.",
      },
      {
        id: "memoria_fotografica_de_sala",
        name: "Memória Fotográfica de Sala",
        costPD: 4,
        rarity: "rara",
        description:
          "Sempre que falhar por 2 pontos ou menos em Investigação, pode rolar novamente.",
      },
      {
        id: "pilar_da_turma",
        name: "Pilar da Turma",
        costPD: 4,
        rarity: "rara",
        description:
          "Aliados próximos recebem +1 para resistir pânico, pressão ou confusão.",
      },
      {
        id: "voz_da_razao",
        name: "Voz da Razão",
        costPD: 4,
        rarity: "rara",
        description:
          "Uma vez por cena, pode tentar cancelar uma decisão impulsiva de um aliado.",
      },
      {
        id: "rede_de_contatos_escolar",
        name: "Rede de Contatos Escolar",
        costPD: 4,
        rarity: "rara",
        description:
          "Reduz a dificuldade de obter favores dentro da escola.",
      },
      {
        id: "coordenador_mestre",
        name: "Coordenador Mestre",
        costPD: 6,
        rarity: "epica",
        description:
          "Uma vez por cena, organiza a equipe e concede +1 na próxima ação de todos os aliados.",
      },
      {
        id: "diplomata_institucional",
        name: "Diplomata Institucional",
        costPD: 6,
        rarity: "epica",
        description:
          "Interações hostis com professores e autoridades começam automaticamente como neutras.",
      },
      {
        id: "lideranca_que_move_montanhas",
        name: "Liderança que Move Montanhas",
        costPD: 7,
        rarity: "epica",
        description:
          "Uma vez por dia, pode influenciar um grupo inteiro de NPCs, neutralizando hostilidade ou unificando ações.",
      },
    ],
  },

  gotico: {
    id: "gotico",
    name: "Gótico",
    description:
      "Estilo introspectivo e sensitivo, focado em percepção sombria, pressentimentos e afinidade com o oculto.",
    passives: [
      {
        id: "sensibilidade_sombria",
        name: "Sensibilidade Sombria",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe +1 em testes de Intuição ou Percepção Espiritual em locais silenciosos, escuros ou emocionalmente carregados.",
      },
      {
        id: "olhos_para_o_invisivel",
        name: "Olhos para o Invisível",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe vantagem ao tentar identificar se há algo errado em um ambiente.",
      },
      {
        id: "aura_crepuscular",
        name: "Aura Crepuscular",
        costPD: 2,
        rarity: "comum",
        description:
          "Sua presença emocional afeta NPCs sensíveis e facilita interações com pessoas melancólicas.",
      },
      {
        id: "sussurros_do_outro_lado",
        name: "Sussurros do Outro Lado",
        costPD: 3,
        rarity: "incomum",
        description:
          "Uma vez por cena, pode pedir ao narrador um pressentimento sobre perigo, mentira ou intenção oculta.",
      },
      {
        id: "veu_de_desatencao",
        name: "Véu de Desatenção",
        costPD: 3,
        rarity: "incomum",
        description:
          "Reduz em 1 a dificuldade para não ser percebido por NPCs quando você não quer interagir.",
      },
      {
        id: "mente_penumbrosa",
        name: "Mente Penumbrosa",
        costPD: 3,
        rarity: "incomum",
        description:
          "Recebe bônus contra manipulação emocional e pressão psicológica.",
      },
      {
        id: "toque_frio",
        name: "Toque Frio",
        costPD: 3,
        rarity: "incomum",
        description:
          "Ao tocar um objeto-chave, pode perceber se há emocionalidade forte associada a ele.",
      },
      {
        id: "lentes_das_sombras",
        name: "Lentes das Sombras",
        costPD: 4,
        rarity: "rara",
        description:
          "Uma vez por cena, pode perceber sombras fora do lugar, objetos deslocados e vibrações estranhas.",
      },
      {
        id: "marca_do_crepusculo",
        name: "Marca do Crepúsculo",
        costPD: 4,
        rarity: "rara",
        description:
          "NPCs hostis recebem penalidade para acertar ataques surpresa contra você.",
      },
      {
        id: "afinidade_com_o_vazio",
        name: "Afinidade com o Vazio",
        costPD: 4,
        rarity: "rara",
        description:
          "Recebe bônus contra efeitos que drenam PF, medo ou colapso mental.",
      },
      {
        id: "ecos_esquecidos",
        name: "Ecos Esquecidos",
        costPD: 4,
        rarity: "rara",
        description:
          "Pode identificar até duas emoções residuais em um local marcado por conflito ou evento importante.",
      },
      {
        id: "o_outro_lado_observa",
        name: "O Outro Lado Observa",
        costPD: 6,
        rarity: "epica",
        description:
          "Uma vez por cena, pode perguntar ao narrador se algo naquele local está presente ou vivo, recebendo uma resposta simbólica verdadeira.",
      },
      {
        id: "veu_interior",
        name: "Véu Interior",
        costPD: 7,
        rarity: "epica",
        description:
          "Torna-se imune a medo comum e recebe grande vantagem para resistir a sussurros sobrenaturais, tentações e ilusões.",
      },
    ],
  },

  valentao: {
    id: "valentao",
    name: "Valentão",
    description:
      "Estilo dominante e intimidador, focado em imposição, presença agressiva e controle por pressão.",
    passives: [
      {
        id: "intimidacao_primaria",
        name: "Intimidação Primária",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe vantagem em testes de Intimidação baseados em postura física ou tom de voz.",
      },
      {
        id: "olhar_pesado",
        name: "Olhar Pesado",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe +1 em qualquer teste social agressivo, como ordens, ameaças e pressão.",
      },
      {
        id: "impor_presenca",
        name: "Impor Presença",
        costPD: 2,
        rarity: "comum",
        description:
          "NPCs neutros hesitam antes de confrontar você; reduz a dificuldade de fazê-los recuar.",
      },
      {
        id: "forca_controlada",
        name: "Força Controlada",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe vantagem em testes de Força que envolvam precisão, como segurar, puxar ou arrastar com cuidado.",
      },
      {
        id: "pressao_social_direcionada",
        name: "Pressão Social Direcionada",
        costPD: 3,
        rarity: "incomum",
        description:
          "Uma vez por cena, um alvo sofre -1 no próximo teste social contra você.",
      },
      {
        id: "provocacao_calculada",
        name: "Provocação Calculada",
        costPD: 3,
        rarity: "incomum",
        description:
          "Uma vez por cena, pode forçar um alvo a reagir emocionalmente, como ansiedade, irritação ou hesitação.",
      },
      {
        id: "aura_de_ameaca",
        name: "Aura de Ameaça",
        costPD: 3,
        rarity: "incomum",
        description:
          "Aliados próximos recebem +1 contra alvos intimidados por você.",
      },
      {
        id: "olho_por_olho",
        name: "Olho por Olho",
        costPD: 3,
        rarity: "incomum",
        description:
          "Ao ser provocado ou intimidado, recebe +2 na próxima ação social contra o agressor.",
      },
      {
        id: "dominancia_territorial",
        name: "Dominância Territorial",
        costPD: 4,
        rarity: "rara",
        description:
          "Em ambientes fechados, inimigos e NPCs têm penalidade para desafiar você verbalmente.",
      },
      {
        id: "quebrar_resistencia",
        name: "Quebrar Resistência",
        costPD: 4,
        rarity: "rara",
        description:
          "Uma vez por cena, reduz a Vontade de um alvo em 1 até o fim da cena.",
      },
      {
        id: "lider_do_medo",
        name: "Líder do Medo",
        costPD: 4,
        rarity: "rara",
        description:
          "Alvos intimidados por você ficam mais suscetíveis a seguir instruções.",
      },
      {
        id: "presenca_aterradora",
        name: "Presença Aterradora",
        costPD: 5,
        rarity: "epica",
        description:
          "NPCs não hostis podem se calar ao sua chegada, e hostis podem falhar em confrontá-lo no primeiro round social.",
      },
      {
        id: "comandar_pelo_medo",
        name: "Comandar pelo Medo",
        costPD: 6,
        rarity: "epica",
        description:
          "Uma vez por cena, pode impor uma ordem simples a um alvo intimidado.",
      },
    ],
  },

  blogueiro: {
    id: "blogueiro",
    name: "Blogueiro",
    description:
      "Estilo performático e midiático, focado em narrativa pública, influência e comunicação.",
    passives: [
      {
        id: "fala_afiada",
        name: "Fala Afiada",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe +1 em testes sociais envolvendo humor, ironia ou provocação leve.",
      },
      {
        id: "olho_para_tendencias",
        name: "Olho para Tendências",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe vantagem em testes de Investigação para descobrir o que está rolando entre grupos sociais.",
      },
      {
        id: "presenca_digital",
        name: "Presença Digital",
        costPD: 2,
        rarity: "comum",
        description:
          "Uma vez por cena, obtém uma informação simples usando sua rede online.",
      },
      {
        id: "performance_natural",
        name: "Performance Natural",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe +1 em testes de Atuação.",
      },
      {
        id: "drama_calculado",
        name: "Drama Calculado",
        costPD: 3,
        rarity: "incomum",
        description:
          "Uma vez por cena, pode transformar uma falha leve social em sucesso parcial.",
      },
      {
        id: "engajamento_social",
        name: "Engajamento Social",
        costPD: 3,
        rarity: "incomum",
        description:
          "Aliados que agirem ao seu lado recebem +1 em ações sociais na mesma cena.",
      },
      {
        id: "influencia_midiatica",
        name: "Influência Midiática",
        costPD: 3,
        rarity: "incomum",
        description:
          "NPCs jovens têm maior tendência a confiar em você.",
      },
      {
        id: "criacao_de_narrativa",
        name: "Criação de Narrativa",
        costPD: 3,
        rarity: "incomum",
        description:
          "Pode suavizar socialmente uma situação ruim, reduzindo sua gravidade.",
      },
      {
        id: "viral_momentaneo",
        name: "Viral Momentâneo",
        costPD: 4,
        rarity: "rara",
        description:
          "Uma vez por cena, suas palavras ganham eco e você recebe grande bônus em interação com espectadores próximos.",
      },
      {
        id: "roteirista_da_realidade",
        name: "Roteirista da Realidade",
        costPD: 4,
        rarity: "rara",
        description:
          "Pode aplicar bônus em Enganação se tiver tempo para montar a narrativa.",
      },
      {
        id: "manipulador_de_audiencia",
        name: "Manipulador de Audiência",
        costPD: 4,
        rarity: "rara",
        description:
          "Reduz a dificuldade para convencer grupos inteiros.",
      },
      {
        id: "fama_local",
        name: "Fama Local",
        costPD: 4,
        rarity: "rara",
        description:
          "Pode pedir pequenos favores a NPCs que reconhecem você.",
      },
      {
        id: "influencia_de_massa",
        name: "Influência de Massa",
        costPD: 6,
        rarity: "epica",
        description:
          "Uma vez por cena, NPCs neutros em grupos grandes podem se tornar amigáveis por uma interação.",
      },
      {
        id: "imunidade_social",
        name: "Imunidade Social",
        costPD: 6,
        rarity: "epica",
        description:
          "Difamações e fofocas negativas têm impacto muito reduzido sobre sua reputação.",
      },
      {
        id: "historia_que_muda_destinos",
        name: "História que Muda Destinos",
        costPD: 7,
        rarity: "epica",
        description:
          "Uma vez por dia, pode influenciar drasticamente a postura de um NPC, tornando-a mais favorável.",
      },
    ],
  },

  maratonista: {
    id: "maratonista",
    name: "Maratonista",
    description:
      "Estilo resistente e disciplinado, focado em movimento, fôlego e constância física.",
    passives: [
      {
        id: "folego_inicial",
        name: "Fôlego Inicial",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe +1 de deslocamento e vantagem em testes simples de Atletismo.",
      },
      {
        id: "passo_preciso",
        name: "Passo Preciso",
        costPD: 2,
        rarity: "comum",
        description:
          "Recebe vantagem em testes para se equilibrar, saltar pequenos obstáculos e evitar escorregões.",
      },
      {
        id: "hidratacao_estrategica",
        name: "Hidratação Estratégica",
        costPD: 2,
        rarity: "comum",
        description:
          "Recupera +1 PF adicional em descansos curtos.",
      },
      {
        id: "resistencia_incomum",
        name: "Resistência Incomum",
        costPD: 3,
        rarity: "incomum",
        description:
          "Perde apenas metade das penalidades de exaustão física.",
      },
      {
        id: "pisada_estavel",
        name: "Pisada Estável",
        costPD: 3,
        rarity: "incomum",
        description:
          "Recebe +1 em testes de esquiva e movimento rápido em áreas apertadas.",
      },
      {
        id: "ritmo_de_prova",
        name: "Ritmo de Prova",
        costPD: 3,
        rarity: "incomum",
        description:
          "Uma vez por cena, reduz a dificuldade de uma ação física prolongada.",
      },
      {
        id: "corpo_adaptado",
        name: "Corpo Adaptado",
        costPD: 3,
        rarity: "incomum",
        description:
          "Não sofre penalidade por calor, frio ou clima ruim nas primeiras horas de exposição.",
      },
      {
        id: "marcar_ritmo_do_grupo",
        name: "Marcar Ritmo do Grupo",
        costPD: 4,
        rarity: "rara",
        description:
          "Em ações conjuntas que envolvam movimento, o grupo recebe +1 enquanto você liderar.",
      },
      {
        id: "pernas_de_ferro",
        name: "Pernas de Ferro",
        costPD: 4,
        rarity: "rara",
        description:
          "Ignora completamente o primeiro nível de exaustão física ou mental por cena.",
      },
      {
        id: "aproveitar_o_impulso",
        name: "Aproveitar o Impulso",
        costPD: 4,
        rarity: "rara",
        description:
          "Se passar em um teste de Atletismo por 3 ou mais, recebe +1 na próxima ação.",
      },
      {
        id: "persistencia_inabalavel",
        name: "Persistência Inabalável",
        costPD: 4,
        rarity: "rara",
        description:
          "Quando falhar por 1 ponto em um teste físico, pode rolar novamente.",
      },
      {
        id: "corredor_impossivel",
        name: "Corredor Impossível",
        costPD: 6,
        rarity: "epica",
        description:
          "Uma vez por cena, executa um deslocamento fisicamente absurdo, ultrapassando obstáculos e distâncias improváveis.",
      },
      {
        id: "folego_sobrehumano",
        name: "Fôlego Sobre-Humano",
        costPD: 7,
        rarity: "epica",
        description:
          "Nunca chega a 0 PF por esforço físico; em vez disso, permanece com 1 PF e evita exaustão mental por esse motivo.",
      },
    ],
  },
}