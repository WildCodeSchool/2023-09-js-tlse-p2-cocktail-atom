import { useState } from "react";
import logoImage from "../assets/icons/logo.svg";
import filterImage from "../assets/icons/filter.svg";
import searchImage from "../assets/icons/search.svg";
import navBurger from "../assets/icons/burger.svg";
import quit from "../assets/icons/quit.svg";
import "./Navbar.scss";
import OverlayBurger from "./OverlayBurger";
import Data from "./Data";

function Navbar() {
  const [navBurgerOpen, setNavBurgerOpen] = useState(false);
  const [navFilterOpen, setNavFilterOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="burger-logo">
          <button
            type="button"
            onClick={() => setNavBurgerOpen(!navBurgerOpen)}
            className="nav-burger"
          >
            {navBurgerOpen ? (
              <img src={quit} alt="navigation logo" />
            ) : (
              <img src={navBurger} alt="navigation logo" />
            )}
          </button>
          <div className="logo">
            <img src={logoImage} alt="cocktail-atom logo" />
            <p>Cocktail-atom</p>
          </div>
        </div>
        <div className="filter-search">
          <button
            type="button"
            className="filter"
            onClick={() => setNavFilterOpen(!navFilterOpen)}
          >
            <img src={filterImage} alt="filter icon" />
            <p>Filter</p>
          </button>
          <div className="search">
            <input placeholder="search" type="text" />
            <img
              className="search-mobile"
              src={searchImage}
              alt="search icon"
            />
            <img
              className="search-desktop"
              src={searchImage}
              alt="search icon"
            />
          </div>
        </div>
      </nav>
      <OverlayBurger
        isOpen={navBurgerOpen}
        onClose={() => setNavBurgerOpen(!navBurgerOpen)}
      />
      {navFilterOpen && <Data />}
    </>
  );
}

export default Navbar;
