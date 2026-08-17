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

export function scrollToSection(target, lockDuration = 700) {
  const id = typeof target === 'number' ? SECTIONS[target] : target;
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;

  if (lockTimeout) clearTimeout(lockTimeout);
  isLocked = true;

  const rect = el.getBoundingClientRect();
  const targetTop = rect.top + window.scrollY;

  window.scrollTo({
    top: Math.round(targetTop),
    behavior: 'smooth'
  });

  try {
    window.history.pushState(null, '', `#${id}`);
  } catch (e) {
    // ignore
  }

  lockTimeout = setTimeout(() => {
    isLocked = false;
  }, lockDuration);
}

export function isScrollLocked() {
  return isLocked;
}
