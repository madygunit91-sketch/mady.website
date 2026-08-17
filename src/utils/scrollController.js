export const SECTIONS = [
  'start',
  'in-zahlen',
  'was-wir-bauen',
  'wie-wir-bauen',
  'arbeiten',
  'aus-einer-hand',
  'vom-briefing-zum-launch',
  'haeufige-fragen',
  'das-system',
  'aktivitaet',
  'founder',
  'projekt-anfragen',
  'footer'
];

let isLocked = false;
let lockTimeout = null;

export function getCurrentSectionIndex() {
  let closestIdx = 0;
  let minDiff = Infinity;
  SECTIONS.forEach((id, idx) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const diff = Math.abs(rect.top);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    }
  });
  return closestIdx;
}

export function scrollToSection(target, lockDuration = 600) {
  const id = typeof target === 'number' ? SECTIONS[target] : target;
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const targetTop = rect.top + window.scrollY;

  // Immediate unlock if user explicitly clicked a navigation link
  isLocked = true;
  if (lockTimeout) clearTimeout(lockTimeout);

  window.scrollTo({
    top: Math.round(targetTop),
    behavior: 'smooth'
  });

  try {
    window.history.pushState(null, '', `#${id}`);
  } catch (e) {
    // ignore
  }

  // Release lock after animation finishes
  const distance = Math.abs(window.scrollY - targetTop);
  const duration = Math.min(Math.max(distance * 0.35, 400), 1000);
  
  lockTimeout = setTimeout(() => {
    isLocked = false;
  }, duration);
}

export function isScrollLocked() {
  return isLocked;
}
