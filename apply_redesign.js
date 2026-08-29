const fs = require('fs');
let content = fs.readFileSync('app/page.js', 'utf8');

// 1. Update Nav Links
content = content.replace(
  /<div className="nav-links">[\s\S]*?<\/div>/,
  `<div className="nav-links">
          <Link href="#hero">Home</Link>
          <Link href="#why-sakhee">About Sakhee</Link>
          <Link href="#waitlist" className="nav-cta">Be the first to know</Link>
        </div>`
);

// 2. Update Hero text and CTA
content = content.replace(
  /<div className="hero-badge fade-up">[\s\S]*?<\/div>/,
  `<div className="hero-badge fade-up" style={{visibility: "hidden"}}>
              <div className="dot"></div>
              Coming Soon
            </div>`
);

content = content.replace(
  /<p className="hero-sub fade-up">Meet Sakhee - your AI companion who remembers everything, shows up every morning, and helps you become the woman you're already becoming.<\/p>/,
  `<p className="hero-sub fade-up">A daily companion for the Indian woman who doesn't want to settle.<br/><strong style={{color: "var(--crimson-light)", display: "inline-block", marginTop: "12px", fontSize: "16px", letterSpacing: "1px", textTransform: "uppercase"}}>Launching 28 August 2026</strong></p>`
);

content = content.replace(
  /<div className="hero-ctas fade-up">[\s\S]*?<\/div>/,
  `<div className="hero-ctas fade-up">
              <Link href="#waitlist" className="btn-primary">✨ Be the first to know</Link>
            </div>`
);

// 3. Replace all middle sections with the pre-launch sections
const middleStartMarker = "{/* HOW IT WORKS */}";
const middleEndMarker = "{/* WAITLIST QR */}";

const middleStartIdx = content.indexOf(middleStartMarker);
const middleEndIdx = content.indexOf(middleEndMarker);

const newSections = `
      {/* WHY SAKHEE */}
      <section className="how-bg" id="why-sakhee">
        <div className="section-inner" style={{maxWidth: "800px", margin: "0 auto", textAlign: "center"}}>
          <div className="section-label fade-up">Why Sakhee</div>
          <h2 className="section-heading fade-up" style={{fontSize: "36px", lineHeight: 1.3}}>You don't need another app telling you how to live.</h2>
          <p className="section-sub fade-up" style={{fontSize: "20px", marginTop: "24px"}}>You need something that understands that your life isn't a checklist.</p>
          <p className="section-sub fade-up" style={{fontSize: "18px", marginTop: "16px", opacity: 0.8}}>Your ambitions. Your messy days. Your small wins. Your big plans. The things you don't always say out loud.</p>
          <h3 className="fade-up" style={{fontFamily: "var(--font-playfair)", fontSize: "28px", color: "var(--navy)", marginTop: "48px", fontWeight: 900}}>That's why we've built Hello Sakhee.</h3>
        </div>
      </section>

      {/* CURIOSITY SECTION */}
      <section style={{padding: "100px 5vw", textAlign: "center", background: "var(--navy)"}}>
        <div className="section-inner fade-up" style={{maxWidth: "600px", margin: "0 auto"}}>
          <h2 className="section-heading" style={{color: "var(--white)", fontSize: "32px"}}>We're not going to tell you everything yet.</h2>
          <p className="section-sub" style={{color: "rgba(255,255,255,0.7)", fontSize: "18px", marginBottom: "48px"}}>But we can tell you this:</p>
          
          <div style={{display: "flex", flexDirection: "column", gap: "24px", alignItems: "center"}}>
            <div style={{color: "var(--white)", fontSize: "24px", fontWeight: 700, display: "flex", alignItems: "center", gap: "12px"}}><span style={{color: "var(--crimson-light)"}}>✨</span> Sakhee is personal.</div>
            <div style={{color: "var(--white)", fontSize: "24px", fontWeight: 700, display: "flex", alignItems: "center", gap: "12px"}}><span style={{color: "var(--crimson-light)"}}>🧠</span> Sakhee remembers.</div>
            <div style={{color: "var(--white)", fontSize: "24px", fontWeight: 700, display: "flex", alignItems: "center", gap: "12px"}}><span style={{color: "var(--crimson-light)"}}>🌱</span> Sakhee grows with you.</div>
          </div>

          <h3 style={{fontFamily: "var(--font-playfair)", fontSize: "28px", color: "var(--white)", marginTop: "56px", fontWeight: 700}}>And she's designed with one woman in mind: <span style={{color: "var(--crimson-light)"}}>You.</span></h3>
          <div style={{color: "rgba(255,255,255,0.4)", letterSpacing: "4px", fontSize: "14px", marginTop: "32px", fontWeight: 800}}>28.08.2026</div>
        </div>
      </section>

      {/* BRAND POSITIONING */}
      <section style={{padding: "100px 5vw", textAlign: "center", background: "var(--cream)"}}>
        <div className="section-inner fade-up" style={{maxWidth: "800px", margin: "0 auto"}}>
          <h2 className="section-heading fade-up" style={{fontSize: "36px", marginBottom: "48px"}}>Built for <span className="h-pink">real</span> women.<br/>Not the highlight reel.</h2>
          
          <div style={{display: "grid", gap: "16px", textAlign: "left", maxWidth: "500px", margin: "0 auto"}}>
            <div className="fade-up" style={{padding: "24px", background: "white", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.03)", fontSize: "18px", fontWeight: 700, color: "var(--navy)"}}>For women who are done waiting for the "right time."</div>
            <div className="fade-up" style={{padding: "24px", background: "white", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.03)", fontSize: "18px", fontWeight: 700, color: "var(--navy)"}}>For the woman starting over.</div>
            <div className="fade-up" style={{padding: "24px", background: "white", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.03)", fontSize: "18px", fontWeight: 700, color: "var(--navy)"}}>For the woman building something.</div>
            <div className="fade-up" style={{padding: "24px", background: "white", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.03)", fontSize: "18px", fontWeight: 700, color: "var(--navy)"}}>For the woman finding herself again.</div>
            <div className="fade-up" style={{padding: "24px", background: "white", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.03)", fontSize: "18px", fontWeight: 700, color: "var(--navy)"}}>For the woman who simply knows there has to be more.</div>
          </div>

          <h3 className="fade-up" style={{fontFamily: "var(--font-playfair)", fontSize: "32px", color: "var(--navy)", marginTop: "64px", fontWeight: 900}}>Hello, Sakhee. <br/><span style={{color: "var(--crimson)", fontSize: "24px", display: "block", marginTop: "12px", fontFamily: "var(--font-nunito)"}}>Your new everyday begins soon.</span></h3>
        </div>
      </section>

`;

if (middleStartIdx !== -1 && middleEndIdx !== -1) {
    content = content.substring(0, middleStartIdx) + newSections + content.substring(middleEndIdx);
}

// 4. Update Waitlist section heading to reflect launch date
content = content.replace(
  /<div className="section-label" style={{ marginBottom: "12px" }}>Early Access<\/div>/,
  `<div className="section-label" style={{ marginBottom: "12px" }}>Launching 28 August 2026</div>`
);

// 5. Update footer - Add social icons and remove footer-links
const footerLinksPattern = /<div className="footer-links">[\s\S]*?<\/div>/;
const socialIconsHTML = `
        <div className="footer-socials" style={{display: "flex", gap: "24px", justifyContent: "center", margin: "32px 0 24px"}}>
          <a href="#" aria-label="LinkedIn" style={{color: "var(--white)", opacity: 0.5, transition: "opacity 0.2s"}} onMouseEnter={(e)=>e.currentTarget.style.opacity=1} onMouseLeave={(e)=>e.currentTarget.style.opacity=0.5}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" style={{color: "var(--white)", opacity: 0.5, transition: "opacity 0.2s"}} onMouseEnter={(e)=>e.currentTarget.style.opacity=1} onMouseLeave={(e)=>e.currentTarget.style.opacity=0.5}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
`;

content = content.replace(footerLinksPattern, socialIconsHTML);

fs.writeFileSync('app/page.js', content);
console.log('Pre-launch redesign applied successfully.');
