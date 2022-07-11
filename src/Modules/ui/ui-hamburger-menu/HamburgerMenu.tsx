import React from "react";
import "./HamburgerMenu.scss";

const HamburgerMenu = () => {
  return (
    <div className="hamburger-menu-container">
      <button className="hamburger-start-button">
        <i className="material-icons">menu</i>
      </button>
      <button className="hamburger-item">
        <a href="home">
          <i className="material-icons">home</i>
        </a>
      </button>
    </div>
  );
};

export default HamburgerMenu;
