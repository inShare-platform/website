import ReactGA from 'react-ga4';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-YNY8E4XKKB';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID, {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
    gtagOptions: {
      send_page_view: false, // We'll handle page views manually
    },
  });
};

// Track page views
export const trackPageView = (path, title) => {
  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Specific event trackers for common actions
export const trackDemoRequest = (source = '') => {
  trackEvent('Engagement', 'Request Demo', source);
};

export const trackBlogView = (blogTitle) => {
  trackEvent('Content', 'View Blog Post', blogTitle);
};

export const trackPricingClick = (plan) => {
  trackEvent('Pricing', 'Click Plan', plan);
};

export const trackNavigation = (destination) => {
  trackEvent('Navigation', 'Click Link', destination);
};

export const trackFormSubmit = (formName) => {
  trackEvent('Form', 'Submit', formName);
};

export const trackExternalLink = (url) => {
  trackEvent('External Link', 'Click', url);
};

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackDemoRequest,
  trackBlogView,
  trackPricingClick,
  trackNavigation,
  trackFormSubmit,
  trackExternalLink,
};
