import React from 'react';
import '../styles/APISection.css';
import { useTranslation } from "react-i18next";

const APISection: React.FC = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    const message = encodeURIComponent(
      t("api.button") + ". Хотел(а) бы узнать подробности."
    );

    window.open(
      `https://wa.me/77765157034?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="business" className="api-section">
      <div className="container-small">
        <div className="api-badge">{t("api.badge")}</div>

        <h2 className="api-title">
          {t("api.title_line1")}
          <br />
          {t("api.title_line2")}
        </h2>

        <p className="api-description">
          {t("api.description")}
        </p>

        <div className="api-features">
          <div className="api-feature">
            <svg className="api-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>{t("api.features.rest")}</span>
          </div>

          <div className="api-feature">
            <svg className="api-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>{t("api.features.security")}</span>
          </div>

          <div className="api-feature">
            <svg className="api-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>{t("api.features.latency")}</span>
          </div>
        </div>

        <button onClick={handleClick} className="btn-light">
          {t("api.button")}
        </button>
      </div>
    </section>
  );
};

export default APISection;