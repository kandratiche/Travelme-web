import React from 'react';
import '../styles/Header.css';
import logo from "../assets/logo.svg"

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo}/>
          </div>
          <span className="logo-text">
            Travelme<span className="logo-highlight">.ai</span>
          </span>
        </div>
        
        <div className="nav-links">
          <a href="#about" className="nav-link">О нас</a>
          <a href="#features" className="nav-link">Возможности</a>
          <a href="#business" className="nav-link">Для Бизнеса</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;