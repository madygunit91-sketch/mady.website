import React, { useEffect, useState, useCallback } from 'react';
import { SECTIONS, scrollToSection, getCurrentSectionIndex } from '../utils/scrollController';

const sections = [
  { id: 'start', label: 'Home', number: '00' },
  { id: 'in-numbers', label: 'In Numbers', number: '01' },
  { id: 'services', label: 'Services — Design', number: '02' },
  { id: 'build', label: 'Services — Build', number: '03' },
  { id: 'stack', label: 'Tech Stack', number: '04' },
  { id: 'work', label: 'Work', number: '05' },
  { id: 'studio', label: 'Studio', number: '06' },
  { id: 'process', label: 'Process', number: '07' },
  { id: 'faq', label: 'FAQ', number: '08' },
  { id: 'system', label: 'The System', number: '09' },
  { id: 'activity', label: 'Activity', number: '10' },
  { id: 'about', label: 'Meet the Founder', number: '11' },
  { id: 'contact', label: 'Contact', number: '12' },
  { id: 'footer', label: 'Footer', number: '13' },
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
