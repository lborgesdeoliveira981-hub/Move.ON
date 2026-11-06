import { SolutionItem, BtoOffice, CaseStudy, LeaderItem, PartnerItem } from '../types';

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'governanca-projetos',
    number: '01',
    title: 'Governança de Projetos',
    shortDesc: 'Estruturação e comando de portfólios complexos para previsibilidade, mitigação de desvios e alinhamento executivo.',
    category: 'governanca',
    iconName: 'ShieldCheck',
    description: 'Transformamos iniciativas estratégicas em resultados mensuráveis estabelecendo rituais rigorosos de governança, frameworks ágeis e preditivos, controle orçamentário e comunicação transparente com os comitês diretivos.',
    benefits: [
      'Previsibilidade integral de prazos, custos e entregas do portfólio',
      'Mitigação preventiva de desvios antes do impacto financeiro',
      'Comitês de decisão ágeis com dados consolidados em tempo real',
      'Padronização metodológica alinhada aos padrões globais de mercado'
    ],
    technicalDetails: [
      'Alinhamento com PMI, PRINCE2 e frameworks ágeis híbridos (Agile/Waterfall)',
      'Gestão de riscos com matrizes probabilísticas e planos de contingência',
      'Estruturação de KPIs/OKRs corporativos vinculados ao plano estratégico',
      'Relatórios executivos executados em automação multi-nível'
    ],
    deliverables: [
      'Matriz de Governança e Rituais Decisórios',
      'Baseline de Portfólio & Curva S Financeira',
      'Relatórios de Status Executivo para C-Level',
      'Auditoria Contínua de Aderência Metodológica'
    ]
  },
  {
    id: 'reforma-tributaria-sap',
    number: '02',
    title: 'Reforma Tributária no SAP',
    shortDesc: 'Adequação arquitetural e fiscal do ecossistema SAP às exigências da PEC 45/19 (IBS, CBS e IS).',
    category: 'sap',
    iconName: 'Receipt',
    description: 'Assessoria estratégica e técnica na transição do complexo sistema tributário nacional para o novo modelo do IVA dual (IBS/CBS). Diagnosticamos o impacto em cadastros, pricing, regras de cálculo, emissão fiscal e relatórios do SAP ECC e S/4HANA.',
    benefits: [
      'Conformidade legal antecipada com as fases de transição da Reforma',
      'Eliminação de riscos de autuações e inconsistências fiscais no ERP',
      'Adaptação harmoniosa da Tax Engine nativa e soluções complementares (4s4.TAX)',
      'Otimização de créditos fiscais e simulações de impacto na margem'
    ],
    technicalDetails: [
      'Análise de GAP em estruturas de Pricing (Condition Techniques) e Tax Codes',
      'Avaliação de impacto em integrações com Mensagerias e DFE',
      'Parametrização do SAP Tax Compliance e SAP Document and Reporting Compliance (DRC)',
      'Estratégia de convivência dos regimes antigo e novo durante a transição'
    ],
    deliverables: [
      'Tax Assessment de Impacto no ERP SAP',
      'Roadmap de Adequação Sistêmica por Fase Legal',
      'Plano de Testes Integrados com Cenários Fiscais Complexos',
      'Capacitação das Equipes Fiscal e Contábil'
    ]
  },
  {
    id: 'centro-excelencia-sap',
    number: '03',
    title: 'Centro de Excelência SAP (CoE)',
    shortDesc: 'Estruturação de CoE interno para transformar a operação reativa em um motor de inovação contínua.',
    category: 'sap',
    iconName: 'Cpu',
    description: 'Apoiamos organizações na concepção, estruturação e maturidade de seus Centros de Excelência SAP, conectando as áreas de negócio à tecnologia para maximizar o retorno sobre o investimento em licenças e arquitetura.',
    benefits: [
      'Redução drástica do backlog de chamados e solicitações de melhoria',
      'Autonomia interna e retenção do capital intelectual da empresa',
      'Alinhamento direto entre demandas das diretorias de negócio e squads técnicas',
      'Adoção ágil de inovações nativas da SAP (Fiori, BTP, IA embarcada)'
    ],
    technicalDetails: [
      'Estruturação dos pilares: Pessoas, Processos, Ferramentas e Governança',
      'Definição de SLAs, SLOs e catálogo de serviços de suporte e evolução',
      'Implementação de esteiras DevOps para SAP com controle de transports e testes',
      'Modelagem de processos com SAP Signavio e monitoramento contínuo'
    ],
    deliverables: [
      'Blueprint Organizacional do CoE SAP',
      'Catálogo de Serviços e Matriz de Competências Técnicas',
      'Framework de Priorização de Demandas e Inovação',
      'Painel de Indicadores de Eficiência Operacional'
    ]
  },
  {
    id: 'governanca-projetos-sap',
    number: '04',
    title: 'Governança de Projetos SAP',
    shortDesc: 'Liderança independente e garantia da qualidade na implantação ou migração para o SAP S/4HANA.',
    category: 'sap',
    iconName: 'Server',
    description: 'Atuamos como o braço de confiança do cliente na gestão de integradores (System Integrators), assegurando que escopo, boas práticas SAP Activate, aderência ao standard e qualidade de código sejam rigorosamente cumpridos.',
    benefits: [
      'Blindagem contra aditivos contratuais desnecessários e estouros de orçamento',
      'Garantia de conformidade técnica e aderência máxima ao SAP Standard (Clean Core)',
      'Go-live seguro com plano de corte (Cutover) milimetricamente ensaiado',
      'Garantia de transição suave para a operação diária sem interrupção fabril/comercial'
    ],
    technicalDetails: [
      'Metodologia SAP Activate adaptada à realidade corporativa do cliente',
      'Auditoria de desenvolvimento ABAP/Fiori e controle de débitos técnicos',
      'Gestão rigorosa de Testes Integrados (SIT 1, SIT 2, UAT) e Cutover Simulation',
      'Validação de dados mestres e estratégias de conversão de legados'
    ],
    deliverables: [
      'Controle Independente de Cronograma, Custos e Deliverables do Integrador',
      'Quality Assurance e Parecer Técnico de Prontidão (Go/No-Go)',
      'Playbook de Cutover e Governança de Hypercare',
      'Matriz de Riscos de Integração com Sistemas Satélites'
    ]
  },
  {
    id: 'sustentacao-evolucao-sap',
    number: '05',
    title: 'Sustentação e Evolução do SAP',
    shortDesc: 'Modelo inteligente de AMS focado em estabilidade operacional, redução de custos e evolução contínua.',
    category: 'sap',
    iconName: 'Repeat',
    description: 'Muito além do suporte técnico convencional: fornecemos um ecossistema de sustentação e evolução contínua com foco em eliminação de causas-raiz de incidentes, automação de processos repetitivos e melhoria da experiência do usuário.',
    benefits: [
      'Estabilidade operacional com diminuição de até 45% nos incidentes recorrentes',
      'Atendimento consultivo especializado N1, N2 e N3 com SLAs agressivos',
      'Previsibilidade de custos com franquia de horas flexível e transparente',
      'Evolução contínua orientada às necessidades prioritárias do negócio'
    ],
    technicalDetails: [
      'Monitoramento preventivo e gestão de incidentes baseada em ITIL 4',
      'Gestão de Releases estruturadas com testes automatizados de regressão',
      'Aprimoramento contínuo de jobs em background e performance do banco HANA',
      'Consultores seniores com certificações oficiais SAP em múltiplos módulos'
    ],
    deliverables: [
      'Relatório Mensal de Saúde do Ambiente SAP',
      'Plano de Mitigação de Incidentes Reincidentes',
      'Roadmap Semestral de Melhorias e Pacotes de Evolução',
      'Gestão de Conhecimento e Documentação de Workarounds'
    ]
  },
  {
    id: 'gestao-processos-bpm',
    number: '06',
    title: 'Gestão de Processos (BPM)',
    shortDesc: 'Diagnóstico, mineração e redesenho de processos ponta a ponta para eficiência e redução de atrito operacional.',
    category: 'processos',
    iconName: 'GitMerge',
    description: 'Mapeamos, otimizamos e digitalizamos as cadeias de valor da empresa. Identificamos gargalos, redundâncias e desperdícios operacionais utilizando metodologias avançadas de Business Process Management e Process Mining com ferramentas como SAP Signavio.',
    benefits: [
      'Visão clara da jornada operacional ponta a ponta sem silos departamentais',
      'Redução de lead time e custos de processamento em fluxos core',
      'Base sólida e documentada para automações robóticas (RPA) e inteligência artificial',
      'Facilidade no onboarding de novos colaboradores e auditorias de conformidade'
    ],
    technicalDetails: [
      'Notação internacional BPMN 2.0 para modelagem e documentação',
      'Mineração de processos (Process Mining) com análise de logs transacionais reais',
      'Cálculo de capacidade produtiva, gargalos de handoff e custo por processo',
      'Integração direta com ferramentas como SAP Signavio, Camunda e Bizagi'
    ],
    deliverables: [
      'Mapeamento As-Is e Desenho To-Be com Otimizações Aprovadas',
      'Manual de Processos Corporativos e Políticas Operacionais',
      'Matriz de Responsabilidades (RACI) por Atividade',
      'Relatório de Ganhos de Eficiência e ROI Estimado'
    ]
  },
  {
    id: 'blueprint-estrategico',
    number: '07',
    title: 'Blueprint Estratégico',
    shortDesc: 'Desenho de arquitetura empresarial que conecta as metas de negócio à infraestrutura e sistemas.',
    category: 'governanca',
    iconName: 'Compass',
    description: 'Construímos o mapa mestre que orienta a tomada de decisão executiva em investimentos de tecnologia e processos. O Blueprint Estratégico estabelece a arquitetura-alvo para os próximos 3 a 5 anos, priorizando iniciativas de maior valor e menor risco.',
    benefits: [
      'Clareza total sobre o roadmap tecnológico e dependências entre iniciativas',
      'Alinhamento definitivo entre o Conselho de Administração, C-Suite e TI',
      'Eliminação de investimentos redundantes em ferramentas sem sinergia',
      'Orquestração precisa de transições para Cloud e novas plataformas digitais'
    ],
    technicalDetails: [
      'Estrutura baseada nos princípios do TOGAF e Arquitetura Empresarial Moderna',
      'Diagnóstico de maturidade digital em 5 dimensões: Negócio, Dados, Aplicações, Infra e Pessoas',
      'Análise de viabilidade técnica, econômica e regulatória das opções de mercado',
      'Matriz de priorização baseada em valor de negócio versus complexidade de implementação'
    ],
    deliverables: [
      'Documento de Arquitetura-Alvo Corporativa (Target Architecture)',
      'Roadmap Estratégico Multianual com Estimativa Orçamentária (CAPEX/OPEX)',
      'Matriz de Racionalização de Sistemas e Aplicações',
      'Plano Executivo de Comunicação para Stakeholders'
    ]
  }
];

export const BTO_OFFICES_DATA: BtoOffice[] = [
  {
    id: 'pmo',
    code: 'PMO',
    name: 'Project Management Office',
    subtitle: 'Gestão de Portfólio & Execução de Projetos',
    color: '#0066FF',
    objective: 'Garantir disciplina de execução, previsibilidade orçamentária, cumprimento de marcos críticos e entrega dos escopos acordados.',
    responsibilities: [
      'Gestão integrada de cronogramas, custos, recursos e dependências entre projetos',
      'Acompanhamento de entregas de parceiros e fornecedores de tecnologia',
      'Padronização de artefatos de gestão e rituais de status executivo',
      'Facilitação de resolução de impedimentos e escalonamento para comitês'
    ],
    deliverables: [
      'Curva S de Avanço Físico e Financeiro consolidada',
      'Plano de Marcos Críticos (Milestones) e Caminho Crítico',
      'Matriz de Riscos de Portfólio com Ações de Contenção',
      'One-Page Executive Reports para C-Level'
    ],
    clientBenefits: [
      'Redução de até 30% em desvios de prazo e custo em grandes implantações',
      'Previsibilidade executiva e fim de surpresas em reuniões de diretoria',
      'Controle centralizado dos integradores e terceiros envolvidos'
    ],
    connections: ['BMO', 'TMO', 'AMO', 'VMO']
  },
  {
    id: 'bmo',
    code: 'BMO',
    name: 'Business Management Office',
    subtitle: 'Gestão de Negócios & Alinhamento de Processos',
    color: '#00D2FF',
    objective: 'Assegurar que as soluções tecnológicas estejam 100% aderentes às necessidades operacionais e estratégicas das áreas de negócio.',
    responsibilities: [
      'Alinhamento contínuo entre diretores de negócio e líderes de projetos',
      'Redesenho e validação de processos As-Is e To-Be com os Key Users',
      'Validação funcional dos requisitos e regras de negócio complexas',
      'Garantia de que a eficiência operacional seja mantida durante a transição'
    ],
    deliverables: [
      'Matriz de Requisitos Funcionais Priorizados',
      'Cadeia de Valor e Fluxos Operacionais Validados',
      'Protocolos de Aceite Funcional das Áreas de Negócio',
      'Planos de Continuidade de Negócio durante transições'
    ],
    clientBenefits: [
      'Sistemas desenhados para atender ao negócio, e não o inverso',
      'Adesão imediata das áreas de Finanças, Suprimentos, Vendas e Operações',
      'Menos retrabalho após o go-live de soluções'
    ],
    connections: ['PMO', 'TMO', 'CMO', 'VMO']
  },
  {
    id: 'tmo',
    code: 'TMO',
    name: 'Technology Management Office',
    subtitle: 'Gestão de Tecnologia & Arquitetura de Sistemas',
    color: '#38BDF8',
    objective: 'Definir padrões de arquitetura, garantir segurança, integração técnica harmoniosa e longevidade dos ativos de tecnologia.',
    responsibilities: [
      'Definição da arquitetura técnica corporativa e padrões de integração',
      'Supervisão técnica de integradores SAP, cloud providers e fornecedores',
      'Avaliação de segurança da informação, performance e escalabilidade',
      'Garantia de aderência ao princípio Clean Core e redução de customizações'
    ],
    deliverables: [
      'Arquitetura Técnica de Solução e Diagramas de Integração',
      'Relatório de Code Review e Auditoria de Padrões Técnicos',
      'Plano de Testes de Stress, Performance e Volume',
      'Estratégia de Infraestrutura Cloud e Disaster Recovery'
    ],
    clientBenefits: [
      'Infraestrutura resiliente e preparada para escala sem gargalos',
      'Custo total de propriedade (TCO) reduzido no longo prazo',
      'Segurança e conformidade técnica atestadas por especialistas seniores'
    ],
    connections: ['PMO', 'BMO', 'AMO']
  },
  {
    id: 'cmo',
    code: 'CMO',
    name: 'Change Management Office',
    subtitle: 'Gestão de Mudanças & Adoção Cultural',
    color: '#818CF8',
    objective: 'Engajar as pessoas, capacitar equipes e superar a resistência à mudança para assegurar o uso pleno das novas soluções.',
    responsibilities: [
      'Mapeamento de impactos organizacionais e identificação de resistências',
      'Elaboração e execução do plano de comunicação corporativa',
      'Desenho de trilhas de treinamento e capacitação prática de usuários',
      'Monitoramento dos índices de adoção e satisfação pós-implantação'
    ],
    deliverables: [
      'Matriz de Impacto Organizacional por Área e Cargo',
      'Plano Estratégico de Comunicação e Campanhas de Engajamento',
      'Matriz de Treinamento com Materiais Práticos e Guias Rápidos',
      'Pesquisas de Prontidão (Readiness Assessment) e Adoção'
    ],
    clientBenefits: [
      'Adoção rápida das novas ferramentas pelos colaboradores',
      'Eliminação do atrito cultural e queda de produtividade no go-live',
      'Lideranças preparadas para atuar como embaixadores da transformação'
    ],
    connections: ['BMO', 'PMO', 'VMO']
  },
  {
    id: 'amo',
    code: 'AMO',
    name: 'Assurance Management Office',
    subtitle: 'Gestão de Riscos, Compliance & Qualidade',
    color: '#F59E0B',
    objective: 'Proteger a organização através da auditoria contínua de riscos, qualidade de entregáveis, conformidade fiscal e regulatória.',
    responsibilities: [
      'Identificação proativa e neutralização de riscos sistêmicos e operacionais',
      'Auditoria independente de aderência aos processos e políticas internas',
      'Garantia de conformidade com LGPD, SOX e legislações fiscais brasileiras',
      'Validação de planos de contingência e critérios de Go/No-Go'
    ],
    deliverables: [
      'Matriz Dinâmica de Riscos com Planos de Ação e Donos Definidos',
      'Pareceres de Conformidade Regulatória e Fiscal (Auditoria)',
      'Relatório de Qualidade de Dados Mestres e Parâmetros Contábeis',
      'Scorecard de Prontidão Operacional para Go-Live'
    ],
    clientBenefits: [
      'Zero surpresas fiscais ou passivos jurídicos decorrentes de novos sistemas',
      'Decisões de Go-Live embasadas em fatos e critérios objetivos',
      'Tranquilidade total para o comitê de auditoria e conselho'
    ],
    connections: ['PMO', 'TMO', 'VMO']
  },
  {
    id: 'vmo',
    code: 'VMO',
    name: 'Value Management Office',
    subtitle: 'Gestão de Valor & Captura de ROI',
    color: '#10B981',
    objective: 'Transformar o investimento do projeto em ganhos financeiros tangíveis, produtividade e sustentação do valor prometido no business case.',
    responsibilities: [
      'Construção e acompanhamento do Business Case financeiro da iniciativa',
      'Mensuração de métricas de benefício (redução de custos, ganho de margem)',
      'Identificação de oportunidades adicionais de captura de valor no pós-go-live',
      'Garantia de que o ROI projetado seja efetivamente realizado na DRE'
    ],
    deliverables: [
      'Modelo Financeiro de Captura de Benefícios (Benefit Realization)',
      'Dashboard de Acompanhamento do ROI com Metas Realizadas vs. Planejadas',
      'Relatório de Ganhos de Eficiência Operacional e Econômica',
      'Plano de Sustentação de Resultados de Longo Prazo'
    ],
    clientBenefits: [
      'Comprovação clara do retorno financeiro para os acionistas',
      'Foco inegociável nos objetivos que movem a agulha do negócio',
      'Fim de projetos que entregam escopo mas não entregam valor real'
    ],
    connections: ['PMO', 'BMO', 'CMO', 'AMO']
  }
];

export const CASES_DATA: CaseStudy[] = [
  {
    id: 'cimed',
    client: 'Grupo Cimed',
    sector: 'Indústria Farmacêutica',
    tagline: 'Governança de Dados Mestres cobrindo 100% das operações e ecossistema SAP',
    challenge: 'Com crescimento acelerado e alta complexidade fabril e de distribuição em todo o Brasil, o Grupo Cimed necessitava unificar e blindar a integridade de seus dados mestres (produtos, clientes, fornecedores e materiais), eliminando inconsistências operacionais e fiscais em seu ERP.',
    solution: 'A MOVE.ON Consulting implantou uma solução completa de Governança de Dados Mestres, estabelecendo rituais de saneamento, regras de validação automatizadas, esteiras de aprovação integradas e uma matriz de responsabilidades clara conectada ao ecossistema SAP.',
    results: [
      '100% das operações corporativas e fabris integradas à nova governança',
      'Padronização integral de taxonomias e regras cadastrais críticas',
      'Redução substancial de retrabalhos em faturamento, logística e compras',
      'Conformidade rigorosa com normas regulatórias farmacêuticas (Anvisa) e fiscais'
    ],
    technologies: ['Ecossistema SAP', 'Governança BTO', 'Gestão de Dados Mestres', 'BPM'],
    highlightMetric: '100%',
    highlightLabel: 'das operações integradas sob governança de dados',
    image: '/src/assets/images/enterprise_cases_showcase_1793924623931.jpg'
  },
  {
    id: 'usina-coruripe',
    client: 'Usina Coruripe',
    sector: 'Agronegócio & Sucroalcooleiro',
    tagline: 'Go-Live de alta complexidade na migração do SAP ECC para S/4HANA RISE',
    challenge: 'Modernizar a espinha dorsal tecnológica da unidade de Iturama/MG, migrando a infraestrutura legada do SAP ECC para o avançado SAP S/4HANA RISE sem paralisar a produção agrícola, o refino industrial e o escoamento logístico em um setor de operação ininterrupta 24/7.',
    solution: 'Aplicação da metodologia BTO na condução da governança do projeto, orquestrando integradores, testes de corte (cutover simulation), validações fiscais e transição operacional com gestão ativa de riscos através dos escritórios PMO, TMO e AMO.',
    results: [
      'Go-live realizado com sucesso absoluto no prazo estipulado',
      'Zero interrupção nas linhas fabris e no processo de moagem de cana',
      'Transição estável da contabilidade, suprimentos e logística no S/4HANA',
      'Redução no tempo de fechamento contábil e ganhos de performance com banco in-memory'
    ],
    technologies: ['SAP S/4HANA RISE', 'Metodologia BTO', 'SAP Cutover Governance', 'AMO Risk Matrix'],
    highlightMetric: 'Zero',
    highlightLabel: 'interrupção de produção durante o go-live de migração',
    image: '/src/assets/images/bto_methodology_datacenter_1793924623253.jpg'
  },
  {
    id: 'arklok',
    client: 'Arklok Tecnologia',
    sector: 'Tecnologia & Infraestrutura de TI',
    tagline: 'Implantação do Ecossistema Integrado de Atendimento e Governança de Processos',
    challenge: 'A Arklok, líder nacional em outsourcing de infraestrutura de TI corporativa, precisava transformar e unificar seus canais de atendimento, suporte técnico e gestão de ativos de clientes para sustentar sua rápida expansão de base mantendo índices de excelência.',
    solution: 'A MOVE.ON estruturou o ecossistema integrado de atendimento, modelando processos de ponta a ponta (BPM), redesenhando a esteira de chamados, integrando plataformas de suporte aos sistemas core e capacitando a liderança operacional.',
    results: [
      'Ecossistema de atendimento 100% integrado e operacional',
      'Aumento significativo na resolução de primeiro nível (First Call Resolution)',
      'Rastreabilidade total do ciclo de vida dos equipamentos e SLAs contratuais',
      'Maior satisfação e fidelização dos clientes corporativos (NPS elevado)'
    ],
    technologies: ['Ecossistema de Atendimento', 'BPM Process Mining', 'Governança Operacional', 'BTO Framework'],
    highlightMetric: '+40%',
    highlightLabel: 'ganho de velocidade no atendimento e fluxo de chamados',
    image: '/src/assets/images/hero_corporate_transformation_1793924623723.jpg'
  }
];

export const LEADERSHIP_DATA: LeaderItem[] = [
  {
    id: 'vandre-oliveira',
    name: 'Vandré Oliveira',
    role: 'CEO & Fundador',
    isFounder: true,
    bio: '+20 anos liderando iniciativas de transformação no ecossistema SAP, conectando estratégia, tecnologia, processos e governança para gerar mais clareza, controle e resultado em grandes empresas.',
    experienceYears: '+20 anos',
    expertise: [
      'Business Transformation Office (BTO)',
      'Ecossistema SAP & S/4HANA',
      'Governança de Grandes Portfólios',
      'Estratégia Corporativa & C-Level Advisory'
    ],
    image: '/assets/lideranca/vandre-oliveira.png',
    socialLinkedin: 'https://www.linkedin.com/in/vandr%C3%A9-oliveira-b5316298/'
  },
  {
    id: 'ana-senko',
    name: 'Ana Senko',
    role: 'Head de Operações',
    bio: 'Liderança executiva em Estratégia, Operações Corporativas, Finanças e Gestão de Backoffice de alta performance.',
    experienceYears: '+15 anos',
    expertise: [
      'Gestão de Operações & Backoffice',
      'Controladoria & Planejamento Financeiro',
      'Governança Corporativa'
    ],
    image: '/assets/lideranca/ana-senko.png',
    socialLinkedin: 'https://www.linkedin.com/in/ana-carolina-melim-senko-171717b/'
  },
  {
    id: 'vinicios-garcia',
    name: 'Vinícios Garcia',
    role: 'Head de Processos & Testes',
    bio: 'Especialista em Centro de Excelência SAP, Gestão de Processos Ponta a Ponta, SAP Signavio e Estruturação de Testes Integrados.',
    experienceYears: '+14 anos',
    expertise: [
      'Centro de Excelência SAP (CoE)',
      'SAP Signavio & Process Mining',
      'Testes Integrados & Qualidade'
    ],
    image: '/assets/lideranca/vinicios-garcia.png',
    socialLinkedin: 'https://www.linkedin.com/in/vinicios-garcia-21945643/'
  },
  {
    id: 'fabio-fernandes',
    name: 'Fábio Fernandes',
    role: 'Head de Tax & S/4 Operate',
    bio: 'Autoridade na Reforma Tributária no SAP (PEC 45 / IBS / CBS), melhorias e sustentação contínua de demandas SAP S/4HANA.',
    experienceYears: '+16 anos',
    expertise: [
      'Reforma Tributária no SAP',
      'Tax Compliance & Soluções Fiscais',
      'SAP S/4HANA Operate & AMS'
    ],
    image: '/assets/lideranca/fabio-fernandes.png',
    socialLinkedin: 'https://www.linkedin.com/in/fabio-fernandes-29a33162/'
  },
  {
    id: 'marylice-antunes',
    name: 'Marylice Antunes',
    role: 'Head SAP',
    bio: 'Governança de Grandes Programas S/4HANA, PMO as a Service, Gestão de Mudança Organizacional e Adoção Cultural.',
    experienceYears: '+18 anos',
    expertise: [
      'Governança de Programas S/4HANA',
      'PMO as a Service',
      'Change Management (CMO)'
    ],
    image: '/assets/lideranca/marylice-antunes.png',
    socialLinkedin: 'https://www.linkedin.com/in/marylice-antunes-96410a49/'
  }
];

export const PARTNERS_DATA: PartnerItem[] = [
  {
    name: 'SAP Partner Ecosystem',
    category: 'Plataforma Corporativa Core',
    description: 'Atuação especializada no ecossistema SAP S/4HANA, SAP Signavio, SAP DRC e parametrização para a Reforma Tributária Nacional.',
    tag: 'SAP Gold Alignment'
  },
  {
    name: 'Amazon Web Services (AWS)',
    category: 'Infraestrutura Cloud & Resiliência',
    description: 'Parceria oficial para desenho de arquiteturas híbridas e em nuvem de alta disponibilidade, sustentando ERPs e plataformas de dados.',
    tag: 'Cloud Partner'
  },
  {
    name: 'Google Cloud Platform',
    category: 'Big Data, Analytics & IA',
    description: 'Integração de dados corporativos para inteligência de negócios avançada, modelagem preditiva e automação de governança.',
    tag: 'Cloud Partner'
  },
  {
    name: 'ASUG Brasil',
    category: 'Comunidade Oficial de Usuários SAP',
    description: 'Membro ativo da Associação de Usuários de Sistemas de Aplicações e Produtos, liderando discussões sobre melhores práticas no país.',
    tag: 'Membro Ativo'
  }
];

export const BTO_NOW_METRICS = {
  activeProjects: 42,
  onScheduleRate: 94.6,
  budgetAdherence: 98.2,
  risksControlled: 100,
  capturedRoi: 'R$ 38.4M',
  governanceScore: 'A+'
};
