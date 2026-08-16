import re

# 1. Update App.jsx
with open('src/App.jsx', 'r') as f:
    text = f.read()

# Replace the entire old FAQ section in main with <FaqSection />
# Pattern from <section aria-labelledby="faq-heading" to </section>
old_faq_pattern = r'<section aria-labelledby="faq-heading" className="relative flex min-h-\[100svh\] items-center px-6 py-12 md:px-12" id="haeufige-fragen">[\s\S]*?</section>'
text = re.sub(old_faq_pattern, '<FaqSection />', text)

# Fix The System section tag
old_system_tag = '<section aria-labelledby="spatial-bento-heading" className="relative flex min-h-[100svh] items-start px-6 pb-16 pt-[5.5rem] md:px-12" id="das-system">'
new_system_tag = '<section aria-labelledby="spatial-bento-heading" className="relative flex min-h-[100svh] items-start px-6 pb-16 pt-24 md:px-12 lg:pl-56 xl:pl-64" id="das-system">'
text = text.replace(old_system_tag, new_system_tag)

# Fix Regionen -> Regions
text = text.replace('Regionen', 'Regions')

with open('src/App.jsx', 'w') as f:
    f.write(text)

print("Updated App.jsx successfully")
