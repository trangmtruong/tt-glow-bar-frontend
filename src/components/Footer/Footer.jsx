import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <p className="footer__copyright">&copy; 2024 tt's glow bar</p>
        <div className="footer_contact">
          Contact:
          <div className="footer__ig">tt_glow_bar</div>
          <div className="footer_phone">xxx-xxx-xxxx</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
