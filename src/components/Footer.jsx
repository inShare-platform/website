import siteContent from '../data/siteContent.json';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const { brandName, contact } = siteContent;

  return (
    <footer className="bg-gradient-to-b from-primary/50 to-background-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4 items-start col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-px">
                <span className="h-6 w-2 bg-white"></span>
                <span className="h-6 w-2 bg-gray-300"></span>
                <span className="h-6 w-2 bg-accent"></span>
              </div>
              <span className="text-2xl font-bold tracking-wider text-white">{brandName}</span>
            </div>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Leading AI digital marketing platform with AI marketing automation and AI in digital marketing. Complete CRM system with WhatsApp automation, AI cold email generator, and dynamic form builder.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a href={`mailto:${contact.details.email}`} className="flex items-center gap-2 text-white/60 hover:text-accent text-sm transition-colors">
                <Mail className="w-4 h-4" />
                {contact.details.email}
              </a>
              <a href={`tel:${contact.details.phone}`} className="flex items-center gap-2 text-white/60 hover:text-accent text-sm transition-colors">
                <Phone className="w-4 h-4" />
                {contact.details.phone}
              </a>
            </div>
          </div>

          {/* AI Digital Marketing */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white text-sm uppercase tracking-wider">AI Marketing</p>
            <a href="#features" className="text-white/60 hover:text-accent text-sm transition-colors">
              AI Digital Marketing
            </a>
            <a href="#features" className="text-white/60 hover:text-accent text-sm transition-colors">
              AI Marketing Automation
            </a>
            <a href="#features" className="text-white/60 hover:text-accent text-sm transition-colors">
              AI in Digital Marketing
            </a>
            <a href="#features" className="text-white/60 hover:text-accent text-sm transition-colors">
              AI Cold Email Generator
            </a>
            <a href="#features" className="text-white/60 hover:text-accent text-sm transition-colors">
              WhatsApp Automation
            </a>
          </div>

          {/* CRM Features */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white text-sm uppercase tracking-wider">CRM System</p>
            <a href="#features" className="text-white/60 hover:text-accent text-sm transition-colors">
              Free CRM
            </a>
            <a href="#features" className="text-white/60 hover:text-accent text-sm transition-colors">
              CRM Software
            </a>
            <a href="#features" className="text-white/60 hover:text-accent text-sm transition-colors">
              Lead Management
            </a>
            <a href="#features" className="text-white/60 hover:text-accent text-sm transition-colors">
              Sales Pipeline
            </a>
            <a href="#features" className="text-white/60 hover:text-accent text-sm transition-colors">
              Contact Management
            </a>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white text-sm uppercase tracking-wider">Product</p>
            <a href="#features" className="text-white/60 hover:text-accent text-sm transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-white/60 hover:text-accent text-sm transition-colors">
              Pricing
            </a>
            <a href="#ai-insights" className="text-white/60 hover:text-accent text-sm transition-colors">
              AI Insights
            </a>
            <a href="#faq" className="text-white/60 hover:text-accent text-sm transition-colors">
              FAQ
            </a>
            <a href="/blog" className="text-white/60 hover:text-accent text-sm transition-colors">
              Blog
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white text-sm uppercase tracking-wider">Company</p>
            <a href="#contact" className="text-white/60 hover:text-accent text-sm transition-colors">
              Contact Us
            </a>
            <a href="/about" className="text-white/60 hover:text-accent text-sm transition-colors">
              About Us
            </a>
            <a href="/careers" className="text-white/60 hover:text-accent text-sm transition-colors">
              Careers
            </a>
            <a href="/demo" className="text-white/60 hover:text-accent text-sm transition-colors">
              Request Demo
            </a>
            <a href="/partners" className="text-white/60 hover:text-accent text-sm transition-colors">
              Partners
            </a>
          </div>
        </div>

        {/* Keywords Section */}
        <div className="py-8 border-y border-white/10">
          <p className="text-white/40 text-xs mb-4 font-semibold uppercase tracking-wider">
            AI Digital Marketing & CRM Keywords
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'AI digital marketing',
              'AI marketing automation',
              'AI in digital marketing',
              'CRM system',
              'customer relationship management',
              'free CRM',
              'CRM software',
              'CRM for small business',
              'lead management system',
              'contact management software',
              'sales tracking software',
              'pipeline management',
              'WhatsApp automation',
              'AI cold email generator',
              'dynamic form builder',
              'marketing automation software',
              'sales CRM',
              'business CRM software',
              'free CRM for small business',
              'AI email marketing',
              'automated follow-ups',
              'lead capture forms',
              'customer engagement platform'
            ].map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/50 text-xs transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-white/40 text-xs">
                © 2024 {brandName}, Inc. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                {contact.footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="text-white/60 hover:text-accent text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {contact.details.social.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/40 rounded-lg text-white/60 hover:text-accent transition-all"
                  aria-label={social.platform}
                >
                  {social.platform === 'LinkedIn' ? (
                    <Linkedin className="w-4 h-4" />
                  ) : social.platform === 'Twitter' ? (
                    <Twitter className="w-4 h-4" />
                  ) : null}
                </a>
              ))}
            </div>
          </div>

          {/* SEO Description */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/30 text-xs leading-relaxed text-center max-w-4xl mx-auto">
              inShare is the leading AI digital marketing platform with complete AI marketing automation and AI in digital marketing capabilities. Our unified platform combines CRM system, customer relationship management, WhatsApp marketing automation, AI cold email generator, dynamic form builder, and sales pipeline management. Built for small business owners who need affordable CRM software with powerful AI marketing automation. Start with our free CRM features and scale with AI in digital marketing tools that drive revenue.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
