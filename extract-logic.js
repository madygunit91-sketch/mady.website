const fs = require('fs');
const code = fs.readFileSync('beautified.js', 'utf8');
const lines = code.split('\n');

const relevantLines = [];
let capture = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('gsap.') || line.includes('ScrollTrigger') || line.includes('position.set') || line.includes('rotation.set')) {
    // get surrounding lines
    const start = Math.max(0, i - 2);
    const end = Math.min(lines.length - 1, i + 2);
    for (let j = start; j <= end; j++) {
      if (!relevantLines.includes(lines[j])) {
        relevantLines.push(lines[j]);
      }
    }
  }
}
fs.writeFileSync('animation-logic.txt', relevantLines.join('\n'));
console.log('Extracted logic, lines:', relevantLines.length);
