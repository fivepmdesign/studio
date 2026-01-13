import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedLine } from '@/components/AnimatedText';

const steps = [
  {
    number: '01',
    title: 'Create your free account',
    description: 'We start by getting you set up in seconds. Create your V-TRY account to unlock your personal AI try-on experience and start exploring how products look on you.',
  },
  {
    number: '02',
    title: 'Upload your face photo',
    description: 'Upload one clear face photo to help V-TRY understand you. This image is used solely to generate realistic try-ons tailored to your appearance.',
  },
  {
    number: '03',
    title: 'Your AI persona is created',
    description: 'V-TRY uses AI to build your private persona, designed to generate accurate try-on images and videos that look and feel like you.',
  },
  {
    number: '04',
    title: 'Start generating',
    description: 'Start creating V-TRY generations by uploading product images, browsing the web, or texting V-TRY from your phone. Your AI assistant helps you explore options and decide.',
  },
  {
    number: '05',
    title: 'Use V-TRY anywhere you shop',
    description: 'Download the browser extension, install the iOS shortcut, or connect via text or WhatsApp. V-TRY works wherever you discover products.',
  },
];

export const ProcessSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 md:py-32 bg-background relative">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-mono text-accent">V-TRY</span>
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm font-mono text-muted-foreground tracking-wider">SET UP</span>
          </motion.div>
          
          <AnimatedLine>
            <h2 className="font-sans font-bold text-5xl md:text-7xl max-w-4xl tracking-tight leading-[0.9]">
              Get ready <span className="text-accent">in minutes</span>
            </h2>
          </AnimatedLine>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative">
          {steps.map((step, index) => {
            return (
              <div 
                key={index} 
                className="sticky top-32 min-h-[50vh] mb-8 last:mb-0"
                style={{ zIndex: index + 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-card border border-border overflow-hidden group shadow-2xl shadow-black/5"
                >
                  {/* Accent Top Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
                    {/* Number Column */}
                    <div className="md:col-span-2 p-8 border-b md:border-b-0 md:border-r border-border bg-secondary/10 flex md:flex-col justify-between items-start">
                       <span className="text-4xl font-sans font-bold text-foreground/20 group-hover:text-accent transition-colors duration-300">
                          {step.number}
                       </span>
                       <div className="hidden md:block w-px h-16 bg-foreground/10" />
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-center relative z-10 bg-background">
                       <h3 className="text-3xl md:text-4xl font-sans font-bold mb-6 group-hover:translate-x-2 transition-transform duration-300">
                          {step.title}
                       </h3>
                       <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                          {step.description}
                       </p>
                    </div>

                    {/* Visual/Decoration Column */}
                    <div className="hidden md:block md:col-span-4 bg-secondary/5 relative overflow-hidden border-l border-border">
                       {/* Abstract Geometric Pattern */}
                       <div className="absolute inset-0 opacity-20">
                          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[20px] border-foreground/5 rounded-full 
                             ${index % 2 === 0 ? 'border-dashed animate-spin-slow' : 'border-solid animate-pulse-slow'}`} 
                          />
                       </div>
                       
                       {/* Hover Reveal Text */}
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="font-mono text-xs uppercase tracking-[0.3em] -rotate-90 whitespace-nowrap text-accent">
                             Phase {step.number}
                          </span>
                       </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
