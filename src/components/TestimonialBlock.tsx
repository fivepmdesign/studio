import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
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

interface TestimonialBlockProps {
  autoRotate?: boolean;
  showNavigation?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export const TestimonialBlock = ({ 
  autoRotate = true, 
  showNavigation = true,
  showIndicators = true,
  className = '' 
}: TestimonialBlockProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [componentWidth, setComponentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setComponentWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const shouldShowIndicators = showIndicators && componentWidth >= 600;

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Navigation arrows */}
      {showNavigation && (
        <div className="flex gap-3 mb-8">
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
        </div>
      )}

      {/* Testimonial Card */}
      <div className="relative">
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
              <div className="p-8 md:p-12 border border-border/50 bg-card/30 backdrop-blur-sm h-full">
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-8">
                  <Quote className="w-5 h-5 text-accent" />
                </div>

                {/* Quote text */}
                <blockquote className="font-sans text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className={`flex items-center gap-4 pt-6 border-t border-border/50 ${shouldShowIndicators ? 'xl:mb-6' : ''}`}>
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

                {/* Indicators - shown below author name on xl screens and above, only if component width >= 600px */}
                {shouldShowIndicators && (
                  <div className="hidden xl:flex justify-start gap-3">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className="group relative h-2 transition-all duration-300"
                      >
                        <div className={`w-12 h-full transition-all duration-300 ${
                          activeIndex === idx ? 'bg-accent' : 'bg-border hover:bg-border/80'
                        }`} />
                        {activeIndex === idx && (
                          <motion.div
                            className="absolute inset-0 bg-accent"
                            layoutId="active-indicator"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* Decorative corners */}
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent/30" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicators - shown at bottom on screens smaller than xl, but hidden on mobile and when component < 600px */}
        {shouldShowIndicators && (
          <div className="hidden md:flex xl:hidden justify-center gap-3 mt-8">
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
                    layoutId="active-indicator-bottom"
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialBlock;
