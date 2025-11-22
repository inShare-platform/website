import { Upload, Share2, Zap, CheckCircle } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const iconMap = {
  'upload': Upload,
  'share-2': Share2,
  'zap': Zap,
  'check-circle': CheckCircle,
};

const HowItWorks = () => {
  const { howItWorks } = siteContent;

  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-background-dark"></div>
      
      {/* Animated orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-64 h-64 bg-accent/40 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 flex flex-col gap-10 items-center relative z-10">
        <div className="flex flex-col gap-4 text-center animate-fade-in">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-4xl max-w-[720px]">
            {howItWorks.headline}
          </h1>
          <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
            Four simple steps to transform your document workflow.
          </p>
        </div>

        <div className="w-full max-w-lg">
          <div className="grid grid-cols-[40px_1fr] gap-x-4">
            {howItWorks.steps.map((step, index) => {
              const Icon = iconMap[step.icon] || Upload;
              const isLast = index === howItWorks.steps.length - 1;
              
              return (
                <div key={step.step} className="contents">
                  {/* Icon Column */}
                  <div className="flex flex-col items-center gap-1 pt-3">
                    <div 
                      className="relative flex items-center justify-center size-10 rounded-full bg-primary border-2 border-accent animate-fade-in-up z-10"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Pulsing ring effect */}
                      <div 
                        className="absolute inset-0 rounded-full bg-accent/30 animate-ping"
                        style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                      ></div>
                      <Icon className="text-accent relative z-10" size={20} />
                    </div>
                    {!isLast && (
                      <div className="relative w-px bg-gradient-to-b from-accent/60 via-accent/30 to-accent/10 h-full min-h-[60px] overflow-hidden">
                        {/* Animated flow line */}
                        <div 
                          className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-0 animate-flow"
                          style={{ animationDelay: `${index * 0.3 + 0.8}s` }}
                        ></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content Column */}
                  <div 
                    className="flex flex-1 flex-col py-3 pb-8 animate-fade-in-right"
                    style={{ animationDelay: `${index * 0.2 + 0.1}s` }}
                  >
                    <p className="text-white text-lg font-bold leading-normal">
                      {step.step}. {step.title}
                    </p>
                    <p className="text-white/60 text-base font-normal leading-normal mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(8px);
          }
        }

        @keyframes flow {
          0% {
            opacity: 0;
            transform: translateY(-100%);
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateY(100%);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out both;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out both;
        }

        .animate-flow {
          animation: flow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
