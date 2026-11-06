import React from 'react';
import { Target, Compass, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onExploreBto: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreBto }) => {
  const pillars = [
    {
      icon: Target,
      title: 'Propósito Estratégico',
      desc: 'Descomplicar grandes agendas corporativas e garantir execução disciplinada com foco em ROI.'
    },
    {
      icon: Compass,
      title: 'Metodologia BTO',
      desc: 'Estrutura com 6 escritórios integrados (PMO, BMO, TMO, CMO, AMO, VMO) eliminando silos.'
    },
    {
      icon: Zap,
      title: 'Ecossistema SAP',
      desc: 'Migrações S/4HANA, adequação à Reforma Tributária (PEC 45) e Centro de Excelência (CoE).'
    },
    {
      icon: ShieldCheck,
      title: '+20 Anos de Confiança',
      desc: 'Histórico comprovado em clientes de grande porte como Grupo Cimed, Usina Coruripe e Arklok.'
    }
  ];

  return (
    <section id="quem-somos" className="py-16 bg-[#090E1A] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            01. Quem Somos
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
            A ponte entre a estratégia da diretoria e a execução operacional.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A <strong className="text-white font-semibold">MOVE.ON Consulting</strong> organiza, governa e acelera transformações complexas unindo projetos, processos, tecnologia e pessoas.
          </p>
        </div>

        {/* 2-Column Split: Visual Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          {/* Left Narrative Card */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                Governança integrada para projetos que não podem falhar
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Grandes projetos falham quando TI e Negócios correm descompassados. Com a metodologia proprietária <span className="text-cyan-400 font-medium">BTO</span> e a plataforma digital <span className="text-blue-400 font-medium">BTO.NOW</span>, garantimos previsibilidade total de custos, prazos e entregas.
              </p>

              {/* Quote Callout */}
              <div className="pt-4 border-t border-slate-800/80 flex items-start gap-3">
                <div className="w-1 bg-cyan-400 rounded-full self-stretch shrink-0" />
                <div>
                  <blockquote className="text-xs italic text-slate-200">
                    &ldquo;A transformação real acontece quando a estratégia da diretoria é praticada com disciplina em cada processo e sistema.&rdquo;
                  </blockquote>
                  <div className="text-[11px] text-slate-400 mt-1">
                    <span className="font-semibold text-white">Vandré Oliveira</span> · CEO & Fundador MOVE.ON
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <button
                onClick={onExploreBto}
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <span>Explorar os 6 Escritórios da Metodologia BTO</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Pillars in 2x2 grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-lg bg-blue-950/60 text-cyan-400 border border-blue-500/20 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact CTA Strip */}
        <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-slate-950/80 border border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-sm font-bold text-white block">
              Pronto para acelerar a transformação da sua empresa?
            </span>
            <span className="text-xs text-slate-400">
              Atuação executiva em todo o território nacional · Sede em São Paulo - SP
            </span>
          </div>

          <a
            href="#contato"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all whitespace-nowrap shrink-0"
          >
            Falar com a Liderança
          </a>
        </div>
      </div>
    </section>
  );
};
