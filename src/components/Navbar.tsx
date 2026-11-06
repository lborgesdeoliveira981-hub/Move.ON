import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenSchedule: () => void;
  onOpenVideo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule, onOpenVideo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vídeos IA', href: '#videos-ia' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Metodologia BTO', href: '#metodologia-bto' },
    { name: 'BTO.NOW', href: '#bto-now' },
    { name: 'Cases', href: '#cases' },
    { name: 'Liderança', href: '#lideranca' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070B14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Official MOVE.ON Symbol & Brand Wordmark */}
            <a href="#" className="flex items-center gap-3 group whitespace-nowrap shrink-0">
              {/* Official 3D Ribbon Symbol */}
              <div className="relative w-9 h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/assets/images/moveon-symbol.svg"
                  alt="MOVE.ON Símbolo Oficial"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(254,48,0,0.4)]"
                />
              </div>

              {/* Official Brand Typography */}
              <div className="flex flex-col tracking-tight">
                <div className="flex items-baseline">
                  <span className="text-xl font-black text-white tracking-wider">MOVE</span>
                  <span className="text-xl font-black text-[#fe3000]">.</span>
                  <span className="text-xl font-black text-white tracking-wider">ON</span>
                </div>
                <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase -mt-1 hidden sm:block">
                  BUSINESS TRANSFORMATION
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Clean single-line links with hover underline) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#fe3000] transition-colors whitespace-nowrap shrink-0 py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#fe3000] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Single Primary Action with official #fe3000 brand gradient */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <button
                onClick={onOpenSchedule}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#fe3000] to-[#c42400] hover:from-[#ff4a1c] hover:to-[#fe3000] active:scale-95 rounded-lg shadow-md shadow-[#fe3000]/25 transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 group hover:shadow-[#fe3000]/40"
              >
                <span>Fale com Especialistas</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070B14]/98 backdrop-blur-xl lg:hidden pt-24 px-6 pb-8 flex flex-col justify-between">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#fe3000] to-[#c42400] hover:from-[#ff4a1c] hover:to-[#fe3000] rounded-lg shadow-lg shadow-[#fe3000]/30 flex items-center justify-center gap-2"
            >
              <span>Fale com Nossos Especialistas</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/5511947952430"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: (11) 94795-2430</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
