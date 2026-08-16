const fs = require('fs');

let jsx = fs.readFileSync('src/App.jsx', 'utf8');

const dict = {
  // Navigation / Headers
  '>Zahlen<': '>Numbers<',
  'Projekte<': 'Projects<',
  'Qualität<': 'Quality<',
  'Tempo<': 'Speed<',
  'Wirkung<': 'Impact<',
  'Services — Gestaltung<': 'Services — Design<',
  '>Was wir<': '>What we<',
  '>bauen<': '>build<',
  'Services — Umsetzung<': 'Services — Implementation<',
  '>Und wie<': '>And how<',
  '>wir bauen<': '>we build<',
  '>Work, die <': '>Work that <',
  '>wirken<': '>works<',
  '>Aus einer<': '>From a single<',
  '>Hand<': '>Source<',
  '>Vom Briefing<': '>From Briefing<',
  '>zum Launch<': '>to Launch<',
  '>Klarheit <': '>Clarity <',
  '>vorab<': '>upfront<',
  '>Wie ein Auftritt<': '>How a presence<',
  '>zusammengesetzt ist<': '>is put together<',
  
  // Body text
  'Strukturierte Interfaces, klare Nutzerführung und intuitive Erlebnisse.': 'Structured interfaces, clear user guidance, and intuitive experiences.',
  'Webentwicklung<': 'Web Development<',
  'Saubere, schnelle und responsive Umsetzung moderner Webseiten.': 'Clean, fast, and responsive implementation of modern websites.',
  'Optimierung für Geschwindigkeit, Nutzerverhalten und bessere Conversion.': 'Optimization for speed, user behavior, and better conversion.',
  'Acht eigene Konzept- und App-Demos — alle live und im Browser bedienbar.': 'Eight custom concept and app demos — all live and interactive in the browser.',
  'Vorschau der Demo': 'Demo preview',
  'Konzept-Demo · Barber &amp; Friseur': 'Concept Demo · Barber & Hairdresser',
  'Maskulin-editoriale Website für einen Premium-Barbershop — cinematischer 3D-Hero, terminfokussiert.': 'Masculine-editorial website for a premium barbershop — cinematic 3D hero, appointment-focused.',
  '>Demo ansehen<': '>View Demo<',
  'Konzept-Demo · Fine Dining': 'Concept Demo · Fine Dining',
  'Atmosphärische Website für gehobene Gastronomie — stimmungsvolles Menü-Storytelling, auf Reservierungen ausgelegt.': 'Atmospheric website for fine dining — moody menu storytelling, reservation-focused.',
  'Konzept-Demo · Hausarztpraxis': 'Concept Demo · General Practice',
  'Ruhige, vertrauensstarke Website für eine Hausarztpraxis — klare Struktur, barrierearm, terminfokussiert.': 'Calm, trustworthy website for a general practice — clear structure, accessible, appointment-focused.',
  'Weitere Demos auf': 'More demos on',
  'Scale &amp; Form ist ein Webdesign- und Webentwicklungsstudio für moderne Marken, Unternehmen und digitale Produkte — Websites, Landingpages, Brand Experiences und UI/UX-Systeme mit Fokus auf Vertrauen, Nutzerführung und Conversion.': 'Scale & Form is a web design and web development studio for modern brands, companies, and digital products — websites, landing pages, brand experiences, and UI/UX systems with a focus on trust, user guidance, and conversion.',
  'Strategie, Design und technische Umsetzung kommen bei uns aus einer Hand — von der ersten Skizze bis zum Launch.': 'Strategy, design, and technical implementation come from a single source — from the first sketch to launch.',
  '>Du<': '>You<',
  'Vier Schritte, die jedes Projekt durchläuft — ohne Überraschungen dazwischen.': 'Four steps every project goes through — with no surprises in between.',
  '>Analyse<': '>Analysis<',
  'Wir verstehen Marke, Zielgruppe, Markt und Ziele.': 'We understand the brand, target audience, market, and goals.',
  '>Konzept<': '>Concept<',
  'Wir entwickeln Struktur, Designrichtung und Nutzerführung.': 'We develop the structure, design direction, and user guidance.',
  '>Design &amp; Entwicklung<': '>Design & Development<',
  'Wir gestalten und bauen die Webseite hochwertig und responsive.': 'We design and build the website to be high-quality and responsive.',
  '>Launch &amp; Optimierung<': '>Launch & Optimization<',
  'Wir veröffentlichen, testen und optimieren die Seite weiter.': 'We publish, test, and continue to optimize the site.',
  '>Im Detail<': '>In Detail<',
  'Wie entsteht so ein Auftritt?': 'How is such a presence created?',
  'Was läuft technisch im Hintergrund?': 'What runs technically in the background?',
  'Funktioniert das auf jedem Gerät?': 'Does it work on every device?',
  'Zuerst die Dramaturgie: welche Szene welche Aussage trägt. Erst danach entstehen Design und Code. Kameraführung, Licht und Typografie werden wie im Studio gesetzt — digital, aber mit fotografischem Anspruch.': 'First the dramaturgy: which scene carries which message. Only then are design and code created. Camerawork, lighting, and typography are set like in a studio — digital, but with photographic ambition.',
  'Echtzeit-3D direkt im Browser über WebGL. Kein Video, kein Plugin. Material, Reflexion und Schatten reagieren live auf Kamera und Licht, und die gesamte Bildkette ist auf ein festes Frame-Budget hin gebaut.': 'Real-time 3D directly in the browser via WebGL. No video, no plugin. Material, reflection, and shadows react live to camera and light, and the entire image chain is built for a strict frame budget.',
  'Die Komposition wird pro Gerät neu gedacht statt nur verkleinert. Auf dem Desktop die volle räumliche Anordnung, auf dem Telefon eine flache, ruhige Fassung mit denselben Inhalten. Wer Bewegung reduziert hat, bekommt die statische Variante.': 'The composition is rethought for each device rather than just scaled down. On desktop the full spatial arrangement, on the phone a flat, calm version with the same content. Those who have reduced motion get the static variant.',
  'Kein Bauchgefühl, sondern ein System: Auslieferung, Gewichtung, Ablauf und Handwerk greifen ineinander.': 'Not a gut feeling, but a system: delivery, weighting, process, and craftsmanship interlock.',
  'Konzept-Demo · Barber & Friseur': 'Concept Demo · Barber & Hairdresser',
  'Design & Entwicklung': 'Design & Development',
  'Launch & Optimierung': 'Launch & Optimization',
  'Scale & Form ist ein Webdesign-': 'Scale & Form is a web design-',
};

for (const [de, en] of Object.entries(dict)) {
  jsx = jsx.split(de).join(en);
}

fs.writeFileSync('src/App.jsx', jsx);
console.log('App.jsx translated major chunks');
