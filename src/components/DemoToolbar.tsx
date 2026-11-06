import React, { useState } from 'react';
import { CheckCircle2, Eye, ShieldAlert, Sparkles, ChevronDown, ChevronUp, Layers, Check } from 'lucide-react';

interface DemoToolbarProps {
  onOpenSchedule: () => void;
}

export const DemoToolbar: React.FC<DemoToolbarProps> = ({ onOpenSchedule }) => {
  const [minimized, setMinimized] = useState(false);
  const [approvedState, setApprovedState] = useState(false);

  const sections = [
    { label: 'Início', href: '#' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Soluções (7)', href: '#solucoes' },
    { label: 'BTO (6 xMOs)', href: '#metodologia-bto' },
    { label: 'BTO.NOW', href: '#bto-now' },
    { label: 'Cases Reais', href: '#cases' },
    { label: 'Liderança', href: '#lideranca' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <aside aria-label="Controles de Demonstração" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-4xl w-[94%] transition-all duration-300">
      <div className="glass-panel bg-[#0B1120]/95 border border-cyan-500/30 rounded-2xl p-3 sm:px-5 sm:py-3.5 shadow-2xl backdrop-blur-xl glow-blue">
        <div className="flex items-center justify-between gap-4">
          {/* Status info */}
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="text-xs font-bold text-white tracking-wide">
                MOVE.ON — NEXT GENERATION
              </span>
              <span className="text-[11px] text-cyan-300 hidden md:inline">
                Versão de Demonstração para Aprovação
              </span>
            </div>
          </div>

          {/* Quick jump links (hidden when minimized or on narrow screens) */}
          {!minimized && (
            <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto text-xs">
              {sections.map((sec) => (
                <a
                  key={sec.label}
                  href={sec.href}
                  className="px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap"
                >
                  {sec.label}
                </a>
              ))}
            </div>
          )}

          {/* Actions: Approve / Minimize */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setApprovedState(!approvedState)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                approvedState
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30'
              }`}
            >
              {approvedState ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Demonstração Aprovada</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Aprovar Versão</span>
                </>
              )}
            </button>

            <button
              onClick={() => setMinimized(!minimized)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 transition-colors"
              title={minimized ? 'Expandir barra de navegação' : 'Minimizar barra'}
              aria-label={minimized ? 'Expandir barra de navegação' : 'Minimizar barra'}
            >
              {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Approval feedback toast if active */}
        {approvedState && !minimized && (
          <div className="mt-2.5 pt-2.5 border-t border-slate-800/80 text-[11px] text-emerald-400 flex items-center justify-between">
            <span>✨ Versão de demonstração aprovada para publicação institucional da MOVE.ON Consulting.</span>
            <span className="text-slate-400">Totalmente responsivo e validado</span>
          </div>
        )}
      </div>
    </aside>
  );
};
