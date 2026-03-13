// app/page.jsx
import React from 'react';
import Link from 'next/link';
import './home.css';


// Metadata for the home page
export const metadata = {
  title: "Best SEO Company in India | A.S Web Matrix | Website Development & Digital Marketing",
  description: "A.S Web Matrix is the best SEO Company in India providing SEO services, website development, WordPress, MERN stack, and digital marketing across Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Noida, Gurugram & Faridabad. Rank your business on Google first page with expert SEO strategies.",
  keywords: "Best SEO Company in India, SEO Company in Delhi, SEO Company in Mumbai, SEO Company in Bangalore, SEO Company in Hyderabad, SEO Company in Chennai, SEO Company in Kolkata, SEO Company in Pune, SEO Company in Ahmedabad, SEO Company in Jaipur, SEO Company in Noida, SEO Company in Gurugram, SEO Company in Faridabad, Digital Marketing Company India, Website Development Company India, WordPress Developer India, MERN Stack Developer India, Top SEO Expert India, Affordable SEO Services India",
  openGraph: {
    title: "A.S Web Matrix - Best SEO & Website Development Company in India",
    description: "Leading SEO & Digital Marketing Agency serving Delhi, Mumbai, Bangalore, Hyderabad, Chennai & all major Indian cities.",
    type: "website",
    url: "https://www.aswebmatrix.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Company in India - A.S Web Matrix",
    description: "Professional SEO, Website Development & Digital Marketing services across India.",
  },
};

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "A.S Web Matrix",
  "url": "https://www.aswebmatrix.com",
  "telephone": "+91-9718401731",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2578, Sec-23 A",
    "addressLocality": "Faridabad",
    "addressRegion": "Haryana",
    "postalCode": "121005",
    "addressCountry": "IN"
  },
  "areaServed": [
    "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
    "Pune", "Ahmedabad", "Jaipur", "Noida", "Gurugram", "Faridabad", "India"
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61587616148379",
    "https://www.instagram.com/a.swebmatrix?igsh=cjJ1aW0xZ3J6cHU1",
    "https://www.linkedin.com/company/as-webmatrix/?viewAsMember=true",
    "https://x.com/aswebmatrix"
  ]
};

const page = () => {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="home-page">
        {/* Moving Text Section - Top Animation */}
        <div className="moving-text-container">
          <div className="moving-text-wrapper">
            <div className="moving-text">
              <i className="fas fa-code"></i> HTML5 <span>+</span> 
              <i className="fab fa-css3-alt"></i> CSS3 <span>+</span> 
              <i className="fab fa-js"></i> JavaScript <span>+</span> 
              <i className="fab fa-react"></i> React <span>|</span> 
              <i className="fab fa-wordpress"></i> WordPress <span>+</span> 
              <i className="fas fa-chart-line"></i> SEO <span>+</span> 
              <i className="fas fa-paint-brush"></i> Canva <span>+</span> 
              <i className="fas fa-database"></i> MongoDB <span>|</span> 
              <i className="fas fa-code"></i> HTML5 <span>+</span> 
              <i className="fab fa-css3-alt"></i> CSS3 <span>+</span> 
              <i className="fab fa-js"></i> JavaScript <span>+</span> 
              <i className="fab fa-react"></i> React <span>|</span> 
              <i className="fab fa-wordpress"></i> WordPress <span>+</span> 
              <i className="fas fa-chart-line"></i> SEO <span>+</span> 
              <i className="fas fa-paint-brush"></i> Canva
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">Welcome to AS Web Matrix</div>
              <h1>
                Grow Your Business With <span className="highlight">Digital</span> &{' '}
                <span className="highlight">Software</span> Solutions
              </h1>
              <p className="hero-description">
                We provide complete web solutions including WordPress Development, 
                SEO Optimization, Digital Marketing, Canva Design, and MERN Stack Development
              </p>
              <div className="hero-buttons">
                <Link href="/contact" className="cta-button">Get Free Consultation</Link>
                <Link href="/portfolio" className="cta-button secondary">View Our Work</Link>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="floating-tech">
                <i className="fab fa-wordpress"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-js"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-css3-alt"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Icons */}
        <section className="services-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">What We Offer</span>
              <h2 className="section-title">Our <span>Services</span></h2>
              <p className="section-description">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h3>Web Development</h3>
                <p>Custom websites with HTML5, CSS3, JavaScript & React</p>
                <div className="service-tech">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JS</span>
                  <span>React</span>
                </div>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fab fa-wordpress"></i>
                </div>
                <h3>WordPress</h3>
                <p>Professional WordPress websites with custom themes & plugins</p>
                <div className="service-tech">
                  <span>WP</span>
                  <span>WooCommerce</span>
                  <span>Elementor</span>
                </div>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>SEO & Marketing</h3>
                <p>Boost rankings with advanced SEO & Digital Marketing</p>
                <div className="service-tech">
                  <span>SEO</span>
                  <span>SMM</span>
                  <span>PPC</span>
                  <span>Analytics</span>
                </div>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3>Canva Design</h3>
                <p>Stunning graphics, logos, and branding materials</p>
                <div className="service-tech">
                  <span>Logo</span>
                  <span>Social Media</span>
                  <span>Branding</span>
                </div>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h3>MERN Stack</h3>
                <p>Full-stack applications with MongoDB, Express, React, Node</p>
                <div className="service-tech">
                  <span>MongoDB</span>
                  <span>Express</span>
                  <span>React</span>
                  <span>Node</span>
                </div>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>Complete digital presence management & marketing</p>
                <div className="service-tech">
                  <span>Social</span>
                  <span>Email</span>
                  <span>Content</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Showcase */}
        <section className="tech-stack-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Our Expertise</span>
              <h2 className="section-title">Technologies <span>We Use</span></h2>
            </div>

            <div className="tech-stack-grid">
              <div className="tech-category">
                <h3><i className="fas fa-code"></i> Frontend</h3>
                <div className="tech-items">
                  <span><i className="fab fa-html5"></i> HTML5</span>
                  <span><i className="fab fa-css3-alt"></i> CSS3</span>
                  <span><i className="fab fa-js"></i> JavaScript</span>
                  <span><i className="fab fa-react"></i> React</span>
                </div>
              </div>

              <div className="tech-category">
                <h3><i className="fas fa-database"></i> Backend</h3>
                <div className="tech-items">
                  <span><i className="fab fa-node"></i> Node.js</span>
                  <span><i className="fas fa-database"></i> MongoDB</span>
                  <span><i className="fas fa-server"></i> Express</span>
                  <span><i className="fas fa-code"></i> PHP</span>
                </div>
              </div>

              <div className="tech-category">
                <h3><i className="fas fa-bullhorn"></i> Marketing</h3>
                <div className="tech-items">
                  <span><i className="fas fa-chart-line"></i> SEO</span>
                  <span><i className="fab fa-wordpress"></i> WordPress</span>
                  <span><i className="fas fa-paint-brush"></i> Canva</span>
                  <span><i className="fas fa-chart-bar"></i> Analytics</span>
                </div>
              </div>

              <div className="tech-category">
                <h3><i className="fas fa-tools"></i> Tools</h3>
                <div className="tech-items">
                  <span><i className="fab fa-git-alt"></i> Git</span>
                  <span><i className="fab fa-figma"></i> Figma</span>
                  <span><i className="fas fa-cloud"></i> AWS</span>
                  <span><i className="fas fa-code-branch"></i> VS Code</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MERN Stack Section */}
        <section className="mern-section">
          <div className="container">
            <div className="mern-content">
              <h2>MERN Stack <span>Development</span></h2>
              <p>Modern full-stack applications with MongoDB, Express, React, and Node.js</p>
              <div className="mern-stack">
                <div className="tech-item">
                  <i className="fas fa-database"></i>
                  <span>MongoDB</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-server"></i>
                  <span>Express</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-react"></i>
                  <span>React</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-node"></i>
                  <span>Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Section */}
        <section className="terms-section">
          <div className="container">
            <h2 className="section-title">Terms & Conditions</h2>
            <div className="terms-info">
              <div className="term-item">
                <i className="fas fa-calendar-alt"></i>
                <div>
                  <h4>Start Date</h4>
                  <p>January 1, 2026</p>
                </div>
              </div>
              <div className="term-item">
                <i className="fas fa-calendar-times"></i>
                <div>
                  <h4>End Date</h4>
                  <p>December 31, 2026</p>
                </div>
              </div>
              <div className="term-item">
                <i className="fas fa-file-contract"></i>
                <div>
                  <h4>Contract Terms</h4>
                  <p>Monthly subscription, cancel anytime</p>
                </div>
              </div>
              <div className="term-item">
                <i className="fas fa-headset"></i>
                <div>
                  <h4>Support</h4>
                  <p>24/7 technical support available</p>
                </div>
              </div>
              <div className="term-item">
                <i className="fas fa-shield-alt"></i>
                <div>
                  <h4>Security</h4>
                  <p>SSL certificates & data protection</p>
                </div>
              </div>
              <div className="term-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Contact</h4>
                  <a href="mailto:contact@aswebmatrix.com">aswebmatrix@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
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
                <i className="fas fa-globe"></i>
                <div className="contact-details">
                  <span>Visit Us</span>
                  <a href="https://www.aswebmatrix.com" target="_blank" rel="noopener noreferrer">
                    www.aswebmatrix.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div className="contact-details">
                  <span>Address</span>
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

export default page;