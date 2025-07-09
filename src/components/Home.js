import React from 'react';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home__wrapper container">
        <div className="home__content">
          <h1 className="home__title">A taste that will make you feel emotions!</h1>
          <p className="home__description">
            The perfect place to satisfy your taste buds and enjoy a memorable dining experience.
          </p>
          <a href="#" className="btn btn--primary">Explore Our Menu</a>
        </div>
        <img src="/assets/img/home2.jpg" alt="home" className="home__img" />
      </div>
    </section>
  );
}

export default Home;
