import os

FILE_PATH = "/Users/syedhassan/Desktop/scfo.de/scfo-react-source/src/App.jsx"

replacements = [
    # IDs
    ('id="zahlen"', 'id="in-zahlen"'),
    ('id="leistungen"', 'id="was-wir-bauen"'),
    ('id="umsetzung"', 'id="wie-wir-bauen"'),
    ('id="studio"', 'id="aus-einer-hand"'),
    ('id="prozess"', 'id="vom-briefing-zum-launch"'),
    ('id="fragen"', 'id="haeufige-fragen"'),
    ('id="system"', 'id="das-system"'),
    ('id="kontakt"', 'id="projekt-anfragen"'),

    # German to English Text Replacements
    ('Webdesign, das Marken größer wirken lässt.', 'Web design that makes brands look bigger.'),
    ('Wir gestalten moderne Webseiten, die nicht nur gut aussehen, sondern Vertrauen schaffen, Nutzer führen und messbar performen.', 'We design modern websites that not only look good, but build trust, guide users, and perform measurably.'),
    ('Leistungen — Gestaltung', 'Services — Design'),
    ('Moderne Websites mit starker visueller Präsenz und klarer Nutzerführung.', 'Modern websites with strong visual appearance and clear user guidance.'),
    ('Conversion-optimierte Seiten für Produkte, Kampagnen und Dienstleistungen.', 'Conversion-optimized pages for products, campaigns, and services.'),
    ('Digitale Markenwelten mit Wiedererkennungswert und hochwertiger Ästhetik.', 'Digital brand worlds with recognition value and high-quality aesthetics.'),
    ('Leistungen — Umsetzung', 'Services — Implementation'),
    ('Gestaltung ist die eine Hälfte. Die andere ist sauberes Handwerk.', 'Design is one half. The other is clean craftsmanship.'),
    ('Strukturierte Interfaces, klare Nutzerführung und intuitive Erlebnisse.', 'Structured interfaces, clear user guidance, and intuitive experiences.'),
    ('Saubere, schnelle und responsive Umsetzung moderner Websites.', 'Clean, fast, and responsive implementation of modern websites.'),
    ('Optimierung auf Geschwindigkeit, Nutzerverhalten und bessere Conversion.', 'Optimization for speed, user behavior, and better conversion.'),
    ('Konzept-Demo · Barber & Friseur', 'Concept Demo · Barber & Hairdresser'),
    ('Maskulin-editoriale Website für einen Premium-Barbershop — cinematischer 3D-Hero, terminfokussiert.', 'Masculine-editorial website for a premium barbershop — cinematic 3D hero, appointment-focused.'),
    ('Demo ansehen', 'View Demo'),
    ('Konzept-Demo · Fine Dining', 'Concept Demo · Fine Dining'),
    ('Atmosphärische Website für gehobene Gastronomie — stimmungsvolles Menü-Storytelling, auf Reservierungen ausgelegt.', 'Atmospheric website for fine dining — moody menu storytelling, reservation-focused.'),
    ('Konzept-Demo · Hausarztpraxis', 'Concept Demo · General Practice'),
    ('Ruhige, vertrauensstarke Website für eine Hausarztpraxis — klare Struktur, barrierearm, terminfokussiert.', 'Calm, trustworthy website for a general practice — clear structure, accessible, appointment-focused.'),
    ('Weitere Demos auf', 'More demos on'),
    ('Scale & Form ist ein Webdesign- und Webentwicklungsstudio für moderne Marken, Unternehmen und digitale Produkte — Websites, Landingpages, Brand Experiences und UI/UX-Systeme mit Fokus auf Vertrauen, Nutzerführung und Conversion.', 'Scale & Form is a web design and web development studio for modern brands, companies, and digital products — websites, landing pages, brand experiences, and UI/UX systems with a focus on trust, user guidance, and conversion.'),
    ('Strategie, Design und technische Umsetzung kommen bei uns aus einer Hand — von der ersten Skizze bis zum Launch.', 'Strategy, design, and technical implementation come from a single source — from the first sketch to launch.'),
    ('Vier Schritte, die jedes Projekt durchläuft — ohne Überraschungen dazwischen.', 'Four steps every project goes through — with no surprises in between.'),
    ('Marke, Zielgruppe, Markt und Ziele.', 'Brand, target audience, market, and goals.'),
    ('Struktur, Designrichtung, Nutzerführung.', 'Structure, design direction, user guidance.'),
    ('Hochwertig und responsive gebaut.', 'Built high-quality and responsive.'),
    ('Veröffentlichen, testen, nachschärfen.', 'Publish, test, refine.'),
    ('Wie entsteht so ein Auftritt?', 'How is such a presence created?'),
    ('Was läuft technisch im Hintergrund?', 'What runs technically in the background?'),
    ('Funktioniert das auf jedem Gerät?', 'Does it work on every device?'),
    ('Zuerst die Dramaturgie: welche Szene welche Aussage trägt. Erst danach entstehen Design und Code. Kameraführung, Licht und Typografie werden wie im Studio gesetzt — digital, aber mit fotografischem Anspruch.', 'First the dramaturgy: which scene carries which message. Only then are design and code created. Camerawork, lighting, and typography are set like in a studio — digital, but with photographic ambition.'),
    ('Echtzeit-3D direkt im Browser über WebGL. Kein Video, kein Plugin. Material, Reflexion und Schatten reagieren live auf Kamera und Licht, und die gesamte Bildkette ist auf ein festes Frame-Budget hin gebaut.', 'Real-time 3D directly in the browser via WebGL. No video, no plugin. Material, reflection, and shadows react live to camera and light, and the entire image chain is built for a strict frame budget.'),
    ('Die Komposition wird pro Gerät neu gedacht statt nur verkleinert. Auf dem Desktop die volle räumliche Anordnung, auf dem Telefon eine flache, ruhige Fassung mit denselben Inhalten. Wer Bewegung reduziert hat, bekommt die statische Variante.', 'The composition is rethought for each device rather than just scaled down. On desktop the full spatial arrangement, on the phone a flat, calm version with the same content. Those who have reduced motion get the static variant.'),
    ('Kein Bauchgefühl, sondern ein System: Auslieferung, Gewichtung, Ablauf und Handwerk greifen ineinander.', 'Not a gut feeling, but a system: delivery, weighting, process, and craftsmanship interlock.'),
    ('Jede Seite liegt an den Rändern des Netzes — nah an den Menschen, die sie öffnen.', 'Every page lives at the edges of the network — close to the people who open them.'),
    ('Fähigkeitsprofil', 'Skill Profile'),
    ('Wo in einem Projekt das Gewicht liegt — je nach Typ verschiebt es sich.', 'Where the weight lies in a project — it shifts depending on the type.'),
    ('Gewichtung 0–100 je Projekttyp — Profil, keine Messwerte.', 'Weighting 0-100 per project type — profile, not measured values.'),
    ('Bildrate geprüft', 'Framerate checked'),
    ('Kontrast geprüft', 'Contrast checked'),
    ('Textlesbarkeit über bewegtem Hintergrund', 'Text readability over moving background'),
    ('Jedes Bild wird im Moment berechnet', 'Every image is calculated in the moment'),
    ('Konzept, Design und Technik aus einer Hand', 'Concept, design, and technology from a single source'),
    ('Ladezeit und Bildrate geprüft, nicht geschätzt', 'Load time and frame rate checked, not guessed'),
    ('Aktivität', 'Activity'),
    ('Tag für Tag', 'Day by Day'),
    ('Jede Zelle ist ein Arbeitstag. Dichte Wochen sind Aufbauphasen, ruhige Wochen sind Abstimmung und Test.', 'Each cell is a workday. Dense weeks are build phases, quiet weeks are coordination and testing.'),
    ('Erzählen Sie uns in wenigen Fragen von Ihrem Vorhaben. Wir melden uns persönlich — mit einer ehrlichen Einschätzung, nicht mit einem Standardangebot.', 'Tell us about your project in a few questions. We will get back to you personally — with an honest assessment, not a standard offer.'),
    ('Projekt anfragen', 'Start Project Inquiry'),
    ('Dauert etwa 60 Sekunden.', 'Takes about 60 seconds.'),
    ('Webdesign, das Marken größer wirken lässt. Moderne Websites, Landingpages und digitale Markenauftritte aus einer Hand.', 'Web design that makes brands look bigger. Modern websites, landing pages, and digital brand experiences from a single source.'),
    ('Alle Rechte vorbehalten.', 'All rights reserved.'),
    ('>Was wir bauen<', '>Services<'),
    ('>Ablauf<', '>Process<'),
    ('Was aus der Arbeit der letzten Projekte messbar geblieben ist.', 'What has measurably remained from the work of the last projects.'),
    
    # Footer
    ('Unterauftragnehmer', 'Subcontractors'),
    ('Sicherheitslücke melden', 'Report Vulnerability'),
    ('Barrierefreiheit', 'Accessibility'),
    ('Impressum', 'Imprint'),
    ('Datenschutz', 'Privacy Policy'),
    ('AGB', 'Terms & Conditions'),
    ('Vertrauen', 'Trust')
]

if not os.path.exists(FILE_PATH):
    print(f"File not found: {FILE_PATH}")
    exit(1)

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

for old_str, new_str in replacements:
    content = content.replace(old_str, new_str)

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Successfully applied translations to {FILE_PATH}")
