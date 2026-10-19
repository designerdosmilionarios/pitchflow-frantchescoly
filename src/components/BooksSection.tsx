"use client";

import { ArrowUpRight } from "lucide-react";
import { SITE_CONTENT } from "@/content/site-content";
import { ResponsivePhoto } from "./ResponsivePhoto";
import { Reveal } from "./Reveal";

export function BooksSection() {
  const book = SITE_CONTENT.books.items[0];
  return (
    <section id="livros" className="book-editorial book-responsive" aria-labelledby="book-title">
      <div className="editorial-container book-layout">
        <Reveal className="book-heading">
          <p className="section-kicker">03 / O livro</p>
          <h2 id="book-title" className="font-condensed">O próximo<br />capítulo começa<br /><span>com uma ideia.</span></h2>
        </Reveal>
        <Reveal delay={0.12} duration={1.2} className="book-art">
          <ResponsivePhoto desktop={{src:book.coverImage,width:1536,height:1024}} mobile={{src:"/assets/photos/book-mobile.png",width:941,height:1672}} alt={`Livro ${book.title}, de Frantchescoly Vilella`} sizes="(max-width: 900px) 100vw, 60vw" className="h-auto w-full object-contain" />
          <div className="book-caption"><span>Visão. Coragem. Movimento.</span><span>Uma leitura, novas possibilidades.</span></div>
        </Reveal>
        <Reveal className="book-detail">
          <span className="book-author">Frantchescoly Vilella</span>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <a href={book.purchaseUrl || "#convite"} className="editorial-text-link">Quero conhecer o livro <ArrowUpRight size={18} /></a>
        </Reveal>
      </div>
    </section>
  );
}
