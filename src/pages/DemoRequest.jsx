import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const DemoRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.comments.trim()) {
      newErrors.comments = 'Comments are required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Create WhatsApp message
    const message = `*Demo Request*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Comments:* ${formData.comments}`;
    const whatsappUrl = `https://wa.me/919080122084?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds and redirect
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          comments: ''
        });
        setIsSuccess(false);
        navigate('/');
      }, 3000);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Request a Demo - inShare | AI-Powered CRM & Content Tracker</title>
        <meta name="description" content="Request a personalized demo of inShare's content tracker, CRM marketing automation, and lead generation tools. Transform your sales process today." />
        <meta name="keywords" content="demo request, inShare demo, crm demo, content tracker demo, sales automation demo" />
      </Helmet>

      <div className="min-h-screen bg-background-dark py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-white text-4xl md:text-5xl font-black mb-4">
                  Request a Demo
                </h1>
                <p className="text-white/70 text-lg">
                  See how inShare can transform your document sharing and lead generation process. Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="bg-primary/30 rounded-lg p-6 border border-white/10">
                <h2 className="text-white text-xl font-bold mb-4">What to Expect</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">Personalized walkthrough of all features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">Custom solutions for your business needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">Integration and implementation guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">Pricing options tailored to your scale</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/10 rounded-lg p-6 border border-accent/30">
                <h3 className="text-accent font-bold mb-2">Why inShare?</h3>
                <p className="text-white/70 text-sm">
                  Join hundreds of businesses using inShare to track content engagement, automate follow-ups, and convert more leads with AI-powered insights.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-primary/30 rounded-lg p-8 border border-white/10">
              {isSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h2 className="text-white text-2xl font-bold mb-2">Request Submitted!</h2>
                  <p className="text-white/70 mb-4">
                    We've received your demo request and will contact you shortly via WhatsApp.
                  </p>
                  <p className="text-white/50 text-sm">Redirecting to home...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-white text-2xl font-bold mb-6">Get Started</h2>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-background-dark border ${
                        errors.name ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                      Business Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-background-dark border ${
                        errors.email ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-background-dark border ${
                        errors.phone ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors`}
                      placeholder="+91 9080122084"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Comments */}
                  <div>
                    <label htmlFor="comments" className="block text-white text-sm font-bold mb-2">
                      Tell us about your needs <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-background-dark border ${
                        errors.comments ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none`}
                      placeholder="Tell us about your business, team size, and what you're looking to achieve with inShare..."
                    ></textarea>
                    {errors.comments && (
                      <p className="text-red-500 text-xs mt-1">{errors.comments}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-primary text-lg transition-all ${
                      isSubmitting
                        ? 'bg-accent/50 cursor-not-allowed'
                        : 'bg-accent hover:bg-accent/80 hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Demo'}
                  </button>

                  <p className="text-white/50 text-xs text-center mt-4">
                    All fields are required. We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoRequest;
