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
        <title>AI Digital Marketing | AI Marketing Automation | AI in Digital Marketing | inShare</title>
        <meta name="title" content="AI Digital Marketing | AI Marketing Automation | AI in Digital Marketing | inShare" />
        <meta name="description" content="Leading AI digital marketing platform with AI marketing automation and AI in digital marketing. Complete 4-in-1 solution: CRM + WhatsApp Automation + AI Cold Email Generator + AI Chat-Based Forms in ONE system." />
        <meta name="keywords" content="ai digital marketing, ai marketing automation, ai in digital marketing, crm system, customer relationship management, free crm, crm software, hubspot crm, crm for small business, lead management system, contact management software, sales tracking software, pipeline management software, customer relationship management system, crm application, online crm, crm tools, easy crm, free crm for small business, crm platform, sales crm, business crm software, client relationship management, customer service software, real estate crm, crm with automation, crm packages, contact management system, lead management crm, sales pipeline management, crm software for small businesses, customer resource management, it crm system, landscape crm software, method crm, hubspot cost, hubspot crm pricing, free crm programs, crm management, what is crm, crm stands for, define crm system, crm software meaning, crm abbreviation, crm acronym" />
        <meta name="author" content="inShare" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://inshare.in/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inshare.in/" />
        <meta property="og:title" content="AI Digital Marketing | AI Marketing Automation | AI in Digital Marketing" />
        <meta property="og:description" content="Complete AI digital marketing platform with AI marketing automation and AI in digital marketing. 4-in-1 solution: CRM + WhatsApp Automation + AI Email Generator + AI Chat-Based Forms." />
        <meta property="og:image" content="https://inshare.in/og_image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="inShare - Free CRM System for Small Business" />
        <meta property="og:site_name" content="inShare" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://inshare.in/" />
        <meta name="twitter:title" content="AI Digital Marketing | AI Marketing Automation | AI in Digital Marketing" />
        <meta name="twitter:description" content="Leading AI digital marketing platform with AI marketing automation and AI in digital marketing. Complete CRM, WhatsApp Automation, AI Email Generator & AI Chat-Based Forms." />
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
