// app/portfolio/page.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaStar, FaStarHalfAlt, FaRegStar, 
  FaGoogle, FaExternalLinkAlt, FaGithub,
  FaCalendarAlt, FaUser,
  FaMapMarkerAlt, FaBriefcase, FaAward,
  FaRocket, FaHeart, FaUsers
} from 'react-icons/fa';
import './portfolio.css';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  // Loader state and fetch logic removed

  // ================== MANUAL GOOGLE REVIEWS (UPDATED) ==================
  const reviews = [
    {
      id: 1,
      author_name: "PTLR College Faridabad",
      rating: 5,
      text: "We had a great experience working with Aswebmatrix for our website development. Their team is professional, responsive, and delivers high-quality work. They understood our requirements clearly and created a clean, modern, and user-friendly website for our college. We highly recommend Aswebmatrix for anyone looking for reliable web development services.",
      relative_time_description: "a day ago",
      profile_photo_url: "",
      source: "Google"
    },
    {
      id: 2,
      author_name: "Ripa Sarkar",
      rating: 5,
      text: "Aswebmatrix offers creative website solutions at reasonable prices. The team is supportive and work quality is impressive.",
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
    // Keeping a few older reviews for variety, but can be removed if only these three are needed
    {
      id: 4,
      author_name: "Sachin Healthcare",
      rating: 5,
      text: "Thank you for your kind words! I'm really happy that the website is helping your business grow. If anyone in your network needs a professional website at an affordable price, please feel free to connect them with me. I’d love to help them as well.",
      relative_time_description: "2 months ago",
      profile_photo_url: "",
      source: "Google"
    },
  ];

  // ================== PROJECTS DATA ==================
  const projects = [
    {
      id: 1,
      title: "Fashion Store E-Commerce",
      description: "Complete e-commerce solution with payment gateway, inventory management, and admin dashboard.",
      client: "Fashion Store Delhi",
      category: "ecommerce",
      techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      results: "3 months mein sales mein 40% increase",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      year: "2024",
      rating: 5,
      image: "/projects/ecommerce.jpg"
    },
    {
      id: 2,
      title: "City Hospital Management System",
      description: "Complete patient management system with appointment booking, medical records, and telemedicine.",
      client: "City Hospital",
      category: "healthcare",
      techStack: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
      results: "Patient waiting time 60% reduced",
      liveUrl: "https://example.com",
      year: "2023",
      rating: 5,
      image: "/projects/healthcare.jpg"
    },
    {
      id: 3,
      title: "Dream Homes Real Estate",
      description: "Property listing platform with advanced search, virtual tours, and agent management.",
      client: "Dream Homes Properties",
      category: "realestate",
      techStack: ["Vue.js", "Django", "PostgreSQL", "Elasticsearch", "Redis"],
      results: "3 months mein 500+ leads generated",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      year: "2024",
      rating: 4.5,
      image: "/projects/realestate.jpg"
    },
    {
      id: 4,
      title: "LearnSmart Education Platform",
      description: "Online learning platform with video courses, quizzes, and student progress tracking.",
      client: "Jain Coaching Center",
      category: "education",
      techStack: ["Next.js", "Python", "MongoDB", "Firebase", "Zoom API"],
      results: "3000+ students online enrolled",
      liveUrl: "https://example.com",
      year: "2023",
      rating: 5,
      image: "/projects/education.jpg"
    },
    {
      id: 5,
      title: "Foodie's Paradise Restaurant",
      description: "Complete restaurant management with online ordering and table reservation.",
      client: "Foodie's Paradise",
      category: "restaurant",
      techStack: ["React", "Node.js", "MySQL", "Redis", "Razorpay"],
      results: "Online orders mein 200% increase",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      year: "2024",
      rating: 5,
      image: "/projects/restaurant.jpg"
    },
    {
      id: 6,
      title: "Wanderlust Travel Portal",
      description: "Travel booking platform with packages, hotel bookings, and tour management.",
      client: "Wanderlust Travels",
      category: "travel",
      techStack: ["Next.js", "Node.js", "MongoDB", "PayPal", "Google Maps"],
      results: "300+ bookings in first month",
      liveUrl: "https://example.com",
      year: "2023",
      rating: 4.5,
      image: "/projects/travel.jpg"
    }
  ];

  // ================== FILTERS ==================
  const filters = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ecommerce', name: 'E-Commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'healthcare', name: 'Healthcare', count: projects.filter(p => p.category === 'healthcare').length },
    { id: 'realestate', name: 'Real Estate', count: projects.filter(p => p.category === 'realestate').length },
    { id: 'education', name: 'Education', count: projects.filter(p => p.category === 'education').length },
    { id: 'restaurant', name: 'Restaurant', count: projects.filter(p => p.category === 'restaurant').length },
    { id: 'travel', name: 'Travel', count: projects.filter(p => p.category === 'travel').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // ================== RENDER STARS ==================
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

  // ================== STATS ==================
  const stats = [
    { icon: FaRocket, value: "50+", label: "Projects Completed" },
    { icon: FaUsers, value: "35+", label: "Happy Clients" },
    { icon: FaAward, value: "4.9", label: "Google Rating" },
    { icon: FaHeart, value: "100%", label: "Satisfaction" }
  ];

  // Loading state and return removed, directly rendering the page

  return (
    <div className="portfolio-page">
      
      {/* ========== HERO SECTION ========== */}
      <section className="hero-section">
        <div className="hero-pattern"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <span className="hero-badge">
              <FaBriefcase /> AS Web Matrix Portfolio
            </span>
            <h1 className="hero-title">
              We Don't Just Build Websites,<br />
              <span className="hero-title-highlight">We Build Digital Experiences</span>
            </h1>
            <p className="hero-subtitle">
              50+ successful projects, 35+ happy clients, and 4.9 Google Rating. 
              See why businesses trust us for their digital needs.
            </p>
            
            {/* Stats */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="stat-card"
                >
                  <stat.icon className="stat-icon" />
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* ========== GOOGLE REVIEWS SECTION ========== */}
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

      {/* ========== PROJECTS SECTION ========== */}
      <section className="projects-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title">
              Our <span className="section-title-highlight">Projects</span>
            </h2>
            <p className="section-subtitle">
              Check out some of our recent work
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="filter-container">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              >
                {filter.name} <span className="filter-count">{filter.count}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="project-card"
              >
                <div className="project-image">
                  <div className="project-image-placeholder">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-meta">
                    <span className="meta-item">
                      <FaUser className="meta-icon" />
                      {project.client}
                    </span>
                    <span className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="project-results">
                    <strong>Results:</strong> {project.results}
                  </div>
                  
                  <div className="project-footer">
                    <div className="project-rating">
                      {renderStars(project.rating)}
                    </div>
                    
                    <div className="project-links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          title="Live Preview"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          title="View Code"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="cta-content"
          >
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-text">
              Join our happy clients and let's build something amazing together
            </p>
            <Link href="/contact" className="cta-button">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;