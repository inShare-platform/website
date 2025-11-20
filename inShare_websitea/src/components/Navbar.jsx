import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { brandName, navbar } = siteContent;

  return (
    <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="#home" className="flex items-center gap-2 text-white">
              <div className="flex items-center gap-px">
                <span className="h-6 w-2 bg-white"></span>
                <span className="h-6 w-2 bg-gray-300"></span>
                <span className="h-6 w-2 bg-accent"></span>
              </div>
              <span className="text-2xl font-bold tracking-wider">{brandName}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navbar.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-white/70 hover:text-white text-sm font-bold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/dashboard"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-accent text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-accent/80 transition-colors"
            >
              <span className="truncate">Get Started Free</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navbar.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-white/70 hover:text-white text-sm font-bold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/dashboard"
                className="flex items-center justify-center rounded-lg h-10 px-4 bg-accent text-primary text-sm font-bold hover:bg-accent/80 transition-colors mt-2"
              >
                Get Started Free
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
