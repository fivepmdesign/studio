import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TrustBadges from '@/components/TrustBadges';
import ClientLogos from '@/components/ClientLogos';
import NewsletterForm from '@/components/NewsletterForm';

const footerLinks = {
  navigation: [
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Web Design', href: '/services#web-design' },
    { name: 'Branding', href: '/services#branding' },
    { name: 'UI/UX Design', href: '/services#ui-ux' },
    { name: 'Development', href: '/services#development' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com', icon: '📸' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
    { name: 'Dribbble', href: 'https://dribbble.com', icon: '🏀' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Client Logos Section */}
      <div className="py-16 border-b border-border">
        <div className="container-wide">
          <ClientLogos />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 md:py-20 border-b border-border bg-primary/5">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-2xl md:text-3xl font-syne font-bold mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-muted-foreground mb-8">
              Get the latest insights, trends, and inspiration delivered straight to your inbox.
            </p>
            <NewsletterForm variant="inline" />
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            {/* Logo & Tagline */}
            <div className="md:col-span-4">
              <Link to="/" className="font-syne text-2xl font-bold tracking-tight inline-block mb-6">
                STUDIO<span className="text-accent">.</span>
              </Link>
              <p className="body-md text-muted-foreground max-w-sm mb-8">
                A creative digital agency crafting immersive experiences 
                that captivate and inspire. We transform ideas into 
                remarkable digital realities.
              </p>
              <MagneticButton className="px-8 py-4 bg-foreground text-background font-medium hover:bg-primary transition-colors duration-300">
                Start a Project
              </MagneticButton>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-6 block font-medium">
                Quick Links
              </span>
              <ul className="space-y-4">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-6 block font-medium">
                Services
              </span>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="md:col-span-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-6 block font-medium">
                Follow Us
              </span>
              <ul className="space-y-4">
                {footerLinks.social.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <span>{link.icon}</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-6 block font-medium">
                Contact
              </span>
              <div className="space-y-4">
                <a
                  href="mailto:hello@studio.com"
                  className="flex items-start gap-3 text-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>hello@studio.com</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-start gap-3 text-foreground/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>+1 (234) 567-890</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    123 Creative Street<br />
                    New York, NY 10001
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="py-8 border-y border-border mb-8">
            <TrustBadges variant="horizontal" />
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} STUDIO. All rights reserved. Made with ❤️
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#top"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Back to Top ↑
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
