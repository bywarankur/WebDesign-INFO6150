import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../img/vegetable-skewer.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Healty Vegan!</h1>
        <p> Go Green! </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
