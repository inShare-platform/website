import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const FAQ = () => {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 text-center items-center mb-12">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-4xl max-w-[720px]">
            {faq.headline}
          </h1>
          <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
            {faq.subheadline}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faq.questions.map((item, index) => (
            <div
              key={index}
              className="border-2 border-white/10 rounded-xl bg-primary/20 overflow-hidden hover:border-accent/30 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-white text-lg font-semibold pr-4">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-white/80 text-base leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
