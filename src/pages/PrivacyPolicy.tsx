import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEO 
        title="Privacy Policy"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information."
        url="https://studio.design/privacy"
      />
      
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              V-TRY – Privacy Policy
            </h1>
            
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated: 11/21/2025</strong>
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy ("Policy") describes how 5pm LLC, a Massachusetts limited liability company ("Company," "we," "us," or "our"), collects, uses, stores, and protects personal information when you ("User," "you") access or use the V-TRY browser extension, website, and all related services (collectively, the "Service").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using the Service, you agree to the practices described in this Policy. If you do not agree, you must discontinue use of the Service.
              </p>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  1.1 Information You Provide
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Google OAuth Login Data</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you register or log in using Google OAuth, we receive:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Your Google account email</li>
                  <li>Your name (as provided in your Google profile)</li>
                  <li>Your Google account ID</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not receive your Google password.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>User-Uploaded Content ("Input")</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To generate AI try-on results, you may upload:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Photos of yourself only</li>
                  <li>Any additional imagery you choose to provide</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We prohibit uploading images of third parties or minors.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Generated Content ("Output")</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We process:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>AI-generated images</li>
                  <li>AI-generated videos</li>
                  <li>Any AI feedback produced through your subscription tier</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Output is linked to your account to provide your generation history.
                </p>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  1.2 Information Automatically Collected
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Usage Data</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect general usage metrics including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Number of generations consumed</li>
                  <li>Subscription tier usage</li>
                  <li>Browser type</li>
                  <li>Operating system</li>
                  <li>Device information</li>
                  <li>Extension activation events</li>
                  <li>Domain names of visited e-commerce websites only (to activate the extension)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not track full browsing history.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Analytics Data</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use Google Analytics, which collects:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Page views</li>
                  <li>Time on pages</li>
                  <li>Click events</li>
                  <li>Interaction patterns</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Google Analytics processes this data according to Google's privacy terms.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Payment Information</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payments are processed via Stripe.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not store:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Credit card numbers</li>
                  <li>Banking information</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Stripe may collect payment data, billing address, and transaction identifiers.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Stripe's privacy policy applies independently.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Provide and operate the Service</li>
                  <li>Authenticate users via Google OAuth</li>
                  <li>Generate AI images and videos</li>
                  <li>Store Input and Output for your personal library</li>
                  <li>Maintain generation counters and subscription entitlements</li>
                  <li>Provide customer support</li>
                  <li>Detect misuse, fraud, or violations of the Terms of Service</li>
                  <li>Improve stability, safety, and performance of the Service</li>
                  <li>Comply with applicable law</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  3. Storage and Retention
                </h2>
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  3.1 Output Retention
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI-generated Output is stored for five (5) years unless:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>You delete it manually</li>
                  <li>You request deletion</li>
                  <li>Your account is terminated</li>
                </ul>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  3.2 Input Retention
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your uploaded Input is stored only as needed to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Generate Output</li>
                  <li>Maintain your library</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Input may also be retained for support or troubleshooting, if required.
                </p>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  3.3 Account Data
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  OAuth profile data is retained as long as your account remains active.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  4. Your Rights and Choices
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Access your data at any time</li>
                  <li>Request deletion of Input, Output, or your entire account</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request export of stored Output</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Requests can be sent to info@5pmdesign.com.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We will respond within a reasonable time and as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  5. Sharing of Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share information only with:
                </p>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  5.1 Service Providers
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Stripe (payment processing)</li>
                  <li>Google Analytics (usage analytics)</li>
                  <li>Cloud hosting providers (for Input/Output storage)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These providers are contractually obligated to protect your information.
                </p>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  5.2 Legal Compliance
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may disclose data if required by:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Court orders</li>
                  <li>Law enforcement</li>
                  <li>Applicable laws or regulations</li>
                </ul>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  5.3 Business Transfers
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If 5pm LLC undergoes a merger, acquisition, or asset sale, data may be transferred under confidentiality agreements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We do not share or sell information with advertisers or third-party marketing agencies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  6. AI Processing and Model Use
                </h2>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  6.1 No Model Training
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your Input and Output are not used to train AI models.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  They are used only to fulfill your generations.
                </p>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  6.2 Prohibited Content Enforcement
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement automated and manual measures to prevent:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Deepfakes of non-consenting individuals</li>
                  <li>Use of minors' images</li>
                  <li>Violence, gore, adult content</li>
                  <li>Political or gambling-related imagery</li>
                  <li>Any other prohibited content specified in our Terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  7. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Cookies</li>
                  <li>Local storage</li>
                  <li>Analytics scripts</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These support:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Login session stability</li>
                  <li>Analytics</li>
                  <li>Feature performance</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  You can disable cookies in your browser, though some features may not function properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  8. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We take reasonable administrative, technical, and physical measures to safeguard your data, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Encryption in transit</li>
                  <li>Secure storage</li>
                  <li>Access controls</li>
                  <li>Tokenized authentication</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  No system is perfectly secure; we cannot guarantee absolute protection.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  9. International Users
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Service is operated from the United States.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you access the Service from outside the U.S., you consent to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Transfer of your data to the U.S.</li>
                  <li>Processing under U.S. law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  10. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Service is strictly for users 18 and older.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not knowingly:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Collect data from children</li>
                  <li>Allow children to register</li>
                  <li>Process images of minors</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  If we discover minors' data in the system, it will be deleted.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  11. Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Service may contain links to external websites.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are not responsible for their content or privacy practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  12. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Policy from time to time.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We will notify you of significant changes through:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>The extension</li>
                  <li>Email</li>
                  <li>Our website</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Continued use constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  13. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For privacy inquiries or requests:
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>5pm LLC</strong>
                  <br />
                  Email: <a href="mailto:info@5pmdesign.com" className="text-accent hover:underline">info@5pmdesign.com</a>
                  <br />
                  Jurisdiction: Massachusetts, USA
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
