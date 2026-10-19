import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MovementSection } from "@/components/MovementSection";
import { FounderSection } from "@/components/FounderSection";
import { PlatformSection } from "@/components/PlatformSection";
import { BooksSection } from "@/components/BooksSection";
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

      {/* 03. O Idealizador (#idealizador) */}
      <FounderSection />

      {/* 04. A Plataforma PitchFlow (#plataforma) */}
      <PlatformSection />

      {/* 05. Livros (#livros) */}
      <BooksSection />

      {/* 06. Convite / Conversão Principal (#convite) */}
      <InvitationSection />

      {/* 07. Contratações / Oferta B2B (#contratacoes) */}
      <ServicesSection />

      {/* 08. Rodapé Institucional (#contato) */}
      <Footer />
    </main>
  );
}
