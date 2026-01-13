import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Check, Info } from 'lucide-react';
import SEO from '@/components/SEO';
import { useNavigate } from 'react-router-dom';
import guidance1 from '@/assets/guidance1.jpg';
import guidance2 from '@/assets/guidance2.jpg';
import guidance3 from '@/assets/guidance3.jpg';
import guidance4 from '@/assets/guidance4.jpg';
import guidance5 from '@/assets/guidance5.jpg';
import guidance6 from '@/assets/guidance6.jpg';

const clothingSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const Onboarding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string; submessage: string } | null>(null);
  const [currentGuidanceIndex, setCurrentGuidanceIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentStep = 1;
  const totalSteps = 4;

  // Guidance photos - showing examples of bad and good photos
  const guidancePhotos = [
    {
      image: guidance1,
      isBad: true,
      title: 'Pick a well-lit picture',
      subtitle: 'This photo would be too dark'
    },
    {
      image: guidance2,
      isBad: false,
      title: 'Pick a well-lit picture',
      subtitle: 'This photo has good lighting'
    },
    {
      image: guidance3,
      isBad: true,
      title: 'Remove accessories',
      subtitle: 'This photo has glasses or hats'
    },
    {
      image: guidance4,
      isBad: false,
      title: 'Remove accessories',
      subtitle: 'This photo has no accessories'
    },
    {
      image: guidance5,
      isBad: true,
      title: 'Must be a single subject',
      subtitle: 'This photo has multiple people'
    },
    {
      image: guidance6,
      isBad: false,
      title: 'Must be a single subject',
      subtitle: 'This photo has a single subject'
    },
  ];

  // Auto-rotate guidance photos every 5 seconds
  useEffect(() => {
    if (guidancePhotos.length > 1) {
      const interval = setInterval(() => {
        setCurrentGuidanceIndex((prev) => (prev + 1) % guidancePhotos.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [guidancePhotos.length]);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    
    // Simulate image analysis
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      // Simulate feedback based on image (in real app, this would come from API)
      setFeedback({
        message: 'Pick a well-lit picture',
        submessage: 'This photo would be too dark'
      });
    }, 1500);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
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

  const handleStartGeneration = () => {
    if (selectedFile && selectedSize) {
      // TODO: Navigate to step 2 or handle the generation
      console.log('Starting generation with:', { file: selectedFile, size: selectedSize });
      // For now, we'll just log - in real app, navigate to next step
      // navigate('/onboarding/2');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Onboarding | V-TRY"
        description="Complete your V-TRY onboarding"
        url="https://vtry.ai/onboarding"
      />
      
      <main className="min-h-screen">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel - Input Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col lg:justify-center p-8 md:p-12 lg:p-16 bg-background lg:border-r border-b lg:border-b-0 border-border overflow-y-auto"
          >
            {/* Step Indicator - Sticky on mobile */}
            <div className="mb-8 flex items-center gap-4 lg:static sticky top-0 bg-background z-10 py-4 lg:py-0 -mx-8 md:-mx-12 lg:mx-0 px-8 md:px-12 lg:px-0">
              <span className="text-sm font-mono text-accent">V-TRY</span>
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-mono text-muted-foreground tracking-wider">
                {currentStep}/{totalSteps}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold mb-8 text-foreground">
              Upload a photo of your face
            </h1>

            {/* Upload Area */}
            <div className="mb-8">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`
                  relative border-2 border-dashed rounded-lg transition-all duration-300 cursor-pointer
                  ${isDragging 
                    ? 'border-accent bg-accent/5 scale-[1.02]' 
                    : 'border-border hover:border-accent/50'
                  }
                  ${previewUrl ? 'border-solid bg-card' : 'bg-secondary/30'}
                  flex flex-col items-center justify-center
                  min-h-[200px] max-h-[300px] h-[200px]
                `}
              >
                {previewUrl ? (
                  <div className="relative w-full h-full">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-6">
                    <Camera className="w-10 h-10 text-muted-foreground mb-3" strokeWidth={1.5} />
                    <p className="text-sm text-muted-foreground text-center mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground text-center">
                      Please choose a picture without glasses or hats
                    </p>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                className="hidden"
              />
            </div>

            {/* Privacy Banner */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-8 p-4 bg-accent/10 border border-accent/30 rounded-lg"
            >
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Your persona photo and all V-TRY generations are private, visible only to you, and are not shared, sold, or used to train AI models.
                </p>
              </div>
            </motion.div>

            {/* Clothing Size Selection */}
            <div className="mb-8">
              <h2 className="text-lg md:text-xl font-sans font-semibold mb-4 text-foreground">
                What clothing size do you usually wear?
              </h2>
              <div className="flex items-center gap-2 md:gap-4 flex-nowrap overflow-x-auto pb-2 -mx-2 px-2 md:mx-0 md:px-0 md:overflow-visible md:flex-wrap">
                {clothingSizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center flex-shrink-0
                      font-mono text-sm font-semibold
                      ${selectedSize === size
                        ? 'bg-accent border-accent text-accent-foreground'
                        : 'bg-transparent border-border text-foreground hover:border-accent/50'
                      }
                    `}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Start Generation Button */}
            <motion.button
              onClick={handleStartGeneration}
              disabled={!selectedFile || !selectedSize}
              className={`
                w-full py-4 px-6 rounded-lg font-mono uppercase tracking-wider text-sm font-semibold
                transition-all duration-300
                ${selectedFile && selectedSize
                  ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
                }
              `}
              whileHover={selectedFile && selectedSize ? { scale: 1.02 } : {}}
              whileTap={selectedFile && selectedSize ? { scale: 0.98 } : {}}
            >
              Start generation
            </motion.button>
          </motion.div>

          {/* Right Panel - Guidance Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:flex-1 relative bg-secondary/30 overflow-hidden h-[400px] lg:h-screen flex"
          >
            {previewUrl ? (
              <div className="relative w-full h-full">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                
                {/* Feedback Overlay */}
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-8 left-8 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 max-w-xs"
                  >
                    <p className="text-sm font-sans font-semibold text-foreground mb-1">
                      {feedback.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {feedback.submessage}
                    </p>
                  </motion.div>
                )}

                {/* Loading Indicator */}
                {isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-accent/20"
                  >
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="relative w-full h-full flex flex-col flex-1">
                {/* Guidance Slider */}
                <div className="flex-1 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {guidancePhotos.map((photo, index) => {
                      if (index !== currentGuidanceIndex) return null;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <img
                            src={photo.image}
                            alt="Guidance example"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>

                  {/* Navigation Controls */}
                  {guidancePhotos.length > 1 && (
                    <div className="absolute top-8 right-8 z-10 flex items-center gap-4">
                      {/* Number Indicator */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-mono text-accent">
                          {String(currentGuidanceIndex + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px w-8 bg-border" />
                        <span className="text-sm font-mono text-muted-foreground">
                          {String(guidancePhotos.length).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Navigation Arrows */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => setCurrentGuidanceIndex((prev) => 
                            prev === 0 ? guidancePhotos.length - 1 : prev - 1
                          )}
                          className="w-12 h-12 border border-foreground/20 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft className="w-5 h-5 group-hover:text-accent transition-colors" />
                        </button>
                        <button
                          onClick={() => setCurrentGuidanceIndex((prev) => 
                            (prev + 1) % guidancePhotos.length
                          )}
                          className="w-12 h-12 border border-foreground/20 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
                          aria-label="Next photo"
                        >
                          <ChevronRight className="w-5 h-5 group-hover:text-accent transition-colors" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Guidance Text Overlay */}
                <div className="absolute bottom-8 left-8 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-6 w-fit"
                  >
                    <h3 className="text-lg font-sans font-semibold text-foreground mb-2">
                      {guidancePhotos[currentGuidanceIndex]?.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {guidancePhotos[currentGuidanceIndex]?.isBad ? (
                        <X className="w-5 h-5 text-destructive flex-shrink-0" strokeWidth={2} />
                      ) : (
                        <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2} />
                      )}
                      <p className="text-sm text-muted-foreground">
                        {guidancePhotos[currentGuidanceIndex]?.subtitle}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Onboarding;
