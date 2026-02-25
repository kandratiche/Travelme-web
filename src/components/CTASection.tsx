import React from 'react';
import '../styles/CTASection.css';
import { useTranslation } from "react-i18next";

const CTASection: React.FC = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    const message = encodeURIComponent(t("cta.whatsappText"));

    window.open(
      `https://wa.me/77711081905?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id='CTA' className="cta-section">
      <div className="container">
        <div className="cta-card">
          <img 
            src="https://cdn.getyourguide.com/img/location/5a1d41802404f.jpeg/99.jpg" 
            alt="City at night" 
            className="cta-bg"
          />
          
          <div className="cta-content">
            <h2 className="cta-title">
              {t("cta.title")}
            </h2>
            
            <div className="cta-steps">
              <div className="cta-step">
                <div className="step-number">1</div>
                <span className="step-text">{t("cta.steps.step1")}</span>
              </div>
              
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              
              <div className="cta-step">
                <div className="step-number">2</div>
                <span className="step-text">{t("cta.steps.step2")}</span>
              </div>
              
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              
              <div className="cta-step">
                <div className="step-number">3</div>
                <span className="step-text">{t("cta.steps.step3")}</span>
              </div>
            </div>

            <button 
              className="btn-primary btn-large"
              onClick={handleClick}
            >
              {t("cta.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;