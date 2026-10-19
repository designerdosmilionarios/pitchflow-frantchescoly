import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MovementSection } from "@/components/MovementSection";
import { FounderSection } from "@/components/FounderSection";
import { PlatformSection } from "@/components/PlatformSection";
import { BooksSection } from "@/components/BooksSection";
import { EventsSection } from "@/components/EventsSection";
import { InvitationSection } from "@/components/InvitationSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-bg-primary selection:bg-brand-blue selection:text-white">
      {/* 00. Header fixo translúcido */}
      <Header />

      {/* 01. Hero / Abertura cinematográfica (#inicio) */}
      <HeroSection />

      {/* 02. Movimento / O Brasil Conectado (#movimento) */}
      <MovementSection />

      {/* 03. O Idealizador / Autoridade (#idealizador) */}
      <FounderSection />

      {/* 04. A Plataforma PitchFlow (#plataforma) */}
      <PlatformSection />

      {/* 05. Livros / Quebra de ritmo clara (#livros) */}
      <BooksSection />

      {/* 06. Eventos / Prova Social (#eventos) */}
      <EventsSection />

      {/* 07. Convite / Conversão Principal com Google Sheets (#convite) */}
      <InvitationSection />

      {/* 08. Contratações / Oferta B2B (#contratacoes) */}
      <ServicesSection />

      {/* 09. Rodapé Institucional (#contato) */}
      <Footer />
    </main>
  );
}
