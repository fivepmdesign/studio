import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  const breadcrumbItems = [
    { label: 'Terms of Service', href: '/terms' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEO 
        title="Terms of Service"
        description="Read our terms of service to understand the rules and guidelines for using our services."
        url="https://studio.design/terms"
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
              V-TRY – Terms of Service
            </h1>
            
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated: 12/22/2025</strong>
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you") and 5pm LLC, a Massachusetts limited liability company ("Company," "we," "us," or "our"), governing your access to and use of the V-TRY Chrome/Safari extension, associated web services, AI-powered generation tools, and any related software, interfaces, or content (collectively, the "Service").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.
              </p>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  1. Eligibility
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>1.1 Age Requirement.</strong> The Service is available only to individuals aged 18 years or older. By using the Service, you represent and warrant that you meet this requirement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>1.2</strong> You may not use the Service if you are barred under applicable law or previously suspended or removed by the Company.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  2. Description of the Service
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>2.1</strong> V-TRY is an AI-powered virtual try-on platform and browser extension that allows Users to generate images and videos of themselves wearing apparel or items found on e-commerce websites.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>2.2</strong> The Service operates on Chrome, and will expand to Chromium-based browsers and Safari in the future.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>2.3</strong> The extension activates only on e-commerce websites and uses company-controlled backend infrastructure to produce AI-generated content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  3. Account Registration
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>3.1</strong> Access to the Service requires authentication via Google OAuth.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>3.2</strong> You agree to provide accurate information and keep your account secure.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>3.3</strong> You are responsible for all activity occurring under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  4. Subscription Plans, Pricing, and Billing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>4.1</strong> V-TRY offers three plans: Free, Pro, and Ultra.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Free Plan:</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Price: $0 per month (no credit card required)
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Includes (one-time allocation):
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Digital Persona creation</li>
                  <li>10 image generations</li>
                  <li>1 video generation</li>
                  <li>10 "How do I look" generations</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Once all included generations are used, generation features are paused until the User upgrades to a paid plan. The Free Plan does not renew and does not reset.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Pro Plan (Most Popular):</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Monthly Price: $24 per month
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Yearly Price: $244 per year (15% discount compared to monthly billing)
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Includes (per billing month):
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Digital Persona creation</li>
                  <li>120 image generations</li>
                  <li>25 video generations</li>
                  <li>120 "How do I look" generations</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Ultra Plan:</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Monthly Price: $49 per month
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Yearly Price: $499 per year (15% discount compared to monthly billing)
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Includes (per billing month):
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Digital Persona creation</li>
                  <li>200 image generations</li>
                  <li>40 video generations</li>
                  <li>200 "How do I look" generations</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>4.2</strong> Generations reset at the start of each billing cycle while the subscription remains active. Unused generations do not roll over between billing periods.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>4.3</strong> Payments are processed via Stripe or other authorized payment providers.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>4.4</strong> Paid subscriptions automatically renew unless canceled prior to renewal. Cancellation takes effect at the end of the current billing period.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>4.5</strong> No refunds are provided for unused generations, partial billing periods, or early cancellation, except where required by applicable law.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>4.6</strong> V-TRY reserves the right to modify pricing, plans, or included features for future billing cycles with reasonable notice.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>4.7 Credit Packs (One-Time Purchases)</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In addition to subscription plans, V-TRY may offer optional one-time Credit Packs that allow Users to purchase additional credits without changing their subscription plan.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Available Credit Packs include:
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Small Boost:</strong>
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>60 credits</li>
                  <li>Price: $5</li>
                  <li>Intended for occasional additional generations or one additional video</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Medium Boost:</strong>
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>170 credits</li>
                  <li>Price: $12</li>
                  <li>Intended for extended experimentation or continued use beyond monthly limits</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Large Boost:</strong>
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>420 credits</li>
                  <li>Price: $25</li>
                  <li>Intended for active usage sessions or short creative bursts</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Credits purchased via Credit Packs are added to the User's account immediately upon successful payment.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>4.8 Credit Pack Rules</strong>
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Credit Packs are one-time purchases and do not renew automatically.</li>
                  <li>Credits from Credit Packs do not expire while the User's account remains active.</li>
                  <li>Credits are consumed according to the same generation rules as subscription credits.</li>
                  <li>Credit Packs are non-refundable once purchased, except where required by applicable law.</li>
                  <li>V-TRY reserves the right to modify, discontinue, or replace Credit Packs at any time with reasonable notice.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  5. License to Use the Service
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>5.1</strong> Subject to compliance with these Terms, Company grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for personal or commercial purposes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>5.2</strong> The Service may include software components licensed from third parties; such components remain subject to their own terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  6. User Content and Ownership
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>6.1 User Input.</strong> You may upload, provide, or submit images of yourself ("Input") for the purposes of generating AI content.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>6.2 Generated Output.</strong> You retain full ownership of images, videos, and other content produced by the Service ("Output"). You may use Output for any purpose, including commercial use, modification, and distribution.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>6.3</strong> You grant the Company a limited license to store and process your Input and Output solely to provide the Service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>6.4</strong> Output is stored for five (5) years, unless you request deletion.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>6.5</strong> Neither Input nor Output is used to train or improve AI models.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  7. Prohibited Uses
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Users may not:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>7.1</strong> Upload photos of any person other than themselves.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>7.2</strong> Attempt to generate images or videos of third parties, minors, celebrities, or public figures.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>7.3</strong> Use the Service for deepfakes, impersonation, harassment, or misleading representations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>7.4</strong> Generate or attempt to generate prohibited content, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Violence, blood, or gore</li>
                  <li>Sexual content</li>
                  <li>Child or minor imagery</li>
                  <li>Political content</li>
                  <li>Gambling content</li>
                  <li>Non-standard, harmful, or unsafe imagery</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>7.5</strong> Interfere with the Service or attempt to bypass limitations, rate caps, or security mechanisms.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>7.6</strong> Use the Service in violation of any applicable laws or regulations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate accounts for violations of this section.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  8. Generative AI Usage Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  V-TRY uses generative AI models to create virtual try-on images and videos. To keep the platform safe, legal, and respectful, all Users must follow the rules below. By using V-TRY, you agree to engage with our AI features responsibly and only for lawful, personal use.
                </p>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  8.1 Prohibited Uses
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>8.1.1 Illegal, dangerous, or harmful activities</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Users may not use V-TRY to generate, upload, or distribute content that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Involves child sexual abuse or exploitation</li>
                  <li>Facilitates or promotes violent extremism or terrorism</li>
                  <li>Facilitates non-consensual intimate imagery</li>
                  <li>Promotes or enables self-harm, violence, or physical harm</li>
                  <li>Facilitates illegal activities (including creating fake identification, accessing restricted goods or services, or evading law enforcement)</li>
                  <li>Violates another person's rights, including privacy, likeness, or intellectual property rights</li>
                  <li>Uses another person's face, body, or biometric data without legally required consent</li>
                  <li>Attempts to track, monitor, or identify individuals without their consent</li>
                  <li>Makes automated decisions in sensitive or high-risk domains such as employment, healthcare, finance, legal, housing, insurance, or social welfare</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>8.1.2 Security and system abuse</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Users may not use V-TRY to generate, upload, or distribute content that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Creates or distributes spam, phishing attempts, malware, or harmful scripts</li>
                  <li>Interferes with, harms, or disrupts V-TRY's systems, servers, or infrastructure</li>
                  <li>Attempts to bypass rate limits, safety protections, model safeguards, or abuse-prevention mechanisms</li>
                  <li>Misuses the browser extension to scrape, monitor, or collect personal data from e-commerce websites without permission</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>8.1.3 Sexual, hateful, violent, or inappropriate content</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  V-TRY may not be used to generate:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Pornographic or sexually explicit imagery</li>
                  <li>Nudity or sexualized depictions of any person</li>
                  <li>Deepfakes or synthetic images intended for sexual purposes</li>
                  <li>Harassment, bullying, abuse, intimidation, or hateful expressions</li>
                  <li>Violence, gore, or incitement of violence</li>
                  <li>Any content involving minors in sexual, violent, or otherwise inappropriate contexts</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>8.1.4 Misinformation, misrepresentation, and deceptive use</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Users may not use V-TRY to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Conduct fraud, scams, or other deceptive activities</li>
                  <li>Impersonate real individuals without explicit disclosure and consent</li>
                  <li>Create misleading claims of expertise in sensitive areas such as health, finance, legal matters, or government services</li>
                  <li>Spread false or misleading information about elections, public health, or governmental processes</li>
                  <li>Misrepresent AI-generated images or videos as real photographs or recordings for the purpose of deception</li>
                  <li>Claim or imply that AI-generated content was created solely by a human in order to mislead others</li>
                </ul>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  8.2 V-TRY-Specific Restrictions
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In addition to the above, V-TRY imposes the following platform-specific rules:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Users may upload and generate content using only their own face and body data</li>
                  <li>Uploading or generating another person's likeness, a minor's face, or a celebrity's likeness is strictly prohibited</li>
                  <li>Deepfakes of real individuals are not permitted, even for entertainment purposes</li>
                  <li>Generations involving minors are strictly prohibited</li>
                  <li>Users must be at least eighteen (18) years of age</li>
                  <li>The Service may not be used for political, violent, medical, or extremist costumes or scenarios that violate safety restrictions</li>
                  <li>Attempts to manipulate prompts, model outputs, or safeguards to violate these policies are prohibited</li>
                </ul>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  8.3 Exceptions
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  V-TRY may allow limited exceptions only where:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>The content is clearly educational, documentary, scientific, or artistic in nature</li>
                  <li>The potential public benefit outweighs potential harm</li>
                  <li>The content does not involve minors, private individuals, sexual content, or legal violations</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Any exception is evaluated on a case-by-case basis and is not guaranteed.
                </p>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
                  8.4 Enforcement
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Violations of this Generative AI Usage Policy may result in:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Content blocking or removal</li>
                  <li>Suspension or termination of the User's account</li>
                  <li>Restriction of access to certain features or plans</li>
                  <li>Reporting of illegal activity to relevant authorities where required by law</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  V-TRY reserves the right to enforce this policy at its sole discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  9. Data Collection and Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>9.1</strong> The Service uses Google Analytics to collect usage analytics.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>9.2</strong> Data processed through Stripe is subject to Stripe's own privacy terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>9.3</strong> Additional details on data practices are found in the V-TRY Privacy Policy, which is incorporated by reference.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  10. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>10.1</strong> All software, code, design, trademarks, and technology underlying the Service are owned by 5pm LLC.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>10.2</strong> You may not copy, modify, reverse engineer, or create derivative works of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  11. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>11.1</strong> You may terminate your account at any time by discontinuing use of the Service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>11.2</strong> Company may suspend or terminate access:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>For violation of these Terms</li>
                  <li>For fraudulent or harmful use</li>
                  <li>To comply with law or protect the Service</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>11.3</strong> Upon termination, your access ceases but your ownership of previously generated Output remains.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  12. Disclaimers
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>12.1</strong> THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE."
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>12.2</strong> WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY OF RESULTS.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>12.3</strong> We do not guarantee uninterrupted operation, availability, or performance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  13. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>13.1</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMPANY SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>13.2</strong> IN NO EVENT SHALL COMPANY'S TOTAL LIABILITY EXCEED THE AMOUNT PAID BY THE USER IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>13.3</strong> SOME JURISDICTIONS LIMIT THESE RESTRICTIONS; IN SUCH CASES LIABILITY IS LIMITED TO THE FULLEST EXTENT PERMITTED.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  14. Dispute Resolution
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>14.1 Arbitration:</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Any dispute arising out of or related to these Terms shall be resolved through binding arbitration administered under the rules of the American Arbitration Association (AAA), unless prohibited by law.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>14.2 Court Jurisdiction:</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Either party may bring qualifying claims in the state or federal courts of Massachusetts, USA, which shall have exclusive jurisdiction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>14.3</strong> Users waive their right to participate in class actions to the extent permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  15. Modifications
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>15.1</strong> We may update these Terms from time to time.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>15.2</strong> Continued use after changes constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  16. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions, notices, or support inquiries, contact:
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

export default TermsOfService;
