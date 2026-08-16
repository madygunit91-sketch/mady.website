const fs = require('fs');

let html = fs.readFileSync('../index.html', 'utf8');

const startIndex = html.indexOf('<div id="root">') + '<div id="root">'.length;
const bodyEndIndex = html.lastIndexOf('</body>');
const endIndex = html.lastIndexOf('</div>', bodyEndIndex);

if (startIndex < 15 || endIndex === -1) {
  console.error("Could not find root div boundaries");
  process.exit(1);
}

let body = html.substring(startIndex, endIndex);

// HTML to JSX conversions
body = body.replace(/class=/g, 'className=');
body = body.replace(/for=/g, 'htmlFor=');
body = body.replace(/crossorigin/g, 'crossOrigin');
body = body.replace(/stroke-width/g, 'strokeWidth');
body = body.replace(/stroke-opacity/g, 'strokeOpacity');
body = body.replace(/stroke-linecap/g, 'strokeLinecap');
body = body.replace(/stroke-linejoin/g, 'strokeLinejoin');
body = body.replace(/fill-rule/g, 'fillRule');
body = body.replace(/clip-rule/g, 'clipRule');
body = body.replace(/xmlns:xlink/g, 'xmlnsXlink');

// Fix inline styles
body = body.replace(/style="([^"]*)"/g, (match, styleString) => {
  const styleObj = {};
  styleString.split(';').forEach(rule => {
    if (!rule.trim()) return;
    let [key, ...values] = rule.split(':');
    let value = values.join(':');
    if (!key || !value) return;
    key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    styleObj[key] = value.trim();
  });
  return `style={{${Object.entries(styleObj).map(([k, v]) => `"${k}":"${v}"`).join(',')}}}`;
});

// Convert HTML comments to JSX comments
body = body.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

// Fix SVG elements that have explicit closing tags by keeping them explicit,
// BUT do not blindly self-close them! 
// Let's NOT self close path/rect/circle/etc if they have a closing tag.
// Actually, standard JSX supports <path d="..."></path> just fine.
// The only things that MUST be self-closed in JSX are void elements: img, input, br, hr.
// We will ONLY fix void elements.

// Fix void elements (only if they aren't already self-closed)
const voidTags = ['img', 'input', 'br', 'hr'];
voidTags.forEach(tag => {
  // Regex to match <tag ... > but NOT <tag ... />
  const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
  body = body.replace(regex, `<${tag}$1 />`);
});

// Some SVG tags might have been generated as <svg ...><defs><linearGradient ...><stop ...></stop>... 
// That is valid JSX as long as they are properly closed.
// Let's just fix the svg syntax that react complains about:
body = body.replace(/stop-color/g, 'stopColor');
body = body.replace(/stop-opacity/g, 'stopOpacity');
body = body.replace(/gradientUnits/g, 'gradientUnits'); // already camelCase in React, but html might have it lowercase? React expects gradientUnits
// Just to be safe, HTML might have lowercase `gradientunits` if it was minified, but looking at the file it was gradientUnits.

// What about other React-specific SVG attributes?
// viewBox is usually viewBox in HTML too.

const jsx = `import React from 'react';

function App() {
  return (
    <>
      ${body}
    </>
  );
}

export default App;
`;

fs.writeFileSync('src/App.jsx', jsx);
console.log('Successfully generated App.jsx');
