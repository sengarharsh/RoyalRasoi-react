import React from 'react';
import './style.css'; // Import your CSS here (make sure it exists in src/)
import './App.css';   // Optional, only if you have styles here
import './style.css';

function App() {
  return (
    <div>
      {/* Header */}
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

      {/* Home */}
      <section id="home" className="home">
        <div className="home__wrapper container">
          <div className="home__content">
            <h1 className="home__title">A taste that will make you feel emotions!</h1>
            <p className="home__description">
              The perfect place to satisfy your taste buds and enjoy a memorable dining experience.
            </p>
            <button className="btn btn--primary">Explore Our Menu</button>
          </div>
          <img src="/assets/img/home2.jpg" alt="home" className="home__img" />
        </div>
      </section>

      {/* Features */}
      <section id="feature" className="section feature">
        <div className="section__header">
          <span className="section__subtitle">Features</span>
          <h2 className="section__title">Why Choose Us?</h2>
        </div>
        <div className="feature__wrapper container">
          <div className="feature__card">
            <i className="ri-file-list-3-line"></i>
            <h3 className="feature__title">Extensive Menu</h3>
            <p className="feature__description">Aromatic curries, diverse biryanis, and more!</p>
          </div>
          <div className="feature__card">
            <i className="ri-takeaway-line"></i>
            <h3 className="feature__title">Fast Delivery</h3>
            <p className="feature__description">Fresh and hot, delivered right on time.</p>
          </div>
          <div className="feature__card">
            <i className="ri-medal-2-line"></i>
            <h3 className="feature__title">High Quality</h3>
            <p className="feature__description">Top-notch ingredients and expert preparation.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="about__wrapper container">
          <div className="about__content">
            <span className="about__subtitle">Welcome to Royal Rasoi</span>
            <h2 className="about__title">We Cook Tradition and Family Recipes</h2>
            <p className="about__description">
              A place to satisfy your cravings with elegant décor and warm hospitality.
            </p>
            <button className="btn btn--primary">Discover Our Story</button>
          </div>
          <img src="/assets/img/about.jpg" alt="about" className="about__img" />
        </div> {/* <-- Closing about__wrapper */}
      </section>

    </div>  // This is the main wrapping <div>
  );
}


export default App;
