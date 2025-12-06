import { useState } from 'react';
import { X } from 'lucide-react';
import SuccessModal from './SuccessModal';

const DemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
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
    setSubmitStatus(null);
    setSubmitMessage('');
    
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
        // Success - close this modal and show success modal
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          comments: ''
        });
        onClose();
        setShowSuccessModal(true);
      } else {
        // API returned an error
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Failed to submit your request. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      // Network or other error
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return (
    <SuccessModal 
      isOpen={showSuccessModal} 
      onClose={() => setShowSuccessModal(false)} 
    />
  );

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-primary border border-accent/30 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl z-[10000]">
        {/* Header */}
        <div className="sticky top-0 bg-primary border-b border-white/10 p-6 flex items-center justify-between">
          <h2 className="text-white text-2xl font-bold">Request a Demo</h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
              Name <span className="text-accent">*</span>
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
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
              Email <span className="text-accent">*</span>
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
              placeholder="your.email@example.com"
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
              Comments <span className="text-accent">*</span>
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
              placeholder="Tell us about your requirements..."
            ></textarea>
            {errors.comments && (
              <p className="text-red-500 text-xs mt-1">{errors.comments}</p>
            )}
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus === 'success'
                  ? 'bg-green-500/20 border border-green-500/50'
                  : 'bg-red-500/20 border border-red-500/50'
              }`}
            >
              <p
                className={`text-sm font-medium ${
                  submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {submitMessage}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-bold text-primary transition-all ${
              isSubmitting
                ? 'bg-accent/50 cursor-not-allowed'
                : 'bg-accent hover:bg-accent/80'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>

          <p className="text-white/50 text-xs text-center mt-4">
            All fields are required. We'll get back to you within 24 hours.
          </p>
        </form>
      </div>
      </div>
      
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </>
  );
};

export default DemoModal;
