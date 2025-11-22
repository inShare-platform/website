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
            Traditional File Sharing Is Costing You Revenue
          </h1>
          <p className="text-white/70 text-lg font-normal leading-relaxed max-w-[700px]">
            Every day, businesses lose potential deals due to lack of visibility, missed follow-ups, and unprofessional document sharing. Here's how inShare solves these critical challenges.
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {problems.map((item, index) => (
            <div
              key={item.id}
              className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch ${
                index !== problems.length - 1 ? 'pb-12 border-b border-white/5' : ''
              }`}
              style={{ 
                animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`,
              }}
            >
              {/* Connecting SVG Arrow between cards - animated */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse-slow">
                <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-30">
                  <path
                    d="M10 30 L50 30 M50 30 L40 20 M50 30 L40 40"
                    stroke="#00BCD4"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Problem Card - Enhanced hover animations */}
              <div className="relative flex flex-col gap-5 rounded-2xl border-2 border-red-500/20 bg-gradient-to-br from-red-500/5 to-red-500/10 p-8 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm group cursor-pointer">
                {/* Decorative corner SVG - animated on hover */}
                <svg className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500" viewBox="0 0 100 100">
                  <path d="M100,0 L100,100 L0,100 Z" fill="#ef4444" />
                </svg>

                {/* Animated ring on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-red-400 animate-ping-slow"></div>
                </div>

                <div className="flex items-center gap-3 mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                  <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-300">
                    <AlertCircle className="w-6 h-6 text-red-400 group-hover:animate-pulse" />
                  </div>
                  <span className="text-red-400/80 text-sm font-semibold uppercase tracking-wider">
                    Challenge #{item.id}
                  </span>
                </div>
                <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight group-hover:text-red-300 transition-colors duration-300">
                  {item.problem}
                </h2>
                <div className="flex-1">
                  <p className="text-white/60 text-sm font-medium mb-3 uppercase tracking-wide">
                    What this means for your business:
                  </p>
                  <ul className="space-y-3">
                    {item.problemDetails.map((detail, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3 text-white/70 text-base leading-relaxed transform group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <span className="text-red-400 mt-1 font-bold">×</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Solution Card - Enhanced hover animations */}
              <div className="relative flex flex-col gap-5 rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-green-500/10 p-8 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm group cursor-pointer">
                {/* Decorative corner SVG - animated on hover */}
                <svg className="absolute top-0 left-0 w-16 h-16 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500" viewBox="0 0 100 100">
                  <path d="M0,0 L100,0 L0,100 Z" fill="#00BCD4" />
                </svg>

                {/* Checkmark pattern SVG - animated on hover */}
                <svg className="absolute bottom-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500" viewBox="0 0 100 100">
                  <path d="M20,50 L40,70 L80,30" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Animated ring on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-accent animate-ping-slow"></div>
                </div>

                <div className="flex items-center gap-3 mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-accent group-hover:animate-pulse" />
                  </div>
                  <span className="text-accent/80 text-sm font-semibold uppercase tracking-wider">
                    inShare Solution
                  </span>
                </div>
                <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight group-hover:text-accent transition-colors duration-300">
                  {item.solution}
                </h2>
                <div className="flex-1">
                  <p className="text-white/60 text-sm font-medium mb-3 uppercase tracking-wide">
                    How inShare helps:
                  </p>
                  <ul className="space-y-3">
                    {item.solutionFeatures.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3 text-white/80 text-base leading-relaxed transform group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
