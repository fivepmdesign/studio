import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AnimatedLine } from '@/components/AnimatedText';
import { Compass, Target, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your vision, goals, and audience through deep research.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Transform insights into actionable plans with clear milestones.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Design',
    description: 'Ideas take visual form through iterative, collaborative design.',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Development',
    description: 'Building with precision, performance, and scalability.',
    icon: Code,
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Seamless launch with ongoing support for continued success.',
    icon: Rocket,
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm font-mono text-accent tracking-wider">OUR PROCESS</span>
            <div className="h-px w-8 bg-accent" />
          </motion.div>

          <AnimatedLine delay={0.2}>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
              How We Work
            </h2>
          </AnimatedLine>
        </div>

        {/* Process Steps - Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Horizontal connecting line - desktop only */}
          <motion.div
            className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="group relative text-center lg:text-center"
                >
                  {/* Step number circle */}
                  <motion.div
                    className={`relative mx-auto w-28 h-28 lg:w-[120px] lg:h-[120px] rounded-full border-2 flex items-center justify-center mb-6 transition-all duration-500 ${
                      isActive 
                        ? 'border-accent bg-accent/10' 
                        : 'border-border bg-background'
                    }`}
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <Icon 
                      className={`w-8 h-8 lg:w-10 lg:h-10 transition-all duration-300 ${
                        isActive ? 'text-accent' : 'text-muted-foreground'
                      }`} 
                      strokeWidth={1.5} 
                    />
                    
                    {/* Number badge */}
                    <span className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                      isActive 
                        ? 'bg-accent text-accent-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3 className={`font-syne font-bold text-lg lg:text-xl mb-3 transition-colors duration-300 ${
                    isActive ? 'text-accent' : 'text-foreground'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px] mx-auto">
                    {step.description}
                  </p>

                  {/* Active indicator line */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-accent origin-center"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
