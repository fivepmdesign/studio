import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { AnimatedLine } from '@/components/AnimatedText';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import avaImage from '@/assets/3_.jpg';
import marthaImage from '@/assets/1_.jpg';
import ethanImage from '@/assets/2_.jpg';

const testimonials = [
  {
    id: 1,
    quote: "I finally know what suits me before buying — no returns needed!",
    author: 'Ava G.',
    role: 'United Kingdom',
    avatar: 'A',
    avatarImage: avaImage,
  },
  {
    id: 2,
    quote: "This feels like shopping in the future",
    author: 'Martha V.',
    role: 'Spain',
    avatar: 'M',
    avatarImage: marthaImage,
  },
  {
    id: 3,
    quote: "The try-on videos look shockingly realistic. Game changer.",
    author: 'Ethan M.',
    role: 'Brazil',
    avatar: 'E',
    avatarImage: ethanImage,
  },
];

const clients = [
  'LUMINARY', 'ETHEREAL', 'ZENITH', 'CASCADE', 'AURORA', 'NEXUS',
  'VERTEX', 'PRISM', 'ORBIT', 'STELLAR',
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute left-0 right-0 h-px bg-foreground/5"
            style={{ top: `${25 * (i + 1)}%` }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 1.2 }}
          />
        ))}
      </div>

      {/* Large quote decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 pointer-events-none"
      >
        <Quote className="w-64 h-64 text-foreground" strokeWidth={1} />
      </motion.div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-sm font-mono text-accent">V-TRY</span>
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-mono text-muted-foreground tracking-wider">TESTIMONIALS</span>
            </motion.div>
          </div>

          {/* Navigation arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex gap-3"
          >
            <button
              onClick={prevSlide}
              className="w-12 h-12 border border-foreground/20 flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 group-hover:text-accent transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 border border-foreground/20 flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 group-hover:text-accent transition-colors" />
            </button>
          </motion.div>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[320px] md:min-h-[280px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 50,
                }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className={`absolute inset-0 ${activeIndex === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                <div className="p-8 md:p-12 border border-border/50 bg-card/30 backdrop-blur-sm">
                  {/* Quote icon */}
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-8">
                    <Quote className="w-5 h-5 text-accent" />
                  </div>

                  {/* Quote text */}
                  <blockquote className="font-sans text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    {testimonial.avatarImage ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.avatarImage} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-sans font-bold text-accent">
                        {testimonial.avatar}
                      </div>
                    )}
                    <div>
                      <span className="font-sans font-semibold block">{testimonial.author}</span>
                      <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                      {testimonial.tagline && (
                        <span className="text-xs text-muted-foreground/70 italic mt-1 block">{testimonial.tagline}</span>
                      )}
                    </div>
                  </div>

                  {/* Decorative corners */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent/30" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent/30" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative h-2 transition-all duration-300"
              >
                <div className={`w-12 h-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-accent' : 'bg-border hover:bg-border/80'
                }`} />
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-accent"
                    layoutId="active-indicator"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Client Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-32 md:mt-40 relative"
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm font-mono text-muted-foreground">AS SEEN ON</span>
            <div className="flex-1 h-px bg-border/50 ml-8" />
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
            
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-16 whitespace-nowrap py-4"
            >
              {[...clients, ...clients].map((client, index) => (
                <span
                  key={index}
                  className="text-xl font-sans font-bold text-muted-foreground/40 hover:text-foreground transition-colors duration-300 cursor-default"
                >
                  {client}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
