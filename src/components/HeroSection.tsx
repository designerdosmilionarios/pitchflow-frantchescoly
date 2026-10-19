"use client";
import { ResponsivePhoto } from "./ResponsivePhoto";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SITE_CONTENT } from "@/content/site-content";
import { Reveal } from "./Reveal";
export function HeroSection() {
  const { hero } = SITE_CONTENT;
  return (
    <section id="inicio" className="hero-editorial" aria-labelledby="hero-title">
      <div className="hero-photograph"><ResponsivePhoto desktop={{src:"/assets/photos/hero-v2.png",width:1920,height:1080}} mobile={{src:"/assets/photos/hero-mobile.png",width:1080,height:1920}} alt="Frantchescoly Vilella em retrato de apresentação do PitchFlow Movement" fill priority className="object-contain" /></div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content editorial-container"><Reveal y={16}>
        <p className="section-kicker hero-kicker">Movimento nacional · 2027</p>
        <h1 id="hero-title" className="hero-title font-condensed">PITCHFLOW<span>MOVEMENT</span></h1>
        <p className="hero-manifesto">Do Brasil<br /> para o mundo.</p>
        <p className="hero-description">Uma jornada para conectar pessoas, ideias e oportunidades. Nos palcos, nas conversas e no futuro dos negócios.</p>
        <div className="hero-actions"><a href={hero.primaryCta.href} className="editorial-button">Convidar para meu evento <ArrowUpRight size={18} /></a><a href={hero.secondaryCta.href} className="editorial-text-link">Conhecer a PitchFlow <ArrowUpRight size={17} /></a></div>
      </Reveal></div>
      <div className="hero-bottom editorial-container"><span className="hero-credit">Frantchescoly Vilella <span>Empresário, autor e idealizador</span></span><div className="hero-disciplines">{hero.pills.map(pill => <span key={pill}>{pill}</span>)}</div><a href="#movimento" className="hero-scroll" aria-label="Explorar o movimento"><ArrowDown size={19} /></a></div>
    </section>
  );
}
