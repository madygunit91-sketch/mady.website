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
    e.preventDefault();
    scrollToSection(id);
  }, []);

  return (
    <aside className="page-chrome fixed left-8 top-1/2 z-30 hidden -translate-y-1/2 lg:block xl:left-12" style={{ textShadow: "0 1px 14px rgba(6,5,5,0.95), 0 0 4px rgba(6,5,5,0.9)" }}>
      <p className="eyebrow mb-6 text-bone/35">On this page</p>
      <ul className="space-y-4">
        {sections.map(({ id, label, number }) => {
          const isActive = activeSection === id;
          return (
            <li key={id}>
              <a 
                className="group flex items-center text-left cursor-pointer" 
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
              >
                <span 
                  className={`mr-4 h-px transition-all duration-500 ${isActive ? 'w-10 bg-gilt' : 'w-4 bg-bone/30 group-hover:bg-bone/60'}`}
                ></span>
                <span 
                  className={`text-[0.8rem] font-light tracking-wide transition-colors duration-500 ${isActive ? 'text-bone font-medium' : 'text-bone/40 group-hover:text-bone/70'}`}
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
