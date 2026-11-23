"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LegalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-navbar">
      <Link href="/" className="brand-logo-link">
        <img src="/logo-light-horizontal.png" alt="Hello Sakhee" className="navbar-logo" />
      </Link>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/#experience" className="nav-link" onClick={() => setMenuOpen(false)}>The Experience</Link>
        <Link href="/#membership" className="nav-link" onClick={() => setMenuOpen(false)}>Membership</Link>
        <Link href="/#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a
          href="https://play.google.com/store/apps/details?id=com.hello.sakhee"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta-btn"
          onClick={() => setMenuOpen(false)}
        >
          DOWNLOAD ↗
        </a>
      </nav>

      <button
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
    </header>
  );
}
