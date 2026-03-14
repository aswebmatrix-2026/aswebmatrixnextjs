// app/about/page.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./about.css"; 

// Metadata for the about page
export const metadata = {
  title: "About A.S Web Matrix | Website Development Company in Faridabad",
  description: "A.S Web Matrix is the best SEO Company in India providing SEO services, website development, WordPress, MERN stack, and digital marketing across Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Noida, Gurugram & Faridabad. Rank your business on Google first page with expert SEO strategies.",
  keywords: "Best SEO Company in India, SEO Company in Delhi, SEO Company in Mumbai, SEO Company in Bangalore, SEO Company in Hyderabad, SEO Company in Chennai, SEO Company in Kolkata, SEO Company in Pune, SEO Company in Ahmedabad, SEO Company in Jaipur, SEO Company in Noida, SEO Company in Gurugram, SEO Company in Faridabad, Digital Marketing Company India, Website Development Company India, WordPress Developer India, MERN Stack Developer India, Top SEO Expert India, Affordable SEO Services India",
  openGraph: {
    title: "A.S Web Matrix - Best SEO & Website Development Company in India",
    description: "Leading SEO & Digital Marketing Agency serving Delhi, Mumbai, Bangalore, Hyderabad, Chennai & all major Indian cities.",
    type: "website",
    url: "https://www.aswebmatrix.com/about",
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
  // const teamMembers = [
  //   {
  //     name: "Anmol Sharma",
  //     role: "Founder & Web Developer",
  //     bio: "Expert in MERN Stack and WordPress website development. Leading A.S Web Matrix with focus on education, healthcare websites and Companies.",
  //     expertise: "MERN Stack • WordPress • Technical Architecture • Website Development",
  //     image: anmolImage,
  //     linkedin: "#",
  //     email: "anmol@aswebmatrix.com"
  //   },
  //   {
  //     name: "Harsh Singh",
  //     role: "Sales & Marketing Head",
  //     bio: "Managing client relationships and digital marketing strategies. Working with PTLR College, Fusion Advance, and SKHealthcare.org on their website development projects.",
  //     expertise: "Client Relations • Digital Marketing • SEO • Website Strategy",
  //     image: harshImage,
  //     linkedin: "#",
  //     email: "harsh@aswebmatrix.com"
  //   },
  //   {
  //     name: "Naryan Kumar",
  //     role: "Website Designer & Developer",
  //     bio: "Specialized in creating responsive websites with focus on UI/UX design. Developed websites for education, healthcare sectors and Companies.",
  //     expertise: "UI/UX Design • Frontend • Responsive Design • Website Development",
  //     image: naryanImage,
  //     linkedin: "#",
  //     email: "naryan@aswebmatrix.com"
  //   },
  //   {
  //     name: "Umesh Sharma",
  //     role: "Design Specialist & Social Media Manager",
  //     bio: "Creating brand identities, website graphics, and managing social media presence for businesses. Helping brands grow through creative design and strategic social media handling while working with multiple clients.",
  //     expertise: "Graphic Design • Branding • Social Media Handling • Visual Communication • Website Graphics",
  //     image: umeshImage,
  //     linkedin: "#",
  //     email: "umesh@aswebmatrix.com"
  //   }
  // ];

  const milestones = [
    {
      year: "Jan 2026",
      title: "Company Founded",
      description: "A.S Web Matrix started its website development journey in Faridabad.",
      icon: "fa-flag"
    },
    {
      year: "Feb 2026",
      title: "First Client - PTLR College of Technology",
      description: "Started working with PTLR College on their website development and digital presence.",
      icon: "fa-trophy"
    },
    // {
    //   year: "March 2026",
    //   title: "Added Fusion Advance",
    //   description: "Began collaboration with Fusion Advance for website development projects.",
    //   icon: "fa-handshake"
    // },
    {
      year: "Feb2026",
      title: "SKHealthcare",
      description: "Added healthcare sector client - SKHealthcare.org for website development.",
      icon: "fa-hospital"
    },
    {
      year: "June 2026",
      title: "10+ Website Projects Complete",
      description: "Successfully delivered 10+ website development projects for our clients.",
      icon: "fa-award"
    }
  ];

  const clients = [
    { name: "PTLR College", icon: "fa-solid fa-building-columns", type: "Education Website", since: "Feb 2026" },
    // { name: "Fusion Advance", icon: "fa-solid fa-microchip", type: "Technology Website", since: "March 2026" },
    { name: "SKHealthcare", icon: "fa-solid fa-heart-pulse", type: "Healthcare Website", since: "May 2026" }
  ];

  const projectStats = [
    {
      category: "Education Websites",
      count: "3+",
      clients: "PTLR College and more"
    },
    {
      category: "Healthcare Websites",
      count: "2+",
      clients: "SKHealthcare.org and others"
    },
    {
      category: "Canva Designs",
      count: "10+",
      clients: "All website projects included branding"
    }
  ];

  const technologies = [
    { name: "MERN Stack", icon: "fa-brands fa-react" },
    { name: "WordPress", icon: "fa-brands fa-wordpress" },
    { name: "HTML/CSS", icon: "fa-brands fa-html5" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "Canva", icon: "fa-solid fa-paint-brush" },
    { name: "SEO Tools", icon: "fa-solid fa-magnifying-glass" }
  ];

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="about-page">
        {/* HERO SECTION */}
        <section className="about-hero">
          <div className="hero-particles"></div>
          <div className="container">
            <div className="hero-content">
              <span className="hero-subtitle animate-pop-in">
                <i className="fas fa-calendar-alt"></i> Founded January 2026 • 10+ Website Projects Completed
              </span>
              <h1 className="animate-pop-in">
                <span className="highlight">A.S Web Matrix</span> - Website Development for Education & Healthcare
              </h1>
              <p className="hero-description animate-pop-in">
                Based in Faridabad, we are a team of 4 passionate website developers and designers.
                Working with <strong>PTLR College, Fusion Advance, and SKHealthcare.org</strong>
                to deliver quality website development solutions.
                <span className="tech-strip"> Website Development • Canva Design • Digital Marketing • SEO</span>
              </p>
              <div className="hero-stats animate-pop-in">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Websites Done</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Active Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2026</span>
                  <span className="stat-label">Founded</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="story-section">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <span className="section-subtitle">Our Journey</span>
                <h2 className="section-title">Started January 2026, <span>Growing Fast</span></h2>
                <p className="story-description">
                  A.S Web Matrix began in January 2026 with a simple vision - to help educational institutions
                  and healthcare organizations establish their digital presence through professional website development.
                  Within 6 months, we've partnered with
                  <strong> PTLR College, Fusion Advance, and SKHealthcare.org</strong>, delivering 10+ successful website projects.
                </p>
                <div className="story-features">
                  <div className="story-feature">
                    <i className="fas fa-graduation-cap"></i>
                    <span>Education Websites Specialist</span>
                  </div>
                  <div className="story-feature">
                    <i className="fas fa-heart-pulse"></i>
                    <span>Healthcare Websites</span>
                  </div>
                  <div className="story-feature">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Faridabad Based</span>
                  </div>
                  <div className="story-feature">
                    <i className="fas fa-bolt"></i>
                    <span>Fast Website Delivery (1 Week)</span>
                  </div>
                </div>
                <div className="story-buttons">
                  <Link href="/contact" className="btn btn-primary">Get Your Website</Link>
                  <Link href="/portfolio" className="btn btn-outline">View Our Websites</Link>
                </div>
              </div>
              <div className="story-image">
                <div className="story-image-grid">
                  <div className="grid-item" style={{background: 'linear-gradient(135deg, #00c49a, #007259)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fas fa-graduation-cap" style={{fontSize: '3rem', color: 'white'}}></i>
                  </div>
                  <div className="grid-item" style={{background: 'linear-gradient(135deg, #2b3c56, #1a2738)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fas fa-heart-pulse" style={{fontSize: '2.5rem', color: 'white'}}></i>
                  </div>
                  <div className="grid-item" style={{background: 'linear-gradient(135deg, #007259, #00c49a)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fas fa-laptop-code" style={{fontSize: '2.5rem', color: 'white'}}></i>
                  </div>
                  <div className="grid-item" style={{background: 'linear-gradient(135deg, #c49a00, #7c6100)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fas fa-paint-brush" style={{fontSize: '2.5rem', color: 'white'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR CLIENTS/PARTNERS SECTION */}
        <section className="partners-section" style={{background: '#f8f9fa'}}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Our Clients & Partners</span>
              <h2 className="section-title">Trusted By <span>These Organizations</span></h2>
              <p className="section-description">
                We're proud to work with these educational institutions and healthcare organizations on their website development projects
              </p>
            </div>

            <div className="partners-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
              {clients.map((client, index) => (
                <div className="partner-item" key={index} style={{padding: '40px 30px'}}>
                  <i className={client.icon} style={{fontSize: '3rem', marginBottom: '20px', color: '#00c49a'}}></i>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '10px', color: '#2b3c56'}}>{client.name}</h3>
                  <p style={{color: '#666', marginBottom: '10px'}}>{client.type}</p>
                  <span style={{
                    background: '#00c49a',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    display: 'inline-block'
                  }}>
                    Since {client.since}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Trust Indicators */}
            <div style={{
              textAlign: 'center',
              marginTop: '50px',
              padding: '30px',
              background: 'white',
              borderRadius: '20px',
              border: '2px solid #e0e0e0'
            }}>
              <h3 style={{color: '#2b3c56', marginBottom: '20px'}}>Currently Working On Websites For</h3>
              <div style={{display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap'}}>
                <span style={{fontSize: '1.2rem', fontWeight: '600'}}>✓ PTLR College Website</span>
                <span style={{fontSize: '1.2rem', fontWeight: '600'}}>✓ Fusion Advance Website</span>
                <span style={{fontSize: '1.2rem', fontWeight: '600'}}>✓ SKHealthcare.org Website</span>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        {/* <section className="team-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Our Team</span>
              <h2 className="section-title">Meet the <span>Website Development Team</span></h2>
              <p className="section-description">
                Four passionate individuals working together to deliver quality website development solutions
              </p>
            </div>

            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                  <div className="team-image-container">
                    <div className="team-image">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={300}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div className="team-expertise">{member.expertise}</div>
                    <div className="team-social">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href={`mailto:${member.email}`}>
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* PROJECT STATS */}
        <section className="why-choose-section" style={{background: 'white'}}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Our Work</span>
              <h2 className="section-title">10+ Website <span>Projects Across Sectors</span></h2>
            </div>

            <div className="features-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
              {projectStats.map((stat, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-icon">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <h3>{stat.category}</h3>
                  <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#00c49a', margin: '15px 0'}}>
                    {stat.count}
                  </div>
                  <p style={{fontSize: '0.95rem', color: '#666'}}>{stat.clients}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="why-choose-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Our Services</span>
              <h2 className="section-title">Website <span>Development Services</span></h2>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3>Education Websites</h3>
                <p>Custom websites for colleges and educational institutions using MERN Stack & WordPress. Like PTLR College.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-heart-pulse"></i>
                </div>
                <h3>Healthcare Websites</h3>
                <p>Professional websites for healthcare organizations and medical practices. Like SKHealthcare.org.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h3>Company Websites</h3>
                <p>Corporate websites for businesses to establish their online presence. Like Fusion Advance.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3>Website Branding</h3>
                <p>Complete branding including Canva designs, logos, and graphics for websites.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-choose-section" style={{background: '#f8f9fa'}}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Why Choose Us</span>
              <h2 className="section-title">What Makes <span>Our Websites Different</span></h2>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Fast Website Delivery</h3>
                <p>Most websites delivered within 1 week. We value your time.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-indian-rupee-sign"></i>
                </div>
                <h3>Affordable Website Pricing</h3>
                <p>Competitive rates for educational institutions and healthcare organizations.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>Direct Communication</h3>
                <p>Work directly with the website development team. No account managers, no delays.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-map-pin"></i>
                </div>
                <h3>Local Team</h3>
                <p>Based in Faridabad. Easy to meet and discuss your website project in person.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Get Your Website?</h2>
              <p>
                Join our growing list of clients including PTLR College, Fusion Advance,
                and SKHealthcare.org who trust us for their website development.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">
                  <i className="fas fa-paper-plane"></i> Start Your Website Project
                </Link>
                <Link href="/portfolio" className="btn btn-outline">
                  <i className="fas fa-briefcase"></i> View Our Websites
                </Link>
              </div>
              <p style={{marginTop: '30px', fontSize: '1rem'}}>
                <i className="fas fa-map-marker-alt"></i> Faridabad, Haryana • 10+ Website Projects Completed
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;