import React from 'react';
import founderImg from '../assets/founder-moody.jpg';
import AnimatedSection from './AnimatedSection';
import { scrollToSection } from '../utils/scrollController';

export default function FounderSection() {
  const smoothScrollTo = (e) => {
    if (e) e.preventDefault();
    scrollToSection('projekt-anfragen');
  };

  return (
    <AnimatedSection>
      <section
        aria-labelledby="founder-heading"
        className="relative z-10 flex h-[100svh] min-h-[100svh] max-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64 overflow-hidden"
        id="founder"
      >
        <div className="relative w-full max-w-4xl mx-auto lg:mx-0">

          {/* Spatial 3D Perspective Container */}
          <div
            className="spatial-perspective pointer-events-none relative z-10 w-full"
            style={{ perspective: '1700px', transformStyle: 'preserve-3d' }}
          >
            <div
              className="spatial-orientation pointer-events-auto relative"
              style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', willChange: 'transform' }}
            >

              {/* Card — overflow-hidden keeps portrait fully contained */}
              <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-bone/[0.14] bg-gradient-to-b from-bone/[0.08] via-bone/[0.04] to-bone/[0.018] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-500 hover:border-bone/[0.28]">

                {/* Technical grid overlay */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-[1] opacity-[0.18]"
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(241,241,239,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,241,239,0.06) 1px, transparent 1px)',
                    backgroundSize: '44px 44px',
                    maskImage: 'radial-gradient(120% 100% at 50% 0%, black 35%, transparent 100%)',
                  }}
                />

                {/* ===== MOBILE LAYOUT: Stacked (portrait on top, text below) ===== */}
                <div className="flex flex-col sm:hidden">
                  {/* Portrait — fixed height on mobile */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={founderImg}
                      alt="Syed Hassan — Founder of Horizon Digital"
                      className="h-full w-full object-cover object-top"
                      loading="eager"
                    />
                    {/* Bottom fade to blend into text area */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
                    {/* Eyebrow badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="eyebrow rounded-full border border-bone/25 bg-black/70 px-2.5 py-1 text-[0.5rem] text-bone/90 backdrop-blur-md">
                        Founder · Horizon Digital
                      </span>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="relative z-[2] flex flex-col gap-3 p-4">
                    <div>
                      <p className="eyebrow mb-1 text-gilt text-[0.6rem]">
                        <span className="mr-2 tabular-nums opacity-70">10</span>Meet the Founder
                      </p>
                      <h2 className="display text-[1.15rem] text-bone leading-[1.15]" id="founder-heading">
                        Building at the intersection of business, <span className="display-italic">technology &amp; creativity.</span>
                      </h2>
                    </div>

                    <div className="body-copy space-y-1.5 text-[0.76rem] text-bone/85 leading-relaxed">
                      <p className="font-medium text-bone">I'm Syed Hassan, founder of Horizon Digital.</p>
                      <p className="text-bone/75">My work sits at the intersection of business, technology, digital marketing and e-commerce — from marketing operations to building brands, websites, and SaaS products.</p>
                    </div>

                    <div className="flex items-center justify-between gap-2 border-t border-bone/15 pt-3">
                      <div>
                        <span className="eyebrow text-[0.48rem] text-gilt/70 block">United Kingdom · Horizon Digital</span>
                        <h3 className="display text-[0.95rem] text-bone block leading-tight">Syed Hassan</h3>
                      </div>
                      <a
                        href="#projekt-anfragen"
                        onClick={smoothScrollTo}
                        className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-bone/25 bg-bone/[0.08] px-3 py-1.5 text-[0.58rem] text-bone transition-all duration-300 hover:border-gilt hover:bg-gilt hover:text-ink"
                      >
                        Let's Work Together
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-2.5">
                          <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* ===== DESKTOP / TABLET LAYOUT: Side-by-side ===== */}
                <div className="hidden sm:flex flex-row items-stretch">

                  {/* Left: Text */}
                  <div className="relative z-[2] flex flex-1 flex-col justify-between p-5 md:p-7 lg:p-8 min-w-0">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-2 sm:mb-3">
                        <p className="eyebrow text-gilt flex items-center text-[0.62rem] sm:text-[0.7rem]">
                          <span className="mr-2 tabular-nums opacity-70">10</span>Meet the Founder
                        </p>
                        <span className="eyebrow rounded-full border border-bone/20 bg-black/60 px-2.5 py-1 text-[0.52rem] text-bone/90 backdrop-blur-md shrink-0">
                          Founder · Horizon Digital
                        </span>
                      </div>

                      <h2 className="display text-[clamp(1.1rem,2.2vw,1.9rem)] text-bone leading-[1.15]" id="founder-heading-desktop">
                        Building at the intersection of business, <span className="display-italic">technology &amp; creativity.</span>
                      </h2>

                      <div className="body-copy mt-3 space-y-2 text-[0.76rem] sm:text-[0.82rem] md:text-[0.86rem] text-bone/85 leading-relaxed">
                        <p className="font-medium text-bone">I'm Syed Hassan, founder of Horizon Digital.</p>
                        <p className="text-bone/78">My work sits at the intersection of business, technology, digital marketing and e-commerce — from marketing operations to building brands, websites, and SaaS products.</p>
                        <p className="text-bone/65 hidden md:block">What I enjoy most is turning an idea into something real — a brand, a digital experience, or a business system people actually use.</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-bone/15 pt-3.5">
                      <div>
                        <span className="eyebrow text-[0.5rem] text-gilt/70 block">United Kingdom · Horizon Digital</span>
                        <h3 className="display text-[1rem] sm:text-[1.1rem] text-bone block leading-tight">Syed Hassan</h3>
                      </div>
                      <a
                        href="#projekt-anfragen"
                        onClick={smoothScrollTo}
                        className="eyebrow inline-flex items-center gap-2 rounded-full border border-bone/25 bg-bone/[0.08] px-4 py-2 text-[0.6rem] sm:text-[0.64rem] text-bone transition-all duration-300 hover:border-gilt hover:bg-gilt hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer"
                      >
                        Let's Work Together
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3">
                          <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right: Portrait — properly bounded, never overflows card */}
                  <div className="relative shrink-0 w-[38%] sm:w-[36%] md:w-[34%] lg:w-[32%] max-w-[260px] self-stretch overflow-hidden">
                    <img
                      src={founderImg}
                      alt="Syed Hassan — Founder of Horizon Digital"
                      className="absolute inset-0 h-full w-full object-cover object-[50%_15%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="eager"
                    />
                    {/* Left edge fade to blend with text card */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                    {/* Bottom vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {/* Name badge at bottom of portrait */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between rounded-lg border border-bone/20 bg-black/80 px-2.5 py-1.5 backdrop-blur-md">
                      <p className="display text-[0.68rem] text-bone leading-none font-medium">Syed Hassan</p>
                      <span className="eyebrow text-[0.5rem] text-gilt font-semibold">UK</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
