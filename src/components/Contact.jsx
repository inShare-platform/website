import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, MapPin, Clock, MessageSquare } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const Contact = () => {
  const { contact } = siteContent;

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-background-dark to-primary/30 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col gap-4 text-center items-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-2">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </span>
          </div>
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-5xl max-w-3xl">
            {contact.headline}
          </h1>
          <p className="text-white/70 text-lg font-normal leading-relaxed max-w-2xl">
            {contact.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <a
                href={`mailto:${contact.details.email}`}
                className="group relative flex flex-col gap-4 p-8 rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/10 hover:from-accent/5 hover:to-accent/10 hover:border-accent/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                    <Mail className="w-7 h-7 text-accent" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-accent/20 flex items-center justify-center group-hover:border-accent/60 transition-all">
                    <span className="text-accent text-xs">→</span>
                  </div>
                </div>
                <div>
                  <p className="text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="text-white text-lg font-semibold group-hover:text-accent transition-colors">
                    {contact.details.email}
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    For general inquiries and support
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${contact.details.phone}`}
                className="group relative flex flex-col gap-4 p-8 rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/10 hover:from-accent/5 hover:to-accent/10 hover:border-accent/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-accent/20 flex items-center justify-center group-hover:border-accent/60 transition-all">
                    <span className="text-accent text-xs">→</span>
                  </div>
                </div>
                <div>
                  <p className="text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">
                    Phone Number
                  </p>
                  <p className="text-white text-lg font-semibold group-hover:text-accent transition-colors">
                    {contact.details.phone}
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    Mon-Fri, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${contact.details.phone.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20inShare`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col gap-4 p-8 rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/10 hover:from-green-500/5 hover:to-green-500/10 hover:border-green-500/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300">
                    <MessageSquare className="w-7 h-7 text-green-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-green-500/20 flex items-center justify-center group-hover:border-green-500/60 transition-all">
                    <span className="text-green-400 text-xs">→</span>
                  </div>
                </div>
                <div>
                  <p className="text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">
                    WhatsApp
                  </p>
                  <p className="text-white text-lg font-semibold group-hover:text-green-400 transition-colors">
                    Chat with us instantly
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    Get quick responses on WhatsApp
                  </p>
                </div>
              </a>

              {/* Business Hours Card */}
              <div className="relative flex flex-col gap-4 p-8 rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-xl bg-accent/10">
                    <Clock className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div>
                  <p className="text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">
                    Business Hours
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Monday - Friday</span>
                      <span className="text-white font-semibold text-sm">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Saturday</span>
                      <span className="text-white font-semibold text-sm">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Sunday</span>
                      <span className="text-white/60 text-sm">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative flex flex-col gap-6 p-8 rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/20 backdrop-blur-sm">
              <div>
                <h3 className="text-white text-2xl font-bold mb-3">
                  Ready to Transform Your Marketing?
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Join hundreds of businesses using our AI digital marketing platform to automate their marketing and boost revenue.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  to="/request-demo"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1"
                >
                  Request Demo
                  <span>→</span>
                </Link>
                <a
                  href="https://wa.me/919080122084?text=Hi%2C%20I%20have%20a%20question%20about%20inShare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-accent/40 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Ask a Question
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm mb-4 uppercase tracking-wider">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {contact.details.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent/40 transition-all group"
                      aria-label={social.platform}
                    >
                      {social.platform === 'LinkedIn' ? (
                        <Linkedin className="w-5 h-5 text-white/60 group-hover:text-accent transition-colors" />
                      ) : (
                        <Twitter className="w-5 h-5 text-white/60 group-hover:text-accent transition-colors" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
