import React, { useState } from 'react';
import { 
  FolderKanban, 
  Briefcase, 
  Cpu, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  Workflow,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { BtoOffice } from '../types';
import { BTO_OFFICES_DATA } from '../data/content';

export const BtoMethodologySection: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<BtoOffice>(BTO_OFFICES_DATA[0]);
  const [activeCycleStep, setActiveCycleStep] = useState<number>(0);

  const getOfficeIcon = (code: string) => {
    switch (code) {
      case 'PMO': return FolderKanban;
      case 'BMO': return Briefcase;
      case 'TMO': return Cpu;
      case 'CMO': return Users;
      case 'AMO': return ShieldCheck;
      case 'VMO': return TrendingUp;
      default: return Workflow;
    }
  };

  const cycleSteps = [
    {
      phase: '01. Discovery & Alinhamento',
      desc: 'Mapeamento das diretrizes estratégicas, business case e definição das metas de valor.',
      activeOffices: ['BMO', 'VMO']
    },
    {
      phase: '02. Blueprint & Arquitetura',
      desc: 'Desenho de processos To-Be, especificações técnicas e planejamento detalhado de portfólio.',
      activeOffices: ['BMO', 'TMO', 'PMO']
    },
    {
      phase: '03. Execução & Orquestração',
      desc: 'Comando de squads, sprints, entregáveis de integradores e rituais decisórios rígidos.',
      activeOffices: ['PMO', 'TMO']
    },
    {
      phase: '04. Adoção & Prontidão',
      desc: 'Capacitação prática das equipes, gestão da mudança e mitigação ativa de riscos.',
      activeOffices: ['CMO', 'AMO']
    },
    {
      phase: '05. Go-Live & Cutover',
      desc: 'Simulação milimétrica de corte, validação de conformidade e prontidão operacional.',
      activeOffices: ['PMO', 'AMO', 'TMO']
    },
    {
      phase: '06. Captura de Valor & Sustentação',
      desc: 'Medição contínua do ROI realizado na DRE, estabilização (hypercare) e melhoria contínua.',
      activeOffices: ['VMO', 'BMO']
    }
  ];

  return (
    <section id="metodologia-bto" className="py-16 bg-[#090E1A] relative border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            03. Metodologia Proprietária
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            BTO: Business Transformation Office
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
            Estrutura unificada com 6 escritórios que conecta estratégia a resultados reais com disciplina e previsibilidade.
          </p>
        </div>

        {/* 6 Offices Interactive Command Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: 6 Office Selector Grid & Interconnection Visual */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1 mb-2 flex items-center justify-between">
              <span>Selecione um Escritório Especializado:</span>
              <span className="text-cyan-400 font-mono text-[11px]">6 xMOs Integrados</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {BTO_OFFICES_DATA.map((office) => {
                const Icon = getOfficeIcon(office.code);
                const isSelected = selectedOffice.code === office.code;
                return (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOffice(office)}
                    className={`p-4 rounded-xl text-left transition-all duration-200 border relative overflow-hidden group ${
                      isSelected
                        ? 'bg-blue-950/80 border-cyan-400 shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-base font-extrabold font-mono tracking-tight ${isSelected ? 'text-cyan-400' : 'text-white'}`}>
                        {office.code}
                      </span>
                      <div 
                        className={`p-1.5 rounded-md ${
                          isSelected ? 'bg-cyan-400/20 text-cyan-300' : 'bg-slate-800 text-slate-400 group-hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-white mb-1 line-clamp-1">
                      {office.name.replace(' Office', '')}
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-1">
                      {office.subtitle.split('&')[0]}
                    </div>

                    {/* Active Edge Indicator */}
                    {isSelected && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Integration Concept Card */}
            <div className="mt-4 p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-2">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span>Interconexão do {selectedOffice.code}:</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                O <strong className="text-slate-200">{selectedOffice.code}</strong> atua em sincronia contínua compartilhando dados e rituais com os escritórios:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedOffice.connections.map((conn) => (
                  <span
                    key={conn}
                    className="px-2 py-0.5 text-xs font-mono font-medium rounded bg-slate-800 text-cyan-300 border border-slate-700"
                  >
                    {conn}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Interactive Office Viewer */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-slate-700/80 relative">
            <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  <span>Metodologia BTO MOVE.ON</span>
                  <span aria-hidden="true">·</span>
                  <span>Escritório de Especialidade</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedOffice.code} — {selectedOffice.name}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {selectedOffice.subtitle}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-400/20 text-cyan-300 border border-cyan-500/30 shrink-0">
                {React.createElement(getOfficeIcon(selectedOffice.code), { className: 'w-7 h-7' })}
              </div>
            </div>

            {/* Objective */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Objetivo Estratégico
              </h4>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                {selectedOffice.objective}
              </p>
            </div>

            {/* Responsibilities & Deliverables Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Responsabilidades Chave</span>
                </h4>
                <ul className="space-y-2">
                  {selectedOffice.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span className="leading-snug">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Entregáveis Contratuais</span>
                </h4>
                <ul className="space-y-2">
                  {selectedOffice.deliverables.map((deliv, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span className="leading-snug">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Client Benefits */}
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                Impacto Direto para o Cliente
              </h4>
              <div className="space-y-1.5">
                {selectedOffice.clientBenefits.map((ben, idx) => (
                  <div key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>{ben}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Transformation Cycle Interactive Flow */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
                Jornada Integrada
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Como os 6 escritórios atuam em cada fase da jornada
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              Clique nas etapas para explorar a colaboração entre os escritórios
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
            {cycleSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCycleStep(idx)}
                className={`p-3 rounded-lg text-left transition-all duration-200 border text-xs ${
                  activeCycleStep === idx
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md font-semibold'
                    : 'bg-slate-900/70 text-slate-400 hover:text-white border-slate-800'
                }`}
              >
                <div className="font-mono text-[10px] opacity-75 mb-1">Passo {idx + 1}</div>
                <div className="line-clamp-1">{step.phase.split('. ')[1]}</div>
              </button>
            ))}
          </div>

          {/* Active Step Showcase */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                {cycleSteps[activeCycleStep].phase}
              </span>
              <p className="text-sm sm:text-base text-slate-200 mt-1 leading-relaxed">
                {cycleSteps[activeCycleStep].desc}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs text-slate-400">Escritórios atuantes:</span>
              <div className="flex items-center gap-1.5">
                {cycleSteps[activeCycleStep].activeOffices.map((code) => (
                  <span
                    key={code}
                    className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-blue-950 text-cyan-400 border border-cyan-500/30"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
