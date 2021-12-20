import React, { useEffect, useState } from "react";
import AboutUSTopImage from "../img/about-us.jpg";
import "../styles/Policy.css";
import "font-awesome/css/font-awesome.min.css";

function Policy() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 5000);
  }, []);

  if (spinner) {
    return (
      <div className="spinner-container">
        {" "}
        <i className="fa fa-spinner fa-spin spinner"></i>
      </div>
    );
  } else {
    return (
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${AboutUSTopImage})` }}
        ></div>
        <div className="aboutBottom">
          <h2> Privacy And Policy</h2>
          <p>
            We and our partners are using technologies like cookies and process
            personal data in order to improve your experience. In case of sale
            of your personal information you may exercise your consumer right to
            opt-out by activating the toggle 'Do Not Sell My Personal
            Information' below.
          </p>
        </div>
      </div>
    );
  }
}

export default Policy;
