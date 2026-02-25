import React from 'react';
import '../styles/WhySection.css';
import { useTranslation } from "react-i18next";

const WhySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="why-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {t("why.title")}
          </h2>

          <p className="section-description">
            {t("why.description")}
          </p>
        </div>
        
        <div className="comparison-grid">
          <div className="chaos-card">
            <h3 className="card-title">
              {t("why.chaos.title")}
            </h3>

            <div className="tabs-list">
              <div className="tab-item tab-pink">
                <div className="tab-label">
                  {t("why.chaos.instagram")}
                </div>
                <div className="tab-bar"></div>
              </div>

              <div className="tab-item tab-green">
                <div className="tab-label">
                  {t("why.chaos.maps")}
                </div>
                <div className="tab-bar"></div>
              </div>

              <div className="tab-item tab-blue">
                <div className="tab-label">
                  {t("why.chaos.search")}
                </div>
                <div className="tab-bar"></div>
              </div>
            </div>
          </div>
          
          <div className="experience-card">
            <div className="experience-icon">
              <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>

            <h3 className="experience-title">
              {t("why.experience.title")}
            </h3>

            <p className="experience-description">
              {t("why.experience.description")}
            </p>

            <div className="ai-result">
              <div className="ai-badge">AI</div>

              <div className="ai-result-info">
                <div className="ai-result-title">
                  {t("why.experience.aiTitle")}
                </div>
                <div className="ai-result-subtitle">
                  {t("why.experience.aiSubtitle")}
                </div>
              </div>

              <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;