"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { Reveal } from "./Reveal";

const photos = [
  { image:"/assets/photos/authority-tito.png", title:"Conversas que abrem caminhos", label:"Encontros & conexões", alt:"Frantchescoly e Tito em um encontro" },
  { image:"/assets/photos/authority-flavio.png", title:"Perto de quem faz acontecer", label:"Pessoas & negócios", alt:"Frantchescoly e Flávio em um encontro" },
  { image:"/assets/photos/authority-neymar.png", title:"Conexões além das fronteiras", label:"Histórias & experiências", alt:"Frantchescoly e Neymar em um encontro" },
  { image:"/assets/photos/authority-palco.png", title:"Ideias que ganham o palco", label:"Palestras & movimento", alt:"Frantchescoly apresentando uma palestra no palco" },
];

export function EventsSection() {
  const [active,setActive] = useState(0);
  const [paused,setPaused] = useState(false);
  const [interacting,setInteracting] = useState(false);
  const region = useRef<HTMLDivElement>(null);
  const visible = useInView(region,{amount:0.35});
  const reduce = useReducedMotion();
  const change = (direction:number) => setActive(value => (value+direction+photos.length)%photos.length);

  useEffect(() => {
    if (paused || interacting || reduce || !visible) return;
    const timer = window.setInterval(() => setActive(value => (value+1)%photos.length),5500);
    return () => window.clearInterval(timer);
  },[paused,interacting,reduce,visible,active]);

  return (
    <section id="eventos" className="authority-section" aria-labelledby="events-title">
      <div className="editorial-container">
        <Reveal className="authority-heading"><div><p className="section-kicker">04 / Presença, experiência e conexões</p><h2 id="events-title" className="font-condensed">GENTE QUE CONECTA.<br /><span>HISTÓRIAS QUE MOVEM.</span></h2></div><p>Nos encontros e nos palcos, cada conversa abre espaço para uma nova perspectiva.</p></Reveal>
      </div>
      <Reveal y={30}>
        <div ref={region} className="authority-carousel" role="region" aria-roledescription="carrossel" aria-label="Fotografias de eventos e encontros" tabIndex={0} onMouseEnter={()=>setInteracting(true)} onMouseLeave={()=>setInteracting(false)} onFocusCapture={()=>setInteracting(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node)) setInteracting(false);}} onKeyDown={event=>{if(event.key==="ArrowRight"){event.preventDefault();change(1);}if(event.key==="ArrowLeft"){event.preventDefault();change(-1);}}}>
          <div className="authority-track">
            {photos.map((photo,index) => {
              let offset=(index-active+photos.length)%photos.length;
              if(offset>1) offset-=photos.length;
              const focused=offset===0;
              return <motion.div key={photo.image} className={`authority-slide ${focused?"is-active":""}`} initial={false} aria-hidden={!focused} animate={{x:`${offset*108}%`,scale:focused?1:.85,opacity:Math.abs(offset)>1?0:(focused?1:.4),filter:focused?"blur(0px)":"blur(5px)"}} transition={{duration:reduce?0:.85,ease:[0.22,1,0.36,1]}} style={{zIndex:focused?3:1,pointerEvents:focused?"auto":"none"}}><motion.div className="authority-slide-photo" drag={focused?"x":false} dragConstraints={{left:0,right:0}} dragElastic={0.12} onDragEnd={(_,info)=>{if(info.offset.x < -40) change(1);else if(info.offset.x >40) change(-1);}}><Image src={photo.image} alt={photo.alt} fill draggable={false} sizes="(max-width: 600px) 72vw, 380px" className="object-contain" /></motion.div></motion.div>;
            })}
          </div>
          <div className="authority-info editorial-container">
            <div className="authority-caption"><span className="section-kicker">{photos[active].label}</span><AnimatePresence mode="wait"><motion.h3 key={active} className="font-condensed" initial={reduce?false:{opacity:0,y:8,filter:"blur(5px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} exit={{opacity:0,y:-5}} transition={{duration:reduce?0:.3}} aria-live={paused||interacting?"polite":"off"}>{photos[active].title}</motion.h3></AnimatePresence></div>
            <div className="authority-navigation"><span className="authority-count">0{active+1}<small>/ 04</small></span><button type="button" onClick={()=>change(-1)} aria-label="Foto anterior"><ArrowLeft size={19}/></button><button type="button" onClick={()=>change(1)} aria-label="Próxima foto"><ArrowRight size={19}/></button><button type="button" onClick={()=>setPaused(value=>!value)} aria-label={paused?"Reproduzir carrossel":"Pausar carrossel"} aria-pressed={paused}>{paused?<Play size={14}/>:<Pause size={14}/>}</button></div>
          </div>
          <div className="authority-dots" aria-label="Selecionar fotografia">{photos.map((photo,index)=><button key={photo.image} type="button" onClick={()=>setActive(index)} aria-label={`Ver foto ${index+1}: ${photo.label}`} aria-pressed={active===index} className={active===index?"active":""}><span/></button>)}</div>
        </div>
      </Reveal>
      <div className="authority-cta editorial-container"><a href="#convite" className="editorial-text-link">Vamos criar o próximo encontro <ArrowUpRight size={17}/></a></div>
    </section>
  );
}
