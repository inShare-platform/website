import { Helmet } from 'react-helmet-async';
import { Target, Users, Zap, Award, Lightbulb, TrendingUp } from 'lucide-react';
import founderImage from '../assets/marirajaselvaraja.jpeg';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - inShare | AI Digital Marketing Platform Founded by Mariraja Selvaraja</title>
        <meta name="title" content="About inShare - AI Digital Marketing Platform | Mariraja Selvaraja, Founder & CEO" />
        <meta name="description" content="Learn about inShare's mission to revolutionize AI digital marketing, CRM automation, and business growth. Founded by Mariraja Selvaraja, we empower businesses with AI marketing automation tools." />
        <meta name="keywords" content="about inshare, mariraja selvaraja, ai digital marketing, ai marketing automation, crm software, founder ceo, business automation, marketing platform, whatsapp automation" />
        <meta name="author" content="inShare" />
        <link rel="canonical" href="https://inshare.in/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About inShare - AI Digital Marketing Platform | Mariraja Selvaraja" />
        <meta property="og:description" content="Founded by Mariraja Selvaraja, inShare is revolutionizing AI digital marketing with complete CRM automation and marketing tools for modern businesses." />
        <meta property="og:image" content="https://inshare.in/og_image.png" />
        <meta property="og:url" content="https://inshare.in/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About inShare - AI Digital Marketing Platform | Mariraja Selvaraja" />
        <meta name="twitter:description" content="Learn about inShare's mission to transform digital marketing with AI automation. Founded by Mariraja Selvaraja." />
        <meta name="twitter:image" content="https://inshare.in/og_image.png" />
      </Helmet>

      <div className="min-h-screen bg-background-dark">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white text-4xl md:text-6xl font-black mb-6">
                About <span className="text-accent">inShare</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                Revolutionizing <strong className="text-accent">AI digital marketing</strong> with complete automation, 
                intelligent CRM systems, and powerful business tools that help companies scale faster.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-white text-3xl md:text-4xl font-black mb-6">
                    Our Mission
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-4">
                    At inShare, we're on a mission to democratize <strong className="text-accent">AI digital marketing</strong> and 
                    make powerful <strong className="text-accent">AI marketing automation</strong> accessible to businesses of all sizes. 
                    We believe that every company deserves enterprise-level marketing and CRM tools without the complexity and high costs.
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Our platform combines <strong className="text-accent">AI-powered CRM</strong>, WhatsApp automation, AI email generator, 
                    and smart forms into one unified solution—eliminating the need for multiple tools and subscriptions while delivering 
                    superior results through <strong className="text-accent">AI in digital marketing</strong>.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg blur-3xl"></div>
                  <div className="relative bg-primary/30 rounded-lg p-8 border border-accent/30">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-white text-xl font-bold mb-2">Vision</h3>
                          <p className="text-white/70">
                            To be the world's leading AI digital marketing platform that empowers businesses to automate, scale, and succeed.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Zap className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-white text-xl font-bold mb-2">Innovation</h3>
                          <p className="text-white/70">
                            Constantly pushing boundaries in AI marketing automation and CRM technology to deliver cutting-edge solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                  Meet Our Founder
                </h2>
                <p className="text-white/70 text-lg">
                  Leadership driving innovation in AI digital marketing
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/40 to-primary/20 rounded-2xl p-8 md:p-12 border border-accent/30">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-2xl blur-2xl"></div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-accent/50">
                      <img
                        src={founderImage}
                        alt="Mariraja Selvaraja - Founder & CEO of inShare"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <h3 className="text-white text-3xl font-black mb-2">
                        Mariraja Selvaraja
                      </h3>
                      <p className="text-accent text-xl font-bold mb-4">
                        Founder & CEO
                      </p>
                      <div className="h-1 w-20 bg-accent rounded-full"></div>
                    </div>
                    
                    <div className="space-y-4 text-white/80 text-lg leading-relaxed">
                      <p>
                        <strong className="text-white">Mariraja Selvaraja</strong> founded inShare with a vision to transform 
                        how businesses leverage <strong className="text-accent">AI digital marketing</strong> and automation. 
                        With extensive experience in technology and digital marketing, he recognized the gap between complex 
                        enterprise tools and the needs of growing businesses.
                      </p>
                      <p>
                        Under his leadership, inShare has become a pioneering platform in <strong className="text-accent">AI marketing automation</strong>, 
                        combining CRM systems, WhatsApp automation, AI email generation, and smart forms into one powerful solution. 
                        His commitment to innovation and customer success drives inShare's mission to democratize advanced marketing technology.
                      </p>
                      <p>
                        Mariraja believes that <strong className="text-accent">AI in digital marketing</strong> should be accessible, 
                        affordable, and effective for businesses of all sizes. This philosophy is reflected in every aspect of 
                        inShare's platform design and pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                  Our Core Values
                </h2>
                <p className="text-white/70 text-lg">
                  Principles that guide everything we do at inShare
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-primary/30 rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Customer First</h3>
                  <p className="text-white/70 leading-relaxed">
                    Every feature, every decision, and every innovation is driven by our customers' needs and success. 
                    We build tools that solve real business problems.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Innovation</h3>
                  <p className="text-white/70 leading-relaxed">
                    We continuously explore new AI technologies and marketing strategies to stay ahead of the curve 
                    and deliver cutting-edge solutions.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Excellence</h3>
                  <p className="text-white/70 leading-relaxed">
                    We're committed to delivering exceptional quality in our platform, support, and customer experience. 
                    Excellence is not an option—it's our standard.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Growth Mindset</h3>
                  <p className="text-white/70 leading-relaxed">
                    We believe in continuous learning and improvement, both for our team and our customers. 
                    Growth is a journey we take together.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Simplicity</h3>
                  <p className="text-white/70 leading-relaxed">
                    Complex problems deserve simple solutions. We make powerful AI marketing automation 
                    accessible and easy to use for everyone.
                  </p>
                </div>

                <div className="bg-primary/30 rounded-lg p-8 border border-white/10 hover:border-accent/50 transition-all">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Transparency</h3>
                  <p className="text-white/70 leading-relaxed">
                    Honest communication, clear pricing, and straightforward policies. We build trust 
                    through transparency in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                  What Makes inShare Different
                </h2>
                <p className="text-white/70 text-lg">
                  The all-in-one AI digital marketing platform built for modern businesses
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-primary/40 to-primary/20 rounded-lg p-8 border border-accent/30">
                  <h3 className="text-white text-2xl font-bold mb-4">5-in-1 Platform</h3>
                  <p className="text-white/70 mb-4">
                    Instead of juggling multiple tools, inShare combines everything you need:
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span><strong>AI-Powered CRM</strong> for complete customer relationship management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span><strong>WhatsApp Automation</strong> for native messaging integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span><strong>AI Email Generator</strong> for automated cold outreach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span><strong>Dynamic Form Builder</strong> with AI chat assistant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span><strong>Content Tracker</strong> for engagement analytics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/40 to-primary/20 rounded-lg p-8 border border-accent/30">
                  <h3 className="text-white text-2xl font-bold mb-4">AI Marketing Automation</h3>
                  <p className="text-white/70 mb-4">
                    Powered by advanced AI technology that works 24/7:
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Automated lead scoring and qualification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Personalized email and message generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Intelligent follow-up sequences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Predictive analytics and insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Campaign optimization in real-time</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/40 to-primary/20 rounded-lg p-8 border border-accent/30">
                  <h3 className="text-white text-2xl font-bold mb-4">Built for Small Business</h3>
                  <p className="text-white/70 mb-4">
                    Unlike complex enterprise platforms, inShare is:
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Easy to set up and use (no technical skills required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Affordable pricing starting at ₹99/month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Scalable as your business grows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Focused on essential features that drive results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Responsive customer support</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/40 to-primary/20 rounded-lg p-8 border border-accent/30">
                  <h3 className="text-white text-2xl font-bold mb-4">Proven Results</h3>
                  <p className="text-white/70 mb-4">
                    Our customers achieve remarkable outcomes:
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span><strong>3x increase</strong> in lead conversion rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span><strong>60% reduction</strong> in manual follow-up time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span><strong>5x faster</strong> response to leads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span><strong>40% improvement</strong> in sales team productivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span><strong>90%+ engagement</strong> with WhatsApp campaigns</span>
                    </li>
                  </ul>
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
                Ready to Transform Your <span className="text-accent">Digital Marketing</span>?
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
                Join hundreds of businesses using inShare's AI digital marketing platform to automate marketing, 
                capture more leads, and grow faster with AI marketing automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/request-demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary text-lg font-bold rounded-lg hover:bg-accent/80 transition-colors"
                >
                  Request Demo
                </a>
                <a
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary/50 text-white text-lg font-bold rounded-lg border border-accent/50 hover:bg-primary/70 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
