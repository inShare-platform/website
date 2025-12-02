import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type = 'organization' }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "inShare",
    "alternateName": "inShare Platform",
    "url": "https://inshare.in",
    "logo": "https://inshare.in/logo-512.png", // TODO: Add square logo (512x512px) to public folder
    "description": "Leading AI digital marketing platform with complete AI marketing automation, CRM, WhatsApp automation, and smart business tools.",
    "sameAs": [
      "https://twitter.com/inshare",
      "https://facebook.com/inshare",
      "https://linkedin.com/company/inshare"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "support@inshare.in",
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "inShare",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free CRM with AI-powered features"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "description": "Leading AI digital marketing platform with AI marketing automation, CRM system, WhatsApp automation, AI email generator, and smart forms for modern businesses.",
    "featureList": [
      "CRM System",
      "WhatsApp Automation",
      "AI Email Generator",
      "Lead Capture Forms",
      "Analytics Dashboard",
      "Real-time Tracking"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "inShare",
    "url": "https://inshare.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://inshare.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://inshare.in"
      }
    ]
  };

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return organizationSchema;
      case 'software':
        return softwareSchema;
      case 'website':
        return websiteSchema;
      case 'breadcrumb':
        return breadcrumbSchema;
      default:
        return organizationSchema;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getSchema())}
      </script>
    </Helmet>
  );
};

export default StructuredData;
