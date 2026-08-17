import React from 'react';

export default function SystemSection() {
  return (
    <section 
      aria-labelledby="spatial-bento-heading" 
      className="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64 overflow-hidden" 
      id="das-system"
    >
      {/* Anchor alias for #system */}
      <span id="system" className="absolute top-0 left-0 pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-6 md:py-8">
        
        {/* Section Header */}
        <header className="relative z-10 mb-4 md:mb-5 shrink-0">
          <p className="eyebrow mb-2 md:mb-3 text-gilt text-[0.66rem] sm:text-[0.72rem]">
            <span className="mr-2.5 tabular-nums opacity-70">08</span>The System
          </p>
          <h2 className="display text-[clamp(1.4rem,3vw,2.3rem)] text-bone leading-[1.12]" id="spatial-bento-heading">
            How a site is <span className="display-italic">put together</span>
          </h2>
          <p className="body-copy mt-2 max-w-md text-[0.75rem] sm:text-[0.82rem] md:text-[0.85rem] text-bone/70">
            Not a hunch, a system: delivery, weighting, sequence and craft all working into each other.
          </p>
        </header>

        {/* MOBILE VIEW (< md): 2x2 Bento that fits cleanly within 100svh single screen */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:hidden w-full max-w-lg mx-auto shrink-0">
          
          {/* Mobile Card 1: Reach */}
          <div className="group relative flex flex-col justify-between rounded-xl p-3.5 border border-bone/[0.12] bg-gradient-to-b from-bone/[0.07] to-bone/[0.02] shadow-lg backdrop-blur-md">
            <div>
              <p className="eyebrow text-[0.52rem] text-gilt/70">Reach</p>
              <h3 className="display text-[0.92rem] text-bone mt-0.5">Delivered worldwide</h3>
            </div>
            <div className="mt-2.5 flex items-baseline justify-between border-t border-bone/10 pt-2">
              <span className="text-[0.66rem] text-bone/60 leading-tight">Global edge</span>
              <span className="display text-[0.85rem] text-bone font-medium">9 Regions</span>
            </div>
          </div>

          {/* Mobile Card 2: Process */}
          <div className="group relative flex flex-col justify-between rounded-xl p-3.5 border border-bone/[0.12] bg-gradient-to-b from-bone/[0.07] to-bone/[0.02] shadow-lg backdrop-blur-md">
            <div>
              <p className="eyebrow text-[0.52rem] text-gilt/70">Sequence</p>
              <h3 className="display text-[0.92rem] text-bone mt-0.5">Briefing to launch</h3>
            </div>
            <div className="mt-2.5 flex items-baseline justify-between border-t border-bone/10 pt-2">
              <span className="text-[0.66rem] text-bone/60 leading-tight">Structured</span>
              <span className="display text-[0.85rem] text-bone font-medium">4 Steps</span>
            </div>
          </div>

          {/* Mobile Card 3: Pipeline */}
          <div className="group relative flex flex-col justify-between rounded-xl p-3.5 border border-bone/[0.12] bg-gradient-to-b from-bone/[0.07] to-bone/[0.02] shadow-lg backdrop-blur-md">
            <div>
              <p className="eyebrow text-[0.52rem] text-gilt/70">Pipeline</p>
              <h3 className="display text-[0.92rem] text-bone mt-0.5">Performance tested</h3>
            </div>
            <div className="mt-2.5 flex items-baseline justify-between border-t border-bone/10 pt-2">
              <span className="text-[0.66rem] text-bone/60 leading-tight">Framerate &amp; QA</span>
              <span className="display text-[0.85rem] text-bone font-medium">100%</span>
            </div>
          </div>

          {/* Mobile Card 4: Capability */}
          <div className="group relative flex flex-col justify-between rounded-xl p-3.5 border border-bone/[0.12] bg-gradient-to-b from-bone/[0.07] to-bone/[0.02] shadow-lg backdrop-blur-md">
            <div>
              <p className="eyebrow text-[0.52rem] text-gilt/70">Weighting</p>
              <h3 className="display text-[0.92rem] text-bone mt-0.5">Capability profile</h3>
            </div>
            <div className="mt-2.5 flex items-baseline justify-between border-t border-bone/10 pt-2">
              <span className="text-[0.66rem] text-bone/60 leading-tight">Design &amp; Craft</span>
              <span className="display text-[0.85rem] text-bone font-medium">Calibrated</span>
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
              
              {/* Desktop Card 1: Reach with SVG World Map */}
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
                            <div className="relative h-full w-full flex items-center justify-center">
                              <svg aria-hidden="true" viewBox="0 0 348 174" className="w-full h-full" style={{ contain: "layout style paint" }}>
                                <g style={{ transition: "transform 0.18s ease-out" }}>
                                  <g className="choropleth-features">
                                    <g opacity="0.85">
                                      {/* Simplified World Continents SVG Paths */}
                                      <path d="M45.932,94.311L43.936,92.849L41.5,91.571L40.962,90.207L38.532,86.084L34.909,78.068L30.234,54.264L36.204,54.171L43.121,54.241L54.55,57.143L63.768,58.132L71.692,57.558L76.128,52.253L80.147,60.206L85.998,55.11L89.834,79.559L95.255,72.897L102.845,76.973L109.468,86.917L107.694,91.211L100.346,92.482L96.917,96.133L90.726,101.191L84.881,104.379L79.154,95.328L73.118,94.547L45.932,94.311Z" fill="rgba(241,241,239,0.80)" stroke="rgba(2,2,2,0.85)" strokeWidth="0.35" />
                                      <path d="M248.582,93.994L243.858,99.231L241.453,100.081L239.228,102.701L232.988,103.04L230.166,105.675L226.928,101.685L218.279,99.975L215.402,103.806L211.206,97.811L209.158,95.196L213.302,90.241L218.074,91.888L223.495,91.617L227.195,85.975L232.679,84.611L238.489,85.747L244.747,91.206L248.582,93.994Z" fill="rgba(241,241,239,0.30)" stroke="rgba(2,2,2,0.85)" strokeWidth="0.35" />
                                      <path d="M300.296,151.163L306.703,154.531L307.751,157.47L309.744,158.632L306.21,157.849L302.5,156.632L300.327,157.482L297.03,156.793L293.223,152.068L290.599,150.036L293.532,149.406L298.547,150.632L300.296,151.163Z" fill="rgba(241,241,239,0.30)" stroke="rgba(2,2,2,0.85)" strokeWidth="0.35" />
                                      <path d="M119.276,-2.824L130.532,-11.046L144.262,-3.567L152.047,3.618L145.362,20.615L144.432,36.073L142.846,44.866L138.945,52.152L131.385,61.485L124.649,68.81L116.895,73.136L112.626,62.878L113.282,57.25L111.64,53.882L110.255,41.473L105.292,32.39L97.476,19.806L102.956,6.896L112.168,0.304L119.276,-2.824Z" fill="rgba(241,241,239,0.30)" stroke="rgba(2,2,2,0.85)" strokeWidth="0.35" />
                                      <path d="M170.324,93.626L171.681,95.284L170.181,97.58L171.115,100.979L170.653,102.48L166.121,103.511L162.91,102.605L163.209,98.574L160.029,95.832L162.799,94.831L165.649,92.635L167.818,92.255L170.324,93.626Z" fill="rgba(241,241,239,0.85)" stroke="rgba(2,2,2,0.85)" strokeWidth="0.35" />
                                      <path d="M178.678,126.003L179.691,128.571L179.059,132.395L177.813,135.663L176.22,135.976L174.11,135.738L171.882,135.673L168.321,135.487L166.436,137.059L164.722,134.096L167.009,133.616L168.474,129.833L175.929,125.365L178.678,126.003Z" fill="rgba(241,241,239,0.30)" stroke="rgba(2,2,2,0.85)" strokeWidth="0.35" />
                                      <path d="M285.976,181.492L282.758,183.447L278.607,184.419L275.772,183.997L275.227,179.031L274.311,176.068L273.995,173.558L274.408,170.152L276.879,169.061L281.398,167.563L285.518,162.795L288.11,163.153L289.582,161.91L292.175,160.422L295.725,160.357L298.471,165.353L301.108,161.04L303.111,162.834L306.533,167.808L310.972,172.985L312.357,177.884L311.333,181.875L309.289,185.51L306.006,189.06L301.979,188.977L297.52,185.44L294.139,182.646L285.976,181.492Z" fill="rgba(241,241,239,0.80)" stroke="rgba(2,2,2,0.85)" strokeWidth="0.35" />
                                      
                                      {/* Glowing Region Nodes */}
                                      <circle cx="68" cy="65" r="3" fill="#dfbe76" className="animate-pulse" />
                                      <circle cx="168" cy="98" r="3.5" fill="#dfbe76" className="animate-pulse" />
                                      <circle cx="288" cy="172" r="3" fill="#dfbe76" className="animate-pulse" />
                                      <circle cx="128" cy="45" r="2.5" fill="#dfbe76" />
                                      <circle cx="235" cy="100" r="2.5" fill="#dfbe76" />
                                      <circle cx="295" cy="155" r="2.5" fill="#dfbe76" />
                                      <circle cx="85" cy="90" r="2" fill="#dfbe76" />
                                      <circle cx="178" cy="135" r="2" fill="#dfbe76" />
                                      <circle cx="310" cy="175" r="2" fill="#dfbe76" />
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Card 2: Capability Profile with Visx Radar Graph */}
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
                          <div className="relative aspect-square h-full w-full flex items-center justify-center">
                            <svg aria-hidden="true" viewBox="0 0 232 232" className="w-full h-full" style={{ overflow: "visible" }}>
                              <g transform="translate(116, 116)">
                                {/* Background concentric polygons */}
                                <g>
                                  <path d="M-8.75,-15.155L-17.5,0L-8.75,15.155L8.75,15.155L17.5,0L8.75,-15.155L-8.75,-15.155" fill="none" stroke="rgba(241,241,239,0.15)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1" />
                                  <path d="M-17.5,-30.311L-35,0L-17.5,30.311L17.5,30.311L35,0L17.5,-30.311L-17.5,-30.311" fill="none" stroke="rgba(241,241,239,0.15)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1" />
                                  <path d="M-26.25,-45.466L-52.5,0L-26.25,45.466L26.25,45.466L52.5,0L26.25,-45.466L-26.25,-45.466" fill="none" stroke="rgba(241,241,239,0.15)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1" />
                                  <path d="M-35,-60.622L-70,0L-35,60.622L35,60.622L70,0L35,-60.622L-35,-60.622" fill="none" stroke="rgba(241,241,239,0.15)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1" />
                                </g>
                                {/* Spoke axes */}
                                <g>
                                  <line stroke="rgba(241,241,239,0.2)" strokeWidth="1" x1="0" y1="0" x2="0" y2="-70" />
                                  <line stroke="rgba(241,241,239,0.2)" strokeWidth="1" x1="0" y1="0" x2="60.62" y2="-35" />
                                  <line stroke="rgba(241,241,239,0.2)" strokeWidth="1" x1="0" y1="0" x2="60.62" y2="35" />
                                  <line stroke="rgba(241,241,239,0.2)" strokeWidth="1" x1="0" y1="0" x2="0" y2="70" />
                                  <line stroke="rgba(241,241,239,0.2)" strokeWidth="1" x1="0" y1="0" x2="-60.62" y2="35" />
                                  <line stroke="rgba(241,241,239,0.2)" strokeWidth="1" x1="0" y1="0" x2="-60.62" y2="-35" />
                                </g>
                                {/* Metric Labels */}
                                <g>
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="500" textAnchor="middle" x="0" y="-82" fill="rgba(241,241,239,0.75)">Design</text>
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="500" textAnchor="middle" x="71" y="-41" fill="rgba(241,241,239,0.75)">Performance</text>
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="500" textAnchor="middle" x="71" y="41" fill="rgba(241,241,239,0.75)">Accessibility</text>
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="500" textAnchor="middle" x="0" y="82" fill="rgba(241,241,239,0.75)">Interaction</text>
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="500" textAnchor="middle" x="-71" y="41" fill="rgba(241,241,239,0.75)">Scalability</text>
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="500" textAnchor="middle" x="-71" y="-41" fill="rgba(241,241,239,0.75)">Engineering</text>
                                </g>
                                {/* Primary Polygon Area (Amber Gold) */}
                                <g>
                                  <path d="M 0,-66.5 L 47.28,-27.3 L 49.7,28.7 L 0,63 L -42.4,24.5 L -48.5,-28 Z" fill="rgba(223, 190, 118, 0.42)" stroke="#dfbe76" strokeLinejoin="round" strokeWidth="2" />
                                  <circle cx="0" cy="-66.5" fill="#dfbe76" r="3.5" stroke="#000" strokeWidth="1.5" />
                                  <circle cx="47.28" cy="-27.3" fill="#dfbe76" r="3.5" stroke="#000" strokeWidth="1.5" />
                                  <circle cx="49.7" cy="28.7" fill="#dfbe76" r="3.5" stroke="#000" strokeWidth="1.5" />
                                  <circle cx="0" cy="63" fill="#dfbe76" r="3.5" stroke="#000" strokeWidth="1.5" />
                                  <circle cx="-42.4" cy="24.5" fill="#dfbe76" r="3.5" stroke="#000" strokeWidth="1.5" />
                                  <circle cx="-48.5" cy="-28" fill="#dfbe76" r="3.5" stroke="#000" strokeWidth="1.5" />
                                </g>
                                {/* Secondary Polygon Area (Cyan / Blue) */}
                                <g>
                                  <path d="M 0,-57.4 L 56.98,-32.9 L 53.34,30.8 L 0,47.6 L -44.86,25.9 L -47.28,-27.3 Z" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" strokeLinejoin="round" strokeWidth="1.5" />
                                </g>
                                {/* Score values */}
                                <g aria-hidden="true">
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="600" textAnchor="middle" x="0" y="-76" fill="#dfbe76">95</text>
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="600" textAnchor="middle" x="57" y="-33" fill="#dfbe76">78</text>
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="600" textAnchor="middle" x="60" y="34" fill="#dfbe76">82</text>
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="600" textAnchor="middle" x="0" y="74" fill="#dfbe76">90</text>
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="600" textAnchor="middle" x="-52" y="30" fill="#dfbe76">70</text>
                                  <text dominantBaseline="middle" fontSize="8" fontWeight="600" textAnchor="middle" x="-58" y="-34" fill="#dfbe76">80</text>
                                </g>
                              </g>
                            </svg>
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

              {/* Desktop Card 3: Process */}
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
