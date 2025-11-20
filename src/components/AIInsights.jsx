import { useState, useEffect } from 'react';
import siteContent from '../data/siteContent.json';

const AIInsights = () => {
  const { aiInsights } = siteContent;
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < aiInsights.demo.lines.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [aiInsights.demo.lines.length]);

  return (
    <section id="ai-insights" className="py-20">
      <div className="container mx-auto px-4 flex flex-col items-center gap-10">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-4xl">
            {aiInsights.headline}
          </h1>
          <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
            Our AI analyzes engagement to provide predictive lead scoring and content recommendations.
          </p>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full">
          {aiInsights.content.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white/80 text-sm">{item}</p>
            </div>
          ))}
        </div>

        {/* Terminal Demo */}
        <div className="w-full max-w-3xl rounded-xl bg-primary/50 border border-white/10 p-6 font-mono text-sm shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="size-3 rounded-full bg-red-500"></span>
            <span className="size-3 rounded-full bg-yellow-500"></span>
            <span className="size-3 rounded-full bg-green-500"></span>
          </div>
          <div className="text-accent space-y-1">
            {aiInsights.demo.lines.slice(0, visibleLines).map((line, index) => (
              <p
                key={index}
                className={`${
                  line.includes('[Predictive Lead Score]') ? 'text-white' :
                  line.includes('[Key Interest]') ? 'text-white' :
                  line.includes('[Recommended Action]') ? 'text-white' :
                  line.includes('complete') ? 'text-green-400' : 
                  'text-cyan-400'
                }`}
              >
                {line}
                {index === visibleLines - 1 && visibleLines < aiInsights.demo.lines.length && (
                  <span className="animate-pulse">_</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;
