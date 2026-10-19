"use client";

import React from "react";
import { Logo } from "./Logo";
import { SITE_CONTENT } from "@/content/site-content";
import { Instagram, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const Footer: React.FC = () => {
  const { footer } = SITE_CONTENT;

  return (
    <footer
      id="contato"
      className="relative bg-bg-primary pt-20 pb-10 border-t border-line-dark overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] glow-orb opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-16 border-b border-line-dark">
          <Reveal delay={0.05} className="md:col-span-5 flex flex-col items-start gap-4">
            <Logo />
            <p className="text-xs text-text-muted max-w-sm leading-relaxed">
              Uma iniciativa nacional para 2027 conectando as 27 unidades federativas brasileiras por meio de palestras, podcasts e encontros estrategicos.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-4 text-left md:text-center">
            <span
              className="block text-[10.5px] uppercase text-brand-cyan font-bold mb-2"
              style={{ letterSpacing: "0.36em" }}
            >
              Manifesto
            </span>
            <h4 className="font-condensed text-3xl md:text-4xl uppercase text-white tracking-[-0.02em] leading-[0.95]">
              One Movement. <br />
              <span className="text-gradient-cyan">Infinite Opportunities.</span>
            </h4>
          </Reveal>

          <Reveal delay={0.25} className="md:col-span-3 flex justify-start md:justify-end">
            <a
              href="#convite"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_-12px_rgba(31,107,255,0.6)] transition hover:-translate-y-0.5 hover:bg-brand-blue-hover"
            >
              <span>Quero convidar para meu evento</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-line-dark">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-3 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-text-muted">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {[
              { name: "Instagram", url: "https://instagram.com", icon: <Instagram className="h-4 w-4" /> },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 hover:bg-brand-blue/20 border border-white/10 hover:border-brand-blue/40 flex items-center justify-center text-text-muted hover:text-white transition-all"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-text-muted/60 gap-3">
          <p>{footer.legal}</p>
          <div className="flex items-center gap-4 uppercase tracking-[0.18em]">
            <a href="#contato" className="hover:text-text-muted transition-colors">Politica de Privacidade</a>
            <span className="opacity-30">|</span>
            <a href="#contato" className="hover:text-text-muted transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
