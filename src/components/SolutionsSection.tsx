import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Receipt, 
  Cpu, 
  Server, 
  Repeat, 
  GitMerge, 
  Compass, 
  ArrowRight, 
  Check, 
  X, 
  Sparkles,
  Layers,
  FileCheck
} from 'lucide-react';
import { SolutionItem } from '../types';
import { SOLUTIONS_DATA } from '../data/content';

interface SolutionsSectionProps {
  onOpenConsultation: (solutionTitle: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'governanca' | 'sap' | 'processos'>('all');
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Receipt': return Receipt;
      case 'Cpu': return Cpu;
      case 'Server': return Server;
      case 'Repeat': return Repeat;
      case 'GitMerge': return GitMerge;
      case 'Compass': return Compass;
      default: return Layers;
    }
  };

  const filteredSolutions = activeCategory === 'all'
    ? SOLUTIONS_DATA
    : SOLUTIONS_DATA.filter(s => s.category === activeCategory);

  return (
    <section id="solucoes" className="py-16 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              02. Portfólio de Soluções
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Especialização cirúrgica para desafios de alta complexidade.
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Controle orçamentário, aderência a padrões internacionais e valor tangível para o negócio.
            </p>
          </div>

          {/* Functional Filter Tabs (Segmented control) */}
          <div className="flex items-center p-1 bg-slate-900/80 rounded-xl border border-slate-800 shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todas (7)
            </button>
            <button
              onClick={() => setActiveCategory('governanca')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                activeCategory === 'governanca'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Governança & Estratégia
            </button>
            <button
              onClick={() => setActiveCategory('sap')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                activeCategory === 'sap'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ecossistema SAP
            </button>
            <button
              onClick={() => setActiveCategory('processos')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                activeCategory === 'processos'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Processos BPM
            </button>
          </div>
        </div>

        {/* Bento Grid of Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((item) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={item.id}
                className="glass-panel p-7 rounded-2xl flex flex-col justify-between group hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="text-cyan-400 font-bold">{item.number}</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{item.category === 'governanca' ? 'Governança' : item.category === 'sap' ? 'SAP Suite' : 'Processos'}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-950/60 text-cyan-400 border border-blue-500/20 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                    {item.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => setSelectedSolution(item)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-300 group-hover:text-white bg-slate-900/90 group-hover:bg-blue-600/90 border border-slate-800 group-hover:border-blue-500/50 rounded-lg transition-all duration-200 flex items-center justify-between mt-auto"
                >
                  <span>Conhecer Solução</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Solution Detail Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel bg-[#0B1220] border border-slate-700 max-w-2xl w-full rounded-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedSolution(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 transition-colors"
              aria-label="Fechar detalhes da solução"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <span>Solução {selectedSolution.number}</span>
              <span aria-hidden="true">·</span>
              <span>MOVE.ON Enterprise</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {selectedSolution.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {selectedSolution.description}
            </p>

            {/* Key Benefits */}
            <div className="mb-6 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Principais Benefícios para a Empresa</span>
              </h4>
              <div className="space-y-2">
                {selectedSolution.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Scope & Architecture */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>Escopo Técnico & Arquitetura</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSolution.technicalDetails.map((tech, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Entregáveis Contratuais (Deliverables)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSolution.deliverables.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  const title = selectedSolution.title;
                  setSelectedSolution(null);
                  onOpenConsultation(title);
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30 transition-colors flex items-center justify-center gap-2"
              >
                <span>Solicitar Diagnóstico desta Solução</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedSolution(null)}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-slate-400 hover:text-white bg-transparent rounded-lg transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
