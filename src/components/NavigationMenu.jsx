import React, { useEffect, useState, useCallback } from 'react';
import { SECTIONS, scrollToSection, getCurrentSectionIndex } from '../utils/scrollController';

const sections = [
  { id: 'start', label: 'Home', number: '00' },
  { id: 'in-zahlen', label: 'In Numbers', number: '01' },
  { id: 'was-wir-bauen', label: 'Services — Design', number: '02' },
  { id: 'wie-wir-bauen', label: 'Services — Build', number: '03' },
  { id: 'arbeiten', label: 'Work', number: '04' },
  { id: 'aus-einer-hand', label: 'Studio', number: '05' },
  { id: 'vom-briefing-zum-launch', label: 'Process', number: '06' },
  { id: 'haeufige-fragen', label: 'FAQ', number: '07' },
  { id: 'das-system', label: 'The System', number: '08' },
  { id: 'aktivitaet', label: 'Activity', number: '09' },
  { id: 'founder', label: 'Meet the Founder', number: '10' },
  { id: 'projekt-anfragen', label: 'Contact', number: '11' },
  { id: 'footer', label: 'Footer', number: '12' },
];

export default function NavigationMenu() {
  const [activeSection, setActiveSection] = useState('start');

  useEffect(() => {
    let ticking = false;
    const updateActiveSection = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const idx = getCurrentSectionIndex();
          if (SECTIONS[idx]) {
            setActiveSection(SECTIONS[idx]);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  const handleClick = useCallback((e, id) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    scrollToSection(id);
  }, []);

  return (
    <aside 
      className="page-chrome fixed left-8 top-1/2 z-[100] pointer-events-auto hidden -translate-y-1/2 lg:block xl:left-12" 
      style={{ textShadow: "0 1px 14px rgba(6,5,5,0.95), 0 0 4px rgba(6,5,5,0.9)" }}
    >
      <p className="eyebrow mb-6 text-bone/35 select-none">On this page</p>
      <ul className="space-y-2 pointer-events-auto">
        {sections.map(({ id, label, number }) => {
          const isActive = activeSection === id;
          return (
            <li key={id}>
              <a 
                className="group flex items-center text-left cursor-pointer py-1.5 px-2 -mx-2 rounded transition-colors duration-200 hover:bg-bone/[0.04] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gilt/70" 
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
              >
                <span 
                  className={`mr-3.5 h-px transition-all duration-300 ${isActive ? 'w-8 bg-gilt' : 'w-3.5 bg-bone/30 group-hover:w-5 group-hover:bg-bone/60'}`}
                ></span>
                <span 
                  className={`text-[0.78rem] tracking-wide transition-colors duration-300 ${isActive ? 'text-bone font-medium' : 'text-bone/45 group-hover:text-bone'}`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
