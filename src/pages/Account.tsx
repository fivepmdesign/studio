import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AnimatedLine } from '@/components/AnimatedText';
import { Palette, Code, Megaphone, Lightbulb, BarChart3, Globe, User, LogOut } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import personaPhoto from '@/assets/photo.png';
import frontView from '@/assets/Front view 1.png';
import backView from '@/assets/Back view.png';
import sideView from '@/assets/Side view.png';
import threeFourView from '@/assets/3-4 view.png';

const services = [
  {
    pill: 'SUBSCRIPTION',
    title: 'Pro plan',
    subtitle: 'Your plan renews on Nov, 16',
    number: '01',
    width: '1/3',
    cta: 'Manage plan',
  },
  {
    pill: 'CREDITS',
    title: '614',
    titleSuffix: '/1200',
    subtitle: 'Monthly credits',
    number: '02',
    width: '2/3',
    cta: 'BUY CREDITS',
    creditsUsed: 614,
    creditsTotal: 1200,
  },
  {
    pill: 'UPCOMING INVOICES',
    title: 'Upcoming Invoices',
    description: 'Review and manage your upcoming billing statements.',
    number: '03',
    width: '1/2',
    cta: 'View all Invoices',
  },
  {
    pill: 'PAYMENT METHODS',
    title: 'Payment Methods',
    description: 'Credit card - Stripe',
    number: '04',
    width: '1/2',
    cta: 'Manage billing information',
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const ServiceCard = ({ service, index, activeIndex, setActiveIndex }: ServiceCardProps) => {
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
      <div className={`relative h-full p-10 md:p-12 border transition-all duration-500 flex flex-col overflow-hidden ${
        isActive 
          ? 'bg-accent/5 border-accent/30' 
          : 'bg-card/30 border-border/50 hover:border-border'
      }`}>
        {/* Credit Consumption Gradient (only for credits card) */}
        {service.creditsUsed !== undefined && service.creditsTotal !== undefined && (
          <>
            <div 
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                background: `linear-gradient(to right, rgba(255, 107, 74, 0.12) 0%, rgba(255, 107, 74, 0.12) ${(service.creditsUsed / service.creditsTotal) * 100}%, transparent ${(service.creditsUsed / service.creditsTotal) * 100}%, transparent 100%)`
              }}
            />
            <div className="absolute top-1/2 right-8 -translate-y-1/2 pointer-events-none z-10">
              <span className="text-2xl md:text-3xl font-sans font-bold text-accent/50">
                {Math.round((service.creditsUsed / service.creditsTotal) * 100)}%
              </span>
            </div>
          </>
        )}
        {/* Number */}
        <motion.span 
          className={`absolute top-4 right-4 text-xs font-mono transition-colors duration-300 ${
            isActive ? 'text-accent' : 'text-muted-foreground/40'
          }`}
          animate={{ opacity: isActive ? 1 : 0.4 }}
        >
          {service.number}
        </motion.span>

        {/* Pill */}
        <motion.div
          animate={{
            scale: isActive ? 1.05 : 1
          }}
          transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mb-6 relative z-10"
        >
          <span className={`inline-block px-3 py-1.5 text-xs font-mono uppercase tracking-widest border transition-all duration-300 ${
            isActive 
              ? 'bg-accent/10 border-accent text-accent' 
              : 'bg-accent/5 border-accent/30 text-foreground/70'
          }`}>
            {service.pill}
          </span>
        </motion.div>

        {/* Content */}
        <motion.h3
          className="font-sans font-bold text-xl md:text-2xl mb-2 transition-colors duration-300 flex items-baseline gap-1 relative z-10"
          animate={{ x: isActive ? 5 : 0 }}
        >
          {service.title}
          {service.titleSuffix && (
            <span className="text-lg md:text-xl text-accent">
              {service.titleSuffix}
            </span>
          )}
        </motion.h3>
        {service.subtitle && (
          <p className="text-sm text-muted-foreground mb-3 relative z-10">
            {service.subtitle}
          </p>
        )}
        {service.description && (
          <p className="text-muted-foreground leading-relaxed flex-grow relative z-10">
            {service.description}
          </p>
        )}

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

        {/* CTA Button and Arrow */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3">
          {service.cta && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-bold uppercase tracking-widest text-foreground/70 hover:text-accent transition-colors"
            >
              {service.cta}
            </motion.button>
          )}
          <motion.div
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
      </div>
    </motion.div>
  );
};

const personas = [
  {
    id: 1,
    name: 'Persona 1',
    photo: personaPhoto,
    bodySize: 'M',
    bodyShots: {
      front: frontView,
      back: backView,
      side: sideView,
      threeFour: threeFourView,
    },
  },
  {
    id: 2,
    name: 'Persona 2',
    photo: personaPhoto,
    bodySize: 'S',
    bodyShots: {
      front: frontView,
      back: backView,
      side: sideView,
      threeFour: threeFourView,
    },
  },
  {
    id: 3,
    name: 'Persona 3',
    photo: personaPhoto,
    bodySize: 'L',
    bodyShots: {
      front: frontView,
      back: backView,
      side: sideView,
      threeFour: threeFourView,
    },
  },
];

const Account = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedPersona, setSelectedPersona] = useState<number | null>(1);
  const [editingPersonaId, setEditingPersonaId] = useState<number | null>(null);
  const [personaNames, setPersonaNames] = useState<Record<number, string>>({
    1: 'Persona 1',
    2: 'Persona 2',
    3: 'Persona 3',
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Account | V-TRY"
        description="Manage your V-TRY account"
        url="https://vtry.ai/account"
      />
      
      <Navigation />
      
      <main>
        <section ref={ref} className="section-padding relative overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`grid-${i}`}
                className="absolute left-0 right-0 h-px bg-foreground/5"
                style={{ top: `${20 * (i + 1)}%` }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16 md:mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm font-mono text-accent">V-TRY</span>
                <div className="h-px w-12 bg-accent" />
                <span className="text-sm font-mono text-muted-foreground tracking-wider">ACCOUNT</span>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-destructive hover:text-destructive/80 transition-colors"
              >
                Logout
                <LogOut className="w-4 h-4" strokeWidth={2} />
              </motion.button>
            </div>

            {/* Full-width User Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 md:mb-16"
            >
              <div className="relative h-full p-8 md:p-12 border bg-card/30 border-border/50 hover:border-border transition-all duration-500 flex flex-col md:flex-row md:items-center gap-8">
                {/* Number */}
                <motion.span 
                  className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/40"
                >
                  {services[0].number}
                </motion.span>

                {/* Round Avatar */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden border-2 border-accent/30">
                  <User className="w-10 h-10 md:w-12 md:h-12 text-accent" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-2xl md:text-3xl mb-4">
                    Samantha Norton
                  </h3>
                  
                  {/* Email and Phone Pills */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-accent/10 border border-accent/30 text-sm font-mono text-foreground rounded-full">
                      samantha.norton@example.com
                    </span>
                    <span className="px-4 py-1.5 bg-accent/10 border border-accent/30 text-sm font-mono text-foreground rounded-full">
                      +1 (555) 123-4567
                    </span>
                  </div>

                  {/* Joining Date */}
                  <p className="text-muted-foreground text-sm">
                    Member since <span className="font-mono">January 15, 2023</span>
                  </p>
                </div>

                {/* Counter Circles */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-shrink-0">
                  {[
                    { number: '1,247', suffix: '', label: 'Images' },
                    { number: '342', suffix: '', label: 'Videos' },
                    { number: '89', suffix: '', label: 'Websites' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: "spring" }}
                      className="group aspect-square w-24 h-24 md:w-28 md:h-28 rounded-full border border-border flex flex-col items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-500 cursor-default relative overflow-hidden"
                    >
                      <div className="relative z-10 text-center">
                        <div className="flex items-start justify-center gap-1 leading-none">
                          <span className="text-2xl md:text-3xl font-sans font-bold tracking-tighter">
                            {stat.number}
                          </span>
                          <span className="text-xl md:text-2xl font-sans font-medium text-accent group-hover:text-background transition-colors duration-500">
                            {stat.suffix}
                          </span>
                        </div>
                        <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest mt-2 text-muted-foreground group-hover:text-background/70 transition-colors duration-500 px-2">
                          {stat.label}
                        </p>
                      </div>
                      
                      {/* Ripple effect circle */}
                      <div className="absolute inset-0 rounded-full border border-accent/0 group-hover:border-accent/50 group-hover:scale-110 transition-all duration-700" />
                    </motion.div>
                  ))}
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent/30" />

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent/30" />
              </div>
            </motion.div>

            {/* Services Grid */}
            <div className="space-y-4 md:space-y-6">
              {/* First Row: Subscription (1/3) + Credits (2/3) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="md:col-span-1">
                  <ServiceCard 
                    key={services[0].title} 
                    service={services[0]} 
                    index={0}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </div>
                <div className="md:col-span-2">
                  <ServiceCard 
                    key={services[1].title} 
                    service={services[1]} 
                    index={1}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </div>
              </div>
              
              {/* Second Row: Upcoming Invoices (1/2) + Payment Methods (1/2) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <ServiceCard 
                  key={services[2].title} 
                  service={services[2]} 
                  index={2}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
                <ServiceCard 
                  key={services[3].title} 
                  service={services[3]} 
                  index={3}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              </div>
            </div>

            {/* YOUR PERSONAS Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 md:mt-16"
            >
              <div className="relative h-full p-10 md:p-12 border bg-card/30 border-border/50 hover:border-border transition-all duration-500">
                {/* Number */}
                <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/40">
                  05
                </span>

                {/* Title Pill */}
                <div className="mb-8">
                  <span className="inline-block px-3 py-1.5 text-xs font-mono uppercase tracking-widest border bg-accent/5 border-accent/30 text-foreground/70">
                    YOUR PERSONAS
                  </span>
                </div>

                {/* Personas Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {personas.map((persona) => (
                    <motion.div
                      key={persona.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + persona.id * 0.1 }}
                      className={`relative p-6 border transition-all duration-300 ${
                        selectedPersona === persona.id
                          ? 'bg-accent/5 border-accent/30'
                          : 'bg-background/30 border-border/50 hover:border-border'
                      }`}
                      onClick={() => {
                        if (editingPersonaId !== persona.id && selectedPersona !== persona.id) {
                          setSelectedPersona(persona.id);
                        }
                      }}
                    >
                      {/* Round Photo */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-border">
                          <img
                            src={persona.photo}
                            alt={personaNames[persona.id] || persona.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          {editingPersonaId === persona.id ? (
                            <input
                              type="text"
                              value={personaNames[persona.id] || persona.name}
                              onChange={(e) => setPersonaNames({ ...personaNames, [persona.id]: e.target.value })}
                              onBlur={() => setEditingPersonaId(null)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  setEditingPersonaId(null);
                                  e.currentTarget.blur();
                                }
                                if (e.key === 'Escape') {
                                  setEditingPersonaId(null);
                                  e.currentTarget.blur();
                                }
                              }}
                              onClick={(e) => e.stopPropagation()}
                              className="font-sans font-bold text-lg bg-transparent border-b-2 border-accent focus:outline-none focus:border-accent w-full"
                              autoFocus
                            />
                          ) : (
                            <h4
                              className="font-sans font-bold text-lg cursor-text hover:text-accent transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                setEditingPersonaId(persona.id);
                              }}
                            >
                              {personaNames[persona.id] || persona.name}
                            </h4>
                          )}
                          <span className="text-sm text-muted-foreground font-mono">
                            Size: {persona.bodySize}
                          </span>
                        </div>
                      </div>

                      {/* Body Shots Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-[3/4] overflow-hidden bg-secondary">
                          <img
                            src={persona.bodyShots.front}
                            alt="Front view"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="aspect-[3/4] overflow-hidden bg-secondary">
                          <img
                            src={persona.bodyShots.back}
                            alt="Back view"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="aspect-[3/4] overflow-hidden bg-secondary">
                          <img
                            src={persona.bodyShots.side}
                            alt="Side view"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="aspect-[3/4] overflow-hidden bg-secondary">
                          <img
                            src={persona.bodyShots.threeFour}
                            alt="3/4 view"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Selection Indicator */}
                      {selectedPersona === persona.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-4 right-4"
                        >
                          <span className="inline-block px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-accent text-background">
                            ACTIVE
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}

                  {/* Add New Persona Card */}
                  <motion.button
                    onClick={() => {
                      // Handle add new persona
                      console.log('Add new persona');
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + personas.length * 0.1 }}
                    className="relative p-6 border border-dashed border-border/50 hover:border-border transition-all duration-300 text-left bg-background/10 hover:bg-background/20"
                  >
                    {/* Skeleton UI */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-border bg-secondary/50 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground/50">
                              <path
                                d="M12 5v14M5 12h14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        <div>
                          <div className="h-5 w-24 bg-secondary/50 rounded mb-2" />
                          <div className="h-4 w-16 bg-secondary/50 rounded" />
                        </div>
                      </div>

                      {/* Skeleton Body Shots Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="aspect-[3/4] bg-secondary/50 rounded" />
                        ))}
                      </div>

                      {/* Add Text */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-background/80">
                        <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                          Add New Persona
                        </span>
                      </div>
                    </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
