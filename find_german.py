import re

with open('src/App.jsx') as f:
    text = f.read()

# Find ALL visible text between tags
visible_text = re.findall(r'>([^<]{3,})<', text)

german_words = {'und', 'aus', 'einer', 'vom', 'zum', 'wie', 'wir', 'das', 'der', 'die',
                'ist', 'ein', 'von', 'mit', 'auf', 'bei', 'uns', 'nicht', 'noch',
                'oder', 'auch', 'nach', 'nur', 'kann', 'mehr', 'Webdesign',
                'Leistungen', 'Ablauf', 'Kontakt', 'Impressum', 'Datenschutz',
                'Projekt', 'anfragen', 'Unterauftragnehmer', 'Barrierefreiheit',
                'Rechtliches', 'Vertrauen', 'Deutsch', 'Arbeiten', 'Auftritt',
                'Briefing', 'Gestaltung', 'Umsetzung', 'Handwerk', 'Marken',
                'Websites', 'Landingpages', 'Nutzer', 'Produkte', 'Dienstleistungen'}

print("=== ALL VISIBLE TEXT (checking for German) ===")
for vt in visible_text:
    vt = vt.strip()
    if not vt or vt.startswith('{') or vt.startswith('//') or len(vt) < 4:
        continue
    words = vt.split()
    for w in words:
        clean = w.strip('.,;:!?()')
        if clean in german_words:
            print(f"GERMAN: '{vt[:120]}'")
            break

# Also check for href text and aria-labels
labels = re.findall(r'aria-label="([^"]+)"', text)
for lb in labels:
    for w in lb.split():
        if w.strip('.,') in german_words:
            print(f"GERMAN LABEL: '{lb}'")
            break

# Check link texts in footer area
footer_idx = text.find('id="footer"')
if footer_idx > 0:
    footer = text[footer_idx:]
    footer_texts = re.findall(r'>([^<]{2,})<', footer)
    print("\n=== FOOTER TEXT ===")
    for ft in footer_texts:
        ft = ft.strip()
        if ft and not ft.startswith('{'):
            print(f"  '{ft}'")
