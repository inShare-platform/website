import { AlertCircle, CheckCircle } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const Problems = () => {
  const { problems } = siteContent;

  return (
    <section className="relative py-20 bg-gradient-to-b from-primary/30 to-background-dark overflow-hidden">
      {/* Decorative SVG Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Circles */}
        <svg className="absolute top-10 left-10 w-32 h-32 opacity-20" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#ef4444" strokeWidth="2" className="animate-pulse" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#ef4444" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        </svg>

        {/* Right Side Gradient Waves */}
        <svg className="absolute top-1/4 right-0 w-64 h-64 opacity-10" viewBox="0 0 200 200">
          <path d="M0,100 Q50,80 100,100 T200,100 L200,200 L0,200 Z" fill="url(#gradient1)" className="animate-pulse" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00BCD4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Bottom Right Abstract Shape */}
        <svg className="absolute bottom-20 right-20 w-40 h-40 opacity-15" viewBox="0 0 200 200">
          <polygon points="100,10 40,180 160,180" fill="none" stroke="#00BCD4" strokeWidth="2" className="animate-pulse" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#10b981" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>

        {/* Center Abstract Lines */}
        <svg className="absolute top-1/2 left-1/4 w-48 h-48 opacity-10" viewBox="0 0 200 200">
          <line x1="0" y1="100" x2="200" y2="100" stroke="#00BCD4" strokeWidth="2" className="animate-pulse" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="#00BCD4" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#00BCD4" strokeWidth="2" strokeDasharray="10,5" className="animate-spin-slow" />
        </svg>

        {/* Floating Dots Pattern */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-4 text-center items-center mb-16 animate-fade-in-down">
          <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-2 animate-bounce-subtle">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
              Common Challenges
            </span>
          </div>
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-5xl max-w-[800px]">
            AI Digital Marketing & AI Marketing Automation Challenges Costing You Revenue
          </h1>
          <p className="text-white/70 text-lg font-normal leading-relaxed max-w-[700px]">
            Businesses struggle with AI digital marketing implementation, AI marketing automation complexity, and AI in digital marketing strategy. Here's how inShare's unified platform solves these critical challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((item, index) => (
            <div
              key={item.id}
              className="relative flex flex-col gap-4 rounded-xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
              style={{ 
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M100,0 L100,100 L0,100 Z" fill="#00BCD4" />
                </svg>
              </div>

              {/* Challenge Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-all duration-300">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-red-400/80 text-xs font-semibold uppercase tracking-wider">
                  Challenge #{item.id}
                </span>
              </div>

              {/* Problem Title */}
              <h3 className="text-white text-lg font-bold leading-tight mb-3 group-hover:text-accent transition-colors duration-300">
                {item.problem}
              </h3>

              {/* Problem Details - Compact */}
              <div className="mb-4 pb-4 border-b border-white/10">
                <p className="text-white/50 text-xs font-medium mb-2 uppercase tracking-wide">
                  Impact:
                </p>
                <ul className="space-y-2">
                  {item.problemDetails.slice(0, 2).map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-2 text-white/60 text-sm leading-snug"
                    >
                      <span className="text-red-400 mt-0.5 text-xs">×</span>
                      <span className="line-clamp-2">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution Section */}
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <span className="text-accent/80 text-xs font-semibold uppercase tracking-wider">
                  Solution
                </span>
              </div>

              {/* Solution Title */}
              <h4 className="text-white text-base font-semibold leading-tight mb-3">
                {item.solution}
              </h4>

              {/* Solution Features - Compact */}
              <ul className="space-y-2">
                {item.solutionFeatures.slice(0, 2).map((feature, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-2 text-white/70 text-sm leading-snug"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pingSlow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Problems;
