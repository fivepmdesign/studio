import { Link } from 'react-router-dom';

const footerLinks = {
  legal: [
    { name: 'Download', href: '/download' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border relative z-50">
      <div className="border-t border-border p-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-background">
        <p className="text-xs font-mono text-muted-foreground uppercase">
          © 2026 V-TRY. All rights reserved.
        </p>
        <div className="flex gap-8">
          {footerLinks.legal.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-xs font-mono text-muted-foreground uppercase hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
