import { Layers, Zap, Users, MessageSquare, Smartphone, DollarSign } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const iconMap = {
  'layers': Layers,
  'zap': Zap,
  'users': Users,
  'message-square': MessageSquare,
  'smartphone': Smartphone,
  'dollar-sign': DollarSign,
};

const WhyChooseUs = () => {
  const { whyChooseUs } = siteContent;

  return (
    <section className="py-20 bg-gradient-to-b from-background-dark to-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 text-center items-center mb-16">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-5xl max-w-[900px]">
            {whyChooseUs.headline}
          </h1>
          <p className="text-white/70 text-lg font-normal leading-relaxed max-w-[800px]">
            {whyChooseUs.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {whyChooseUs.reasons.map((reason, index) => {
            const Icon = iconMap[reason.icon] || Layers;
            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 text-base font-normal leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
