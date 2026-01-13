import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Loader2 } from 'lucide-react';
import SEO from '@/components/SEO';

const OnboardingStep2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const currentStep = 2;
  const totalSteps = 4;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Onboarding Step 2 | V-TRY"
        description="Generating your V-TRY persona"
        url="https://vtry.ai/onboarding/2"
      />
      
      <main className="min-h-screen">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel - Content Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col lg:justify-center p-8 md:p-12 lg:p-16 bg-background lg:border-r border-b lg:border-b-0 border-border overflow-y-auto"
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold mb-8 text-foreground">
              Generation in progress
            </h1>

            {/* Content */}
            <div className="mb-8">
              <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                We are generating your Persona image. Average waiting time is around 2 minutes. Please wait, or feel free to browse around, we will notify you once your profile is ready.
              </p>

              {/* Loading Animation */}
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2 className="w-8 h-8 text-accent" strokeWidth={2} />
                </motion.div>
                <span className="text-sm font-mono text-muted-foreground">
                  Processing...
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:flex-1 relative bg-secondary/30 overflow-hidden h-[400px] lg:h-screen flex"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center"
                >
                  <Loader2 className="w-16 h-16 text-accent" strokeWidth={1.5} />
                </motion.div>
                <p className="text-sm font-mono text-muted-foreground">
                  Creating your persona...
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingStep2;
