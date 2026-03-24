// app/page.tsx
import React from 'react';
import Link from 'next/link';
import './home.css';

// Metadata for the home page
export const metadata = {
  title: "AS Web Matrix | Website Development & Digital Marketing Agency | Faridabad, India",
  description: "AS Web Matrix is a trusted web development agency in Faridabad, India. We build high-performance websites for businesses, schools, and healthcare providers. 50+ projects delivered, 35+ happy clients. Get a free quote today!",
  keywords: "web development agency Faridabad, website development company, digital marketing services, MERN stack development, WordPress development, SEO services Faridabad, PTLR College website, SK Healthcare, e-commerce development",
  openGraph: {
    title: "AS Web Matrix - Build a Website That Grows Your Business",
    description: "Trusted by 35+ businesses including PTLR College and SK Healthcare. We deliver custom websites and digital solutions that generate real results.",
    type: "website",
    url: "https://www.aswebmatrix.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AS Web Matrix - Web Development & Digital Marketing Agency",
    description: "Custom websites, SEO, and digital marketing that deliver results. 50+ projects completed.",
  },
};

// JSON-LD Schema with real data
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

const Page = () => {
  // Real client projects data
  const featuredProjects = [
    { name: "PTLR College Faridabad", category: "Education Website", type: "college" },
    { name: "SK Healthcare", category: "Healthcare Website", type: "healthcare" },
    { name: "Taarzan Motors", category: "Car Website", type: "automotive" },
    { name: "Techno Works", category: "Company Website", type: "business" },
    { name: "AS Web Store", category: "E-commerce Demo", type: "ecommerce" },
    { name: "Restaurant Website", category: "Food & Beverage", type: "restaurant" },
    { name: "Travel Website", category: "Travel & Tourism", type: "travel" }
  ];

  // Real services data
  const services = [
    { icon: "fas fa-code", title: "Custom Web Development", description: "We build fast, modern websites that convert visitors into customers", color: "#00c49a" },
    { icon: "fab fa-react", title: "MERN Stack Development", description: "Full-stack applications with MongoDB, Express, React, and Node.js", color: "#61dafb" },
    { icon: "fab fa-wordpress", title: "WordPress Development", description: "Professional WordPress sites with custom themes and easy content management", color: "#21759b" },
    { icon: "fas fa-chart-line", title: "SEO Optimization", description: "Rank higher on Google and get more organic leads", color: "#f4a261" },
    { icon: "fas fa-share-alt", title: "Social Media Marketing", description: "Grow your brand presence on Instagram, Facebook, and LinkedIn", color: "#3b5998" },
    { icon: "fas fa-envelope", title: "Email Marketing", description: "Engage customers with targeted email campaigns", color: "#ea4335" },
    { icon: "fas fa-ad", title: "PPC Advertising", description: "Get instant traffic with Google Ads and paid campaigns", color: "#4285f4" },
    { icon: "fas fa-paint-brush", title: "UI/UX Design", description: "Beautiful, user-friendly interfaces that keep visitors engaged", color: "#9c27b0" },
    { icon: "fas fa-palette", title: "Canva Design Services", description: "Professional graphics, logos, and branding materials", color: "#00c4cc" },
    { icon: "fas fa-video", title: "Video Editing", description: "Engaging video content for social media and marketing", color: "#ff6b6b" },
    { icon: "fas fa-shopping-cart", title: "E-commerce Solutions", description: "Sell your products online with secure payment systems", color: "#f39c12" },
    { icon: "fas fa-boxes", title: "Inventory Management", description: "Smart systems to track and manage your products", color: "#3498db" }
  ];

  // Why choose us points
  const whyChooseUs = [
    { icon: "fas fa-check-circle", title: "Real Client Experience", description: "35+ businesses trust us for their online presence" },
    { icon: "fas fa-rocket", title: "Fast Delivery", description: "Get your website live in days, not months" },
    { icon: "fas fa-code-branch", title: "Custom Development", description: "No templates - every site is built for your needs" },
    { icon: "fas fa-tag", title: "Affordable Solutions", description: "Premium quality at competitive rates" },
    { icon: "fas fa-headset", title: "24/7 Support", description: "We're always here when you need us" }
  ];

  // Process steps
  const processSteps = [
    { step: "01", title: "Share Your Requirement", description: "Tell us about your business and goals", icon: "fas fa-comments" },
    { step: "02", title: "We Design Your Website", description: "Create a custom design that reflects your brand", icon: "fas fa-pen-fancy" },
    { step: "03", title: "Development & Testing", description: "Build and test for perfect performance", icon: "fas fa-laptop-code" },
    { step: "04", title: "Launch & Support", description: "Go live with ongoing maintenance", icon: "fas fa-rocket" }
  ];

  // Portfolio items for showcase
  const portfolioItems = [
    { name: "PTLR College Faridabad", category: "Education Website", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", result: "Student inquiries increased by 150%" },
    { name: "SK Healthcare", category: "Healthcare Website", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", result: "Patient appointments up 80%" },
    { name: "AS Web Store", category: "E-commerce Demo", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", result: "200% sales growth in 3 months" },
    { name: "Restaurant Website", category: "Food & Beverage", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", result: "Online orders increased by 120%" }
  ];

  return (
    <>
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
        >
          <i className="fab fa-whatsapp"></i>
          <span>Chat on WhatsApp</span>
        </a>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge animate-fade-in">
                <i className="fas fa-star"></i> Trusted by 35+ Businesses
              </div>
              <h1 className="animate-slide-up">
                We Build Websites That <span className="highlight">Grow Your Business</span>
              </h1>
              <p className="hero-description animate-slide-up-delay">
                Trusted by 35+ businesses, we create websites and digital solutions that generate leads and boost your online presence.
              </p>
              <div className="hero-stats animate-slide-up-delay-2">
                <span><i className="fas fa-check-circle"></i> 50+ Projects Delivered</span>
                <span><i className="fas fa-star"></i> 4.9 Google Rating</span>
              </div>
              <div className="hero-buttons">
                <Link href="#portfolio" className="cta-button primary">View Our Work</Link>
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

        {/* Trust Section - Real Stats */}
        <section className="trust-section">
          <div className="container">
            <div className="trust-grid">
              <div className="trust-card">
                <div className="trust-number">50+</div>
                <div className="trust-label">Projects Completed</div>
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="trust-card">
                <div className="trust-number">35+</div>
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

        {/* Real Client Showcase Section */}
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

        {/* Portfolio Preview Section */}
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
                      <div className="portfolio-result">
                        <i className="fas fa-chart-line"></i> {item.result}
                      </div>
                      <a href="#" className="live-preview-btn" target="_blank" rel="noopener noreferrer">
                        View Project <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                </div>
              ))}
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

        {/* Final CTA Section */}
        <section className="final-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Build Your Website?</h2>
              <p>Join 35+ businesses growing with AS Web Matrix</p>
              <div className="cta-buttons">
                <Link href="#contact" className="cta-button primary large">Start Your Project</Link>
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

        {/* Contact Preview Section */}
        <section id="contact" className="contact-preview-section">
          <div className="container">
            <div className="contact-preview-card">
              <h3>Get a Free Consultation</h3>
              <p>Tell us about your project, and we'll get back to you within 24 hours</p>
              <form className="contact-preview-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">I'm interested in...</option>
                    <option value="web">Website Development</option>
                    <option value="seo">SEO & Digital Marketing</option>
                    <option value="ecommerce">E-commerce Solution</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                <button type="submit" className="submit-btn">
                  Send Request <i className="fas fa-paper-plane"></i>
                </button>
              </form>
              <div className="contact-note">
                <i className="fas fa-clock"></i> Response within 24 hours | 
                <i className="fas fa-phone-alt"></i> <a href="tel:+919718401731">+91-9718401731</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Footer */}
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