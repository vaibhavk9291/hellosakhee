"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [activePlatform, setActivePlatform] = useState('android');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setDownloadModalOpen(false);
    };
    if (downloadModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [downloadModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  const handleContactFlow = () => {
    const collabEl = document.getElementById('collaborations');
    const careersEl = document.getElementById('careers');
    const contactEl = document.getElementById('contact');

    if (!collabEl || !careersEl || !contactEl) {
      contactEl?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    collabEl.scrollIntoView({ behavior: 'smooth' });

    let isAborted = false;
    const cancelFlow = () => {
      isAborted = true;
      window.removeEventListener('wheel', cancelFlow);
      window.removeEventListener('touchstart', cancelFlow);
      window.removeEventListener('keydown', cancelFlow);
    };

    window.addEventListener('wheel', cancelFlow, { passive: true, once: true });
    window.addEventListener('touchstart', cancelFlow, { passive: true, once: true });
    window.addEventListener('keydown', cancelFlow, { passive: true, once: true });

    setTimeout(() => {
      if (isAborted) return;
      careersEl.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        if (isAborted) return;
        contactEl.scrollIntoView({ behavior: 'smooth' });
        cancelFlow();
      }, 1200);
    }, 1200);
  };

  return (
    <main>
      {/* 1. TOP NAVBAR */}
      <header className="top-navbar">
        <Link href="#home" className="brand-logo-link">
          <img src="/logo-light-horizontal.png" alt="Hello Sakhee" className="navbar-logo" />
        </Link>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" className="nav-link" onClick={() => setMenuOpen(false)}>The Experience</a>
          <a href="#membership" className="nav-link" onClick={() => setMenuOpen(false)}>Membership</a>
          <a href="#testimonials" className="nav-link" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a
            href="#collaborations"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              handleContactFlow();
            }}
          >
            Contact
          </a>
          <button
            type="button"
            className="nav-cta-btn"
            onClick={() => {
              setMenuOpen(false);
              setDownloadModalOpen(true);
            }}
          >
            DOWNLOAD ↗
          </button>
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

      {/* 2. HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="eyebrow">A LITTLE TIME, JUST FOR YOU</div>
            <h1 className="serif-heading hero-title">
              Hello Sakhee
              <span className="title-accent">Your Daily Companion.</span>
            </h1>
            <p className="hero-body">
              A little space in every day to pause, reflect, grow, and come back to yourself.
            </p>
            <div className="hero-ctas">
              <button
                type="button"
                className="btn-primary-dark"
                onClick={() => setDownloadModalOpen(true)}
              >
                GET HELLO SAKHEE ↗
              </button>
              <div className="hero-store-badges">
                <a
                  href="https://play.google.com/store/apps/details?id=com.hello.sakhee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge-link"
                  aria-label="Get it on Google Play"
                >
                  <img src="/google-play-badge.svg" alt="Google Play Store" className="store-badge-img" />
                </a>
                <a
                  href="https://apps.apple.com/us/app/hello-sakhee/id6803506919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge-link"
                  aria-label="Download on the App Store"
                >
                  <img src="/app-store-badge.svg" alt="Apple App Store" className="store-badge-img" />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="editorial-frame">
              <img
                src="/hero-woman.png"
                alt="Woman pausing and reflecting by a tall sunny window in modern cream attire"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRANSITION QUOTE RIBBON */}
      <section className="quote-ribbon">
        <p className="quote-ribbon-text">
          “For every part of your life, there is still room for you.”
        </p>
      </section>

      {/* 4. THE SPACE BETWEEN EVERYTHING */}
      <section className="section-wrap space-section" id="about">
        <div className="space-grid">
          <div className="space-left">
            <div className="eyebrow">THE SPACE BETWEEN EVERYTHING</div>
            <h2 className="serif-heading space-title">
              There is so much you hold.<br />
              You matter in it, too.
            </h2>
            <div className="space-body">
              <p>
                A day can ask a woman to be many things to many people. Between the plans, the work, and the people she cares for, her own thoughts can be easy to set aside.
              </p>
              <p>
                Hello Sakhee is a gentle place to return to them—one ordinary day at a time.
              </p>
            </div>
          </div>

          <div className="space-right">
            <div className="app-showcase-box">
              <div className="app-showcase-diagonal"></div>

              {/* BRAND LOGO DIRECT (TRANSPARENT) */}
              <div className="app-showcase-logo">
                <img src="/logo-transparent.png" alt="Hello Sakhee Logo" />
              </div>

              {/* PHONE MOCKUP SCREEN */}
              <div className="phone-mockup-wrap">
                <div className="phone-device">
                  <div className="phone-notch"></div>

                  <div className="phone-screen-top">
                    <div className="phone-screen-welcome">W E L C O M E &nbsp; T O</div>
                    <div className="phone-screen-title">
                      <span className="title-hello">Hello</span>
                      <span className="title-sakhee">Sakhee</span>
                    </div>
                    <div className="phone-screen-subtitle">
                      Your Life. Your Rules.<br />Every Single Day.
                    </div>
                  </div>

                  <div className="phone-screen-bottom">
                    <button className="phone-btn-start">Get Started</button>
                    <div className="phone-login-text">
                      Already have an account? <strong>Sign in</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY WE BEGAN */}
      <section className="section-wrap why-section">
        <div className="why-grid">
          <div className="why-left">
            <div className="editorial-frame">
              <img
                src="/lifestyle-balcony.png"
                alt="Woman relaxing on a cozy balcony with tea at sunset"
              />
              <div className="balcony-logo-circle">
                <img src="/logo-transparent.png" alt="Hello Sakhee Logo" />
              </div>
            </div>
          </div>

          <div className="why-right">
            <div className="eyebrow">WHY WE BEGAN</div>
            <h2 className="serif-heading why-title">
              Self-connection, made part of everyday life.
            </h2>
            <div className="why-body">
              <p>
                Making time for yourself should feel possible within the life you already have.
              </p>
              <p>
                Hello Sakhee makes that space practical and personal, without more noise or another kind of pressure.
              </p>
            </div>
            <div className="why-quote-box">
              <p className="why-quote-text">
                “A little space for yourself can belong in every day.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE EXPERIENCE (5-Column Roadmap) */}
      <section className="section-wrap experience-section" id="experience">
        <div className="experience-inner">
          <div className="eyebrow">THE EXPERIENCE</div>
          <h2 className="serif-heading experience-title">
            A companion for the everyday.
          </h2>
          <p className="experience-subtitle">
            Thoughtful ways to begin, move forward, find your people, and recognise how far you have come.
          </p>

          <div className="roadmap-grid">
            <div className="roadmap-col">
              <h3 className="roadmap-heading">Daily Spark &amp; Close Strong</h3>
              <p className="roadmap-desc">
                Small daily prompts and tasks to begin and end the day with intention.
              </p>
            </div>

            <div className="roadmap-col">
              <h3 className="roadmap-heading">Your 7-level roadmap</h3>
              <p className="roadmap-desc">
                A structured seven-level path to make personal progress feel tangible.
              </p>
            </div>

            <div className="roadmap-col">
              <h3 className="roadmap-heading">Circles</h3>
              <p className="roadmap-desc">
                Spaces for women to share interests and experiences with one another.
              </p>
            </div>

            <div className="roadmap-col">
              <h3 className="roadmap-heading">Wins</h3>
              <p className="roadmap-desc">
                Milestones that acknowledge the progress you make.
              </p>
            </div>

            <div className="roadmap-col">
              <h3 className="roadmap-heading">Made personal</h3>
              <p className="roadmap-desc">
                An experience shaped around you and your current life stage.
              </p>
            </div>
          </div>

          <p className="roadmap-footnote">
            Your days are your own. This is simply something to meet you in them.
          </p>
        </div>
      </section>

      {/* 7. MEMBERSHIP (Pricing Cards) */}
      <section className="section-wrap membership-section" id="membership">
        <div className="membership-grid">
          <div className="membership-left">
            <div className="eyebrow">MEMBERSHIP</div>
            <h2 className="serif-heading membership-title">
              A little space, all your own.
            </h2>
            <p className="membership-desc">
              Choose the membership rhythm that feels right for you. Both plans bring you the Hello Sakhee experience.
            </p>
          </div>

          <div className="pricing-cards">
            {/* Monthly Card */}
            <div className="price-card card-monthly">
              <div>
                <div className="price-card-header">
                  <span className="price-plan-tag">MONTHLY</span>
                </div>
                <div className="price-amount">
                  ₹49 <span className="price-period">/ month</span>
                </div>
                <p className="price-subtext">
                  A month at a time, on your terms.
                </p>
              </div>
              <a href="#contact" className="link-arrow">
                GET HELLO SAKHEE →
              </a>
            </div>

            {/* Yearly Card */}
            <div className="price-card card-yearly">
              <div>
                <div className="price-card-header">
                  <span className="price-plan-tag">YEARLY</span>
                  <span className="price-badge-best">BEST VALUE</span>
                </div>
                <div className="price-amount">
                  ₹499 <span className="price-period">/ year</span>
                </div>
                <p className="price-subtext">
                  Save ₹89 compared with 12 monthly payments.
                </p>
              </div>
              <a href="#contact" className="link-arrow">
                GET HELLO SAKHEE →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="testimonials-section" id="testimonials">
        <div className="testimonials-inner">
          <div className="testimonials-eyebrow">TESTIMONIALS</div>
          <h2 className="testimonials-title">In their own words.</h2>
          <div className="testimonials-divider"></div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div>
                <div className="test-stars">★★★★★</div>
                <p className="test-quote">
                  “Hello Sakhee feels like the only space in my day where nobody is asking anything of me. It is gentle, grounding, and genuinely personal.”
                </p>
              </div>
              <div className="test-author">
                <div className="test-avatar">AV</div>
                <div>
                  <div className="test-name">Aditi Varma</div>
                  <div className="test-role">Product Lead, Bengaluru</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="test-stars">★★★★★</div>
                <p className="test-quote">
                  “Between my baby and my architecture practice, I had completely forgotten what checking in with myself felt like. Sakhee brought that rhythm back.”
                </p>
              </div>
              <div className="test-author">
                <div className="test-avatar">MS</div>
                <div>
                  <div className="test-name">Meera Sen</div>
                  <div className="test-role">Architect &amp; New Mom, Mumbai</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="test-stars">★★★★★</div>
                <p className="test-quote">
                  “Not another productivity tracker or toxic self-help app. It feels like an intelligent, thoughtful friend who actually listens to my days.”
                </p>
              </div>
              <div className="test-author">
                <div className="test-avatar">PN</div>
                <div>
                  <div className="test-name">Pooja Nair</div>
                  <div className="test-role">Brand Founder, Delhi</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="test-stars">★★★★★</div>
                <p className="test-quote">
                  “The 7-level roadmap gave me a calm sense of direction without the overwhelming pressure to prove myself every minute. It truly belongs in every day.”
                </p>
              </div>
              <div className="test-author">
                <div className="test-avatar">KR</div>
                <div>
                  <div className="test-name">Kavita Rao</div>
                  <div className="test-role">Educator &amp; Writer, Pune</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="test-stars">★★★★★</div>
                <p className="test-quote">
                  “Starting my morning with the Daily Spark and closing strong has quietly changed the tone of my entire year. I feel centered, seen, and ready.”
                </p>
              </div>
              <div className="test-author">
                <div className="test-avatar">SD</div>
                <div>
                  <div className="test-name">Shreya Deshmukh</div>
                  <div className="test-role">Strategy Consultant, Hyderabad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ABOUT / FOUNDER */}
      <section className="section-wrap founder-section">
        <div className="founder-grid">
          <div className="founder-left">
            <div className="eyebrow">ABOUT / FOUNDER</div>
            <h2 className="serif-heading founder-title">
              Meet Bhavana – the Founder &amp; CEO.
            </h2>
            <div className="founder-body">
              <p>
                We built Hello Sakhee with a belief that a woman’s relationship with herself deserves a place in everyday life—not only when everything else is done.
              </p>
              <p>
                Our purpose is to make that connection feel practical and personal through small daily moments, a clear path forward, and space to share experiences with other women.
              </p>
              <p>
                This is a companion, not another expectation to keep up with.
              </p>
            </div>
          </div>

          <div className="founder-right">
            <div className="founder-frame-wrap">
              <div className="editorial-frame">
                <img
                  src="/founder-bhavana.png"
                  alt="Bhavana Sharma, Founder and CEO of Hello Sakhee"
                />
              </div>
              <p className="founder-caption">
                Bhavana Sharma · Founder &amp; CEO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. MAKE SPACE / APP DOWNLOAD CTA */}
      <section className="download-section">
        <div className="download-inner">
          <h2 className="serif-heading download-title">
            Make a little space for yourself with Hello Sakhee.
          </h2>
          <p className="download-sub">
            A daily companion for the woman you are, and the life you’re living right now.
          </p>
          <div className="download-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.hello.sakhee"
              target="_blank"
              rel="noopener noreferrer"
              className={activePlatform === 'android' ? 'btn-primary-dark' : 'btn-outline-dark'}
              onClick={() => setActivePlatform('android')}
            >
              ANDROID
            </a>
            <a
              href="https://apps.apple.com/us/app/hello-sakhee/id6803506919"
              target="_blank"
              rel="noopener noreferrer"
              className={activePlatform === 'ios' ? 'btn-primary-dark' : 'btn-outline-dark'}
              onClick={() => setActivePlatform('ios')}
            >
              IOS
            </a>
          </div>
        </div>
      </section>

      {/* 11. COLLABORATIONS */}
      <section className="collab-section" id="collaborations">
        <div className="collab-grid">
          <div className="collab-left">
            <div className="eyebrow">COLLABORATIONS</div>
            <h2 className="serif-heading collab-title">
              Good things begin with a conversation.
            </h2>
          </div>

          <div className="collab-right">
            <p className="collab-desc">
              If you’re a brand, creator, community, or organisation whose work speaks to women’s everyday lives, we’d love to hear what you have in mind.
            </p>
            <a href="#contact" className="btn-primary-dark">
              START A CONVERSATION ↗
            </a>
          </div>
        </div>
      </section>

      {/* 12. CAREERS */}
      <section className="section-wrap careers-section" id="careers">
        <div className="careers-inner">
          <div className="eyebrow">CAREERS</div>
          <h2 className="serif-heading careers-title">
            Together, let's make a difference in women's lives.
          </h2>
          <p className="careers-body">
            We welcome thoughtful people who care about making everyday life feel more connected and considered for women. If that sounds like you, start a conversation with us.
          </p>
          <a href="#contact" className="link-arrow">
            GET IN TOUCH →
          </a>
        </div>
      </section>

      {/* 13. CONTACT */}
      <section className="section-wrap contact-section" id="contact">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="eyebrow">CONTACT</div>
            <h2 className="serif-heading contact-title">
              We’d love to hear from you.
            </h2>
            <p className="contact-sub">
              A question, a thought, or an idea to explore together? Send us a note.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a 
                href="https://wa.me/919109443721?text=Hello%20Sakhee%2C%20I%20would%20like%20to%20connect%21" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: 'var(--plum)', fontWeight: 600, textDecoration: 'none' }}
              >
                <span>💬 WhatsApp / Message:</span>
                <span style={{ textDecoration: 'underline' }}>+91 91094 43721</span>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="name">NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us what’s on your mind..."
                ></textarea>
              </div>

              <div>
                <button type="submit" className="btn-primary-dark">
                  {formSubmitted ? "MESSAGE SENT ✓" : "SEND MESSAGE ↗"}
                </button>
              </div>

              {formSubmitted && (
                <p style={{ color: "var(--plum)", fontWeight: 700, fontSize: "14px" }}>
                  Thank you! Your note has been sent. We will get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <Link href="#home" className="brand-logo-link">
            <img src="/logo-light-horizontal.png" alt="Hello Sakhee" className="footer-logo" />
          </Link>

          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#experience" className="footer-link">The Experience</a>
            <a href="#membership" className="footer-link">Membership</a>
            <a href="#testimonials" className="footer-link">Testimonials</a>
            <a href="#collaborations" className="footer-link">Collaborations</a>
            <a href="#careers" className="footer-link">Careers</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div>© Hello Sakhee</div>
          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/hellosakhee?hvrq=MW56bmxsa3QxMG96cw=="
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/hello-sakhee/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1A9TpgNqMH/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://wa.me/919109443721?text=Hello%20Sakhee%2C%20I%20would%20like%20to%20connect%21"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.47-1.39-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.79.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* DOWNLOAD CHOICE MODAL */}
      {downloadModalOpen && (
        <div
          className="download-modal-backdrop"
          onClick={() => setDownloadModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="download-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setDownloadModalOpen(false)}
              aria-label="Close dialog"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-badge-wrapper">
              <img
                src="/logo-badge.png"
                alt="Hello Sakhee"
                className="modal-badge-icon"
              />
            </div>

            <div className="modal-eyebrow">YOUR DAILY COMPANION</div>
            <h3 id="modal-title" className="modal-title">Download Hello Sakhee</h3>
            <p className="modal-sub">
              Choose your platform to get started on your daily wellness journey:
            </p>

            <div className="modal-options-grid">
              <a
                href="https://play.google.com/store/apps/details?id=com.hello.sakhee"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-option-btn"
              >
                <div className="modal-option-content">
                  <img
                    src="/google-play-icon.svg"
                    alt="Google Play"
                    className="modal-option-icon"
                  />
                  <div className="modal-option-labels">
                    <span className="modal-option-pre">Get it on</span>
                    <span className="modal-option-name">Google Play</span>
                  </div>
                </div>
                <span className="modal-option-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>

              <a
                href="https://apps.apple.com/us/app/hello-sakhee/id6803506919"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-option-btn"
              >
                <div className="modal-option-content">
                  <img
                    src="/apple-icon.svg"
                    alt="App Store"
                    className="modal-option-icon"
                  />
                  <div className="modal-option-labels">
                    <span className="modal-option-pre">Download on the</span>
                    <span className="modal-option-name">App Store</span>
                  </div>
                </div>
                <span className="modal-option-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
            </div>

            <div className="modal-footer-note">
              Available for Android and iOS devices
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
