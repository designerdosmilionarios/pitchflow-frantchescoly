"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/content/site-content";
import { Mic, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

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
            <span>{services.headline}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-center max-w-2xl mx-auto text-base md:text-lg text-text-darkMuted leading-relaxed mb-16">
            {services.description}
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl mx-auto p-10 rounded-3xl bg-white border border-surface-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_80px_-30px_rgba(31,107,255,0.3)] hover:border-brand-blue/40 transition-all"
          >
            {services.items.map((service) => (
              <div key={service.id} className="flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                    <Mic className="h-5 w-5" />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase text-text-darkMuted bg-slate-100 px-3 py-1.5 rounded-full"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {service.priceNote}
                  </span>
                </div>

                <h3 className="font-condensed text-3xl uppercase tracking-tight text-text-dark mb-3 leading-[0.95]">
                  {service.title}
                </h3>

                {service.priceExact && (
                  <div className="mb-5 flex items-baseline gap-2">
                    <span className="font-condensed text-5xl uppercase text-brand-blue leading-[0.9] tracking-tight">
                      {service.priceExact}
                    </span>
                  </div>
                )}

                <p className="text-sm text-text-darkMuted leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 mb-8 pt-5 border-t border-black/5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-text-dark">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#convite"
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-text-dark hover:bg-black py-3.5 px-4 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-all"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4 text-brand-cyan transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};