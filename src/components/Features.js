import React from 'react';

function Features() {
  return (
    <section id="feature" className="section feature">
      <div className="section__header">
        <span className="section__subtitle">Features</span>
        <h2 className="section__title">Why Choose Us?</h2>
      </div>
      <div className="feature__wrapper container">
        <div className="feature__card">
          <i className="ri-file-list-3-line"></i>
          <h3 className="feature__title">Extensive Menu</h3>
          <p className="feature__description">
            Aromatic curries, diverse biryanis, and more!
          </p>
        </div>
        <div className="feature__card">
          <i className="ri-takeaway-line"></i>
          <h3 className="feature__title">Fast Delivery</h3>
          <p className="feature__description">
            Fresh and hot, delivered right on time.
          </p>
        </div>
        <div className="feature__card">
          <i className="ri-medal-2-line"></i>
          <h3 className="feature__title">High Quality</h3>
          <p className="feature__description">
            Top-notch ingredients and expert preparation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
