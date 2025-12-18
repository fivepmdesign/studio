import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { z } from 'zod';
import { toast } from '@/hooks/use-toast';

const emailSchema = z.string().trim().email('Please enter a valid email address').max(255);

interface NewsletterFormProps {
  variant?: 'inline' | 'stacked';
  className?: string;
}

const NewsletterForm = ({ variant = 'inline', className = '' }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));

    console.log('Newsletter subscription:', '[REDACTED EMAIL]');

    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail('');

    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });

    // Reset after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center justify-center gap-3 py-4 ${className}`}
      >
        <div className="p-2 rounded-full bg-primary/10">
          <CheckCircle className="w-5 h-5 text-primary" />
        </div>
        <p className="text-foreground font-medium">You're subscribed!</p>
      </motion.div>
    );
  }

  if (variant === 'stacked') {
    return (
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full px-6 py-4 bg-background border rounded-full focus:outline-none transition-colors ${
              error ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary'
            }`}
          />
          {error && (
            <p className="mt-2 text-sm text-destructive">{error}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            <>
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full px-6 py-4 bg-background border rounded-full focus:outline-none transition-colors ${
              error ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary'
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            <>
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-destructive">{error}</p>
      )}
    </form>
  );
};

export default NewsletterForm;
