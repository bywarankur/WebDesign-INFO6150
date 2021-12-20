import React from "react";
import "../styles/Footer.css";
import "font-awesome/css/font-awesome.min.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-facebook-official" aria-hidden="true"></i>
        <i class="fa fa-twitter-square" aria-hidden="true"></i>
        <i class="fa fa-pinterest-square" aria-hidden="true"></i>
      </div>
      <p> &copy;ankurbywar greenSalad.com</p>
    </div>
  );
}

export default Footer;
