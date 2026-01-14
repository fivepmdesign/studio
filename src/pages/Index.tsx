import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganizationSchema, WebsiteSchema, ProfessionalServiceSchema } from '@/components/StructuredData';
import heroVideo from '@/assets/v-try.m4v?url';

const values = [
  {
    title: 'Images',
    description: 'Generate realistic on-you images from product photos, instantly and privately.',
    icon: '◇',
    number: '01',
  },
  {
    title: 'Videos',
    description: 'Create lifelike on-you videos to see movement, fit, and style.',
    icon: '○',
    number: '02',
  },
  {
    title: 'V-TRY Closet',
    description: 'Save, organize, and revisit all your try-ons from anywhere.',
    icon: '△',
    number: '03',
  },
  {
    title: 'AI Assistant',
    description: 'Get opinions, comparisons, and guidance while you explore looks.',
    icon: '□',
    number: '04',
  },
];

const Index = () => {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="V-TRY | AI Virtual Try-On for Realistic Outfit Previews"
        description="Try on clothes virtually with V-TRY. Upload clothing photos and get realistic AI outfit previews using your own face—fast, private, and easy."
        url="https://vtry.ai/"
      />
      <OrganizationSchema />
      <WebsiteSchema />
      <ProfessionalServiceSchema />

      <CustomCursor />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Noise overlay for texture */}
        <div className="noise-overlay" />
        
        <Navigation />
        
        <main>
          <HeroSection />
          
          {/* Values Section */}
          <section id="how-it-works" ref={valuesRef} className="py-24 md:py-32 relative overflow-hidden">
            <div className="container-wide mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-sm font-mono text-accent">V-TRY</span>
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-sm font-mono text-muted-foreground tracking-wider">HOW IT WORKS</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-sans font-bold">
                  Rethink your e-commerce experience
                </h2>
              </motion.div>
            </div>

            <div className="w-full border-y border-border">
              <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] divide-y lg:divide-y-0 lg:divide-x divide-border">
                {values.map((value, index) => {
                  return (
                  <div
                    key={value.title}
                    className="group relative flex-1 p-8 lg:p-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[3] bg-background hover:bg-accent/5 overflow-hidden flex flex-col justify-between min-h-[300px] lg:min-h-0"
                    onMouseEnter={() => {
                      if (videoRefs.current[index]) {
                        videoRefs.current[index]?.play();
                      }
                    }}
                    onMouseLeave={() => {
                      if (videoRefs.current[index]) {
                        videoRefs.current[index]?.pause();
                      }
                    }}
                  >
                    {/* Video for all blocks */}
                    <>
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={heroVideo}
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-black/80 z-[1]" />
                    </>
                    
                    <div className="flex justify-between items-start relative z-10">
                      <span className="text-sm font-mono text-accent">
                        {value.number}
                      </span>
                    </div>

                    <div className="relative z-10 mt-auto">
                      <h3 className="text-2xl lg:text-4xl font-sans font-bold mb-4 whitespace-nowrap group-hover:text-accent transition-colors duration-300">
                        {value.title}
                      </h3>
                      <div className="lg:max-w-md lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-8 lg:group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )})}
              </div>
            </div>
          </section>
          
          <ProcessSection />
          
          <TestimonialsSection />
          <CTASection />
        </main>
        
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
