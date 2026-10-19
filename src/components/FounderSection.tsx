"use client";

import { ResponsivePhoto } from "./ResponsivePhoto";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { SITE_CONTENT } from "@/content/site-content";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export function FounderSection() {
  const { founder } = SITE_CONTENT;

  return (
    <section id="idealizador" className="founder-profile" aria-labelledby="founder-title">
      <div className="founder-profile-scene">
        <div className="founder-profile-backdrop">
          <ResponsivePhoto
            desktop={{src:"/assets/photos/founder-about.png",width:1672,height:941}}
            mobile={{src:"/assets/photos/founder-mobile.png",width:1080,height:1920}}
            alt="Frantchescoly Vilella, empresário, autor e idealizador da PitchFlow"
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <div className="founder-profile-shade" aria-hidden="true" />
        <div className="editorial-container founder-profile-content">
          <div className="founder-profile-bio">
            <Reveal y={18}>
              <p className="section-kicker"><span /> Conheça o idealizador</p>
              <h2 id="founder-title" className="font-condensed">FRANTCHESCOLY<span>VILELLA.</span></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="founder-profile-lead">Empresário por vocação.<br />Autor por propósito.<br /><span>Conector de pessoas por essência.</span></p>
            </Reveal>
            <Reveal delay={0.22} className="founder-profile-story">
              {founder.bio.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </Reveal>
            <Reveal delay={0.3}>
              <a href="#convite" className="editorial-text-link">Vamos construir essa história juntos <ArrowUpRight size={18} /></a>
            </Reveal>
            <Reveal delay={0.35} className="founder-profile-signature">
              <span className="font-signature">Frantchescoly Vilella</span>
              <span>Idealizador do<br /><strong>PitchFlow Movement</strong></span>
            </Reveal>
          </div>
          <div className="founder-profile-photo-note" aria-hidden="true"><span>Uma visão.<br />Infinitas possibilidades.</span><ArrowDownRight size={25} /></div>
        </div>
      </div>
      <div className="founder-profile-bottom">
        <div className="editorial-container">
          <div className="founder-profile-topics"><span>DA EXPERIÊNCIA AO MOVIMENTO</span><span>Empreendedorismo <i /> Conhecimento <i /> Conexões</span></div>
          <Stagger className="founder-profile-stats" staggerChildren={0.12}>
            {founder.stats.map((stat,index) => (
              <StaggerItem key={stat.label}>
                <span className="profile-stat-index">0{index+1} /</span>
                <strong className="font-condensed">{stat.value}</strong>
                <span className="profile-stat-label">{stat.label}</span>
                <ArrowUpRight size={19}/>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
