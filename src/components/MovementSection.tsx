"use client";

import React from "react";
import { SITE_CONTENT } from "@/content/site-content";
import { BrazilMap } from "./BrazilMap";
import { Reveal } from "./Reveal";

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
          <h2 className="font-condensed uppercase text-center max-w-5xl mx-auto text-[clamp(3rem,7vw,7rem)] leading-[0.88] tracking-[-0.02em] mb-12 text-glow">
            <span className="text-white">{movement.headline}</span>{" "}
            <span className="text-gradient-cyan">{movement.headlineAccent}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-center max-w-2xl mx-auto text-base md:text-lg text-text-muted leading-relaxed mb-16">
            {movement.description}
          </p>
        </Reveal>

        <Reveal delay={0.3} y={30}>
          <div className="flex justify-center">
            <BrazilMap />
          </div>
        </Reveal>
      </div>
    </section>
  );
};