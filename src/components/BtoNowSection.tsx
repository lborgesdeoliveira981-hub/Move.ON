import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  AlertTriangle, 
  TrendingUp, 
  ShieldCheck, 
  Bell, 
  SlidersHorizontal,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';
import { BTO_NOW_METRICS } from '../data/content';

export const BtoNowSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'executive' | 'pmo' | 'amo' | 'vmo'>('executive');
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const [selectedPeriod, setSelectedPeriod] = useState<string>('2026.Q1');

  return (
    <section id="bto-now" className="py-24 bg-[#070B14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
              04. Plataforma Digital Proprietária
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              BTO.NOW — Visibilidade executiva em tempo real.
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
              A plataforma tecnológica da MOVE.ON que centraliza a governança de portfólios, indicadores de saúde operacional, acompanhamento de marcos críticos e comprovação de resultados para o C-Level.
            </p>
          </div>

          {/* Demonstration Notice */}
          <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-slate-300 flex items-center gap-2.5 shrink-0 self-start lg:self-auto">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span className="font-medium text-slate-200">Demonstração Conceitual Executiva</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Mockup Interativo</span>
          </div>
        </div>

        {/* Dashboard Frame Container */}
        <div className="rounded-2xl glass-panel border border-slate-700/80 p-5 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Top Bar of the Mockup */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            {/* Mockup Brand & Status */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                NOW
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>BTO.NOW Enterprise Suite</span>
                  <span className="text-[10px] font-mono text-cyan-400 px-1.5 py-0.5 rounded bg-blue-950 border border-blue-800">
                    Live Demo
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  Ambiente de Demonstração Executiva · Portfólio Corporativo
                </div>
              </div>
            </div>

            {/* Timeframe & Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-slate-400 bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="bg-transparent text-slate-200 text-xs focus:outline-none cursor-pointer"
                  aria-label="Período de Demonstração"
                >
                  <option value="2026.Q1" className="bg-slate-900">1º Trimestre 2026</option>
                  <option value="2026.Q2" className="bg-slate-900">2º Trimestre 2026</option>
                  <option value="2025.FULL" className="bg-slate-900">Consolidado 2025</option>
                </select>
              </div>

              <button
                onClick={() => setAlertActive(!alertActive)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 ${
                  alertActive
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                }`}
              >
                <Bell className="w-3.5 h-3.5 text-amber-400" />
                <span>{alertActive ? 'Alerta Ativo' : 'Simular Alerta'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Perspective Tabs */}
          <div className="flex items-center gap-2 pt-6 pb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('executive')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'executive'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Visão Executiva (C-Level)</span>
            </button>

            <button
              onClick={() => setActiveTab('pmo')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'pmo'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Saúde do Portfólio (PMO)</span>
            </button>

            <button
              onClick={() => setActiveTab('amo')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'amo'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Matriz de Riscos (AMO)</span>
            </button>

            <button
              onClick={() => setActiveTab('vmo')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'vmo'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Captura de ROI & Valor (VMO)</span>
            </button>
          </div>

          {/* Alert Banner if toggled */}
          {alertActive && (
            <div className="mb-6 p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 text-amber-200 text-xs flex items-center justify-between gap-4 animate-in fade-in">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <strong className="font-semibold text-white">Alerta de Governança Preventiva:</strong> Integração SAP S/4HANA com Mensageria Fiscal demandando alinhamento adicional com squad de parametrização.
                </div>
              </div>
              <button 
                onClick={() => setAlertActive(false)}
                className="text-amber-400 hover:text-white text-xs underline shrink-0"
              >
                Dispensar
              </button>
            </div>
          )}

          {/* Tab 1: Executive C-Level View */}
          {activeTab === 'executive' && (
            <div className="space-y-6">
              {/* 4 Metric Badges */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Índice de Governança Global</div>
                  <div className="text-2xl font-bold font-mono text-cyan-400 tabular-nums">98.4%</div>
                  <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Conformidade A+ auditada</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Aderência ao Orçamento (CAPEX)</div>
                  <div className="text-2xl font-bold font-mono text-white tabular-nums">98.2%</div>
                  <div className="text-[11px] text-slate-400 mt-1">Desvio máximo &lt; 2%</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Projetos no Prazo Previsto</div>
                  <div className="text-2xl font-bold font-mono text-white tabular-nums">94.6%</div>
                  <div className="text-[11px] text-cyan-400 mt-1">40 de 42 entregas no marco</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">ROI Realizado na DRE</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">{BTO_NOW_METRICS.capturedRoi}</div>
                  <div className="text-[11px] text-emerald-300 mt-1">+18% vs. Business Case original</div>
                </div>
              </div>

              {/* Graphic Mockup: Curva S & Status */}
              <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">Curva S de Avanço Físico & Financeiro Consolidada</h4>
                    <p className="text-xs text-slate-400">Progresso planejado vs. realizado em todas as frentes de transformação</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-0.5 bg-cyan-400" />
                      <span className="text-slate-300">Realizado</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-0.5 bg-slate-600 border border-dashed" />
                      <span className="text-slate-400">Linha de Base (Baseline)</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Chart Bars / Progress Area */}
                <div className="space-y-4 pt-2">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Frente 1: Adequação Fiscal SAP Reforma Tributária</span>
                      <span className="font-mono text-cyan-400">92% concluído</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Frente 2: Migração S/4HANA RISE (Cutover Prep)</span>
                      <span className="font-mono text-cyan-400">86% concluído</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" style={{ width: '86%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Frente 3: Redesenho de Processos BPM (SAP Signavio)</span>
                      <span className="font-mono text-cyan-400">100% homologado</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: PMO Portfolio Health */}
          {activeTab === 'pmo' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-2">Painel de Marcos Críticos (PMO Milestones)</h4>
                <div className="divide-y divide-slate-800 text-xs">
                  <div className="py-2.5 flex items-center justify-between">
                    <div>
                      <span className="text-white font-medium">M1. Homologação dos Cenários de Testes Integrados (SIT 2)</span>
                      <div className="text-slate-400 text-[11px]">Sprint 14 · Responsável: Squad SAP Core</div>
                    </div>
                    <span className="text-emerald-400 font-mono font-semibold">Concluído</span>
                  </div>

                  <div className="py-2.5 flex items-center justify-between">
                    <div>
                      <span className="text-white font-medium">M2. Simulação de Corte (Cutover Dry-Run 1)</span>
                      <div className="text-slate-400 text-[11px]">Janela de 36h estimada · Sem impacto fabril</div>
                    </div>
                    <span className="text-cyan-400 font-mono font-semibold">Em Andamento (85%)</span>
                  </div>

                  <div className="py-2.5 flex items-center justify-between">
                    <div>
                      <span className="text-white font-medium">M3. Treinamento de Key Users & Multiplicadores (CMO)</span>
                      <div className="text-slate-400 text-[11px]">420 colaboradores capacitados em trilha digital</div>
                    </div>
                    <span className="text-cyan-400 font-mono font-semibold">Programado (Próx. Semana)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: AMO Risk Matrix */}
          {activeTab === 'amo' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-3">Matriz Dinâmica de Riscos Corporativos (AMO)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                    <span className="text-emerald-400 font-bold uppercase text-[10px]">Risco Baixo / Mitigado</span>
                    <div className="font-semibold text-white mt-1">Conectividade e Banco HANA</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Testes de stress superaram requisitos de SLA.</div>
                  </div>

                  <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-800/40">
                    <span className="text-cyan-400 font-bold uppercase text-[10px]">Risco Controlado</span>
                    <div className="font-semibold text-white mt-1">Saneamento de Dados Mestres</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Esteira de validação automática ativa com 99.4% de precisão.</div>
                  </div>

                  <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800/40">
                    <span className="text-amber-400 font-bold uppercase text-[10px]">Atenção Contínua</span>
                    <div className="font-semibold text-white mt-1">Atualizações Legais da PEC 45</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Time fiscal MOVE.ON acompanhando notas técnicas semanais.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: VMO ROI Realization */}
          {activeTab === 'vmo' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-3">Rastreamento de Benefícios Econômicos & ROI (VMO)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-slate-400">Redução de Custos de Processamento</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-1">R$ 14.2M / ano</div>
                    <div className="text-[11px] text-slate-400 mt-1">Otimização em suprimentos e logística integrada</div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-slate-400">Eficiência Fiscal & Créditos Otimizados</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-1">R$ 24.2M</div>
                    <div className="text-[11px] text-slate-400 mt-1">Compliance automatizado e prevenção de bitributação</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
