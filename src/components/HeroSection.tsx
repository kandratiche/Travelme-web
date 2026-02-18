import React from 'react';
import '../styles/HeroSection.css';
import iPhone from "../assets/Root.svg"

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge">
              <div className="badge-dot"></div>
              <span className="badge-text">Доступно в Алматы и Астане</span>
            </div>
            
            <h1 className="hero-title">
              Планируйте идеальный досуг<br />
              за <span className="text-highlight">60 секунд.</span>
            </h1>
            
            <p className="hero-description">
              Персональный AI-ассистент, который знает город лучше любого гида. От кофеен до горных маршрутов — всё в одном приложении.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn-primary btn-large"
                onClick={() => {
                    document.getElementById("CTA")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Создать план бесплатно
              </button>
              <button 
                className="btn-secondary btn-large"
                onClick={() => {
                    document.getElementById("business")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Для бизнеса → API
              </button>
            </div>
            
            {/* <div className="social-proof">
              <div className="avatars">
                <div className="avatar avatar-1"></div>
                <div className="avatar avatar-2"></div>
                <div className="avatar avatar-3"></div>
              </div>
              <span className="social-proof-text">50+ довольных пользователей</span>
            </div> */}
          </div>
          
          <div className="hero-mockup">
            <div className='mockup-bg'></div>
            <img 
                src={iPhone} 
                alt="Mountains" 
                className="header-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;