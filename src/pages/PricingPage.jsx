import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { trackPricingClick } from '../services/analytics';
import siteContent from '../data/siteContent.json';

const PricingPage = () => {
  const { pricing } = siteContent;

  return (
    <>
      <Helmet>
        <title>Pricing Plans - Affordable AI Marketing Automation | inShare</title>
        <meta name="title" content="Pricing - AI Digital Marketing Platform | inShare" />
        <meta name="description" content="Affordable pricing for complete AI marketing automation. Plans start at ₹99/month. Get CRM, WhatsApp automation, AI email generator, and more." />
        <meta name="keywords" content="crm pricing, marketing automation pricing, affordable crm, small business crm, ai marketing cost, whatsapp automation pricing" />
        <link rel="canonical" href="https://inshare.in/pricing" />
        
        <meta property="og:title" content="Pricing - AI Digital Marketing Platform | inShare" />
        <meta property="og:description" content="Affordable plans starting at ₹99/month. Complete marketing automation for every business." />
        <meta property="og:url" content="https://inshare.in/pricing" />
      </Helmet>

      <div className="min-h-screen bg-background-dark">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white text-4xl md:text-6xl font-black mb-6">
                Simple, Transparent <span className="text-accent">Pricing</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                Choose the perfect plan for your business. All plans include core features with no hidden fees.
              </p>
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/30">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-white text-sm font-bold">14-day free trial • No credit card required</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
              {pricing.plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col gap-6 rounded-2xl p-8 ${
                    plan.popular
                      ? 'border-2 border-accent bg-gradient-to-br from-primary/60 to-primary/40 shadow-2xl shadow-accent/20 transform scale-105'
                      : 'border border-white/10 bg-primary/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold uppercase shadow-lg">
                      ⭐ Most Popular
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-3">
                    <h3 className="text-accent text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">{plan.price}</span>
                      {plan.price.includes('₹') && (
                        <span className="text-white/60">/month</span>
                      )}
                    </div>
                    <p className="text-white/70">{plan.description}</p>
                  </div>

                  <div className="w-full h-px bg-white/10"></div>

                  <ul className="flex flex-col gap-4 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-accent w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.cta.link}
                    onClick={() => trackPricingClick(plan.name)}
                    className={`mt-4 flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-14 px-6 text-base font-bold transition-all hover:scale-105 ${
                      plan.popular
                        ? 'bg-accent text-primary hover:bg-accent/90 shadow-lg shadow-accent/30'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta.label}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Plan */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-12 border-2 border-accent/40 text-center">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                  {pricing.customPlan.headline}
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  {pricing.customPlan.description}
                </p>
                <a
                  href={pricing.customPlan.cta.link}
                  onClick={() => trackPricingClick('Custom Plan')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary text-lg font-bold rounded-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/30"
                >
                  {pricing.customPlan.cta.label}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                  Compare All Features
                </h2>
                <p className="text-white/70 text-lg">
                  See what's included in each plan
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-8 border border-white/10 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-white font-bold py-4 px-4">Features</th>
                      <th className="text-center text-white font-bold py-4 px-4">Lite</th>
                      <th className="text-center text-accent font-bold py-4 px-4">Pro</th>
                      <th className="text-center text-white font-bold py-4 px-4">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">URLs/Documents</td>
                      <td className="text-center py-4 px-4">10</td>
                      <td className="text-center py-4 px-4 text-accent font-bold">50</td>
                      <td className="text-center py-4 px-4">Unlimited</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">Analytics Dashboard</td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">Lead Capture Forms</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">AI Insights</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">WhatsApp Integration</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">Custom Branding</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">Priority Support</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">API Access</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-accent inline" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                  Pricing FAQs
                </h2>
                <p className="text-white/70 text-lg">
                  Common questions about our pricing
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-primary/30 rounded-xl p-6 border border-white/10">
                  <h3 className="text-white text-xl font-bold mb-3">Can I change plans later?</h3>
                  <p className="text-white/70">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-6 border border-white/10">
                  <h3 className="text-white text-xl font-bold mb-3">Is there a free trial?</h3>
                  <p className="text-white/70">
                    Absolutely! All plans come with a 14-day free trial. No credit card required to start.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-6 border border-white/10">
                  <h3 className="text-white text-xl font-bold mb-3">What payment methods do you accept?</h3>
                  <p className="text-white/70">
                    We accept all major credit cards, debit cards, UPI, and net banking for Indian customers.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-6 border border-white/10">
                  <h3 className="text-white text-xl font-bold mb-3">Can I cancel anytime?</h3>
                  <p className="text-white/70">
                    Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-white text-3xl md:text-5xl font-black mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-8">
                Join hundreds of businesses growing with inShare
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919080122084?text=Hi%2C%20I%20would%20like%20to%20request%20a%20demo%20of%20inShare."
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary text-lg font-bold rounded-lg hover:bg-accent/90 transition-all hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919080122084?text=Hi%2C%20I%20have%20questions%20about%20pricing."
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary/50 text-white text-lg font-bold rounded-lg border border-accent/50 hover:bg-primary/70 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
