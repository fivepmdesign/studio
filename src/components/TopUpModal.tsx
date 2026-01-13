import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
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
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="text-sm font-mono text-accent">V-TRY</span>
                    <div className="h-px w-12 bg-accent" />
                    <span className="text-sm font-mono text-muted-foreground tracking-wider">CREDITS TOP-UP</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-sans font-bold max-w-2xl mx-auto mb-4">
                    Credits can be used anytime and never expire
                  </h2>
                  <p className="text-sm text-muted-foreground font-mono">
                    Select a credit package to add to your account
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
                      className="group relative flex flex-col md:flex-row md:items-baseline justify-between py-12 md:py-16 border-b border-border w-full text-left hover:bg-accent/5 transition-all duration-300"
                      onClick={() => {
                        // Handle purchase
                        console.log('Purchase:', addon);
                      }}
                    >
                      <div className="flex items-baseline gap-8 md:gap-16">
                        <span className="font-mono text-sm text-accent/50 group-hover:text-accent transition-colors duration-300">
                          {addon.number}
                        </span>
                        <h3 className="text-3xl md:text-6xl font-sans font-bold text-foreground group-hover:text-accent group-hover:translate-x-4 transition-all duration-500 ease-out">
                          {addon.name}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between md:justify-end gap-8 mt-6 md:mt-0 pl-[calc(2rem+1px)] md:pl-0">
                        <p className="font-mono text-lg md:text-xl text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          ${addon.price}
                        </p>
                        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                          <span className="text-accent text-2xl">+</span>
                        </div>
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
