const fs = require('fs');

let jsx = fs.readFileSync('src/App.jsx', 'utf8');

// Strip opacity and transform that hide elements
jsx = jsx.replace(/"opacity":"0",?/g, '');
jsx = jsx.replace(/"transform":"[^"]*",?/g, '');
// Clean up empty style objects
jsx = jsx.replace(/style={{}}/g, '');
jsx = jsx.replace(/,}/g, '}');

// Translate navigation
jsx = jsx.replace(/Zum Inhalt springen/g, 'Skip to content');
jsx = jsx.replace(/Leistungen/g, 'Services');
jsx = jsx.replace(/Studio/g, 'Studio');
jsx = jsx.replace(/Prozess/g, 'Process');
jsx = jsx.replace(/Kontakt/g, 'Contact');
jsx = jsx.replace(/Projekt anfragen/g, 'Start a Project');

// Translate content
jsx = jsx.replace(/Auf dieser Seite/g, 'On this page');
jsx = jsx.replace(/Start/g, 'Home');
jsx = jsx.replace(/In Zahlen/g, 'In Numbers');
jsx = jsx.replace(/Was wir bauen/g, 'What we build');
jsx = jsx.replace(/Wie wir bauen/g, 'How we build');
jsx = jsx.replace(/Arbeiten/g, 'Work');
jsx = jsx.replace(/Aus einer Hand/g, 'All in one');
jsx = jsx.replace(/Vom Briefing zum Launch/g, 'From briefing to launch');
jsx = jsx.replace(/Häufige Fragen/g, 'FAQ');
jsx = jsx.replace(/Das System/g, 'The System');
jsx = jsx.replace(/Aktivität/g, 'Activity');

jsx = jsx.replace(/Webdesign, das Marken größer wirken lässt./g, 'Web design that makes brands look bigger.');
jsx = jsx.replace(/Wir gestalten moderne Webseiten, die nicht nur gut aussehen, sondern Vertrauen schaffen, Nutzer führen und messbar performen./g, 'We design modern websites that not only look good, but build trust, guide users, and perform measurably.');
jsx = jsx.replace(/Scrollen, um zu entdecken/g, 'Scroll to discover');
jsx = jsx.replace(/Was aus der Arbeit der letzten Projekte messbar geblieben ist./g, 'What remains measurable from the work of recent projects.');
jsx = jsx.replace(/abgeschlossene Webprojekte/g, 'completed web projects');
jsx = jsx.replace(/Kundenzufriedenheit/g, 'customer satisfaction');
jsx = jsx.replace(/Ladezeit-Optimierung/g, 'load time optimization');
jsx = jsx.replace(/Conversion-Steigerung/g, 'conversion increase');
jsx = jsx.replace(/Vom kompletten Markenauftritt bis zur einzelnen Kampagnenseite — Auftritte, die Haltung zeigen./g, 'From complete brand identities to individual campaign pages — appearances that show attitude.');
jsx = jsx.replace(/Moderne Webseiten mit starkem visuellen Auftritt und klarer Nutzerführung./g, 'Modern websites with strong visual appearance and clear user guidance.');
jsx = jsx.replace(/Conversion-optimierte Seiten für Produkte, Kampagnen und Dienstleistungen./g, 'Conversion-optimized pages for products, campaigns, and services.');
jsx = jsx.replace(/Digitale Markenwelten mit Wiedererkennungswert und hochwertiger Ästhetik./g, 'Digital brand worlds with recognition value and high-quality aesthetics.');
jsx = jsx.replace(/Gestaltung ist die eine Hälfte. Die andere ist sauberes Handwerk./g, 'Design is one half. The other is clean craftsmanship.');

fs.writeFileSync('src/App.jsx', jsx);
console.log('Translated App.jsx to English and removed hidden styles.');
