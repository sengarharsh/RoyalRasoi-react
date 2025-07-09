import React from 'react';

function Sidebar() {
  return (
    <div id="sidebar" className="sidebar">
      <div className="sidebar__header">
        <h2 className="sidebar__title">Contact</h2>
        <p className="sidebar__description">
          The perfect place to satisfy your taste buds and enjoy a memorable dining experience.
        </p>
      </div>
      <div className="sidebar__content">
        <ul className="sidebar__list">
          <li className="sidebar__item"><span className="sidebar__subtitle">Address:</span> City center, Gwalior</li>
          <li className="sidebar__item"><span className="sidebar__subtitle">Open Hours:</span> 9:00 AM - 11:00 PM</li>
          <li className="sidebar__item"><span className="sidebar__subtitle">Call Us:</span> +91-7067825077</li>
          <li className="sidebar__item"><span className="sidebar__subtitle">Mail Us:</span> royalrasoi@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
