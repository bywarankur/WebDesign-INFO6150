import React, { useEffect, useState } from "react";
import AboutUSTopImage from "../img/about-us.jpg";
import "../styles/About.css";
import "font-awesome/css/font-awesome.min.css";

function About() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 4000);
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
            <h2> ABOUT US</h2>
            <p>
              A vegan lifestyle refrains from using animal generated products -
              be it cloths, food items or any other product. It is certainly
              possible to whole heartedly adop veganism if you put in your heart
              and soul in it. In the Bible, it is said that God advised human
              beings to be kind to animals even if we do eat them, so he doesn't
              tell us to be vegan, but that shouldn't stop you from wanting to
              go vegan either. Our mission is to reduce impact to animals and
              environment, provide exceptional food options and assist in making
              people healthier. For us it is about making the food with a
              purpose and ensuring the raw materials are sustainably sourced,
              ingredient by ingredient, farm by farm. We also get inspired by
              helping local businesses and hence we support local farms in
              Washington and import fresh produce from them. We believe that as
              our business grows, our positive environmental impact should too.
            </p>
          </div>
        </div>

    );
  }
}

export default About;
