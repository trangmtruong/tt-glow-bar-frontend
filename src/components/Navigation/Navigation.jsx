import React, { useState } from "react";
import "./Navigation.css";
import headerLogo from "../../assets/glowbar-logo-white-cropped.svg";
import Craftmanship from "../Craftmanship/Craftmanship";
import { Link } from "react-router-dom";

function Navigation({
  handleSignUpModal,
  handleSignInModal,
  handleSelectedCalendarSrc,
}) {
  //usestate

  //functions

  return (
    <>
      <nav className="nav__container">
        <div className="nav__links">
          <button
            className="nav__link"
            onClick={handleSignInModal}
            type="button"
          >
            Sign In{" "}
          </button>
          <button
            className="nav__link"
            onClick={handleSignUpModal}
            type="button"
          >
            Sign Up
          </button>

          <Link to="/craftmanship" className="nav__link" type="button">
            Craftmanship
          </Link>
          <Link
            to="/book-service"
            className="nav__link"
            handleSelectedCalendarSrc={handleSelectedCalendarSrc}
          >
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
