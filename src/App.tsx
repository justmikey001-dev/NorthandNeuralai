import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SurveyRecommender from './components/SurveyRecommender';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Trust from './components/Trust';
import TalkToUs from './components/TalkToUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';

type Page = 'home' | 'about';

function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    const handleHash = () => {
      setPage(window.location.hash === '#about' ? 'about' : 'home');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (p: Page) => {
    if (p === 'about') {
      window.location.hash = 'about';
    } else {
      window.location.hash = '';
    }
    setPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-base text-base overflow-x-hidden">
        <Navbar navigate={navigate} />
        <main>
          {page === 'about' ? (
            <About />
          ) : (
            <>
              <Hero />
              <Services />
              <SurveyRecommender />
              <HowItWorks />
              <Pricing />
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
