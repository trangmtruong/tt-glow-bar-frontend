import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__hours">
          Hours:
          <h3 className="footer__weekdays">Monday-Friday: 9AM-5PM</h3>
          <h3 className="footer__weekends">
            Sat-Sun: Contact for availability
          </h3>
        </div>
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
