import React from 'react';
import '../styles/ConciergeSection.css';
import amira from "../assets/Amira.jpg";
import { useTranslation } from "react-i18next";

const ConciergeSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="concierge-section">
      <div className="container">
        <div className="concierge-grid">

          <div className="concierge-examples">
            <div className="testimonial-card">
              <div className="user-info">
                <img 
                  src={amira}
                  alt="user" 
                  className="user-avatar"
                />
                <div>
                  <div className="user-name">{t("concierge.user.name")}</div>
                  <div className="user-location">{t("concierge.user.location")}</div>
                </div>
              </div>
              <p className="testimonial-text">
                "{t("concierge.user.request")}"
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
                  <div className="result-name">{t("concierge.result.name")}</div>
                  <div className="result-match">{t("concierge.result.match")}</div>
                </div>
              </div>

              <div className="result-details">
                <div className="detail-row">
                  <span className="detail-label">{t("concierge.result.atmosphere")}</span>
                  <span className="detail-value">{t("concierge.result.atmosphere_value")}</span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">{t("concierge.result.kitchen")}</span>
                  <span className="detail-value">{t("concierge.result.kitchen_value")}</span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">{t("concierge.result.price")}</span>
                  <span className="detail-value">{t("concierge.result.price_value")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="concierge-content">
            <h2 className="section-title">
              {t("concierge.title").replace(
                t("concierge.highlight"),
                ""
              )}
              <span className="text-highlight">
                {t("concierge.highlight")}
              </span>
            </h2>

            <p className="section-description">
              {t("concierge.desc")}
            </p>

            <div className="features-grid">

              <div className="feature-item">
                <div className="feature-icon">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="feature-title">{t("concierge.features.budget")}</h3>
                <p className="feature-description">{t("concierge.features.budget_desc")}</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="feature-title">{t("concierge.features.gastro")}</h3>
                <p className="feature-description">{t("concierge.features.gastro_desc")}</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="feature-title">{t("concierge.features.time")}</h3>
                <p className="feature-description">{t("concierge.features.time_desc")}</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="feature-title">{t("concierge.features.location")}</h3>
                <p className="feature-description">{t("concierge.features.location_desc")}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConciergeSection;