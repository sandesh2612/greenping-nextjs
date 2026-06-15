import Link from "next/link";

export default function Home() {
  return (
    <section className="hero-section-custom">
      <div className="app-container">
        <div className="grid-row align-center">
          
          {/* Left Column: Text and Buttons */}
          <div className="grid-col grid-col-half">
            <div className="hero-badge">
              <i className="fas fa-bolt"></i> ✨ Trusted by 15,000+ businesses worldwide
            </div>
            
            <h1 className="hero-title-main spacing-bottom-md">
              GreenPing
              <span style={{ fontSize: "1.2rem", verticalAlign: "super" }}>®</span>
            </h1>
            
            <div className="hero-subtitle spacing-bottom-md">
              Ultimate Solution for WhatsApp Marketing
            </div>
            
            <p className="text-secondary-custom spacing-bottom-lg" style={{ lineHeight: "1.6" }}>
              GreenPing is a <strong>Meta-verified</strong> enterprise platform that revolutionizes customer engagement through <strong>Official WhatsApp Cloud API</strong>. Experience AI-powered automation, real-time analytics, and seamless omnichannel communication — all backed by <strong>99.9% uptime SLA</strong> and bank-grade security.
            </p>

            {/* Stats Section */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15K+</span>
                <span className="stat-label">Active Businesses</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime Guarantee</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Priority Support</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex-display gap-md flex-wrap" style={{ marginTop: "2rem" }}>
              <Link href="https://greenping.in/auth/register/vendor" className="primary-button">
                Get Started Free <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="#features-modern" className="outline-button">
                <i className="fas fa-play-circle"></i> Watch Demo
              </Link>
            </div>
          </div>

          {/* Right Column: Image and Floating Badge */}
          <div className="grid-col grid-col-half text-center spacing-top-lg">
            <img 
              className="img-responsive hero-image-rounded hero-clear-image" 
              style={{ width: "90%" }} 
              src="https://greenping.in/imgs/outer-home/hero-home.webp" 
              alt="WhatsApp Marketing Dashboard" 
            />
            
            {/* Floating badge over image */}
            <div style={{ position: "relative", marginTop: "-40px", textAlign: "center" }}>
              <span style={{ 
                background: "#0f2b3d", 
                color: "white", 
                padding: "6px 16px", 
                borderRadius: "40px", 
                fontSize: "0.75rem", 
                display: "inline-block", 
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)" 
              }}>
                <i className="fab fa-whatsapp"></i> Official Meta Partner
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}