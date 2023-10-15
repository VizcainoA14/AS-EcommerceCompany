import React from "react";
import { Link } from "react-router-dom";
import iconImage from '../assets/img/iconImage.png';
import "./Header.css";  

export const Header = () => {
  return (
    <header className="header">
      <img className="icon-img" src={iconImage} alt="Icon"/>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>   
        </ul>
      </nav>
    </header>
  );
};

export default Header;
