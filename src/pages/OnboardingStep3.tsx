import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import frontView from '@/assets/Front view 1.png';
import backView from '@/assets/Back view.png';
import sideView from '@/assets/Side view.png';
import threeFourView from '@/assets/3-4 view.png';

const PersonaImageCard = ({ image, label, index, isInView }: { image: string; label: string; index: number; isInView: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(x, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = (e.clientY - centerY) / 20;
    const rotateYValue = (centerX - e.clientX) / 20;
    
    x.set(rotateYValue);
    y.set(rotateXValue);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative aspect-[3/4] overflow-visible bg-secondary rounded-lg border border-border group-hover:border-accent/50 transition-colors"
      >
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={label}
            className="w-full h-full object-cover"
            style={{ 
              transform: 'translateZ(0px)',
              imageRendering: 'crisp-edges',
              WebkitBackfaceVisibility: 'visible',
              backfaceVisibility: 'visible',
              WebkitTransform: 'translateZ(0px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div
          className="absolute bottom-2 left-2 px-2 py-1 bg-background/80 backdrop-blur-sm border border-border rounded text-xs font-mono text-foreground opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
        >
          {label}
        </div>
      </motion.div>
    </motion.div>
  );
};

const OnboardingStep3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();
  const currentStep = 3;
  const totalSteps = 4;

  const handleContinue = () => {
    navigate('/onboarding/4');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Onboarding Step 3 | V-TRY"
        description="Your V-TRY persona is ready"
        url="https://vtry.ai/onboarding/3"
      />
      
      <main className="min-h-screen">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel - Content Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 flex flex-col lg:justify-center p-8 md:p-12 lg:p-16 bg-background lg:border-r border-b lg:border-b-0 border-border overflow-y-auto"
          >
            {/* Step Indicator */}
            <div className="mb-8 flex items-center gap-4 lg:static sticky top-0 bg-background z-10 py-4 lg:py-0 -mx-8 md:-mx-12 lg:mx-0 px-8 md:px-12 lg:px-0">
              <span className="text-sm font-mono text-accent">V-TRY</span>
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-mono text-muted-foreground tracking-wider">
                {currentStep}/{totalSteps}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold mb-4 text-foreground">
              Your Persona is ready
            </h1>

            {/* Subtext */}
            <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
              We've generated your personalized persona from multiple angles. These images will be used to create realistic try-on experiences when you shop online. You can view and manage your persona anytime from your account.
            </p>

            {/* Continue Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              onClick={handleContinue}
              className="w-full py-4 px-6 rounded-lg font-mono uppercase tracking-wider text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue
            </motion.button>
          </motion.div>

          {/* Right Panel - Persona Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3 relative bg-secondary/30 overflow-y-auto min-h-[400px] lg:h-screen"
          >
            <div className="p-8 md:p-12 lg:p-16 min-h-full flex items-start lg:items-center justify-center py-16 lg:py-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl">
                {[
                  { image: frontView, label: 'Front' },
                  { image: backView, label: 'Back' },
                  { image: sideView, label: 'Side' },
                  { image: threeFourView, label: '3/4 View' },
                ].map((view, index) => (
                  <PersonaImageCard
                    key={index}
                    image={view.image}
                    label={view.label}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingStep3;
