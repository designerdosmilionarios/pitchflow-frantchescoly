"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/content/site-content";
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

interface FormData {
  nome: string;
  empresaCanal: string;
  email: string;
  whatsapp: string;
  tipoEvento: string;
  cidadeEstado: string;
  dataPrevista: string;
  publicoEstimado: string;
  motivoConvite: string;
  consentimentoLgpd: boolean;
  honeypot: string;
}

const INITIAL_FORM: FormData = {
  nome: "",
  empresaCanal: "",
  email: "",
  whatsapp: "",
  tipoEvento: "",
  cidadeEstado: "",
  dataPrevista: "",
  publicoEstimado: "",
  motivoConvite: "",
  consentimentoLgpd: false,
  honeypot: "",
};

export const InvitationSection: React.FC = () => {
  const { invitation } = SITE_CONTENT;
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 11) val = val.slice(0, 11);
    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    }
    setForm({ ...form, whatsapp: val });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nome || !form.email || !form.whatsapp || !form.tipoEvento || !form.cidadeEstado) {
      setStatus("error");
      setFeedbackMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!form.consentimentoLgpd) {
      setStatus("error");
      setFeedbackMessage("E necessario concordar com a politica de tratamento de dados (LGPD).");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/convite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Falha no envio do convite.");
      }

      setStatus("success");
      setFeedbackMessage(result.message || "Convite enviado com sucesso!");
      setForm(INITIAL_FORM);
    } catch (err: any) {
      setStatus("error");
      setFeedbackMessage(err.message || "Ocorreu um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <section
      id="convite"
      className="relative py-32 overflow-hidden bg-bg-secondary border-b border-line-dark"
    >
      <div className="absolute top-0 right-0 w-[700px] h-[700px] glow-orb opacity-50 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 md:px-10">
        <Reveal>
          <h2 className="font-condensed uppercase text-center max-w-4xl mx-auto text-[clamp(2.5rem,6vw,6.5rem)] leading-[0.88] mb-6 text-glow">
            <span className="text-white">Leve essa conversa</span>{" "}
            <span className="text-gradient-cyan">para o seu palco.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-center max-w-2xl mx-auto text-base md:text-lg text-text-muted leading-relaxed mb-16">
            {invitation.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <Reveal delay={0.2} y={30} className="lg:col-span-5 flex flex-col gap-4">
            {invitation.benefits.map((b) => (
              <div
                key={b.title}
                className="group p-6 rounded-2xl bg-bg-elevated/60 border border-white/5 hover:border-brand-cyan/30 transition-all flex flex-col gap-2"
              >
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <h4 className="font-condensed text-xl uppercase tracking-tight text-white leading-[0.95]">
                    {b.title}
                  </h4>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {b.description}
                </p>
                <span className="text-[10.5px] font-bold uppercase text-brand-cyan" style={{ letterSpacing: "0.24em" }}>
                  {b.subtitle}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.3} y={40} className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-brand-cyan/30 via-transparent to-brand-blue/20 blur-2xl opacity-50" />
              <div className="relative p-8 sm:p-10 rounded-3xl bg-bg-elevated/95 border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
                <h3 className="font-condensed text-2xl uppercase tracking-tight text-white mb-2 leading-[0.95]">
                  Curadoria e Agenda 2027
                </h3>
                <p className="text-[11.5px] text-text-muted uppercase mb-7" style={{ letterSpacing: "0.18em" }}>
                  Campos com asterisco sao obrigatorios
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="honeypot"
                    value={form.honeypot}
                    onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Nome completo" required>
                      <input
                        type="text"
                        required
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        placeholder="Seu nome"
                        className="input-field"
                      />
                    </Field>
                    <Field label="Empresa, evento ou canal">
                      <input
                        type="text"
                        value={form.empresaCanal}
                        onChange={(e) => setForm({ ...form, empresaCanal: e.target.value })}
                        placeholder="Ex: Podcast X / Summit 2027"
                        className="input-field"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="E-mail profissional" required>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="contato@suaempresa.com"
                        className="input-field"
                      />
                    </Field>
                    <Field label="WhatsApp com DDD" required>
                      <input
                        type="tel"
                        required
                        value={form.whatsapp}
                        onChange={handlePhoneChange}
                        placeholder="(11) 99999-9999"
                        className="input-field"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Tipo de evento" required>
                      <select
                        required
                        value={form.tipoEvento}
                        onChange={(e) => setForm({ ...form, tipoEvento: e.target.value })}
                        className="input-field"
                      >
                        <option value="">Selecione a modalidade</option>
                        <option value="Palestra Presencial">Palestra Presencial</option>
                        <option value="Participacao em Podcast">Participacao em Podcast</option>
                        <option value="Congresso / Painel">Congresso / Painel</option>
                        <option value="Evento Corporativo">Convenção ou Evento Corporativo</option>
                        <option value="Mentoria / Outro">Mentoria Executiva / Outro</option>
                      </select>
                    </Field>
                    <Field label="Cidade e Estado (UF)" required>
                      <input
                        type="text"
                        required
                        value={form.cidadeEstado}
                        onChange={(e) => setForm({ ...form, cidadeEstado: e.target.value })}
                        placeholder="Ex: Sao Paulo / SP"
                        className="input-field"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Data prevista">
                      <input
                        type="text"
                        value={form.dataPrevista}
                        onChange={(e) => setForm({ ...form, dataPrevista: e.target.value })}
                        placeholder="Ex: 1o Semestre de 2027"
                        className="input-field"
                      />
                    </Field>
                    <Field label="Publico estimado">
                      <select
                        value={form.publicoEstimado}
                        onChange={(e) => setForm({ ...form, publicoEstimado: e.target.value })}
                        className="input-field"
                      >
                        <option value="">Selecione o porte</option>
                        <option value="Ate 100 pessoas">Ate 100 pessoas</option>
                        <option value="100 a 500 pessoas">100 a 500 pessoas</option>
                        <option value="500 a 1.500 pessoas">500 a 1.500 pessoas</option>
                        <option value="Mais de 1.500 pessoas">Mais de 1.500 pessoas</option>
                        <option value="Audiencia Online / Podcast">Audiencia Online / Streaming</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Por que deseja convida-lo?">
                    <textarea
                      rows={3}
                      value={form.motivoConvite}
                      onChange={(e) => setForm({ ...form, motivoConvite: e.target.value })}
                      placeholder="Conte sobre o objetivo do evento, perfil do publico e tema proposto"
                      className="input-field resize-none"
                    />
                  </Field>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="lgpd-consent"
                      checked={form.consentimentoLgpd}
                      onChange={(e) => setForm({ ...form, consentimentoLgpd: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-bg-primary text-brand-blue focus:ring-brand-cyan"
                    />
                    <label htmlFor="lgpd-consent" className="text-[11.5px] text-text-muted leading-relaxed select-none">
                      Concordo com o tratamento dos dados informados para contato exclusivo referente a viabilidade da participacao de Frantchescoly Vilella no evento, conforme a legislacao de protecao de dados (LGPD).
                    </label>
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-xs"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{feedbackMessage}</span>
                    </motion.div>
                  )}

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-300 text-xs"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>{feedbackMessage}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group w-full flex items-center justify-center gap-3 rounded-full bg-brand-blue py-4 px-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_-12px_rgba(31,107,255,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-blue-hover disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Enviando convite</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Enviar convite para a producao</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 text-text-muted/60 text-[10.5px] uppercase tracking-[0.2em]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Seus dados sao confidenciais</span>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        :global(.input-field) {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: 0.85rem;
          background: rgba(4, 6, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: white;
          font-size: 0.875rem;
          transition: all 0.2s;
          backdrop-filter: blur(6px);
        }
        :global(.input-field::placeholder) {
          color: rgba(156, 168, 187, 0.4);
        }
        :global(.input-field:focus) {
          outline: none;
          border-color: rgba(43, 196, 255, 0.6);
          box-shadow: 0 0 0 4px rgba(43, 196, 255, 0.12);
        }
      `}</style>
    </section>
  );
};

const Field: React.FC<{ label: string; required?: boolean; children: React.ReactNode }> = ({
  label,
  required,
  children,
}) => (
  <div>
    <label
      className="block text-[10.5px] font-bold uppercase text-text-muted mb-1.5"
      style={{ letterSpacing: "0.2em" }}
    >
      {label} {required && <span className="text-brand-cyan">*</span>}
    </label>
    {children}
  </div>
);
