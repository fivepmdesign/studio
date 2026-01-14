import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Check, Info, Loader2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import guidance1 from '@/assets/guidance1.jpg';
import guidance2 from '@/assets/guidance2.jpg';
import guidance3 from '@/assets/guidance3.jpg';
import guidance4 from '@/assets/guidance4.jpg';
import guidance5 from '@/assets/guidance5.jpg';
import guidance6 from '@/assets/guidance6.jpg';
import frontView from '@/assets/Front view 1.png';
import backView from '@/assets/Back view.png';
import sideView from '@/assets/Side view.png';
import threeFourView from '@/assets/3-4 view.png';

const clothingSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

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

interface AddPersonaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPersonaModal = ({ isOpen, onClose }: AddPersonaModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string; submessage: string } | null>(null);
  const [currentGuidanceIndex, setCurrentGuidanceIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
      setSelectedFile(null);
      setPreviewUrl(null);
      setSelectedSize('M');
      setIsDragging(false);
      setIsAnalyzing(false);
      setFeedback(null);
      setCurrentGuidanceIndex(0);
      setIsGenerating(false);
    }
  }, [isOpen]);

  // Auto-rotate guidance photos every 5 seconds
  useEffect(() => {
    if (guidancePhotos.length > 1 && currentStep === 1 && isOpen) {
      const interval = setInterval(() => {
        setCurrentGuidanceIndex((prev) => (prev + 1) % guidancePhotos.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentStep, isOpen]);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    
    // Simulate image analysis
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
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
      setCurrentStep(2);
      setIsGenerating(true);
      // Simulate generation process
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep(3);
      }, 3000);
    }
  };

  const handleContinue = () => {
    setCurrentStep(4);
  };

  const handleComplete = () => {
    // TODO: Add persona to list
    onClose();
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        handleCloseModal();
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
        <div 
          className="fixed inset-0"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseModal();
            }
          }}
        >
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
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              {/* Left Panel - Input Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex flex-col lg:justify-center p-8 md:p-12 lg:p-16 bg-background lg:border-r border-b lg:border-b-0 border-border overflow-y-auto"
              >
                {/* Step Indicator */}
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-sm font-mono text-accent">V-TRY</span>
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-sm font-mono text-muted-foreground tracking-wider">
                    {currentStep}/{totalSteps}
                  </span>
                </div>

                {/* Step 1: Upload Photo */}
                {currentStep === 1 && (
                  <>
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
                      animate={{ opacity: 1, y: 0 }}
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
                  </>
                )}

                {/* Step 2: Generation in Progress */}
                {currentStep === 2 && (
                  <>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold mb-8 text-foreground">
                      Generation in progress
                    </h1>
                    <div className="mb-8">
                      <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                        We are generating your Persona image. Average waiting time is around 2 minutes. Please wait, or feel free to browse around, we will notify you once your profile is ready.
                      </p>
                      <div className="flex items-center gap-4">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader2 className="w-8 h-8 text-accent" strokeWidth={2} />
                        </motion.div>
                        <span className="text-sm font-mono text-muted-foreground">
                          Processing...
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* Step 3: Persona Ready */}
                {currentStep === 3 && (
                  <>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold mb-4 text-foreground">
                      Your Persona is ready
                    </h1>
                    <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                      We've generated your personalized persona from multiple angles. These images will be used to create realistic try-on experiences when you shop online. You can view and manage your persona anytime from your account.
                    </p>
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      onClick={handleContinue}
                      className="w-full py-4 px-6 rounded-lg font-mono uppercase tracking-wider text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Continue
                    </motion.button>
                  </>
                )}

                {/* Step 4: Complete */}
                {currentStep === 4 && (
                  <>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold mb-4 text-foreground">
                      Persona added successfully
                    </h1>
                    <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                      Your new persona has been added to your account. You can now use it for try-on generations.
                    </p>
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      onClick={handleComplete}
                      className="w-full py-4 px-6 rounded-lg font-mono uppercase tracking-wider text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Done
                    </motion.button>
                  </>
                )}
              </motion.div>

              {/* Right Panel - Visual Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:flex-1 relative bg-secondary/30 overflow-hidden h-[400px] lg:h-auto flex"
              >
                {currentStep === 1 && (
                  <>
                    {previewUrl ? (
                      <div className="relative w-full h-full">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
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

                          {guidancePhotos.length > 1 && (
                            <div className="absolute top-8 left-8 z-10 flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-mono text-accent">
                                  {String(currentGuidanceIndex + 1).padStart(2, '0')}
                                </span>
                                <div className="h-px w-8 bg-border" />
                                <span className="text-sm font-mono text-muted-foreground">
                                  {String(guidancePhotos.length).padStart(2, '0')}
                                </span>
                              </div>
                              <div className="flex gap-3">
                                <button
                                  onClick={() => setCurrentGuidanceIndex((prev) => 
                                    prev === 0 ? guidancePhotos.length - 1 : prev - 1
                                  )}
                                  className="w-12 h-12 border border-foreground/20 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
                                >
                                  <ChevronLeft className="w-5 h-5 group-hover:text-accent transition-colors" />
                                </button>
                                <button
                                  onClick={() => setCurrentGuidanceIndex((prev) => 
                                    (prev + 1) % guidancePhotos.length
                                  )}
                                  className="w-12 h-12 border border-foreground/20 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
                                >
                                  <ChevronRight className="w-5 h-5 group-hover:text-accent transition-colors" />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
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
                  </>
                )}

                {currentStep === 2 && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center"
                      >
                        <Loader2 className="w-16 h-16 text-accent" strokeWidth={1.5} />
                      </motion.div>
                      <p className="text-sm font-mono text-muted-foreground">
                        Creating your persona...
                      </p>
                    </div>
                  </div>
                )}

                {(currentStep === 3 || currentStep === 4) && (
                  <div className="w-full h-full overflow-y-auto p-8 md:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl mx-auto">
                      {[
                        { image: frontView, label: 'Front' },
                        { image: backView, label: 'Back' },
                        { image: sideView, label: 'Side' },
                        { image: threeFourView, label: '3/4 View' },
                      ].map((view, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                          className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-lg border border-border"
                        >
                          <img
                            src={view.image}
                            alt={view.label}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 left-2 px-2 py-1 bg-background/80 backdrop-blur-sm border border-border rounded text-xs font-mono text-foreground">
                            {view.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPersonaModal;
