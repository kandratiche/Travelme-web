import React from 'react';
import '../styles/Footer.css';
import logo from "../assets/logo.svg"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <img src={logo}/>
              </div>
              <span className="logo-text">
                Travel<span className="logo-highlight">me</span>
              </span>
            </div>
            <p className="footer-description">
              Интеллектуальный помощник для планирования досуга в Казахстане.
            </p>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Продукт</h4>
            <ul className="footer-links">
              <li><a href="#features">Возможности</a></li>
              <li><a href="#business">Для Бизнеса</a></li>
              <li><a href="#">Цены</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Компания</h4>
            <ul className="footer-links">
              <li><a href="#">О нас</a></li>
              <li><a href="#">Карьера</a></li>
              <li><a href="#">Блог</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Контакты</h4>
            <ul className="footer-links">
              <li>hello@travelme.kz</li>
              <li>+7 776 515 70 34</li>
              <li className="social-icons">
                <a href="#" className="social-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 Travelme. Все права защищены.</p>
          <div className="footer-legal">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;