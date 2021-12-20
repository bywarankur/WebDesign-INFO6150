import React from "react";

import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { MenuList } from "../utils/MenuList";
import BannerImage from "../img/menu-page-background-1.png";

function Menu() {
  return (
    <div className="menu" style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
    // </ul>
  );
}

export default Menu;
