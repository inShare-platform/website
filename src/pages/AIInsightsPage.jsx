import { Helmet } from 'react-helmet-async';
import { Brain, Zap, TrendingUp, Target, BarChart, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import siteContent from '../data/siteContent.json';

const AIInsightsPage = () => {
  const { aiInsights } = siteContent;
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>AI Insights - Intelligent Marketing Analytics | inShare</title>
        <meta name="title" content="AI Insights - AI Digital Marketing Intelligence | inShare" />
        <meta name="description" content="Discover AI-powered insights for your marketing. Predictive analytics, lead scoring, campaign optimization, and intelligent recommendations powered by AI." />
        <meta name="keywords" content="ai insights, ai analytics, predictive analytics, lead scoring, ai marketing intelligence, marketing ai, campaign optimization" />
        <link rel="canonical" href="https://inshare.in/ai-insights" />
        
        <meta property="og:title" content="AI Insights - Marketing Intelligence | inShare" />
        <meta property="og:description" content="AI-powered marketing insights and predictive analytics to optimize your campaigns." />
        <meta property="og:url" content="https://inshare.in/ai-insights" />
      </Helmet>

      <div className="min-h-screen bg-background-dark">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/30 mb-6">
                <Brain className="w-5 h-5 text-accent" />
                <span className="text-white text-sm font-bold">Powered by Advanced AI</span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-black mb-6">
                {aiInsights.headline}
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                Make smarter decisions with AI-powered insights that analyze every customer interaction, predict behavior, and optimize your campaigns automatically.
              </p>
              <button
                onClick={() => navigate('/request-demo')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary text-lg font-bold rounded-lg hover:bg-accent/80 transition-colors"
              >
                See AI in Action
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-primary/30 rounded-xl p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Predictive Lead Scoring</h3>
                  <p className="text-white/70 leading-relaxed">
                    AI analyzes hundreds of signals to predict which leads are most likely to convert, helping you focus on high-value opportunities.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Campaign Optimization</h3>
                  <p className="text-white/70 leading-relaxed">
                    Automatically optimize email timing, content, and targeting based on historical performance and engagement patterns.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Customer Segmentation</h3>
                  <p className="text-white/70 leading-relaxed">
                    AI automatically groups customers based on behavior, preferences, and likelihood to buy, enabling hyper-personalized marketing.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Content Recommendations</h3>
                  <p className="text-white/70 leading-relaxed">
                    Get AI-powered suggestions on what content to create, which topics resonate, and how to improve engagement.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Real-Time Alerts</h3>
                  <p className="text-white/70 leading-relaxed">
                    Receive instant notifications when hot leads engage, so you can follow up at the perfect moment.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <BarChart className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Performance Forecasting</h3>
                  <p className="text-white/70 leading-relaxed">
                    Predict future campaign performance, revenue trends, and customer lifetime value with AI-powered forecasting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Demo Terminal */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                  {aiInsights.demo.title}
                </h2>
                <p className="text-white/70 text-lg">
                  Watch AI analyze customer behavior in real-time
                </p>
              </div>

              <div className="bg-[#0a0a0a] rounded-xl p-8 border border-accent/30 font-mono text-sm">
                {aiInsights.demo.lines.map((line, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${
                      line.includes('🔥') ? 'text-red-400 font-bold' :
                      line.includes('[AI') ? 'text-accent font-bold' :
                      line.includes('✓') ? 'text-green-400 font-bold' :
                      'text-white/80'
                    }`}
                    style={{
                      animation: `fadeIn 0.5s ease-out ${index * 0.3}s both`
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How AI Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                  How AI Powers Your Marketing
                </h2>
                <p className="text-white/70 text-lg">
                  Continuous learning and optimization for better results
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {aiInsights.content.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent text-2xl font-bold">{index + 1}</span>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                  Why AI Insights Matter
                </h2>
                <p className="text-white/70 text-lg">
                  Data-driven decisions that improve your bottom line
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl p-8 border border-accent/30">
                  <div className="text-accent text-5xl font-black mb-4">3x</div>
                  <h3 className="text-white text-xl font-bold mb-2">Better Conversions</h3>
                  <p className="text-white/70">
                    AI-powered lead scoring helps you focus on prospects most likely to buy
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl p-8 border border-accent/30">
                  <div className="text-accent text-5xl font-black mb-4">60%</div>
                  <h3 className="text-white text-xl font-bold mb-2">Time Saved</h3>
                  <p className="text-white/70">
                    Automate analysis and reporting, freeing your team to focus on strategy
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl p-8 border border-accent/30">
                  <div className="text-accent text-5xl font-black mb-4">40%</div>
                  <h3 className="text-white text-xl font-bold mb-2">Higher ROI</h3>
                  <p className="text-white/70">
                    Optimize campaigns automatically based on what actually works
                  </p>
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
                Experience the Power of <span className="text-accent">AI Marketing</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-8">
                See how AI insights can transform your marketing strategy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/request-demo')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary text-lg font-bold rounded-lg hover:bg-accent/80 transition-colors"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/features')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary/50 text-white text-lg font-bold rounded-lg border border-accent/50 hover:bg-primary/70 transition-colors"
                >
                  View All Features
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default AIInsightsPage;
