import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WorkSection from '@/components/sections/WorkSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { OrganizationSchema, WebsiteSchema, ProfessionalServiceSchema } from '@/components/StructuredData';

const values = [
  {
    title: 'Craft Over Speed',
    description: 'We believe in taking the time to get things right. Quality and attention to detail are never sacrificed for quick deliveries.',
    icon: '◇',
    number: '01',
  },
  {
    title: 'Bold Simplicity',
    description: 'The best solutions are often the simplest. We strip away the unnecessary to reveal what truly matters.',
    icon: '○',
    number: '02',
  },
  {
    title: 'Honest Collaboration',
    description: 'We work as partners, not vendors. Open communication and transparency guide every relationship.',
    icon: '△',
    number: '03',
  },
  {
    title: 'Continuous Growth',
    description: 'The digital landscape evolves constantly. We stay curious, learning and adapting to serve our clients better.',
    icon: '□',
    number: '04',
  },
];

const Index = () => {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Award-Winning Digital Agency"
        description="We craft exceptional digital experiences through strategic design, innovative development, and creative storytelling. Transform your brand with our award-winning team."
        url="https://studio.design"
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
          <section ref={valuesRef} className="py-24 md:py-32 relative overflow-hidden">
            <div className="container-wide mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-sm font-mono text-accent">03</span>
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-sm font-mono text-muted-foreground tracking-wider">WHAT WE BELIEVE</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-sans font-bold">
                  Principles that guide us.
                </h2>
              </motion.div>
            </div>

            <div className="w-full border-y border-border">
              <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] divide-y lg:divide-y-0 lg:divide-x divide-border">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="group relative flex-1 p-8 lg:p-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[3] bg-background hover:bg-accent/5 overflow-hidden flex flex-col justify-between min-h-[300px] lg:min-h-0"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-mono text-accent">
                        {value.number}
                      </span>
                      <span className="text-3xl text-foreground/20 group-hover:text-accent transition-colors duration-500 transform group-hover:rotate-180">
                        {value.icon}
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
                ))}
              </div>
            </div>
          </section>
          
          <AboutSection />
          <ServicesSection />
          <WorkSection />
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
