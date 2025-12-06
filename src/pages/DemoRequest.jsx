import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SuccessModal from '../components/SuccessModal';

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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
    setSubmitError('');
    
    try {
      // Call the API endpoint
      const response = await fetch('https://api.inshare.in/api/v1/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          emailAddress: formData.email,
          phoneNumber: formData.phone,
          comments: formData.comments
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success - show success modal
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          comments: ''
        });
        setShowSuccessModal(true);
      } else {
        // API returned an error
        setSubmitError(data.error || 'Failed to submit your request. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      // Network or other error
      setSubmitError('Network error. Please check your connection and try again.');
      setIsSubmitting(false);
    }
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

                  {/* Error Message */}
                  {submitError && (
                    <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50">
                      <p className="text-sm font-medium text-red-400">
                        {submitError}
                      </p>
                    </div>
                  )}

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
            </div>
          </div>
        </div>
      </div>
      
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </>
  );
};

export default DemoRequest;
