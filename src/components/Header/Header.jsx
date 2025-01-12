import React from "react";
import "../Header/Header.css";

import Navigation from "../Navigation/Navigation";

function Header({
  handleSignUpModal,
  handleSignInModal,
  handleSelectedCalendarSrc,
}) {
  return (
    <div className="header">
      <Navigation
        handleSignUpModal={handleSignUpModal}
        handleSignInModal={handleSignInModal}
        handleSelectedCalendarSrc={handleSelectedCalendarSrc}
      />
    </div>
  );
}

export default Header;
