const fs = require('fs');

let jsx = fs.readFileSync('src/App.jsx', 'utf8');

const dict = {
  'Ein Jahr, <span className="display-italic">Tag für Tag': 'A Year, <span className="display-italic">Day by Day',
  'Jede Zelle ist ein Arbeitstag. Dichte Wochen sind Aufbauphasen, ruhige Wochen sind Abstimmung und Test.': 'Each cell is a workday. Dense weeks are build phases, quiet weeks are coordination and testing.',
  '10{/* */} — {/* */}Projektanfrage': '10{/* */} — {/* */}Project Inquiry',
  '>Bereit, den <': '>Ready to take the <',
  '>Sprung<': '>leap<',
  '>zu machen?<': '>?<',
  'Erzählen Sie uns in wenigen Fragen von Ihrem Vorhaben. Wir melden uns persönlich — mit einer ehrlichen Einschätzung, nicht mit einem Standardangebot.': 'Tell us about your project in a few questions. We will get back to you personally — with an honest assessment, not a standard offer.',
  '>Projektanfrage starten<': '>Start Project Inquiry<',
  '>Reichweite<': '>Reach<',
  '>Weltweit ausgeliefert<': '>Delivered worldwide<',
  'Jede Seite liegt an den Rändern des Netzes — nah an den Menschen, die sie öffnen.': 'Every page lives at the edges of the network — close to the people who open them.',
  '>Regionen<': '>Regions<',
  '>Gewichtung<': '>Weighting<',
  '>Fähigkeitsprofil<': '>Skill Profile<',
  'Wo in einem Projekt das Gewicht liegt — je nach Typ verschiebt es sich.': 'Where the weight lies in a project — it shifts depending on the type.',
  'Gewichtung 0–100 je Projekttyp — Profil, keine Messwerte.': 'Weighting 0-100 per project type — profile, not measured values.',
  '>Ablauf<': '>Process<',
  'Marke, Zielgruppe, Markt und Ziele.': 'Brand, target audience, market, and goals.',
  'Struktur, Designrichtung, Nutzerführung.': 'Structure, design direction, user guidance.',
  'Hochwertig und responsive gebaut.': 'Built high-quality and responsive.',
  'Veröffentlichen, testen, nachschärfen.': 'Publish, test, refine.',
  '>Pipeline<': '>Pipeline<',
  'Was vor dem Launch passiert': 'What happens before launch',
  '>Szene kalibriert<': '>Scene calibrated<',
  'Kamera, Licht und Material pro Abschnitt': 'Camera, lighting, and material per section',
  '>Bildrate geprüft<': '>Framerate checked<',
  'Frame-Budget auf Desktop und Mobile': 'Frame budget on desktop and mobile',
  '>Kontrast geprüft<': '>Contrast checked<',
  'Textlesbarkeit über bewegtem Hintergrund': 'Text readability over moving background',
  '>Haltung<': '>Attitude<',
  'Woran wir uns halten': 'What we stand by',
  '>Echtzeit<': '>Real-time<',
  'Jedes Bild wird im Moment berechnet': 'Every image is calculated in the moment',
  '>Ein Guss<': '>One piece<',
  'Konzept, Design und Technik aus einer Hand': 'Concept, design, and technology from a single source',
  '>Gemessen<': '>Measured<',
  'Ladezeit und Bildrate geprüft, nicht geschätzt': 'Load time and frame rate checked, not guessed',
  'Alle Rechte vorbehalten.': 'All rights reserved.',
  '>Impressum<': '>Imprint<',
  '>Datenschutz<': '>Privacy Policy<',
  '>Was wir bauen<': '>What we build<',
  'Was wir<': 'What we<',
  'bauen<': 'build<',
  'Und wie<': 'And how<',
  'wir bauen<': 'we build<',
  '>Arbeiten<': '>Work<',
};

for (const [de, en] of Object.entries(dict)) {
  jsx = jsx.split(de).join(en);
}

fs.writeFileSync('src/App.jsx', jsx);
console.log('App.jsx translated final sections');
