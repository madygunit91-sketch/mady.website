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

// Rich Semantic Pre-rendered Home Content with Continuous 00–12 Section Sequence
const homePrerenderedHTML = `
  <main id="main-content" class="relative z-10 w-full overflow-hidden bg-space text-bone">
    <!-- 00: Hero Section -->
    <section id="start" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-24">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">00</span>Web Developer &amp; Designer · WebGL &amp; 3D Specialist</p>
        <h1 class="display text-[clamp(2.5rem,6vw,4.8rem)] font-normal leading-[1.08] tracking-tight text-bone">
          Syed Mudassar <span class="text-gilt">Hassan</span>
        </h1>
        <p class="body-copy mt-6 max-w-[58ch] text-[clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed text-bone/85">
          We design modern websites that not only look good, but build trust, guide users, and perform measurably.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a href="#contact" class="inline-flex items-center justify-center rounded-full bg-gilt px-6 py-3 text-xs font-semibold uppercase tracking-wider text-space transition hover:bg-gilt/90">
            Start Project Inquiry
          </a>
          <a href="#work" class="inline-flex items-center justify-center rounded-full border border-bone/20 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-bone transition hover:border-bone/50">
            View Selected Work
          </a>
        </div>
      </div>
    </section>

    <!-- 01: In Numbers -->
    <section id="in-numbers" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">01</span>Numbers</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">What remains measurable from recent projects.</h2>
        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <span class="display text-3xl font-light text-gilt">48+</span>
            <p class="mt-2 text-xs text-bone/70">Completed Web Projects</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <span class="display text-3xl font-light text-gilt">92%</span>
            <p class="mt-2 text-xs text-bone/70">Customer Satisfaction</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <span class="display text-3xl font-light text-gilt">3.8s</span>
            <p class="mt-2 text-xs text-bone/70">Load Time Optimization</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <span class="display text-3xl font-light text-gilt">+27%</span>
            <p class="mt-2 text-xs text-bone/70">Conversion Increase</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 02: Services — Design -->
    <section id="services" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">02</span>Services — Design</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">What We Build</h2>
        <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <span class="eyebrow text-xs text-gilt">01</span>
            <h3 class="display text-lg text-bone mt-2">Web Design</h3>
            <p class="mt-2 text-sm text-bone/70">Modern websites with strong visual appearance and clear user guidance.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <span class="eyebrow text-xs text-gilt">02</span>
            <h3 class="display text-lg text-bone mt-2">Landing Pages</h3>
            <p class="mt-2 text-sm text-bone/70">Conversion-optimized pages for products, campaigns, and services.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <span class="eyebrow text-xs text-gilt">03</span>
            <h3 class="display text-lg text-bone mt-2">Brand Experience</h3>
            <p class="mt-2 text-sm text-bone/70">Digital brand worlds with recognition value and high-quality aesthetics.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 03: Services — Build -->
    <section id="build" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">03</span>Services — Implementation</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">And How We Build</h2>
        <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <span class="eyebrow text-xs text-gilt">04</span>
            <h3 class="display text-lg text-bone mt-2">UI/UX Design</h3>
            <p class="mt-2 text-sm text-bone/70">Structured interfaces, clear user guidance, and intuitive experiences.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <span class="eyebrow text-xs text-gilt">05</span>
            <h3 class="display text-lg text-bone mt-2">Web Development</h3>
            <p class="mt-2 text-sm text-bone/70">Clean, fast, and responsive implementation of modern websites.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-6">
            <span class="eyebrow text-xs text-gilt">06</span>
            <h3 class="display text-lg text-bone mt-2">Performance</h3>
            <p class="mt-2 text-sm text-bone/70">Optimization for speed, user behavior, and better conversion.</p>
          </div>
        </div>
      </div>
    </section>


    <!-- 04: Tech Stack Drift Wall -->
    <section id="stack" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">04</span>INDUSTRY-STANDARD STACK</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">Engineered with <span class="display-italic">modern tooling</span></h2>
        <p class="body-copy mt-4 max-w-2xl text-base text-bone/85">
          I build with React, TypeScript, Three.js, Tailwind CSS and deploy on edge platforms like Vercel and Cloudflare.
        </p>
        <div class="mt-8 flex flex-wrap gap-2.5 max-w-lg">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-bone/15 bg-bone/[0.04] text-xs font-mono text-bone/85">React</span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-bone/15 bg-bone/[0.04] text-xs font-mono text-bone/85">TypeScript</span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-bone/15 bg-bone/[0.04] text-xs font-mono text-bone/85">Three.js</span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-bone/15 bg-bone/[0.04] text-xs font-mono text-bone/85">Tailwind CSS</span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-bone/15 bg-bone/[0.04] text-xs font-mono text-bone/85">Vite</span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-bone/15 bg-bone/[0.04] text-xs font-mono text-bone/85">Node.js</span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-bone/15 bg-bone/[0.04] text-xs font-mono text-bone/85">Supabase</span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-bone/15 bg-bone/[0.04] text-xs font-mono text-bone/85">Cloudflare</span>
        </div>
      </div>
    </section>

    <!-- 05: Work -->
    <section id="work" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">05</span>Work</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">Work that <span class="display-italic">works</span></h2>
        <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <span class="eyebrow text-xs text-gilt/60">Demo 001 · Barber & Hairdresser</span>
            <h3 class="display text-base text-bone mt-1">Oak &amp; Blade</h3>
            <p class="mt-2 text-xs text-bone/70">Masculine-editorial website for a premium barbershop — cinematic 3D hero.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <span class="eyebrow text-xs text-gilt/60">Demo 002 · Fine Dining</span>
            <h3 class="display text-base text-bone mt-1">Noir &amp; Basil</h3>
            <p class="mt-2 text-xs text-bone/70">Atmospheric website for fine dining — moody menu storytelling.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <span class="eyebrow text-xs text-gilt/60">Demo 004 · General Practice</span>
            <h3 class="display text-base text-bone mt-1">Praxis Lindenhof</h3>
            <p class="mt-2 text-xs text-bone/70">Calm, trustworthy website for a healthcare practice — clear structure.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 06: Studio -->
    <section id="studio" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">06</span>Studio</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">From a Single Source</h2>
        <p class="body-copy mt-4 max-w-2xl text-base text-bone/85">
          Modern web design and development studio for brands, companies, and digital products — websites, landing pages, brand experiences, and UI/UX systems.
        </p>
      </div>
    </section>

    <!-- 07: Process -->
    <section id="process" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">07</span>Process</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">From Briefing to Launch</h2>
        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <span class="eyebrow text-xs text-gilt">01</span>
            <h3 class="display text-base text-bone mt-2">Analysis</h3>
            <p class="mt-1 text-xs text-bone/70">Brand, audience, market, and goals.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <span class="eyebrow text-xs text-gilt">02</span>
            <h3 class="display text-base text-bone mt-2">Concept</h3>
            <p class="mt-1 text-xs text-bone/70">Structure, direction, user flow.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <span class="eyebrow text-xs text-gilt">03</span>
            <h3 class="display text-base text-bone mt-2">Design & Build</h3>
            <p class="mt-1 text-xs text-bone/70">Responsive, accessible, fast.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <span class="eyebrow text-xs text-gilt">04</span>
            <h3 class="display text-base text-bone mt-2">Launch</h3>
            <p class="mt-1 text-xs text-bone/70">Publish, test, and optimize.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 08: FAQ -->
    <section id="faq" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">08</span>FAQ</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">Frequently Asked Questions</h2>
        <div class="mt-8 space-y-4">
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <h3 class="text-base font-semibold text-gilt">How much does a custom WebGL website cost?</h3>
            <p class="mt-2 text-sm text-bone/80">Bespoke projects typically range from €10,000 to €25,000+ depending on 3D WebGL complexity, bespoke shader engineering, and interactive depth.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <h3 class="text-base font-semibold text-gilt">How long does a website build take?</h3>
            <p class="mt-2 text-sm text-bone/80">A complete bespoke web experience is typically designed, engineered, and launched in 4 to 8 weeks.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <h3 class="text-base font-semibold text-gilt">What technologies does Mady use?</h3>
            <p class="mt-2 text-sm text-bone/80">We build bespoke digital products using React, Three.js, WebGL shaders, Tailwind CSS, Vite, and edge serverless architectures.</p>
          </div>
          <div class="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
            <h3 class="text-base font-semibold text-gilt">Does the 3D WebGL experience work on mobile devices?</h3>
            <p class="mt-2 text-sm text-bone/80">Yes. Every composition is rethought per device viewport rather than merely scaled down.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 09: The System -->
    <section id="system" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">09</span>The System</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">How a Site is Put Together</h2>
        <p class="body-copy mt-4 max-w-2xl text-base text-bone/85">
          Not a hunch, a system: global edge delivery, strict 60fps frame budgets, contrast validation, and real-time GPU rendering.
        </p>
      </div>
    </section>

    <!-- 10: Activity -->
    <section id="activity" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">10</span>Activity</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">A Year, <span className="display-italic">Day by Day</span></h2>
        <p class="body-copy mt-4 max-w-2xl text-base text-bone/85">
          Continuous development and deployment cycle — dense build phases alternating with testing and coordination.
        </p>
      </div>
    </section>

    <!-- 11: Meet the Founder -->
    <section id="about" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">11</span>Meet the Founder</p>
        <h2 class="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-bone">Syed Mudassar Hassan (Mady)</h2>
        <div class="mt-8 rounded-xl border border-bone/10 bg-bone/[0.02] p-6 md:p-8">
          <p class="body-copy text-base leading-relaxed text-bone/85">
            Syed Mudassar Hassan (known as Mady) is a web developer and designer specialising in WebGL, 3D websites, digital products, and high-performance UI/UX systems.
          </p>
          <div class="mt-6 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-gilt">
            <span>United Kingdom</span>
            <span>•</span>
            <a href="mailto:info@mady.website" class="underline hover:text-bone">info@mady.website</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 12: Project Inquiry / Contact -->
    <section id="contact" class="relative flex min-h-[100svh] items-center px-4 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto w-full max-w-4xl py-20 text-center">
        <p class="eyebrow mb-4 text-gilt"><span class="mr-3 tabular-nums opacity-70">12</span>Project Inquiry</p>
        <h2 class="display text-[clamp(2.1rem,5vw,3.8rem)] text-bone">Ready to take the leap?</h2>
        <p class="body-copy mx-auto mt-4 max-w-xl text-base text-bone/85">
          Tell us about your project. We will get back to you personally with an honest assessment.
        </p>
      </div>
    </section>

    <!-- 13: Footer -->
    <footer id="footer" class="border-t border-bone/10 px-4 py-12 sm:px-6 md:px-12 lg:pl-56 xl:pl-64">
      <div class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="text-xs text-bone/50">© ${new Date().getFullYear()} Syed Mudassar Hassan (Mady). All rights reserved.</p>
        <div class="flex gap-6 text-xs text-bone/60">
          <a href="#services" class="hover:text-bone">Services</a>
          <a href="#work" class="hover:text-bone">Work</a>
          <a href="#process" class="hover:text-bone">Process</a>
          <a href="#about" class="hover:text-bone">Founder</a>
          <a href="#contact" class="hover:text-bone">Contact</a>
        </div>
      </div>
    </footer>
  </main>
`;

// 1. Inject into main index.html
const renderedHome = template.replace(/<div id="root">[\s\S]*<\/div>\s*<\/body>/, `<div id="root">${homePrerenderedHTML}</div>\n  </body>`);
fs.writeFileSync(TEMPLATE_PATH, renderedHome, 'utf8');
console.log('✓ Prerendered root index.html with complete semantic DOM structure');

// 2. Generate Dedicated Service Subpages for SEO & Topic Authority
const subpages = [
  {
    slug: 'web-design',
    title: 'Web Design & UI/UX Systems — Syed Mudassar Hassan (Mady)',
    description: 'Bespoke web design crafting luxury digital interfaces, high-conversion landing pages, and structured brand systems.',
    heading: 'Bespoke Web Design & UI/UX Systems',
    content: 'Syed Mudassar Hassan (Mady) engineers luxury web designs and UI/UX systems focused on trust, user guidance, and measured conversion lift.'
  },
  {
    slug: 'webgl-development',
    title: '3D WebGL & Interactive Web Development — Syed Mudassar Hassan (Mady)',
    description: 'Custom WebGL shaders, Three.js 3D web experiences, and real-time interactive digital products engineered for 60fps performance.',
    heading: '3D WebGL & Real-Time Interactive Development',
    content: 'We create high-performance browser 3D experiences using WebGL and Three.js without plugins, built for strict frame budgets and sub-second load times.'
  },
  {
    slug: 'services',
    title: 'Full-Service Digital Studio Services — Syed Mudassar Hassan (Mady)',
    description: 'Overview of web design, WebGL development, UI/UX systems, and conversion performance services.',
    heading: 'Services — Concept, Design & Technical Execution',
    content: 'Strategy, design, and technical implementation come from a single source — from first sketch to launch.'
  },
  {
    slug: 'about',
    title: 'About Syed Mudassar Hassan (Mady) — Web Developer & Designer',
    description: 'Learn about Syed Mudassar Hassan (known as Mady), web developer and designer specialising in WebGL, 3D websites, and high-performance UI/UX.',
    heading: 'About Syed Mudassar Hassan (Mady)',
    content: 'Syed Mudassar Hassan (known as Mady) is a web developer and designer specialising in WebGL, 3D websites, digital products, and high-performance UI/UX systems.'
  }
];

for (const page of subpages) {
  const pageDir = path.resolve(DIST_DIR, page.slug);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  const pageHtml = template
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${page.title}" />`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${page.description}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="https://mady.website/${page.slug}" />`)
    .replace(/<div id="root">[\s\S]*<\/div>\s*<\/body>/, `<div id="root">
      <main class="min-h-screen bg-space text-bone px-4 py-20 max-w-4xl mx-auto">
        <header class="mb-8 border-b border-bone/10 pb-6">
          <a href="/" class="text-xs uppercase tracking-widest text-gilt hover:underline">← Back to Portfolio</a>
          <h1 class="display text-3xl sm:text-4xl mt-4 text-bone">${page.heading}</h1>
          <p class="text-lg text-bone/80 mt-2">${page.description}</p>
        </header>
        <article class="prose prose-invert max-w-none text-bone/85 leading-relaxed">
          <p class="text-base">${page.content}</p>
        </article>
        <div class="mt-12 pt-6 border-t border-bone/10">
          <a href="/#contact" class="inline-flex items-center rounded-full bg-gilt px-6 py-3 text-xs font-semibold uppercase tracking-wider text-space">
            Start Project Inquiry
          </a>
        </div>
      </main>
    </div>\n  </body>`);

  fs.writeFileSync(path.resolve(pageDir, 'index.html'), pageHtml, 'utf8');
  console.log(`✓ Generated prerendered static page: /${page.slug}/index.html`);
}

console.log('✓ Prerendering completed successfully!');
