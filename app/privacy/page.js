import React from 'react';
import LegalHeader from '../components/LegalHeader';

export const metadata = {
  title: 'Privacy Policy — Hello Sakhee',
  description: 'Learn how Hello Sakhee collects, uses, and safeguards your personal data, including your Google user data and your rights under applicable law.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHeader />
      <main className="legal-page-wrapper">
        <article className="legal-container">
          <header className="legal-header">
            <div className="legal-eyebrow">Legal & Compliance</div>
            <h1 className="legal-title">Privacy Policy</h1>
            <div className="legal-meta">
              <span><strong>Last updated:</strong> <span className="legal-placeholder">[EFFECTIVE DATE]</span></span>
              <span><strong>Contact:</strong> <span className="legal-placeholder">[CONTACT EMAIL]</span></span>
            </div>
          </header>

          <nav className="legal-toc" aria-label="Table of contents">
            <div className="legal-toc-title">Table of Contents</div>
            <ul className="legal-toc-list">
              <li><a href="#about-us" className="legal-toc-link">1. About Hello Sakhee</a></li>
              <li><a href="#health-disclaimer" className="legal-toc-link">2. Health & Wellbeing Disclaimer</a></li>
              <li><a href="#data-collected" className="legal-toc-link">3. Information We Collect</a></li>
              <li><a href="#data-use" className="legal-toc-link">4. How We Use Your Data</a></li>
              <li><a href="#service-providers" className="legal-toc-link">5. Service Providers & Sub-processors</a></li>
              <li><a href="#advertising-analytics" className="legal-toc-link">6. Advertising and Analytics</a></li>
              <li><a href="#google-user-data" className="legal-toc-link">7. Google User Data</a></li>
              <li><a href="#retention-deletion" className="legal-toc-link">8. Data Retention & Deletion</a></li>
              <li><a href="#security" className="legal-toc-link">9. Security</a></li>
              <li><a href="#children" className="legal-toc-link">10. Children's Privacy</a></li>
              <li><a href="#india-rights" className="legal-toc-link">11. India DPDP Act & International Transfers</a></li>
              <li><a href="#changes" className="legal-toc-link">12. Changes to This Policy</a></li>
              <li><a href="#contact" className="legal-toc-link">13. Contact & Grievance Officer</a></li>
            </ul>
          </nav>

          <div className="legal-content">
            <section id="about-us" className="legal-section">
              <h2 className="legal-section-title"><a href="#about-us">1. About Hello Sakhee</a></h2>
              <p>
                Hello Sakhee is a mobile application (available on iOS and Android) designed as a dedicated personal companion for women. Members choose a goal category (such as Health & body, Mind & stress, Career & growth, Money, Relationships, My circle, and others), receive daily structured tasks and reflective guidance, chat with an AI companion called "Sakhee", and participate in community "circles" where they can post text, photos, and videos, and comment on other members' contributions.
              </p>
              <p>
                Hello Sakhee also offers an optional paid subscription titled "Hello Sakhee Plus" (available on a monthly or yearly billing basis) through the Apple App Store and Google Play Store, along with promotional and referral code mechanisms.
              </p>
              <p>
                The service is operated by <strong>Intellobyte Tech Solutions</strong>, located in Pune, India, for the client <span className="legal-placeholder">[CLIENT/COMPANY NAME]</span> (legal entity: <span className="legal-placeholder">[COMPANY LEGAL NAME]</span>).
              </p>
            </section>

            <section id="health-disclaimer" className="legal-section">
              <h2 className="legal-section-title"><a href="#health-disclaimer">2. Health & Wellbeing Disclaimer</a></h2>
              <div className="legal-highlight-box">
                <p>
                  <strong>Important Notice:</strong> Hello Sakhee offers general wellbeing support, personal reflection, and an automated conversational AI companion. It does <strong>not</strong> provide medical, clinical, psychological, psychiatric, legal, or financial advice.
                </p>
                <p>
                  The app is not designed, intended, or equipped for medical or psychological emergencies or crisis situations. If you are experiencing a medical or mental health emergency, please immediately contact your local emergency services, a hospital emergency department, or a registered crisis helpline in your region.
                </p>
              </div>
            </section>

            <section id="data-collected" className="legal-section">
              <h2 className="legal-section-title"><a href="#data-collected">3. Information We Collect</a></h2>
              <p>We collect information directly from you, through your device, and via authenticated third-party sign-in providers to deliver and operate our services:</p>
              <ul>
                <li>
                  <strong>Account Information:</strong> When you register and sign in through Google or Apple sign-in, we receive your name, email address, and profile photo.
                </li>
                <li>
                  <strong>Profile and Onboarding Answers:</strong> Any responses and preferences you choose to provide during onboarding and within your profile, including your chosen primary goal category, life stage, age band, and personal growth interests.
                </li>
                <li>
                  <strong>Member-Created Content:</strong> Content you create and submit while using the platform, including conversational chat messages exchanged with the AI companion ("Sakhee"), community circle posts, comments, uploaded photos, and uploaded videos.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about your interaction with the app, including daily activity, session duration, completed tasks, and in-app notification preferences.
                </li>
                <li>
                  <strong>Device & Notification Data:</strong> Device platform (iOS or Android) and push notification tokens necessary to deliver reminders, notifications, and updates that you have enabled.
                </li>
                <li>
                  <strong>Subscription & Purchase Status:</strong> In-app purchase verification, active subscription tier ("Hello Sakhee Plus"), and billing state processed through Apple App Store, Google Play Store, and RevenueCat. <em>We never receive, process, or store your payment card numbers.</em>
                </li>
                <li>
                  <strong>Referral Information:</strong> Referral and promotional code redemptions to credit corresponding benefits.
                </li>
                <li>
                  <strong>Technical Diagnostics & Logs:</strong> Basic technical logs, IP address data, device model, and error crash logs used strictly to diagnose malfunctions and ensure application integrity.
                </li>
              </ul>
            </section>

            <section id="data-use" className="legal-section">
              <h2 className="legal-section-title"><a href="#data-use">4. How We Use Your Data</a></h2>
              <p>We use your personal data strictly for legitimate operational purposes:</p>
              <ul>
                <li>To provide, operate, maintain, and personalise the Hello Sakhee mobile app and website.</li>
                <li>To run the AI companion ("Sakhee"), process your prompts, and provide relevant daily guidance, reflections, and tasks.</li>
                <li>To operate community circles, enable discussions, display member-uploaded media, and moderate shared content.</li>
                <li>To send transactional messages, service alerts, and push notifications that you have opted to receive.</li>
                <li>To verify and process subscriptions, manage "Hello Sakhee Plus" perks, and validate promotional codes.</li>
                <li>To secure the platform, prevent fraudulent or abusive behaviour, and address technical bugs.</li>
              </ul>
              <p>
                <strong>AI Conversation Handling:</strong> Chat messages you send to the AI companion are transmitted securely to our AI inference provider solely to generate real-time conversational responses. Human staff members can inspect a conversation transcript <em>only</em> if the conversation is escalated to them (such as for critical safety reasons, emergency flag triggers, or a direct member request for human assistance) or when content is explicitly reported for moderation.
              </p>
              <p>
                <strong>We do not sell your personal data.</strong> Your personal information is never sold, rented, or traded to data brokers or third parties.
              </p>
            </section>

            <section id="service-providers" className="legal-section">
              <h2 className="legal-section-title"><a href="#service-providers">5. Service Providers & Sub-processors</a></h2>
              <p>
                We partner with select third-party service providers who assist us in operating our platform. Each provider receives only the data strictly required to perform its designated function under contractual privacy obligations:
              </p>
              <ul>
                <li><strong>Supabase:</strong> Provides managed user authentication and encrypted backend database storage.</li>
                <li><strong>Render:</strong> Cloud server hosting infrastructure powering our backend APIs.</li>
                <li><strong>Amazon Web Services (AWS):</strong> Cloud object storage and content delivery networks for member photos and videos.</li>
                <li><strong>Ollama (AI Inference Provider):</strong> AI inference infrastructure used to process member prompts and generate AI companion chat replies.</li>
                <li><strong>Expo & Firebase:</strong> Mobile push notification dispatching and device token routing.</li>
                <li><strong>RevenueCat, Apple & Google:</strong> Validating in-app purchases, processing subscriptions, and handling billing receipts.</li>
                <li><strong>Google & Apple:</strong> Third-party OAuth authentication and secure identity verification.</li>
              </ul>
            </section>

            <section id="advertising-analytics" className="legal-section">
              <h2 className="legal-section-title"><a href="#advertising-analytics">6. Advertising and Analytics</a></h2>
              <p>
                The Hello Sakhee mobile application currently does not include third-party advertising tracking or commercial behavioral ad networks.
              </p>
              <div className="legal-highlight-box">
                <span className="legal-placeholder">[ADD IF A META/ADS SDK IS ADDED]</span>
                <p style={{ marginTop: '8px' }}>
                  If commercial advertising, attribution, or third-party marketing SDKs are incorporated into future releases of the app, this section will be updated with explicit disclosures, provider names, and opt-out controls prior to activation.
                </p>
              </div>
            </section>

            <section id="google-user-data" className="legal-section">
              <h2 className="legal-section-title"><a href="#google-user-data">7. Google User Data</a></h2>
              <p>
                When you choose to sign in to Hello Sakhee using your Google account, our application accesses only basic profile information provided through Google OAuth: your <strong>name</strong>, <strong>email address</strong>, and <strong>profile picture</strong>.
              </p>
              <p>
                This Google user data is used exclusively to create and identify your account on Hello Sakhee and display your profile to you. We do not use Google user data for advertising purposes, do not sell Google user data, and do not share this data with any third parties other than the dedicated operational service providers enumerated in Section 5 who support our backend infrastructure.
              </p>
              <p>
                Hello Sakhee's use and transfer to any other app of information received from Google APIs will adhere to the{' '}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--terracotta)', fontWeight: 600 }}
                >
                  Google API Services User Data Policy
                </a>
                , including the <strong>Limited Use</strong> requirements.
              </p>
            </section>

            <section id="retention-deletion" className="legal-section">
              <h2 className="legal-section-title"><a href="#retention-deletion">8. Data Retention & Deletion</a></h2>
              <p>
                We retain your personal data for as long as your account remains active and as required to provide the services you have requested.
              </p>
              <p>
                <strong>In-App Account Deletion:</strong> You have the complete right and ability to permanently delete your account and all associated personal content at any time directly inside the mobile app by navigating to <strong>Settings &gt; Delete account</strong>. Initiating this deletion will permanently purge your profile, AI conversation history, community posts, comments, and media from our active database. This action is irreversible.
              </p>
              <p>
                <strong>Manual Requests:</strong> You may also email our team at <span className="legal-placeholder">[CONTACT EMAIL]</span> to request access to, correction of, or deletion of your personal data.
              </p>
              <p>
                Residual diagnostic logs and backup archives that contain encrypted operational snapshots are routinely overwritten and permanently purged within <span className="legal-placeholder">[RETENTION PERIOD]</span>.
              </p>
            </section>

            <section id="security" className="legal-section">
              <h2 className="legal-section-title"><a href="#security">9. Security</a></h2>
              <p>
                We implement industry-standard organizational and technological safeguards to protect your personal data. All data transmissions between your mobile device, our servers, and our third-party infrastructure partners are encrypted in transit using Transport Layer Security (TLS/HTTPS). Internal database access is restricted strictly on a need-to-know, role-based authorization model.
              </p>
              <p>
                Please understand that no electronic transmission over the internet or method of digital storage can be guaranteed to be 100% impenetrable. While we strive to protect your personal information, no system is perfectly secure.
              </p>
            </section>

            <section id="children" className="legal-section">
              <h2 className="legal-section-title"><a href="#children">10. Children's Privacy</a></h2>
              <p>
                Hello Sakhee is designed strictly for adults aged <span className="legal-placeholder">[MINIMUM AGE]</span> and older. The application is not directed at, marketed to, or intended for use by children.
              </p>
              <p>
                We do not knowingly collect personal data from individuals under the age of <span className="legal-placeholder">[MINIMUM AGE]</span>. If we discover or are notified that an underage user has registered an account or supplied personal data, we will promptly delete that account and all related data from our systems.
              </p>
            </section>

            <section id="india-rights" className="legal-section">
              <h2 className="legal-section-title"><a href="#india-rights">11. India DPDP Act & International Transfers</a></h2>
              <p>
                For users located in India, Hello Sakhee processes personal data in compliance with applicable Indian information technology and privacy legislation, including the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>. You have statutory rights to access your data, request correction or erasure, nominate a representative in the event of death or incapacity, and access grievance redressal mechanisms.
              </p>
              <p>
                <strong>Cross-Border Processing:</strong> To provide our cloud infrastructure, AI inference, and media hosting, your information may be processed and stored on servers located outside India by the verified service providers listed in Section 5 (including cloud regions in the United States and other global data centers), subject to appropriate data transfer safeguards.
              </p>
              <p>
                <strong>Grievance Officer:</strong> In accordance with Indian law, our appointed Grievance Officer can be contacted for questions, complaints, or enforcement of data rights:
              </p>
              <div className="legal-highlight-box">
                <strong>Grievance Officer:</strong> <span className="legal-placeholder">[GRIEVANCE OFFICER NAME AND EMAIL]</span><br />
                <strong>Address:</strong> Intellobyte Tech Solutions, Pune, India (Registered Address: <span className="legal-placeholder">[REGISTERED ADDRESS]</span>)
              </div>
            </section>

            <section id="changes" className="legal-section">
              <h2 className="legal-section-title"><a href="#changes">12. Changes to This Policy</a></h2>
              <p>
                We may periodically update this Privacy Policy to reflect modifications in our features, changes in legal requirements, or improvements to our infrastructure. When revisions are published, the "Last updated" date at the top of this document will be amended accordingly.
              </p>
              <p>
                For material changes, we will provide notice through the mobile application or via your registered email address before updates take effect. Continued use of Hello Sakhee following such updates constitutes acknowledgement and acceptance of the revised policy.
              </p>
            </section>

            <section id="contact" className="legal-section">
              <h2 className="legal-section-title"><a href="#contact">13. Contact & Operator Details</a></h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> <span className="legal-placeholder">[CONTACT EMAIL]</span></li>
                <li><strong>Operator:</strong> Intellobyte Tech Solutions, Pune, India</li>
                <li><strong>Operating for Client:</strong> <span className="legal-placeholder">[CLIENT/COMPANY NAME]</span> (<span className="legal-placeholder">[COMPANY LEGAL NAME]</span>)</li>
                <li><strong>Registered Address:</strong> <span className="legal-placeholder">[REGISTERED ADDRESS]</span></li>
              </ul>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
