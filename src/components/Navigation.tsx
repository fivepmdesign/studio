import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import MagneticButton from './MagneticButton';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActiveLink = (href: string) => location.pathname === href;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 sm:py-4 bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-background/5' 
            : 'py-5 sm:py-6 md:py-8'
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo with hover effect */}
          <Link 
            to="/" 
            className="group font-syne text-xl sm:text-2xl font-bold tracking-tight relative"
          >
            <span className="relative z-10">
              STUDIO
              <motion.span 
                className="text-accent"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                .
              </motion.span>
            </span>
            <motion.div 
              className="absolute -inset-2 bg-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="logo-hover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-muted/30 rounded-full p-1.5 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-full ${
                    isActiveLink(link.href)
                      ? 'text-accent-foreground'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {/* Active/Hover background pill */}
                  {isActiveLink(link.href) && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {hoveredLink === link.name && !isActiveLink(link.href) && (
                    <motion.div
                      layoutId="hover-nav"
                      className="absolute inset-0 bg-muted/50 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <MagneticButton className="group relative px-6 py-3 bg-foreground text-background text-sm font-semibold overflow-hidden rounded-full">
                <Link to="/contact" className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </Link>
                <motion.div
                  className="absolute inset-0 bg-accent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                />
              </MagneticButton>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-muted/30 rounded-full"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6, width: 20 } : { rotate: 0, y: 0, width: 18 }}
                className="h-0.5 bg-foreground origin-center rounded-full"
                style={{ width: 18 }}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="w-3 h-0.5 bg-foreground rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6, width: 20 } : { rotate: 0, y: 0, width: 18 }}
                className="h-0.5 bg-foreground origin-center rounded-full"
                style={{ width: 18 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center md:hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full border border-accent/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              />
              <motion.div 
                className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full border border-muted"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </div>

            <nav className="relative z-10 flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl sm:text-5xl font-syne font-bold tracking-tight transition-colors duration-300 ${
                      isActiveLink(link.href) 
                        ? 'text-accent' 
                        : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full inline-flex items-center gap-2"
                >
                  Let's Talk
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10H16M16 10L11 5M16 10L11 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
