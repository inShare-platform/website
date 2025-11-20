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
    <section id="how-it-works" className="py-20 bg-primary/30">
      <div className="container mx-auto px-4 flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-4 text-center">
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
                    <div className="flex items-center justify-center size-10 rounded-full bg-primary border-2 border-accent">
                      <Icon className="text-accent" size={20} />
                    </div>
                    {!isLast && <div className="w-px bg-white/20 h-full min-h-[60px]"></div>}
                  </div>
                  
                  {/* Content Column */}
                  <div className="flex flex-1 flex-col py-3 pb-8">
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
    </section>
  );
};

export default HowItWorks;
