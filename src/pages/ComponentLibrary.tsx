import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatedLine } from '@/components/AnimatedText';
import { Palette, Code, Megaphone, Lightbulb, BarChart3, Globe, Mail, ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import ExtendedFooter from '@/components/ExtendedFooter';
import Navigation from '@/components/Navigation';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Creating distinctive visual identities that capture essence and resonate with audiences.',
    number: '01',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building performant, accessible, and beautifully crafted digital experiences.',
    number: '02',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that amplify your message and drive measurable growth.',
    number: '03',
  },
  {
    icon: Lightbulb,
    title: 'Creative Direction',
    description: 'Guiding vision from concept to execution with purpose and precision.',
    number: '04',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transforming insights into actionable strategies for continuous improvement.',
    number: '05',
  },
  {
    icon: Globe,
    title: 'Global Strategy',
    description: 'Expanding reach across markets with culturally aware, localized approaches.',
    number: '06',
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const ServiceCard = ({ service, index, activeIndex, setActiveIndex }: ServiceCardProps) => {
  const Icon = service.icon;
  const isActive = activeIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      className="group relative"
    >
      <div className={`relative h-full p-8 md:p-10 border transition-all duration-500 flex flex-col ${
        isActive 
          ? 'bg-accent/5 border-accent/30' 
          : 'bg-card/30 border-border/50 hover:border-border'
      }`}>
        {/* Number */}
        <motion.span 
          className={`absolute top-4 right-4 text-xs font-mono transition-colors duration-300 ${
            isActive ? 'text-accent' : 'text-muted-foreground/40'
          }`}
          animate={{ opacity: isActive ? 1 : 0.4 }}
        >
          {service.number}
        </motion.span>

        {/* Icon with animation */}
        <motion.div
          animate={{
            rotate: isActive ? 360 : 0,
            scale: isActive ? 1.1 : 1
          }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="w-14 h-14 flex items-center justify-center mb-6 relative"
        >
          <div className={`absolute inset-0 rounded-none border transition-all duration-300 ${
            isActive ? 'border-accent bg-accent/10' : 'border-border'
          }`} />
          <Icon className={`w-7 h-7 relative z-10 transition-colors duration-300 ${
            isActive ? 'text-accent' : 'text-foreground/70'
          }`} strokeWidth={1.5} />
        </motion.div>

        {/* Content */}
        <motion.h3
          className="font-sans font-bold text-xl md:text-2xl mb-3 transition-colors duration-300"
          animate={{ x: isActive ? 5 : 0 }}
        >
          {service.title}
        </motion.h3>
        <p className="text-muted-foreground leading-relaxed flex-grow">
          {service.description}
        </p>

        {/* Bottom line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        />

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        />

        {/* Arrow */}
        <motion.div
          className="absolute bottom-4 right-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const words = [
  { text: "Let's", number: '01' },
  { text: 'Create', number: '02' },
  { text: 'Something', number: '03' },
  { text: 'Great', number: '04', accent: true },
];

const ComponentLibrary = () => {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: '-100px' });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <meta name="theme-color" content="#FF6B4A" />
      </Helmet>
      <Navigation />

      {/* Services Section - 02 WHAT WE DO */}
      <section ref={servicesRef} className="section-padding relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="absolute left-0 right-0 h-px bg-foreground/5"
              style={{ top: `${20 * (i + 1)}%` }}
              initial={{ scaleX: 0 }}
              animate={servicesInView ? { scaleX: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 1.5 }}
            />
          ))}
        </div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-accent/20 rounded-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-4 h-4 bg-accent/30 rounded-none"
          animate={{ y: [-20, 20, -20], rotate: [0, 45, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-wide relative z-10">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="text-sm font-mono text-accent">02</span>
                <div className="h-px w-12 bg-accent" />
                <span className="text-sm font-mono text-muted-foreground tracking-wider">WHAT WE DO</span>
              </motion.div>

              <AnimatedLine delay={0.3}>
                <h2 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1]">
                  Crafting solutions that elevate brands.
                </h2>
              </AnimatedLine>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-md"
            >
              We offer a comprehensive suite of services designed to transform your digital presence and drive meaningful results.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 md:py-32 relative overflow-hidden bg-background">
        <div className="container-wide">
          {/* Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-sm font-mono text-accent">04</span>
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-mono text-muted-foreground tracking-wider">OUR PROCESS</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-sans font-bold max-w-2xl mx-auto">
              A proven methodology.
            </h2>
          </motion.div>

          {/* Architectural Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-y border-border">
            {[
              { step: '01', title: 'Discovery', desc: 'We dive deep into your business, goals, and target audience.', icon: '◇' },
              { step: '02', title: 'Strategy', desc: 'We develop a tailored approach based on research and insights.', icon: '○' },
              { step: '03', title: 'Creation', desc: 'Our team brings the vision to life with meticulous attention.', icon: '△' },
              { step: '04', title: 'Launch', desc: 'We deliver, test, and ensure everything performs flawlessly.', icon: '□' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative flex flex-col justify-between p-8 md:p-12 min-h-[500px] border-b md:border-b-0 md:border-r border-border last:border-b-0 last:border-r-0 hover:bg-foreground hover:text-background transition-colors duration-500"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xl font-mono group-hover:text-accent transition-colors duration-300">
                    {phase.step}
                  </span>
                  <motion.span 
                    className="text-3xl text-accent opacity-50 group-hover:opacity-100 group-hover:text-background transition-all duration-300"
                    whileHover={{ rotate: 180, scale: 1.2 }}
                  >
                    {phase.icon}
                  </motion.span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-3xl font-sans font-bold mb-6 group-hover:text-background transition-colors duration-300">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-background/80 transition-colors duration-300">
                    {phase.desc}
                  </p>
                  
                  <div className="h-px w-8 bg-border mt-8 group-hover:w-full group-hover:bg-accent transition-all duration-700 ease-out" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 06 START A PROJECT */}
      <section 
        id="contact" 
        ref={ctaRef} 
        onMouseMove={handleMouseMove}
        className="section-padding relative overflow-hidden"
      >
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-foreground/5"
              style={{ top: `${16.66 * (i + 1)}%` }}
              initial={{ scaleX: 0 }}
              animate={ctaInView ? { scaleX: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 1.2 }}
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-foreground/5"
              style={{ left: `${25 * (i + 1)}%` }}
              initial={{ scaleY: 0 }}
              animate={ctaInView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.05, duration: 1.2 }}
            />
          ))}
        </div>

        {/* Animated circles */}
        <motion.div
          initial={{ scale: 0 }}
          animate={ctaInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-accent/10"
          style={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={ctaInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/20"
          style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        />

        {/* Floating accent orb */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
          style={{
            x: mousePosition.x * 3,
            y: mousePosition.y * 3,
            top: '30%',
            left: '20%',
          }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 right-[15%] w-16 h-16 border border-accent/20"
          style={{ transform: 'rotate(45deg)', x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          animate={{ rotate: [45, 90, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-[10%] w-4 h-4 bg-accent/30 rounded-full"
          style={{ x: mousePosition.x * -3, y: mousePosition.y * -3 }}
        />

        <div className="container-wide relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-16 md:mb-20"
          >
            <span className="text-sm font-mono text-accent">06</span>
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm font-mono text-muted-foreground tracking-wider">START A PROJECT</span>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Main headline with numbers */}
            <div className="mb-12 md:mb-16">
              {words.map((word, index) => (
                <div key={word.text} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={ctaInView ? { y: 0 } : {}}
                    transition={{ 
                      duration: 1, 
                      delay: 0.2 + index * 0.1, 
                      ease: [0.19, 1, 0.22, 1] 
                    }}
                    className="flex items-baseline gap-4"
                  >
                    <motion.span 
                      className="text-sm font-mono text-accent/60 hidden sm:inline-block"
                      initial={{ opacity: 0 }}
                      animate={ctaInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {word.number}
                    </motion.span>
                    <span 
                      className={`font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] ${
                        word.accent ? 'text-accent' : 'text-foreground'
                      }`}
                    >
                      {word.text}
                      {word.accent && (
                        <motion.span
                          initial={{ scaleX: 0 }}
                          animate={ctaInView ? { scaleX: 1 } : {}}
                          transition={{ duration: 0.8, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
                          className="block h-1.5 bg-accent mt-2 origin-left"
                        />
                      )}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Description and CTA */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed"
              >
                Ready to transform your digital presence? Let's discuss your next project 
                and create something extraordinary together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <MagneticButton>
                  <Link 
                    to="/contact" 
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-semibold rounded-full overflow-hidden"
                  >
                    <Mail className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Get in Touch</span>
                    <motion.div
                      className="relative z-10 w-6 h-6 rounded-full bg-background/20 flex items-center justify-center"
                      whileHover={{ rotate: 45 }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-accent"
                      initial={{ y: '100%' }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                    />
                  </Link>
                </MagneticButton>

                <MagneticButton>
                  <Link 
                    to="/work" 
                    className="group relative inline-flex items-center gap-3 px-8 py-4 border border-foreground/20 text-foreground font-semibold rounded-full overflow-hidden hover:border-accent/50 transition-colors duration-300"
                  >
                    <span className="relative z-10">View Our Work</span>
                    <motion.span 
                      className="relative z-10 text-accent"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Contact info row */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-20 pt-8 border-t border-foreground/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { label: 'Email', value: 'hello@studio.design', href: 'mailto:hello@studio.design' },
                  { label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                  { label: 'Location', value: 'New York, NY', href: null },
                ].map((item, i) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    className="group"
                  >
                    <span className="text-xs font-mono text-muted-foreground block mb-2">{item.label}</span>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="font-sans font-semibold text-lg hover:text-accent transition-colors duration-300 inline-flex items-center gap-2"
                      >
                        {item.value}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span className="font-sans font-semibold text-lg">{item.value}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ExtendedFooter />
    </div>
  );
};

export default ComponentLibrary;
