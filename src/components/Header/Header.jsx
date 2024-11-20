import React from "react";
import "../Header/Header.css";
import headerLogo from "../../assets/glowbar-logo-white.svg";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="App logo" />
      <h1 className="header__title">Hello Clients</h1>
    </div>
  );
}

export default Header;
