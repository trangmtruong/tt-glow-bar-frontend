import React from "react";
import "../Header/Header.css";

import Navigation from "../Navigation/Navigation";

function Header({ handleSignUpModal }) {
  return (
    <div className="header">
      <Navigation handleSignUpModal={handleSignUpModal} />
    </div>
  );
}

export default Header;
