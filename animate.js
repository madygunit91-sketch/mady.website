const fs = require('fs');

let jsx = fs.readFileSync('src/App.jsx', 'utf8');

// Add import if not exists
if (!jsx.includes('AnimatedSection')) {
  jsx = `import AnimatedSection from './components/AnimatedSection';\n` + jsx;
}

// Wrap sections with AnimatedSection
// Find <section ...> and replace with <AnimatedSection><section ...>
// Find </section> and replace with </section></AnimatedSection>
// Be careful not to double-wrap if already run.

if (!jsx.includes('<AnimatedSection><section')) {
  jsx = jsx.replace(/<section (.*?)>/g, '<AnimatedSection><section $1>');
  jsx = jsx.replace(/<\/section>/g, '</section></AnimatedSection>');
}

fs.writeFileSync('src/App.jsx', jsx);
console.log('App.jsx updated with AnimatedSection wrappers');
