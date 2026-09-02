import NavigationMenu from './components/NavigationMenu';
import AnimatedSection from './components/AnimatedSection';
import ActivityHeatmap from './components/ActivityHeatmap';
import ProjectInquiryForm from './components/ProjectInquiryForm';
import Integrations from './components/Integrations';
import FounderSection from './components/FounderSection';
import SystemSection from './components/SystemSection';
import React, { useState } from 'react';
import { SECTIONS, scrollToSection, getCurrentSectionIndex, isScrollLocked } from './utils/scrollController';

export function smoothScrollTo(e, targetId) {
  if (e) e.preventDefault();
  const id = targetId || (e && e.currentTarget ? e.currentTarget.getAttribute('href')?.replace(/^#/, '') : null);
  if (id) {
    scrollToSection(id);
  }
}

function FaqSection() {
  const [activeTab, setActiveTab] = React.useState(0);
  const faqData = [
    {
      q: "How much does a custom WebGL website cost?",
      a: "Bespoke projects at Horizon Digital LTD typically range from €10,000 to €25,000+ depending on 3D WebGL complexity, bespoke shader engineering, and interactive depth. Every project receives a transparent, fixed-scope proposal tailored to your commercial goals."
    },
    {
      q: "How long does a website build take?",
      a: "A complete bespoke web experience is typically designed, engineered, and launched in 4 to 8 weeks. This covers strategic dramaturgy, 3D composition, responsive development, accessibility compliance, and sub-second performance optimization."
    },
    {
      q: "What technologies does Horizon Digital LTD use?",
      a: "We build bespoke digital products using React, Three.js, WebGL shaders, Tailwind CSS, Vite, and edge-native serverless architectures, delivering 60fps real-time 3D performance on both desktop and mobile without external plugins."
    },
    {
      q: "How is such a presence created?",
      a: "First the dramaturgy: which scene carries which message. Only then are design and code created. Camerawork, lighting, and typography are set like in a studio — digital, but with photographic ambition."
    },
    {
      q: "What runs technically in the background?",
      a: "Real-time 3D directly in the browser via WebGL. No video, no plugin. Material, reflection, and shadows react live to camera and light, and the entire image chain is built for a strict frame budget."
    },
    {
      q: "Does it work on every device?",
      a: "The composition is rethought for each device rather than just scaled down. On desktop the full spatial arrangement, on the phone a flat, calm version with the same content. Those who have reduced motion get the static variant."
    }
  ];

  return (
    <section aria-labelledby="faq-heading" className="relative flex h-[100svh] min-h-[100svh] max-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64 overflow-hidden" id="faq">
      <div className="relative mx-auto w-full max-w-4xl">
        <header className="relative z-10 mb-6 max-w-xl">
          <p className="eyebrow mb-4 text-gilt"><span className="mr-3 tabular-nums opacity-70">07</span>FAQ</p>
          <h2 className="display text-[clamp(1.6rem,3.2vw,2.4rem)] text-bone" id="faq-heading">Clarity <span className="display-italic">upfront</span></h2>
        </header>
        <div className="relative z-10 w-full">
          <div className="rounded-xl border border-bone/[0.10] bg-gradient-to-b from-bone/[0.04] to-bone/[0.01] p-5 md:p-6 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)]">
            <div className="mb-4"><span className="eyebrow text-[0.58rem] text-gilt/55">In Detail</span></div>
            <ul className="divide-y divide-bone/[0.08]">
              {faqData.map((item, idx) => (
                <li key={idx}>
                  <button 
                    aria-pressed={activeTab === idx} 
                    className={`flex w-full items-center gap-3 py-3 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 ${activeTab === idx ? 'text-bone font-medium' : 'text-bone/55 hover:text-bone/85'}`}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                  >
                    <span aria-hidden="true" className={`h-4 w-px shrink-0 transition-colors duration-300 ${activeTab === idx ? 'bg-gilt' : 'bg-transparent'}`}></span>
                    <span className="display text-[0.95rem] leading-snug">{item.q}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="relative mt-3 min-h-[5rem] border-t border-bone/[0.08] pt-4">
              <p className="body-copy max-w-[58ch] text-[0.85rem] leading-relaxed text-bone/85 transition-opacity duration-300">
                {faqData[activeTab].a}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to hash on initial load
  React.useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && SECTIONS.includes(hash)) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 300);
    }
  }, []);

  // Global 3D Spatial Hover Effect
  React.useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { innerWidth, innerHeight } = window;
          // Calculate mouse position relative to center (-1 to 1)
          const x = (e.clientX / innerWidth - 0.5) * 2;
          const y = (e.clientY / innerHeight - 0.5) * 2;
          
          // Apply a significant 3D rotation to allow left/right views
          document.querySelectorAll('.spatial-orientation').forEach(el => {
            // Stronger rotation for dramatic 3D effect requested by user
            el.style.transform = `rotateX(${y * -20}deg) rotateY(${x * 35}deg)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  React.useEffect(() => {
    let wheelAccumulator = 0;
    let wheelResetTimer = null;

    const handleWheel = (e) => {
      if (isFormOpen || document.body.getAttribute('data-inquiry') === 'open') {
        return;
      }

      // Allow scrolling inside scrollable containers (e.g. integrations box)
      let target = e.target;
      while (target && target !== document.body && target !== document.documentElement) {
        if (target.classList && (target.classList.contains('overflow-y-auto') || target.classList.contains('overflow-auto'))) {
          if (target.scrollHeight > target.clientHeight) {
            return;
          }
        }
        target = target.parentElement;
      }

      e.preventDefault();

      if (isScrollLocked()) {
        return;
      }

      wheelAccumulator += e.deltaY;

      if (wheelResetTimer) clearTimeout(wheelResetTimer);
      wheelResetTimer = setTimeout(() => {
        wheelAccumulator = 0;
      }, 150);

      const threshold = 20;
      if (Math.abs(wheelAccumulator) >= threshold) {
        const currentIdx = getCurrentSectionIndex();
        if (wheelAccumulator > 0 && currentIdx < SECTIONS.length - 1) {
          wheelAccumulator = 0;
          scrollToSection(currentIdx + 1);
        } else if (wheelAccumulator < 0 && currentIdx > 0) {
          wheelAccumulator = 0;
          scrollToSection(currentIdx - 1);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (isFormOpen || ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }

      const currentIdx = getCurrentSectionIndex();

      if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentIdx < SECTIONS.length - 1) {
          scrollToSection(currentIdx + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentIdx > 0) {
          scrollToSection(currentIdx - 1);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(SECTIONS.length - 1);
      } else if (e.key.toLowerCase() === 'k') {
        e.preventDefault();
        scrollToSection('contact');
      }
    };

    let touchStartY = 0;
    let touchStartX = 0;

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
      }
    };

    const handleTouchEnd = (e) => {
      if (isFormOpen || isScrollLocked()) return;
      if (e.changedTouches.length === 1) {
        const deltaY = touchStartY - e.changedTouches[0].clientY;
        const deltaX = touchStartX - e.changedTouches[0].clientX;

        if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 40) {
          const currentIdx = getCurrentSectionIndex();
          if (deltaY > 0 && currentIdx < SECTIONS.length - 1) {
            scrollToSection(currentIdx + 1);
          } else if (deltaY < 0 && currentIdx > 0) {
            scrollToSection(currentIdx - 1);
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isFormOpen]);

  return (
    <div className="relative min-h-[100svh] overflow-x-clip bg-ink font-sans text-bone antialiased selection:bg-gilt/30 selection:text-bone">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[5]" style={{ background: "radial-gradient(130% 100% at 50% 45%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.38) 100%)" }}></div>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[6] bg-black/45 lg:hidden"></div>
      
      <a className="sr-only z-[200] focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:rounded-full focus:bg-bone focus:px-5 focus:py-2.5 focus:text-[0.82rem] focus:font-medium focus:text-ink focus:outline-none focus:ring-2 focus:ring-gilt/70 focus:ring-offset-2 focus:ring-offset-black" href="#main" onClick={(e) => { e.preventDefault(); scrollToSection('start'); }}>Skip to content</a>
      
      <header className="sticky w-full page-chrome !fixed inset-x-0 top-0 z-[100] pointer-events-auto">
        <div className="relative z-[110] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full lg:flex bg-transparent px-6 py-3 shadow-none dark:bg-transparent" style={{ minWidth: "800px" }}>
          <a className="eyebrow relative z-20 whitespace-nowrap text-bone cursor-pointer" href="#start" style={{ letterSpacing: "0.32em" }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollToSection('start'); }}>HORIZON DIGITAL LTD</a>
          <nav className="relative z-20 hidden flex-1 items-center justify-center gap-7 px-6 md:flex pointer-events-auto">
            <a className="eyebrow relative z-20 whitespace-nowrap px-1 py-2 text-bone/60 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer" href="#services" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollToSection('services'); }}>Services</a>
            <a className="eyebrow relative z-20 whitespace-nowrap px-1 py-2 text-bone/60 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer" href="#studio" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollToSection('studio'); }}>Studio</a>
            <a className="eyebrow relative z-20 whitespace-nowrap px-1 py-2 text-bone/60 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer" href="#process" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollToSection('process'); }}>Process</a>
            <a className="eyebrow relative z-20 whitespace-nowrap px-1 py-2 text-bone/60 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer" href="#about" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollToSection('about'); }}>Founder</a>
            <a className="eyebrow relative z-20 whitespace-nowrap px-1 py-2 text-bone/60 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer" aria-keyshortcuts="K" href="#contact" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollToSection('contact'); }}>Contact</a>
          </nav>
          <button className="relative z-20 hidden whitespace-nowrap rounded-full border border-bone/20 px-4 py-2 md:block eyebrow text-[0.6rem] text-bone transition-colors duration-300 hover:border-bone/40 hover:bg-bone/[0.06] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer" onClick={() => setIsFormOpen(true)}>Start a Project</button>
        </div>        {/* Mobile Navigation Header */}
        <div className="relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden bg-transparent shadow-none dark:bg-transparent">
          <div className="flex w-full flex-row items-center justify-between">
            <a className="eyebrow text-bone" href="#start" style={{"letterSpacing":"0.3em"}} onClick={(e) => { e.preventDefault(); scrollToSection('start'); setIsMobileMenuOpen(false); }}>HORIZON DIGITAL LTD</a>
            <button 
              aria-expanded={isMobileMenuOpen} 
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} 
              className="-mr-2 flex h-11 w-11 items-center justify-center text-bone transition-colors duration-300 hover:text-bone/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 cursor-pointer" 
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="w-full mt-3 rounded-2xl border border-bone/15 bg-ink/95 backdrop-blur-2xl p-6 shadow-2xl">
              <nav className="flex flex-col gap-4">
                {[
                  { id: 'services', label: 'Services' },
                  { id: 'studio', label: 'Studio' },
                  { id: 'process', label: 'Process' },
                  { id: 'about', label: 'Meet the Founder' },
                  { id: 'faq', label: 'FAQ' },
                  { id: 'system', label: 'The System' },
                  { id: 'activity', label: 'Activity' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      smoothScrollTo(e, item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="eyebrow text-bone/70 hover:text-bone text-sm py-1 transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-bone/30 text-xs">→</span>
                  </a>
                ))}
                <button
                  className="mt-3 w-full rounded-full border border-gilt/40 bg-gilt/10 py-3 text-center eyebrow text-[0.7rem] text-bone transition-colors hover:bg-gilt hover:text-ink"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsFormOpen(true);
                  }}
                >
                  Start a Project
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
      <NavigationMenu /><aside aria-label="Keyboard navigation" className="page-chrome keyboard-legend fixed bottom-8 left-8 z-30 hidden lg:block xl:left-12" style={{"textShadow":"0 1px 14px rgba(6,5,5,0.95), 0 0 4px rgba(6,5,5,0.9)"}}><div className="mb-4 flex items-center gap-3"><p className="eyebrow text-bone/35">Navigation</p><button aria-label="Enable keyboard navigation" aria-pressed="true" className="group relative h-[10px] w-[22px] rounded-full border border-bone/25 transition-colors duration-300 hover:border-bone/45 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" type="button"><span aria-hidden="true" className="absolute top-1/2 h-[4px] w-[4px] -translate-y-1/2 rounded-full transition-all duration-300 left-[13px] bg-gilt"></span></button></div><dl className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-[10px] transition-opacity duration-500 opacity-100"><dt className="flex gap-[3px]"><kbd className="inline-flex h-[17px] min-w-[17px] grow items-center justify-center rounded-[3px] border border-bone/20 px-[3px] font-sans text-[0.58rem] font-medium leading-none text-bone/55">↑</kbd><kbd className="inline-flex h-[17px] min-w-[17px] grow items-center justify-center rounded-[3px] border border-bone/20 px-[3px] font-sans text-[0.58rem] font-medium leading-none text-bone/55">↓</kbd><kbd className="inline-flex h-[17px] min-w-[17px] grow items-center justify-center rounded-[3px] border border-bone/20 px-[3px] font-sans text-[0.58rem] font-medium leading-none text-bone/55">W</kbd><kbd className="inline-flex h-[17px] min-w-[17px] grow items-center justify-center rounded-[3px] border border-bone/20 px-[3px] font-sans text-[0.58rem] font-medium leading-none text-bone/55">S</kbd></dt><dd className="text-[0.72rem] font-light tracking-wide text-bone/40">Switch scene</dd><dt className="flex gap-[3px]"><kbd className="inline-flex h-[17px] min-w-[17px] grow items-center justify-center rounded-[3px] border border-bone/20 px-[3px] font-sans text-[0.58rem] font-medium leading-none text-bone/55">K</kbd></dt><dd className="text-[0.72rem] font-light tracking-wide text-bone/40">Contact</dd></dl></aside><div aria-label="Language" className="page-chrome fixed bottom-8 right-8 z-30 hidden lg:block xl:right-12" role="group" style={{"textShadow":"0 1px 14px rgba(6,5,5,0.95), 0 0 4px rgba(6,5,5,0.9)"}}><div className="flex items-center gap-2.5"><button aria-current="true" aria-label="German" className="text-[0.68rem] font-light tracking-[0.14em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 text-bone" lang="de" type="button">DE</button><span aria-hidden="true" className="h-[9px] w-px bg-bone/20"></span><button aria-label="English" className="text-[0.68rem] font-light tracking-[0.14em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70 text-bone/50 hover:text-bone/80" lang="en" type="button">EN</button></div></div><main className="relative" id="main"><AnimatedSection><section id="start" className="relative z-10 flex h-[100svh] min-h-[100svh] max-h-[100svh] px-4 sm:px-6 md:px-12 items-center justify-start lg:pl-56 xl:pl-64 overflow-hidden"><div className="relative max-w-[32rem] "><p className="eyebrow mb-5 text-gilt" ><span className="mr-3 tabular-nums opacity-70">00</span>Web Design · Development · Brand Experience</p><div ><h1 className="display text-[clamp(2.8rem,8.5vw,7rem)] text-bone"><span className="block">Horizon</span><span className="block">
{/* */}Digital LTD</span></h1></div><div className="mt-6" ><p className="sr-only">Web design that makes brands look bigger.</p><div aria-hidden="true"><div className="text-[1.15rem] md:text-[1.5rem] font-normal text-center display !my-0 max-w-[22rem] !justify-start !text-left"><div className="inline"><div className="inline-block"><span className="text-bone opacity-0 hidden">W</span><span className="text-bone opacity-0 hidden">e</span><span className="text-bone opacity-0 hidden">b</span><span className="text-bone opacity-0 hidden"> </span><span className="text-bone opacity-0 hidden">d</span><span className="text-bone opacity-0 hidden">e</span><span className="text-bone opacity-0 hidden">s</span><span className="text-bone opacity-0 hidden">i</span><span className="text-bone opacity-0 hidden">g</span><span className="text-bone opacity-0 hidden">n</span><span className="text-bone opacity-0 hidden">,</span>&nbsp;</div><div className="inline-block"><span className="text-bone opacity-0 hidden">t</span><span className="text-bone opacity-0 hidden">h</span><span className="text-bone opacity-0 hidden">a</span><span className="text-bone opacity-0 hidden">t</span>&nbsp;</div><div className="inline-block"><span className="text-bone opacity-0 hidden">m</span><span className="text-bone opacity-0 hidden">a</span><span className="text-bone opacity-0 hidden">k</span><span className="text-bone opacity-0 hidden">e</span><span className="text-bone opacity-0 hidden">s</span>&nbsp;</div><div className="inline-block"><span className="text-bone opacity-0 hidden">b</span><span className="text-bone opacity-0 hidden">r</span><span className="text-bone opacity-0 hidden">a</span><span className="text-bone opacity-0 hidden">n</span><span className="text-bone opacity-0 hidden">d</span><span className="text-bone opacity-0 hidden">s</span>&nbsp;</div><div className="inline-block"><span className="text-bone opacity-0 hidden">l</span><span className="text-bone opacity-0 hidden">o</span><span className="text-bone opacity-0 hidden">o</span><span className="text-bone opacity-0 hidden">k</span>&nbsp;</div><div className="inline-block"><span className="opacity-0 hidden text-gilt">b</span><span className="opacity-0 hidden text-gilt">i</span><span className="opacity-0 hidden text-gilt">g</span><span className="opacity-0 hidden text-gilt">g</span><span className="opacity-0 hidden text-gilt">e</span><span className="opacity-0 hidden text-gilt">r</span><span className="opacity-0 hidden text-gilt">.</span>&nbsp;</div></div><span className="inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 !h-5 !bg-gilt/70 md:!h-6" ></span></div></div></div><p className="body-copy mt-6 max-w-[21rem] text-[1.05rem]" >We design modern websites that not only look good, but build trust, guide users, and perform measurably.</p><div className="eyebrow mt-14 flex items-center gap-3 text-bone/45" ><span className="inline-block h-8 w-px animate-pulse bg-bone/40"></span>Scroll to discover</div></div></section></AnimatedSection><AnimatedSection><section id="in-numbers" className="relative z-10 flex h-[100svh] min-h-[100svh] max-h-[100svh] px-4 sm:px-6 md:px-12 items-center justify-end lg:pr-10 overflow-hidden"><div className="relative max-w-[32rem] "><p className="eyebrow mb-5 text-gilt" ><span className="mr-3 tabular-nums opacity-70">01</span>Numbers</p><div ><h2 className="display text-[clamp(2rem,5vw,4rem)] text-bone"><span className="block">In</span><span className="block">
{/* */}Numbers</span></h2></div><p className="body-copy mt-5 max-w-md text-[0.95rem]" >What remains measurable from the work of recent projects.</p><dl className="mt-7 space-y-px" ><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">Projects</dt><dd><span className="display block text-xl text-bone">48+</span><span className="body-copy mt-0.5 block text-[0.82rem]">completed web projects</span></dd></div><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">Quality</dt><dd><span className="display block text-xl text-bone">92 %</span><span className="body-copy mt-0.5 block text-[0.82rem]">customer satisfaction</span></dd></div><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">Speed</dt><dd><span className="display block text-xl text-bone">3,8 s</span><span className="body-copy mt-0.5 block text-[0.82rem]">load time optimization</span></dd></div><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">Impact</dt><dd><span className="display block text-xl text-bone">+27 %</span><span className="body-copy mt-0.5 block text-[0.82rem]">conversion increase</span></dd></div></dl></div></section></AnimatedSection><AnimatedSection><section id="services" className="relative z-10 flex h-[100svh] min-h-[100svh] max-h-[100svh] px-4 sm:px-6 md:px-12 items-center justify-start lg:pl-56 xl:pl-64 overflow-hidden"><div className="relative max-w-[32rem] "><p className="eyebrow mb-5 text-gilt" ><span className="mr-3 tabular-nums opacity-70">02</span>Services — Design</p><div ><h2 className="display text-[clamp(2rem,5vw,4rem)] text-bone"><span className="block">What we</span><span className="block">
{/* */}build</span></h2></div><p className="body-copy mt-5 max-w-md text-[0.95rem]" >From complete brand identities to individual campaign pages — appearances that show attitude.</p><dl className="mt-7 space-y-px" ><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">01</dt><dd><span className="display block text-xl text-bone">Web Design</span><span className="body-copy mt-0.5 block text-[0.82rem]">Modern websites with strong visual appearance and clear user guidance.</span></dd></div><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">02</dt><dd><span className="display block text-xl text-bone">Landing Pages</span><span className="body-copy mt-0.5 block text-[0.82rem]">Conversion-optimized pages for products, campaigns, and services.</span></dd></div><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">03</dt><dd><span className="display block text-xl text-bone">Brand Experience</span><span className="body-copy mt-0.5 block text-[0.82rem]">Digital brand worlds with recognition value and high-quality aesthetics.</span></dd></div></dl></div></section></AnimatedSection><AnimatedSection><section id="build" className="relative z-10 flex h-[100svh] min-h-[100svh] max-h-[100svh] px-4 sm:px-6 md:px-12 items-center justify-end lg:pr-10 overflow-hidden"><div className="relative max-w-[32rem] "><p className="eyebrow mb-5 text-gilt" ><span className="mr-3 tabular-nums opacity-70">03</span>Services — Implementation</p><div ><h2 className="display text-[clamp(2rem,5vw,4rem)] text-bone"><span className="block">And how</span><span className="block">
{/* */}we build</span></h2></div><p className="body-copy mt-5 max-w-md text-[0.95rem]" >Design is one half. The other is clean craftsmanship.</p><dl className="mt-7 space-y-px" ><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">04</dt><dd><span className="display block text-xl text-bone">UI/UX Design</span><span className="body-copy mt-0.5 block text-[0.82rem]">Structured interfaces, clear user guidance, and intuitive experiences.</span></dd></div><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">05</dt><dd><span className="display block text-xl text-bone">Web Development</span><span className="body-copy mt-0.5 block text-[0.82rem]">Clean, fast, and responsive implementation of modern websites.</span></dd></div><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">06</dt><dd><span className="display block text-xl text-bone">Performance</span><span className="body-copy mt-0.5 block text-[0.82rem]">Optimization for speed, user behavior, and better conversion.</span></dd></div></dl></div></section></AnimatedSection><AnimatedSection><section aria-labelledby="work-heading" className="relative flex h-[100svh] min-h-[100svh] max-h-[100svh] items-center px-4 sm:px-6 md:px-12 overflow-hidden" id="work"><div className="relative mx-auto w-full max-w-6xl md:pt-[var(--work-drop)]" style={{"-WorkDrop":"min(9vh, max(0px, calc((100svh - 640px) / 2)))"}}><header className="relative z-10 mb-6 max-w-xl md:mb-[calc(2rem+var(--work-drop))]"><p className="eyebrow mb-4 text-gilt"><span className="mr-3 tabular-nums opacity-70">04</span>Work</p><h2 className="display text-[clamp(1.5rem,3vw,2.3rem)] text-bone" id="work-heading">Work that <span className="display-italic">works</span></h2><p className="body-copy mt-3 max-w-md text-[0.85rem]">Eight custom concept and app demos — all live and interactive in the browser.</p></header><div className="spatial-perspective pointer-events-none relative z-10 w-full max-w-[890px] lg:z-[1]" style={{"perspective":"1700px","transformStyle":"preserve-3d"}}><div className="spatial-orientation pointer-events-auto relative" style={{"transformStyle":"preserve-3d","backfaceVisibility":"hidden","willChange":"transform"}}><div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4"><a className="group relative flex h-full flex-col overflow-x-hidden rounded-2xl border border-bone/[0.12] bg-gradient-to-b from-bone/[0.06] to-bone/[0.015] transition-[border-color,transform] duration-500 ease-out hover:border-bone/25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="https://demos.scfo.de/concept-001" rel="noopener noreferrer" target="_blank"><div className="relative overflow-x-hidden"><img alt="Oak &amp; Blade — Demo preview" className="h-28 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" decoding="async" loading="lazy" sizes="(min-width: 768px) 260px, calc(100vw - 3rem)" src="img/concept-001-card-900.webp" srcSet="img/concept-001-card-400.webp 400w, img/concept-001-card-900.webp 900w"/><span className="eyebrow absolute right-2.5 top-2.5 rounded-full border border-bone/20 bg-black/55 px-2 py-1 text-[0.5rem] leading-none text-bone/85 backdrop-blur-sm">Demo {/* */}001</span></div><span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 ease-out group-hover:bg-black/45"></span><div className="relative z-10 flex flex-1 flex-col p-3.5"><span className="eyebrow text-[0.5rem] text-gilt/55">Concept Demo · Barber & Hairdresser</span><h3 className="display mt-1 text-[0.95rem] text-bone">Oak &amp; Blade</h3><p className="mt-2 text-[0.68rem] leading-relaxed text-bone/55">Masculine-editorial website for a premium barbershop — cinematic 3D hero, appointment-focused.</p><span className="eyebrow mt-auto inline-flex items-center gap-1.5 pt-3 text-[0.5rem] text-bone/70 transition-colors duration-300 group-hover:text-bone">View Demo<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg></span></div></a><a className="group relative flex h-full flex-col overflow-x-hidden rounded-2xl border border-bone/[0.12] bg-gradient-to-b from-bone/[0.06] to-bone/[0.015] transition-[border-color,transform] duration-500 ease-out hover:border-bone/25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="https://demos.scfo.de/concept-002" rel="noopener noreferrer" target="_blank"><div className="relative overflow-x-hidden"><img alt="Noir &amp; Basil — Demo preview" className="h-28 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" decoding="async" loading="lazy" sizes="(min-width: 768px) 260px, calc(100vw - 3rem)" src="img/concept-002-card-900.webp" srcSet="img/concept-002-card-400.webp 400w, img/concept-002-card-900.webp 900w"/><span className="eyebrow absolute right-2.5 top-2.5 rounded-full border border-bone/20 bg-black/55 px-2 py-1 text-[0.5rem] leading-none text-bone/85 backdrop-blur-sm">Demo {/* */}002</span></div><span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 ease-out group-hover:bg-black/45"></span><div className="relative z-10 flex flex-1 flex-col p-3.5"><span className="eyebrow text-[0.5rem] text-gilt/55">Concept Demo · Fine Dining</span><h3 className="display mt-1 text-[0.95rem] text-bone">Noir &amp; Basil</h3><p className="mt-2 text-[0.68rem] leading-relaxed text-bone/55">Atmospheric website for fine dining — moody menu storytelling, reservation-focused.</p><span className="eyebrow mt-auto inline-flex items-center gap-1.5 pt-3 text-[0.5rem] text-bone/70 transition-colors duration-300 group-hover:text-bone">View Demo<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg></span></div></a><a className="group relative flex h-full flex-col overflow-x-hidden rounded-2xl border border-bone/[0.12] bg-gradient-to-b from-bone/[0.06] to-bone/[0.015] transition-[border-color,transform] duration-500 ease-out hover:border-bone/25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="https://demos.scfo.de/concept-004" rel="noopener noreferrer" target="_blank"><div className="relative overflow-x-hidden"><img alt="Praxis Lindenhof — Demo preview" className="h-28 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" decoding="async" loading="lazy" sizes="(min-width: 768px) 260px, calc(100vw - 3rem)" src="img/concept-004-card-900.webp" srcSet="img/concept-004-card-400.webp 400w, img/concept-004-card-900.webp 900w"/><span className="eyebrow absolute right-2.5 top-2.5 rounded-full border border-bone/20 bg-black/55 px-2 py-1 text-[0.5rem] leading-none text-bone/85 backdrop-blur-sm">Demo {/* */}004</span></div><span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 ease-out group-hover:bg-black/45"></span><div className="relative z-10 flex flex-1 flex-col p-3.5"><span className="eyebrow text-[0.5rem] text-gilt/55">Concept Demo · General Practice</span><h3 className="display mt-1 text-[0.95rem] text-bone">Praxis Lindenhof</h3><p className="mt-2 text-[0.68rem] leading-relaxed text-bone/55">Calm, trustworthy website for a general practice — clear structure, accessible, appointment-focused.</p><span className="eyebrow mt-auto inline-flex items-center gap-1.5 pt-3 text-[0.5rem] text-bone/70 transition-colors duration-300 group-hover:text-bone">View Demo<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg></span></div></a></div></div></div><p className="relative z-10 mt-5 text-[0.68rem] text-bone/50">More demos on{/* */} <a className="text-bone/70 underline underline-offset-4 hover:text-bone" href="https://demos.scfo.de" rel="noopener noreferrer" target="_blank">demos.scfo.de</a></p></div></section></AnimatedSection><AnimatedSection><section id="studio" className="relative z-10 flex h-[100svh] min-h-[100svh] max-h-[100svh] px-4 sm:px-6 md:px-12 items-center justify-start lg:pl-56 xl:pl-64 overflow-hidden"><div className="relative max-w-[32rem] "><p className="eyebrow mb-5 text-gilt" ><span className="mr-3 tabular-nums opacity-70">05</span>Studio</p><div ><h2 className="display text-[clamp(2.2rem,7vw,5.5rem)] text-bone"><span className="block">From a single</span><span className="block">
{/* */}Source</span></h2></div><div className="mt-8 space-y-5"><p className="body-copy max-w-md text-[1.05rem]" >Horizon Digital LTD is a web design and web development studio for modern brands, companies, and digital products — websites, landing pages, brand experiences, and UI/UX systems with a focus on trust, user guidance, and conversion.</p><p className="body-copy max-w-md text-[1.05rem]" >Strategy, design, and technical implementation come from a single source — from the first sketch to launch.</p></div><div className="mt-12 w-full"><div className="spatial-perspective pointer-events-none" style={{ perspective: "1600px", transformStyle: "preserve-3d" }}><div className="spatial-orientation pointer-events-auto relative" style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", willChange: "transform" }}><div className="relative w-[33rem] max-w-[calc(100vw-3rem)]"><Integrations /></div></div></div></div></div></section></AnimatedSection><AnimatedSection><section id="process" className="relative z-10 flex h-[100svh] min-h-[100svh] max-h-[100svh] px-4 sm:px-6 md:px-12 items-center justify-end lg:pr-10 overflow-hidden"><div className="relative max-w-[32rem] "><p className="eyebrow mb-5 text-gilt" ><span className="mr-3 tabular-nums opacity-70">06</span>Process</p><div ><h2 className="display text-[clamp(2rem,5vw,4rem)] text-bone"><span className="block">From Briefing</span><span className="block">
{/* */}to Launch</span></h2></div><p className="body-copy mt-5 max-w-md text-[0.95rem]" >Four steps every project goes through — with no surprises in between.</p><dl className="mt-7 space-y-px" ><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">01</dt><dd><span className="display block text-xl text-bone">Analysis</span><span className="body-copy mt-0.5 block text-[0.82rem]">Brand, target audience, market, and goals.</span></dd></div><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">02</dt><dd><span className="display block text-xl text-bone">Concept</span><span className="body-copy mt-0.5 block text-[0.82rem]">Structure, design direction, user guidance.</span></dd></div><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">03</dt><dd><span className="display block text-xl text-bone">Design & Development</span><span className="body-copy mt-0.5 block text-[0.82rem]">Built high-quality and responsive.</span></dd></div><div className="grid grid-cols-1 gap-1 border-t border-bone/12 py-3 md:grid-cols-[6.5rem_1fr] md:gap-4"><dt className="eyebrow text-bone/45 md:pt-1.5">04</dt><dd><span className="display block text-xl text-bone">Launch & Optimization</span><span className="body-copy mt-0.5 block text-[0.82rem]">Publish, test, refine.</span></dd></div></dl></div></section></AnimatedSection><AnimatedSection><FaqSection /></AnimatedSection><AnimatedSection><SystemSection /></AnimatedSection><AnimatedSection><section aria-labelledby="activity-heading" className="relative flex h-[100svh] min-h-[100svh] max-h-[100svh] items-center px-4 sm:px-6 md:px-12 overflow-hidden" id="activity"><div className="relative mx-auto w-full max-w-6xl flex flex-col justify-center h-full max-h-[100svh] py-4 md:py-6"><header className="relative z-10 mb-3 md:mb-5 max-w-xl shrink-0"><p className="eyebrow mb-2 md:mb-3 text-gilt text-[0.66rem] sm:text-[0.72rem]"><span className="mr-3 tabular-nums opacity-70">09</span>Activity</p><h2 className="display text-[clamp(1.4rem,3vw,2.4rem)] text-bone leading-[1.12]" id="activity-heading">A Year, <span className="display-italic">Day by Day</span></h2><p className="body-copy mt-1.5 max-w-md text-[0.75rem] sm:text-[0.82rem] md:text-[0.85rem] text-bone/70 hidden sm:block">Each cell is a workday. Dense weeks are build phases, quiet weeks are coordination and testing.</p></header><div className="spatial-perspective pointer-events-none relative z-10 w-full lg:z-[1] shrink-0" style={{"perspective":"1700px","transformStyle":"preserve-3d"}}><div className="spatial-orientation pointer-events-auto relative" style={{"transformStyle":"preserve-3d","backfaceVisibility":"hidden","willChange":"transform"}}><ActivityHeatmap /></div></div></div></section></AnimatedSection><FounderSection /><AnimatedSection><section aria-labelledby="kontakt-heading" className="relative z-10 flex h-[100svh] min-h-[100svh] max-h-[100svh] items-center justify-center px-4 sm:px-6 md:px-12 overflow-hidden" id="contact"><div className="w-full max-w-[44rem] text-center"><p className="eyebrow mb-6 text-gilt" >11{/* */} — {/* */}Project Inquiry</p><div id="kontakt-heading" ><h2 className="display text-[clamp(2.1rem,5.2vw,4rem)] leading-[1.04] text-bone"><span className="block">Ready to take the leap<span className="display-italic">?</span></span><span className="block">?</span></h2></div><p className="body-copy mx-auto mt-7 max-w-[30rem] text-[1rem]" >Tell us about your project in a few questions. We will get back to you personally — with an honest assessment, not a standard offer.</p><div className="mt-11 flex flex-col items-center gap-4" ><button onClick={() => setIsFormOpen(true)} className="group inline-flex items-center gap-3 rounded-full bg-bone px-8 py-3.5 text-[0.9rem] font-medium text-ink transition-[transform,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-px hover:shadow-[0_18px_46px_-18px_rgba(207,207,207,0.65)] motion-safe:active:translate-y-0 motion-safe:active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gilt/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black" type="button">Start Project Inquiry<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg></button><span className="text-[0.76rem] text-bone/50">Takes about 60 seconds.</span></div></div></section></AnimatedSection><AnimatedSection><section aria-labelledby="footer-heading" className="relative z-10 flex h-[100svh] min-h-[100svh] max-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-[14.5rem] overflow-hidden" id="footer"><div className="mx-auto w-full max-w-6xl"><h2 className="sr-only" id="footer-heading">Footer</h2><div className="max-w-[34rem] lg:max-w-[38rem]"><div><p className="eyebrow mb-4 text-gilt"><span className="mr-3 tabular-nums opacity-70">12</span>HORIZON DIGITAL LTD</p><p className="body-copy max-w-[34ch] text-[0.82rem]">Web design that makes brands look bigger. Modern websites, landing pages, and digital brand experiences from a single source.</p><ul aria-label="Social Media" className="flex items-center gap-4 mt-5"><li><a aria-label="Open Instagram" className="block text-bone/40 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="https://www.instagram.com/horizondigital_ltd" rel="noopener noreferrer" target="_blank"><svg aria-hidden="true" fill="currentColor" focusable="false" height="16" viewBox="0 0 24 24" width="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a></li><li><a aria-label="Open LinkedIn" className="block text-bone/40 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="https://www.linkedin.com/company/horizon-digital-ltd" rel="noopener noreferrer" target="_blank"><svg aria-hidden="true" fill="currentColor" focusable="false" height="16" viewBox="0 0 24 24" width="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></li><li><a aria-label="Open Email" className="block text-bone/40 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="mailto:info@mady.website"><svg aria-hidden="true" fill="currentColor" focusable="false" height="16" viewBox="0 0 24 24" width="16"><path d="M2 4v16h20V4H2zm18 2v1.535l-8 5.333-8-5.333V6h16zm-16 12V9.465l8 5.333 8-5.333V18H4z"></path></svg></a></li></ul></div><div className="mt-16 grid w-full grid-cols-2 gap-8 md:mt-0 md:grid-cols-2 md:gap-12 lg:ml-auto lg:w-auto xl:gap-20"><div className="flex flex-col"><h3 className="eyebrow mb-5 text-[0.68rem] text-bone/45">Navigation</h3><ul className="flex flex-col space-y-3.5"><li className="flex"><a className="text-[0.88rem] text-bone/70 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="#services" onClick={smoothScrollTo}>Services</a></li><li className="flex"><a className="text-[0.88rem] text-bone/70 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="#studio" onClick={smoothScrollTo}>Studio</a></li><li className="flex"><a className="text-[0.88rem] text-bone/70 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="#process" onClick={smoothScrollTo}>Process</a></li><li className="flex"><a className="text-[0.88rem] text-bone/70 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="#about" onClick={smoothScrollTo}>Founder</a></li><li className="flex"><a className="text-[0.88rem] text-bone/70 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="#contact" onClick={smoothScrollTo}>Contact</a></li></ul></div><div className="flex flex-col"><h3 className="eyebrow mb-5 text-[0.68rem] text-bone/45">Legal</h3><ul className="flex flex-col space-y-3.5"><li className="flex"><a className="text-[0.88rem] text-bone/70 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="/impressum">Imprint</a></li><li className="flex"><a className="text-[0.88rem] text-bone/70 transition-colors duration-300 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" href="/datenschutz">Privacy Policy</a></li></ul></div></div></div><div className="absolute bottom-6 left-6 right-6 flex flex-col items-start justify-between gap-4 md:bottom-8 md:left-12 md:right-12 md:flex-row md:items-center md:gap-0 lg:left-[14.5rem] border-t border-bone/[0.08] pt-6 md:pt-8"><p className="text-[0.68rem] text-bone/40">© 2026 Syed Mudassar Hassan (Mady). All rights reserved.</p></div></div></section></AnimatedSection></main>
      <ProjectInquiryForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;
