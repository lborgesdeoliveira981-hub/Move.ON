import React from 'react';
import { Award, Briefcase, Linkedin, Instagram, ExternalLink, ShieldCheck } from 'lucide-react';
import { LEADERSHIP_DATA } from '../data/content';

export const LeadershipSection: React.FC = () => {
  const founder = LEADERSHIP_DATA.find(l => l.isFounder) || LEADERSHIP_DATA[0];
  const otherLeaders = LEADERSHIP_DATA.filter(l => !l.isFounder);

  return (
    <section id="lideranca" className="py-16 bg-[#070B14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              06. Liderança Executiva
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Liderança sênior com autoridade em grandes transformações.
            </h2>
            <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
              Mais de 20 anos de experiência em tecnologia, processos e governança corporativa.
            </p>
          </div>

          {/* Social Channels Link */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start md:self-auto">
            <a
              href="https://linktr.ee/moveonconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg flex items-center gap-1.5 transition-colors hover:border-emerald-500/40 group"
            >
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Linktree Oficial</span>
            </a>
            <a
              href="https://www.instagram.com/moveonconsulting_/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg flex items-center gap-1.5 transition-colors hover:border-pink-500/40 group"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>@moveonconsulting_</span>
            </a>
          </div>
        </div>

        {/* Founder Spotlight Card (High-Impact Editorial Split) */}
        <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Portrait Image */}
            <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-[420px] bg-slate-900 flex items-center justify-center p-6">
              <img
                src={founder.image}
                alt={founder.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center rounded-xl shadow-2xl"
              />
              <div className="absolute top-8 left-8 p-2 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs font-mono text-[#fe3000] flex items-center gap-2 shadow-lg">
                <Award className="w-4 h-4 text-[#fe3000]" />
                <span>{founder.experienceYears} de Experiência</span>
              </div>
            </div>

            {/* Founder Biography & Details */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#fe3000]">
                      Fundador & Liderança Estratégica
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {founder.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-400">
                      {founder.role}
                    </p>
                  </div>

                  {founder.socialLinkedin && (
                    <a
                      href={founder.socialLinkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                      aria-label="LinkedIn Vandré Oliveira"
                    >
                      <Linkedin className="w-5 h-5 text-blue-400" />
                    </a>
                  )}
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Specialties / Core Pillars */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Áreas de Atuação & Domínio Executivo
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {founder.expertise.map((exp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                        <ShieldCheck className="w-4 h-4 text-[#fe3000] shrink-0" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Endorsement Note */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Especialista em Metodologia BTO & Ecossistema SAP</span>
                <span className="text-slate-500 font-mono">São Paulo · Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Leaders 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherLeaders.map((leader) => (
            <div
              key={leader.id}
              className="p-5 rounded-2xl glass-panel border border-slate-800/80 flex flex-col justify-between hover:border-[#fe3000]/40 transition-colors group"
            >
              <div>
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 mb-4 border border-slate-800">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    {leader.socialLinkedin && (
                      <a
                        href={leader.socialLinkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-black/70 text-slate-300 hover:text-white border border-white/10 backdrop-blur-md flex items-center justify-center"
                        aria-label={`LinkedIn ${leader.name}`}
                      >
                        <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#fe3000] mb-1">
                  {leader.experienceYears}
                </div>
                <h4 className="text-base font-bold text-white mb-0.5 group-hover:text-[#fe3000] transition-colors">
                  {leader.name}
                </h4>
                <div className="text-xs font-semibold text-slate-400 mb-2">
                  {leader.role}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3 line-clamp-2">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1">
                {leader.expertise.slice(0, 2).map((item, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
