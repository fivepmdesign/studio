import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MagneticButton from '@/components/MagneticButton';
import { ArrowRight } from 'lucide-react';

const promoOptions = [
  {
    label: 'GET STARTED',
    title: 'Ready to try on your first look?',
    description: 'Upload a photo and see realistic AI try-ons in seconds.',
    buttonText: 'Get started',
  },
  {
    label: 'START TODAY',
    title: 'See how it looks on you',
    description: 'Create your first AI try-on in just a few clicks.',
    buttonText: 'Start now',
  },
  {
    label: 'GET STARTED',
    title: 'Try before you decide',
    description: 'See how outfits really look on you with AI-powered try-ons.',
    buttonText: 'Create your first try-on',
  },
];

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedPromo, setSelectedPromo] = useState(promoOptions[0]);

  useEffect(() => {
    // Randomly select a promo option on component mount
    const randomIndex = Math.floor(Math.random() * promoOptions.length);
    setSelectedPromo(promoOptions[randomIndex]);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  return (
    <section 
      id="contact" 
      ref={ref} 
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
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: i * 0.05, duration: 1.2 }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-foreground/5"
            style={{ left: `${25 * (i + 1)}%` }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.2 + i * 0.05, duration: 1.2 }}
          />
        ))}
      </div>

      {/* Animated circles */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-accent/10"
        style={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
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
        <div className="max-w-5xl mx-auto text-center">
          {/* Title and Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-sm font-mono text-accent mb-6 block">{selectedPromo.label}</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold mb-6">
              {selectedPromo.title}
            </h2>
          </motion.div>

          {/* Description and CTA */}
          <div className="flex flex-col items-center gap-8 md:gap-12">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center leading-relaxed"
            >
              {selectedPromo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticButton>
                <Link 
                  to="/login" 
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full"
                >
                  {selectedPromo.buttonText}
                  <motion.div
                    className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center"
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
