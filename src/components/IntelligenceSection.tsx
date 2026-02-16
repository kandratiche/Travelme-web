import React from 'react';
import '../styles/IntelligenceSection.css';
import map from "../assets/map.svg"

const IntelligenceSection: React.FC = () => {
  return (
    <section className="intelligence-section">
      <div className="container">
        <div className="intelligence-grid">
          <img 
            src={map}
            alt="World Map" 
            className="map-image"
          />
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