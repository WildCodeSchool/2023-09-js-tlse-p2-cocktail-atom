import React, { useState, useEffect } from "react";
import "./Card.scss";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import fillHeart from "../assets/icons/fillHeart.svg";
import unfillHeart from "../assets/icons/unfillHeart.svg";
import { useData } from "../contexts/ApiContext";

function Card({ selectedDrinkId, onClose }) {
  Card.propTypes = {
    selectedDrinkId: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  const [favoriteImage, setFavoriteImage] = useState(true);
  const { data } = useData();
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  useEffect(() => {
    if (data && selectedDrinkId) {
      const cocktail = data.find((drink) => drink.idDrink === selectedDrinkId);
      setSelectedCocktail(cocktail);
    }
  }, [data, selectedDrinkId]);

  const toggleImage = () => {
    setFavoriteImage(!favoriteImage);
  };

  if (!selectedCocktail) {
    return null;
  }

  return (
    <div
      className="main-card"
      onClick={onClose}
      onKeyDown={onClose}
      tabIndex={0}
      role="button"
    >
      <div
        className="style-card"
        key={selectedCocktail.idDrink}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="button"
        tabIndex={0}
      >
        <div className="image-part">
          <img
            src={selectedCocktail.strDrinkThumb}
            alt="imageCock"
            className="image-cocktail"
          />
        </div>
        <div className="text-part">
          <div className="recipe-text">
            <div className="title">
              <h2>{selectedCocktail.strDrink}</h2>
              {favoriteImage ? (
                <button type="button" onClick={toggleImage}>
                  <img src={unfillHeart} alt="heart_image_filled" />
                </button>
              ) : (
                <button type="button" onClick={toggleImage}>
                  <img src={fillHeart} alt="heart_image_not_filled" />
                </button>
              )}
            </div>
            <div className="ingredients">
              <h2>Ingredients</h2>
              {Array.from({ length: 11 }, (_, i) => i + 1).map((index) => {
                const ingredientKey = `strIngredient${index}`;
                const measureKey = `strMeasure${index}`;
                const ingredient = selectedCocktail[ingredientKey];
                const measure = selectedCocktail[measureKey];

                if (ingredient) {
                  return (
                    <p key={index}>
                      {measure} {ingredient}
                    </p>
                  );
                }

                return null;
              })}
            </div>
            <div className="preparation">
              <h2>Preparation</h2>
              <p>{selectedCocktail.strInstructions}</p>
            </div>
          </div>

          {selectedCocktail.strVideo !== null && (
            <div className="recipe-video">
              <div className="video-wrapper">
                <ReactPlayer
                  url={selectedCocktail.strVideo}
                  controls
                  width="100%"
                  height="100%"
                  className="video"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
