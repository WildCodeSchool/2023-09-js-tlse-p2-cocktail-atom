import React, { useState } from "react";
import "./SecondCarousel.scss";
import PropTypes from "prop-types";

function SecondCarousel({ items, active }) {
  SecondCarousel.propTypes = {
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
        <Item key={index} id={carouselState.items[index]} level={level} />
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

function Item({ id, level }) {
  Item.propTypes = {
    id: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
  };
  return <div className={`item level${level}`}>{id}</div>;
}

export default SecondCarousel;
