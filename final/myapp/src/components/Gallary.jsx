import React from "react";
import "../styles/Carousel.css";
import Carousel from "./Carousel";
import Image1 from "../img/smoothie.jpg";
import Image2 from "../img/carrots.jpg";
import Image3 from "../img/breakfast.jpg";
import Image4 from "../img/nuts.jpg";

const Gallary = () => {
  const slides = [
    {
      src: Image1,
    },
    {
      src: Image2,
    },
    {
      src: Image3,
    },
    {
      src: Image4,
    },
  ];

  return (
    <div className="slideshow">
      <Carousel slides={slides} />
    </div>
  );
};

export default Gallary;
