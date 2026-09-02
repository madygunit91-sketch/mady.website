import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, 'dist');
const TEMPLATE_PATH = path.resolve(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error("Error: dist/index.html not found. Run 'npm run build' first.");
  process.exit(1);
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Rich Semantic Pre-rendered Home Content
const homePrerenderedHTML = `
  <main id="main-content" class="relative z-10 w-full overflow-hidden bg-space text-bone">
    <!-- Hero Section -->
    <section id="start" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-24">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">01</span>Horizon Digital LTD</p>
        <h1 class="display text-[clamp(2.2rem,5vw,4.5rem)] font-normal leading-[1.08] tracking-tight text-bone">
          Web design that makes brands <span class="display-italic">look bigger.</span>
        </h1>
        <p class="body-copy mt-6 max-w-[58ch] text-[clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed text-bone/85">
          We design and develop modern websites that not only look extraordinary, but build trust, guide users, and perform measurably.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a href="#kontakt" class="inline-flex items-center justify-center rounded-full bg-gilt px-6 py-3 text-xs font-semibold uppercase tracking-wider text-space transition hover:bg-gilt/90">
            Start Project Inquiry
          </a>
          <a href="#arbeiten" class="inline-flex items-center justify-center rounded-full border border-bone/20 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-bone transition hover:border-bone/50">
            View Selected Work
          </a>
        </div>
      </div>
    </section>

    <!-- Metrics / In Numbers -->
    <section id="in-zahlen" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">02</span>Impact</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">What has measurably remained from the work of recent projects.</h2>
        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <span class="display text-4xl font-light text-gilt">&lt; 0.8s</span>
            <p class="mt-2 text-xs uppercase tracking-wider text-bone/60">Average Load Time (LCP)</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <span class="display text-4xl font-light text-gilt">60 FPS</span>
            <p class="mt-2 text-xs uppercase tracking-wider text-bone/60">Real-Time WebGL Performance</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <span class="display text-4xl font-light text-gilt">+140%</span>
            <p class="mt-2 text-xs uppercase tracking-wider text-bone/60">Measured Conversion Lift</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services / What We Build -->
    <section id="was-wir-bauen" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">03</span>Services — Design</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">Bespoke Design, 3D WebGL &amp; UI/UX Systems</h2>
        <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <h3 class="display text-lg text-bone">Websites &amp; Brand Worlds</h3>
            <p class="mt-2 text-sm text-bone/70">Modern websites with strong visual appearance, photographic typography, and clear user guidance.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <h3 class="display text-lg text-bone">Conversion Landingpages</h3>
            <p class="mt-2 text-sm text-bone/70">Conversion-optimized pages for digital products, campaigns, and high-growth services.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <h3 class="display text-lg text-bone">3D WebGL Experiences</h3>
            <p class="mt-2 text-sm text-bone/70">Real-time GPU-rendered 3D environments, kinetic shaders, and interactive spatial interfaces.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section id="founder-section" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">05</span>Leadership</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">Syed Hassan — Founder &amp; Director</h2>
        <div class="mt-8 rounded-xl border border-bone/10 bg-bone/[0.02] p-6 md:p-8">
          <p class="body-copy text-base leading-relaxed text-bone/85">
            Syed Hassan founded Horizon Digital LTD with a clear vision: technology should make ambitious ideas possible, not make them more complicated. Based in London, Horizon Digital combines editorial design aesthetics with cutting-edge 3D WebGL engineering to build high-performance web products that elevate brands globally.
          </p>
          <div class="mt-6 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-gilt">
            <span>London, United Kingdom</span>
            <span>•</span>
            <a href="mailto:info@mady.website" class="underline hover:text-bone">info@mady.website</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="haeufige-fragen" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">07</span>FAQ</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">Frequently Asked Questions</h2>
        <div class="mt-8 space-y-4">
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <h3 class="text-base font-semibold text-gilt">How much does a custom WebGL website cost?</h3>
            <p class="mt-2 text-sm text-bone/80">Bespoke projects at Horizon Digital LTD typically range from €10,000 to €25,000+ depending on 3D WebGL complexity, bespoke shader engineering, and interactive depth. Every project receives a transparent, fixed-scope proposal tailored to your commercial goals.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <h3 class="text-base font-semibold text-gilt">How long does a website build take?</h3>
            <p class="mt-2 text-sm text-bone/80">A complete bespoke web experience is typically designed, engineered, and launched in 4 to 8 weeks. This covers strategic dramaturgy, 3D composition, responsive development, accessibility compliance, and sub-second performance optimization.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <h3 class="text-base font-semibold text-gilt">What technologies does Horizon Digital LTD use?</h3>
            <p class="mt-2 text-sm text-bone/80">We build bespoke digital products using React, Three.js, WebGL shaders, Tailwind CSS, Vite, and edge-native serverless architectures, delivering 60fps real-time 3D performance on both desktop and mobile without external plugins.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <h3 class="text-base font-semibold text-gilt">Does the 3D WebGL experience work on mobile devices?</h3>
            <p class="mt-2 text-sm text-bone/80">Yes. Every composition is rethought per device viewport rather than merely scaled down. On desktop, full spatial depth is rendered; on mobile, a calibrated high-performance version ensures fluid 60fps interactions and zero battery drain.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="footer" class="border-t border-bone/10 px-4 py-12 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="text-xs text-bone/50">© ${new Date().getFullYear()} Horizon Digital LTD. All rights reserved.</p>
        <div class="flex gap-6 text-xs text-bone/60">
          <a href="/web-design" class="hover:text-bone">Web Design</a>
          <a href="/webgl-development" class="hover:text-bone">3D WebGL</a>
          <a href="/services" class="hover:text-bone">Services</a>
          <a href="/about" class="hover:text-bone">About Founder</a>
        </div>
      </div>
    </footer>
  </main>
`;

// 1. Inject into main index.html
const renderedHome = template.replace('<div id="root"></div>', `<div id="root">${homePrerenderedHTML}</div>`);
fs.writeFileSync(TEMPLATE_PATH, renderedHome, 'utf8');
console.log('✓ Prerendered root index.html with complete semantic DOM structure');

// 2. Generate Dedicated Service Subpages for SEO & Topic Authority
const subpages = [
  {
    slug: 'web-design',
    title: 'Web Design & UI/UX Systems — Horizon Digital LTD London',
    description: 'Bespoke web design studio in London crafting luxury digital interfaces, high-conversion landing pages, and structured brand systems.',
    heading: 'Bespoke Web Design & UI/UX Systems',
    content: 'Horizon Digital LTD engineers luxury web designs and UI/UX systems focused on trust, user guidance, and measured conversion lift.'
  },
  {
    slug: 'webgl-development',
    title: '3D WebGL & Interactive Web Development — Horizon Digital LTD',
    description: 'Custom WebGL shaders, Three.js 3D web experiences, and real-time interactive digital products engineered for 60fps performance.',
    heading: '3D WebGL & Real-Time Interactive Development',
    content: 'We create high-performance browser 3D experiences using WebGL and Three.js without plugins, built for strict frame budgets and sub-second load times.'
  },
  {
    slug: 'services',
    title: 'Digital Studio Services — Horizon Digital LTD',
    description: 'Explore full-service web design, 3D WebGL engineering, brand experience design, and speed optimization by Horizon Digital LTD.',
    heading: 'Digital Engineering & Design Services',
    content: 'From strategic dramaturgy and 3D prototyping to responsive edge deployment, our services cover the entire lifecycle of modern digital flagships.'
  },
  {
    slug: 'about',
    title: 'About Syed Hassan & Horizon Digital LTD — London Studio',
    description: 'Learn about Syed Hassan, founder and director of Horizon Digital LTD, building ambitious digital products and 3D WebGL experiences.',
    heading: 'About Founder Syed Hassan & Studio Philosophy',
    content: 'Horizon Digital was created around a simple belief: technology should make ambitious ideas possible, not make them more complicated.'
  }
];

for (const page of subpages) {
  const pageDir = path.resolve(DIST_DIR, page.slug);
  fs.mkdirSync(pageDir, { recursive: true });

  const pageHtml = template
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${page.title}" />`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${page.description}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="https://mady.website/${page.slug}" />`)
    .replace('<div id="root"></div>', `<div id="root">
      <main class="min-h-screen bg-space text-bone px-4 py-20 max-w-4xl mx-auto">
        <header class="mb-8 border-b border-bone/10 pb-6">
          <a href="/" class="text-xs uppercase tracking-widest text-gilt hover:underline">← Back to Horizon Digital</a>
          <h1 class="display text-3xl sm:text-4xl mt-4 text-bone">${page.heading}</h1>
          <p class="text-lg text-bone/80 mt-2">${page.description}</p>
        </header>
        <article class="prose prose-invert max-w-none text-bone/85 leading-relaxed">
          <p class="text-base">${page.content}</p>
        </article>
        <div class="mt-12 pt-6 border-t border-bone/10">
          <a href="/#kontakt" class="inline-flex items-center rounded-full bg-gilt px-6 py-3 text-xs font-semibold uppercase tracking-wider text-space">
            Start Project Inquiry
          </a>
        </div>
      </main>
    </div>`);

  fs.writeFileSync(path.resolve(pageDir, 'index.html'), pageHtml, 'utf8');
  console.log(`✓ Generated prerendered static page: /${page.slug}/index.html`);
}

console.log('✓ Prerendering completed successfully!');
