import { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="flex items-center gap-2 text-white">
              <div className="flex items-center gap-px">
                <span className="h-6 w-2 bg-white"></span>
                <span className="h-6 w-2 bg-gray-300"></span>
                <span className="h-6 w-2 bg-accent"></span>
              </div>
              <span className="text-2xl font-bold tracking-wider">{brandName}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navbar.map((item, index) => (
              item.link.startsWith('#') ? (
                <a
                  key={index}
                  href={item.link}
                  className="text-white/70 hover:text-white text-sm font-bold transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  className="text-white/70 hover:text-white text-sm font-bold transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link
              to="/request-demo"
              className="px-6 py-2 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40"
            >
              Request Demo
            </Link>
          </nav>


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
                  item.link.startsWith('#') ? (
                    <a
                      key={index}
                      href={item.link}
                      className="text-white/70 hover:text-white text-sm font-bold transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={item.link}
                      className="text-white/70 hover:text-white text-sm font-bold transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <Link
                  to="/request-demo"
                  className="px-6 py-2 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-all duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request Demo
                </Link>
              </nav>
            </div>
          )}
      </div>
    </header>
  );
};

export default Navbar;
