import React, { useState, useEffect } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import './originalPortfolio.css';

// Original assets downloaded from https://mukund2506.github.io/portfolio/asset/
import profilePic from './assets/original/P1280417.png';
import checkmarkIcon from './assets/original/checkmark.png';
import linkedinIcon from './assets/original/linkedin.png';
import githubIcon from './assets/original/github.png';
import emailIcon from './assets/original/email.png';
import trailIcon from './assets/original/trail-logo.png';
import amazonImg from './assets/original/amazon.png';
import netflixImg from './assets/original/Netflix-Logo-2006-500x333-1.png';
import qrImg from './assets/original/qr.jpg';
import cognifyzLogo from './assets/original/cognifyz-logo.png';
import mahardhiLogo from './assets/original/mahardhi-logo.svg';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Exact typing text array from https://mukund2506.github.io/portfolio/
  const typingTexts = [
    'Salesforce Developer',
    'Salesforce Admin',
    'Full Stack Developer'
  ];
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentWord = typingTexts[textIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timer = setTimeout(() => {
          setTypedText(currentWord.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, 100);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setTypedText(currentWord.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 60);
      } else {
        setIsDeleting(false);
        setTextIndex(prev => (prev + 1) % typingTexts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const menuRef = React.useRef<HTMLDivElement>(null);

  // Close hamburger menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [menuOpen]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-wrapper" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Dynamic Animated Canvas Background */}
      <AnimatedBackground />

      {/* Main Content Layer */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Desktop Navigation */}
        <nav id="desktop-nav">
          <div className="logo">Mukund Jagani</div>
          <div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Mobile Hamburger Navigation */}
        <nav id="hamburger-nav">
          <div className="logo">Mukund Jagani</div>
          <div className="hamburger-menu" ref={menuRef}>
            <div 
              className={`hamburger-icon ${menuOpen ? 'open' : ''}`} 
              onClick={() => setMenuOpen(!menuOpen)}
              role="button"
              tabIndex={0}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setMenuOpen(!menuOpen);
                }
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </div>
          </div>
        </nav>

        {/* Profile / Hero Section */}
        <section id="profile">
          <div className="section__pic-container">
            <img
              decoding="async"
              id="profile1"
              src={profilePic}
              alt="mukund jagani's profile picture"
              title="mukund jagani"
            />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I&apos;m</p>
            <h1 className="title">Mukund Jagani</h1>
            
            <div className="typing">
              <span id="text">{typedText}</span>
              <div className="cursor"></div>
            </div>

            <div className="btn-container">
              <a 
                href="https://mukund2506.github.io/portfolio/asset/Mukund%20Jagani%20Resume%20Salesforce.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="btn btn-color-2">
                  See Resume
                </button>
              </a>
              <a href="#contact">
                <button className="btn btn-color-1">
                  Contact Info
                </button>
              </a>
            </div>

            <div id="socials-container">
              <a href="https://www.linkedin.com/in/mukund-jagani/" target="_blank" rel="noopener noreferrer">
                <img decoding="async" src={linkedinIcon} alt="My LinkedIn profile" className="icon" />
              </a>
              <a href="https://github.com/mukund2506" target="_blank" rel="noopener noreferrer">
                <img decoding="async" src={githubIcon} alt="My Github profile" className="icon" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title" id="aboutTitle">About Me</h1>
          <div className="section-container" style={{ marginTop: '1.5rem' }}>
            <p>
              I am a <strong>Salesforce Developer/Admin</strong> with hands-on experience in designing, customizing, and optimizing Salesforce solutions to meet business requirements and improve operational efficiency.
              <br /><br />
              My expertise includes Salesforce administration activities such as <strong>user and security management, custom objects, validation rules, workflows, reports, and dashboards</strong>. On the development side, I have strong experience working with <strong>Apex</strong>, <strong>Visualforce</strong>, <strong>Aura Components</strong>, and <strong>Lightning Web Components (LWC)</strong> to build scalable, performance-driven, and user-friendly applications.
              <br /><br />
              I have worked on implementing business logic, automation, and integrations within Salesforce, ensuring clean architecture, maintainable code, and adherence to best practices. I focus on delivering solutions that enhance user experience while aligning with business goals.
              <br /><br />
              In addition to Salesforce, I possess supporting skills in <strong>web development</strong>, including <strong>HTML, CSS, JavaScript, AJAX, jQuery</strong>, and <strong>JSON</strong>, along with working knowledge of <strong>SQL</strong> and <strong>MongoDB</strong>. These skills help me better understand frontend behavior, data handling, and integrations with Salesforce.
              <br /><br />
              I am driven by continuous learning and enjoy working in dynamic environments where I can solve complex challenges, contribute to impactful projects, and deliver high-quality, scalable Salesforce solutions that create long-term value for organizations.
            </p>
          </div>
        </section>

        <br /><br />

        {/* Experience Section */}
        <section id="experience">
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>
          <br />

          {/* Professional Work Experience & Internships */}
          <div className="company-experience-list">
            {/* Current Professional Role: Mahardhi Techlabs LLP */}
            <div className="details-container company-card">
              <div className="company-card-header">
                <div className="company-logo-info">
                  <div className="company-logo-box">
                    <img 
                      src={mahardhiLogo} 
                      alt="Mahardhi Techlabs LLP logo" 
                      className="company-logo-img" 
                    />
                  </div>
                  <div className="company-title-box">
                    <h2 className="company-role-title">
                      Salesforce Developer
                    </h2>
                    <p className="company-name">
                      Mahardhi Techlabs LLP
                    </p>
                  </div>
                </div>

                <div className="company-badge-box">
                  <span className="experience-badge present-badge">
                    Sep 2025 – Present
                  </span>
                </div>
              </div>

              <p className="company-description">
                Developing and customizing enterprise Salesforce solutions using Apex, Lightning Web Components (LWC), <strong>Aura Components</strong>, and Flow automations. Configuring custom objects, validation rules, user security, and REST API integrations adhering to Governor Limits.
              </p>

              <div className="company-tags">
                {['Apex & Triggers', 'Lightning Web Components (LWC)', 'Aura Components', 'Flow Builder', 'Salesforce Admin', 'SOQL', 'REST APIs', 'Git'].map(skill => (
                  <span key={skill} className="company-tag-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cognifyz Technologies Internship */}
            <div className="details-container company-card">
              <div className="company-card-header">
                <div className="company-logo-info">
                  <div className="company-logo-box">
                    <img 
                      src={cognifyzLogo} 
                      alt="Cognifyz Technologies logo" 
                      className="company-logo-img" 
                    />
                  </div>
                  <div className="company-title-box">
                    <h2 className="company-role-title">
                      Python Developer
                    </h2>
                    <p className="company-name">
                      Cognifyz Technologies · <span className="company-sub-type">Internship</span>
                    </p>
                  </div>
                </div>

                <div className="company-badge-box">
                  <span className="experience-badge intern-badge">
                    May 2025 - Aug 2025 · 4 mos
                  </span>
                </div>
              </div>

              <p className="company-description">
                Worked as a Python Developer Intern, developing backend logic, data processing routines, automation scripts, and working with developer tools.
              </p>

              <div className="company-tags">
                {['Python (Programming Language)', 'Developer Tools', 'Automation Scripts', 'Backend Development', 'Git'].map(skill => (
                  <span key={skill} className="company-tag-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="experience-details-container">
            <div className="about-containers">
              {/* Technical Proficiencies */}
              <div className="details-container">
                <h2 className="experience-sub-title">Technical Proficiencies</h2>
                <div className="article-container">
                  <article>
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>HTML</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>CSS</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>JavaScript</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Python</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>PHP</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Bootstrap</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                </div>
              </div>

              {/* Salesforce Expertise */}
              <div className="details-container">
                <h2 className="experience-sub-title">Salesforce Expertise</h2>
                <div className="article-container">
                  <article>
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Approval Process</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Development</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Admin</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article id="lastSkill">
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>LWC</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article id="lastSkill">
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Apex &amp; Apex Trigger</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article id="lastSkill">
                    <img decoding="async" src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>Aura Components</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <p className="section__text__p1">Browse My Recent</p>
          <h1 className="title">Projects</h1>
          <br />

          <div className="experience-details-container">
            <div className="about-containers">
              {/* Amazon Clone */}
              <div className="details-container color-container project-card">
                <div className="article-container">
                  <img decoding="async" src={amazonImg} alt="Amazone Clone" className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">Amazone Clone</h2>
                <div className="btn-container project-btn-container">
                  <a href="https://github.com/mukund2506" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Github
                    </button>
                  </a>
                  <a href="https://mukund2506.github.io/portfolio/amazon/home.html" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>

              {/* Netflix Clone */}
              <div className="details-container color-container project-card">
                <div className="article-container">
                  <img decoding="async" src={netflixImg} alt="Netflix Clone" className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">Netflix Clone</h2>
                <div className="btn-container project-btn-container">
                  <a href="https://github.com/mukund2506" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Github
                    </button>
                  </a>
                  <a href="https://mukund2506.github.io/portfolio/netflix/home.html" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>

              {/* QR Generator */}
              <div className="details-container color-container project-card">
                <div className="article-container">
                  <img decoding="async" src={qrImg} alt="Qr Genrater" className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">Qr Genrater</h2>
                <div className="btn-container project-btn-container">
                  <a href="https://github.com/mukund2506" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Github
                    </button>
                  </a>
                  <a href="https://mukund2506.github.io/portfolio/qrgenrate/home.html" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img decoding="async" src={emailIcon} alt="Email icon" className="icon contact-icon email-icon" />
              <p><a href="mailto:mukundjagani@gmail.com">mukundjagani@gmail.com</a></p>
            </div>
            <div className="contact-info-container">
              <img decoding="async" src={trailIcon} style={{ height: '40px', width: '40px' }} alt="trail icon" className="icon contact-icon trail-icon" />
              <p><a href="https://www.salesforce.com/trailblazer/mjagani01" target="_blank" rel="noopener noreferrer">Mukund Jagani</a></p>
            </div>
            <div className="contact-info-container">
              <img decoding="async" src={linkedinIcon} alt="LinkedIn icon" className="icon contact-icon" />
              <p><a href="https://www.linkedin.com/in/mukund-jagani/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <nav>
            <div className="nav-links-container">
              <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          <br /><br />
          <p>Copyright &#169; 2024 @Mukund Jagani. All Rights Reserved.</p>
        </footer>

        {/* Scroll To Top Button */}
        {showTopBtn && (
          <button id="goTopBtn" title="Go to top" onClick={scrollToTop}>
            &#8679;
          </button>
        )}
      </div>
    </div>
  );
}
