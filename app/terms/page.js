import React from 'react';
import LegalHeader from '../components/LegalHeader';

export const metadata = {
  title: 'Terms of Service — Hello Sakhee',
  description: 'Review the Terms of Service governing your use of the Hello Sakhee mobile application and website.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <LegalHeader />
      <main className="legal-page-wrapper">
        <article className="legal-container">
          <header className="legal-header">
            <div className="legal-eyebrow">Legal & Compliance</div>
            <h1 className="legal-title">Terms of Service</h1>
            <div className="legal-meta">
              <span><strong>Last updated:</strong> November 23, 2026</span>
              <span><strong>Contact:</strong> <a href="mailto:contact@hellosakhee.com" style={{ color: 'inherit' }}>contact@hellosakhee.com</a></span>
            </div>
          </header>

          <nav className="legal-toc" aria-label="Table of contents">
            <div className="legal-toc-title">Table of Contents</div>
            <ul className="legal-toc-list">
              <li><a href="#acceptance" className="legal-toc-link">1. Acceptance of Terms</a></li>
              <li><a href="#eligibility" className="legal-toc-link">2. Eligibility & Account Responsibility</a></li>
              <li><a href="#services" className="legal-toc-link">3. The Service & Companion Features</a></li>
              <li><a href="#health-disclaimer" className="legal-toc-link">4. Health & Wellbeing Disclaimer</a></li>
              <li><a href="#community-rules" className="legal-toc-link">5. Community Circles & Acceptable Use</a></li>
              <li><a href="#user-content" className="legal-toc-link">6. User Content & License</a></li>
              <li><a href="#ai-companion" className="legal-toc-link">7. AI Companion ("Sakhee") Disclaimers</a></li>
              <li><a href="#subscriptions" className="legal-toc-link">8. Subscriptions ("Hello Sakhee Plus") & Promo Codes</a></li>
              <li><a href="#intellectual-property" className="legal-toc-link">9. Intellectual Property</a></li>
              <li><a href="#disclaimers-liability" className="legal-toc-link">10. Disclaimer of Warranties & Limitation of Liability</a></li>
              <li><a href="#termination" className="legal-toc-link">11. Termination & Account Deletion</a></li>
              <li><a href="#changes" className="legal-toc-link">12. Changes to These Terms</a></li>
              <li><a href="#governing-law" className="legal-toc-link">13. Governing Law & Jurisdiction</a></li>
              <li><a href="#contact" className="legal-toc-link">14. Contact Information</a></li>
            </ul>
          </nav>

          <div className="legal-content">
            <section id="acceptance" className="legal-section">
              <h2 className="legal-section-title"><a href="#acceptance">1. Acceptance of Terms</a></h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you and <strong>Raamika Smart Solutions Private Limited</strong> (operated by Intellobyte Tech Solutions, Pune, India) ("Hello Sakhee", "we", "us", or "our").
              </p>
              <p>
                By downloading, accessing, browsing, or using the Hello Sakhee mobile application (on iOS or Android) or the website (<a href="https://hellosakhee.com" style={{ color: 'var(--terracotta)', fontWeight: 600 }}>hellosakhee.com</a>), you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use the service.
              </p>
            </section>

            <section id="eligibility" className="legal-section">
              <h2 className="legal-section-title"><a href="#eligibility">2. Eligibility & Account Responsibility</a></h2>
              <p>
                You must be at least <strong>18</strong> years of age to register an account or use Hello Sakhee. The service is designed and intended exclusively for adult users.
              </p>
              <p>
                Accounts are registered through third-party authentication (Google or Apple sign-in). You are solely responsible for maintaining the security of your device and login credentials, and for all activities that take place under your account. You agree to notify us immediately at <a href="mailto:contact@hellosakhee.com" style={{ color: 'var(--terracotta)', fontWeight: 600 }}>contact@hellosakhee.com</a> if you suspect unauthorized access to your account.
              </p>
            </section>

            <section id="services" className="legal-section">
              <h2 className="legal-section-title"><a href="#services">3. The Service & Companion Features</a></h2>
              <p>
                Hello Sakhee is an everyday personal companion application designed for women. The platform allows members to:
              </p>
              <ul>
                <li>Select a personalized goal category, including <em>Health & body</em>, <em>Mind & stress</em>, <em>Career & growth</em>, <em>Money</em>, <em>Relationships</em>, <em>My circle</em>, and others.</li>
                <li>Receive daily reflective tasks, routines, and guided wellness prompts tailored to personal growth.</li>
                <li>Converse with an AI companion named "Sakhee" for daily reflections, active listening, and conversational support.</li>
                <li>Participate in community "circles" where members can share thoughts, post text, photos, and videos, and engage through comments.</li>
              </ul>
            </section>

            <section id="health-disclaimer" className="legal-section">
              <h2 className="legal-section-title"><a href="#health-disclaimer">4. Health & Wellbeing Disclaimer</a></h2>
              <div className="legal-highlight-box">
                <p>
                  <strong>No Medical or Professional Advice:</strong> Hello Sakhee and its AI companion provide general wellbeing, reflection, and habit-tracking assistance. The app does <strong>not</strong> offer medical, psychiatric, psychological, clinical, legal, or financial advice. The content and interactions provided through the app are not substitutes for professional diagnosis, medical treatment, or therapy.
                </p>
                <p>
                  <strong>Not for Emergencies:</strong> Hello Sakhee is not an emergency hotline, crisis center, or crisis intervention service. If you are experiencing a mental health crisis, suicidal thoughts, a medical emergency, or severe distress, please immediately contact your local emergency services (such as 112 in India, 911 in the US, or your regional equivalent) or reach out to a registered crisis helpline.
                </p>
              </div>
            </section>

            <section id="community-rules" className="legal-section">
              <h2 className="legal-section-title"><a href="#community-rules">5. Community Circles & Acceptable Use</a></h2>
              <p>
                Hello Sakhee strives to be a supportive, constructive, and uplifting space. By participating in community circles or interacting on the platform, you agree strictly to uphold the following standards:
              </p>
              <ul>
                <li><strong>No Harassment or Bullying:</strong> Do not intimidate, threaten, stalk, abuse, or harass any member.</li>
                <li><strong>No Hate Speech or Discrimination:</strong> Content promoting hatred, violence, or discrimination based on race, ethnicity, religion, caste, gender, sexual orientation, disability, or nationality is strictly prohibited.</li>
                <li><strong>No Unlawful or Fraudulent Content:</strong> Do not post illegal material, promote unlawful acts, or perpetrate financial scams.</li>
                <li><strong>Zero Tolerance for Child Exploitation:</strong> Any sexual content involving minors or exploitation of children will result in immediate termination, account ban, and reporting to law enforcement authorities.</li>
                <li><strong>No Spam or Commercial Solicitation:</strong> Do not post unsolicited promotional material, pyramid schemes, or repetitive spam.</li>
                <li><strong>No Doxxing:</strong> Do not publish another person's private personal information (phone numbers, addresses, personal documents) without their explicit consent.</li>
              </ul>
              <p>
                We reserve the absolute right to monitor, review, edit, or remove any community post, comment, photo, or video that violates these standards, and to suspend or permanently ban any account found in violation.
              </p>
            </section>

            <section id="user-content" className="legal-section">
              <h2 className="legal-section-title"><a href="#user-content">6. User Content & License</a></h2>
              <p>
                You retain ownership of any text, photos, videos, comments, or materials that you post, submit, or transmit within the community circles ("User Content").
              </p>
              <p>
                By posting User Content, you grant Hello Sakhee, Raamika Smart Solutions Private Limited, and Intellobyte Tech Solutions a worldwide, non-exclusive, royalty-free, transferable license to host, display, reproduce, adapt, and distribute your User Content solely as necessary to operate, improve, and provide the service to you and other community members. You represent and warrant that you own or have all necessary rights to submit the content you publish.
              </p>
            </section>

            <section id="ai-companion" className="legal-section">
              <h2 className="legal-section-title"><a href="#ai-companion">7. AI Companion ("Sakhee") Disclaimers</a></h2>
              <p>
                Conversations with "Sakhee" are powered by automated artificial intelligence models provided via our backend inference provider.
              </p>
              <p>
                You acknowledge and agree that artificial intelligence systems can occasionally produce responses that are inaccurate, incomplete, misleading, or unsuitable. You must use independent judgement and not rely on AI responses for medical, legal, financial, or safety-critical decisions.
              </p>
            </section>

            <section id="subscriptions" className="legal-section">
              <h2 className="legal-section-title"><a href="#subscriptions">8. Subscriptions ("Hello Sakhee Plus") & Promo Codes</a></h2>
              <p>
                <strong>Subscription Tiers:</strong> Hello Sakhee offers an optional premium subscription entitled "Hello Sakhee Plus", available with recurring monthly or annual billing.
              </p>
              <ul>
                <li>
                  <strong>App Store Billing:</strong> Subscriptions are purchased through in-app purchases processed directly by the Apple App Store (for iOS) or Google Play Store (for Android) via RevenueCat. We do not store or process your payment card information.
                </li>
                <li>
                  <strong>Automatic Renewal & Cancellation:</strong> Subscriptions renew automatically unless cancelled at least 24 hours prior to the conclusion of the active billing period. You may manage, modify, or cancel your subscription at any time within your device's Apple ID or Google Play account subscription management settings.
                </li>
                <li>
                  <strong>Refunds:</strong> All refund requests must be directed to Apple or Google and are governed exclusively by their respective store refund guidelines.
                </li>
                <li>
                  <strong>Promo & Referral Codes:</strong> Promotional discounts and referral codes may be provided at our discretion. Promo codes are non-transferable, cannot be redeemed for cash, and may be modified or revoked at any time.
                </li>
              </ul>
            </section>

            <section id="intellectual-property" className="legal-section">
              <h2 className="legal-section-title"><a href="#intellectual-property">9. Intellectual Property</a></h2>
              <p>
                The Hello Sakhee application, website, logos, trademarks, visual branding, illustrations, user interface design, software code, daily task libraries, and proprietary texts are the sole and exclusive intellectual property of Raamika Smart Solutions Private Limited and its operating partners.
              </p>
              <p>
                You may not copy, reverse engineer, decompile, modify, distribute, or create derivative works from any part of our platform without prior written authorization.
              </p>
            </section>

            <section id="disclaimers-liability" className="legal-section">
              <h2 className="legal-section-title"><a href="#disclaimers-liability">10. Disclaimer of Warranties & Limitation of Liability</a></h2>
              <p>
                The service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express, statutory, or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p>
                To the maximum extent permitted by applicable law, in no event shall Raamika Smart Solutions Private Limited, Intellobyte Tech Solutions, or their respective directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, goodwill, or personal distress arising from or connected to your access to or use of (or inability to use) Hello Sakhee.
              </p>
            </section>

            <section id="termination" className="legal-section">
              <h2 className="legal-section-title"><a href="#termination">11. Termination & Account Deletion</a></h2>
              <p>
                You are free to stop using Hello Sakhee at any time. You can permanently delete your account and all associated content directly within the application under <strong>Settings &gt; Delete account</strong>, or by emailing <a href="mailto:contact@hellosakhee.com" style={{ color: 'var(--terracotta)', fontWeight: 600 }}>contact@hellosakhee.com</a>.
              </p>
              <p>
                We reserve the right to suspend, restrict, or terminate your account or access to the service at our sole discretion, without prior notice, if you breach these Terms, engage in harassment, or pose a safety or legal liability to other users or our platform.
              </p>
            </section>

            <section id="changes" className="legal-section">
              <h2 className="legal-section-title"><a href="#changes">12. Changes to These Terms</a></h2>
              <p>
                We reserve the right to revise or update these Terms at any time. When updates occur, the "Last updated" date at the top of this page will be revised.
              </p>
              <p>
                If changes are material, we will make reasonable efforts to provide notification within the mobile app or via email. By continuing to access or use the application after revisions become effective, you agree to be bound by the revised Terms.
              </p>
            </section>

            <section id="governing-law" className="legal-section">
              <h2 className="legal-section-title"><a href="#governing-law">13. Governing Law & Jurisdiction</a></h2>
              <p>
                These Terms and any disputes or claims arising out of or in connection with them or their subject matter shall be governed by and construed in accordance with the laws of <strong>India</strong>.
              </p>
              <p>
                Any legal action, suit, or proceeding arising under or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Indore, Madhya Pradesh</strong>, India.
              </p>
            </section>

            <section id="contact" className="legal-section">
              <h2 className="legal-section-title"><a href="#contact">14. Contact Information</a></h2>
              <p>For questions, support, notices, or inquiries concerning these Terms of Service, please reach out to us:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:contact@hellosakhee.com" style={{ color: 'var(--terracotta)', fontWeight: 600 }}>contact@hellosakhee.com</a></li>
                <li><strong>Company:</strong> Raamika Smart Solutions Private Limited</li>
                <li><strong>Registered Office Address:</strong> 11D, Floor 4, Cabin 4, Sampat Farms, Bicholi Mardana, Indore, Madhya Pradesh - 452016</li>
                <li><strong>Technical Operator:</strong> Intellobyte Tech Solutions, Pune, India</li>
              </ul>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
