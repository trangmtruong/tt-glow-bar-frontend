import React from "react";
import "../Header/Header.css";

import Navigation from "../Navigation/Navigation";

function Header({ handleSignUpModal, handleSignInModal }) {
  return (
    <div className="header">
      <Navigation
        handleSignUpModal={handleSignUpModal}
        handleSignInModal={handleSignInModal}
      />
    </div>
  );
}

export default Header;
