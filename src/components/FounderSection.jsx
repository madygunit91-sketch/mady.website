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
        className="relative z-10 flex min-h-[100svh] items-center px-6 pb-16 pt-24 md:py-12 md:px-12 lg:pl-56 xl:pl-64 justify-start" 
        id="founder"
      >
        <div className="relative mx-auto lg:mx-0 w-full max-w-4xl lg:max-w-[48rem] xl:max-w-[54rem]">
          
          {/* Spatial 3D Perspective Container matching sections above */}
          <div 
            className="spatial-perspective pointer-events-none relative z-10 w-full" 
            style={{ perspective: "1700px", transformStyle: "preserve-3d" }}
          >
            <div 
              className="spatial-orientation pointer-events-auto relative" 
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", willChange: "transform" }}
            >
              <div className="group relative flex flex-col overflow-hidden rounded-2xl md:rounded-3xl border border-bone/[0.14] bg-gradient-to-b from-bone/[0.07] via-bone/[0.035] to-bone/[0.015] p-7 sm:p-10 md:p-12 lg:p-14 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-500 hover:border-bone/[0.28] hover:shadow-[0_32px_80px_-24px_rgba(0,0,0,1)]">
                
                {/* Subtle technical grid background matching The System section */}
                <span 
                  aria-hidden="true" 
                  className="pointer-events-none absolute inset-0 opacity-[0.25]" 
                  style={{
                    backgroundImage: "linear-gradient(to right, rgba(241,241,239,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,241,239,0.06) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                    maskImage: "radial-gradient(120% 100% at 50% 0%, black 35%, transparent 100%)"
                  }}
                ></span>

                {/* Atmospheric founder image background layer behind text */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={founderImg}
                    alt="" 
                    className="h-full w-full object-cover object-top sm:object-right-top opacity-25 md:opacity-30 filter grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
                </div>

                {/* Content sitting directly in front of the portrait */}
                <header className="relative z-10 flex flex-col">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <p className="eyebrow text-gilt flex items-center text-[0.7rem] sm:text-[0.75rem]">
                      <span className="mr-3 tabular-nums opacity-70">10</span>Meet the Founder
                    </p>
                    <span className="eyebrow rounded-full border border-bone/20 bg-black/60 px-3.5 py-1.5 text-[0.6rem] text-bone/90 backdrop-blur-md">
                      Founder · Horizon Digital
                    </span>
                  </div>

                  <h2 className="display text-[clamp(1.75rem,3.8vw,2.9rem)] text-bone leading-[1.12]" id="founder-heading">
                    Building at the intersection of business, <span className="display-italic">technology &amp; creativity.</span>
                  </h2>

                  <div className="body-copy mt-6 space-y-4 text-[0.92rem] sm:text-[0.98rem] md:text-[1.02rem] text-bone/85 leading-relaxed max-w-[42rem]">
                    <p className="font-medium text-bone">I’m Syed Hassan, founder of Horizon Digital.</p>
                    <p>My work sits at the intersection of business, technology, digital marketing and e-commerce. Over the years, I’ve worked across different sides of the digital world — from marketing and business operations to building e-commerce brands, websites, SaaS products and technology-driven solutions.</p>
                    <p>What I enjoy most is taking an idea that exists on paper and turning it into something real — a brand, a product, a digital experience or a business system that people can actually use.</p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-bone/15 pt-6">
                    <div>
                      <span className="eyebrow text-[0.6rem] text-gilt/70 block">United Kingdom · Horizon Digital</span>
                      <h3 className="display text-[1.25rem] text-bone block mt-0.5">Syed Hassan</h3>
                    </div>

                    <a 
                      href="#projekt-anfragen" 
                      onClick={smoothScrollTo} 
                      className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-bone/25 bg-bone/[0.08] px-6 py-3 text-[0.68rem] text-bone transition-all duration-300 hover:border-gilt hover:bg-gilt hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer"
                    >
                      Let's Work Together
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                      </svg>
                    </a>
                  </div>
                </header>

              </div>
            </div>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}
