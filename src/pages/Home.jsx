import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Features from '../components/Features';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import AIInsights from '../components/AIInsights';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import StructuredData from '../components/StructuredData';

const Home = () => {
  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="software" />
      <StructuredData type="website" />
      <Helmet>
        {/* Primary Meta Tags */}
        <title>AI Digital Marketing Platform | AI Marketing Automation | inShare</title>
        <meta name="title" content="AI Digital Marketing Platform | AI Marketing Automation | inShare" />
        <meta name="description" content="Leading AI digital marketing platform with complete AI marketing automation. All-in-one solution: CRM, WhatsApp automation, AI email generator & smart forms. Transform your digital marketing with AI." />
        <meta name="keywords" content="ai digital marketing, ai marketing automation, ai in digital marketing, ai powered crm, crm software, whatsapp automation, ai email generator, marketing automation platform, lead generation, sales automation" />
        <meta name="author" content="inShare" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://inshare.in/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inshare.in/" />
        <meta property="og:title" content="AI Digital Marketing Platform | AI Marketing Automation | inShare" />
        <meta property="og:description" content="Leading AI digital marketing platform with complete AI marketing automation. All-in-one solution: CRM, WhatsApp automation, AI email generator & smart forms." />
        <meta property="og:image" content="https://inshare.in/og_image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="inShare - Free CRM System for Small Business" />
        <meta property="og:site_name" content="inShare" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://inshare.in/" />
        <meta name="twitter:title" content="AI Digital Marketing Platform | AI Marketing Automation | inShare" />
        <meta name="twitter:description" content="Leading AI digital marketing platform with complete AI marketing automation. All-in-one: CRM, WhatsApp automation, AI email generator & smart forms." />
        <meta name="twitter:image" content="https://inshare.in/og_image.png" />
        <meta name="twitter:image:alt" content="inShare - Free CRM System for Small Business" />
        <meta name="twitter:site" content="@inshare" />
        <meta name="twitter:creator" content="@inshare" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#00BCD4" />
        <meta name="msapplication-TileColor" content="#00BCD4" />
      </Helmet>
      
      <Hero />
      <Problems />
      <HowItWorks />
      <Features />
      <WhyChooseUs />
      <AIInsights />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
