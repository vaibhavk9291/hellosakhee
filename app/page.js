"use client";
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {

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

  return (
    <>
      {/* NAV */}
      <nav>
        <Link href="#" className="nav-logo">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="50" r="42" strokeWidth="2.5" opacity="0.8" />
            <path d="M 50 64 C 42 51, 45 31, 50 21 C 55 31, 58 51, 50 64 Z" />
            <path d="M 45 54 C 30 51, 22 41, 25 31 C 32 38, 40 46, 45 54" />
            <path d="M 55 54 C 70 51, 78 41, 75 31 C 68 38, 60 46, 55 54" />
            <path d="M 50 66 C 36 54, 26 54, 26 66 C 26 78, 36 78, 50 66 C 64 54, 74 54, 74 66 C 74 78, 64 78, 50 66 Z" />
          </svg>
          Hello<span>Sakhee</span>
        </Link>
        <div className="nav-links">
          <Link href="#how">How it works</Link>
          <Link href="#features">Features</Link>
          <Link href="#rituals">Rituals</Link>
          <Link href="#community">Community</Link>
          <Link href="#cta" className="nav-cta">Get Early Access</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg-blob blob1"></div>
        <div className="hero-bg-blob blob2"></div>
        <div className="hero-bg-blob blob3"></div>
        <div className="hero-inner">
          <div>
            <div className="hero-badge fade-up">
              <div className="dot"></div>
              Now available on Android - Join the beta
            </div>
            <h1 className="hero-heading fade-up">
              Your Life.
              <span className="highlight">Your Rules.</span>
              Every Single Day.
            </h1>
            <p className="hero-sub fade-up">Meet Sakhee - your AI companion who remembers everything, shows up every morning, and helps you become the woman you're already becoming.</p>
            <div className="hero-ctas fade-up">
              <Link href="#cta" className="btn-primary">✨ Start for Free</Link>
              <Link href="#how" className="btn-secondary">See how it works →</Link>
            </div>
            <div className="hero-social-proof fade-up">
              <div className="avatars">
                <div className="av av1">P</div>
                <div className="av av2">R</div>
                <div className="av av3">M</div>
                <div className="av av4">S</div>
              </div>
              <div className="proof-text"><strong>Join the growing community</strong> of women on the waitlist</div>
            </div>
          </div>
          <div className="hero-visual fade-up">
            {/* Floating badges */}
            <div className="float-badge fb1">🔥 34-day streak</div>
            <div className="float-badge fb2">✨ Win logged!</div>
            <div className="float-badge fb3">🏆 Badge unlocked</div>
            <div className="float-badge fb4">💜 Sakhee says hi</div>

            {/* Phone mockup */}
            <div className="phone-mock">
              <div className="ph-header">
                <div className="ph-avatar">S</div>
                <div className="ph-user">
                  <div className="ph-name">Hi, <span>Sakhee</span></div>
                  <div className="ph-greeting">Good evening</div>
                </div>
                <div className="ph-streak">🔥 0</div>
                <div className="ph-bell">🔔</div>
              </div>
              
              <div className="ph-rituals">
                <div className="ph-ritual-item">
                  <div className="ph-rc ph-rc-yellow">☀️</div>
                  <div className="ph-rt">Rise Sharp</div>
                  <div className="ph-rst">5 MIN</div>
                </div>
                <div className="ph-ritual-item">
                  <div className="ph-rc ph-rc-pink">✨</div>
                  <div className="ph-rt">Spark</div>
                  <div className="ph-rst">ONGOING</div>
                </div>
                <div className="ph-ritual-item">
                  <div className="ph-rc ph-rc-purple">🌙</div>
                  <div className="ph-rt">Close Strong</div>
                  <div className="ph-rst">8:00 PM</div>
                </div>
              </div>

              <div className="ph-calendar">
                <div className="ph-day ph-day-past"><span>Sun</span><strong>2</strong><span>-</span></div>
                <div className="ph-day ph-day-active"><span>Mon</span><strong>3</strong><span>◌</span></div>
                <div className="ph-day"><span>Tue</span><strong>4</strong></div>
                <div className="ph-day"><span>Wed</span><strong>5</strong></div>
                <div className="ph-day"><span>Thu</span><strong>6</strong></div>
              </div>

              <div className="ph-task-card">
                <div className="ph-task-header">
                  <div className="ph-task-icon">✔️</div>
                  <div className="ph-task-label">TODAY'S TASK</div>
                  <div className="ph-task-day">DAY 3/31</div>
                </div>
                <div className="ph-task-quote">Hunger has different voices. Today you learn to tell them apart.</div>
                <div className="ph-task-progress"><div className="ph-tp-fill"></div></div>
                <div className="ph-task-footer">Check-in · Notice · Eat Well, Feel Well</div>
                <div className="ph-task-btn">Open today's task</div>
              </div>
              <div className="ph-fab">💬</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-bg" id="how">
        <div className="section-inner">
          <div className="section-label fade-up">How it works</div>
          <h2 className="section-heading fade-up">Three minutes.<br className="h-pink"/> One step at a time.</h2>
          <p className="section-sub fade-up">HelloSakhee doesn't ask for your whole life. Just three minutes a day to start. Sakhee does the rest.</p>
          <div className="steps-grid">
            <div className="step-card fade-up">
              <div className="step-num">1</div>
              <div className="step-title">Tell Sakhee who you are</div>
              <div className="step-desc">Share your name, your one big goal, and what you refuse to compromise on. Sakhee remembers all of it - forever.</div>
            </div>
            <div className="step-card fade-up">
              <div className="step-num">2</div>
              <div className="step-title">Get your Daily Spark</div>
              <div className="step-desc">Every morning at the time you choose, Sakhee sends you a thought crafted just for you - not a generic quote. Yours.</div>
            </div>
            <div className="step-card fade-up">
              <div className="step-num">3</div>
              <div className="step-title">Do your rituals</div>
              <div className="step-desc">Rise Sharp in the morning. Spark in the day. Close Strong at night. Each one takes under 5 minutes. Each one adds up.</div>
            </div>
            <div className="step-card fade-up">
              <div className="step-num">4</div>
              <div className="step-title">Celebrate your wins</div>
              <div className="step-desc">Log every small win. Unlock badges. Build your streak. Sakhee celebrates with you - every single time. Because you deserve it.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="section-inner">
          <div className="section-label fade-up">Everything you get</div>
          <h2 className="section-heading fade-up">Built for <span className="h-pink">real</span> women.<br/>Not the highlight reel.</h2>
          <p className="section-sub fade-up">No toxic positivity. No impossible standards. Just Sakhee - honest, warm, and completely in your corner.</p>
          <div className="features-grid">
            <div className="feature-card fade-up fc-1">
              <span className="feature-emoji">💜</span>
              <div className="feature-title">Sakhee AI Companion</div>
              <div className="feature-desc">Your personal AI friend who listens, remembers, and responds with the warmth of someone who genuinely knows you. Talk to her about anything.</div>
            </div>
            <div className="feature-card fade-up fc-2">
              <span className="feature-emoji">✨</span>
              <div className="feature-title">Daily Spark</div>
              <div className="feature-desc">One personalised thought, delivered every morning at your chosen time. A power statement, a challenge, or a reflection - whatever you need today.</div>
            </div>
            <div className="feature-card fade-up fc-3">
              <span className="feature-emoji">🗺️</span>
              <div className="feature-title">Your Roadmap</div>
              <div className="feature-desc">Set a goal. Sakhee builds your personalised 4-week roadmap - one step at a time. Check in weekly. Level up through your journey.</div>
            </div>
            <div className="feature-card fade-up fc-4">
              <span className="feature-emoji">🏆</span>
              <div className="feature-title">Wins & Badges</div>
              <div className="feature-desc">Every win counts - big or small. Log it, earn badges, build your streak. Proof that you keep showing up, even on the hard days.</div>
            </div>
            <div className="feature-card fade-up fc-5">
              <span className="feature-emoji">👭</span>
              <div className="feature-title">Sakhi Circle</div>
              <div className="feature-desc">A community of real women sharing real wins. No filters, no performance. Just women lifting women - in a space that actually feels safe.</div>
            </div>
            <div className="feature-card fade-up fc-6">
              <span className="feature-emoji">🚶‍♀️</span>
              <div className="feature-title">Step Tracker</div>
              <div className="feature-desc">Set your daily step goal. Hit it. Sakhee celebrates it as a win. Because movement is medicine, and every step counts.</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI MENTORSHIP */}
      <section id="mentorship" style={{ padding: "100px 5vw", textAlign: "center" }}>
        <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="section-label fade-up">Mentorship & Support</div>
          <h2 className="section-heading fade-up">Growth, guided by <span className="h-pink">empathy</span>.</h2>
          <p className="section-sub fade-up" style={{ marginBottom: "56px" }}>
            Sakhee isn't just a tracker. She's a companion designed to offer real-time support and gentle mentorship. Get the personalized guidance you need to grow at your own pace.
          </p>
          <div className="steps-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", textAlign: "left" }}>
            <div className="step-card fade-up">
              <div className="feature-emoji" style={{ fontSize: "40px", marginBottom: "16px" }}>🧭</div>
              <div className="step-title">Personalized Guidance</div>
              <div className="step-desc">Mentorship adapted to your unique goals, offering actionable steps when you feel stuck or overwhelmed.</div>
            </div>
            <div className="step-card fade-up">
              <div className="feature-emoji" style={{ fontSize: "40px", marginBottom: "16px" }}>💬</div>
              <div className="step-title">24/7 Safe Space</div>
              <div className="step-desc">A private space to talk through your challenges anytime, without judgment, performance, or pressure.</div>
            </div>
          </div>
        </div>
      </section>

      {/* RITUALS */}
      <section className="rituals-bg" id="rituals">
        <div className="section-inner">
          <div className="rituals-head">
            <div className="section-label fade-up">Daily Rituals</div>
            <h2 className="section-heading fade-up" style={{color: "white"}}>Three rituals.<br/><span style={{color: "var(--crimson-light)"}}>One powerful day.</span></h2>
            <p className="section-sub fade-up">The most successful women don't have more hours. They have better rituals. Here are yours.</p>
          </div>
          <div className="rituals-grid">
            <div className="ritual-card fade-up">
              <div className="ritual-big-icon">☀️</div>
              <div className="ritual-name">Rise Sharp</div>
              <div className="ritual-time">Morning · 5 min</div>
              <div className="ritual-desc">Set your intention. Read your Spark. Take one breath. Step into the day knowing exactly who you are and what you're here to do.</div>
            </div>
            <div className="ritual-card fade-up">
              <div className="ritual-big-icon">✨</div>
              <div className="ritual-name">Daily Spark</div>
              <div className="ritual-time">Your chosen time · 2 min</div>
              <div className="ritual-desc">Your personalised daily thought - a power statement, a challenge, or a reflection crafted by Sakhee just for you. React to it. Save it. Share it.</div>
            </div>
            <div className="ritual-card fade-up">
              <div className="ritual-big-icon">🌙</div>
              <div className="ritual-name">Close Strong</div>
              <div className="ritual-time">Evening · 5 min</div>
              <div className="ritual-desc">Three questions. What did you do well? What are you leaving behind? What will you do for yourself tomorrow? Sakhee closes the day with you.</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY EXPLANATION */}
      <section className="testimonials-bg" id="community">
        <div className="section-inner">
          <div className="section-label fade-up">Welcome to your tribe</div>
          <h2 className="section-heading fade-up">The <span className="h-pink">Sakhi Circle</span><br/>Community</h2>
          <p className="section-sub fade-up">A safe, authentic space where real women lift each other up. No filters, no performance-just genuine support and shared growth.</p>
          <div className="steps-grid" style={{marginTop: "56px"}}>
            <div className="step-card fade-up">
              <div className="feature-emoji" style={{fontSize: "40px", marginBottom: "18px"}}>👭</div>
              <div className="step-title">Find Your People</div>
              <div className="step-desc">Connect with women who share your specific goals-whether it's career growth, motherhood, or building mindful habits.</div>
            </div>
            <div className="step-card fade-up">
              <div className="feature-emoji" style={{fontSize: "40px", marginBottom: "18px"}}>🤝</div>
              <div className="step-title">Share Real Wins</div>
              <div className="step-desc">Celebrate your victories, big or small. In the Sakhi Circle, every step forward is met with encouragement, not comparison.</div>
            </div>
            <div className="step-card fade-up">
              <div className="feature-emoji" style={{fontSize: "40px", marginBottom: "18px"}}>🌱</div>
              <div className="step-title">Grow Together</div>
              <div className="step-desc">Learn from the experiences of others, share your own insights, and build a support system that holds you accountable to your best self.</div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="cta-eyebrow">✨ Your space. Your story. Your Sakhee.</div>
        <h2 className="cta-heading">Ready to meet<br/><span>Sakhee?</span></h2>
        <p className="cta-sub">Free to start. No credit card. Just you and Sakhee - building the life you keep putting off.</p>
        <Link href="#" className="btn-primary" style={{fontSize: "18px", padding: "18px 48px", margin: "0 auto", display: "inline-flex"}}>
          ✨ Get Started - It's Free
        </Link>
        <div className="app-badges">
          <Link href="#" className="app-badge">
            <span className="badge-icon">📱</span>
            <div>
              <div style={{fontSize: "10px", opacity: 0.6, fontWeight: 600}}>DOWNLOAD ON THE</div>
              <div>App Store</div>
            </div>
          </Link>
          <Link href="#" className="app-badge">
            <span className="badge-icon">🤖</span>
            <div>
              <div style={{fontSize: "10px", opacity: 0.6, fontWeight: 600}}>GET IT ON</div>
              <div>Google Play</div>
            </div>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">Hello<span>Sakhee</span></span>
        <div className="footer-tagline">Your Life. Your Rules. Every Single Day.</div>
        
        <div className="footer-contact" style={{ margin: "16px 0 24px", fontSize: "15px", color: "var(--text-mid)" }}>
          Reach out to us at: <a href="mailto:Contact@hellosakhee.com" style={{ color: "var(--crimson)", fontWeight: "800", textDecoration: "none" }}>Contact@hellosakhee.com</a>
        </div>

        <div className="footer-links">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Community</Link>
          <Link href="#">Blog</Link>
        </div>
        <div className="footer-copy">© 2026 HelloSakhee.</div>
      </footer>
    </>
  );
}
