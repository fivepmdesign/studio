import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const addOns = [
  { name: '60 V-TRY Credits', price: '5.00', number: '01' },
  { name: '170 V-TRY Credits', price: '12.00', number: '02' },
  { name: '420 V-TRY Credits', price: '24.00', number: '03' },
  { name: '820 V-TRY Credits', price: '48.00', number: '04' },
];

interface TopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TopUpModal = ({ isOpen, onClose }: TopUpModalProps) => {
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
            {/* V-TRY CREDITS TOP-UP - Top Left */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute top-[51px] md:top-8 left-8 z-50 flex items-center gap-4"
            >
              <span className="text-sm font-mono text-accent">V-TRY</span>
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-mono text-muted-foreground tracking-wider">CREDITS TOP-UP</span>
            </motion.div>

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
              className="flex-1 flex items-center justify-center p-8 md:p-16"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center mb-12"
                >
                  <p className="text-sm text-muted-foreground font-mono">
                    Credits can be used anytime and never expire
                  </p>
                </motion.div>

                {/* Credits List */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-4xl mx-auto border-t border-border"
                >
                  {addOns.map((addon, index) => (
                    <motion.button
                      key={addon.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="group relative flex flex-row items-center justify-between py-4 md:py-6 pr-0 md:pr-8 border-b border-border w-full text-left hover:bg-accent/5 transition-all duration-300"
                      onClick={() => {
                        // Handle purchase
                        console.log('Purchase:', addon);
                      }}
                    >
                      <h3 className="text-lg md:text-2xl font-sans font-bold text-foreground group-hover:text-accent group-hover:translate-x-2 transition-all duration-500 ease-out flex-shrink-0 mr-4">
                        {addon.name}
                      </h3>

                      <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
                        <p className="font-mono text-sm md:text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          ${addon.price}
                        </p>
                        <motion.div 
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-foreground/70 group-hover:text-accent-foreground transition-colors duration-300" />
                        </motion.div>
                      </div>
                    </motion.button>
                  ))}
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
  );
};

export default TopUpModal;
