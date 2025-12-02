import { Helmet } from 'react-helmet-async';
import { Shield, Brain, Mail, MessageSquare, BarChart, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import siteContent from '../data/siteContent.json';

const iconMap = {
  'shield-check': Shield,
  'brain': Brain,
  'chart-bar': BarChart,
  'message-circle': MessageSquare,
  'settings': Zap,
  'search': CheckCircle
};

const Features = () => {
  const { features } = siteContent;
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Features - AI Digital Marketing Platform | inShare</title>
        <meta name="title" content="Features - AI Digital Marketing Platform | inShare" />
        <meta name="description" content="Discover inShare's powerful features: AI-powered CRM, WhatsApp automation, AI email generator, dynamic forms, content tracking, and complete marketing automation." />
        <meta name="keywords" content="crm features, ai marketing automation, whatsapp automation, email automation, dynamic forms, content tracking, marketing platform features" />
        <link rel="canonical" href="https://inshare.in/features" />
        
        <meta property="og:title" content="Features - AI Digital Marketing Platform | inShare" />
        <meta property="og:description" content="Complete AI digital marketing features: CRM, WhatsApp automation, AI email generator, and more." />
        <meta property="og:url" content="https://inshare.in/features" />
      </Helmet>

      <div className="min-h-screen bg-background-dark">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white text-4xl md:text-6xl font-black mb-6">
                {features.headline}
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                Everything you need to automate marketing, manage customers, and grow your business—all in one powerful platform.
              </p>
              <button
                onClick={() => navigate('/request-demo')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary text-lg font-bold rounded-lg hover:bg-accent/80 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.items.map((feature, index) => {
                const IconComponent = iconMap[feature.icon] || Shield;
                return (
                  <div
                    key={index}
                    className="bg-primary/30 rounded-xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                  Why Choose inShare?
                </h2>
                <p className="text-white/70 text-lg">
                  The most comprehensive AI digital marketing platform for modern businesses
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">All-in-One Solution</h3>
                      <p className="text-white/70">
                        Stop paying for multiple tools. Get CRM, email automation, WhatsApp marketing, forms, and analytics in one platform.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">AI-Powered Automation</h3>
                      <p className="text-white/70">
                        Let AI handle repetitive tasks. Automated lead scoring, email writing, follow-ups, and campaign optimization.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">Easy to Use</h3>
                      <p className="text-white/70">
                        No technical skills required. Simple drag-and-drop interface, intuitive dashboard, and helpful onboarding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">Real-Time Analytics</h3>
                      <p className="text-white/70">
                        Track every interaction, measure campaign performance, and get AI-powered insights to optimize your strategy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">Affordable Pricing</h3>
                      <p className="text-white/70">
                        Enterprise features at startup prices. Plans start at ₹99/month with no hidden fees or long-term contracts.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">24/7 Support</h3>
                      <p className="text-white/70">
                        Get help when you need it. Our support team is available via email, chat, and WhatsApp to ensure your success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-primary/40 to-primary/20 rounded-2xl p-12 border border-accent/30 text-center">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                  See How Everything Works Together
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Watch our features in action. From lead capture to conversion, see how inShare automates your entire marketing workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigate('/request-demo')}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary text-lg font-bold rounded-lg hover:bg-accent/80 transition-colors"
                  >
                    Request Demo
                  </button>
                  <button
                    onClick={() => navigate('/pricing')}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary/50 text-white text-lg font-bold rounded-lg border border-accent/50 hover:bg-primary/70 transition-colors"
                  >
                    View Pricing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-accent text-4xl md:text-5xl font-black mb-2">5-in-1</div>
                  <div className="text-white/70">Tools in One Platform</div>
                </div>
                <div>
                  <div className="text-accent text-4xl md:text-5xl font-black mb-2">90%+</div>
                  <div className="text-white/70">WhatsApp Open Rate</div>
                </div>
                <div>
                  <div className="text-accent text-4xl md:text-5xl font-black mb-2">3x</div>
                  <div className="text-white/70">Better Conversion</div>
                </div>
                <div>
                  <div className="text-accent text-4xl md:text-5xl font-black mb-2">24/7</div>
                  <div className="text-white/70">AI Automation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-white text-3xl md:text-5xl font-black mb-6">
                Ready to Transform Your <span className="text-accent">Marketing</span>?
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-8">
                Join hundreds of businesses automating their marketing with inShare
              </p>
              <button
                onClick={() => navigate('/request-demo')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary text-lg font-bold rounded-lg hover:bg-accent/80 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
