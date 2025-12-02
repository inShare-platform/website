import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const ContactPage = () => {
  const { contact } = siteContent;

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | inShare</title>
        <meta name="description" content="Contact inShare for support, sales inquiries, or partnership opportunities. We're here to help you succeed with AI marketing automation." />
        <meta name="keywords" content="contact, support, sales, help, customer service, get in touch" />
        <link rel="canonical" href="https://inshare.in/contact" />
      </Helmet>

      <div className="min-h-screen bg-background-dark">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white text-4xl md:text-6xl font-black mb-6">
                {contact.headline}
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                {contact.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-white text-3xl font-black mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold mb-1">Email</h3>
                      <a href={`mailto:${contact.details.email}`} className="text-accent hover:text-accent/80 transition-colors">
                        {contact.details.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold mb-1">Phone</h3>
                      <a href={`tel:${contact.details.phone}`} className="text-accent hover:text-accent/80 transition-colors">
                        {contact.details.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold mb-1">WhatsApp</h3>
                      <a 
                        href={`https://wa.me/${contact.details.phone.replace(/[^0-9]/g, '')}`}
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold mb-1">Business Hours</h3>
                      <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p className="text-white/70">Saturday: 10:00 AM - 4:00 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold mb-1">Location</h3>
                      <p className="text-white/70">India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {contact.details.social.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors"
                      >
                        <span className="text-accent font-bold">{social.platform[0]}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h2 className="text-white text-3xl font-black mb-8">
                  Quick Actions
                </h2>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/919080122084?text=Hi%2C%20I%20would%20like%20to%20request%20a%20demo%20of%20inShare."
                    className="block bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-6 border border-accent/30 hover:border-accent/50 transition-all group"
                  >
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      Request a Demo
                    </h3>
                    <p className="text-white/70 mb-4">
                      See our platform in action with a personalized demo
                    </p>
                    <div className="flex items-center gap-2 text-accent">
                      <span className="font-bold">Schedule Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919080122084?text=Hi%2C%20I%20need%20help%20with%20inShare."
                    className="block bg-primary/30 rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all group"
                  >
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      Get Support
                    </h3>
                    <p className="text-white/70 mb-4">
                      Need help? Our support team is ready to assist you
                    </p>
                    <div className="flex items-center gap-2 text-accent">
                      <span className="font-bold">Contact Support</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919080122084?text=Hi%2C%20I'm%20interested%20in%20partnership%20opportunities."
                    className="block bg-primary/30 rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all group"
                  >
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      Partnership Inquiries
                    </h3>
                    <p className="text-white/70 mb-4">
                      Interested in partnering with us? Let's talk
                    </p>
                    <div className="flex items-center gap-2 text-accent">
                      <span className="font-bold">Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                Looking for Answers?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Check out our FAQ page for quick answers to common questions
              </p>
              <a
                href="/faq"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary text-lg font-bold rounded-lg hover:bg-accent/90 transition-all hover:scale-105"
              >
                View FAQ
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
