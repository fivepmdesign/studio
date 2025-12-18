import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { AnimatedLine } from '@/components/AnimatedText';
import { Compass, Target, Palette, Code, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin by understanding your vision, goals, and audience. Deep research and strategic analysis form the foundation of every project.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Insights transform into actionable plans. We define the approach, set milestones, and align on success metrics.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Design',
    description: 'Ideas take visual form. Our design process is iterative, collaborative, and focused on creating meaningful experiences.',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Development',
    description: 'Designs become reality. We build with precision, performance, and scalability as core principles.',
    icon: Code,
  },
  {
    number: '05',
    title: 'Launch',
    description: 'The culmination of our work. We ensure a seamless launch and provide ongoing support for continued success.',
    icon: Rocket,
  },
];

interface StepCardProps {
  step: typeof steps[0];
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  isLast: boolean;
}

const StepCard = ({ step, index, activeIndex, setActiveIndex, isLast }: StepCardProps) => {
  const Icon = step.icon;
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
      {/* Connecting Line to next card */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 -right-4 w-8 z-10">
          <motion.div 
            className="h-[2px] bg-border"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          />
          <motion.div
            className={`absolute right-0 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
              isActive ? 'text-accent' : 'text-border'
            }`}
            animate={{ x: isActive ? 4 : 0 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      )}

      <div className={`relative h-full p-8 md:p-10 border transition-all duration-500 ${
        isActive 
          ? 'bg-accent/5 border-accent/30' 
          : 'bg-card/30 border-border/50 hover:border-border'
      }`}>
        {/* Step Number - Top Right */}
        <motion.span 
          className={`absolute top-4 right-4 text-xs font-mono transition-colors duration-300 ${
            isActive ? 'text-accent' : 'text-muted-foreground/40'
          }`}
        >
          {step.number}
        </motion.span>

        {/* Icon with Circle */}
        <motion.div
          className={`relative w-16 h-16 flex items-center justify-center mb-6 border-2 transition-all duration-500 ${
            isActive 
              ? 'border-accent bg-accent/10' 
              : 'border-border bg-transparent'
          }`}
          animate={{ 
            rotate: isActive ? 45 : 0,
            scale: isActive ? 1.05 : 1 
          }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <motion.div
            animate={{ rotate: isActive ? -45 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className={`w-7 h-7 transition-colors duration-300 ${
              isActive ? 'text-accent' : 'text-foreground/70'
            }`} strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.h3 
          className="font-syne font-bold text-xl md:text-2xl mb-3 transition-colors duration-300 group-hover:text-accent"
          animate={{ x: isActive ? 5 : 0 }}
        >
          {step.title}
        </motion.h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
          {step.description}
        </p>

        {/* Bottom accent line */}
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
        <motion.div
          className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-accent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 30);
      mouseY.set((clientY / innerHeight - 0.5) * 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-foreground/5"
            style={{ top: `${20 * (i + 1)}%` }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: i * 0.05, duration: 1.2 }}
          />
        ))}
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-32 right-20 w-24 h-24 border border-accent/10"
        style={{ x: smoothX, y: smoothY, rotate: 45 }}
      />
      <motion.div
        className="absolute bottom-40 left-16 w-16 h-16 bg-primary/5 rounded-full"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-8 h-8 border border-primary/20"
        style={{ x: smoothX, y: smoothY }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-sm font-mono text-accent">04</span>
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-mono text-muted-foreground tracking-wider">OUR PROCESS</span>
            </motion.div>

            <AnimatedLine delay={0.3}>
              <h2 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1]">
                A structured approach to exceptional outcomes.
              </h2>
            </AnimatedLine>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-md"
          >
            Every project follows our proven methodology, refined over years of delivering successful digital products.
          </motion.p>
        </div>

        {/* Process Steps Grid - 5 columns on large, 2-3 on medium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <StepCard 
              key={step.number} 
              step={step} 
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom Timeline Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-accent" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                From concept to launch
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className={`w-12 h-1 transition-colors duration-300 ${
                    activeIndex !== null && index <= activeIndex 
                      ? 'bg-accent' 
                      : 'bg-border'
                  }`}
                  whileHover={{ scaleY: 2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;