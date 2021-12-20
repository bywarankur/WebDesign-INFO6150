import React, { useState } from "react";
import "../styles/Accordion.css";
import Data from "./FAQ";
import FAQ from "./FAQ";
import Accordion2 from "./Accordion2";
import "font-awesome/css/font-awesome.min.css";
import BannerImage from "../img/vegetable-skewer.jpg";

function Accordion() {
  const [data, setData] = useState(FAQ);
  return (
    <>
      <div class="faqBody" style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1>FAQ</h1>
        <div className="container">
          <div className="accordionBlock">
            {Data.map((val) => {
              return (
                <>
                  <Accordion2 {...val} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
