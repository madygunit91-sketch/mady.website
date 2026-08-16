import React from 'react';
import { motion } from 'framer-motion';

export default function FounderSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const smoothScrollTo = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section aria-labelledby="founder-heading" className="relative z-10 flex min-h-[100svh] items-center px-6 py-24 md:px-12 lg:pl-56 xl:pl-64" id="founder">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20 items-start">
          
          {/* Left: Founder Portrait Area */}
          <div className="lg:col-span-5 w-full order-1 lg:order-1">
            <div className="group relative w-full overflow-hidden rounded-2xl border border-bone/[0.12] bg-gradient-to-b from-bone/[0.06] to-bone/[0.015] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)] aspect-[3/4] md:aspect-square lg:aspect-[3/4] flex flex-col justify-end p-6">
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "linear-gradient(to right, rgba(241,241,239,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,241,239,0.05) 1px, transparent 1px)", backgroundSize: "24px 24px", maskImage: "radial-gradient(100% 100% at 50% 0%, black 30%, transparent 100%)" }}></span>
              
              <div className="relative z-10 w-full flex flex-col items-center justify-center h-full opacity-60 mix-blend-overlay">
                {/* Abstract graphic representing the founder space */}
                <div className="w-32 h-32 rounded-full border border-bone/20 flex items-center justify-center bg-bone/[0.02]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="text-bone/40">
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                  </svg>
                </div>
                <p className="eyebrow mt-6 text-[0.6rem] text-bone/50 text-center tracking-widest">PORTRAIT PLACEHOLDER</p>
              </div>

              {/* Portrait Label */}
              <div className="relative z-10 mt-auto border-t border-bone/10 pt-4 flex flex-col items-start">
                <span className="display text-lg text-bone">Syed Hassan</span>
                <span className="eyebrow mt-1 text-[0.6rem] text-gilt/70">Founder · Horizon Digital</span>
              </div>
            </div>
          </div>

          {/* Right: Founder Details */}
          <div className="lg:col-span-7 w-full order-2 lg:order-2 flex flex-col justify-center">
            <p className="eyebrow mb-5 text-gilt">
              <span className="mr-3 tabular-nums opacity-70">09</span>MEET THE FOUNDER
            </p>
            
            <h2 id="founder-heading" className="display text-[clamp(1.8rem,4vw,3.2rem)] leading-tight text-bone mb-8">
              <span className="block">Building at the intersection of business,</span>
              <span className="block display-italic text-bone/90">technology & creativity.</span>
            </h2>

            <div className="body-copy space-y-5 text-[0.95rem] text-bone/80 max-w-[36rem]">
              <p>I’m Syed Hassan, founder of Horizon Digital.</p>
              <p>My work sits at the intersection of business, technology, digital marketing and e-commerce. Over the years, I’ve worked across different sides of the digital world — from marketing and business operations to building e-commerce brands, websites, SaaS products and technology-driven solutions.</p>
              <p>What I enjoy most is taking an idea that exists on paper and turning it into something real — a brand, a product, a digital experience or a business system that people can actually use.</p>
              <p>My approach is simple: understand the business first, use technology where it creates real value, and build experiences that are practical, scalable and memorable.</p>
              <p>Through Horizon Digital, I’m bringing these different areas together to help businesses build, modernize and grow in the digital world.</p>
            </div>

            {/* Quick Profile */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-bone/10 pt-8 sm:grid-cols-2"
            >
              <motion.div variants={itemVariants}>
                <p className="eyebrow text-[0.54rem] text-gilt/60 mb-1.5">Based in</p>
                <p className="text-[0.8rem] font-medium text-bone/90">United Kingdom</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="eyebrow text-[0.54rem] text-gilt/60 mb-1.5">Building</p>
                <p className="text-[0.8rem] font-medium text-bone/90">Horizon Digital</p>
              </motion.div>
              <motion.div variants={itemVariants} className="col-span-2 sm:col-span-1">
                <p className="eyebrow text-[0.54rem] text-gilt/60 mb-1.5">Role</p>
                <p className="text-[0.8rem] font-medium text-bone/90">Founder & Digital Strategist</p>
              </motion.div>
              <motion.div variants={itemVariants} className="col-span-2 sm:col-span-1">
                <p className="eyebrow text-[0.54rem] text-gilt/60 mb-1.5">Focus</p>
                <p className="text-[0.8rem] leading-snug font-medium text-bone/90">Digital Products · E-commerce · Technology · AI · Marketing</p>
              </motion.div>
            </motion.div>

            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a 
                href="#projekt-anfragen" 
                onClick={smoothScrollTo}
                className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-3 text-[0.85rem] font-medium text-ink transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-px hover:shadow-[0_12px_30px_-12px_rgba(207,207,207,0.65)] active:translate-y-0 active:scale-[0.985]"
              >
                Let’s Work Together
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </a>
              <a 
                href="#start" 
                onClick={smoothScrollTo}
                className="group inline-flex items-center gap-2 text-[0.8rem] font-medium text-bone/60 transition-colors duration-300 hover:text-bone"
              >
                Explore Horizon Digital
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
