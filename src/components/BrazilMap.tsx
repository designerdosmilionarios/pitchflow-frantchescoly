"use client";

import React, { useState } from "react";

interface NodePoint {
  uf: string;
  city: string;
  region: string;
  x: number;
  y: number;
}

// 27 Unidades Federativas mapeadas geograficamente no viewBox 500x520
const BRAZIL_NODES: NodePoint[] = [
  // Norte
  { uf: "AM", city: "Manaus", region: "Norte", x: 170, y: 140 },
  { uf: "PA", city: "Belém", region: "Norte", x: 290, y: 120 },
  { uf: "AP", city: "Macapá", region: "Norte", x: 285, y: 75 },
  { uf: "RR", city: "Boa Vista", region: "Norte", x: 195, y: 60 },
  { uf: "AC", city: "Rio Branco", region: "Norte", x: 95, y: 220 },
  { uf: "RO", city: "Porto Velho", region: "Norte", x: 160, y: 225 },
  { uf: "TO", city: "Palmas", region: "Norte", x: 310, y: 210 },
  // Nordeste
  { uf: "MA", city: "São Luís", region: "Nordeste", x: 345, y: 130 },
  { uf: "PI", city: "Teresina", region: "Nordeste", x: 370, y: 165 },
  { uf: "CE", city: "Fortaleza", region: "Nordeste", x: 420, y: 135 },
  { uf: "RN", city: "Natal", region: "Nordeste", x: 448, y: 155 },
  { uf: "PB", city: "João Pessoa", region: "Nordeste", x: 445, y: 175 },
  { uf: "PE", city: "Recife", region: "Nordeste", x: 440, y: 195 },
  { uf: "AL", city: "Maceió", region: "Nordeste", x: 435, y: 215 },
  { uf: "SE", city: "Aracaju", region: "Nordeste", x: 425, y: 230 },
  { uf: "BA", city: "Salvador", region: "Nordeste", x: 410, y: 260 },
  // Centro-Oeste
  { uf: "MT", city: "Cuiabá", region: "Centro-Oeste", x: 230, y: 270 },
  { uf: "MS", city: "Campo Grande", region: "Centro-Oeste", x: 235, y: 350 },
  { uf: "GO", city: "Goiânia", region: "Centro-Oeste", x: 295, y: 295 },
  { uf: "DF", city: "Brasília", region: "Centro-Oeste", x: 315, y: 285 },
  // Sudeste
  { uf: "MG", city: "Belo Horizonte", region: "Sudeste", x: 360, y: 335 },
  { uf: "ES", city: "Vitória", region: "Sudeste", x: 405, y: 340 },
  { uf: "RJ", city: "Rio de Janeiro", region: "Sudeste", x: 375, y: 380 },
  { uf: "SP", city: "São Paulo", region: "Sudeste", x: 320, y: 380 },
  // Sul
  { uf: "PR", city: "Curitiba", region: "Sul", x: 295, y: 415 },
  { uf: "SC", city: "Florianópolis", region: "Sul", x: 310, y: 445 },
  { uf: "RS", city: "Porto Alegre", region: "Sul", x: 285, y: 480 },
];

// Conexões estelares entre polos estratégicos
const CONNECTIONS = [
  ["DF", "SP"],
  ["DF", "RJ"],
  ["DF", "MG"],
  ["DF", "BA"],
  ["DF", "PA"],
  ["DF", "AM"],
  ["DF", "MT"],
  ["SP", "PR"],
  ["PR", "SC"],
  ["SC", "RS"],
  ["SP", "RJ"],
  ["SP", "MG"],
  ["MG", "ES"],
  ["BA", "PE"],
  ["PE", "CE"],
  ["CE", "MA"],
  ["MA", "PA"],
  ["PA", "AM"],
  ["AM", "RO"],
  ["MT", "MS"],
  ["MS", "PR"],
  ["TO", "DF"],
];

export const BrazilMap: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodePoint | null>(null);

  return (
    <div className="relative w-full max-w-[540px] aspect-[500/520] mx-auto select-none">
      {/* Glow de fundo */}
      <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <svg
        viewBox="0 0 500 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
        aria-label="Mapa do Brasil com os 27 estados conectados no PitchFlow Movement"
      >
        {/* Linhas de conexão vetoriais entre os polos */}
        <g className="opacity-40">
          {CONNECTIONS.map(([startUf, endUf], index) => {
            const p1 = BRAZIL_NODES.find((n) => n.uf === startUf);
            const p2 = BRAZIL_NODES.find((n) => n.uf === endUf);
            if (!p1 || !p2) return null;

            return (
              <line
                key={`line-${index}`}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="#147BFF"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                strokeOpacity="0.6"
              />
            );
          })}
        </g>

        {/* Silhueta contorno geométrica do Brasil */}
        <path
          d="M190 40 L260 50 L320 80 L380 120 L450 140 L460 170 L440 220 L420 280 L390 350 L340 390 L300 440 L280 500 L250 460 L230 400 L180 340 L120 280 L80 230 L110 180 L160 110 Z"
          fill="url(#brazil-gradient)"
          stroke="rgba(54, 185, 255, 0.25)"
          strokeWidth="1.5"
          className="transition-all duration-500"
        />

        {/* Gradiente do contorno */}
        <defs>
          <linearGradient id="brazil-gradient" x1="100" y1="50" x2="450" y2="500" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B111C" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#111B2B" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#05070B" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Pontos pulsantes das 27 UFs */}
        {BRAZIL_NODES.map((node) => {
          const isCapital = ["DF", "SP", "RJ", "MG", "BA", "PR", "RS", "AM", "PE"].includes(node.uf);
          const isSelected = activeNode?.uf === node.uf;

          return (
            <g
              key={node.uf}
              className="cursor-pointer transition-transform duration-200"
              onMouseEnter={() => setActiveNode(node)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Pulso animado para polos */}
              {isCapital && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="10"
                  fill="none"
                  stroke="#36B9FF"
                  strokeWidth="1"
                  className="animate-ping opacity-35 origin-center"
                />
              )}

              {/* Ponto Central */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isCapital ? (isSelected ? "6" : "4.5") : isSelected ? "5" : "3.5"}
                fill={isSelected ? "#FFFFFF" : isCapital ? "#36B9FF" : "#147BFF"}
                stroke="#05070B"
                strokeWidth="1.5"
                className="transition-all duration-200 drop-shadow-sm"
              />

              {/* Label de UF */}
              <text
                x={node.x + 8}
                y={node.y + 4}
                fill={isSelected ? "#FFFFFF" : isCapital ? "#ACB7C7" : "rgba(172, 183, 199, 0.6)"}
                fontSize={isCapital ? "11" : "9.5"}
                fontFamily="var(--font-barlow-condensed), sans-serif"
                fontWeight="700"
                className="select-none transition-colors duration-200 tracking-wider"
              >
                {node.uf}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip Dinâmico ao passar o mouse */}
      {activeNode && (
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-bg-elevated/95 border border-brand-cyan/40 backdrop-blur-md shadow-xl text-center pointer-events-none"
        >
          <span className="block text-xs font-bold text-brand-cyan tracking-wider uppercase">
            {activeNode.region}
          </span>
          <span className="block text-sm font-semibold text-white">
            {activeNode.city} ({activeNode.uf})
          </span>
        </div>
      )}
    </div>
  );
};
