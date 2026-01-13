import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackToTop from "./components/BackToTop";
import SmoothScroll from "./components/SmoothScroll";
import CookieConsent from "./components/CookieConsent";
import Preloader from "./components/Preloader";
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import Projects from "./pages/Projects";
import Support from "./pages/Support";
import Pricing from "./pages/Pricing";
import Upgrade from "./pages/Upgrade";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Feed from "./pages/Feed";
import ComponentLibrary from "./pages/ComponentLibrary";
import Download from "./pages/Download";
import ChromeExtension from "./pages/ChromeExtension";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Onboarding from "./pages/Onboarding";
import OnboardingStep2 from "./pages/OnboardingStep2";
import OnboardingStep3 from "./pages/OnboardingStep3";
import OnboardingStep4 from "./pages/OnboardingStep4";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          
          <AnimatePresence mode="wait">
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
          </AnimatePresence>

          {!isLoading && (
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <SmoothScroll>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/work" element={<Projects />} />
                <Route path="/work/:id" element={<CaseStudy />} />
                <Route path="/support" element={<Support />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/upgrade" element={<Upgrade />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/componentlibrary" element={<ComponentLibrary />} />
                <Route path="/download" element={<Download />} />
                <Route path="/download/chrome-extension" element={<ChromeExtension />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/onboarding/2" element={<OnboardingStep2 />} />
                <Route path="/onboarding/3" element={<OnboardingStep3 />} />
                <Route path="/onboarding/4" element={<OnboardingStep4 />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <BackToTop />
              <CookieConsent />
              </SmoothScroll>
            </BrowserRouter>
          )}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
