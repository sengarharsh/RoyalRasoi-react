import React from 'react';

function About() {
  return (
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
      </div>
    </section>
  );
}

export default About;
