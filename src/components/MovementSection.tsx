"use client";

import React from "react";
import { SITE_CONTENT } from "@/content/site-content";
import { BrazilMap } from "./BrazilMap";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export const MovementSection: React.FC = () => {
  const { movement } = SITE_CONTENT;

  return (
    <section
      id="movimento"
      className="relative py-32 overflow-hidden bg-bg-secondary border-t border-line-dark"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] glow-orb opacity-50 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 md:px-10">
        <Reveal>
          <h2 className="font-condensed uppercase text-center max-w-4xl mx-auto text-[clamp(3rem,7vw,7rem)] leading-[0.88] tracking-[-0.02em] mb-12 text-glow">
            <span className="text-white">27 Estados.</span>{" "}
            <span className="text-gradient-cyan">Um só propósito.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-center max-w-2xl mx-auto text-base md:text-lg text-text-muted leading-relaxed mb-16">
            {movement.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <Reveal delay={0.2} y={40} className="lg:col-span-3 flex flex-col gap-5">
            <div className="p-6 rounded-2xl bg-bg-elevated/70 border border-white/10 backdrop-blur">
              <span className="block text-[10.5px] font-bold uppercase text-brand-cyan mb-3" style={{ letterSpacing: "0.32em" }}>
                O Propósito
              </span>
              <p className="text-sm text-text-muted leading-relaxed">
                Aproximar o ecossistema nacional, descentralizando oportunidades e conectando empreendedores de todas as capitais e polos de desenvolvimento aos grandes fluxos de capital.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-bg-elevated/70 border border-white/10 backdrop-blur">
              <span className="block text-[10.5px] font-bold uppercase text-brand-cyan mb-3" style={{ letterSpacing: "0.32em" }}>
                Status Oficial
              </span>
              <p className="text-sm text-text-muted leading-relaxed">
                {movement.statusNote}
              </p>
            </div>
            <a
              href={movement.cta.href}
              className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-cyan hover:text-white transition pl-2"
            >
              {movement.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={0.3} y={40} className="lg:col-span-6 flex justify-center py-2">
            <BrazilMap />
          </Reveal>

          <Reveal delay={0.4} y={40} className="lg:col-span-3 flex flex-col gap-5">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-bg-elevated border border-brand-blue/30 backdrop-blur">
              <span className="block font-condensed text-xl uppercase text-white mb-1 leading-[0.95]">
                Mesmo propósito.
              </span>
              <span className="block font-condensed text-xl uppercase text-gradient-cyan leading-[0.95]">
                Novos horizontes.
              </span>
              <span className="mt-3 block text-[10px] uppercase text-text-muted tracking-[0.3em]">
                Planejamento 2027
              </span>
            </div>

            <Stagger className="flex flex-col gap-2.5" delayChildren={0.45} staggerChildren={0.08}>
              {movement.highlights.map((item) => (
                <StaggerItem key={item.id}>
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-bg-elevated/60 border border-white/5 text-sm font-medium text-text-primary hover:border-brand-blue/30 transition">
                    <span className="h-7 w-7 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan" />
                    </span>
                    <span>{item.text}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
