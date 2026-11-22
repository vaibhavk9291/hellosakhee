"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  return (
    <main>
      {/* 1. TOP NAVBAR */}
      <header className="top-navbar">
        <Link href="#home" className="brand-lockup">
          <span className="brand-name">Hello Sakhee</span>
          <span className="brand-sub">YOUR DAILY COMPANION</span>
        </Link>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" className="nav-link" onClick={() => setMenuOpen(false)}>The Experience</a>
          <a href="#membership" className="nav-link" onClick={() => setMenuOpen(false)}>Membership</a>
          <a href="#testimonials" className="nav-link" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#collaborations" className="nav-link" onClick={() => setMenuOpen(false)}>Collaborations</a>
          <a href="#careers" className="nav-link" onClick={() => setMenuOpen(false)}>Careers</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#membership" className="nav-cta-btn" onClick={() => setMenuOpen(false)}>
            GET HELLO SAKHEE ↗
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

      {/* 2. HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="eyebrow">A LITTLE TIME, JUST FOR YOU</div>
            <h1 className="serif-heading hero-title">
              Hello Sakhee —
              <span className="title-accent">Your Daily Companion.</span>
            </h1>
            <p className="hero-body">
              A little space in every day to pause, reflect, grow, and come back to yourself.
            </p>
            <div className="hero-ctas">
              <a href="#membership" className="btn-primary-dark">
                GET HELLO SAKHEE ↗
              </a>
              <a href="#experience" className="link-arrow">
                EXPLORE THE EXPERIENCE →
              </a>
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
            <div className="app-screen-card">
              <div className="app-screen-diagonal"></div>
              <div className="app-screen-inner">
                <p className="app-screen-quote">
                  Insert the app’s homescreen with the logo and name
                </p>
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
            </div>
            <div className="circle-accent"></div>
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
              <div className="roadmap-num">01</div>
              <h3 className="roadmap-heading">Daily Spark &amp; Close Strong</h3>
              <p className="roadmap-desc">
                Small daily prompts and tasks to begin and end the day with intention.
              </p>
            </div>

            <div className="roadmap-col">
              <div className="roadmap-num">02</div>
              <h3 className="roadmap-heading">Your 7-level roadmap</h3>
              <p className="roadmap-desc">
                A structured seven-level path to make personal progress feel tangible.
              </p>
            </div>

            <div className="roadmap-col">
              <div className="roadmap-num">03</div>
              <h3 className="roadmap-heading">Circles</h3>
              <p className="roadmap-desc">
                Spaces for women to share interests and experiences with one another.
              </p>
            </div>

            <div className="roadmap-col">
              <div className="roadmap-num">04</div>
              <h3 className="roadmap-heading">Wins</h3>
              <p className="roadmap-desc">
                Milestones that acknowledge the progress you make.
              </p>
            </div>

            <div className="roadmap-col">
              <div className="roadmap-num">05</div>
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

      {/* 9. COLLABORATIONS */}
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
            <a href="#contact" className="btn-primary-dark">
              ANDROID
            </a>
            <a href="#contact" className="btn-outline-dark">
              IOS
            </a>
          </div>
        </div>
      </section>

      {/* 11. ABOUT / FOUNDER */}
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
      </section>

      {/* 12. CAREERS */}
      <section className="section-wrap careers-section" id="careers">
        <div className="careers-inner">
          <div className="eyebrow">CAREERS</div>
          <h2 className="serif-heading careers-title">
            Build something that feels human.
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
          <div className="brand-lockup">
            <span className="brand-name">Hello Sakhee</span>
            <span className="brand-sub">YOUR DAILY COMPANION</span>
          </div>

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
          <div>A little space in every day.</div>
        </div>
      </footer>
    </main>
  );
}
