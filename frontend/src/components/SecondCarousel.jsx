import React, { useState, useEffect } from "react";
import "./SecondCarousel.scss";
import PropTypes from "prop-types";
import { useData } from "../contexts/ApiContext";

function SecondCarousel({ items, active, onImageClick }) {
  SecondCarousel.propTypes = {
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

  useEffect(() => {
    setCarouselState({
      items,
      active,
      direction: "",
    });
  }, [items, active]);

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
        <Item
          key={index}
          id={carouselState.items[index]}
          level={level}
          data={data}
          onImageClick={onImageClick}
        />
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
    <div id="secondCarousel" className="noselect">
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

function Item({ id, level, data, onImageClick }) {
  Item.propTypes = {
    id: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        idDrink: PropTypes.number.isRequired,
        strDrinkThumb: PropTypes.string.isRequired,
      })
    ).isRequired,
    onImageClick: PropTypes.func.isRequired,
  };
  const drink = data?.find((item) => item.idDrink === id);
  return (
    <div
      className={`item level${level}`}
      onClick={() => onImageClick(id)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onImageClick(id);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <img src={drink?.strDrinkThumb} alt={`item-${id}`} />
      <div className="cocktailName">{drink?.strDrink}</div>
    </div>
  );
}

export default SecondCarousel;
