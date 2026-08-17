import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// 6 Pipeline Steps with custom minimal Phosphor-style SVG icons
const PIPELINE_STEPS = [
  {
    id: 'strategy',
    step: '01',
    title: 'Strategy locked',
    desc: 'Direction, goals and experience mapped',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3.5">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a40,40,0,1,1-40-40A40,40,0,0,1,168,128Zm-16,0a24,24,0,1,0-24,24A24,24,0,0,0,152,128Z" />
      </svg>
    )
  },
  {
    id: 'experience',
    step: '02',
    title: 'Experience built',
    desc: 'Interface, interactions and responsive states refined',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3.5">
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216V88H40ZM216,200H40V104H216v96Zm-32-48a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h104A8,8,0,0,1,184,152Z" />
      </svg>
    )
  },
  {
    id: 'performance',
    step: '03',
    title: 'Performance tuned',
    desc: 'Assets, rendering and loading optimized',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3.5">
        <path d="M215.79,118.17a8,8,0,0,0-7.79-6.17H144V40a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,5.66,13.66H112v72a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,215.79,118.17ZM128,204.69V144a8,8,0,0,0-8-8H59.31L128,67.31V128a8,8,0,0,0,8,8h60.69Z" />
      </svg>
    )
  },
  {
    id: 'accessibility',
    step: '04',
    title: 'Accessibility verified',
    desc: 'Keyboard, motion and contrast behavior checked',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3.5">
        <path d="M208,40H48A16,16,0,0,0,32,56v56a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,72H48V56H208v56Zm-34.34,42.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,192.69l50.34-50.35A8,8,0,0,1,173.66,154.34Z" />
      </svg>
    )
  },
  {
    id: 'responsive',
    step: '05',
    title: 'Responsive tested',
    desc: 'Desktop, tablet and mobile layouts validated',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3.5">
        <path d="M208,32H48A24,24,0,0,0,24,56V168a24,24,0,0,0,24,24h56v16H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H152V192h56a24,24,0,0,0,24-24V56A24,24,0,0,0,208,32Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Z" />
      </svg>
    )
  },
  {
    id: 'launch',
    step: '06',
    title: 'Launch ready',
    desc: 'Final QA completed and production build prepared',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3.5">
        <path d="M228.69,80.78a15.86,15.86,0,0,0-13.47-13.47C180,62,143.76,77.56,120.31,101L101,120.31C77.56,143.76,62,180,67.31,215.22a15.86,15.86,0,0,0,13.47,13.47c3.15.48,6.4.71,9.66.71,32,0,64.84-14.77,88.25-38.18L198,171.93C221.44,148.48,237,112.24,228.69,80.78ZM167.31,178.69C147.24,198.76,119,211.39,90.9,212.78c1.39-28.1,14-56.34,34.09-76.41L144.31,117,183,155.69ZM194.31,144.31,155.69,105.69l19.32-19.32C195.08,66.3,223.32,53.67,251.42,52.28c-1.39,28.1-14,56.34-34.09,76.41Z" />
      </svg>
    )
  }
];

export default function ProductionPipeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div 
      className="group relative flex h-full flex-col gap-2.5 overflow-hidden rounded-xl p-4 sm:p-4.5 border border-bone/[0.10] bg-gradient-to-b from-bone/[0.055] via-bone/[0.028] to-bone/[0.012] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)] transition-[border-color,box-shadow] duration-500 ease-out hover:border-bone/[0.22] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* 46px Technical Grid Overlay with radial mask */}
      <span 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-[0.35]" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(241,241,239,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,241,239,0.05) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage: "radial-gradient(120% 100% at 50% 0%, black 30%, transparent 100%)"
        }}
      />

      {/* Subtle radial gilt glow behind the progression line */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-1/4 h-64 w-48 rounded-full bg-gilt/[0.035] blur-3xl opacity-60"
      />

      {/* Foreground Content with 3D Depth */}
      <div className="relative z-10 flex h-full flex-col justify-between gap-2.5" style={{ transform: "translateZ(18px)" }}>
        
        {/* Header section */}
        <header className="flex flex-col gap-1 shrink-0">
          <div className="flex items-center justify-between gap-2">
            <p className="eyebrow text-[0.54rem] sm:text-[0.58rem] text-gilt/70 tracking-[0.24em]">
              Pipeline
            </p>
            <span className="eyebrow text-[0.46rem] text-bone/40 rounded-full border border-bone/10 bg-bone/[0.03] px-2 py-0.5">
              Production QA
            </span>
          </div>
          <h3 className="display text-[0.98rem] sm:text-[1.05rem] leading-tight text-bone">
            What happens before launch
          </h3>
          <p className="body-copy text-[0.66rem] sm:text-[0.70rem] text-bone/60 leading-relaxed max-w-[26ch] sm:max-w-none">
            Every detail is tested, refined and prepared before your experience goes live.
          </p>
        </header>

        {/* Pipeline Progression Viewport */}
        <div className="relative flex flex-1 flex-col justify-center">
          
          {/* Vertical progression connector line */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute left-[1.12rem] top-3.5 bottom-3.5 w-px bg-gradient-to-b from-gilt/20 via-bone/15 to-gilt/10"
          >
            {/* Illuminated pulse traveling down */}
            {!shouldReduceMotion && (
              <motion.div
                className="absolute left-0 w-full rounded-full bg-gradient-to-b from-transparent via-gilt/80 to-transparent"
                style={{ height: '36px' }}
                animate={{
                  top: ['0%', '100%'],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </div>

          {/* Masked items container */}
          <div 
            className="relative flex-1 overflow-y-auto overscroll-contain pr-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ 
              maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
            }}
          >
            <ol className="flex flex-col gap-1.5 sm:gap-2 py-1">
              {PIPELINE_STEPS.map((item, idx) => (
                <motion.li
                  key={item.id}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : idx * 0.07,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }}
                >
                  <div className="group/item relative flex items-center gap-2.5 rounded-lg border border-bone/[0.08] bg-bone/[0.03] px-2.5 py-1.5 sm:px-3 sm:py-2 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-bone/[0.22] hover:bg-bone/[0.06] hover:shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                    
                    {/* Step Icon with soft ambient glow on hover */}
                    <div className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-md border border-bone/[0.12] bg-[#0b0b0c]/80 text-gilt transition-colors duration-300 group-hover/item:border-gilt/40 group-hover/item:text-white group-hover/item:shadow-[0_0_12px_rgba(207,207,207,0.3)]">
                      {item.icon}
                    </div>

                    {/* Step text content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1.5">
                        <p className="truncate text-[0.72rem] sm:text-[0.76rem] font-medium text-bone/95 transition-colors duration-300 group-hover/item:text-white">
                          {item.title}
                        </p>
                        <span className="eyebrow text-[0.44rem] sm:text-[0.48rem] text-gilt/50 tabular-nums">
                          {item.step}
                        </span>
                      </div>
                      <p className="truncate text-[0.60rem] sm:text-[0.64rem] text-bone/50 transition-colors duration-300 group-hover/item:text-bone/75">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

        </div>

      </div>
    </div>
  );
}
