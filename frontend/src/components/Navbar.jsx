import React from "react";
import logoImage from "../assets/icons/logo.svg";
import filterImage from "../assets/icons/filter.svg";
import searchImage from "../assets/icons/search.svg";
import navBurger from "../assets/icons/burger.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="burger-logo">
        <img className="nav-burger" src={navBurger} alt="" />
        <div className="logo">
          <img src={logoImage} alt="cocktail-atom logo" />
          <p>Cocktail-atom</p>
        </div>
      </div>
      <div className="filter-search">
        <div className="filter">
          <img src={filterImage} alt="filter icon" />
          <p>Filter</p>
        </div>
        <div className="search">
          <input placeholder="search" type="text" />
          <img src={searchImage} alt="search icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
