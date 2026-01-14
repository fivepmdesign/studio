import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

// Plan configuration - should match Navigation and Account pages
const PLAN_CONFIG = {
  free: {
    name: 'Free plan',
    tokensTotal: 90,
  },
  pro: {
    name: 'Pro plan',
    tokensTotal: 320,
  },
  ultra: {
    name: 'Ultra plan',
    tokensTotal: 750,
  },
};

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIsLoggedIn: boolean;
  initialPlan: 'free' | 'pro' | 'ultra';
  initialBillingPeriod: 'monthly' | 'yearly';
  initialTokens: number;
  initialGenerationsEnabled: boolean;
  onSave: (settings: {
    isLoggedIn: boolean;
    plan: 'free' | 'pro' | 'ultra';
    billingPeriod: 'monthly' | 'yearly';
    tokens: number;
    generationsEnabled: boolean;
  }) => void;
}

const SettingsModal = ({
  isOpen,
  onClose,
  initialIsLoggedIn,
  initialPlan,
  initialBillingPeriod,
  initialTokens,
  initialGenerationsEnabled,
  onSave,
}: SettingsModalProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [plan, setPlan] = useState<'free' | 'pro' | 'ultra'>('free');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [tokens, setTokens] = useState<string>('0');
  const [generationsEnabled, setGenerationsEnabled] = useState<boolean>(false);

  // Sync local state with values from parent when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoggedIn(initialIsLoggedIn);
      setPlan(initialPlan);
      setBillingPeriod(initialBillingPeriod);
      setTokens(initialTokens.toString());
      setGenerationsEnabled(initialGenerationsEnabled);
    }
  }, [isOpen, initialIsLoggedIn, initialPlan, initialBillingPeriod, initialTokens, initialGenerationsEnabled]);

  // Update tokens max when plan changes
  useEffect(() => {
    const maxTokens = PLAN_CONFIG[plan].tokensTotal;
    const currentTokens = parseInt(tokens) || 0;
    if (currentTokens > maxTokens) {
      setTokens(maxTokens.toString());
    }
  }, [plan, tokens]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Optionally reset to default values when closing
      // setIsLoggedIn(false);
      // setPlan('free');
      // setBillingPeriod('monthly');
      // setTokens('0');
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    onClose();
  };

  const handleSave = () => {
    const normalizedTokens = parseInt(tokens) || 0;

    onSave({
      isLoggedIn,
      plan,
      billingPeriod,
      tokens: normalizedTokens,
      generationsEnabled,
    });
    
    // Close modal after saving
    handleCloseModal();
    
    // Reload the page to apply changes (e.g., redirect to feed if logged in)
    window.location.reload();
  };

  const maxTokens = PLAN_CONFIG[plan].tokensTotal;
  const currentTokens = parseInt(tokens) || 0;
  const showBillingPeriod = isLoggedIn && (plan === 'pro' || plan === 'ultra');

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
          className="fixed inset-0 bg-background/95 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseModal();
            }
          }}
        >
          {/* Content container */}
          <div 
            className="relative w-full h-full flex flex-col items-center justify-center p-8"
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

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl bg-background border border-border rounded-lg p-8 md:p-12 space-y-8"
            >
              {/* Header */}
              <div className="space-y-2">
                <h2 className="text-3xl font-sans font-bold">Settings</h2>
                <p className="text-muted-foreground">Fine-tune your application settings</p>
              </div>

              {/* Settings Form */}
              <div className="space-y-6">
                {/* User Logged In Toggle */}
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="space-y-1">
                    <Label htmlFor="logged-in" className="text-base font-medium">
                      User Logged In
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Toggle user authentication state
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-mono ${!isLoggedIn ? 'text-foreground' : 'text-muted-foreground'}`}>
                      NO
                    </span>
                    <Switch
                      id="logged-in"
                      checked={isLoggedIn}
                      onCheckedChange={setIsLoggedIn}
                    />
                    <span className={`text-sm font-mono ${isLoggedIn ? 'text-foreground' : 'text-muted-foreground'}`}>
                      YES
                    </span>
                  </div>
                </div>

                {/* Plan Selector - Only shown if logged in */}
                {isLoggedIn && (
                  <div className="space-y-2">
                    <Label htmlFor="plan" className="text-base font-medium">
                      Plan
                    </Label>
                    <Select value={plan} onValueChange={(value: 'free' | 'pro' | 'ultra') => setPlan(value)}>
                      <SelectTrigger id="plan" className="w-full">
                        <SelectValue placeholder="Select a plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="free">Free</SelectItem>
                        <SelectItem value="pro">Pro</SelectItem>
                        <SelectItem value="ultra">Ultra</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      {PLAN_CONFIG[plan].name} - Max {PLAN_CONFIG[plan].tokensTotal} tokens
                    </p>
                  </div>
                )}

                {/* Billing Period Selector - Only shown if logged in and plan is pro or ultra */}
                {showBillingPeriod && (
                  <div className="space-y-2">
                    <Label htmlFor="billing-period" className="text-base font-medium">
                      Billing Period
                    </Label>
                    <Select 
                      value={billingPeriod} 
                      onValueChange={(value: 'monthly' | 'yearly') => setBillingPeriod(value)}
                    >
                      <SelectTrigger id="billing-period" className="w-full">
                        <SelectValue placeholder="Select billing period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Tokens Input - Only shown if logged in */}
                {isLoggedIn && (
                  <div className="space-y-2">
                    <Label htmlFor="tokens" className="text-base font-medium">
                      Number of Tokens
                    </Label>
                    <Input
                      id="tokens"
                      type="number"
                      min="0"
                      max={maxTokens}
                      value={tokens}
                      onChange={(e) => {
                        const value = e.target.value;
                        const numValue = parseInt(value) || 0;
                        if (value === '' || (numValue >= 0 && numValue <= maxTokens)) {
                          setTokens(value);
                        }
                      }}
                      placeholder="Enter number of tokens"
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground">
                      Maximum: {maxTokens} tokens ({plan === 'free' ? 'Free plan' : plan === 'pro' ? 'Pro plan' : 'Ultra plan'})
                    </p>
                    {currentTokens > maxTokens && (
                      <p className="text-sm text-destructive">
                        Tokens cannot exceed {maxTokens}
                      </p>
                    )}
                  </div>
                )}

                {/* Generations Toggle - Only shown if logged in */}
                {isLoggedIn && (
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <Label htmlFor="generations" className="text-base font-medium">
                        Generations
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Enable or disable generations feature
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-mono ${!generationsEnabled ? 'text-foreground' : 'text-muted-foreground'}`}>
                        OFF
                      </span>
                      <Switch
                        id="generations"
                        checked={generationsEnabled}
                        onCheckedChange={setGenerationsEnabled}
                      />
                      <span className={`text-sm font-mono ${generationsEnabled ? 'text-foreground' : 'text-muted-foreground'}`}>
                        ON
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-4 border-t border-border">
                <Button
                  onClick={handleSave}
                  className="px-8"
                  disabled={isLoggedIn && currentTokens > maxTokens}
                >
                  Save Settings
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
