import React, { useState } from "react";
import "../Navigation/Navigation.css";
import headerLogo from "../../assets/glowbar-logo-white.svg";
import Craftmanship from "../Craftmanship/Craftmanship";
import { Link } from "react-router-dom";

function Navigation() {
  //usestate

  //functions

  return (
    <>
      <nav className="nav__container">
        <div className="nav__links">
          <button className="nav__sign-in">Sign In</button>
          <button className="nav__sign-up">Sign Up</button>

          <Link to="/craftmanship" className="nav__craftmanship" type="button">
            Craftmanship
          </Link>
          <Link to="/book-service" className="nav__book-service">
            Book Service
          </Link>
        </div>
        <Link to="/">
          <img className="nav__logo" src={headerLogo} alt="App logo" />
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
