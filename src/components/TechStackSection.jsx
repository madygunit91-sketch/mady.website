import React from "react";
import "./TechStackSection.css";

// Clean inline tech icons (26x26)
const TECH_ICONS = {
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="26" height="26" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#58c4dc" />
      <g stroke="#58c4dc" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 128 128" width="26" height="26">
      <rect width="128" height="128" rx="16" fill="#3178c6" />
      <path d="M68 64h15v42c0 8.5-5 13-14 13-8.5 0-14-4-15-10.5l10.5-4.5c.8 3.5 2.5 5.5 5 5.5 2.8 0 4.5-1.5 4.5-4.5V64zM24 64h38v10H48v44H35V74H24V64z" fill="#ffffff" />
    </svg>
  ),
  threejs: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l16 4-8 12L4 4z" />
      <path d="M4 4l8 12 4-6" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#38bdf8">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
      <path d="M29.5 5.5L16.8 28.3c-.4.7-1.4.7-1.8 0L2.5 5.5c-.5-.9.2-2 1.2-1.9l12.8 1.4c.3 0 .7 0 1 0L28.3 3.6c1-.1 1.7 1 1.2 1.9z" fill="#bd34fe" />
      <path d="M22.5 4.5L11.2 24.3c-.4.7-1.4.7-1.8 0L4.5 9.5c-.3-.5.1-1.2.7-1.1l7.8 1.1c.3 0 .7 0 1 0l8-4.2c.7-.4 1.4.3 1.1 1l-.6 3.2z" fill="#ffc83b" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="#68a063">
      <path d="M16 3l12 7v14l-12 7-12-7V10l12-7zm0 3.2L6.5 11.8v10.4L16 27.6l9.5-5.4V11.8L16 6.2z" />
      <circle cx="16" cy="16" r="3.5" fill="#68a063" />
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
      <path d="M13.4 2.1c-.6-.7-1.7-.3-1.8.6L10.3 12H21c1 0 1.5 1.2.8 1.9l-10.4 10c-.6.7-1.7.3-1.8-.6L10.7 14H0c-1 0-1.5-1.2-.8-1.9l10.4-10z" fill="#3ecf8e" />
    </svg>
  ),
  cloudflare: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#f38020">
      <path d="M18.2 11.3c-.3-.8-.9-1.5-1.6-1.9-.7-.4-1.6-.6-2.4-.4-.7.2-1.4.6-1.9 1.2-.5.5-.8 1.2-.9 1.9H11c-.7-.8-1.7-1.3-2.8-1.3-1.6 0-3 1-3.6 2.5-.3.8-.3 1.7 0 2.5.3.8.9 1.4 1.6 1.8.7.4 1.6.5 2.4.4h9.8c1.1 0 2.1-.4 2.8-1.2.8-.8 1.2-1.8 1.2-2.9 0-1.2-.5-2.3-1.4-3.1-.7-.8-1.7-1.2-2.8-1.3v-.2z" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 180 180" width="26" height="26" fill="none">
      <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="#ffffff" />
      </mask>
      <g mask="url(#next-mask)">
        <circle cx="90" cy="90" r="90" fill="#000000" stroke="#ffffff" strokeWidth="8" />
        <path d="M149.5 158.5L74.8 62H58v56h12V77.5l68.5 88.5c3.8-2.2 7.5-4.7 11-7.5z" fill="#ffffff" />
        <rect x="110" y="62" width="12" height="56" fill="#ffffff" />
      </g>
    </svg>
  ),
  postgres: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#336791">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5v-3.5h2v-2h-2v-2h3v-2h-3V7h-2v10.5h2z" />
    </svg>
  )
};

const COLUMNS_DATA = [
  [
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Three.js", icon: "threejs" },
    { name: "Next.js", icon: "nextjs" },
  ],
  [
    { name: "Vite", icon: "vite" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Cloudflare", icon: "cloudflare" },
    { name: "Supabase", icon: "supabase" },
    { name: "PostgreSQL", icon: "postgres" },
  ],
  [
    { name: "Three.js", icon: "threejs" },
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Cloudflare", icon: "cloudflare" },
    { name: "Tailwind CSS", icon: "tailwind" },
  ],
  [
    { name: "Supabase", icon: "supabase" },
    { name: "Vite", icon: "vite" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "PostgreSQL", icon: "postgres" },
  ]
];

export default function TechStackSection() {
  return (
    <section 
      id="stack" 
      aria-labelledby="stack-heading"
      className="relative flex h-[100svh] min-h-[100svh] max-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl flex flex-col justify-center h-full max-h-[100svh] py-6 sm:py-10">
        
        {/* Section Header & Accessible Text */}
        <header className="relative z-20 mb-6 max-w-2xl shrink-0">
          <p className="eyebrow mb-3 text-gilt font-mono text-[0.66rem] sm:text-[0.72rem] uppercase tracking-widest">
            <span className="mr-3 tabular-nums opacity-70">04</span>INDUSTRY-STANDARD STACK
          </p>
          <h2 className="display text-[clamp(1.7rem,3.4vw,2.8rem)] text-bone leading-[1.12]" id="stack-heading">
            Engineered with <span className="display-italic">modern tooling</span>
          </h2>
          <p className="body-copy mt-3 max-w-xl text-[0.88rem] sm:text-[0.98rem] text-bone/85 leading-relaxed">
            I build with React, TypeScript, Three.js, Tailwind CSS and deploy on edge platforms like Vercel and Cloudflare.
          </p>
        </header>

        {/* Mobile View (< 1024px): Clean responsive badge list */}
        <div className="lg:hidden flex flex-wrap gap-2.5 max-w-lg mt-2">
          {["React", "TypeScript", "Three.js", "Tailwind CSS", "Vite", "Node.js", "Supabase", "Cloudflare", "Next.js", "PostgreSQL"].map((tech) => (
            <span 
              key={tech} 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-bone/15 bg-bone/[0.04] text-[0.74rem] font-mono text-bone/85"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gilt/80"></span>
              {tech}
            </span>
          ))}
        </div>

        {/* Desktop 3D Drift Wall (>= 1024px) */}
        <div className="hidden lg:flex stack-wall-viewport relative w-full h-[380px] xl:h-[420px] items-center justify-center pointer-events-none" aria-hidden="true">
          <div className="stack-wall-tilted flex gap-3">
            {COLUMNS_DATA.map((col, colIdx) => {
              const repeatedTiles = Array(8).fill(col).flat();
              return (
                <div 
                  key={colIdx} 
                  className={"stack-col stack-col-" + (colIdx + 1)}
                >
                  <div className="stack-col-track">
                    {repeatedTiles.map((tile, tileIdx) => (
                      <div key={tileIdx} className="stack-tile">
                        <div className="stack-tile-icon">
                          {TECH_ICONS[tile.icon]}
                        </div>
                        <span className="stack-tile-name">{tile.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
