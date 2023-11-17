import React, { useEffect, useState } from "react";
import "./RandomCocktail.scss";
import ReactPlayer from "react-player";
import { useData } from "../contexts/ApiContext";
import fillHeart from "../assets/icons/fillHeart.svg";
import unfillHeart from "../assets/icons/unfillHeart.svg";
import logoImage from "../assets/icons/logo.svg";

function RandomCocktail() {
  const { data } = useData();
  const [favoriteImage, setFavoriteImage] = useState(true);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [currentIdDrink, setCurrentIdDrink] = useState(null);

  const getRandomDrink = () => {
    if (!data || data.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  };

  useEffect(() => {
    const randomCocktail = getRandomDrink();
    setSelectedCocktail(randomCocktail);
    setCurrentIdDrink(randomCocktail ? randomCocktail.idDrink : null);
  }, [data]);

  const toggleImage = () => {
    setFavoriteImage(!favoriteImage);
  };

  const changeIdDrink = () => {
    const randomCocktail = getRandomDrink();
    setSelectedCocktail(randomCocktail);
    setCurrentIdDrink(randomCocktail ? randomCocktail.idDrink : null);
  };

  if (!selectedCocktail) {
    return null;
  }

  return (
    <div className="main-random-cocktail">
      <div className="style-card" key={currentIdDrink}>
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
        <div className="button-random">
          <button type="button" id="button" onClick={changeIdDrink}>
            <span>Change Cocktail</span>
            <img src={logoImage} alt="cocktail-atom logo" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomCocktail;
