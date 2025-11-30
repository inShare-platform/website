import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | inShare</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to inShare homepage to explore our AI digital marketing and CRM solutions." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              <Home size={20} />
              Go to Homepage
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-surface-dark border-2 border-primary/20 text-text-primary rounded-lg font-semibold hover:border-primary/50 transition-all"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
          
          <div className="mt-12 p-6 bg-surface-dark rounded-lg border border-primary/10">
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Looking for something specific?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <Link to="/" className="text-primary hover:text-accent transition-colors">
                → Home
              </Link>
              <Link to="/blog" className="text-primary hover:text-accent transition-colors">
                → Blog
              </Link>
              <Link to="/request-demo" className="text-primary hover:text-accent transition-colors">
                → Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
