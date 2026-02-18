import React from 'react';
import '../styles/CTASection.css';

const CTASection: React.FC = () => {
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
            <h2 className="cta-title">Готовы открыть город заново?</h2>
            
            <div className="cta-steps">
              <div className="cta-step">
                <div className="step-number">1</div>
                <span className="step-text">Скачайте приложение</span>
              </div>
              
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              
              <div className="cta-step">
                <div className="step-number">2</div>
                <span className="step-text">Укажите интересы</span>
              </div>
              
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              
              <div className="cta-step">
                <div className="step-number">3</div>
                <span className="step-text">Наслаждайтесь</span>
              </div>
            </div>
            <button 
              className="btn-primary btn-large"
              onClick={() => {
                    window.open(
                      "https://wa.me/77711081905?text=Здравствуйте!%20Меня%20интересует%20возможность%20получить%20демо-версию%20вашего%20приложения.%20Буду%20рад(а)%20обсудить%20подробности.",
                      "_blank"
                    )
                }}
            >
              Попробовать сейчас
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;