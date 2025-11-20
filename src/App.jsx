import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AIInsights from './components/AIInsights';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-dark">
      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <HowItWorks />
      <AIInsights />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
