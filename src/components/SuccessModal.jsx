import { CheckCircle, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import blogData from '../data/blogData.json';

const SuccessModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  // Get first 3 blog posts
  const featuredBlogs = blogData.posts.slice(0, 3);

  const handleGoHome = () => {
    onClose();
    navigate('/');
  };

  const handleBlogClick = (slug) => {
    onClose();
    navigate(`/blog/${slug}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-primary border border-accent/30 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl z-[10000]">
        {/* Header */}
        <div className="sticky top-0 bg-primary border-b border-white/10 p-6">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              Hurray! Your Request Submitted! 🎉
            </h2>
            <p className="text-white/70 text-base">
              Our team will reach out to you soon via WhatsApp or email.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Meanwhile Section */}
          <div className="text-center">
            <h3 className="text-white text-xl font-bold mb-2">
              Meanwhile, Read Our Blogs 📚
            </h3>
            <p className="text-white/60 text-sm">
              Discover insights and tips to boost your business growth
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-4">
            {featuredBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogClick(blog.slug)}
                className="group bg-background-dark/50 border border-white/10 rounded-lg p-4 hover:border-accent/40 hover:bg-background-dark/80 transition-all cursor-pointer"
              >
                <div className="flex gap-4">
                  {/* Blog Image */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-primary/30">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Blog Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent text-xs font-semibold px-2 py-1 bg-accent/10 rounded">
                        {blog.category}
                      </span>
                      <span className="text-white/50 text-xs">
                        {blog.readTime}
                      </span>
                    </div>
                    <h4 className="text-white font-bold text-sm md:text-base mb-1 line-clamp-2 group-hover:text-accent transition-colors">
                      {blog.title}
                    </h4>
                    <p className="text-white/60 text-xs line-clamp-2 mb-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-accent text-xs font-semibold">
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Blogs Link */}
          <div className="text-center pt-2">
            <button
              onClick={() => {
                onClose();
                navigate('/blog');
              }}
              className="text-accent hover:text-accent/80 font-semibold text-sm transition-colors inline-flex items-center gap-2"
            >
              View All Blog Posts
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Go to Home Button */}
          <div className="pt-4">
            <button
              onClick={handleGoHome}
              className="w-full py-4 px-6 rounded-lg font-bold text-primary text-lg bg-accent hover:bg-accent/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Go to Home
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-2">
            <p className="text-white/40 text-xs">
              Thank you for your interest in inShare! We're excited to connect with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
