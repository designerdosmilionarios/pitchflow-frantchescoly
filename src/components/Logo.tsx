"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "light";
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
  showText = true,
  className = "",
}) => {
  return (
    <div
      className={`group flex items-center gap-3 transition-opacity duration-200 hover:opacity-100 ${className}`}
      aria-label="PitchFlow Movement"
    >
      {/* Icone oficial com glow */}
      <div className="relative h-10 w-10 shrink-0 p-1 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/assets/icon.png"
          alt="PitchFlow Movement"
          width={32}
          height={32}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-2">
            <span
              className={`font-condensed text-[22px] uppercase ${
                variant === "light" ? "text-text-dark" : "text-white"
              }`}
              style={{ letterSpacing: "0.02em", lineHeight: "0.95" }}
            >
              PITCHFLOW
            </span>
            <span
              className="relative h-1.5 w-1.5 rounded-full bg-brand-cyan"
              aria-hidden="true"
            >
              <span className="absolute inset-0 rounded-full bg-brand-cyan/40 animate-soft-ping" />
            </span>
          </div>
          <span
            className="mt-0.5 text-[10.5px] font-semibold uppercase text-brand-cyan"
            style={{ letterSpacing: "0.34em" }}
          >
            MOVEMENT
          </span>
        </div>
      )}
    </div>
  );
};
