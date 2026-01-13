import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getBlogPostById } from '@/data/blog';
import SEO from '@/components/SEO';
import { ArticleSchema, BreadcrumbSchema } from '@/components/StructuredData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import step1Gif from '@/assets/step1.gif';
import step2Gif from '@/assets/step2.gif';
import step3Gif from '@/assets/step3.gif';
import clickGif from '@/assets/click.gif';

interface Chapter {
  id: string;
  title: string;
  content: string;
  image: string;
  hasDownloadButton?: boolean;
}

const chapters: Chapter[] = [
  {
    id: 'download-zip',
    title: '1. Download zip file',
    content: 'To begin, download the extension\'s ZIP file. When prompted, save the file in a location that is easy to find, such as your Desktop or Downloads folder.',
    image: step1Gif,
  },
  {
    id: 'unzip-file',
    title: '2. Unzip the file',
    content: 'Unzip the downloaded ZIP file and locate the folder called "dist" inside it.',
    image: step2Gif,
  },
  {
    id: 'load-extension',
    title: '3. Load the extension',
    content: 'Open Chrome and go to chrome://extensions, then enable Developer mode in the top-right corner. Click Load unpacked, select the dist folder, and Chrome will install the extension immediately.',
    image: step3Gif,
  },
  {
    id: 'create-profile',
    title: '4. Create Your Profile',
    content: 'Open the extension and sign in to quickly set up your profile and keep your V-TRY experience synced and secure.',
    image: 'placeholder',
  },
  {
    id: 'generate-persona',
    title: '5. Generate your Persona',
    content: 'If you didn\'t do it yet, add a clear photo of your face so V-TRY can create your personalized virtual model for accurate try-ons.',
    image: 'placeholder',
  },
  {
    id: 'shop-online',
    title: '6. Shop online and start generating',
    content: 'Browse your favorite stores and click the V-TRY banner on product images to preview outfits on yourself.',
    image: clickGif,
  },
];

const ChromeExtension = () => {
  const navigate = useNavigate();
  const post = getBlogPostById('future-of-brand-identity');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Extract title without number for TOC
  const getTitleWithoutNumber = (title: string) => {
    return title.replace(/^\d+\.\s*/, '');
  };

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/extension/download/extension.zip';
    link.download = 'extension.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-[60px] font-sans font-bold mb-4 leading-tight">Post not found</h1>
            <Link to="/download" className="text-accent hover:underline flex items-center justify-center gap-2 link-hover">
              <ArrowLeft className="w-4 h-4" /> Back to download
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background selection:bg-accent/20 flex flex-col">
      <SEO
        title="Step-by-step instructions"
        description="To begin, download the Chrome extension's ZIP file. When prompted, save the file in a location that is easy to find, such as your Desktop or Downloads folder."
        image="/Google_Chrome_icon_(February_2022).svg"
        url={`https://studio.design/download/chrome-extension`}
        type="article"
        author={post.author.name}
        publishedTime={post.date}
        section="Google Chrome extension"
        tags={['Google Chrome extension', 'Download', 'Extension']}
      />
      <ArticleSchema
        headline="Step-by-step instructions"
        description="To begin, download the Chrome extension's ZIP file. When prompted, save the file in a location that is easy to find, such as your Desktop or Downloads folder."
        image="/Google_Chrome_icon_(February_2022).svg"
        datePublished={post.date}
        author={{ name: post.author.name }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://studio.design' },
          { name: 'Download', url: 'https://studio.design/download' },
          { name: 'Step-by-step instructions', url: `https://studio.design/download/chrome-extension` },
        ]}
      />
      
      {/* Minimal Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-50"
        style={{ scaleX }}
      />

      <Navigation />

      <main className="flex-1 pt-24 pb-20">
        
        {/* 1. Header Section - Clean & Modernist */}
        <header className="container-wide mb-16 md:mb-24 relative">
           
           {/* Top Meta Bar */}
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-foreground/10 mb-12">
              <Link to="/download" className="group flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-foreground/60 hover:text-accent transition-colors">
                 <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                 <span>Back to Download</span>
              </Link>
           </div>

           {/* Title */}
           <div>
              <span className="inline-block px-3 py-1 mb-6 border border-foreground/20 rounded-full text-xs font-bold uppercase tracking-widest text-accent">
                 Google Chrome extension
              </span>
              <motion.h1 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 className="text-[40px] md:text-[50px] lg:text-[60px] font-sans font-bold leading-[1.05] tracking-tight text-foreground"
              >
                 Step-by-step instructions
              </motion.h1>
           </div>
        </header>

        {/* 3. Main Content Grid - Sticky TOC + Article */}
        <section className="container-wide">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              {/* Left: Sticky Table of Contents & Share */}
              <aside className="lg:col-span-3 lg:col-start-1 relative">
                 <div className="sticky top-32 space-y-12">

                    {/* TOC */}
                    <div>
                       <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-6">Contents</p>
                       <ul className="space-y-4 text-sm font-medium text-foreground/60">
                          {chapters.map((chapter, index) => (
                            <li 
                              key={chapter.id}
                              onClick={() => scrollToSection(chapter.id)}
                              className="flex items-center gap-3 hover:text-accent cursor-pointer transition-colors group"
                            >
                              <span className="w-1.5 h-1.5 bg-foreground/20 group-hover:bg-accent rounded-full transition-colors"></span>
                              {getTitleWithoutNumber(chapter.title)}
                            </li>
                          ))}
                       </ul>
                    </div>

                    {/* Download Button */}
                    <div>
                       <button
                          onClick={handleDownload}
                          className="w-full px-6 py-3 border border-foreground/20 rounded-sm text-foreground hover:bg-foreground hover:text-background transition-all font-medium text-sm uppercase tracking-widest"
                       >
                          Download extension
                       </button>
                    </div>
                 </div>
              </aside>

              {/* Right: Article Content */}
              <article className="lg:col-span-8 lg:col-start-5">
                 {chapters.map((chapter, index) => (
                    <div key={chapter.id} id={chapter.id} className="mb-16 last:mb-0 scroll-mt-24">
                       {/* Chapter Title */}
                       <h2 className="text-[32px] md:text-[40px] font-sans font-bold leading-tight mb-6 text-foreground">
                          {chapter.title}
                       </h2>
                       
                       {/* Chapter Content and Image - Side by Side */}
                       <div className="flex flex-col lg:flex-row gap-8 items-start">
                          {/* Chapter Content */}
                          <div className="flex-1">
                             <p className="text-lg text-foreground/80 leading-8">
                                {chapter.content}
                             </p>
                          </div>
                          
                          {/* Chapter Image */}
                          <div className="w-full lg:w-1/2 flex-shrink-0">
                             {chapter.image === 'placeholder' ? (
                                <div className="w-full aspect-video bg-foreground/5 border border-foreground/10 rounded-sm flex items-center justify-center">
                                   <p className="text-foreground/40 font-mono text-sm uppercase tracking-widest">Image Coming Soon</p>
                                </div>
                             ) : (
                                <img 
                                   src={chapter.image} 
                                   alt={chapter.title}
                                   className="w-full rounded-sm"
                                />
                             )}
                          </div>
                       </div>
                    </div>
                 ))}
              </article>

           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ChromeExtension;
