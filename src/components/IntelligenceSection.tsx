import React from 'react';
import '../styles/IntelligenceSection.css';

const IntelligenceSection: React.FC = () => {
  return (
    <section className="intelligence-section">
      <div className="container">
        <div className="intelligence-grid">
          <div className="map-card">
            <div className="map-container">
              <div className="map-badge">
                <div className="pulse-dot"></div>
                <span>Live Demand</span>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop" 
                alt="World Map" 
                className="map-image"
              />
              
              <div className="demand-stats">
                <div className="stat-item">
                  <span className="stat-label">Coffee</span>
                  <div className="stat-bar-container">
                    <div className="stat-bar">
                      <div className="stat-bar-fill stat-bar-yellow" style={{width: '84%'}}></div>
                    </div>
                    <span className="stat-value">84%</span>
                  </div>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Parks</span>
                  <div className="stat-bar-container">
                    <div className="stat-bar">
                      <div className="stat-bar-fill stat-bar-green" style={{width: '62%'}}></div>
                    </div>
                    <span className="stat-value">62%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="intelligence-content">
            <h2 className="section-title">Мы понимаем город.</h2>
            <p className="section-description">
              Наша система анализирует анонимные данные о перемещениях и запросах, чтобы предсказывать тренды. Мы знаем, когда в любимой кофейне будет очередь, а когда — свободный столик у окна.
            </p>
            
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">150+</div>
                <div className="stat-label-small">Факторов анализа</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">Live</div>
                <div className="stat-label-small">Обновление данных</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">95%</div>
                <div className="stat-label-small">Точность совета</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;