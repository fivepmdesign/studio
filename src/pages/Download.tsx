import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Smartphone, MessageSquare } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const Download = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const featuredPost = blogPosts.find(p => p.featured);
  const navigate = useNavigate();

  const handleChromeExtensionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Download the file
    const link = document.createElement('a');
    link.href = '/extension/download/extension.zip';
    link.download = 'extension.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Redirect to the chrome extension page
    navigate('/download/chrome-extension');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <meta name="theme-color" content="#FF6B4A" />
      </Helmet>
      <Navigation />

      {/* Featured Post */}
      {featuredPost && (
        <section ref={heroRef} className="pb-16 md:pb-24 pt-24 md:pt-32">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-mono text-accent">V-TRY</span>
                <div className="h-px w-12 bg-accent" />
                <span className="text-sm font-mono text-muted-foreground tracking-wider">DOWNLOAD</span>
              </div>

              <div
                onClick={handleChromeExtensionClick}
                className="group block bg-card border border-border overflow-hidden transition-colors hover:border-accent/50 cursor-pointer"
              >
                 <div className="flex flex-col md:flex-row h-full md:h-[400px]">
                    {/* Image */}
                    <div className="w-full md:w-2/5 relative overflow-hidden h-[250px] md:h-full border-b md:border-b-0 md:border-r border-border">
                       <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 bg-background/90 backdrop-blur text-xs font-mono font-bold uppercase tracking-wider border border-border">
                             AVAILABLE
                          </span>
                       </div>
                       {/* Branded faded background */}
                       <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent" />
                       {/* Chrome Icon */}
                       <div className="absolute inset-0 flex items-center justify-center p-8">
                          <motion.img 
                             src="/Google_Chrome_icon_(February_2022).svg" 
                             alt="Google Chrome extension" 
                             className="w-full h-full max-w-[100px] max-h-[100px] object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                          />
                       </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
                       <div className="flex items-center gap-2 mb-6 text-accent">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 bg-accent"></span>
                          </span>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                             Browser extension
                          </span>
                       </div>
                       
                       <h2 className="text-2xl md:text-4xl font-sans font-bold leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                          Google Chrome extension
                       </h2>
                       
                       <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                          To begin, download the Chrome extension's ZIP file. When prompted, save the file in a location that is easy to find, such as your Desktop or Downloads folder.
                       </p>
                       
                       <div className="flex items-center justify-end mt-auto pt-6 border-t border-border/50">
                          <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300">
                             <ArrowUpRight className="w-5 h-5 transition-transform duration-500 ease-in-out group-hover:rotate-[135deg]" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Safari Extension Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <div className="group block bg-card border border-border overflow-hidden transition-colors hover:border-accent/50 hover:bg-muted/50">
                 <div className="flex flex-col md:flex-row h-full md:h-[400px]">
                    {/* Image */}
                    <div className="w-full md:w-2/5 relative overflow-hidden h-[250px] md:h-full border-b md:border-b-0 md:border-r border-border">
                       <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 bg-background/90 backdrop-blur text-xs font-mono font-bold uppercase tracking-wider border border-border">
                             COMING SOON
                          </span>
                       </div>
                       {/* Branded faded background */}
                       <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent" />
                       {/* Safari Icon */}
                       <div className="absolute inset-0 flex items-center justify-center p-8">
                          <motion.img 
                             src="/Safari_browser_logo.svg" 
                             alt="Safari extension" 
                             className="w-full h-full max-w-[100px] max-h-[100px] object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                          />
                       </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
                       <div className="flex items-center gap-2 mb-6 text-accent">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 bg-accent"></span>
                          </span>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                             Browser extension
                          </span>
                       </div>
                       
                       <h2 className="text-2xl md:text-4xl font-sans font-bold leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                          Safari extension
                       </h2>
                       
                       <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                          The Safari extension for V-TRY is coming soon. Stay tuned for updates on when you can try on clothes directly in Safari on your Mac.
                       </p>
                       
                       <div className="mt-auto pt-6 border-t border-border/50">
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* iOS Shortcut Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <div className="group block bg-card border border-border overflow-hidden transition-colors hover:border-accent/50 hover:bg-muted/50">
                 <div className="flex flex-col md:flex-row h-full md:h-[400px]">
                    {/* Image */}
                    <div className="w-full md:w-2/5 relative overflow-hidden h-[250px] md:h-full border-b md:border-b-0 md:border-r border-border">
                       <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 bg-background/90 backdrop-blur text-xs font-mono font-bold uppercase tracking-wider border border-border">
                             COMING SOON
                          </span>
                       </div>
                       {/* Branded faded background */}
                       <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent" />
                       {/* iOS Icon */}
                       <div className="absolute inset-0 flex items-center justify-center p-8">
                          <motion.div 
                             className="w-full h-full max-w-[100px] max-h-[100px] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110"
                          >
                             <Smartphone className="w-16 h-16 text-foreground/80" />
                          </motion.div>
                       </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
                       <div className="flex items-center gap-2 mb-6 text-accent">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 bg-accent"></span>
                          </span>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                             For Apple devices
                          </span>
                       </div>
                       
                       <h2 className="text-2xl md:text-4xl font-sans font-bold leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                          iOS shortcut
                       </h2>
                       
                       <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                          The iOS shortcut for V-TRY is coming soon. Get ready to try on clothes directly from your iPhone or iPad using our native iOS integration.
                       </p>
                       
                       <div className="mt-auto pt-6 border-t border-border/50">
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Text Messaging Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-8"
            >
              <div className="group block bg-card border border-border overflow-hidden transition-colors hover:border-accent/50 hover:bg-muted/50">
                 <div className="flex flex-col md:flex-row h-full md:h-[400px]">
                    {/* Image */}
                    <div className="w-full md:w-2/5 relative overflow-hidden h-[250px] md:h-full border-b md:border-b-0 md:border-r border-border">
                       <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 bg-background/90 backdrop-blur text-xs font-mono font-bold uppercase tracking-wider border border-border">
                             COMING SOON
                          </span>
                       </div>
                       {/* Branded faded background */}
                       <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent" />
                       {/* Message Icon */}
                       <div className="absolute inset-0 flex items-center justify-center p-8">
                          <motion.div 
                             className="w-full h-full max-w-[100px] max-h-[100px] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110"
                          >
                             <MessageSquare className="w-16 h-16 text-foreground/80" />
                          </motion.div>
                       </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
                       <div className="flex items-center gap-2 mb-6 text-accent">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 bg-accent"></span>
                          </span>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                             for regular mobile devices
                          </span>
                       </div>
                       
                       <h2 className="text-2xl md:text-4xl font-sans font-bold leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                          Text messaging
                       </h2>
                       
                       <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                          Send pictures via text message and receive your virtual try-on generations directly to your phone. After logging in, simply text your photos to get instant results.
                       </p>
                       
                       <div className="mt-auto pt-6 border-t border-border/50">
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Download;
