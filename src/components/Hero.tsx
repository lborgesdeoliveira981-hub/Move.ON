import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Layers, Award, Play } from 'lucide-react';

interface HeroProps {
  onOpenSchedule: () => void;
  onOpenVideo?: (videoId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule, onOpenVideo }) => {
  const scrollToSolutions = () => {
    const el = document.getElementById('solucoes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#070B14]">
      {/* Background Cinematic Visual with Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_corporate_transformation_1793924623723.jpg"
          alt="MOVE.ON Consulting Corporate Boardroom"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 motion-safe:animate-pulse duration-[10000ms]"
        />
        {/* Measured dark gradient scrims for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/85 to-[#070B14]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-[#070B14]/80" />
        
        {/* Subtle high-tech geometric ambient grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Ambient atmospheric glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl">
          {/* Official Brand Symbol & Kicker at beginning */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-black/60 p-2 border border-[#fe3000]/40 backdrop-blur-md shadow-lg shadow-[#fe3000]/20 shrink-0">
              <img
                src="/assets/images/moveon-symbol.svg"
                alt="Símbolo Oficial MOVE.ON"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(254,48,0,0.5)]"
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#fe3000]">
              <span>Next Generation Consulting</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Business Transformation Office</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">São Paulo — Brasil</span>
            </div>
          </div>

          {/* Impact Main Title with official #fe3000 gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 text-balance">
            Transformamos estratégia em <span className="bg-gradient-to-r from-[#fe3000] via-[#ff785a] to-white bg-clip-text text-transparent">resultados reais.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
            Conectamos projetos, processos e tecnologia para acelerar a transformação dos negócios.
          </p>

          {/* Action Buttons: Video Explainer + Soluções + Contato */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-16">
            <button
              onClick={() => onOpenVideo?.('intro-bto')}
              className="px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#fe3000] to-[#c42400] hover:from-[#ff4a1c] hover:to-[#fe3000] active:scale-95 rounded-lg shadow-xl shadow-[#fe3000]/25 transition-all duration-200 flex items-center justify-center gap-2.5 group whitespace-nowrap shrink-0 border border-[#fe3000]/40"
            >
              <div className="w-5 h-5 rounded-full bg-white text-[#fe3000] flex items-center justify-center shrink-0 shadow-sm">
                <Play className="w-2.5 h-2.5 fill-[#fe3000] translate-x-0.5" />
              </div>
              <span>Assistir Vídeo Explicativo IA (1 min)</span>
            </button>

            <button
              onClick={scrollToSolutions}
              className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group whitespace-nowrap shrink-0"
            >
              <span>Conheça as soluções</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenSchedule}
              className="px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-white/5 rounded-lg transition-colors flex items-center justify-center whitespace-nowrap shrink-0"
            >
              <span>Fale com especialistas</span>
            </button>
          </div>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Metodologia BTO Proprietária</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Governança Crítica SAP S/4HANA</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Cases Comprovados (Cimed, Coruripe, Arklok)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Proof Metrics Strip (Strict 4-column balanced layout) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-xl glass-panel border border-slate-800/80">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              +20 Anos
            </span>
            <span className="text-xs text-slate-400 mt-1 font-medium">
              Experiência consolidada em governança corporativa
            </span>
          </div>

          <div className="flex flex-col border-l border-slate-800/80 pl-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums tracking-tight">
              100%
            </span>
            <span className="text-xs text-slate-400 mt-1 font-medium">
              Aderência em go-lives e marcos críticos SAP
            </span>
          </div>

          <div className="flex flex-col border-l border-slate-800/80 pl-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              6 Escritórios
            </span>
            <span className="text-xs text-slate-400 mt-1 font-medium">
              xMOs orquestrados no framework proprietário BTO
            </span>
          </div>

          <div className="flex flex-col border-l border-slate-800/80 pl-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono tabular-nums tracking-tight">
              BTO.NOW
            </span>
            <span className="text-xs text-slate-400 mt-1 font-medium">
              Plataforma tecnológica de visibilidade executiva
            </span>
          </div>
        </div>
      </div>

      {/* Gentle Scroll Hint */}
      <div className="relative z-10 flex justify-center mt-6">
        <a 
          href="#quem-somos" 
          className="text-slate-500 hover:text-slate-300 transition-colors p-2 flex flex-col items-center gap-1 group"
          aria-label="Rolar para a seção Quem Somos"
        >
          <span className="text-[10px] uppercase tracking-widest text-slate-400">Descubra</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
};
