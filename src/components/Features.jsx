import { ShieldCheck, Brain, ChartBar, MessageCircle, Settings, Search } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const iconMap = {
  'shield-check': ShieldCheck,
  'brain': Brain,
  'chart-bar': ChartBar,
  'message-circle': MessageCircle,
  'settings': Settings,
  'search': Search,
};

const Features = () => {
  const { features } = siteContent;

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 flex flex-col gap-10">
        <div className="flex flex-col gap-4 text-center items-center">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-4xl max-w-[720px]">
            {features.headline}
          </h1>
          <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
            Everything you need to streamline your document workflow and maximize engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="flex flex-1 gap-4 rounded-xl border border-white/10 bg-white/5 p-6 flex-col hover:bg-white/10 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                <div className="flex flex-col gap-2">
                  <h2 className="text-white text-lg font-bold leading-tight">
                    {feature.title}
                  </h2>
                  <p className="text-white/60 text-sm font-normal leading-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
