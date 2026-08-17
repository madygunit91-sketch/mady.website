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
        className="relative z-10 flex h-[100svh] min-h-[100svh] max-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64 justify-start overflow-hidden" 
        id="founder"
      >
        <div className="relative mx-auto lg:mx-0 w-full max-w-4xl lg:max-w-[50rem] xl:max-w-[56rem] py-2 sm:py-4">
          
          {/* Spatial 3D Perspective Container */}
          <div 
            className="spatial-perspective pointer-events-none relative z-10 w-full" 
            style={{ perspective: "1700px", transformStyle: "preserve-3d" }}
          >
            <div 
              className="spatial-orientation pointer-events-auto relative" 
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", willChange: "transform" }}
            >
              <div className="group relative flex flex-col overflow-hidden rounded-2xl md:rounded-3xl border border-bone/[0.14] bg-gradient-to-b from-bone/[0.08] via-bone/[0.04] to-bone/[0.018] p-4 sm:p-6 md:p-7 lg:p-8 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-500 hover:border-bone/[0.28]">
                
                {/* Technical grid overlay */}
                <span 
                  aria-hidden="true" 
                  className="pointer-events-none absolute inset-0 opacity-[0.2]" 
                  style={{
                    backgroundImage: "linear-gradient(to right, rgba(241,241,239,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,241,239,0.06) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                    maskImage: "radial-gradient(120% 100% at 50% 0%, black 35%, transparent 100%)"
                  }}
                />

                {/* Main Content Layout: Two-column on all screens, compact & highly readable */}
                <div className="relative z-10 flex flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                  
                  {/* Left Column: Comprehensive Bio & Info */}
                  <div className="flex flex-1 flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2.5">
                        <p className="eyebrow text-gilt flex items-center text-[0.62rem] sm:text-[0.7rem]">
                          <span className="mr-2 tabular-nums opacity-70">10</span>Meet the Founder
                        </p>
                        <span className="eyebrow rounded-full border border-bone/20 bg-black/60 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[0.5rem] sm:text-[0.54rem] text-bone/90 backdrop-blur-md shrink-0">
                          Founder · Horizon Digital
                        </span>
                      </div>

                      <h2 className="display text-[clamp(1.15rem,2.4vw,2rem)] text-bone leading-[1.14]" id="founder-heading">
                        Building at the intersection of business, <span className="display-italic">technology &amp; creativity.</span>
                      </h2>

                      <div className="body-copy mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-[0.74rem] sm:text-[0.82rem] md:text-[0.86rem] text-bone/90 leading-relaxed">
                        <p className="font-medium text-bone">I’m Syed Hassan, founder of Horizon Digital.</p>
                        <p className="text-bone/80">My work sits at the intersection of business, technology, digital marketing and e-commerce — from marketing operations to building brands, websites, and SaaS products.</p>
                        <p className="text-bone/70 hidden sm:block">What I enjoy most is turning an idea into something real — a brand, a digital experience, or a business system people actually use.</p>
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-t border-bone/15 pt-2.5 sm:pt-3.5">
                      <div>
                        <span className="eyebrow text-[0.48rem] sm:text-[0.52rem] text-gilt/70 block">United Kingdom · Horizon Digital</span>
                        <h3 className="display text-[0.92rem] sm:text-[1.1rem] text-bone block leading-tight">Syed Hassan</h3>
                      </div>

                      <a 
                        href="#projekt-anfragen" 
                        onClick={smoothScrollTo} 
                        className="eyebrow inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-bone/25 bg-bone/[0.08] px-3 py-1.5 sm:px-4 sm:py-2 text-[0.58rem] sm:text-[0.64rem] text-bone transition-all duration-300 hover:border-gilt hover:bg-gilt hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer"
                      >
                        Let's Work Together
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-2.5 sm:size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Prominent, Clearly Visible, High-Contrast Portrait */}
                  <div className="relative w-28 sm:w-36 md:w-44 lg:w-48 shrink-0 flex flex-col justify-center">
                    <div className="group/img relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-bone/30 bg-gradient-to-b from-bone/[0.12] to-black/90 shadow-2xl ring-1 ring-white/10">
                      <img 
                        src={founderImg}
                        alt="Syed Hassan — Founder of Horizon Digital" 
                        className="h-full w-full object-cover object-top filter brightness-[1.04] contrast-[1.06] transition-transform duration-700 ease-out group-hover/img:scale-[1.04]"
                        loading="eager"
                      />
                      
                      {/* Vignette & depth overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      
                      {/* Name Badge on Portrait */}
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between rounded-md border border-bone/20 bg-black/80 px-2 py-1 backdrop-blur-md">
                        <p className="display text-[0.64rem] text-bone leading-none font-medium">Syed Hassan</p>
                        <span className="eyebrow text-[0.46rem] text-gilt font-semibold">UK</span>
                      </div>
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
