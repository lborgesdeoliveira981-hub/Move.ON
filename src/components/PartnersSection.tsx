import React from 'react';
import { PARTNERS_DATA } from '../data/content';
import { Layers, CheckCircle2, Shield, Globe } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#090E1A] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            07. Ecossistema Tecnológico & Alianças
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Parceiros Globais & Tecnologias de Ponta
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Alinhamento estratégico e técnico com os maiores fornecedores de plataformas empresariais do mundo.
          </p>
        </div>

        {/* 4 Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERS_DATA.map((partner) => (
            <div
              key={partner.name}
              className="glass-panel p-6 rounded-xl border border-slate-800/80 flex flex-col justify-between hover:border-slate-700 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-blue-950/80 border border-blue-900/60">
                    {partner.tag}
                  </span>
                  <Shield className="w-4 h-4 text-slate-500" />
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {partner.name}
                </h3>
                <div className="text-xs text-slate-400 font-medium mb-3">
                  {partner.category}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Integração Homologada BTO</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies strip */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-wrap items-center justify-around gap-6 text-slate-400 text-xs font-mono">
          <span className="text-slate-200 font-bold">SAP S/4HANA</span>
          <span aria-hidden="true" className="text-slate-700">|</span>
          <span className="text-slate-200 font-bold">SAP Signavio</span>
          <span aria-hidden="true" className="text-slate-700">|</span>
          <span className="text-slate-200 font-bold">4s4.TAX (Reforma Tributária)</span>
          <span aria-hidden="true" className="text-slate-700">|</span>
          <span className="text-slate-200 font-bold">AWS Cloud ERP</span>
          <span aria-hidden="true" className="text-slate-700">|</span>
          <span className="text-slate-200 font-bold">BTO.NOW Engine</span>
        </div>
      </div>
    </section>
  );
};
