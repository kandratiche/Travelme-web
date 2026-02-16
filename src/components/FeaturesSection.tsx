import React from 'react';
import '../styles/FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  return (
    <section id='features' className="features-section">
      <div className="container">
        <h2 className="section-title centered">Всё для идеального отдыха</h2>
        
        <div className="cards-grid">
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="feature-card-title">Генерация Маршрута</h3>
            <p className="feature-card-description">
              Умное построение логистики перемещений между локациями.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="feature-card-title">Интеграция Бронирования</h3>
            <p className="feature-card-description">
              Бронируйте столики и билеты прямо в чате с ботом.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="feature-card-title">Авторские Туры</h3>
            <p className="feature-card-description">
              Уникальные маршруты от локальных экспертов и гидов.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="feature-card-title">24/7 AI Ассистент</h3>
            <p className="feature-card-description">
              Поддержка и корректировка планов в реальном времени.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;