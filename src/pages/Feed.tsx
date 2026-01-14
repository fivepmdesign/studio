import { motion, useInView, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Search, Eye, Play, ShoppingCart, Trash2, Loader2, Upload, X, Image as ImageIcon } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import feedImage from '@/assets/fdfe2e2o9llxd47t0tut.png';
import feedImage2 from '@/assets/a847e240-d5da-49f8-9d11-2ec062e0f2de_p6c4s8.png';
import feedVideo2 from '@/assets/879cf043-c82b-4225-975a-e824e9c5edb1.mp4';

const categories = [
  'All', 
  'zara.com', 
  'nike.com', 
  'prada.com',
  'amazon.com',
  'shopify.com',
  'etsy.com',
  'ebay.com',
  'asos.com',
  'hm.com',
  'uniqlo.com',
  'adidas.com',
  'gucci.com',
  'versace.com'
];

const popularFashionSites = [
  { name: 'Zara', url: 'https://www.zara.com' },
  { name: 'ASOS', url: 'https://www.asos.com' },
  { name: 'Nike', url: 'https://www.nike.com' },
  { name: 'H&M', url: 'https://www.hm.com' },
  { name: 'Uniqlo', url: 'https://www.uniqlo.com' },
  { name: 'Adidas', url: 'https://www.adidas.com' },
  { name: 'Gucci', url: 'https://www.gucci.com' },
  { name: 'Prada', url: 'https://www.prada.com' },
  { name: 'Versace', url: 'https://www.versace.com' },
  { name: 'Farfetch', url: 'https://www.farfetch.com' },
  { name: 'Net-a-Porter', url: 'https://www.net-a-porter.com' },
  { name: 'SSENSE', url: 'https://www.ssense.com' },
  { name: 'Mytheresa', url: 'https://www.mytheresa.com' },
  { name: 'Matches Fashion', url: 'https://www.matchesfashion.com' },
  { name: 'Nordstrom', url: 'https://www.nordstrom.com' },
  { name: 'Saks Fifth Avenue', url: 'https://www.saksfifthavenue.com' },
  { name: 'Revolve', url: 'https://www.revolve.com' },
  { name: 'Shopbop', url: 'https://www.shopbop.com' },
  { name: 'Boohoo', url: 'https://www.boohoo.com' },
  { name: 'Shein', url: 'https://www.shein.com' },
];

// Helper function to add v-try.ai referral parameter
const addVTryReferral = (url: string): string => {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}ref=v-try.ai`;
};

const FeedItem = ({ index, isInView, feedImage, feedImage2, feedVideo2 }: {
  index: number;
  isInView: boolean;
  feedImage: string;
  feedImage2: string;
  feedVideo2: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showHowDoILook, setShowHowDoILook] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || index !== 1 || !isHovered) return;

    const updateProgress = () => {
      if (video.duration) {
        setVideoProgress((video.currentTime / video.duration) * 100);
      }
    };

    // Use timeupdate event for progress updates
    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, [index, isHovered]);

  // Handle "How do I look" click
  useEffect(() => {
    if (showHowDoILook) {
      setIsLoading(true);
      setShowResult(false);
      
      // Simulate loading time
      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
        setShowResult(true);
      }, 2000);

      return () => clearTimeout(loadingTimer);
    } else {
      setIsLoading(false);
      setShowResult(false);
    }
  }, [showHowDoILook]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || index !== 1) return;

    if (isHovered) {
      video.play().catch(console.error);
    } else {
      video.pause();
      video.currentTime = 0;
      setVideoProgress(0);
    }
  }, [isHovered, index]);

  const isVideoItem = index === 1;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, delay: 0.3 + (index * 0.05), layout: { duration: 0.6, ease: [0.19, 1, 0.22, 1] } }}
      className="relative w-full mb-8 lg:mb-10 break-inside-avoid group"
      onMouseEnter={() => isVideoItem && setIsHovered(true)}
      onMouseLeave={() => isVideoItem && setIsHovered(false)}
    >
      {/* Decorative frame */}
      <motion.div 
        className="absolute -top-4 -right-4 w-full h-full border border-accent/30 group-hover:border-accent transition-colors duration-500"
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.6 + (index * 0.05), duration: 0.8 }}
      />
      
      <div className="relative overflow-hidden bg-secondary" data-feed-image>
        {/* Image Container - maintains aspect ratio */}
        <div className="relative" style={{ aspectRatio: '9/16' }}>
          {/* Static Image */}
          <motion.img
            src={index === 1 ? feedImage2 : feedImage}
            alt="V-TRY feed"
            className="w-full h-full object-cover"
            animate={{ 
              opacity: isVideoItem && isHovered ? 0 : 1,
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Video - only for index 1 */}
          {isVideoItem && (
            <motion.video
              ref={videoRef}
              src={feedVideo2}
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ 
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              style={{ pointerEvents: 'none' }}
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          
          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/50" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/50" />
        
          {/* Progress Slider - only for video item */}
          {isVideoItem && (
            <div className="absolute bottom-0 left-0 right-0 h-1.5 z-50 px-1">
              <div className="flex h-full gap-1.5">
                {/* Static image indicator - shorter, fixed on left */}
                <div className="h-full bg-accent/50 rounded-full" style={{ width: '25%' }} />
                {/* Video progress - longer, fills as video progresses */}
                <div className="h-full bg-background/30 flex-1 rounded-full relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-accent rounded-full origin-left"
                    animate={{ scaleX: videoProgress / 100 }}
                    transition={{ duration: 0.1, ease: [0.4, 0, 0.2, 1] }}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Icons vertical row - bottom right - positioned relative to image container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 + (index * 0.05) }}
            className="absolute bottom-8 right-8 flex flex-col gap-3 z-50"
          >
          {/* Delete Confirmation - shown when delete is clicked */}
          {showDeleteConfirm ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col gap-2 items-end"
            >
              <div className="px-3 py-1.5 bg-background/95 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-foreground mb-1">
                Delete?
              </div>
              <div className="flex gap-2">
                <motion.button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-3 py-1.5 bg-background/95 backdrop-blur-sm border border-destructive rounded-full text-xs font-medium text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Yes
                </motion.button>
                <motion.button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-3 py-1.5 bg-background/95 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-foreground hover:bg-muted transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  No
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <>
              <motion.div
                className="relative flex items-center gap-2"
                whileHover="hover"
                initial="default"
                animate={showDeleteConfirm ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              >
                <motion.button
                  onClick={() => setShowHowDoILook(!showHowDoILook)}
                  className="relative w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-accent transition-colors duration-300 group rounded-full hover:bg-accent/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Eye className="w-5 h-5" strokeWidth={1.5} />
                </motion.button>
                <motion.div
                  className="absolute right-full mr-2 flex items-center gap-2 whitespace-nowrap"
                  variants={{
                    default: { opacity: 0, x: 10, pointerEvents: 'none' },
                    hover: { opacity: 1, x: 0, pointerEvents: 'auto' }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-3 py-1.5 bg-background/95 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-foreground flex items-center gap-2">
                    <span>How do I look</span>
                    <span className="px-1.5 py-0.5 bg-accent/20 text-accent rounded-full text-[10px] font-semibold">5</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="relative flex items-center gap-2"
                whileHover="hover"
                initial="default"
                animate={showDeleteConfirm ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              >
                <motion.button
                  className="relative w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-accent transition-colors duration-300 group rounded-full hover:bg-accent/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Play className="w-5 h-5" strokeWidth={1.5} />
                </motion.button>
                <motion.div
                  className="absolute right-full mr-2 flex items-center gap-2 whitespace-nowrap"
                  variants={{
                    default: { opacity: 0, x: 10, pointerEvents: 'none' },
                    hover: { opacity: 1, x: 0, pointerEvents: 'auto' }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-3 py-1.5 bg-background/95 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-foreground flex items-center gap-2">
                    <span>Animate</span>
                    <span className="px-1.5 py-0.5 bg-accent/20 text-accent rounded-full text-[10px] font-semibold">20</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="relative flex items-center gap-2"
                whileHover="hover"
                initial="default"
                animate={showDeleteConfirm ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              >
                <motion.button
                  className="relative w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-accent transition-colors duration-300 group rounded-full hover:bg-accent/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                </motion.button>
                <motion.div
                  className="absolute right-full mr-2 flex items-center gap-2 whitespace-nowrap"
                  variants={{
                    default: { opacity: 0, x: 10, pointerEvents: 'none' },
                    hover: { opacity: 1, x: 0, pointerEvents: 'auto' }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-3 py-1.5 bg-background/95 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-foreground">
                    Buy now
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="relative flex items-center gap-2"
                whileHover="hover"
                initial="default"
              >
                <motion.button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="relative w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-destructive transition-colors duration-300 group rounded-full hover:bg-destructive/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Trash2 className="w-5 h-5" strokeWidth={1.5} />
                </motion.button>
                <motion.div
                  className="absolute right-full mr-2 flex items-center gap-2 whitespace-nowrap"
                  variants={{
                    default: { opacity: 0, x: 10, pointerEvents: 'none' },
                    hover: { opacity: 1, x: 0, pointerEvents: 'auto' }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-3 py-1.5 bg-background/95 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-foreground">
                    Delete
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
          </motion.div>
        </div>

        {/* How do I look Panel - expands at bottom */}
        <AnimatePresence>
          {showHowDoILook && (
            <motion.div
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-sm"
            >
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <Loader2 className="w-4 h-4 text-accent animate-spin" />
                      <span className="text-sm font-mono text-foreground">Thinking...</span>
                    </motion.div>
                  ) : showResult ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="space-y-3"
                    >
                      <p className="text-sm font-mono text-foreground leading-relaxed">
                        This outfit complements your style beautifully. The fit appears well-proportioned, 
                        and the color palette works harmoniously with your complexion. The silhouette creates 
                        an elegant, modern look that would work well for both casual and semi-formal occasions.
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Feed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [tagSearchQuery, setTagSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoadingUrl, setIsLoadingUrl] = useState(false);
  // Load generationsEnabled from localStorage (synced with settings modal)
  const [hasGenerations, setHasGenerations] = useState(() => {
    const saved = localStorage.getItem('vtry_settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.generationsEnabled ?? false;
      } catch {
        return false;
      }
    }
    return false;
  });
  const [selectedSites, setSelectedSites] = useState<typeof popularFashionSites>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const filterRef = useRef(null);
  const filterInView = useInView(filterRef, { once: true, margin: '-100px' });

  // Listen for localStorage changes to sync with SettingsModal
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('vtry_settings');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.generationsEnabled !== undefined) {
            setHasGenerations(parsed.generationsEnabled);
          }
        } catch {
          // Ignore parse errors
        }
      }
    };

    // Listen for storage events (when localStorage is updated from another tab/window)
    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically for changes (for same-tab updates)
    const interval = setInterval(handleStorageChange, 100);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // Randomly select 3-5 fashion sites on each page load
  useEffect(() => {
    const shuffled = [...popularFashionSites].sort(() => Math.random() - 0.5);
    const count = Math.floor(Math.random() * 3) + 3; // 3-5 sites
    setSelectedSites(shuffled.slice(0, count));
  }, []);

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!tagSearchQuery) return categories;
    const query = tagSearchQuery.toLowerCase();
    return categories.filter(category => 
      category.toLowerCase().includes(query)
    );
  }, [tagSearchQuery]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 30,
      y: (e.clientY - rect.top - rect.height / 2) / 30,
    });
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleFileSelect(file);
    }
  };

  const handleCloseModal = () => {
    setIsUploadModalOpen(false);
    setSelectedFile(null);
    setImageUrl('');
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  const handleImportFromUrl = async () => {
    if (!imageUrl.trim()) return;
    
    setIsLoadingUrl(true);
    try {
      // Validate URL
      const url = new URL(imageUrl);
      
      // Fetch the image
      const response = await fetch(imageUrl, { mode: 'cors' });
      if (!response.ok) throw new Error('Failed to fetch image');
      
      const blob = await response.blob();
      if (!blob.type.startsWith('image/')) {
        throw new Error('URL does not point to an image');
      }
      
      // Create a file from the blob
      const file = new File([blob], url.pathname.split('/').pop() || 'image.jpg', { type: blob.type });
      handleFileSelect(file);
      setImageUrl('');
    } catch (error) {
      console.error('Error importing from URL:', error);
      alert('Failed to import image from URL. Please check the URL and try again.');
    } finally {
      setIsLoadingUrl(false);
    }
  };

  const handleUpload = () => {
    if (selectedFile || previewUrl) {
      // TODO: Implement actual upload logic
      console.log('Uploading file:', selectedFile || previewUrl);
      handleCloseModal();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Feed"
        description="V-TRY feed page"
        url="https://studio.design/feed"
      />


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Noise overlay for texture */}
        <div className="noise-overlay" />
        
        <Navigation />
        
        <main>
          <section 
            ref={ref} 
            onMouseMove={handleMouseMove}
            className="section-padding bg-secondary/30 relative overflow-hidden"
          >
            {/* Grid overlay */}
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

            {/* Floating accent orb */}
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none"
              style={{
                x: mousePosition.x * 2,
                y: mousePosition.y * 2,
                top: '20%',
                right: '10%',
              }}
            />

            {/* Header and Filter */}
            <div ref={filterRef} className="container-wide relative z-10 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={filterInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-accent">V-TRY</span>
                    <div className="h-px w-12 bg-accent" />
                    <span className="text-sm font-mono text-muted-foreground tracking-wider">CLOSET</span>
                  </div>
                  
                  {hasGenerations && (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={filterInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                      onClick={() => setIsUploadModalOpen(true)}
                      className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                    >
                      Upload
                      <Upload className="w-4 h-4" strokeWidth={2} />
                    </motion.button>
                  )}
                </div>

                {hasGenerations && (
                  <div className="border border-border bg-card">
                    <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border">
                      {/* Categories */}
                      <div className="flex-1 overflow-x-auto no-scrollbar">
                        <div className="flex items-center h-full min-h-[4rem]">
                          {filteredCategories.map((category) => (
                            <button
                              key={category}
                              onClick={() => setActiveCategory(category)}
                              className={`group relative h-16 px-8 flex items-center justify-center text-sm font-mono uppercase tracking-wider transition-all hover:bg-accent hover:text-accent-foreground whitespace-nowrap border-r border-border last:border-r-0 ${
                                activeCategory === category 
                                  ? 'bg-accent text-accent-foreground' 
                                  : 'text-muted-foreground bg-transparent'
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Search */}
                      <motion.div 
                        className={`relative group bg-background/50 hover:bg-background transition-colors ${
                          isSearchExpanded ? 'w-full md:w-[400px]' : 'w-16'
                        }`}
                        initial={false}
                        transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                      >
                        <div className="relative h-16 flex items-center">
                          {isSearchExpanded ? (
                            <div className="w-full px-6 flex items-center">
                              <Search className="w-5 h-5 text-muted-foreground mr-4 flex-shrink-0" />
                              <input 
                                type="text"
                                placeholder="Search websites"
                                value={tagSearchQuery}
                                onChange={(e) => setTagSearchQuery(e.target.value)}
                                onBlur={() => {
                                  if (!tagSearchQuery) {
                                    setIsSearchExpanded(false);
                                  }
                                }}
                                autoFocus
                                className="flex-1 bg-transparent border-none outline-none text-sm font-mono text-foreground placeholder:text-muted-foreground/50 h-full min-w-0"
                              />
                            </div>
                          ) : (
                            <button
                              onClick={() => setIsSearchExpanded(true)}
                              className="w-full h-16 flex items-center justify-center hover:bg-background transition-colors"
                            >
                              <Search className="w-5 h-5 text-muted-foreground" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            <div className="container-wide relative z-10">
              {hasGenerations ? (
                <LayoutGroup>
                  <motion.div 
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3"
                    style={{ columnGap: '2rem' }}
                    transition={{ layout: { duration: 0.6, ease: [0.19, 1, 0.22, 1] } }}
                  >
                    {Array.from({ length: 16 }).map((_, index) => (
                      <FeedItem
                        key={index}
                        index={index}
                        isInView={isInView}
                        feedImage={feedImage}
                        feedImage2={feedImage2}
                        feedVideo2={feedVideo2}
                      />
                    ))}
                  </motion.div>
                </LayoutGroup>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center justify-center min-h-[60vh] py-16"
                >
                  <div className="max-w-2xl w-full text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-card border border-border p-8 md:p-12 rounded-lg"
                    >
                      <h2 className="text-2xl md:text-3xl font-sans font-bold mb-4 text-foreground">
                        Your closet is empty
                      </h2>
                      <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                        Start building your V-TRY closet by uploading images or browsing your favorite e-commerce websites and clicking on V-TRY banners to create your first generation.
                      </p>
                      
                      <div className="flex flex-col gap-6">
                        <motion.button
                          onClick={() => setIsUploadModalOpen(true)}
                          className="w-full px-6 py-3 rounded-lg font-mono uppercase tracking-wider text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Upload className="w-4 h-4" />
                          Upload or Import
                        </motion.button>
                        
                        <div className="text-center">
                          <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">
                            Or browse popular websites
                          </p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {selectedSites.map((site, index) => (
                              <motion.a
                                key={site.name}
                                href={addVTryReferral(site.url)}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider border border-border hover:border-accent hover:bg-accent/5 transition-colors text-foreground"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {site.name}
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </motion.div>

      {/* Upload Modal */}
      <Dialog open={isUploadModalOpen} onOpenChange={(open) => {
        if (!open) {
          handleCloseModal();
        } else {
          setIsUploadModalOpen(true);
        }
      }}>
        <DialogContent 
          className="fixed inset-0 z-50 w-full h-full max-w-none max-h-none m-0 p-0 border-0 rounded-none [&>button]:hidden"
          onEscapeKeyDown={handleCloseModal}
          onInteractOutside={(e) => {
            e.preventDefault();
            handleCloseModal();
          }}
          onPointerDownOutside={(e) => {
            e.preventDefault();
            handleCloseModal();
          }}
        >
          {/* Wrapper to catch background clicks */}
          <div 
            className="fixed inset-0"
            onClick={(e) => {
              // Close if clicking the wrapper itself
              if (e.target === e.currentTarget) {
                handleCloseModal();
              }
            }}
          >
            {/* Content container */}
            <div 
              className="relative w-full h-full flex flex-col bg-background/95 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={handleCloseModal}
              className="absolute top-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/10 hover:border-accent transition-all duration-300 group"
            >
              <X className="w-5 h-5 text-foreground/70 group-hover:text-accent transition-colors" strokeWidth={2} />
            </motion.button>

            {/* Content */}
            <div 
              className="flex-1 flex items-center justify-center p-8 md:p-16 upload-content-area"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="w-full max-w-4xl upload-content-area"
                onClick={(e) => e.stopPropagation()}
              >
                {/* URL Import Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-3 border border-border bg-card p-4 rounded-lg">
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleImportFromUrl();
                        }
                      }}
                      placeholder="Paste image URL here"
                      className="flex-1 bg-transparent border-none outline-none text-sm font-mono text-foreground placeholder:text-muted-foreground/50"
                      disabled={isLoadingUrl}
                    />
                    <motion.button
                      onClick={handleImportFromUrl}
                      disabled={!imageUrl.trim() || isLoadingUrl}
                      className="px-6 py-2 text-sm font-mono uppercase tracking-wider bg-accent text-accent-foreground hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                      whileHover={{ scale: isLoadingUrl || !imageUrl.trim() ? 1 : 1.05 }}
                      whileTap={{ scale: isLoadingUrl || !imageUrl.trim() ? 1 : 0.95 }}
                    >
                      {isLoadingUrl ? 'Loading...' : 'Import'}
                    </motion.button>
                  </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">OR</span>
                  <div className="flex-1 h-px bg-border" />
                </motion.div>

                {/* Upload Area */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`
                      relative border-2 border-dashed rounded-lg transition-all duration-300
                      ${isDragging 
                        ? 'border-accent bg-accent/5 scale-[1.02]' 
                        : 'border-border hover:border-accent/50'
                      }
                      ${previewUrl ? 'border-solid bg-card' : 'bg-secondary/30'}
                    `}
                  >
                    {previewUrl ? (
                      <div className="relative p-8 md:p-12">
                        <div className="relative aspect-[9/16] max-w-md mx-auto overflow-hidden rounded-lg border border-border bg-secondary">
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                        </div>
                        <div className="mt-6 text-center">
                          <p className="text-sm font-mono text-foreground mb-2">
                            {selectedFile?.name}
                          </p>
                          <p className="text-xs text-muted-foreground mb-6">
                            {(selectedFile?.size ? selectedFile.size / 1024 / 1024 : 0).toFixed(2)} MB
                          </p>
                          <div className="flex items-center justify-center gap-4">
                            <motion.button
                              onClick={() => {
                                setSelectedFile(null);
                                if (previewUrl) {
                                  URL.revokeObjectURL(previewUrl);
                                  setPreviewUrl(null);
                                }
                                if (fileInputRef.current) {
                                  fileInputRef.current.value = '';
                                }
                              }}
                              className="px-6 py-2.5 text-sm font-mono uppercase tracking-wider border border-border hover:bg-muted transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Remove
                            </motion.button>
                            <motion.button
                              onClick={handleUpload}
                              className="px-6 py-2.5 text-sm font-mono uppercase tracking-wider bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Upload to V-TRY
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-12 md:p-16">
                        <div className="flex flex-col items-center justify-center text-center">
                          <motion.div
                            animate={isDragging ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6"
                          >
                            <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                              <ImageIcon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                            </div>
                          </motion.div>
                          
                          <h3 className="text-xl font-sans font-bold mb-2">
                            {isDragging ? 'Drop your image here' : 'Drag & drop your image'}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-8 font-mono">
                            or click to browse
                          </p>

                          <motion.button
                            onClick={() => fileInputRef.current?.click()}
                            className="px-8 py-3 text-sm font-mono uppercase tracking-wider bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Select File
                          </motion.button>

                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileInputChange}
                            className="hidden"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent/30"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-accent/30"
                />
              </div>
            </div>
          </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Feed;
