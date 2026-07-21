import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SurveyRecommender from './components/SurveyRecommender';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import PriceCalculator from './components/PriceCalculator';
import Trust from './components/Trust';
import TalkToUs from './components/TalkToUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';
import FAQ from './components/FAQ';
import Legal from './components/Legal';
import { useSEO } from './hooks/useSEO';

type Page = 'home' | 'about' | 'faq' | 'legal';

const SEO_PER_PAGE: Record<Page, { title: string; description: string; path: string }> = {
  home: {
    title: 'Let AI Do All The Work',
    description: 'A marketplace of 20+ done-for-you AI services — from brand identities to automation systems. Place an order, receive the finished deliverable in days.',
    path: '',
  },
  about: {
    title: 'About Us',
    description: 'North & Neural AI was built to fix the frustration of getting quality work done. Pick a service, place your order, get a finished deliverable — no back-and-forth.',
    path: '/#about',
  },
  faq: {
    title: 'FAQ',
    description: 'Answers to common questions about ordering, revisions, refunds, payment methods, custom services, and subscription plans at North & Neural AI.',
    path: '/#faq',
  },
  legal: {
    title: 'Terms & Refund Policy',
    description: 'Refund policy, terms of service, and privacy statement for North & Neural AI. Full refunds within 7 days if the deliverable has not been approved.',
    path: '/#legal',
  },
};

function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'about') setPage('about');
      else if (hash === 'faq') setPage('faq');
      else if (hash === 'legal') setPage('legal');
      else setPage('home');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (p: Page) => {
    if (p === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = p;
    }
    setPage(p);
    window.scrollTo(0, 0);
  };

  const seo = SEO_PER_PAGE[page];
  useSEO(seo);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-base text-base overflow-x-hidden">
        <Navbar navigate={navigate} />
        <main>
          {page === 'about' ? (
            <About />
          ) : page === 'faq' ? (
            <FAQ />
          ) : page === 'legal' ? (
            <Legal />
          ) : (
            <>
              <Hero />
              <Services />
              <SurveyRecommender />
              <HowItWorks />
              <Pricing />
              <PriceCalculator />
              <Trust />
              <TalkToUs />
              <CTA />
            </>
          )}
        </main>
        <Footer navigate={navigate} />
      </div>
    </ThemeProvider>
  );
}

export default App;
