import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    service: prefilledService || initialService || 'Governança de Projetos',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Por favor, informe seu nome completo.';
    if (!formData.email.trim()) {
      errs.email = 'Por favor, informe seu e-mail corporativo.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'E-mail corporativo inválido.';
    }
    if (!formData.company.trim()) errs.company = 'Informe o nome da sua empresa.';
    if (!formData.message.trim()) errs.message = 'Por favor, escreva uma breve mensagem sobre o desafio.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-16 bg-[#070B14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            08. Canais Oficiais de Atendimento
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Fale com a diretoria executiva da MOVE.ON.
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
            Diagnóstico preliminar e estratégia sob medida para sua organização.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl glass-panel border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-4">
                  Canais Diretos de Contato
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Official Corporate Email */}
                  <a
                    href="mailto:contato@moveon.consulting"
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#fe3000]/40 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-orange-950/60 text-[#fe3000] border border-[#fe3000]/30 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs">E-mail Corporativo Oficial</div>
                      <div className="text-white font-mono font-semibold group-hover:text-[#fe3000] transition-colors">
                        contato@moveon.consulting
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Resposta direta em até 24 horas úteis</div>
                    </div>
                  </a>

                  {/* WhatsApp Link */}
                  <a
                    href="https://wa.me/5511947952430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-500/20 shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs">WhatsApp Executivo</div>
                      <div className="text-white font-mono font-semibold group-hover:text-emerald-400 transition-colors">
                        +55 (11) 94795-2430 / (11) 94795-2431
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Atendimento comercial de Segunda a Sexta, 8h às 18h</div>
                    </div>
                  </a>

                  {/* Headquarters Location */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-500/20 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs">Sede Operacional</div>
                      <div className="text-white font-semibold">
                        São Paulo — SP
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Atendimento em todo o território nacional</div>
                    </div>
                  </div>
                  {/* Social & Ecosystem Links */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-slate-400 text-xs mb-2">Presença Digital & Ecossistema</div>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="https://www.instagram.com/moveonconsulting_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500/40 text-slate-300 hover:text-white transition-colors text-xs flex items-center justify-between"
                      >
                        <span className="font-medium">Instagram</span>
                        <span className="text-[10px] text-pink-400 font-mono">@moveonconsulting_</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/moveonbto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white transition-colors text-xs flex items-center justify-between"
                      >
                        <span className="font-medium">LinkedIn</span>
                        <span className="text-[10px] text-blue-400 font-mono">moveonbto</span>
                      </a>
                      <a
                        href="https://linktr.ee/moveonconsulting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors text-xs flex items-center justify-between"
                      >
                        <span className="font-medium">Linktree</span>
                        <span className="text-[10px] text-emerald-400 font-mono">moveonconsulting</span>
                      </a>
                      <a
                        href="https://www.facebook.com/moveonconsulting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-600/40 text-slate-300 hover:text-white transition-colors text-xs flex items-center justify-between"
                      >
                        <span className="font-medium">Facebook</span>
                        <span className="text-[10px] text-blue-400 font-mono">moveon</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality commitment */}
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p>
                  Tratamos todas as informações estratégicas e cadastrais sob rígidos acordos de confidencialidade (NDA) e em estrita conformidade com a LGPD.
                </p>
              </div>
            </div>

            <div className="pt-8 text-xs text-slate-500">
              MOVE.ON Business Transformation · Todos os direitos reservados.
            </div>
          </div>

          {/* Right: Functional Corporate Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-700/80">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Solicitação Recebida com Sucesso
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                    Agradecemos seu contato, <strong className="text-white">{formData.name}</strong>. Nossa diretoria executiva entrará em contato em até 24 horas úteis pelo e-mail <strong className="text-cyan-400">{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        role: '',
                        service: 'Governança de Projetos',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:text-white hover:border-slate-700"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      Formulário de Contato Corporativo
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Preencha os campos abaixo para receber o contato de um consultor sênior.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Carlos Silva"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    {/* Corporate Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@suaempresa.com.br"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Empresa *
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nome da sua empresa"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                      {errors.company && <p className="text-[11px] text-red-400 mt-1">{errors.company}</p>}
                    </div>

                    {/* Role */}
                    <div>
                      <label htmlFor="role" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Cargo / Função
                      </label>
                      <input
                        id="role"
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="Ex: Diretor de TI, CFO, PMO"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service of interest */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Solução ou Área de Interesse
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 cursor-pointer"
                    >
                      <option value="Governança de Projetos">Governança de Projetos</option>
                      <option value="Reforma Tributária no SAP">Reforma Tributária no SAP (PEC 45)</option>
                      <option value="Centro de Excelência SAP">Centro de Excelência SAP (CoE)</option>
                      <option value="Governança de Projetos SAP">Governança de Projetos SAP (S/4HANA)</option>
                      <option value="Sustentação e Evolução do SAP">Sustentação e Evolução do SAP</option>
                      <option value="Gestão de Processos (BPM)">Gestão de Processos (BPM & Signavio)</option>
                      <option value="Blueprint Estratégico">Blueprint Estratégico</option>
                      <option value="Metodologia BTO Completa">Metodologia BTO Completa (6 Escritórios)</option>
                      <option value="Demonstração da Plataforma BTO.NOW">Demonstração da Plataforma BTO.NOW</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Desafio ou Objetivo da Iniciativa *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva brevemente o momento atual da sua empresa, sistemas envolvidos e principais metas..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                    {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#fe3000] to-[#c42400] hover:from-[#ff4a1c] hover:to-[#fe3000] active:scale-[0.99] rounded-lg shadow-xl shadow-[#fe3000]/25 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Enviar Mensagem para Nossos Especialistas</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
