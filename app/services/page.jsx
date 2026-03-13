// app/services/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './services.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



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
  const [activeService, setActiveService] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [filteredServices, setFilteredServices] = useState([]);

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: 'fas fa-th-large' },
    { id: 'development', name: 'Development', icon: 'fas fa-code' },
    { id: 'marketing', name: 'Digital Marketing', icon: 'fas fa-chart-line' },
    { id: 'design', name: 'Design & Creative', icon: 'fas fa-paint-brush' },
    { id: 'ecommerce', name: 'E-Commerce', icon: 'fas fa-shopping-cart' }
  ];

  const services = [
    // Development Category
    {
      id: 1,
      category: 'development',
      icon: 'fas fa-laptop-code',
      title: 'Custom Web Development',
      description: 'Tailored, responsive websites built with modern frameworks for optimal performance and user experience.',
      features: ['React/Next.js', 'Node.js/PHP', 'Responsive Design', 'Performance Optimization', 'API Integration'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'WordPress'],
      price: 'Starting at ₹17,999',
      caseStudy: 'Increased client conversion by 150%',
      color: '#00c49a'
    },
    {
      id: 3,
      category: 'development',
      icon: 'fas fa-database',
      title: 'MERN Stack Development',
      description: 'Full-stack applications using MongoDB, Express.js, React, and Node.js for scalable solutions.',
      features: ['MongoDB', 'Express.js', 'React', 'Node.js', 'RESTful APIs'],
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
      price: 'Starting at ₹27,999',
      caseStudy: 'Handled 1M+ user requests daily',
      color: '#2b3c56'
    },
    {
      id: 4,
      category: 'development',
      icon: 'fab fa-wordpress',
      title: 'WordPress Development',
      description: 'Custom WordPress themes and plugins with WooCommerce integration for e-commerce stores.',
      features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Elementor', 'SEO Ready'],
      technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'ACF'],
      price: 'Starting at ₹15,000',
      caseStudy: '50+ successful WordPress projects',
      color: '#21759b'
    },

    // Marketing Category
    {
      id: 5,
      category: 'marketing',
      icon: 'fas fa-search',
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies to improve search rankings and drive organic traffic.',
      features: ['Keyword Research', 'Technical SEO', 'Link Building', 'Content Strategy', 'Local SEO'],
      technologies: ['SEMrush', 'Ahrefs', 'Google Analytics', 'Search Console'],
      price: 'Starting at ₹6,999/month',
      caseStudy: 'Ranked #1 for 50+ keywords',
      color: '#ff6b00'
    },
    {
      id: 6,
      category: 'marketing',
      icon: 'fas fa-hashtag',
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns to increase brand awareness and customer engagement.',
      features: ['Content Creation', 'Community Management', 'Paid Ads', 'Analytics', 'Influencer Marketing'],
      technologies: ['Meta Ads', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok'],
      price: 'Starting at ₹10,000/month',
      caseStudy: '500% increase in engagement',
      color: '#4267B2'
    },
    {
      id: 7,
      category: 'marketing',
      icon: 'fas fa-envelope-open-text',
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads and drive conversions.',
      features: ['Newsletter Design', 'Automation', 'A/B Testing', 'List Segmentation', 'Analytics'],
      technologies: ['Mailchimp', 'SendGrid', 'ConvertKit', 'HubSpot'],
      price: 'Starting at ₹8,000/month',
      caseStudy: '40% open rate achieved',
      color: '#00c49a'
    },
    {
      id: 8,
      category: 'marketing',
      icon: 'fas fa-chart-pie',
      title: 'PPC Advertising',
      description: 'Pay-per-click campaigns that deliver immediate results and measurable ROI.',
      features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'Retargeting', 'Conversion Tracking'],
      technologies: ['Google Ads', 'Meta Business', 'Analytics', 'Tag Manager'],
      price: 'Starting at ₹15,000/month',
      caseStudy: '300% ROI in 3 months',
      color: '#007259'
    },

    // Design Category
    {
      id: 9,
      category: 'design',
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance usability and drive conversions.',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Interaction Design', 'Visual Design'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin'],
      price: 'Starting at ₹15,000',
      caseStudy: 'Reduced bounce rate by 60%',
      color: '#2b3c56'
    },
    {
      id: 10,
      category: 'design',
      icon: 'fas fa-paint-brush',
      title: 'Canva Design Services',
      description: 'Professional graphic design for all your branding and marketing needs.',
      features: ['Logo Design', 'Social Media Graphics', 'Brand Identity', 'Print Materials', 'Presentations'],
      technologies: ['Canva Pro', 'Photoshop', 'Illustrator', 'InDesign'],
      price: 'Starting at ₹5,000',
      caseStudy: '500+ designs delivered',
      color: '#00c49a'
    },
    {
      id: 11,
      category: 'design',
      icon: 'fas fa-video',
      title: 'Video Editing',
      description: 'Professional video editing for marketing, tutorials, and social media content.',
      features: ['Promo Videos', 'Tutorials', 'Social Media Clips', 'Motion Graphics', 'Color Grading'],
      technologies: ['Premiere Pro', 'After Effects', 'Final Cut', 'DaVinci'],
      price: 'Starting at ₹8,000',
      caseStudy: '1M+ video views',
      color: '#007259'
    },

    // E-Commerce Category
    {
      id: 12,
      category: 'ecommerce',
      icon: 'fas fa-shopping-cart',
      title: 'E-commerce Solutions',
      description: 'Complete online store development with secure payment integration and inventory management.',
      features: ['Shopify/WooCommerce', 'Payment Gateways', 'Product Management', 'Inventory System', 'Order Tracking'],
      technologies: ['Shopify', 'WooCommerce', 'Razorpay', 'PayPal', 'Shiprocket'],
      price: 'Starting at ₹30,000',
      caseStudy: '200% sales increase',
      color: '#2b3c56'
    },
    {
      id: 13,
      category: 'ecommerce',
      icon: 'fas fa-truck',
      title: 'Inventory Management',
      description: 'Streamline your business with automated inventory and order management systems.',
      features: ['Stock Tracking', 'Order Management', 'Supplier Integration', 'Reporting', 'Barcode System'],
      technologies: ['Custom CRM', 'ERPNext', 'Odoo', 'Zoho'],
      price: 'Starting at ₹25,000',
      caseStudy: 'Reduced errors by 90%',
      color: '#00c49a'
    }
  ];

  const processSteps = [
    {
      number: '01',
      icon: 'fas fa-clipboard-list',
      title: 'Discovery & Strategy',
      description: 'We analyze your business goals, target audience, and competition to create a strategic roadmap.',
      color: '#00c49a'
    },
    {
      number: '02',
      icon: 'fas fa-paint-brush',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and prototypes for user testing and stakeholder approval.',
      color: '#007259'
    },
    {
      number: '03',
      icon: 'fas fa-code',
      title: 'Development',
      description: 'Agile development process with regular updates and milestone deliveries.',
      color: '#2b3c56'
    },
    {
      number: '04',
      icon: 'fas fa-rocket',
      title: 'Launch & Optimize',
      description: 'Deployment with ongoing monitoring, optimization, and performance tracking.',
      color: '#ff6b00'
    }
  ];

  const technologies = [
    { name: 'React', icon: 'fab fa-react', category: 'Frontend' },
    { name: 'Node.js', icon: 'fab fa-node', category: 'Backend' },
    { name: 'MongoDB', icon: 'fas fa-database', category: 'Database' },
    { name: 'WordPress', icon: 'fab fa-wordpress', category: 'CMS' },
    { name: 'Shopify', icon: 'fab fa-shopify', category: 'E-commerce' },
    { name: 'Figma', icon: 'fab fa-figma', category: 'Design' },
    { name: 'Google Ads', icon: 'fab fa-google', category: 'Marketing' },
    { name: 'Canva', icon: 'fas fa-paint-brush', category: 'Design' }
  ];

  const stats = [
    { number: '10+', label: 'Projects Delivered', icon: 'fas fa-rocket' },
    { number: '98%', label: 'Client Satisfaction', icon: 'fas fa-smile' },
    { number: '4', label: 'Team Experts', icon: 'fas fa-users' },
    { number: '24/7', label: 'Client Support', icon: 'fas fa-headset' }
  ];

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === activeTab));
    }
  }, [activeTab]);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="hero-particles"></div>
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge animate-pop-in">
                <i className="fas fa-crown"></i> Industry Leading Solutions
              </span>
              <h1 className="hero-title animate-pop-in">
                Digital Services That <span className="highlight">Transform</span> Businesses
              </h1>
              <p className="hero-subtitle animate-pop-in">
                From web development to digital marketing, we provide comprehensive solutions 
                that drive growth, engagement, and measurable results for your business.
              </p>
              <div className="hero-buttons animate-pop-in">
                <Link href="#all-services" className="btn btn-primary">
                  Explore Services <i className="fas fa-arrow-right"></i>
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Get Free Consultation <i className="fas fa-headset"></i>
                </Link>
              </div>
            </div>
            
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <i className={stat.icon}></i>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Service Categories Tabs */}
        <section className="categories-section">
          <div className="container">
            <div className="categories-tabs">
              {serviceCategories.map(category => (
                <button
                  key={category.id}
                  className={`category-tab ${activeTab === category.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(category.id)}
                >
                  <i className={category.icon}></i>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="all-services" id="all-services">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">What We Offer</span>
              <h2 className="section-title">Comprehensive <span>Digital Solutions</span></h2>
              <p className="section-description">
                We provide end-to-end digital services tailored to your business needs, 
                delivered with expertise and innovation.
              </p>
            </div>
            
            <div className="services-grid">
              {filteredServices.map((service) => (
                <div 
                  key={service.id}
                  className={`service-card ${activeService === service.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                  style={{'--service-color': service.color}}
                >
                  <div className="service-card-inner">
                    <div className="service-card-front">
                      <div className="service-icon" style={{background: service.color}}>
                        <i className={service.icon}></i>
                      </div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-short-desc">{service.description.substring(0, 80)}...</p>
                      <div className="service-price">{service.price}</div>
                      <div className="service-hover-indicator">
                        <span>Hover to learn more</span>
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                    
                    <div className="service-card-back">
                      <div className="back-content">
                        <h4>Key Features</h4>
                        <ul className="service-features">
                          {service.features.map((feature, idx) => (
                            <li key={idx}>
                              <i className="fas fa-check-circle"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <h4>Technologies</h4>
                        <div className="service-tech-tags">
                          {service.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                        
                        <div className="service-case-study">
                          <i className="fas fa-trophy"></i>
                          <span>{service.caseStudy}</span>
                        </div>
                        
                        <Link href="/contact" className="service-link">
                          Get Started <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">How We Work</span>
              <h2 className="section-title">Our <span>Proven Process</span></h2>
              <p className="section-description">
                A systematic approach that ensures project success and client satisfaction
              </p>
            </div>
            
            <div className="process-steps">
              {processSteps.map((step, index) => (
                <div className="process-step" key={index}>
                  <div className="step-connector"></div>
                  <div className="step-number" style={{background: step.color}}>{step.number}</div>
                  <div className="step-content">
                    <div className="step-icon" style={{color: step.color}}>
                      <i className={step.icon}></i>
                    </div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="tech-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Our Expertise</span>
              <h2 className="section-title">Technologies We <span>Master</span></h2>
            </div>
            
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div className="tech-item" key={index}>
                  <div className="tech-icon">
                    <i className={tech.icon}></i>
                  </div>
                  <h4>{tech.name}</h4>
                  <span className="tech-category">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Why Us</span>
              <h2 className="section-title">What Makes Us <span>Different</span></h2>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Fast Delivery</h3>
                <p>We deliver projects on time with agile methodology and efficient workflows.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Quality Assured</h3>
                <p>Rigorous testing and quality checks ensure flawless deliverables.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>24/7 Support</h3>
                <p>Round-the-clock support for all your technical needs.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>ROI Focused</h3>
                <p>Every solution is designed to deliver measurable business results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Transform Your Digital Presence?</h2>
              <p className="cta-description">
                Let's discuss how we can help you achieve your business goals with our comprehensive digital services.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-large">
                  <i className="fas fa-paper-plane"></i>
                  Start a Project
                </Link>
                <Link href="/portfolio" className="btn btn-outline btn-large">
                  <i className="fas fa-briefcase"></i>
                  View Portfolio
                </Link>
              </div>
              <div className="cta-guarantee">
                <i className="fas fa-check-circle"></i>
                <span>30-day satisfaction guarantee • No hidden fees • Free consultation</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;