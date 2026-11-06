import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, User, Mail, Building, Phone } from 'lucide-react';

interface ExecutiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetTopic?: string;
  initialTopic?: string;
}

export const ExecutiveModal: React.FC<ExecutiveModalProps> = ({ isOpen, onClose, presetTopic, initialTopic }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    topic: initialTopic || presetTopic || 'Diagnóstico Executivo BTO',
    preferredDate: '',
    preferredTime: '10:00',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel bg-[#0B1220] border border-slate-700 max-w-lg w-full rounded-2xl p-6 sm:p-8 relative shadow-2xl max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Reunião Solicitada com Sucesso
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mb-6 leading-relaxed">
              Obrigado, <strong className="text-white">{formData.name}</strong>. Nossa equipe executiva entrará em contato para confirmar o agendamento em seu e-mail <span className="text-cyan-400">{formData.email}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Concluir
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              <span>MOVE.ON Advisory</span>
              <span aria-hidden="true">·</span>
              <span>Atendimento C-Level</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Agendar Reunião Executiva
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Sessão confidencial de 45 minutos com diretores de prática da MOVE.ON Consulting.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-300 mb-1">Nome Completo *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full pl-9 pr-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">E-mail Corporativo *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@empresa.com"
                      className="w-full pl-9 pr-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1">WhatsApp / Telefone *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full pl-9 pr-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">Empresa & Cargo *</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ex: Grupo Alpha — Diretor de Operações"
                    className="w-full pl-9 pr-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">Pauta Prioritária</label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="Diagnóstico Executivo BTO">Diagnóstico Executivo Metodologia BTO</option>
                  <option value="Reforma Tributária no SAP">Reforma Tributária no SAP (PEC 45)</option>
                  <option value="Governança de Migração S/4HANA">Governança de Migração S/4HANA RISE</option>
                  <option value="Estruturação de Centro de Excelência SAP">Estruturação de Centro de Excelência SAP (CoE)</option>
                  <option value="Gestão de Processos BPM">Gestão e Mineração de Processos BPM</option>
                  <option value="Demonstração da Plataforma BTO.NOW">Apresentação da Plataforma BTO.NOW</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  <span>Confirmar Agendamento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
