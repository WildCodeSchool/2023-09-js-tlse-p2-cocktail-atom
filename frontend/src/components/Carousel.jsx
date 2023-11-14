import React, { useState } from "react";
import "./Carousel.scss";
import PropTypes from "prop-types";
import Cosmopolitain from "../assets/images/Cosmopolitain.jpg";
import Daquiri from "../assets/images/Daquiri.jpg";
import DryMartini from "../assets/images/Dry-Martini.jpg";
import Manhattan from "../assets/images/Manhattan.jpg";
import Margarita from "../assets/images/Margarita.jpg";
import Mimosa from "../assets/images/Mimosa.jpg";
import Mojito from "../assets/images/Mojito.jpg";
import Negroni from "../assets/images/Negroni.jpg";
import Fashioned from "../assets/images/Old-fashioned.jpg";
import Sex from "../assets/images/Sex-on-the-beach.jpg";

function Carousel({ items, active }) {
  Carousel.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        name: PropTypes.string,
      })
    ).isRequired,
    active: PropTypes.number.isRequired,
  };

  const [carouselState, setCarouselState] = useState({
    items,
    active,
    direction: "",
  });

  const images = [
    { src: Cosmopolitain, name: "Cosmopolitain" },
    { src: Daquiri, name: "Daquiri" },
    { src: DryMartini, name: "Dry Martini" },
    { src: Manhattan, name: "Manhattan" },
    { src: Margarita, name: "Margarita" },
    { src: Mimosa, name: "Mimosa" },
    { src: Mojito, name: "Mojito" },
    { src: Negroni, name: "Negroni" },
    { src: Fashioned, name: "Old Fashioned" },
    { src: Sex, name: "Sex on the Beach" },
  ];

  const generateItems = () => {
    const itemsArray = [];
    let level;

    for (
      let i = carouselState.active - 2;
      i < carouselState.active + 3;
      i += 1
    ) {
      let index = i;

      if (i < 0) {
        index = carouselState.items.length + i;
      } else if (i >= carouselState.items.length) {
        index = i % carouselState.items.length;
      }

      level = carouselState.active - i;
      itemsArray.push(
        <div key={index} className={`item level${level}`}>
          <img src={images[index].src} alt={images[index].name} />
          <div className="imageLabel">{images[index].name}</div>
        </div>
      );
    }
    return itemsArray;
  };

  const moveLeft = () => {
    const newActive = carouselState.active - 1;
    setCarouselState({
      ...carouselState,
      active: newActive < 0 ? carouselState.items.length - 1 : newActive,
      direction: "left",
    });
  };

  const moveRight = () => {
    setCarouselState({
      ...carouselState,
      active: (carouselState.active + 1) % carouselState.items.length,
      direction: "right",
    });
  };

  return (
    <div id="carousel" className="noselect">
      <div
        className="arrow arrow-left"
        onClick={moveLeft}
        onKeyDown={moveLeft}
        tabIndex={0}
        role="button"
      >
        <i className="fi-arrow-left" />
      </div>
      <div className="transitionGroup">{generateItems()}</div>
      <div
        className="arrow arrow-right"
        onClick={moveRight}
        onKeyDown={moveRight}
        tabIndex={0}
        role="button"
      >
        <i className="fi-arrow-right" />
      </div>
    </div>
  );
}

export default Carousel;
