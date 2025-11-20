import { AlertCircle, CheckCircle } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const Problems = () => {
  const { problems } = siteContent;

  return (
    <section className="py-20 bg-gradient-to-b from-primary/30 to-background-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 text-center items-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-2">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
              Common Challenges
            </span>
          </div>
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-5xl max-w-[800px]">
            Traditional File Sharing Is Costing You Revenue
          </h1>
          <p className="text-white/70 text-lg font-normal leading-relaxed max-w-[700px]">
            Every day, businesses lose potential deals due to lack of visibility, missed follow-ups, and unprofessional document sharing. Here's how inShare solves these critical challenges.
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {problems.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch ${
                index !== problems.length - 1 ? 'pb-12 border-b border-white/5' : ''
              }`}
            >
              {/* Problem Card */}
              <div className="flex flex-col gap-5 rounded-2xl border-2 border-red-500/20 bg-gradient-to-br from-red-500/5 to-red-500/10 p-8 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-red-400/80 text-sm font-semibold uppercase tracking-wider">
                    Challenge #{item.id}
                  </span>
                </div>
                <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                  {item.problem}
                </h2>
                <div className="flex-1">
                  <p className="text-white/60 text-sm font-medium mb-3 uppercase tracking-wide">
                    What this means for your business:
                  </p>
                  <ul className="space-y-3">
                    {item.problemDetails.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/70 text-base leading-relaxed">
                        <span className="text-red-400 mt-1 font-bold">×</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Solution Card */}
              <div className="flex flex-col gap-5 rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-green-500/10 p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-accent/80 text-sm font-semibold uppercase tracking-wider">
                    inShare Solution
                  </span>
                </div>
                <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                  {item.solution}
                </h2>
                <div className="flex-1">
                  <p className="text-white/60 text-sm font-medium mb-3 uppercase tracking-wide">
                    How inShare helps:
                  </p>
                  <ul className="space-y-3">
                    {item.solutionFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/80 text-base leading-relaxed">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
