import siteContent from '../data/siteContent.json';

const Footer = () => {
  const { brandName, contact } = siteContent;

  return (
    <footer className="bg-primary/50 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <p className="text-white/60 text-sm max-w-sm">
              The smartest way to share documents, track engagement, and close deals faster.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white">Product</p>
            <a href="#features" className="text-white/60 hover:text-white text-sm transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-white/60 hover:text-white text-sm transition-colors">
              Pricing
            </a>
            <a href="#ai-insights" className="text-white/60 hover:text-white text-sm transition-colors">
              AI Insights
            </a>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white">Company</p>
            <a href="#contact" className="text-white/60 hover:text-white text-sm transition-colors">
              Contact Us
            </a>
            <a href="/about" className="text-white/60 hover:text-white text-sm transition-colors">
              About Us
            </a>
            <a href="/careers" className="text-white/60 hover:text-white text-sm transition-colors">
              Careers
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2024 {brandName}, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {contact.footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-white/60 hover:text-white text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
