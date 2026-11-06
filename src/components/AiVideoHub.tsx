import React from 'react';
import { Play, Sparkles, Volume2, Clock, CheckCircle2, Video } from 'lucide-react';
import { VIDEO_BRIEFINGS, VideoBriefing } from '../data/videoBriefings';

interface AiVideoHubProps {
  onOpenVideo: (videoId: string) => void;
}

export const AiVideoHub: React.FC<AiVideoHubProps> = ({ onOpenVideo }) => {
  return (
    <section id="videos-ia" className="py-20 bg-[#070B14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Apresentações em Vídeo com IA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Aprenda em 1 minuto: Vídeos Explicativos com Apresentadores IA.
            </h2>
            <p className="text-slate-300 mt-2 text-sm sm:text-base">
              Menos leitura, mais clareza. Nossos apresentadores virtuais explicam a metodologia, o ecossistema SAP e os resultados em vídeos dinâmicos com áudio e tópicos resumidos.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-blue-950/60 border border-cyan-500/30 px-3.5 py-2 rounded-xl shrink-0 self-start md:self-auto">
            <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Vídeos com Áudio & Legendas IA</span>
          </div>
        </div>

        {/* 4 Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_BRIEFINGS.map((vid) => (
            <div
              key={vid.id}
              className="glass-panel rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Thumbnail Container */}
              <div 
                onClick={() => onOpenVideo(vid.id)}
                className="relative aspect-video w-full bg-slate-900 overflow-hidden cursor-pointer"
              >
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono font-bold text-white bg-black/80 px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>{vid.duration}</span>
                </div>

                {/* Presenter Name on Thumbnail */}
                <div className="absolute bottom-3 left-3 text-[11px] font-semibold text-slate-200">
                  {vid.presenter.name}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600/90 group-hover:bg-cyan-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 translate-x-0.5 fill-white" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {vid.subtitle}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800 text-[11px] text-slate-300">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{vid.summaryBullets[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => onOpenVideo(vid.id)}
                    className="w-full py-2 px-3 text-xs font-semibold text-white bg-slate-900 group-hover:bg-blue-600 border border-slate-800 group-hover:border-blue-500 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Assistir com Áudio IA</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
