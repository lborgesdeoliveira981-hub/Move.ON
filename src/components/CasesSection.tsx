import React, { useState } from 'react';
import { Building2, ArrowRight, CheckCircle2, ChevronRight, X, ExternalLink } from 'lucide-react';
import { CaseStudy } from '../types';
import { CASES_DATA } from '../data/content';

export const CasesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="cases" className="py-16 bg-[#090E1A] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            05. Histórico & Resultados Comprovados
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Cases reais com resultados mensuráveis.
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
            Grandes corporações brasileiras confiam na MOVE.ON para liderar suas maiores jornadas de transformação.
          </p>
        </div>

        {/* 3 Featured Case Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASES_DATA.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-2xl overflow-hidden border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Case Visual Cover */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.client}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-70"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                
                {/* Sector Chip */}
                <div className="absolute top-4 left-4 text-[11px] font-semibold text-slate-200 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/80 backdrop-blur-sm">
                  {item.sector}
                </div>

                {/* Highlight Metric Pill on cover */}
                <div className="absolute bottom-4 left-4 right-4 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-cyan-400 font-mono">
                    {item.highlightMetric}
                  </span>
                  <span className="text-xs text-slate-300 font-medium line-clamp-1">
                    {item.highlightLabel}
                  </span>
                </div>
              </div>

              {/* Case Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.client}
                  </h3>
                  <p className="text-xs font-medium text-slate-300 mb-4 line-clamp-2">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {item.challenge}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-auto">
                  <button
                    onClick={() => setSelectedCase(item)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 group-hover:text-white bg-slate-900 border border-slate-800 rounded-lg group-hover:border-cyan-500/40 flex items-center justify-between transition-colors"
                  >
                    <span>Ver Estudo de Caso Completo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="glass-panel bg-[#0B1220] border border-slate-700 max-w-3xl w-full rounded-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
              aria-label="Fechar case"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
              <span>{selectedCase.sector}</span>
              <span aria-hidden="true">·</span>
              <span>Case Comprovado MOVE.ON</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {selectedCase.client}
            </h3>
            <p className="text-sm font-medium text-slate-300 mb-6">
              {selectedCase.tagline}
            </p>

            {/* Metric Banner */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 mb-6 flex items-center gap-4">
              <span className="text-3xl font-extrabold font-mono text-cyan-400">
                {selectedCase.highlightMetric}
              </span>
              <span className="text-xs sm:text-sm text-slate-300">
                {selectedCase.highlightLabel}
              </span>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4 mb-6 text-xs sm:text-sm text-slate-300">
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1">O Desafio do Cliente</h4>
                <p className="leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">{selectedCase.challenge}</p>
              </div>

              <div>
                <h4 className="font-bold text-cyan-400 uppercase text-xs tracking-wider mb-1">A Solução MOVE.ON & Metodologia BTO</h4>
                <p className="leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">{selectedCase.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-6">
              <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-3">Resultados Comprovados</h4>
              <div className="space-y-2">
                {selectedCase.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-2">Plataformas & Tecnologias Envolvidas</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCase.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-6 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg"
              >
                Fechar Estudo de Caso
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
