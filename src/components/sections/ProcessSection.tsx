import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { AnimatedLine } from '@/components/AnimatedText';
import { Compass, Target, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin by understanding your vision, goals, and audience. Deep research and strategic analysis form the foundation of every project.',
    details: ['User Research', 'Competitive Analysis', 'Goal Definition', 'Technical Assessment'],
    icon: Compass,
    color: 'primary',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Insights transform into actionable plans. We define the approach, set milestones, and align on success metrics.',
    details: ['Roadmap Planning', 'KPI Definition', 'Resource Allocation', 'Timeline Setup'],
    icon: Target,
    color: 'accent',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Ideas take visual form. Our design process is iterative, collaborative, and focused on creating meaningful experiences.',
    details: ['Wireframing', 'Visual Design', 'Prototyping', 'User Testing'],
    icon: Palette,
    color: 'primary',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Designs become reality. We build with precision, performance, and scalability as core principles.',
    details: ['Frontend Build', 'Backend Integration', 'Quality Assurance', 'Performance Optimization'],
    icon: Code,
    color: 'accent',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'The culmination of our work. We ensure a seamless launch and provide ongoing support for continued success.',
    details: ['Deployment', 'Monitoring Setup', 'Documentation', 'Ongoing Support'],
    icon: Rocket,
    color: 'primary',
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-40 right-20 w-20 h-20 border border-primary/10 rotate-45"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-16 h-16 bg-accent/5 rounded-full"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-12 h-12 border border-accent/20"
        style={{ x: smoothX, y: smoothY }}
      />

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
      <div className="absolute bottom-8 right-8 w-16 h-16">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-primary/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-sm font-mono text-primary">04</span>
            <div className="h-px w-12 bg-primary/30" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Process</span>
          </motion.div>

          <AnimatedLine delay={0.3}>
            <h2 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6">
              A structured approach to{' '}
              <span className="text-primary">exceptional</span> outcomes.
            </h2>
          </AnimatedLine>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            Every project follows our proven methodology, refined over years of delivering successful digital products.
          </motion.p>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Timeline Navigation */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="absolute left-6 top-0 bottom-0 w-[1px] bg-border origin-top"
            />

            {/* Progress Line */}
            <motion.div
              className="absolute left-6 top-0 w-[1px] bg-primary origin-top"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />

            <div className="space-y-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                const isHovered = hoveredStep === index;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className="relative cursor-pointer group"
                  >
                    {/* Step Node */}
                    <div className="flex items-start gap-6">
                      {/* Circle Node */}
                      <motion.div 
                        className={`relative z-10 w-12 h-12 flex items-center justify-center border-2 transition-all duration-300 ${
                          isActive 
                            ? 'bg-primary border-primary' 
                            : isHovered
                              ? 'bg-primary/10 border-primary/50'
                              : 'bg-background border-border'
                        }`}
                        animate={{ 
                          scale: isActive ? 1.1 : isHovered ? 1.05 : 1,
                          rotate: isActive ? 45 : 0
                        }}
                      >
                        <motion.span 
                          className={`font-mono text-sm font-bold transition-colors ${
                            isActive ? 'text-primary-foreground' : 'text-foreground'
                          }`}
                          animate={{ rotate: isActive ? -45 : 0 }}
                        >
                          {step.number}
                        </motion.span>
                      </motion.div>

                      {/* Content */}
                      <div className={`flex-1 py-3 px-5 border transition-all duration-300 ${
                        isActive 
                          ? 'bg-primary/5 border-primary/30' 
                          : isHovered
                            ? 'bg-card/50 border-border'
                            : 'bg-transparent border-transparent'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`font-syne font-bold text-xl transition-colors duration-300 ${
                            isActive ? 'text-primary' : 'text-foreground'
                          }`}>
                            {step.title}
                          </h3>
                          <Icon className={`w-5 h-5 transition-all duration-300 ${
                            isActive ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                        
                        <p className={`text-sm transition-all duration-300 ${
                          isActive || isHovered ? 'text-muted-foreground' : 'text-muted-foreground/50'
                        }`}>
                          {step.description}
                        </p>

                        {/* Corner accents on active */}
                        {isActive && (
                          <>
                            <div className="absolute top-0 left-12 w-3 h-3 border-l-2 border-t-2 border-primary" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary" />
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Active Step Detail */}
          <div className="relative lg:sticky lg:top-32 h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Large Background Number */}
                <motion.div
                  className="absolute -top-8 -right-4 text-[200px] font-syne font-bold text-primary/5 leading-none select-none pointer-events-none"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {steps[activeStep].number}
                </motion.div>

                {/* Detail Card */}
                <div className="relative border border-border bg-card/50 backdrop-blur-sm p-8 lg:p-12">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-[0.03]" 
                    style={{
                      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                                       linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }}
                  />

                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 border-2 border-primary flex items-center justify-center mb-8"
                    >
                      {(() => {
                        const Icon = steps[activeStep].icon;
                        return <Icon className="w-8 h-8 text-primary" />;
                      })()}
                    </motion.div>

                    {/* Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-mono text-primary">STEP {steps[activeStep].number}</span>
                      <div className="h-[1px] flex-1 bg-primary/20" />
                    </div>

                    <h3 className="font-syne font-bold text-3xl lg:text-4xl mb-4">
                      {steps[activeStep].title}
                    </h3>

                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {steps[activeStep].description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-3">
                      <p className="text-xs font-mono text-primary uppercase tracking-wider mb-4">Key Activities</p>
                      {steps[activeStep].details.map((detail, index) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-center gap-4 group"
                        >
                          <div className="w-8 h-[1px] bg-primary/30 group-hover:bg-primary group-hover:w-12 transition-all duration-300" />
                          <span className="text-foreground/80 group-hover:text-primary transition-colors">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-10 pt-8 border-t border-border">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-muted-foreground">PROGRESS</span>
                        <span className="text-xs font-mono text-primary">
                          {activeStep + 1} / {steps.length}
                        </span>
                      </div>
                      <div className="h-1 bg-border overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center justify-center gap-3 mt-8">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`relative w-3 h-3 transition-all duration-300 ${
                        activeStep === index ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                      }`}
                    >
                      {activeStep === index && (
                        <motion.div
                          layoutId="activeDot"
                          className="absolute inset-0 border-2 border-primary"
                          style={{ margin: -4 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;