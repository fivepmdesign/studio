import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import clickGif from '@/assets/click.gif';

const OnboardingStep4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();
  const currentStep = 4;
  const totalSteps = 4;

  const handleGoToFeed = () => {
    // Navigate to feed page
    navigate('/feed');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Onboarding Step 4 | V-TRY"
        description="Start using V-TRY"
        url="https://vtry.ai/onboarding/4"
      />
      
      <main className="min-h-screen">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel - Content Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col lg:justify-center p-8 md:p-12 lg:p-16 bg-background lg:border-r border-b lg:border-b-0 border-border overflow-y-auto"
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
              Start shopping with V-TRY
            </h1>

            {/* Subtitle */}
            <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
              Click on V-TRY banners over images to initiate your generations
            </p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              onClick={handleGoToFeed}
              className="w-full py-4 px-6 rounded-lg font-mono uppercase tracking-wider text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Go to my feed
            </motion.button>
          </motion.div>

          {/* Right Panel - GIF Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative bg-secondary/30 overflow-y-auto min-h-[400px] lg:h-screen"
          >
            <div className="p-8 md:p-12 lg:p-16 h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-full max-w-4xl"
              >
                <img
                  src={clickGif}
                  alt="V-TRY click interaction demo"
                  className="w-full h-auto rounded-lg border border-border"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingStep4;
