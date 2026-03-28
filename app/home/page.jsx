'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './home.css';
import { motion } from 'framer-motion';
import { 
  FaStar, FaStarHalfAlt, FaRegStar, 
  FaGoogle, FaExternalLinkAlt, FaGithub,
  FaCalendarAlt, FaUser,
  FaMapMarkerAlt, FaBriefcase, FaAward,
  FaRocket, FaHeart, FaUsers, FaRupeeSign
} from 'react-icons/fa';

/**
 * Home Page Component
 * 
 * Note: Metadata should be defined in a parent layout.tsx or via Next.js 14+ metadata API.
 * This component uses 'use client' to support interactive features like the consultation popup.
 */
const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // ============================================================================
  // Data Models
  // ============================================================================

  /** Client projects showcase */
  const featuredProjects = [
    { name: "PTLR College Faridabad", category: "Education Website", type: "college" },
    { name: "SK Healthcare", category: "Healthcare Website", type: "healthcare" },
    { name: "Taarzan Motors", category: "Car Website", type: "automotive" },
    { name: "Techno Works", category: "Company Website", type: "business" },
    { name: "AS Web Store", category: "E-commerce Demo", type: "ecommerce" },
    { name: "Restaurant Website", category: "Food & Beverage", type: "restaurant" },
    { name: "Travel Website", category: "Travel & Tourism", type: "travel" }
  ];

  /** Customer reviews sourced from Google */
  const reviews = [
    {
      id: 1,
      author_name: "PTLR College Faridabad",
      rating: 5,
      text: "We had a great experience working with Aswebmatrix for our website development. Their team is professional, responsive, and delivers high-quality work.",
      relative_time_description: "a day ago",
      profile_photo_url: "",
      source: "Google"
    },
    {
      id: 2,
      author_name: "Ripa Sarkar",
      rating: 5,
      text: "Aswebmatrix offers creative website solutions at reasonable prices.",
      relative_time_description: "a day ago",
      profile_photo_url: "",
      source: "Google"
    },
    {
      id: 3,
      author_name: "Narayan Kumar",
      rating: 5,
      text: "Good team for website development and SEO solutions",
      relative_time_description: "a day ago",
      profile_photo_url: "",
      source: "Google"
    },
    {
      id: 4,
      author_name: "Sachin Healthcare",
      rating: 5,
      text: "Thank you for your kind words!",
      relative_time_description: "2 months ago",
      profile_photo_url: "",
      source: "Google"
    },
  ];

  /** Render star rating component */
  // Remove the type annotation from renderStars
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="star-filled" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="star-half" />);
    } else {
      stars.push(<FaRegStar key={i} className="star-empty" />);
    }
  }
  return stars;
};

  /** Service offerings */
  const services = [
    { icon: "fas fa-code", title: "Custom Web Development", description: "We build fast, modern websites that convert visitors into customers", color: "#00c49a" },
    { icon: "fab fa-react", title: "MERN Stack Development", description: "Full-stack applications with MongoDB, Express, React, and Node.js", color: "#61dafb" },
    { icon: "fab fa-wordpress", title: "WordPress Development", description: "Professional WordPress sites with custom themes and easy content management", color: "#21759b" },
    { icon: "fas fa-chart-line", title: "SEO Optimization", description: "Rank higher on Google and get more organic leads", color: "#f4a261" },
    { icon: "fas fa-share-alt", title: "Social Media Marketing", description: "Grow your brand presence on Instagram, Facebook, and LinkedIn", color: "#3b5998" },
    { icon: "fas fa-envelope", title: "Email Marketing", description: "Engage customers with targeted email campaigns", color: "#ea4335" },
    { icon: "fas fa-ad", title: "PPC Advertising", description: "Get instant traffic with Google Ads and paid campaigns", color: "#4285f4" },
    { icon: "fas fa-paint-brush", title: "UI/UX Design", description: "Beautiful, user-friendly interfaces that keep visitors engaged", color: "#9c27b0" },
    { icon: "fas fa-shopping-cart", title: "E-commerce Solutions", description: "Sell your products online with secure payment systems", color: "#f39c12" },
    { icon: "fas fa-boxes", title: "Inventory Management", description: "Smart systems to track and manage your products", color: "#3498db" },
    { icon: "fas fa-video", title: "Video Editing", description: "Engaging video content for social media and marketing", color: "#ff6b6b" }
  ];

  /** Value propositions */
  const whyChooseUs = [
    { icon: "fas fa-check-circle", title: "Real Client Experience", description: "5+ businesses trust us for their online presence" },
    { icon: "fas fa-rocket", title: "Fast Delivery", description: "Get your website live in days, not months" },
    { icon: "fas fa-code-branch", title: "Custom Development", description: "No templates - every site is built for your needs" },
    { icon: "fas fa-tag", title: "Affordable Solutions", description: "Premium quality at competitive rates" },
    { icon: "fas fa-headset", title: "24/7 Support", description: "We're always here when you need us" }
  ];

  /** Development process */
  const processSteps = [
    { step: "01", title: "Share Your Requirement", description: "Tell us about your business and goals", icon: "fas fa-comments" },
    { step: "02", title: "We Design Your Website", description: "Create a custom design that reflects your brand", icon: "fas fa-pen-fancy" },
    { step: "03", title: "Development & Testing", description: "Build and test for perfect performance", icon: "fas fa-laptop-code" },
    { step: "04", title: "Launch & Support", description: "Go live with ongoing maintenance", icon: "fas fa-rocket" }
  ];

  /** Portfolio items with results data */
  const portfolioItems = [
    { name: "PTLR College Faridabad", category: "Education Website", image: "/images/ptlr.png", result: "Student inquiries increased by 100%" },
    { name: "SK Healthcare", category: "Healthcare Website", image: "/images/sk.png", result: "Patient appointments up 80%" },
    { name: "AS Web Store", category: "E-commerce Demo", image: "/images/ASWebStore.png" },
    { name: "Restaurant Website", category: "Food & Beverage", image: "/images/restaurant.png" }
  ];

  /** Structured data for SEO (JSON-LD) */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AS Web Matrix",
    "url": "https://www.aswebmatrix.com",
    "telephone": "+91-9718401731",
    "email": "aswebmatrix@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2578, Sec-23 A",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121005",
      "addressCountry": "IN"
    },
    "areaServed": ["Faridabad", "Delhi NCR", "India"],
    "numberOfProjects": "50+",
    "numberOfClients": "35+",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "35"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development & Digital Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MERN Stack Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WordPress Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Optimization" } }
      ]
    }
  };

  // ============================================================================
  // Render
  // ============================================================================

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="home-page">
        {/* Sticky WhatsApp Button */}
        <a 
          href="https://wa.me/919718401731?text=Hi%20AS%20Web%20Matrix%2C%20I'm%20interested%20in%20building%20a%20website%20for%20my%20business" 
          className="sticky-whatsapp" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
          <span>Chat on WhatsApp</span>
        </a>

        {/* Floating Consultation Button */}
        <button 
          onClick={() => setIsPopupOpen(true)} 
          className="floating-consult-btn"
          aria-label="Get Free Consultation"
        >
          <i className="fas fa-chalkboard-user"></i>
          <span>Free Consultation</span>
        </button>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge animate-fade-in">
                <i className="fas fa-star"></i> Trusted by 5+ Businesses
              </div>
              <h1 className="animate-slide-up">
                We Build Websites That <span className="highlight">Grow Your Business</span>
              </h1>
              <p className="hero-description animate-slide-up-delay">
                Trusted by 35+ businesses, we create websites and digital solutions that generate leads and boost your online presence.
              </p>
              <div className="hero-stats animate-slide-up-delay-2">
                <span><i className="fas fa-check-circle"></i> 5+ Projects Delivered</span>
                <span><i className="fas fa-star"></i> 4.9 Google Rating</span>
              </div>
              <div className="hero-buttons">
                <button onClick={() => setIsPopupOpen(true)} className="cta-button primary">
                  Get Free Consultation
                </button>
                <a href="https://wa.me/919718401731?text=Hi%20AS%20Web%20Matrix%2C%20I'm%20interested%20in%20building%20a%20website%20for%20my%20business" 
                   className="cta-button whatsapp" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="trust-section">
          <div className="container">
            <div className="trust-grid">
              <div className="trust-card">
                <div className="trust-number">5+</div>
                <div className="trust-label">Projects Completed</div>
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="trust-card">
                <div className="trust-number">10+</div>
                <div className="trust-label">Happy Clients</div>
                <i className="fas fa-smile"></i>
              </div>
              <div className="trust-card">
                <div className="trust-number">4.9</div>
                <div className="trust-label">Google Rating</div>
                <div className="stars">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <div className="trust-card">
                <div className="trust-number">100%</div>
                <div className="trust-label">Satisfaction</div>
                <i className="fas fa-thumbs-up"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Client Showcase */}
        <section className="clients-showcase">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Real Clients, Real Results</span>
              <h2 className="section-title">Trusted by <span>Leading Organizations</span></h2>
              <p className="section-description">
                Trusted by educational institutions, healthcare providers, and businesses across India
              </p>
            </div>
            <div className="clients-grid">
              <div className="client-card featured">
                <div className="client-icon"><i className="fas fa-university"></i></div>
                <h3>PTLR College Faridabad</h3>
                <p>Education Website</p>
                <span className="client-tag">Live Project</span>
              </div>
              <div className="client-card featured">
                <div className="client-icon"><i className="fas fa-hospital-user"></i></div>
                <h3>SK Healthcare</h3>
                <p>Healthcare Website</p>
                <span className="client-tag">Live Project</span>
              </div>
              <div className="client-card">
                <div className="client-icon"><i className="fas fa-car"></i></div>
                <h3>Taarzan Motors</h3>
                <p>Car Website - Demo</p>
              </div>
              <div className="client-card">
                <div className="client-icon"><i className="fas fa-building"></i></div>
                <h3>Techno Works</h3>
                <p>Company Website</p>
              </div>
              <div className="client-card">
                <div className="client-icon"><i className="fas fa-store"></i></div>
                <h3>AS Web Store</h3>
                <p>E-commerce Demo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">What We Offer</span>
              <h2 className="section-title">Our <span>Services</span></h2>
              <p className="section-description">
                Complete digital solutions to help your business grow
              </p>
            </div>
            <div className="services-grid">
              {services.slice(0, 6).map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon" style={{ background: service.color }}>
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
            <div className="services-grid second-row">
              {services.slice(6, 12).map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon" style={{ background: service.color }}>
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section id="portfolio" className="portfolio-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Our Work</span>
              <h2 className="section-title">Real Projects, <span>Real Results</span></h2>
              <p className="section-description">
                See how we've helped businesses grow with custom websites
              </p>
            </div>
            <div className="portfolio-grid">
              {portfolioItems.map((item, index) => (
                <div className="portfolio-card" key={index}>
                  <div className="portfolio-image">
                    <img src={item.image} alt={item.name} />
                    <div className="portfolio-overlay">
                      <span className="portfolio-category">{item.category}</span>
                      {item.result && (
                        <div className="portfolio-result">
                          <i className="fas fa-chart-line"></i> {item.result}
                        </div>
                      )}
                      <button onClick={() => setIsPopupOpen(true)} className="live-preview-btn">
                        Get Quote <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                </div>
              ))}
            </div>
            <div className="view-more-wrapper">
              <button onClick={() => setIsPopupOpen(true)} className="view-more-btn">
                Get Free Consultation <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="results-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Our Impact</span>
              <h2 className="section-title">Results That <span>Speak</span></h2>
            </div>
            <div className="results-grid">
              <div className="result-card">
                <div className="result-number">150%</div>
                <div className="result-label">Increase in conversions</div>
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="result-card">
                <div className="result-number">500+</div>
                <div className="result-label">Leads generated</div>
                <i className="fas fa-users"></i>
              </div>
              <div className="result-card">
                <div className="result-number">200%</div>
                <div className="result-label">Sales growth</div>
                <i className="fas fa-chart-simple"></i>
              </div>
              <div className="result-card">
                <div className="result-number">60%</div>
                <div className="result-label">Bounce rate reduction</div>
                <i className="fas fa-chart-line"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Simple Process</span>
              <h2 className="section-title">How We <span>Work</span></h2>
            </div>
            <div className="process-steps">
              {processSteps.map((step) => (
                <div className="process-step" key={step.step}>
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">
                    <i className={step.icon}></i>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Why Choose Us</span>
              <h2 className="section-title">Why <span>AS Web Matrix?</span></h2>
            </div>
            <div className="why-grid">
              {whyChooseUs.map((item, index) => (
                <div className="why-card" key={index}>
                  <div className="why-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="reviews-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-header"
            >
              <div className="google-badge">
                <FaGoogle className="google-icon" />
                <span className="google-title">Google Reviews</span>
              </div>
              <div className="rating-display">
                <div className="stars-container">
                  {renderStars(4.9)}
                </div>
                <span className="rating-value">4.9</span>
                <span className="rating-count">({reviews.length} reviews)</span>
              </div>
            </motion.div>

            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="review-card"
                >
                  <div className="review-card-inner">
                    <div className="review-header">
                      <div className="reviewer-avatar">
                        {review.author_name?.charAt(0) || 'U'}
                      </div>
                      <div className="reviewer-info">
                        <h3 className="reviewer-name">{review.author_name}</h3>
                        <span className="review-time">{review.relative_time_description}</span>
                      </div>
                    </div>
                    
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                    
                    <p className="review-text">
                      "{review.text}"
                    </p>
                    
                    <div className="review-source">
                      <FaGoogle className="source-icon" />
                      <span className="source-text">Google Review</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="final-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Build Your Website?</h2>
              <p>Join 35+ businesses growing with AS Web Matrix</p>
              <div className="cta-buttons">
                <button onClick={() => setIsPopupOpen(true)} className="cta-button primary large">
                  Get Free Consultation
                </button>
                <a href="https://wa.me/919718401731?text=Hi%20AS%20Web%20Matrix%2C%20I'm%20interested%20in%20building%20a%20website%20for%20my%20business" 
                   className="cta-button outline large" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Footer */}
        <section className="contact-info-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <div className="contact-details">
                  <span>Call Us</span>
                  <a href="tel:+919718401731">+91-9718401731</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div className="contact-details">
                  <span>Email Us</span>
                  <a href="mailto:aswebmatrix@gmail.com">aswebmatrix@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div className="contact-details">
                  <span>Visit Us</span>
                  <span>2578, Sec-23 A, Faridabad, Haryana - 121005</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      
      </div>

    </>
  );
};

export default Page;