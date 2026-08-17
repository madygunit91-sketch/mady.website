import React from 'react';
import ChoroplethMap from './ChoroplethMap';
import RadarChart from './RadarChart';

export default function SystemSection() {
  return (
    <section 
      aria-labelledby="spatial-bento-heading" 
      className="relative flex h-[100svh] min-h-[100svh] max-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64 overflow-hidden" 
      id="das-system"
    >
      {/* Anchor alias for #system */}
      <span id="system" className="absolute top-0 left-0 pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full max-h-[100svh] py-3 sm:py-4 md:py-6">
        
        {/* Section Header */}
        <header className="relative z-10 mb-2.5 sm:mb-3 md:mb-4 shrink-0">
          <p className="eyebrow mb-1 text-gilt text-[0.62rem] sm:text-[0.68rem] md:text-[0.72rem]">
            <span className="mr-2.5 tabular-nums opacity-70">08</span>The System
          </p>
          <h2 className="display text-[clamp(1.25rem,2.6vw,2.2rem)] text-bone leading-[1.12]" id="spatial-bento-heading">
            How a site is <span className="display-italic">put together</span>
          </h2>
          <p className="body-copy mt-1 max-w-md text-[0.72rem] sm:text-[0.78rem] md:text-[0.85rem] text-bone/70 hidden sm:block">
            Not a hunch, a system: delivery, weighting, sequence and craft all working into each other.
          </p>
        </header>

        {/* MOBILE VIEW (< md): 2x2 Bento fitting 100% on one screen without scrolling */}
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:hidden w-full max-w-lg mx-auto shrink-0">
          
          {/* Mobile Card 1: Reach */}
          <div className="group relative flex flex-col justify-between rounded-xl p-3 border border-bone/[0.12] bg-gradient-to-b from-bone/[0.07] to-bone/[0.02] shadow-lg backdrop-blur-md">
            <div>
              <p className="eyebrow text-[0.5rem] text-gilt/70">Reach</p>
              <h3 className="display text-[0.85rem] text-bone mt-0.5 leading-snug">Delivered worldwide</h3>
            </div>
            <div className="mt-2 flex items-baseline justify-between border-t border-bone/10 pt-1.5">
              <span className="text-[0.62rem] text-bone/60 leading-tight">Global edge</span>
              <span className="display text-[0.8rem] text-bone font-medium">9 Regions</span>
            </div>
          </div>

          {/* Mobile Card 2: Sequence */}
          <div className="group relative flex flex-col justify-between rounded-xl p-3 border border-bone/[0.12] bg-gradient-to-b from-bone/[0.07] to-bone/[0.02] shadow-lg backdrop-blur-md">
            <div>
              <p className="eyebrow text-[0.5rem] text-gilt/70">Sequence</p>
              <h3 className="display text-[0.85rem] text-bone mt-0.5 leading-snug">Briefing to launch</h3>
            </div>
            <div className="mt-2 flex items-baseline justify-between border-t border-bone/10 pt-1.5">
              <span className="text-[0.62rem] text-bone/60 leading-tight">Structured</span>
              <span className="display text-[0.8rem] text-bone font-medium">4 Steps</span>
            </div>
          </div>

          {/* Mobile Card 3: Pipeline */}
          <div className="group relative flex flex-col justify-between rounded-xl p-3 border border-bone/[0.12] bg-gradient-to-b from-bone/[0.07] to-bone/[0.02] shadow-lg backdrop-blur-md">
            <div>
              <p className="eyebrow text-[0.5rem] text-gilt/70">Pipeline</p>
              <h3 className="display text-[0.85rem] text-bone mt-0.5 leading-snug">Performance tested</h3>
            </div>
            <div className="mt-2 flex items-baseline justify-between border-t border-bone/10 pt-1.5">
              <span className="text-[0.62rem] text-bone/60 leading-tight">Framerate &amp; QA</span>
              <span className="display text-[0.8rem] text-bone font-medium">100%</span>
            </div>
          </div>

          {/* Mobile Card 4: Weighting */}
          <div className="group relative flex flex-col justify-between rounded-xl p-3 border border-bone/[0.12] bg-gradient-to-b from-bone/[0.07] to-bone/[0.02] shadow-lg backdrop-blur-md">
            <div>
              <p className="eyebrow text-[0.5rem] text-gilt/70">Weighting</p>
              <h3 className="display text-[0.85rem] text-bone mt-0.5 leading-snug">Capability profile</h3>
            </div>
            <div className="mt-2 flex items-baseline justify-between border-t border-bone/10 pt-1.5">
              <span className="text-[0.62rem] text-bone/60 leading-tight">Design &amp; Craft</span>
              <span className="display text-[0.8rem] text-bone font-medium">Calibrated</span>
            </div>
          </div>

        </div>

        {/* DESKTOP VIEW (>= md): Full Interactive Spatial Bento Grid */}
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
                          <p className="eyebrow mb-1 text-[0.54rem] text-gilt/60">Pipeline</p>
                          <h3 className="display text-[1rem] leading-tight text-bone">What happens before launch</h3>
                        </div>
                      </div>
                      <div className="relative flex h-[11.5rem] flex-col">
                        <div className="relative flex-1 overflow-hidden" style={{ maskImage: "linear-gradient(to bottom, transparent, black 12%, black 82%, transparent)" }}>
                          <ul className="flex flex-col gap-2 py-2">
                            <li>
                              <div className="flex items-start gap-2.5 rounded-lg border border-bone/[0.07] bg-bone/[0.025] px-3 py-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-gilt/60">
                                  <path d="M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z"></path>
                                </svg>
                                <div className="min-w-0">
                                  <p className="truncate text-[0.74rem] font-medium text-bone/90">Scene calibrated</p>
                                  <p className="truncate text-[0.66rem] text-bone/45">Camera, light and material per section</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-start gap-2.5 rounded-lg border border-bone/[0.07] bg-bone/[0.025] px-3 py-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-gilt/60">
                                  <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                                </svg>
                                <div className="min-w-0">
                                  <p className="truncate text-[0.74rem] font-medium text-bone/90">Frame rate checked</p>
                                  <p className="truncate text-[0.66rem] text-bone/45">Frame budget on desktop and mobile</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-start gap-2.5 rounded-lg border border-bone/[0.07] bg-bone/[0.025] px-3 py-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-gilt/60">
                                  <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                                </svg>
                                <div className="min-w-0">
                                  <p className="truncate text-[0.74rem] font-medium text-bone/90">Contrast checked</p>
                                  <p className="truncate text-[0.66rem] text-bone/45">Text readability over moving background</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
