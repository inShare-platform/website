import { AlertCircle, CheckCircle } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const Problems = () => {
  const { problems } = siteContent;

  return (
    <section className="py-20 bg-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 text-center items-center mb-12">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-4xl max-w-[720px]">
            The Problems Businesses Face
          </h1>
          <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
            Stop losing deals to lack of visibility and missed follow-ups
          </p>
        </div>

        <div className="space-y-16">
          {problems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            >
              {/* Problem Card */}
              <div className="flex flex-col gap-4 rounded-xl border-2 border-red-500/30 bg-red-500/5 p-6 hover:border-red-500/50 transition-all">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                  <h3 className="text-red-400 text-xl font-bold">Problem {item.id}</h3>
                </div>
                <h2 className="text-white text-2xl font-bold leading-tight">
                  {item.problem}
                </h2>
                <ul className="space-y-2">
                  {item.problemDetails.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/70 text-sm">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution Card */}
              <div className="flex flex-col gap-4 rounded-xl border-2 border-accent/30 bg-accent/5 p-6 hover:border-accent/50 transition-all">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-accent" />
                  <h3 className="text-accent text-xl font-bold">Solution</h3>
                </div>
                <h2 className="text-white text-2xl font-bold leading-tight">
                  {item.solution}
                </h2>
                <ul className="space-y-3">
                  {item.solutionFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
