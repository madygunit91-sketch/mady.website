import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChoroplethMap from './ChoroplethMap';
import RadarChart from './RadarChart';
import ProductionPipeline from './ProductionPipeline';

export default function SystemSection() {
  // Mobile Sections: Open by default on mobile, tap to collapse/expand individually
  const [openMobile, setOpenMobile] = useState(
    () => new Set(['reach', 'sequence', 'pipeline', 'weighting', 'attitude'])
  );

  const toggleMobile = (id) => {
    setOpenMobile((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const mobileSections = [
    {
      id: 'reach',
      step: '01',
      eyebrow: 'Reach',
      title: 'Delivered worldwide',
      stat: '9 Regions',
      content: (
        <div className="flex flex-col gap-2.5 pt-2 text-[0.72rem] text-bone/80 border-t border-bone/10 mt-2">
          <p className="leading-relaxed text-bone/90 font-light">
            Every page sits at the edges of the network — delivered directly from 9 edge clusters close to your visitors.
          </p>

          {/* Interactive Global Edge World Map */}
          <div className="relative my-1 w-full self-center overflow-hidden rounded-lg border border-bone/10 bg-bone/[0.02] p-1">
            <div className="relative w-full" style={{ aspectRatio: "2 / 1" }}>
              <div className="relative h-full w-full">
                <ChoroplethMap />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5 py-0.5 text-[0.62rem] text-bone/60">
            <div className="rounded-md border border-bone/10 bg-bone/[0.03] p-1.5 flex items-center justify-between">
              <span>Edge Delivery</span>
              <span className="text-gilt font-medium">&lt;50ms</span>
            </div>
            <div className="rounded-md border border-bone/10 bg-bone/[0.03] p-1.5 flex items-center justify-between">
              <span>Availability</span>
              <span className="text-gilt font-medium">99.99%</span>
            </div>
          </div>
          <p className="text-[0.64rem] text-bone/50 italic">
            Zero cold starts, ultra-fast routing, and instant dynamic caching worldwide.
          </p>
        </div>
      )
    },
    {
      id: 'sequence',
      step: '02',
      eyebrow: 'Sequence',
      title: 'From briefing to launch',
      stat: '4 Steps',
      content: (
        <div className="flex flex-col gap-2 pt-2 border-t border-bone/10 mt-2">
          <ol className="flex flex-col gap-1.5 text-[0.70rem]">
            <li className="flex items-start gap-2">
              <span className="eyebrow text-[0.52rem] text-gilt/60 font-semibold mt-0.5">01</span>
              <div>
                <strong className="text-bone/90 font-medium block">Discovery</strong>
                <span className="text-bone/60 text-[0.64rem]">Brand, audience, market and project objectives.</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="eyebrow text-[0.52rem] text-gilt/60 font-semibold mt-0.5">02</span>
              <div>
                <strong className="text-bone/90 font-medium block">Concept</strong>
                <span className="text-bone/60 text-[0.64rem]">Information structure, design direction, user journey.</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="eyebrow text-[0.52rem] text-gilt/60 font-semibold mt-0.5">03</span>
              <div>
                <strong className="text-bone/90 font-medium block">Build</strong>
                <span className="text-bone/60 text-[0.64rem]">Tailored design, responsive layout, motion & 3D engineering.</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="eyebrow text-[0.52rem] text-gilt/60 font-semibold mt-0.5">04</span>
              <div>
                <strong className="text-bone/90 font-medium block">Launch & Polish</strong>
                <span className="text-bone/60 text-[0.64rem]">Publish, frame-budget verification, ongoing refinement.</span>
              </div>
            </li>
          </ol>
        </div>
      )
    },
    {
      id: 'pipeline',
      step: '03',
      eyebrow: 'Pipeline',
      title: 'What happens before launch',
      stat: '6 Stages',
      content: (
        <div className="flex flex-col gap-2 pt-2 border-t border-bone/10 mt-2">
          <p className="text-[0.68rem] text-bone/80 leading-relaxed font-light">
            Every detail undergoes strict automated & manual production audits:
          </p>
          <ul className="grid grid-cols-2 gap-1.5 text-[0.62rem] text-bone/70">
            <li className="flex items-center gap-1.5 rounded-md border border-bone/10 bg-bone/[0.03] p-1.5">
              <span className="size-1.5 rounded-full bg-gilt" />
              <span>Strategy locked</span>
            </li>
            <li className="flex items-center gap-1.5 rounded-md border border-bone/10 bg-bone/[0.03] p-1.5">
              <span className="size-1.5 rounded-full bg-gilt" />
              <span>Experience built</span>
            </li>
            <li className="flex items-center gap-1.5 rounded-md border border-bone/10 bg-bone/[0.03] p-1.5">
              <span className="size-1.5 rounded-full bg-gilt" />
              <span>Performance tuned</span>
            </li>
            <li className="flex items-center gap-1.5 rounded-md border border-bone/10 bg-bone/[0.03] p-1.5">
              <span className="size-1.5 rounded-full bg-gilt" />
              <span>Accessibility verified</span>
            </li>
            <li className="flex items-center gap-1.5 rounded-md border border-bone/10 bg-bone/[0.03] p-1.5">
              <span className="size-1.5 rounded-full bg-gilt" />
              <span>Responsive tested</span>
            </li>
            <li className="flex items-center gap-1.5 rounded-md border border-bone/10 bg-bone/[0.03] p-1.5">
              <span className="size-1.5 rounded-full bg-gilt" />
              <span>Launch ready</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'weighting',
      step: '04',
      eyebrow: 'Weighting',
      title: 'Capability profile',
      stat: 'Calibrated',
      content: (
        <div className="flex flex-col gap-2.5 pt-2 border-t border-bone/10 mt-2">
          <p className="text-[0.68rem] text-bone/80 leading-relaxed font-light">
            Where the weight of a project sits — calibrated specifically per engagement:
          </p>
          {/* Interactive Visx Radar Chart Diagram */}
          <div className="relative mx-auto aspect-square w-full max-w-[13.5rem] my-1">
            <div className="relative aspect-square h-full w-full">
              <RadarChart />
            </div>
          </div>
          <p className="text-[0.60rem] leading-relaxed text-bone/40 text-center italic">
            Weighting 0–100 per project type — a profile, not measurements.
          </p>
        </div>
      )
    },
    {
      id: 'attitude',
      step: '05',
      eyebrow: 'Attitude',
      title: 'What we stand by',
      stat: 'Principles',
      content: (
        <div className="flex flex-col gap-2.5 pt-2 border-t border-bone/10 mt-2">
          <dl className="flex flex-col gap-2 text-[0.68rem]">
            <div className="rounded-md border border-bone/10 bg-bone/[0.03] p-2">
              <dt className="eyebrow text-[0.54rem] text-gilt font-semibold mb-0.5">Real-time</dt>
              <dd className="text-bone/75 text-[0.64rem] leading-relaxed">Every image and scene is calculated live in the browser via WebGL.</dd>
            </div>
            <div className="rounded-md border border-bone/10 bg-bone/[0.03] p-2">
              <dt className="eyebrow text-[0.54rem] text-gilt font-semibold mb-0.5">One piece</dt>
              <dd className="text-bone/75 text-[0.64rem] leading-relaxed">Concept, design, 3D and code execution come from a single source.</dd>
            </div>
            <div className="rounded-md border border-bone/10 bg-bone/[0.03] p-2">
              <dt className="eyebrow text-[0.54rem] text-gilt font-semibold mb-0.5">Measured</dt>
              <dd className="text-bone/75 text-[0.64rem] leading-relaxed">Load times and 60fps frame budgets are verified on real hardware.</dd>
            </div>
          </dl>
        </div>
      )
    }
  ];

  return (
    <section 
      aria-labelledby="spatial-bento-heading" 
      className="relative flex min-h-[100svh] md:h-[100svh] md:max-h-[100svh] md:overflow-hidden items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64 py-16 sm:py-20 md:py-0" 
      id="system"
    >

      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center min-h-full md:h-full md:max-h-[100svh] py-4 md:py-6">
        
        {/* Section Header */}
        <header className="relative z-10 mb-3 md:mb-4 shrink-0">
          <p className="eyebrow mb-1 text-gilt text-[0.62rem] sm:text-[0.68rem] md:text-[0.72rem]">
            <span className="mr-2.5 tabular-nums opacity-70">09</span>The System
          </p>
          <h2 className="display text-[clamp(1.25rem,2.6vw,2.2rem)] text-bone leading-[1.12]" id="spatial-bento-heading">
            How a site is <span className="display-italic">put together</span>
          </h2>
          <p className="body-copy mt-1 max-w-md text-[0.72rem] sm:text-[0.78rem] md:text-[0.85rem] text-bone/70 hidden sm:block">
            Not a hunch, a system: delivery, weighting, sequence and craft all working into each other.
          </p>
        </header>

        {/* MOBILE VIEW (< md): 5 Interactive Cards, Open by default, Tap to collapse/expand with natural two-scroll view */}
        <div className="flex flex-col gap-3 md:hidden w-full max-w-lg mx-auto py-2">
          {mobileSections.map((sec) => {
            const isExpanded = openMobile.has(sec.id);
            return (
              <div 
                key={sec.id}
                onClick={() => toggleMobile(sec.id)}
                className={`group relative flex flex-col rounded-xl p-3.5 border transition-all duration-300 backdrop-blur-md cursor-pointer select-none ${
                  isExpanded 
                    ? 'border-gilt/35 bg-gradient-to-b from-bone/[0.08] via-bone/[0.04] to-bone/[0.02] shadow-[0_8px_24px_rgba(0,0,0,0.6)] ring-1 ring-gilt/15' 
                    : 'border-bone/[0.12] bg-gradient-to-b from-bone/[0.05] to-bone/[0.02] shadow-md hover:border-bone/[0.22] hover:bg-bone/[0.07]'
                }`}
              >
                {/* Top Row: Eyebrow + Title + Stat + Animated Chevron */}
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="eyebrow text-[0.52rem] text-gilt/80 font-semibold">{sec.eyebrow}</span>
                      <span className="eyebrow text-[0.46rem] text-bone/40 rounded-full border border-bone/10 px-1.5 py-0.2">
                        {sec.step}
                      </span>
                    </div>
                    <h3 className="display text-[0.88rem] text-bone mt-0.5 leading-snug">
                      {sec.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="display text-[0.76rem] text-gilt font-medium tabular-nums">
                      {sec.stat}
                    </span>
                    <div className={`flex size-5 items-center justify-center rounded-full border border-bone/15 bg-bone/[0.04] text-bone/70 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 border-gilt/40 text-gilt bg-gilt/10' : 'rotate-0'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-2.5">
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Smooth Animated Expansion Section */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1.0] }}
                      className="overflow-hidden"
                    >
                      {sec.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* DESKTOP VIEW (>= md): Full Interactive Spatial Bento Grid — 100% Untouched */}
        <div 
          className="spatial-perspective pointer-events-none relative z-10 ml-auto w-full lg:z-[1] hidden md:block" 
          style={{ perspective: "1800px", transformStyle: "preserve-3d" }}
        >
          <div 
            className="spatial-orientation pointer-events-auto relative" 
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", willChange: "transform" }}
          >
            <div className="grid grid-cols-3 gap-3 md:gap-3.5">
              
              {/* Desktop Card 1: Reach with exact SVG World Map */}
              <div className="h-full md:col-span-2" style={{ transformStyle: "preserve-3d" }}>
                <div className="h-full">
                  <div className="group relative flex h-full flex-col gap-2.5 overflow-hidden rounded-xl p-4 border border-bone/[0.10] bg-gradient-to-b from-bone/[0.055] via-bone/[0.028] to-bone/[0.012] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)] transition-[border-color,box-shadow] duration-500 ease-out hover:border-bone/[0.20] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70">
                    <span 
                      aria-hidden="true" 
                      className="pointer-events-none absolute inset-0 opacity-[0.35]" 
                      style={{
                        backgroundImage: "linear-gradient(to right, rgba(241,241,239,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,241,239,0.05) 1px, transparent 1px)",
                        backgroundSize: "46px 46px",
                        maskImage: "radial-gradient(120% 100% at 50% 0%, black 30%, transparent 100%)"
                      }}
                    />
                    <div className="relative z-10 flex h-full flex-col gap-2" style={{ transform: "translateZ(18px)" }}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="eyebrow mb-1 text-[0.54rem] text-gilt/60">Reach</p>
                          <h3 className="display text-[1rem] leading-tight text-bone">Delivered worldwide</h3>
                        </div>
                      </div>
                      <p className="body-copy text-[0.74rem] leading-relaxed">
                        Every page sits at the edges of the network — close to the people opening it.
                      </p>
                      <div className="flex h-full flex-col gap-2">
                        <div className="flex items-baseline justify-end">
                          <span className="display text-[0.95rem] tabular-nums text-bone/85">9 regions</span>
                        </div>
                        <div className="relative mt-auto w-full max-w-[28rem] self-center overflow-hidden">
                          <div className="relative w-full" style={{ aspectRatio: "2 / 1" }}>
                            <div className="relative h-full w-full">
                              <ChoroplethMap />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Card 2: Capability Profile with exact Visx Radar Graph */}
              <div className="h-full md:col-span-1" style={{ transformStyle: "preserve-3d" }}>
                <div className="h-full" style={{ transformStyle: "preserve-3d" }}>
                  <div className="group relative flex h-full flex-col gap-2.5 overflow-hidden rounded-xl p-4 border border-bone/[0.10] bg-gradient-to-b from-bone/[0.055] via-bone/[0.028] to-bone/[0.012] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)] transition-[border-color,box-shadow] duration-500 ease-out hover:border-bone/[0.20] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70">
                    <span 
                      aria-hidden="true" 
                      className="pointer-events-none absolute inset-0 opacity-[0.35]" 
                      style={{
                        backgroundImage: "linear-gradient(to right, rgba(241,241,239,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,241,239,0.05) 1px, transparent 1px)",
                        backgroundSize: "46px 46px",
                        maskImage: "radial-gradient(120% 100% at 50% 0%, black 30%, transparent 100%)"
                      }}
                    />
                    <div className="relative z-10 flex h-full flex-col gap-2" style={{ transform: "translateZ(18px)" }}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="eyebrow mb-1 text-[0.54rem] text-gilt/60">Weighting</p>
                          <h3 className="display text-[1rem] leading-tight text-bone">Capability profile</h3>
                        </div>
                      </div>
                      <p className="body-copy text-[0.74rem] leading-relaxed">
                        Where the weight of a project sits — it shifts with the type.
                      </p>
                      <div className="flex h-full flex-col">
                        <div className="relative mx-auto aspect-square w-full max-w-[14.5rem]">
                          <div className="relative aspect-square h-full w-full">
                            <RadarChart />
                          </div>
                        </div>
                        <p className="mt-2 text-[0.58rem] leading-relaxed text-bone/35 text-center">
                          Weighting 0–100 per project type — a profile, not measurements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Card 3: Sequence */}
              <div className="h-full md:col-span-1" style={{ transformStyle: "preserve-3d" }}>
                <div className="h-full" style={{ transformStyle: "preserve-3d" }}>
                  <div className="group relative flex h-full flex-col gap-2.5 overflow-hidden rounded-xl p-4 border border-bone/[0.10] bg-gradient-to-b from-bone/[0.055] via-bone/[0.028] to-bone/[0.012] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)] transition-[border-color,box-shadow] duration-500 ease-out hover:border-bone/[0.20] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70">
                    <span 
                      aria-hidden="true" 
                      className="pointer-events-none absolute inset-0 opacity-[0.35]" 
                      style={{
                        backgroundImage: "linear-gradient(to right, rgba(241,241,239,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,241,239,0.05) 1px, transparent 1px)",
                        backgroundSize: "46px 46px",
                        maskImage: "radial-gradient(120% 100% at 50% 0%, black 30%, transparent 100%)"
                      }}
                    />
                    <div className="relative z-10 flex h-full flex-col gap-2" style={{ transform: "translateZ(18px)" }}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="eyebrow mb-1 text-[0.54rem] text-gilt/60">Sequence</p>
                          <h3 className="display text-[1rem] leading-tight text-bone">From briefing to launch</h3>
                        </div>
                      </div>
                      <ol className="mt-1.5 flex flex-col gap-2">
                        <li className="flex gap-3">
                          <span className="eyebrow mt-0.5 text-[0.58rem] text-gilt/45 tabular-nums">01</span>
                          <span className="min-w-0">
                            <span className="block text-[0.82rem] font-medium text-bone/90">Discovery</span>
                            <span className="block text-[0.7rem] leading-relaxed text-bone/45">Brand, audience, market and goals.</span>
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="eyebrow mt-0.5 text-[0.58rem] text-gilt/45 tabular-nums">02</span>
                          <span className="min-w-0">
                            <span className="block text-[0.82rem] font-medium text-bone/90">Concept</span>
                            <span className="block text-[0.7rem] leading-relaxed text-bone/45">Structure, design direction, user journey.</span>
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="eyebrow mt-0.5 text-[0.58rem] text-gilt/45 tabular-nums">03</span>
                          <span className="min-w-0">
                            <span className="block text-[0.82rem] font-medium text-bone/90">Design &amp; development</span>
                            <span className="block text-[0.7rem] leading-relaxed text-bone/45">Built to a high finish, responsive throughout.</span>
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="eyebrow mt-0.5 text-[0.58rem] text-gilt/45 tabular-nums">04</span>
                          <span className="min-w-0">
                            <span className="block text-[0.82rem] font-medium text-bone/90">Launch &amp; Optimization</span>
                            <span className="block text-[0.7rem] leading-relaxed text-bone/45">Publish, test, keep sharpening.</span>
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Card 4: Pipeline */}
              <div className="h-full md:col-span-1" style={{ transformStyle: "preserve-3d" }}>
                <ProductionPipeline />
              </div>

              {/* Desktop Card 5: Attitude */}
              <div className="h-full md:col-span-1" style={{ transformStyle: "preserve-3d" }}>
                <div className="h-full" style={{ transformStyle: "preserve-3d" }}>
                  <div className="group relative flex h-full flex-col gap-2.5 overflow-hidden rounded-xl p-4 border border-bone/[0.10] bg-gradient-to-b from-bone/[0.055] via-bone/[0.028] to-bone/[0.012] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)] transition-[border-color,box-shadow] duration-500 ease-out hover:border-bone/[0.20] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70">
                    <span 
                      aria-hidden="true" 
                      className="pointer-events-none absolute inset-0 opacity-[0.35]" 
                      style={{
                        backgroundImage: "linear-gradient(to right, rgba(241,241,239,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,241,239,0.05) 1px, transparent 1px)",
                        backgroundSize: "46px 46px",
                        maskImage: "radial-gradient(120% 100% at 50% 0%, black 30%, transparent 100%)"
                      }}
                    />
                    <div className="relative z-10 flex h-full flex-col gap-2" style={{ transform: "translateZ(18px)" }}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="eyebrow mb-1 text-[0.54rem] text-gilt/60">Attitude</p>
                          <h3 className="display text-[1rem] leading-tight text-bone">What we stand by</h3>
                        </div>
                      </div>
                      <dl className="mt-1 flex flex-col gap-2.5">
                        <div>
                          <dt className="eyebrow mb-1 text-[0.56rem] text-gilt/45">Real-time</dt>
                          <dd className="text-[0.76rem] leading-relaxed text-bone/65">Every image is calculated in the moment</dd>
                        </div>
                        <div>
                          <dt className="eyebrow mb-1 text-[0.56rem] text-gilt/45">One piece</dt>
                          <dd className="text-[0.76rem] leading-relaxed text-bone/65">Concept, design, and technology from a single source</dd>
                        </div>
                        <div>
                          <dt className="eyebrow mb-1 text-[0.56rem] text-gilt/45">Measured</dt>
                          <dd className="text-[0.76rem] leading-relaxed text-bone/65">Load time and frame rate checked, not guessed</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
