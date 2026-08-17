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
        <div className="relative mx-auto lg:mx-0 w-full max-w-5xl lg:max-w-[56rem] xl:max-w-[62rem]">
          
          {/* Spatial 3D Perspective Container matching sections above */}
          <div 
            className="spatial-perspective pointer-events-none relative z-10 w-full" 
            style={{ perspective: "1700px", transformStyle: "preserve-3d" }}
          >
            <div 
              className="spatial-orientation pointer-events-auto relative" 
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", willChange: "transform" }}
            >
              <div className="group relative flex flex-col overflow-hidden rounded-2xl md:rounded-3xl border border-bone/[0.14] bg-gradient-to-b from-bone/[0.07] via-bone/[0.035] to-bone/[0.015] p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-500 hover:border-bone/[0.28] hover:shadow-[0_32px_80px_-24px_rgba(0,0,0,1)]">
                
                {/* Subtle technical grid background matching The System section */}
                <span 
                  aria-hidden="true" 
                  className="pointer-events-none absolute inset-0 opacity-[0.22]" 
                  style={{
                    backgroundImage: "linear-gradient(to right, rgba(241,241,239,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,241,239,0.06) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                    maskImage: "radial-gradient(120% 100% at 50% 0%, black 35%, transparent 100%)"
                  }}
                ></span>

                {/* 2-Column Responsive Layout: Text on Left, Complete Picture on Right */}
                <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-8 lg:gap-10">
                  
                  {/* Left Column: Bio & Info */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <p className="eyebrow text-gilt flex items-center text-[0.7rem]">
                          <span className="mr-2.5 tabular-nums opacity-70">10</span>Meet the Founder
                        </p>
                        <span className="eyebrow rounded-full border border-bone/20 bg-black/60 px-3 py-1 text-[0.58rem] text-bone/90 backdrop-blur-md">
                          Founder · Horizon Digital
                        </span>
                      </div>

                      <h2 className="display text-[clamp(1.65rem,3.4vw,2.6rem)] text-bone leading-[1.14]" id="founder-heading">
                        Building at the intersection of business, <span className="display-italic">technology &amp; creativity.</span>
                      </h2>

                      <div className="body-copy mt-5 space-y-3.5 text-[0.88rem] sm:text-[0.94rem] md:text-[0.98rem] text-bone/85 leading-relaxed">
                        <p className="font-medium text-bone">I’m Syed Hassan, founder of Horizon Digital.</p>
                        <p>My work sits at the intersection of business, technology, digital marketing and e-commerce. Over the years, I’ve worked across different sides of the digital world — from marketing and business operations to building e-commerce brands, websites, SaaS products and technology-driven solutions.</p>
                        <p>What I enjoy most is taking an idea that exists on paper and turning it into something real — a brand, a product, a digital experience or a business system that people can actually use.</p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-bone/15 pt-5">
                      <div>
                        <span className="eyebrow text-[0.58rem] text-gilt/70 block">United Kingdom · Horizon Digital</span>
                        <h3 className="display text-[1.15rem] text-bone block mt-0.5">Syed Hassan</h3>
                      </div>

                      <a 
                        href="#projekt-anfragen" 
                        onClick={smoothScrollTo} 
                        className="eyebrow inline-flex items-center gap-2 rounded-full border border-bone/25 bg-bone/[0.08] px-5 py-2.5 text-[0.66rem] text-bone transition-all duration-300 hover:border-gilt hover:bg-gilt hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer"
                      >
                        Let's Work Together
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Complete, Cleanly Fitted Portrait */}
                  <div className="relative w-full max-w-[18rem] sm:max-w-[20rem] lg:w-[21rem] shrink-0 self-center lg:self-stretch">
                    <div className="group/img relative h-full min-h-[19rem] sm:min-h-[22rem] lg:min-h-full w-full overflow-hidden rounded-xl sm:rounded-2xl border border-bone/20 bg-gradient-to-b from-bone/[0.08] to-black/70 shadow-2xl">
                      <img 
                        src={founderImg}
                        alt="Syed Hassan — Founder of Horizon Digital" 
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
                      />
                      
                      {/* Subtle elegant vignette overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-black/20" />
                      
                      {/* Floating Name Badge */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-bone/15 bg-black/65 px-3 py-1.5 backdrop-blur-md">
                        <div>
                          <p className="display text-[0.85rem] text-bone leading-none">Syed Hassan</p>
                          <p className="eyebrow text-[0.52rem] text-gilt/80 mt-0.5">Founder &amp; Director</p>
                        </div>
                        <span className="eyebrow text-[0.52rem] text-bone/60 border-l border-bone/15 pl-2.5">
                          UK
                        </span>
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
