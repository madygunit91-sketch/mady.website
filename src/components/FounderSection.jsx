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
    <section aria-labelledby="founder-heading" className="relative flex min-h-[100svh] items-start px-6 pb-16 pt-28 md:items-center md:py-12 md:px-12" id="founder">
      <div className="relative mx-auto w-full max-w-6xl md:pt-[var(--work-drop)] flex items-start" style={{ "--WorkDrop": "min(9vh, max(0px, calc((100svh - 640px) / 2)))" }}>
        
        <AnimatedSection>
        <header className="relative z-10 mb-8 max-w-xl shrink-0 lg:mb-[calc(2rem+var(--work-drop))]">
          <p className="eyebrow mb-4 text-gilt">
            <span className="mr-3 tabular-nums opacity-70">09</span>Meet the Founder
          </p>
          <h2 className="display text-[clamp(1.5rem,3vw,2.3rem)] text-bone" id="founder-heading">
            Building at the intersection of business, <span className="display-italic">technology & creativity.</span>
          </h2>
          <div className="body-copy mt-5 space-y-4 text-[0.85rem] text-bone/80 max-w-[34rem]">
            <p>I’m Syed Hassan, founder of Horizon Digital.</p>
            <p>My work sits at the intersection of business, technology, digital marketing and e-commerce. Over the years, I’ve worked across different sides of the digital world — from marketing and business operations to building e-commerce brands, websites, SaaS products and technology-driven solutions.</p>
            <p>What I enjoy most is taking an idea that exists on paper and turning it into something real — a brand, a product, a digital experience or a business system that people can actually use.</p>
          </div>
        </header>
        </AnimatedSection>

        <div className="spatial-perspective pointer-events-none absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-0 w-full max-w-[450px] lg:max-w-[550px]" style={{ perspective: "1700px", transformStyle: "preserve-3d" }}>
          <div className="spatial-orientation pointer-events-auto relative" style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", willChange: "transform" }}>
            <div className="grid grid-cols-1">
              
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-bone/[0.12] bg-gradient-to-b from-bone/[0.06] to-bone/[0.015] transition-[border-color,transform] duration-500 ease-out hover:border-bone/25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70">
                <div className="relative overflow-hidden w-full" style={{ paddingBottom: '125%' }}>
                  <img 
                    src={founderImg}
                    alt="Syed Hassan" 
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <span className="eyebrow absolute right-3 top-3 rounded-full border border-bone/20 bg-black/55 px-3 py-1.5 text-[0.55rem] leading-none text-bone/85 backdrop-blur-sm">
                    Founder
                  </span>
                </div>
                
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 ease-out group-hover:bg-black/10"></span>
                
                <div className="relative z-10 flex flex-1 flex-col p-6 border-t border-bone/[0.12] bg-bone/[0.02] backdrop-blur-md">
                  <span className="eyebrow text-[0.55rem] text-gilt/55">United Kingdom · Horizon Digital</span>
                  <h3 className="display mt-1 text-[1.2rem] text-bone">Syed Hassan</h3>
                  <p className="mt-3 text-[0.75rem] leading-relaxed text-bone/60">
                    My approach is simple: understand the business first, use technology where it creates real value, and build experiences that are practical, scalable and memorable.
                  </p>
                  
                  <a href="#projekt-anfragen" onClick={smoothScrollTo} className="eyebrow mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.55rem] text-bone/70 transition-colors duration-300 group-hover:text-bone">
                    Let's Work Together
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
