import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.resolve(__dirname, 'index.html');
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  html = html
    .replace(/<link rel="stylesheet" crossorigin href="\/assets\/[^"]+">\s*/g, '')
    .replace(/<script type="module" crossorigin src="\/assets\/[^"]+"><\/script>/g, '<script type="module" src="/src/main.jsx"></script>')
    .replace(/<div id="root">[\s\S]*<\/div>\s*<\/body>/, '<div id="root"></div>\n  </body>');
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('✓ Reset index.html entrypoint to /src/main.jsx for clean build');
}
