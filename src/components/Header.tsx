import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.svg";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const currentLang = i18n.language;

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="logo" />
          </div>
          <span className="logo-text">
            {t("header.brand").replace("me", "")}
            <span className="logo-highlight">me</span>
          </span>
        </div>

        <div className="nav-links">
          <a className="nav-link" href="#about">{t("nav.about")}</a>
          <a className="nav-link" href="#features">{t("nav.features")}</a>
          <a className="nav-link" href="#business">{t("nav.business")}</a>

          <div className="lang-switch">
            <button
              onClick={() => changeLang("ru")}
              className={`lang-btn ${currentLang === "ru" ? "active" : ""}`}
            >
              RU
            </button>
            <button
              onClick={() => changeLang("kz")}
              className={`lang-btn ${currentLang === "kz" ? "active" : ""}`}
            >
              KZ
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;