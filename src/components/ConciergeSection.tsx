import React from 'react';
import '../styles/ConciergeSection.css';

const ConciergeSection: React.FC = () => {
  return (
    <section className="concierge-section">
      <div className="container">
        <div className="concierge-grid">
          <div className="concierge-examples">
            <div className="testimonial-card">
              <div className="user-info">
                <img 
                  src="https://img.freepik.com/premium-photo/gorgeous-confident-asian-woman-is-sitting-beautiful-cafe-restaurant-city_67155-40037.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="User" 
                  className="user-avatar"
                />
                <div>
                  <div className="user-name">Алия</div>
                  <div className="user-location">Алматы</div>
                </div>
              </div>
              <p className="testimonial-text">
                "Хочу тихий ужин, азиатская кухня, чек до 10к, где можно поговорить."
              </p>
            </div>
            
            <div className="result-card">
              <div className="result-header">
                <div className="result-icon">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <div className="result-name">Travelme Core</div>
                  <div className="result-match">Match 98%</div>
                </div>
              </div>
              <div className="result-details">
                <div className="detail-row">
                  <span className="detail-label">Атмосфера</span>
                  <span className="detail-value">Тихая, Lounge</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Кухня</span>
                  <span className="detail-value">Pan-Asian</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Средний чек</span>
                  <span className="detail-value">₸ (8000-10000)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="concierge-content">
            <h2 className="section-title">
              Ваш персональный <span className="text-highlight">AI-консьерж.</span>
            </h2>
            <p className="section-description">
              Мы не просто список мест. Наш алгоритм анализирует сотни факторов: от загруженности дорог до вашего настроения, чтобы предложить идеальный вариант именно сейчас.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="feature-title">Бюджет</h3>
                <p className="feature-description">Строго в рамках вашего лимита.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="feature-title">Гастро-преференции</h3>
                <p className="feature-description">Веган? Без глютена? Любите острое?</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="feature-title">Формат времени</h3>
                <p className="feature-description">Быстрый ланч или долгий ужин.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="feature-title">Локация</h3>
                <p className="feature-description">Рядом с офисом или ради вида.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConciergeSection;