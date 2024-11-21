import React from "react";
import "../Navigation/Navigation.css";
import headerLogo from "../../assets/glowbar-logo-white.svg";

function Navigation() {
  return (
    <>
      <nav className="nav__container">
        <div className="nav__links">
          <button className="nav__sign-in">Sign In</button>
          <button className="nav__sign-up">Sign Up</button>
          <button className="nav__craftmanship">Craftmanship</button>
          <button className="nav__book-service">Book Service</button>
        </div>
        <img className="nav__logo" src={headerLogo} alt="App logo" />
      </nav>
    </>
  );
}

export default Navigation;
