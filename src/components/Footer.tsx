import React from 'react';
import { ArrowUp, Instagram, Linkedin, Facebook, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080F] text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 shrink-0">
                <img
                  src="/assets/images/moveon-symbol.svg"
                  alt="MOVE.ON Símbolo Oficial"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(254,48,0,0.4)]"
                />
              </div>
              <div className="flex flex-col tracking-tight">
                <div className="flex items-baseline">
                  <span className="text-xl font-black text-white tracking-wider">MOVE</span>
                  <span className="text-xl font-black text-[#fe3000]">.</span>
                  <span className="text-xl font-black text-white tracking-wider">ON</span>
                </div>
                <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase -mt-1">
                  BUSINESS TRANSFORMATION
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Consultoria de transformação de negócios focada em governança integrada, processos BPM, ecossistema SAP e metodologia proprietária BTO (Business Transformation Office).
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="https://www.instagram.com/moveonconsulting_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-[#fe3000]/40 transition-colors flex items-center gap-1.5"
                aria-label="Instagram Oficial MOVE.ON (@moveonconsulting_)"
                title="Instagram: @moveonconsulting_"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span className="text-[11px] font-medium hidden sm:inline">@moveonconsulting_</span>
              </a>
              <a
                href="https://www.linkedin.com/company/moveonbto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/40 transition-colors flex items-center gap-1.5"
                aria-label="LinkedIn Oficial MOVE.ON (moveonbto)"
                title="LinkedIn Oficial MOVE.ON"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] font-medium hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/moveonconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-blue-600/40 transition-colors flex items-center gap-1.5"
                aria-label="Facebook Oficial MOVE.ON"
                title="Facebook Oficial MOVE.ON"
              >
                <Facebook className="w-4 h-4 text-blue-500" />
                <span className="text-[11px] font-medium hidden sm:inline">Facebook</span>
              </a>
              <a
                href="https://linktr.ee/moveonconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-emerald-500/40 transition-colors flex items-center gap-1.5"
                aria-label="Linktree Oficial MOVE.ON"
                title="Linktree Oficial MOVE.ON"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-medium hidden sm:inline">Linktree</span>
              </a>
              <a
                href="mailto:contato@moveon.consulting"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-[#fe3000]/40 transition-colors"
                aria-label="E-mail Oficial MOVE.ON (contato@moveon.consulting)"
                title="E-mail: contato@moveon.consulting"
              >
                <Mail className="w-4 h-4 text-[#fe3000]" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#quem-somos" className="hover:text-cyan-400 transition-colors">Quem Somos</a></li>
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">Nossas Soluções</a></li>
              <li><a href="#metodologia-bto" className="hover:text-cyan-400 transition-colors">Metodologia BTO</a></li>
              <li><a href="#bto-now" className="hover:text-cyan-400 transition-colors">Plataforma BTO.NOW</a></li>
              <li><a href="#cases" className="hover:text-cyan-400 transition-colors">Cases & Resultados</a></li>
              <li><a href="#lideranca" className="hover:text-cyan-400 transition-colors">Nossa Liderança</a></li>
            </ul>
          </div>

          {/* Col 3: Soluções */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Especialidades SAP
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">Reforma Tributária no SAP</a></li>
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">Governança SAP S/4HANA</a></li>
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">Centro de Excelência SAP</a></li>
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">Sustentação e Evolução</a></li>
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">BPM & Process Mining</a></li>
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">Blueprint Estratégico</a></li>
            </ul>
          </div>

          {/* Col 4: Contato & Sede */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Localização & Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>São Paulo — SP, Brasil</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="font-mono">+55 (11) 94795-2430</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#fe3000] shrink-0 mt-0.5" />
                <a href="mailto:contato@moveon.consulting" className="font-mono hover:text-[#fe3000] transition-colors">
                  contato@moveon.consulting
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 MOVE.ON Consulting. Todos os direitos reservados.</span>
            <span>·</span>
            <span>CNPJ registrado no Brasil</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Política de Privacidade & LGPD</span>
            <span className="hover:text-slate-400 cursor-pointer">Termos de Governança</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
