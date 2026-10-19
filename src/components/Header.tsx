"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { SITE_CONTENT } from "@/content/site-content";
import { Menu, X, ArrowRight } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-bg-primary/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-bg-primary/80 via-bg-primary/30 to-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-[1360px] px-5 md:px-10 flex items-center justify-between">
        <a href="#inicio" aria-label="Ir para o inicio" className="flex items-center">
          <Logo />
        </a>

        <nav
          className="hidden lg:flex items-center gap-8 text-sm text-text-muted font-medium"
          aria-label="Navegacao principal"
        >
          {SITE_CONTENT.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 transition-colors duration-200 hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-brand-cyan to-brand-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#convite"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-blue px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_30px_-8px_rgba(31,107,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-hover"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Convidar para meu evento</span>
            <ArrowRight className="relative h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden flex md:hidden items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
          aria-label="Abrir menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {mobileMenuOpen && <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`fixed inset-x-0 top-0 bottom-0 bg-bg-primary/95 backdrop-blur-2xl border-l border-white/10 z-50 flex flex-col p-7 transition-transform duration-500 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-12">
          <Logo />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {SITE_CONTENT.navigation.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-condensed text-3xl font-normal uppercase text-white py-3 border-b border-white/5 flex items-center justify-between"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
              <ArrowRight className="h-5 w-5 text-brand-cyan" />
            </a>
          ))}
        </div>

        <div className="mt-auto pt-8 border-t border-white/10 space-y-4">
          <a
            href="#convite"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center rounded-full bg-brand-blue py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_30px_-8px_rgba(31,107,255,0.6)]"
          >
            Quero convidar para meu evento
          </a>
          <p className="text-center text-[11px] text-text-muted uppercase tracking-[0.2em]">
            One Movement. Infinite Opportunities. 2027
          </p>
        </div>
      </div>}
    </header>
  );
};
