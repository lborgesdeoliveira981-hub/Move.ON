export interface VideoBriefing {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  presenter: {
    name: string;
    role: string;
    avatar: string;
  };
  thumbnail: string;
  category: 'institucional' | 'metodologia' | 'sap' | 'plataforma';
  summaryBullets: string[];
  scriptParagraphs: string[];
  audioNarrative: string;
}

export const VIDEO_BRIEFINGS: VideoBriefing[] = [
  {
    id: 'intro-bto',
    title: 'Visão Geral MOVE.ON & Metodologia BTO',
    subtitle: 'Como conectamos projetos, processos e tecnologia para acelerar o crescimento empresarial.',
    duration: '01:20',
    presenter: {
      name: 'Sofia Valente',
      role: 'Apresentadora Executiva IA · MOVE.ON',
      avatar: '/src/assets/images/ai_presenter_female_1793925327453.jpg'
    },
    thumbnail: '/src/assets/images/ai_presenter_female_1793925327453.jpg',
    category: 'institucional',
    summaryBullets: [
      'Alinhamento direto entre a agenda da diretoria e a execução no chão de fábrica e sistemas',
      'Eliminação de silos entre TI, Finanças, Suprimentos e Operações',
      'Governança unificada que protege orçamentos e prazos'
    ],
    scriptParagraphs: [
      'Olá! Bem-vindo à MOVE.ON Consulting. Muitas organizações enfrentam um abismo entre as estratégias desenhadas no conselho e a execução prática no dia a dia.',
      'Nossa metodologia proprietária BTO — Business Transformation Office — foi criada exatamente para resolver isso. Nós integramos projetos, processos de negócio, arquitetura tecnológica e gestão de pessoas em um único comando.',
      'O resultado? Previsibilidade orçamentária, zero surpresas em reuniões de diretoria e retorno financeiro comprovado na sua DRE.'
    ],
    audioNarrative: 'Olá! Bem-vindo à MOVE.ON Consulting. Nossa metodologia proprietária Business Transformation Office conecta estratégia à execução prática. Integramos projetos, processos de negócio, ecossistema SAP e gestão da mudança em uma governança unificada. O resultado é previsibilidade orçamentária e retorno financeiro comprovado na DRE da sua empresa.'
  },
  {
    id: '6-escritorios',
    title: 'Os 6 Escritórios da Metodologia BTO',
    subtitle: 'Conheça o PMO, BMO, TMO, CMO, AMO e VMO trabalhando em perfeita sincronia.',
    duration: '01:45',
    presenter: {
      name: 'Lucas Brandão',
      role: 'Especialista em Governança IA · MOVE.ON',
      avatar: '/src/assets/images/ai_presenter_male_1793925328635.jpg'
    },
    thumbnail: '/src/assets/images/ai_video_bto_demonstration_1793925329058.jpg',
    category: 'metodologia',
    summaryBullets: [
      'PMO & BMO: Controle rigoroso de portfólio alinhado às necessidades reais do negócio',
      'TMO & AMO: Arquitetura tecnológica resiliente e blindagem contínua contra riscos',
      'CMO & VMO: Engajamento cultural das equipes e garantia de captura de ROI financeiro'
    ],
    scriptParagraphs: [
      'Entenda como os 6 escritórios da metodologia BTO funcionam de forma orquestrada na sua empresa.',
      'O PMO cuida da disciplina de prazos e custos. O BMO assegura que os processos atendam à operação. O TMO garante arquitetura e padrões técnicos.',
      'Enquanto o CMO capacita as equipes para adotar as mudanças, o AMO monitora riscos e conformidade fiscal, e o VMO mede o retorno sobre o investimento em cada entrega.'
    ],
    audioNarrative: 'Entenda como os seis escritórios da metodologia BTO funcionam de forma orquestrada. O PMO cuida de prazos e custos. O BMO alinha processos ao negócio. O TMO garante arquitetura técnica de ponta. O CMO lidera a adoção cultural das equipes. O AMO blinda a empresa contra riscos e conformidade fiscal. E o VMO comprova o ROI financeiro na sua DRE.'
  },
  {
    id: 'reforma-tributaria',
    title: 'Reforma Tributária no SAP (PEC 45)',
    subtitle: 'Impactos no ERP, transição CBS/IBS e adaptação de regras fiscais sem interromper o negócio.',
    duration: '01:15',
    presenter: {
      name: 'Sofia Valente',
      role: 'Apresentadora Executiva IA · MOVE.ON',
      avatar: '/src/assets/images/ai_presenter_female_1793925327453.jpg'
    },
    thumbnail: '/src/assets/images/ai_presenter_female_1793925327453.jpg',
    category: 'sap',
    summaryBullets: [
      'Diagnóstico antecipado em parametrizações de Pricing e Tax Engine no SAP',
      'Convivência simultânea entre regimes tributários sem impacto na emissão fiscal',
      'Adoção de aceleradores como a suíte 4s4.TAX e SAP DRC homologado'
    ],
    scriptParagraphs: [
      'A nova Reforma Tributária traz o maior desafio fiscal das últimas décadas para quem opera o SAP no Brasil.',
      'A MOVE.ON conduz o diagnóstico de gaps, adequando cadastros, regras de cálculo e parametrizações com antecedência segura.',
      'Protegemos sua empresa contra autuações e garantimos conformidade em todas as fases de transição.'
    ],
    audioNarrative: 'A Reforma Tributária traz uma transformação profunda para o ecossistema SAP no Brasil. Com a substituição gradual de tributos por IBS e CBS, a MOVE.ON conduz o diagnóstico de gaps e adequa a Tax Engine, parametrizações e integrações fiscais, blindando sua empresa contra autuações.'
  },
  {
    id: 'plataforma-bto-now',
    title: 'BTO.NOW: Plataforma Executiva em Ação',
    subtitle: 'Demonstração dos dashboards de controle em tempo real para C-Level e PMO.',
    duration: '01:30',
    presenter: {
      name: 'Lucas Brandão',
      role: 'Especialista em Governança IA · MOVE.ON',
      avatar: '/src/assets/images/ai_presenter_male_1793925328635.jpg'
    },
    thumbnail: '/src/assets/images/ai_presenter_male_1793925328635.jpg',
    category: 'plataforma',
    summaryBullets: [
      'Visão única para diretoria: Curva S consolidada e índices de saúde física e financeira',
      'Alertas preditivos automáticos antes que desvios afetem o cronograma',
      'Acompanhamento transparente de metas e comprovação de benefícios econômicos'
    ],
    scriptParagraphs: [
      'Chega de relatórios estáticos em planilhas que chegam desatualizados na reunião de conselho.',
      'O BTO.NOW consolida dados de múltiplos sistemas e equipes em dashboards executivos em tempo real.',
      'Você monitora o avanço das squads, identifica gargalos preventivamente e acompanha o valor gerado para os acionistas.'
    ],
    audioNarrative: 'Conheça o BTO.NOW, a plataforma digital proprietária da MOVE.ON. Esqueça planilhas estáticas desatualizadas. O BTO.NOW entrega indicadores executivos em tempo real, alertando a diretoria preventivamente sobre desvios e comprovando o retorno de cada projeto.'
  }
];
