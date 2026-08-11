"use client";
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
        <Link href="/" className="header-logo" style={{display: 'flex', alignItems: 'center'}}>
          <img src="/logo2.png" alt="Hello Sakhee" className="main-logo" />
        </Link>
        <div className="header-links">
          <a href="#about">ABOUT</a>
          <a href="#waitlist">JOIN THE WAITLIST</a>
        </div>
      </header>

      {/* HERO BOX */}
      <section className="hero-box fade-up">
        <div className="hero-content">
          <div className="eyebrow">HELLO, SAKHEE.</div>
          <h1 className="h1">Log kya kahenge?<br/>— Not anymore.</h1>
          <p className="sub">Daily companion for the Indian woman<br/>who doesn't want to settle.</p>
          <span className="launch-date">LAUNCHING 28 AUGUST 2026</span>
          <a href="#waitlist" className="btn-dark">BE THE FIRST TO KNOW</a>
        </div>
        
        <div className="hero-visual">
          <div className="phone-mock">
            <div className="notch"></div>
            
            <div className="mock-top">
              <div className="mock-user">
                <div className="mock-avatar">S</div>
                <div>
                  <div className="mock-greeting-text">Hi, <span>Sakhee</span></div>
                  <div className="mock-time">Good evening</div>
                </div>
              </div>
              <div className="mock-top-actions">
                <div className="mock-pill">🔥 0</div>
                <div className="mock-icon-btn">🔔</div>
              </div>
            </div>

            <div className="mock-rituals">
              <div className="ritual-item">
                <div className="r-circle yellow">☀️</div>
                <div className="r-name">Rise Sharp</div>
                <div className="r-status">5 MIN</div>
              </div>
              <div className="ritual-item">
                <div className="r-circle pink">✨</div>
                <div className="r-name">Spark</div>
                <div className="r-status">ONGOING</div>
              </div>
              <div className="ritual-item">
                <div className="r-circle purple">🌙</div>
                <div className="r-name">Close Strong</div>
                <div className="r-status">8:00 PM</div>
              </div>
            </div>

            <div className="mock-calendar">
              <div className="cal-day past">
                <span className="cal-dow">Sun</span>
                <span className="cal-num">2</span>
                <span style={{fontSize: "6px"}}>—</span>
              </div>
              <div className="cal-day active">
                <span className="cal-dow">Mon</span>
                <span className="cal-num">3</span>
                <span style={{fontSize: "6px"}}>⚪</span>
              </div>
              <div className="cal-day">
                <span className="cal-dow">Tue</span>
                <span className="cal-num">4</span>
              </div>
              <div className="cal-day">
                <span className="cal-dow">Wed</span>
                <span className="cal-num">5</span>
              </div>
              <div className="cal-day">
                <span className="cal-dow">Thu</span>
                <span className="cal-num">6</span>
              </div>
              <div className="cal-day">
                <span className="cal-dow">Fri</span>
                <span className="cal-num">7</span>
              </div>
              <div className="cal-day">
                <span className="cal-dow">Sat</span>
                <span className="cal-num">8</span>
              </div>
            </div>

            <div className="mock-task-card">
              <div className="tc-header">
                <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
                  <div className="tc-icon">📑</div>
                  <div className="tc-label">TODAY'S TASK</div>
                </div>
                <div className="tc-pill">DAY 3/31</div>
              </div>
              
              <div className="tc-title">Hunger has different voices. Today you learn to tell them apart.</div>
              
              <div className="tc-progress"><div className="tc-progress-bar"></div></div>
              
              <div className="tc-tags">Check-in · Notice · Eat Well, Feel Well</div>
              
              <div className="tc-btn">Open today's task</div>
              
              <div className="mock-fab">💬</div>
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
        <p className="p-text" style={{marginTop: "24px"}}>That's why we're building Sakhee.</p>
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
          <a href="https://www.linkedin.com/company/hello-sakhee/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.instagram.com/hellosakhee/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
