import React from 'react';
import '../styles/HeroSection.css';
import iPhone from "../assets/Root.svg"
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge">
              <div className="badge-dot"></div>
              <span className="badge-text">{t("hero.badge")}</span>
            </div>
            
            <h1 className="hero-title">
              {t("hero.title")}<br />
              {t("hero.title2")} <span className="text-highlight">{t("hero.title3")}</span>
            </h1>
            
            <p className="hero-description">
              {t("hero.desc")}
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn-primary btn-large"
                onClick={() => {
                    document.getElementById("CTA")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("hero.create")}
              </button>
              <button 
                className="btn-secondary btn-large"
                onClick={() => {
                    document.getElementById("business")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("hero.business")}
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