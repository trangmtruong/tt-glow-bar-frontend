import React from "react";
import "../Footer/Footer.css";
import instagramIcon from "../../assets/instagram-icon.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <p className="footer__copyright">&copy; 2024 tt's glow bar</p>
        <div className="footer_contact">
          <img
            className="footer__ig__type_icon"
            src={instagramIcon}
            alt="Instagram logo"
          />
          <div className="footer__ig__type_username">tt_glow_bar</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
