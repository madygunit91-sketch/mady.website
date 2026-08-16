const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/url\(([^)]+)\.woff2\)/g, (match, p1) => {
  const parts = p1.split('/');
  const file = parts[parts.length - 1];
  return `url(/${file}.woff2)`;
});
fs.writeFileSync('src/index.css', css);
console.log('Fixed font paths');
