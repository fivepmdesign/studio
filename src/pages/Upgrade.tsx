import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Search } from 'lucide-react';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';
import Navigation from '@/components/Navigation';
import CTASection from '@/components/sections/CTASection';

const services = [
  {
    id: 'brand-identity',
    title: 'Free Plan',
    tagline: 'Try V-TRY and see how it works without commitment',
    description: 'Try it once for free. When your free generations are used, upgrade to keep generating',
    features: [
      { label: 'Digital Persona', value: 'Included', included: true },
      { label: 'Images', value: '10 generations' },
      { label: 'Video', value: '1 generation' },
      { label: 'How do I look', value: '10 generations' },
    ],
    startingPrice: '$0 - No credit card required',
    timeline: '4-6 weeks',
    popular: false,
    number: '01',
  },
  {
    id: 'web-design',
    title: 'Pro Plan',
    tagline: 'Great for regular use. Get a set of credits monthly',
    description: 'Great for regular use. Get a set of credits monthly',
    features: [
      { label: 'Digital Persona', value: 'Included', included: true },
      { label: 'Images', value: '128 generations/mo' },
      { label: 'Videos', value: '21 generations/mo' },
      { label: 'How do I look', value: '128 generations/mo' },
    ],
    startingPrice: '$24.99/month',
    timeline: '6-10 weeks',
    popular: true,
    number: '02',
  },
  {
    id: 'digital-campaign',
    title: 'Ultra Plan',
    tagline: 'For creators and power users who want more room to explore',
    description: 'For creators and power users who want more room to explore',
    features: [
      { label: 'Digital Persona', value: 'Included', included: true },
      { label: 'Images', value: '300 generations/mo' },
      { label: 'Video', value: '50 generations/mo' },
      { label: 'How do I look', value: '300 generations/mo' },
    ],
    startingPrice: '$49.99/month',
    timeline: '3-5 weeks',
    popular: false,
    number: '03',
  },
];

const addOns = [
  { name: '60 V-TRY Credits', price: '5.00', number: '01' },
  { name: '170 V-TRY Credits', price: '12.00', number: '02' },
  { name: '420 V-TRY Credits', price: '24.00', number: '03' },
  { name: '820 V-TRY Credits', price: '48.00', number: '04'   },
];

const Upgrade = () => {
  const categories = ['MONTHLY', 'YEARLY'];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('MONTHLY');
  const [searchQuery, setSearchQuery] = useState('');
  const servicesRef = useRef(null);
  const addOnsRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const addOnsInView = useInView(addOnsRef, { once: true, margin: '-100px' });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX - window.innerWidth / 2) / 30,
      y: (e.clientY - window.innerHeight / 2) / 30,
    });
  };

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query.toLowerCase());
  }, []);

  return (
      <div className="min-h-screen bg-background" onMouseMove={handleMouseMove}>
        <Helmet>
          <meta name="theme-color" content="#FF6B4A" />
        </Helmet>
        <Navigation />

        {/* Services Section */}
        <section ref={servicesRef} className="py-24 md:py-32 relative">
          <div className="container-wide">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-16 md:mb-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-mono text-accent">V-TRY</span>
                <div className="h-px w-12 bg-accent" />
                <span className="text-sm font-mono text-muted-foreground tracking-wider">UPGRADE</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-sans font-bold leading-tight max-w-3xl">
                AI try-ons, priced to scale
              </h2>
            </motion.div>

            {/* Filter Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="border border-border bg-card">
                <div className="flex items-center h-full min-h-[4rem]">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`group relative h-16 px-8 flex items-center justify-center gap-2 text-sm font-mono uppercase tracking-wider transition-all hover:bg-accent hover:text-accent-foreground whitespace-nowrap border-r border-border last:border-r-0 ${
                        activeCategory === category 
                          ? 'bg-accent text-accent-foreground' 
                          : 'text-muted-foreground bg-transparent'
                      }`}
                    >
                      <span>{category}</span>
                      {category === 'YEARLY' && (
                        <span className={`font-bold transition-colors ${
                          activeCategory === category 
                            ? 'text-accent-foreground group-hover:text-foreground' 
                            : 'text-accent group-hover:text-foreground'
                        }`}>SAVE 15%</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Interactive Grid */}
            <div className="grid md:grid-cols-3 border-t border-l border-border">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  className="group relative border-r border-b border-border min-h-[500px] md:min-h-[600px] overflow-hidden bg-background"
                >
                  {/* Arrow - Fixed position top right */}
                  <div className="absolute top-8 right-8 md:top-12 md:right-12 z-20 h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-500">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>

                  {/* Default View (Always visible/background) */}
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-0">
                    <div className="flex justify-between items-start">
                      <span className="text-6xl md:text-8xl font-sans font-bold text-foreground/5 group-hover:text-accent/10 transition-colors duration-500">
                        {service.title === 'Free Plan' ? 'Free' : service.title === 'Pro Plan' ? 'Pro' : service.title === 'Ultra Plan' ? 'Ultra' : service.title}
                      </span>
                    </div>
                    
                    <div className="space-y-4 mb-12 md:mb-0">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-[0.9] group-hover:text-accent transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-sm font-mono tracking-wider text-muted-foreground uppercase">
                        {activeCategory === 'YEARLY' 
                          ? service.title === 'Pro Plan' 
                            ? '$240/year'
                            : service.title === 'Ultra Plan'
                            ? '$480/year'
                            : service.startingPrice
                          : service.startingPrice}
                      </p>
                    </div>
                  </div>

                  {/* Reveal Panel (Slides up) */}
                  <div className="absolute inset-x-0 bottom-0 h-[85%] md:h-[75%] bg-card/95 backdrop-blur-xl border-t border-border p-8 md:p-12 flex flex-col justify-between transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10">
                    <div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => {
                          if (typeof feature === 'object' && 'label' in feature) {
                            return (
                              <div key={idx} className="flex items-center gap-3 text-sm font-medium">
                                <span>{feature.label}</span>
                                <span className="flex-1 border-t border-border/30"></span>
                                <span className="text-accent">{feature.value}</span>
                              </div>
                            );
                          }
                          // Fallback for string features (shouldn't be used with current data)
                          return (
                            <div key={typeof feature === 'string' ? feature : idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <span className="text-sm font-medium">{typeof feature === 'string' ? feature : ''}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-end justify-end pt-6">
                      <Link 
                        to="/login" 
                        className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
                      >
                        {service.title === 'Free Plan' 
                          ? 'Get started free →'
                          : service.title === 'Pro Plan'
                          ? activeCategory === 'YEARLY'
                            ? 'Get started for $240/year →'
                            : 'Get started for $24.99/mo →'
                          : service.title === 'Ultra Plan'
                          ? activeCategory === 'YEARLY'
                            ? 'Get started for $480/year →'
                            : 'Get started for $49.99/mo →'
                          : 'Get started →'}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section ref={addOnsRef} className="py-24 md:py-32 relative overflow-hidden">
          <div className="container-wide">
            {/* Centered Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-sm font-mono text-accent">V-TRY</span>
                <div className="h-px w-12 bg-accent" />
                <span className="text-sm font-mono text-muted-foreground tracking-wider">CREDITS TOP-UP</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-sans font-bold max-w-2xl mx-auto">
                Credits can be used anytime and never expire
              </h2>
            </motion.div>

            {/* Typographic Ledger List */}
            <div className="max-w-6xl mx-auto border-t border-border">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative flex flex-col md:flex-row md:items-baseline justify-between py-12 md:py-16 border-b border-border cursor-pointer"
                >
                  <div className="flex items-baseline gap-8 md:gap-16">
                    <span className="font-mono text-sm text-accent/50 group-hover:text-accent transition-colors duration-300">
                      {addon.number}
                    </span>
                    <h3 className="text-3xl md:text-6xl font-sans font-bold text-foreground group-hover:text-accent group-hover:translate-x-4 transition-all duration-500 ease-out">
                      {addon.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-8 mt-6 md:mt-0 pl-[calc(2rem+1px)] md:pl-0">
                    <p className="font-mono text-lg md:text-xl text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      ${addon.price}
                    </p>
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <span className="text-accent text-2xl">+</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />

        <Footer />
      </div>
  );
};

export default Upgrade;
