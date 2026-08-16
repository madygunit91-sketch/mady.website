const fs = require('fs');

let jsx = fs.readFileSync('src/App.jsx', 'utf8');

const translations = {
  'Tastaturnavigation aktivieren': 'Enable keyboard navigation',
  'Tastaturnavigation': 'Keyboard navigation',
  'Szene wechseln': 'Switch scene',
  'Sprache / Language': 'Language',
  'Menü öffnen': 'Open menu',
  'Home a Project': 'Start a Project',
  'was-wir-bauen">Services': 'was-wir-bauen">What we build',
  'aus-einer-hand">Studio': 'aus-einer-hand">Studio',
  'vom-briefing-zum-launch">Process': 'vom-briefing-zum-launch">Process'
};

for (const [de, en] of Object.entries(translations)) {
  jsx = jsx.split(de).join(en);
}

fs.writeFileSync('src/App.jsx', jsx);
console.log('App.jsx translated leftover strings');
