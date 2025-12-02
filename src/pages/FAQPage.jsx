import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import siteContent from '../data/siteContent.json';

const FAQPage = () => {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | inShare</title>
        <meta name="description" content="Get answers to common questions about inShare's AI marketing automation, CRM, pricing, features, and more." />
        <meta name="keywords" content="faq, questions, help, support, crm questions, pricing questions" />
        <link rel="canonical" href="https://inshare.in/faq" />
      </Helmet>

      <div className="min-h-screen bg-background-dark">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white text-4xl md:text-6xl font-black mb-6">
                {faq.headline}
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                {faq.subheadline}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-4">
              {faq.questions.map((item, index) => (
                <div key={index} className="bg-primary/30 rounded-xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/40 transition-colors"
                  >
                    <h3 className="text-white text-lg md:text-xl font-bold pr-4">{item.question}</h3>
                    <ChevronDown className={`w-6 h-6 text-accent flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-white/70 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-white text-3xl md:text-5xl font-black mb-6">
                Still Have Questions?
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-8">
                Our team is here to help you get started
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary text-lg font-bold rounded-lg hover:bg-accent/80 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/request-demo')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary/50 text-white text-lg font-bold rounded-lg border border-accent/50 hover:bg-primary/70 transition-colors"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;
