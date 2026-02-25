import React from 'react';
import '../styles/Footer.css';
import logo from "../assets/logo.svg";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <img src={logo} />
              </div>
              <span className="logo-text">
                Travel<span className="logo-highlight">me</span>
              </span>
            </div>
            <p className="footer-description">
              {t("footer.description")}
            </p>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">{t("footer.product")}</h4>
            <ul className="footer-links">
              <li><a href="#features">{t("footer.links.features")}</a></li>
              <li><a href="#business">{t("footer.links.business")}</a></li>
              <li><a href="#">{t("footer.links.pricing")}</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">{t("footer.company")}</h4>
            <ul className="footer-links">
              <li><a href="#">{t("footer.links.about")}</a></li>
              <li><a href="#">{t("footer.links.careers")}</a></li>
              <li><a href="#">{t("footer.links.blog")}</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">{t("footer.contacts")}</h4>
            <ul className="footer-links">
              <li>info@travelme.kz</li>
              <li>+7 776 515 70 34</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t("footer.copyright")}</p>
          <div className="footer-legal">
            <a href="#">{t("footer.legal.privacy")}</a>
            <a href="#">{t("footer.legal.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;