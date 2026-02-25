import React from 'react';
import '../styles/IntelligenceSection.css';
import map from "../assets/map.jpg";
import { useTranslation } from "react-i18next";

const IntelligenceSection: React.FC = () => {
  const { t } = useTranslation();

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
            <h2 className="section-title">
              {t("intelligence.title")}
            </h2>

            <p className="section-description">
              {t("intelligence.description")}
            </p>
            
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">150+</div>
                <div className="stat-label-small">
                  {t("intelligence.stats.factors")}
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-number">Live</div>
                <div className="stat-label-small">
                  {t("intelligence.stats.live")}
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-number">95%</div>
                <div className="stat-label-small">
                  {t("intelligence.stats.accuracy")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;