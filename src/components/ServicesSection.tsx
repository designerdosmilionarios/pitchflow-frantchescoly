"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/content/site-content";
import { Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export const ServicesSection: React.FC = () => {
  const { services } = SITE_CONTENT;

  return (
    <section
      id="contratacoes"
      className="relative py-32 overflow-hidden bg-surface-light text-text-dark border-t border-black/5"
    >
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 md:px-10">
        <Reveal>
          <h2 className="font-condensed uppercase text-center max-w-4xl mx-auto text-[clamp(2.5rem,6vw,6.5rem)] leading-[0.88] mb-10 text-text-dark">
            <span>Palestras, mentoria</span>{" "}
            <span className="text-brand-blue">e projetos comerciais.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-center max-w-2xl mx-auto text-base md:text-lg text-text-darkMuted leading-relaxed mb-16">
            {services.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <Reveal delay={0.2} y={30} className="lg:col-span-4 flex flex-col items-start">
            <h3 className="font-condensed uppercase text-3xl md:text-4xl text-text-dark leading-[0.95] mb-5">
              Formatos sob <br />
              <span className="text-brand-blue">consulta dedicada.</span>
            </h3>
            <p className="text-sm text-text-darkMuted leading-relaxed mb-8">
              Cada projeto e desenhado para o contexto do seu evento, com escopo, deslocamento e formato ajustados em conversa direta com a producao do PitchFlow.
            </p>
            <a
              href={services.cta.href}
              className="group inline-flex items-center gap-3 rounded-full bg-text-dark px-6 py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black"
            >
              {services.cta.label}
              <ArrowRight className="h-4 w-4 text-brand-cyan transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <Stagger className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6" delayChildren={0.2} staggerChildren={0.15}>
            {services.items.map((service) => (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full p-8 rounded-3xl bg-white border border-surface-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_80px_-30px_rgba(31,107,255,0.3)] hover:border-brand-blue/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-text-darkMuted bg-slate-100 px-3 py-1 rounded-full" style={{ letterSpacing: "0.18em" }}>
                        {service.priceNote}
                      </span>
                    </div>

                    <h3 className="font-condensed text-3xl uppercase tracking-tight text-text-dark mb-2 leading-[0.95]">
                      {service.title}
                    </h3>

                    {service.priceExact && (
                      <div className="mb-4 flex items-baseline gap-2">
                        <span className="font-condensed text-3xl uppercase text-brand-blue leading-[0.95]">
                          {service.priceExact}
                        </span>
                        <span className="text-[11px] text-text-darkMuted">(referencia)</span>
                      </div>
                    )}

                    <p className="text-sm text-text-darkMuted leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 mb-8 pt-4 border-t border-black/5">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-text-dark">
                          <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#convite"
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-slate-100 hover:bg-brand-blue hover:text-white py-3 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-dark transition-all"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};
