"use client";

import { ResponsivePhoto } from "./ResponsivePhoto";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SITE_CONTENT } from "@/content/site-content";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export function PlatformSection() {
  const { platform } = SITE_CONTENT;
  const reduce = useReducedMotion();
  return (
    <section id="plataforma" className="platform-visual" aria-labelledby="platform-title">
      <div className="editorial-container">
        <div className="platform-visual-heading">
          <Reveal><p className="section-kicker">02 / O próximo passo está aqui</p><h2 id="platform-title" className="font-condensed">CONEXÕES QUE<span>ACELERAM NEGÓCIOS.</span></h2></Reveal>
          <Reveal delay={0.15} className="platform-visual-intro"><p>{platform.description}</p><a href={platform.cta.href} className="editorial-text-link">Entrar na lista de espera <ArrowUpRight size={18}/></a></Reveal>
        </div>
        <Reveal y={35} duration={1.2} className="platform-image-reveal">
          <motion.figure className="platform-image" initial={reduce ? false : {scale:.96}} whileInView={{scale:1}} viewport={{once:true}} transition={{duration:1.4,ease:[0.22,1,0.36,1]}}>
            <ResponsivePhoto desktop={{src:"/assets/photos/platform-v2.png",width:1672,height:941}} mobile={{src:"/assets/photos/platform-v2-mobile.png",width:941,height:1672}} alt="Apresentação visual da PitchFlow em um notebook e um celular, com interface para conectar startups e investidores" sizes="(max-width: 700px) 100vw, 90vw" className="h-auto w-full object-contain"/>
            <figcaption><span>PitchFlow · Desktop & Mobile</span><span>Conceito visual da plataforma</span></figcaption>
          </motion.figure>
        </Reveal>
        <Stagger className="platform-visual-features" staggerChildren={0.1}>{platform.features.map((feature,index) => <StaggerItem key={feature.title}><span>0{index+1}<ArrowRight size={15}/></span><h3>{feature.title}</h3><p>{feature.description}</p></StaggerItem>)}</Stagger>
      </div>
    </section>
  );
}
