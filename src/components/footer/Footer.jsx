import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>О нас</h3>
            <p>Мы являемся ведущими специалистами в области...</p>
          </div>
          <div className="col-md-6">
            <h3>Контакты</h3>
            <p>Адрес: г. Бишкек, ул. Табышалиева, д. 29, офис 14</p>
            <p>Телефон: +996 (552) 99-99-99</p>
            <p>E-mail: info@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
