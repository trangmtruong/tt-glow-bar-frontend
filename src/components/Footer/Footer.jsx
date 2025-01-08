import React from "react";
import "../Footer/Footer.css";
import instagramIcon from "../../assets/ig.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <p className="footer__copyright">&copy; 2024 tt's glow bar</p>
        <div className="footer_contact">
          <a
            href="https://www.instagram.com/tt_glow_bar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
          >
            <img
              className="footer__ig__type_icon"
              src={instagramIcon}
              alt="Instagram logo"
            />
          </a>
          <div className="footer__ig__type_username">tt_glow_bar</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
