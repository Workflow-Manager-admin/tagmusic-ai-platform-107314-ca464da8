import React, { useState } from 'react';
import './App.css';

function App() {
  const [frameworkEmail, setFrameworkEmail] = useState('');
  const [surveyEmail, setSurveyEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleFrameworkSubmit = (e) => {
    e.preventDefault();
    if (frameworkEmail) {
      alert(`Thank you! Preview will be sent to ${frameworkEmail}`);
      setFrameworkEmail('');
    }
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    if (surveyEmail) {
      alert(`Thank you! Survey invitation sent to ${surveyEmail}`);
      setSurveyEmail('');
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      alert(`Thank you! You're now subscribed with ${newsletterEmail}`);
      setNewsletterEmail('');
    }
  };

  // PUBLIC_INTERFACE
  const navigateToPage = (page) => {
    /**
     * Navigate to different pages (placeholder for now)
     * @param {string} page - The page to navigate to
     */
    alert(`Navigation to ${page} page - Coming Soon!`);
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            <span className="logo-icon">🎵</span>
            Tagmusic
          </a>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#framework" className="nav-link" onClick={() => navigateToPage('AI Music Framework')}>AI Music Framework</a></li>
            <li><a href="#pilot" className="nav-link" onClick={() => navigateToPage('Pilot')}>Pilot</a></li>
            <li><a href="#about" className="nav-link" onClick={() => navigateToPage('About')}>About</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => navigateToPage('Contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Simplifying AI in Music
              </h1>
              <p className="hero-subtitle">
                Clear music classification, AI Music Framework, and industry engagement 
                through our pilot program. Join the future of transparent music creation.
              </p>
              <div className="hero-buttons">
                <a href="#framework" className="btn btn-primary">
                  C2PA + CAWG
                </a>
                <a href="#pilot" className="btn btn-outline" onClick={() => navigateToPage('Pilot')}>
                  Join the Pilot!
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Classification Categories */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Music Classification Categories</h2>
            <div className="classification-grid">
              <div className="classification-card">
                <span className="classification-icon">👤</span>
                <h3 className="classification-title">Human Generated</h3>
                <p className="classification-description">
                  Music created entirely by human composers, musicians, and producers 
                  without AI assistance.
                </p>
              </div>
              <div className="classification-card">
                <span className="classification-icon">🤝</span>
                <h3 className="classification-title">AI Assisted</h3>
                <p className="classification-description">
                  Music created through collaboration between human creativity 
                  and AI tools for enhancement or inspiration.
                </p>
              </div>
              <div className="classification-card">
                <span className="classification-icon">🤖</span>
                <h3 className="classification-title">AI Generated</h3>
                <p className="classification-description">
                  Music primarily created by AI systems with minimal or no 
                  human creative input.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Info Boxes Section */}
        <section className="section section-dark">
          <div className="container">
            <div className="info-boxes">
              {/* AI Music Framework Box */}
              <div className="info-box">
                <h3 className="info-box-title">AI Music Framework</h3>
                <p className="info-box-description">
                  Download our comprehensive framework preview and learn how we're 
                  standardizing AI music classification for the industry.
                </p>
                <form onSubmit={handleFrameworkSubmit} className="email-form">
                  <input
                    type="email"
                    className="email-input"
                    placeholder="Enter your email"
                    value={frameworkEmail}
                    onChange={(e) => setFrameworkEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-blue">
                    Download Preview
                  </button>
                </form>
                <a 
                  href="#framework" 
                  className="nav-link"
                  onClick={() => navigateToPage('AI Music Framework')}
                >
                  Learn More →
                </a>
              </div>

              {/* Industry Survey Box */}
              <div className="info-box">
                <h3 className="info-box-title">Industry Survey</h3>
                <p className="info-box-description">
                  Share your insights on AI in music. Help shape the future of 
                  music classification standards through our industry survey.
                </p>
                <form onSubmit={handleSurveySubmit} className="email-form">
                  <input
                    type="email"
                    className="email-input"
                    placeholder="Enter your email"
                    value={surveyEmail}
                    onChange={(e) => setSurveyEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-blue">
                    Participate Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Pilot Program Invitation */}
        <section className="pilot-section">
          <div className="container">
            <h2 className="pilot-title">Join Our Pilot Program</h2>
            <p className="pilot-description">
              Be among the first to test our AI Music Framework. Help us refine 
              the future of music classification and transparency.
            </p>
            
            <div className="progress-container">
              <div className="progress-label">Pilot Program Responses</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '67%' }}></div>
              </div>
              <div className="progress-text">127 of 200 spots filled</div>
            </div>

            <button 
              className="btn btn-primary"
              onClick={() => navigateToPage('Pilot')}
            >
              Join Now
            </button>
          </div>
        </section>

        {/* Launch Timeline */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Launch Timeline</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">✓</div>
                <div className="timeline-content">
                  <h3>May 2025</h3>
                  <p>Paper release and Proof of Concept preparation</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">⏳</div>
                <div className="timeline-content">
                  <h3>June 2025</h3>
                  <p>Pilot program launch with selected participants</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter">
          <div className="container">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-description">
              Get the latest updates on our AI Music Framework, pilot program, 
              and industry developments.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-blue">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Tagmusic</h3>
              <p>
                Pioneering transparent and standardized AI music classification. 
                Building trust through clear categorization and industry collaboration.
              </p>
              <div className="social-links">
                <a href="#twitter" className="social-link">𝕏</a>
                <a href="#linkedin" className="social-link">in</a>
                <a href="#github" className="social-link">⚡</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about" onClick={() => navigateToPage('About')}>About Us</a></li>
                <li><a href="#contact" onClick={() => navigateToPage('Contact')}>Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Programs</h4>
              <ul className="footer-links">
                <li><a href="#framework" onClick={() => navigateToPage('AI Music Framework')}>AI Music Framework</a></li>
                <li><a href="#pilot" onClick={() => navigateToPage('Pilot')}>Pilot Program</a></li>
                <li><a href="#survey">Industry Survey</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Tagmusic AI Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
