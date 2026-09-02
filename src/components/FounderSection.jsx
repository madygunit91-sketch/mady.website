import React from 'react';
import founderImg from '../assets/founder-moody.jpg';
import { scrollToSection } from '../utils/scrollController';

export default function FounderSection() {
  const smoothScrollTo = (e) => {
    if (e) e.preventDefault();
    scrollToSection('contact');
  };

  // Mobile gyroscope-driven 3D tilt
  const perspectiveRef = React.useRef(null);

  React.useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches;
    if (!isMobile) return;

    let ticking = false;
    let baselineBeta = null;
    let baselineGamma = null;

    const handleOrientation = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const beta = e.beta || 0;
          const gamma = e.gamma || 0;

          if (baselineBeta === null) {
            baselineBeta = beta;
            baselineGamma = gamma;
          }

          const dBeta = Math.max(-25, Math.min(25, beta - baselineBeta));
          const dGamma = Math.max(-25, Math.min(25, gamma - baselineGamma));

          const rotX = (dBeta / 25) * -8;
          const rotY = (dGamma / 25) * 8;

          const el = perspectiveRef.current;
          if (el) {
            const orientation = el.querySelector('.spatial-orientation');
            if (orientation) {
              orientation.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      const requestOnTap = () => {
        DeviceOrientationEvent.requestPermission().then((state) => {
          if (state === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
          }
        }).catch(() => {});
        document.removeEventListener('click', requestOnTap);
      };
      document.addEventListener('click', requestOnTap, { once: true });
    } else {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <section 
      aria-labelledby="founder-heading" 
      className="relative z-10 flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64 justify-start py-12 sm:py-0" 
      id="about"
    >
      <div className="relative mx-auto lg:mx-0 w-full max-w-4xl lg:max-w-[50rem] xl:max-w-[56rem] py-2 sm:py-4">
        
        {/* Spatial 3D Perspective Container */}
        <div 
          ref={perspectiveRef}
          className="spatial-perspective pointer-events-none relative z-10 w-full" 
          style={{ perspective: "1700px", transformStyle: "preserve-3d" }}
        >
          <div 
            className="spatial-orientation pointer-events-auto relative" 
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", willChange: "transform" }}
          >
            <div className="group relative flex flex-col overflow-hidden rounded-2xl md:rounded-3xl border border-bone/[0.14] bg-[#0b0b0c] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-500 hover:border-bone/[0.28]">
              
              {/* Technical grid overlay */}
              <span 
                aria-hidden="true" 
                className="pointer-events-none absolute inset-0 z-[2] opacity-[0.18]" 
                style={{
                  backgroundImage: "linear-gradient(to right, rgba(241,241,239,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,241,239,0.06) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                  maskImage: "radial-gradient(120% 100% at 50% 0%, black 35%, transparent 100%)"
                }}
              />

              {/* ===== MOBILE LAYOUT (sm:hidden): Stacked — text on top, framed complete image underneath ===== */}
              <div className="flex flex-col sm:hidden relative z-10 p-4">
                {/* Top: Text content */}
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <p className="eyebrow text-gilt flex items-center text-[0.62rem]">
                        <span className="mr-2 tabular-nums opacity-70">11</span>Meet the Founder
                      </p>
                      <span className="eyebrow rounded-full border border-bone/20 bg-black/60 px-2 py-0.5 text-[0.5rem] text-bone/90 backdrop-blur-md shrink-0">
                        Founder · Horizon Digital LTD
                      </span>
                    </div>

                    <h2 className="display text-[clamp(1.15rem,2.4vw,2rem)] text-bone leading-[1.14]" id="founder-heading">
                      Building at the intersection of business, <span className="display-italic">technology &amp; creativity.</span>
                    </h2>

                    <div className="body-copy mt-2 space-y-1.5 text-[0.74rem] text-bone/90 leading-relaxed">
                      <p className="font-medium text-bone">I'm Syed Mudassar Hassan (Mady), founder of Horizon Digital LTD.</p>
                      <p className="text-bone/80">My work sits at the intersection of business, technology, digital marketing and e-commerce — from marketing operations to building brands, websites, and SaaS products.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-bone/15 pt-2.5">
                    <div>
                      <span className="eyebrow text-[0.48rem] text-gilt/70 block">United Kingdom · Horizon Digital LTD</span>
                      <h3 className="display text-[0.92rem] text-bone block leading-tight">Syed Mudassar Hassan (Mady)</h3>
                    </div>
                    <a 
                      href="#contact" 
                      onClick={smoothScrollTo} 
                      className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-bone/25 bg-bone/[0.08] px-3 py-1.5 text-[0.58rem] text-bone transition-all duration-300 hover:border-gilt hover:bg-gilt hover:text-ink cursor-pointer"
                    >
                      Let's Work Together
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-2.5">
                        <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Bottom: Enlarged & Complete Portrait underneath text */}
                <div className="relative w-full mt-3.5" style={{ maxWidth: '100%' }}>
                  <div 
                    className="group/img relative w-full overflow-hidden rounded-xl border border-bone/30 bg-gradient-to-b from-bone/[0.12] to-black/90 shadow-2xl ring-1 ring-white/10"
                    style={{ aspectRatio: '1/1', maxHeight: '340px', width: '100%' }}
                  >
                    <img 
                      src={founderImg}
                      alt="Syed Mudassar Hassan (Mady) — Founder of Horizon Digital LTD" 
                      className="h-full w-full object-cover filter brightness-[1.04] contrast-[1.06] transition-transform duration-700 ease-out group-hover/img:scale-[1.04]"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }}
                      loading="eager"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between rounded-md border border-bone/20 bg-black/80 px-2.5 py-1 backdrop-blur-md">
                      <p className="display text-[0.66rem] text-bone leading-none font-medium">Syed Mudassar Hassan (Mady)</p>
                      <span className="eyebrow text-[0.48rem] text-gilt font-semibold">UK</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== DESKTOP / TABLET LAYOUT (hidden sm:block): Full Image in Background (50% Opacity) + All Text in Front ===== */}
              <div className="hidden sm:block relative overflow-hidden">
                
                {/* Background Portrait Image at 50% Opacity — Properly Framed */}
                <img 
                  src={founderImg}
                  alt="Syed Mudassar Hassan (Mady) — Founder of Horizon Digital LTD" 
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  style={{ opacity: 0.5, width: '100%', height: '100%', objectPosition: '75% 35%', display: 'block' }}
                  loading="eager"
                />

                {/* Dark gradient overlay for high text contrast & legibility */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b0b0c] via-[#0b0b0c]/80 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0c]/90 via-transparent to-[#0b0b0c]/30" />

                {/* All Text Content Layered Prominently in Front */}
                <div className="relative z-10 p-6 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-between min-h-[420px] lg:min-h-[460px]">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <p className="eyebrow text-gilt flex items-center text-[0.68rem] sm:text-[0.72rem]">
                        <span className="mr-2 tabular-nums opacity-70">11</span>Meet the Founder
                      </p>
                      <span className="eyebrow rounded-full border border-bone/20 bg-black/70 px-3 py-1 text-[0.54rem] sm:text-[0.58rem] text-bone/90 backdrop-blur-md shrink-0">
                        Founder · Horizon Digital LTD
                      </span>
                    </div>

                    <h2 className="display text-[clamp(1.25rem,2.5vw,2.15rem)] text-bone leading-[1.14] max-w-2xl" id="founder-heading-desktop">
                      Building at the intersection of business, <span className="display-italic">technology &amp; creativity.</span>
                    </h2>

                    <div className="body-copy mt-3.5 space-y-2 max-w-xl text-[0.82rem] sm:text-[0.86rem] md:text-[0.9rem] text-bone/90 leading-relaxed">
                      <p className="font-medium text-bone">I'm Syed Mudassar Hassan (Mady), founder of Horizon Digital LTD.</p>
                      <p className="text-bone/85">My work sits at the intersection of business, technology, digital marketing and e-commerce — from marketing operations to building brands, websites, and SaaS products.</p>
                      <p className="text-bone/75">What I enjoy most is turning an idea into something real — a brand, a digital experience, or a business system people actually use.</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-bone/15 pt-3.5">
                    <div>
                      <span className="eyebrow text-[0.52rem] sm:text-[0.56rem] text-gilt/80 block">United Kingdom · Horizon Digital LTD</span>
                      <h3 className="display text-[1.05rem] sm:text-[1.15rem] text-bone block leading-tight">Syed Mudassar Hassan (Mady)</h3>
                    </div>
                    <a 
                      href="#contact" 
                      onClick={smoothScrollTo} 
                      className="eyebrow inline-flex items-center gap-2 rounded-full border border-bone/30 bg-bone/[0.1] px-4 sm:px-5 py-2 text-[0.62rem] sm:text-[0.68rem] font-medium text-bone transition-all duration-300 hover:border-gilt hover:bg-gilt hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer"
                    >
                      Let's Work Together
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                      </svg>
                    </a>
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
