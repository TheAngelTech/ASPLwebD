"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Resources = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');

  const tools = [
    {
      title: "Audit Requirement Calculator",
      desc: "Determine if your business requires a statutory audit based on turnover and activity type.",
      icon: "bi-journal-check",
      link: "/resources/audit-calculator",
      country: "all",
      image: "https://angel-frontend.s3.ap-southeast-1.amazonaws.com/public/images/audit_tool.jpg"
    },
    {
      title: "Corporate Tax Calculator",
      desc: "Calculate corporate income tax liability under Indian tax laws including cess and surcharges.",
      icon: "bi-calculator",
      link: "/resources/corporate-tax",
      country: ["india", "singapore"],
      image: "https://angel-frontend.s3.ap-southeast-1.amazonaws.com/public/images/corporate_tax.jpg"
    },
    {
      title: "Compliance Calendar",
      desc: "Track important tax and regulatory due dates to avoid penalties and stay compliant.",
      icon: "bi-calendar2-event",
      link: "/resources/compliance-calendar",
      country: "all",
      image: "https://angel-frontend.s3.ap-southeast-1.amazonaws.com/public/images/compliance_calendar.jpg"
    },
    {
      title: "GST Requirement Checker",
      desc: "Check if your business needs GST registration based on turnover and services provided.",
      icon: "bi-receipt",
      link: "/resources/gst-requirement",
      country: "india",
      image: "https://angel-frontend.s3.ap-southeast-1.amazonaws.com/public/images/gst_checker.jpg"
    },
  ]

  const filteredTools = tools.filter(tool => {
    if (selectedCountry === 'all') return true;
    if (Array.isArray(tool.country)) {
      return tool.country.includes(selectedCountry);
    }
    return tool.country === selectedCountry;
  });

  return (
    <>
      {/* Hero Section with Enhanced Design */}
      <section
        className="resources-hero position-relative text-white"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          minHeight: '500px'
        }}
      >
        {/* Animated Background Elements */}
        <div className="animated-bg">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
        </div>

        <div className="container position-relative py-5" style={{ zIndex: 2 }}>
          <div className="row py-5 min-vh-40">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-3 fw-bold text-white mb-4 text-shadow">Financial & Business Resources</h1>
              <p className="lead text-white mb-5 fs-4 fw-light">
                Expert tools and resources specifically designed for NRIs and global entrepreneurs
              </p>
              <div className="hero-buttons">
                <a href="resources/tools" className="btn btn-yellow btn-lg rounded-pill px-4 py-3 fw-semibold me-2 mb-2 mb-md-0 shadow-sm">
                  <i className="bi bi-calculator me-2"></i>NRI Tax Calculator
                </a>
                <Link href="resources/tools" className="btn btn-outline-light btn-lg rounded-pill px-4 py-3 fw-semibold">
                  <i className="bi bi-file-earmark-text me-2"></i>Tax Filing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="wave-separator text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>





      {/* Blog Highlights Section */}
      <section>
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h3 className="fw-bold text-dark mb-3">Recent Blog Highlights</h3>
            <div className="accent-center-underline mx-auto mb-3"></div>
            <p className="text-muted">Catch up with our latest knowledge drops from LinkedIn</p>
          </div>
        </div>
        {/* Tools Section */}
        <section id="tools_section" className="py-5 bg-light resource-section">
          <div className="container">
            {/* Section Heading */}
            <div className="row text-center mb-5">
              <div className="col-12">
                <h2 className="section-heading">Explore Our Expert Tools</h2>
                <div className="accent-center-underline mx-auto mb-3"></div>
                <p className="lead">Empowering you with accurate calculators and timely compliance updates tailored for businesses.</p>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="row mb-5">
              <div className="col-12 text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <button
                    className={`d-flex align-items-center gap-2 rounded-pill px-4 py-2 fw-semibold ${selectedCountry === 'all' ? 'active-filter' : 'inactive-filter'}`}
                    onClick={() => setSelectedCountry('all')}
                  >
                    <i className="bi bi-grid"></i> All Tools
                  </button>
                  <button
                    className={`d-flex align-items-center gap-2 rounded-pill px-4 py-2 fw-semibold ${selectedCountry === 'india' ? 'active-filter' : 'inactive-filter'}`}
                    onClick={() => setSelectedCountry('india')}
                  >
                    <i className="bi bi-geo-alt"></i> India
                  </button>
                  <button
                    className={`d-flex align-items-center gap-2 rounded-pill px-4 py-2 fw-semibold ${selectedCountry === 'uae' ? 'active-filter' : 'inactive-filter'}`}
                    onClick={() => setSelectedCountry('uae')}
                  >
                    <i className="bi bi-geo-alt"></i> UAE
                  </button>
                  <button
                    className={`d-flex align-items-center gap-2 rounded-pill px-4 py-2 fw-semibold ${selectedCountry === 'singapore' ? 'active-filter' : 'inactive-filter'}`}
                    onClick={() => setSelectedCountry('singapore')}
                  >
                    <i className="bi bi-geo-alt"></i> Singapore
                  </button>
                </div>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="row g-4">
              {filteredTools.slice(0, 3).map((tool, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card h-100 border-0 shadow-sm tool-card">
                    <div className="card-img-top position-relative">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="img-fluid rounded-top"
                        style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-warning text-dark">
                          {Array.isArray(tool.country)
                            ? tool.country.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' & ')
                            : tool.country.charAt(0).toUpperCase() + tool.country.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{tool.title}</h5>
                      <p className="card-text text-muted">{tool.desc}</p>
                      <Link href={tool.link} className="btn btn-warning w-100">
                        <i className={`bi ${tool.icon} me-2`}></i> Use Tool
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* More Tools Button */}
            <div className="text-center mt-5">
              <Link href="/resources/tools" className="btn btn-outline-dark rounded-pill px-4">
                <i className="bi bi-grid-3x3-gap me-2"></i>View All Tools
              </Link>
            </div>
          </div>
        </section>

        <div className="row g-4 justify-content-center mb-5">
          {[
            {
              url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7309249758286528513",
              date: "April 1, 2024"
            },
            {
              url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7306616750173736960",
              date: "March 28, 2024"
            },
            {
              url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7304068620878327808",
              date: "March 20, 2024"
            }
          ].map((blog, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="bg-white rounded-4 shadow-sm overflow-hidden d-flex flex-column h-100">
                <iframe
                  src={blog.url}
                  width="100%"
                  height="500" // 👈 Increased height for full post visibility
                  frameBorder="0"
                  allowFullScreen
                  title={`Blog ${idx}`}
                  style={{
                    border: "none",
                    borderRadius: "16px 16px 0 0",
                    width: "100%",
                    minHeight: "500px"
                  }}
                ></iframe>
                <div className="p-3 text-end text-muted small border-top">
                  <i className="bi bi-calendar-event me-1"></i>{blog.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/resources/blogs" className="btn btn-outline-dark rounded-pill px-4">
            <i className="bi bi-newspaper me-2"></i>View All Blogs
          </Link>
        </div>



      </section >


      {/* Newsletter & CTA Section */}
      < section className="cta-section py-5 bg-white" >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-card p-5 rounded-4 shadow text-white position-relative overflow-hidden">
                {/* Decorative elements */}
                <div className="cta-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>

                <div className="row align-items-center position-relative">
                  <div className="col-lg-7">
                    <h2 className="display-6 fw-bold mb-3">Need Personalized Assistance?</h2>
                    <p className="lead mb-4">Our team of global tax and incorporation experts is ready to help you navigate the complexities of international business and finance.</p>
                    <div className="d-flex flex-wrap gap-3">
                      <Link href="/contact" className="btn btn-light btn-lg px-4 shadow-sm">
                        <i className="bi bi-chat-dots me-2"></i> Contact Our Experts
                      </Link>
                      <Link href="/about#team" className="btn btn-outline-light btn-lg px-4">
                        <i className="bi bi-info-circle me-2"></i> About Our Team
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5 mt-4 mt-lg-0">
                    <div className="contact-card bg-white p-4 rounded-4 shadow-sm text-dark">
                      <h4 className="mb-3">Quick Connect</h4>
                      <div className="contact-item d-flex align-items-center mb-3">
                        <div className="contact-icon me-3">
                          <i className="bi bi-envelope"></i>
                        </div>
                        <div>
                          <h6 className="mb-0">Email Us</h6>
                          <a href="mailto:contact@theangelservices.com" className="text-dark text-decoration-none">contact@theangelservices.com</a>
                        </div>
                      </div>
                      <div className="contact-item d-flex align-items-center mb-3">
                        <div className="contact-icon me-3">
                          <i className="bi bi-telephone"></i>
                        </div>
                        <div>
                          <h6 className="mb-0">Call Us</h6>
                          <a href="tel:+65-82002370" className="text-dark text-decoration-none">+6582002370</a>
                        </div>
                      </div>
                      <div className="contact-item d-flex align-items-center">
                        <div className="contact-icon me-3">
                          <i className="bi bi-whatsapp"></i>
                        </div>
                        <div>
                          <h6 className="mb-0">WhatsApp</h6>
                          <a href="https://wa.me/6583308396" className="text-dark text-decoration-none">Message us on WhatsApp</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <style jsx>{`
        :global(:root) {
          --primary-color: #fcb900;
        }

        .animated-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .circle-1, .circle-2, .circle-3 {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          top: -150px;
          right: -150px;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: -100px;
          left: -100px;
          animation-delay: 2s;
        }

        .circle-3 {
          width: 150px;
          height: 150px;
          top: 50%;
          right: 10%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .wave-separator {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          line-height: 0;
          z-index: 2;
        }

        :global(.btn-yellow) {
          background-color: #fcb900;
          border: none;
          color: #000;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        :global(.btn-yellow:hover) {
          background-color: #e0a800;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 0 10px rgba(252, 185, 0, 0.6);
        }

       .ratio-16x9 {
  aspect-ratio: 16 / 9;
  width: 100%;
  display: block;
}

.accent-center-underline {
  height: 4px;
  width: 80px;
  background: linear-gradient(to right, #fcb900, rgba(252, 185, 0, 0.5));
  border-radius: 4px;
}


        /*calculators*/
/* Match layout to NRI tool sections */
/* Wrapper with more edge spacing and curved background */
.resource-section {
  padding: 80px 20px;
  background-color: #f9fafa;
}

/* Inner container with white background and soft shadow */
.resource-section .container {
  background-color: #ffffff;
  border-radius: 24px;
  padding: 60px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.05);
}

/* Resource image box */
.resource-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.resource-image img {
  border-radius: 20px;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.resource-image:hover {
  transform: scale(1.02);
}

/* Small badge above image */
.resource-badge {
  position: absolute;
  top: 16px;
  right: 16px;
}
.section-tag .badge,
.resource-badge .badge {
  background-color: #fcb900;
  color: #000;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 6px 12px;
  border-radius: 999px;
}

/* Heading */
.resource-section h2.display-6 {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2a44;
  margin-bottom: 1rem;
}

/* Underline accent below heading */
.accent-underline {
  height: 4px;
  width: 60px;
  background-color: #fcb900;
  border-radius: 2px;
  margin-bottom: 1rem;
}

/* Description text */
.resource-section .lead {
  font-size: 1.125rem;
  color: #444;
}

/* Bullet points */
ul.list-unstyled li {
  font-size: 1rem;
  display: flex;
  align-items: center;
  line-height: 1.6;
}
ul.list-unstyled i {
  color: #fcb900;
  font-size: 1.2rem;
  margin-right: 8px;
}

/* Button styles */
.btn-orange {
  background-color: #fcb900;
  color: #000;
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
}
.btn-orange:hover {
  background-color: #e6a700;
  color: #000;
}

/* Mobile responsive tweaks */
@media (max-width: 992px) {
  .resource-section .container {
    padding: 40px 20px;
  }
  .resource-section h2.display-6 {
    font-size: 1.6rem;
  }
  .resource-section .lead {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .resource-section {
    padding: 60px 10px;
  }
  .resource-section .container {
    padding: 30px 15px;
  }
  .resource-section h2.display-6 {
    font-size: 1.4rem;
  }
  .accent-underline {
    width: 50px;
  }
  ul.list-unstyled li {
    font-size: 0.95rem;
  }
}



         .section-heading {
      color: #1F2A44;
      font-weight: 700;
    }

    .tool-box:hover {
      box-shadow: 0 0 18px rgba(252, 185, 0, 0.3);
      transition: all 0.3s ease;
    }

    .accent-center-underline {
      height: 4px;
      width: 80px;
      background: linear-gradient(to right, #fcb900, rgba(252, 185, 0, 0.5));
      border-radius: 4px;
    }

    @media (max-width: 768px) {
      .tool-box {
        text-align: center;
      }
    }
       /* Hero Section Styles */
        .resources-hero-bg {
          background: linear-gradient(135deg, rgba(254,254,254,0.85), rgba(230,170,0,0.95)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center/cover;
          height: 500px;
          box-shadow: inset 0 0 100px rgba(0,0,0,0.5);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 0;
        }

        .hero-circles .circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          background: white;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          top: -150px;
          right: -100px;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: -70px;
          left: 10%;
        }

        .circle-3 {
          width: 150px;
          height: 150px;
          top: 20%;
          left: 30%;
        }

        .accent-line {
          height: 4px;
          width: 80px;
          background: linear-gradient(to right, #fff, rgba(255,255,255,0.5));
          border-radius: 4px;
        }

        .accent-underline {
          height: 4px;
          width: 80px;
          background: linear-gradient(to right, var(--primary-color), rgba(252,185,0,0.5));
          border-radius: 4px;
        }

        .accent-center-underline {
          height: 4px;
          width: 80px;
          background: linear-gradient(to right, var(--primary-color), rgba(252,185,0,0.5));
          border-radius: 4px;
        }

        .floating-image {
          position: relative;
        }

        .stats-card {
          transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
          transition: all 0.5s ease;
        }

        .stats-card:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
        }

        /* Animation Classes */
        .animate__animated {
          animation-duration: 1s;
        }

        .animate__fadeInLeft {
          animation-name: fadeInLeft;
        }

        .animate__fadeInRight {
          animation-name: fadeInRight;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translate3d(-50px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translate3d(50px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        /* Resource Sections */
        .resource-section {
          position: relative;
          overflow: hidden;
        }

        .resource-image {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .resource-badge {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        .benefit-icon, .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
        }

        .section-tag {
          display: inline-block;
        }
        /* Process Timeline */
        .process-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          background-color: var(--primary-color);
          color: var(--secondary-color);
        }

        .process-step {
          position: relative;
        }

        .process-step:not(:last-child):before {
          content: '';
          position: absolute;
          left: 18px;
          top: 36px;
          height: calc(100% - 36px);
          width: 1px;
          background-color: rgba(252,185,0,0.3);
          z-index: 0;
        }

        /* CTA Section */
        .cta-card {
          z-index: 1;
          background-color: var(--primary-color);
        }

        .cta-shapes .shape {
          position: absolute;
          background-color: rgba(255,255,255,0.1);
          border-radius: 50%;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: -100px;
          right: -50px;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          bottom: -50px;
          right: 30%;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          top: 30%;
          left: -30px;
        }

        .contact-card {
          transform: rotate(2deg);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: rotate(0deg);
        }

        @media (max-width: 768px) {
          .process-step:not(:last-child):before {
            height: calc(100% - 30px);
          }
          
          .contact-card {
            transform: none;
          }
        }

        .btn-outline-orange {
            color: #fcb900;
            border: 2px solid #fcb900;
            background: transparent;
            transition: all 0.3s ease;
        }

        .btn-outline-orange:hover {
            background: #fcb900;
            color: #000;
        }

        .filter-buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
        }

        @media (max-width: 768px) {
            .filter-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .filter-buttons .btn {
                width: 200px;
                margin: 0.25rem 0;
            }
        }

        .active-filter,
        .inactive-filter {
            cursor: pointer;
        }

        .active-filter {
            background-color: #fcb900;
            color: #000;
            border: none;
            box-shadow: 0 4px 12px rgba(252, 185, 0, 0.25);
            transform: scale(1.05);
        }

        .inactive-filter {
            background-color: #fffbe6;
            color: #000;
            border: 2px solid #fcb900;
            transition: all 0.3s ease;
            box-shadow: 0 2px 6px rgba(252, 185, 0, 0.1);
        }

        .inactive-filter:hover {
            background-color: #fcb900;
            color: #000;
        }

        @media (max-width: 768px) {
            .d-flex.flex-wrap {
                flex-direction: column;
                align-items: center;
            }
            
            .d-flex.flex-wrap button {
                width: 200px;
                margin: 0.25rem 0;
            }
        }
      `}</style>
    </>
  );
};

export default Resources; 
