import React from 'react';
import founderImg from '../assets/founder-moody.jpg';
import AnimatedSection from './AnimatedSection';
import { scrollToSection } from '../utils/scrollController';

export default function FounderSection() {
  const smoothScrollTo = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    scrollToSection(targetId);
  };

  return (
    <AnimatedSection>
      <section aria-labelledby="founder-heading" className="relative z-10 flex min-h-[100svh] items-center px-6 pb-16 pt-24 md:py-12 md:px-12 lg:pl-56 xl:pl-64 justify-start" id="founder">
        <div className="relative mx-auto lg:mx-0 w-full max-w-2xl lg:max-w-[36rem] xl:max-w-[40rem]">
          
          <div className="group relative flex flex-col overflow-hidden rounded-2xl md:rounded-3xl border border-bone/[0.14] bg-gradient-to-b from-bone/[0.06] to-bone/[0.015] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl transition-[border-color] duration-500 hover:border-bone/30">
            
            {/* Atmospheric founder image background layer behind text */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <img 
                src={founderImg}
                alt="" 
                className="h-full w-full object-cover object-top sm:object-right-top opacity-30 md:opacity-35 filter grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
            </div>

            {/* Content sitting directly in front of the portrait */}
            <header className="relative z-10 flex flex-col">
              <div className="flex items-center justify-between gap-3 mb-4">
                <p className="eyebrow text-gilt flex items-center">
                  <span className="mr-3 tabular-nums opacity-70">10</span>Meet the Founder
                </p>
                <span className="eyebrow rounded-full border border-bone/20 bg-black/60 px-3 py-1 text-[0.55rem] text-bone/85 backdrop-blur-md">
                  Founder
                </span>
              </div>

              <h2 className="display text-[clamp(1.5rem,3.2vw,2.4rem)] text-bone leading-[1.15]" id="founder-heading">
                Building at the intersection of business, <span className="display-italic">technology &amp; creativity.</span>
              </h2>

              <div className="body-copy mt-5 space-y-3.5 text-[0.85rem] sm:text-[0.88rem] text-bone/85 leading-relaxed">
                <p className="font-medium text-bone">I’m Syed Hassan, founder of Horizon Digital.</p>
                <p>My work sits at the intersection of business, technology, digital marketing and e-commerce. Over the years, I’ve worked across different sides of the digital world — from marketing and business operations to building e-commerce brands, websites, SaaS products and technology-driven solutions.</p>
                <p>What I enjoy most is taking an idea that exists on paper and turning it into something real — a brand, a product, a digital experience or a business system that people can actually use.</p>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-bone/15 pt-5">
                <div>
                  <span className="eyebrow text-[0.55rem] text-gilt/60 block">United Kingdom · Horizon Digital</span>
                  <h3 className="display text-[1.1rem] text-bone block mt-0.5">Syed Hassan</h3>
                </div>

                <a 
                  href="#projekt-anfragen" 
                  onClick={smoothScrollTo} 
                  className="eyebrow inline-flex items-center gap-2 rounded-full border border-bone/20 bg-bone/[0.06] px-5 py-2.5 text-[0.62rem] text-bone transition-all duration-300 hover:border-gilt/60 hover:bg-gilt hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70"
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
      </section>
    </AnimatedSection>
  );
}
