const fs = require('fs');

const cssContent = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,600&display=swap');

:root {
  --bg: #F5EFE6;
  --text: #2C2725;
  --box-bg: #EAE0D5;
  --box-dark: #262423;
  --crimson: #C4426E;
  
  --font-nunito: 'Nunito', sans-serif;
  --font-playfair: 'Playfair Display', serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-nunito);
  line-height: 1.5;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

/* MINIMAL LAYOUT */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.header-logo {
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.header-links {
  display: flex;
  gap: 24px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.header-links a {
  opacity: 0.6;
  transition: opacity 0.2s;
}
.header-links a:hover {
  opacity: 1;
}

.hero-box {
  background: var(--box-bg);
  border-radius: 24px;
  padding: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  position: relative;
  overflow: hidden;
}

.hero-content {
  flex: 1;
  max-width: 450px;
  z-index: 2;
}

.hero-visual {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
}

.eyebrow {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 24px;
  opacity: 0.7;
}

.h1 {
  font-size: 52px;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 40px;
}

.sub {
  font-size: 16px;
  opacity: 0.8;
  margin-bottom: 24px;
}

.launch-date {
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 24px;
  display: block;
}

.btn-dark {
  background: var(--box-dark);
  color: white;
  padding: 16px 32px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: inline-block;
  transition: transform 0.2s, opacity 0.2s;
}
.btn-dark:hover {
  transform: scale(1.02);
  opacity: 0.9;
}

.section-left {
  margin-bottom: 80px;
}

.h2 {
  font-size: 36px;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 32px;
}

.p-text {
  font-size: 16px;
  opacity: 0.8;
  margin-bottom: 16px;
  line-height: 1.5;
}

.dark-box {
  background: var(--box-dark);
  color: white;
  border-radius: 24px;
  padding: 64px;
  margin-bottom: 80px;
}

.dark-box .h2 {
  color: white;
}

.inline-features {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-size: 16px;
  margin-top: 32px;
}

.footer-closing {
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-top: 80px;
  margin-bottom: 80px;
}

.footer-bottom {
  text-align: center;
  padding-bottom: 40px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 16px;
}

.social-icons a {
  color: var(--text);
  opacity: 0.5;
  transition: opacity 0.2s;
}

.social-icons a:hover {
  opacity: 1;
}

.contact-mail {
  font-size: 14px;
  font-weight: 700;
  opacity: 0.7;
}

/* PHONE MOCKUP ANIMATIONS */
.phone-mock {
  width: 280px;
  background: white;
  border: 14px solid #111;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0,0,0,0.1);
  position: relative;
  animation: float 6s ease-in-out infinite;
}
.notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 24px;
  background: #111;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 10;
}
.mock-header {
  padding: 40px 20px 20px;
  background: var(--cream);
}
.mock-greeting { font-size: 20px; font-weight: 800; }
.mock-date { font-size: 12px; color: var(--text-mid); font-weight: 700; margin-top: 4px; }
.mock-body { padding: 20px; background: #FAFAFA; height: 350px; }
.mock-card { background: white; padding: 16px; border-radius: 16px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
.mc-title { font-size: 14px; font-weight: 800; display: flex; justify-content: space-between; margin-bottom: 8px;}
.mc-desc { font-size: 12px; color: var(--text-mid); line-height: 1.4;}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .hero-box {
    flex-direction: column;
    padding: 40px 24px;
    text-align: center;
  }
  .hero-visual {
    margin-top: 48px;
    justify-content: center;
  }
  .inline-features {
    flex-direction: column;
    gap: 12px;
  }
  .h1 { font-size: 40px; }
  .h2 { font-size: 28px; }
}
`;

const jsContent = \`"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header fade-up">
        <Link href="/" className="header-logo">
          HELLO SAKHEE
        </Link>
        <div className="header-links">
          <Link href="#about">ABOUT</Link>
          <Link href="#waitlist">JOIN THE WAITLIST</Link>
        </div>
      </header>

      {/* HERO BOX */}
      <section className="hero-box fade-up">
        <div className="hero-content">
          <div className="eyebrow">HELLO, SAKHEE.</div>
          <h1 className="h1">Log kya kahenge?<br/>— Not anymore.</h1>
          <p className="sub">Daily companion for the Indian woman who doesn't want to settle.</p>
          <span className="launch-date">LAUNCHING 28 AUGUST 2026</span>
          <Link href="#waitlist" className="btn-dark">BE THE FIRST TO KNOW</Link>
        </div>
        
        <div className="hero-visual">
          <div className="phone-mock">
            <div className="notch"></div>
            <div className="mock-header">
              <div className="mock-greeting">Morning, Priya.</div>
              <div className="mock-date">Thursday, 28 Aug</div>
            </div>
            <div className="mock-body">
              <div className="mock-card">
                <div className="mc-title"><span>☀️ Rise Sharp</span><span>5m</span></div>
                <div className="mc-desc">Set your intention. Read your Spark. Step into the day.</div>
              </div>
              <div className="mock-card">
                <div className="mc-title"><span>✨ Daily Spark</span><span>2m</span></div>
                <div className="mc-desc">Your power statement for today is ready.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SAKHEE */}
      <section className="section-left fade-up" id="about">
        <div className="eyebrow">WHY SAKHEE</div>
        <h2 className="h2">You don't need another app<br/>telling you how to live.</h2>
        <p className="p-text">You need something that understands that your life isn't a checklist.</p>
        <p className="p-text">Your ambitions. Your messy days. Your small wins.<br/>Your big plans. The things you don't always say out loud.</p>
        <p className="p-text">That's why we're building Sakhee.</p>
      </section>

      {/* CURIOSITY */}
      <section className="dark-box fade-up">
        <div className="eyebrow" style={{color: "rgba(255,255,255,0.6)"}}>WE'RE NOT GOING TO TELL YOU EVERYTHING YET.</div>
        <h2 className="h2">But we can tell you this:</h2>
        <div className="inline-features">
          <span>Sakhee is personal.</span>
          <span>Sakhee grows with you.</span>
          <span>Sakhee is for you.</span>
        </div>
      </section>

      {/* BRAND POSITIONING */}
      <section className="section-left fade-up">
        <div className="eyebrow">FOR WOMEN WHO ARE DONE WAITING FOR THE "RIGHT TIME."</div>
        <p className="p-text">For the woman starting over.<br/>For the woman building something.<br/>For the woman finding herself again.<br/>For the woman who simply knows there has to be more.</p>
        <div className="footer-closing">HELLO, SAKHEE. YOUR NEW EVERYDAY BEGINS SOON.</div>
      </section>

      {/* FOOTER */}
      <footer className="footer-bottom fade-up" id="waitlist">
        <img src="/qr.png" alt="Waitlist QR" style={{width: "260px", mixBlendMode: "multiply", margin: "0 auto", display: "block"}} />
        
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
        
        <div className="contact-mail">
          Reach out to us at: <a href="mailto:Contact@hellosakhee.com" style={{color: "var(--crimson)", textDecoration: "none"}}>Contact@hellosakhee.com</a>
        </div>
      </footer>
    </div>
  );
}
\`;

fs.writeFileSync('app/globals.css', cssContent);
fs.writeFileSync('app/page.js', jsContent);
console.log('Minimalist redesign applied.');
