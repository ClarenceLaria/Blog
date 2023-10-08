import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="top">
      <div className="brand">IDEA LAB</div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">About Us</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Portfolio</li>
          <li className="nav-item">Blog</li>
        </ul>
      </nav>
      </div>
     <div className="home"> <span >HOME</span>/BLOG</div>
      <div className="header-title">IDEAS <span>THAT</span> INS{/*<i>&#x2197;</i>*/}PIRE</div>
    </header>
  );
};

export default Header;