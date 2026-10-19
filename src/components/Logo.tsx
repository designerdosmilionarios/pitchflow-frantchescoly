"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  forDarkMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", forDarkMode = false }) => {
  return (
    <Link
      href="#inicio"
      aria-label="PitchFlow Movement - Inicio"
      className={`group inline-flex items-center transition-opacity duration-200 hover:opacity-90 ${className}`}
    >
      {/* Logo oficial completo em PNG (símbolo + MOVEMENT + FRANTCHESCOLY VILELLA) */}
      <div className="relative h-10 md:h-11 w-auto transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/assets/logo.png"
          alt="PitchFlow Movement - Frantchescoly Vilella"
          width={108}
          height={36}
          className="h-full w-auto object-contain"
          priority
        />
      </div>

      {/* Ícone quadrado (usado opcionalmente quando o espaço é muito pequeno) */}
      <div className="relative hidden">
        <Image
          src="/assets/icon.png"
          alt="PitchFlow Movement"
          width={32}
          height={32}
          className="h-full w-full object-contain"
          priority
        />
      </div>
    </Link>
  );
};