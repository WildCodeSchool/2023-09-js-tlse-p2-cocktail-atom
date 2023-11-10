import React, { useState, useCallback, useEffect } from "react";

import axios from "axios";

import ReactPlayer from "react-player";

import "./Card.scss";
import fillHeart from "../assets/icons/fillHeart.svg";
import unfillHeart from "../assets/icons/unfillHeart.svg";

function Card() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [favoriteImage, setfavoriteImage] = useState(true);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchCocktailHandler = useCallback(() => {
    setLoading(true);

    axios
      .get(`${baseUrl}s=bacardi`)
      .then((res) => {
        setData(res.data.drinks);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchCocktailHandler();
  }, [fetchCocktailHandler]);

  const toggleImage = () => {
    setfavoriteImage(!favoriteImage);
  };

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div className="main">
      {data.map((cocktail) => (
        <div className="styleCard" key={cocktail.idDrink}>
          <div className="imagePart">
            <img
              src={cocktail.strDrinkThumb}
              alt="imageCock"
              className="imageCocktail"
            />
          </div>
          <div className="textPart">
            <div
              className="recipeText"
              style={{ width: cocktail.strVideo === null ? "100%" : "50%" }}
            >
              <div className="title">
                <h2>{cocktail.strDrink}</h2>
                {favoriteImage ? (
                  <button type="button" onClick={toggleImage}>
                    <img src={fillHeart} alt="heart_image_not_filled" />
                  </button>
                ) : (
                  <button type="button" onClick={toggleImage}>
                    <img src={unfillHeart} alt="heart_image_filled" />
                  </button>
                )}
              </div>
              <div className="ingredients">
                <h2>Ingredients</h2>
                {Array.from({ length: 11 }, (_, i) => i + 1).map((index) => {
                  const ingredientKey = `strIngredient${index}`;
                  const measureKey = `strMeasure${index}`;
                  const ingredient = cocktail[ingredientKey];
                  const measure = cocktail[measureKey];

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
              </div>
              <p>{cocktail.strInstructions}</p>
            </div>

            {cocktail.strVideo !== null && (
              <div className="recipeVideo">
                <div className="video-wrapper">
                  <ReactPlayer
                    url={cocktail.strVideo}
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
      ))}
    </div>
  );
}

export default Card;
