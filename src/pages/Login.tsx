import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TestimonialBlock from '@/components/TestimonialBlock';
import clerkPlaceholder from '@/assets/clerk-placeholder.png';

const Login = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Login | V-TRY"
        description="Login to your V-TRY account"
        url="https://vtry.ai/login"
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
            {/* Two-column layout: Testimonials (50% desktop, hidden mobile) + Image (50% desktop, 100% mobile) */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-stretch">
              {/* Testimonial Block - 50% on desktop, hidden on mobile */}
              <div className="hidden lg:flex lg:w-1/2 lg:flex-shrink-0">
                <div className="w-full flex items-start justify-start">
                  <TestimonialBlock className="w-full max-w-lg" />
                </div>
              </div>

              {/* Clerk Placeholder Image - 50% on desktop, 100% on mobile */}
              <div className="w-full lg:w-1/2 lg:flex-shrink-0">
                <div className="w-full flex items-center justify-center">
                  <motion.img
                    src={clerkPlaceholder}
                    alt="V-TRY Sign In"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full h-auto max-w-lg object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
