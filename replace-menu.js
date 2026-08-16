const fs = require('fs');

let jsx = fs.readFileSync('src/App.jsx', 'utf8');

// Add import
if (!jsx.includes('NavigationMenu')) {
  jsx = `import NavigationMenu from './components/NavigationMenu';\n` + jsx;
}

// Find the start and end of the aside menu
const startIndex = jsx.indexOf('<aside className="page-chrome fixed left-8 top-1/2 z-30 hidden -translate-y-1/2 lg:block xl:left-12"');
if (startIndex !== -1) {
  // Find the closing </aside> after startIndex
  let endIndex = jsx.indexOf('</aside>', startIndex);
  if (endIndex !== -1) {
    endIndex += '</aside>'.length;
    
    const before = jsx.substring(0, startIndex);
    const after = jsx.substring(endIndex);
    
    jsx = before + '<NavigationMenu />' + after;
    
    fs.writeFileSync('src/App.jsx', jsx);
    console.log('App.jsx updated with NavigationMenu');
  } else {
    console.log('Could not find closing tag for aside');
  }
} else {
  console.log('Could not find start tag for aside');
}
