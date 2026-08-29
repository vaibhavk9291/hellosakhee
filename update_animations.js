const fs = require('fs');

let pageContent = fs.readFileSync('app/page.js', 'utf8');

if (!pageContent.includes('"use client"')) {
  pageContent = '"use client";\n' + pageContent;
}

if (!pageContent.includes('useEffect')) {
  pageContent = pageContent.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport { useEffect } from 'react';");
}

const useEffectHook = `
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-scroll');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
`;

if (!pageContent.includes('IntersectionObserver')) {
  pageContent = pageContent.replace('export default function Home() {\n  return (', 'export default function Home() {\n' + useEffectHook + '\n  return (');
}

const replacements = [
  { s: 'className="section-label"', r: 'className="section-label fade-up"' },
  { s: 'className="section-heading"', r: 'className="section-heading fade-up"' },
  { s: 'className="section-sub"', r: 'className="section-sub fade-up"' },
  { s: 'className="step-card"', r: 'className="step-card fade-up"' },
  { s: 'className="feature-card ', r: 'className="feature-card fade-up ' },
  { s: 'className="ritual-card"', r: 'className="ritual-card fade-up"' },
  { s: 'className="hero-badge"', r: 'className="hero-badge fade-up"' },
  { s: 'className="hero-heading"', r: 'className="hero-heading fade-up"' },
  { s: 'className="hero-sub"', r: 'className="hero-sub fade-up"' },
  { s: 'className="hero-ctas"', r: 'className="hero-ctas fade-up"' },
  { s: 'className="hero-social-proof"', r: 'className="hero-social-proof fade-up"' },
  { s: 'className="hero-visual"', r: 'className="hero-visual fade-up"' }
];

replacements.forEach(rep => {
  pageContent = pageContent.split(rep.s).join(rep.r);
});

fs.writeFileSync('app/page.js', pageContent);

let cssContent = fs.readFileSync('app/globals.css', 'utf8');

if (!cssContent.includes('.fade-up')) {
  cssContent += `
/* Scroll Animations */
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.fade-up.show-scroll {
  opacity: 1;
  transform: translateY(0);
}
`;
}

cssContent = cssContent.replace('min-height: 100vh;\n  background: var(--cream);\n  display: flex; align-items: center;\n  padding: 120px 5vw 80px;', 'min-height: calc(100vh - 60px);\n  background: var(--cream);\n  display: flex; align-items: center;\n  padding: 100px 5vw 60px;');

fs.writeFileSync('app/globals.css', cssContent);
console.log('Added fade-up animations and adjusted hero sizing.');
