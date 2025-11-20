import { CheckCircle } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const Pricing = () => {
  const { pricing } = siteContent;

  return (
    <section id="pricing" className="py-20 bg-primary/30">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center items-center">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-4xl">
            {pricing.headline}
          </h1>
          <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
            Choose a plan that scales with you. Pay only for what you use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col gap-6 rounded-xl p-8 ${
                plan.popular
                  ? 'border-2 border-accent bg-primary shadow-2xl shadow-accent/10'
                  : 'border border-white/10 bg-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col gap-2">
                <h3 className="text-accent text-lg font-bold">{plan.name}</h3>
                <p className="text-4xl font-bold text-white">
                  {plan.price}
                  {plan.price.includes('₹') && (
                    <span className="text-base font-normal text-white/60"></span>
                  )}
                </p>
                <p className="text-white/60 text-sm">{plan.description}</p>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.cta.link}
                className={`mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold transition-all ${
                  plan.popular
                    ? 'bg-accent text-primary hover:bg-accent/80'
                    : 'bg-primary text-white border border-white/20 hover:bg-white/10'
                }`}
              >
                {plan.cta.label}
              </a>
            </div>
          ))}
        </div>

        {/* Custom Plan Section */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">
            {pricing.customPlan.headline}
          </h2>
          <p className="text-white/70 text-base mb-6">
            {pricing.customPlan.description}
          </p>
          <a
            href={pricing.customPlan.cta.link}
            className="inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-primary text-base font-bold hover:bg-accent/80 transition-all"
          >
            {pricing.customPlan.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
