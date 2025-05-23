"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Tools = () => {
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
  ];

  const filteredTools = tools.filter(tool => {
    if (selectedCountry === 'all') return true;
    if (Array.isArray(tool.country)) {
      return tool.country.includes(selectedCountry);
    }
    return tool.country === selectedCountry;
  });

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero position-relative text-white"
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
              <h1 className="display-3 fw-bold text-white mb-4 text-shadow">Business Tools & Calculators</h1>
              <p className="lead text-white mb-5 fs-4 fw-light">
                Expert tools and calculators designed to help you make informed business decisions
              </p>
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
          {filteredTools.map((tool, index) => (
            <div className="row g-4 align-items-center mb-5" key={index}>
              <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                <div className="resource-image">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="img-fluid rounded-4 shadow-lg"
                  />
                  <div className="resource-badge">
                    <span className="badge badge-orange rounded-pill px-3 py-2 fs-6">
                      {Array.isArray(tool.country)
                        ? tool.country.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' & ')
                        : tool.country.charAt(0).toUpperCase() + tool.country.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                <div className={index % 2 === 1 ? 'pe-lg-5' : 'ps-lg-5'}>
                  <div className="section-tag mb-2">
                    <span className="badge badge-orange px-3 py-2">TOOL</span>
                  </div>
                  <h2 className="display-6 fw-bold mb-4">{tool.title}</h2>
                  <div className="accent-underline mb-4"></div>
                  <p className="lead mb-4">{tool.desc}</p>
                  <ul className="list-unstyled text-muted mb-4">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Based on latest regulations</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Easy to use interface</li>
                    <li><i className="bi bi-check-circle-fill text-primary me-2"></i> Instant results</li>
                  </ul>
                  <a href={tool.link} className="btn btn-orange btn-lg px-4 shadow-sm">
                    <i className={`bi ${tool.icon} me-2`}></i> Use {tool.title.split(" ")[0]}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* NRI Tax Calculator Section 
<section id="calculator_section" className="py-5 resource-section">
  <div className="container">
    <div className="row g-4 align-items-center">
      <div className="col-lg-6 order-lg-2">
        <div className="resource-image">
          <Image
            src="/images/tax_calc.jpg"
            alt="NRI Tax Calculator"
            width={600}
            height={400}
            className="img-fluid"
          />
          <div className="resource-badge">
            <span className="badge">Popular Tool</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 order-lg-1">
        <div className="pe-lg-5">
          <div className="section-tag mb-2">
            <span className="badge">FREE TOOL</span>
          </div>
          <h2 className="display-6 fw-bold">NRI Tax Calculator</h2>
          <div className="accent-underline mb-4"></div>
          <p className="lead mb-4">
            Calculate your estimated tax liability for FY 2025-26 (AY 2026-27) with our comprehensive calculator built for NRIs.
          </p>
          <ul className="list-unstyled text-muted mb-4">
            <li><i className="bi bi-check-circle-fill"></i> Accurate tax estimation based on latest slabs</li>
            <li><i className="bi bi-check-circle-fill"></i> Instant breakdown of liability</li>
            <li><i className="bi bi-check-circle-fill"></i> Personalized tax-saving suggestions</li>
          </ul>
          <button className="btn btn-orange btn-lg px-4 shadow-sm" disabled>
            <i className="bi bi-calculator me-2"></i> Coming Soon
          </button>
        </div>
      </div>
    </div>
  </div>
</section>*/}

      {/* NRI Tax Filing Section 
<section id="filing_section" className="py-5 resource-section">
  <div className="container">
    <div className="row g-4 align-items-center">
      <div className="col-lg-6 order-lg-2">
        <div className="resource-image">
          <Image
            src="/images/tax_file.jpg"
            alt="NRI Tax Return Filing"
            width={600}
            height={400}
            className="img-fluid"
          />
          <div className="resource-badge">
            <span className="badge">Step-by-Step</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 order-lg-1">
        <div className="pe-lg-5">
          <div className="section-tag mb-2">
            <span className="badge">EXPERT SERVICE</span>
          </div>
          <h2 className="display-6 fw-bold">NRI Tax Return Filing</h2>
          <div className="accent-underline mb-4"></div>
          <p className="lead mb-4">
            A guided process to help NRIs file Indian tax returns easily and accurately with expert assistance.
          </p>
          <ul className="list-unstyled text-muted mb-4">
            <li><i className="bi bi-check-circle-fill"></i> Fill basic personal & residency details</li>
            <li><i className="bi bi-check-circle-fill"></i> Submit income and deduction info</li>
            <li><i className="bi bi-check-circle-fill"></i> Expert-assisted review and filing</li>
          </ul>
          <Link href="/nri-tax-return" className="btn btn-orange btn-lg px-4 shadow-sm">
            <i className="bi bi-file-earmark-text me-2"></i> Start Tax Filing
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>*/}


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

        .tool-card {
          transition: all 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
        }

        .tool-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
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

export default Tools; 
