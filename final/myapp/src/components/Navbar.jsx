import React, { useState } from "react";
import Logo from "../img/i-am-vegan.png";
import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";

import "font-awesome/css/font-awesome.min.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
  
        <a class="skip_nav" href="#main">Skip to navigation</a>
 

      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
         
          <div className="nav-item"><NavLink to="/"> Home </NavLink></div>
          <div className="nav-item"><NavLink to="/about"> About </NavLink></div>
          <div className="nav-item"><NavLink to="/contact"> Contact </NavLink></div>
          <div className="nav-item"><NavLink to="/Accordion"> FAQ </NavLink></div>
          <div className="nav-item"><NavLink to="/Gallary"> Album</NavLink></div>
          <div className="nav-item"><NavLink to="/Policy"> Policy</NavLink></div>
        </div>
      </div>
      <div className="rightSide">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/Accordion"> FAQ </NavLink>
        <NavLink to="/Gallary"> Gallary</NavLink>
        <NavLink to="/Policy"> Policy </NavLink>
        {
          <button onClick={toggleNavbar}>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
        }
      </div>
    </div>
  );
}

export default Navbar;
