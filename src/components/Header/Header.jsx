import React from "react";
import "../Header/Header.css";
import headerLogo from "../../assets/glowbar-logo-white.svg";

function Header() {
  return (
    <div className="header">
      <nav className="header__nav-bar">
        <ul className="header__nav-links">
          <li className="header__sign-in">Sign In</li>
          <li className="header__sign-up">Sign Up</li>
          <li className="header__craftmanship">Craftmanship</li>
          <li className="header__book-appointemt">Book Service</li>
        </ul>
        <img className="header__logo" src={headerLogo} alt="App logo" />
      </nav>
    </div>
  );
}

export default Header;
