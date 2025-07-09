import React from 'react';

function Header() {
  return (
    <header id="header" className="header">
      <nav className="nav container">
        <a href="#home" className="nav__brand"><span>Royal</span>Rasoi</a>
        <div id="nav-menu" className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#feature" className="nav__link">Features</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About Us</a></li>
            <li className="nav__item"><a href="#menu" className="nav__link">Menu</a></li>
            <li className="nav__item"><a href="#blog" className="nav__link">Blog</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
