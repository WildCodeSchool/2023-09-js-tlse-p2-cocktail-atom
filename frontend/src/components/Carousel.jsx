import React, { useState, useEffect } from "react";
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
import Gimlet from "../assets/images/Gimlet.jpg";
import { useData } from "../contexts/ApiContext";

function Carousel({ items, active, onImageClick }) {
  Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.number).isRequired,
    active: PropTypes.number.isRequired,
    onImageClick: PropTypes.func.isRequired,
  };
  const { data } = useData();
  const [carouselState, setCarouselState] = useState({
    items,
    active,
    direction: "",
  });

  const images = [
    { idDrink: "17196", src: Cosmopolitain, name: "Cosmopolitain" },
    { idDrink: "11006", src: Daquiri, name: "Daiquiri" },
    { idDrink: "11005", src: DryMartini, name: "Dry Martini" },
    { idDrink: "11008", src: Manhattan, name: "Manhattan" },
    { idDrink: "11007", src: Margarita, name: "Margarita" },
    { idDrink: "17205", src: Mimosa, name: "Mimosa" },
    { idDrink: "11000", src: Mojito, name: "Mojito" },
    { idDrink: "11003", src: Negroni, name: "Negroni" },
    { idDrink: "11001", src: Fashioned, name: "Old Fashioned" },
    { idDrink: "17255", src: Gimlet, name: "Gimlet" },
  ];

  useEffect(() => {
    if (data) {
      data.find((drink) => {
        return drink.idDrink === images[carouselState.active]?.idDrink;
      });
    }
  }, [data, carouselState.active]);

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
        <div
          key={index}
          className={`item level${level}`}
          onClick={() => onImageClick(images[index].idDrink)}
          onKeyDown={() => onImageClick(images[index].idDrink)}
          role="button"
          tabIndex={0}
        >
          <img src={images[index].src} alt={images[index].name} />
          <div className="image-label">{images[index].name}</div>
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
      <div className="transition-group">{generateItems()}</div>
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
