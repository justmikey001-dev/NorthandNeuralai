import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import TalkToUs from './components/TalkToUs';
import Pricing from './components/Pricing';
import Trust from './components/Trust';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Trust />
        <TalkToUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
