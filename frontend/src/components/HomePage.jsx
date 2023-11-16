import React, { useState, useEffect } from "react";
import imageCocktail from "../assets/images/home-cocktail.jpg";
import Carousel from "./Carousel";
import SecondCarousel from "./SecondCarousel";
import "./HomePage.scss";
import Card from "./Card";
import { useData } from "../contexts/ApiContext";

function HomePage() {
  const { data } = useData();
  const [selectedDrinkId, setSelectedDrinkId] = useState(null);
  const [randomDrinkIds, setRandomDrinkIds] = useState([]);

  useEffect(() => {
    const getRandomDrinkIds = () => {
      if (!data) {
        return [];
      }

      const allIds = data.map((drink) => drink.idDrink);
      const randomIds = [];

      while (randomIds.length < 10) {
        const randomIndex = Math.floor(Math.random() * allIds.length);
        const randomId = allIds[randomIndex];

        if (!randomIds.includes(randomId)) {
          randomIds.push(randomId);
        }
      }
      return randomIds;
    };

    const randomIds = getRandomDrinkIds();
    setRandomDrinkIds(randomIds);
  }, [data]);

  const handleImageClick = (drinkId) => {
    setSelectedDrinkId(drinkId);
  };

  const handleCardClose = () => {
    setSelectedDrinkId(null);
  };

  return (
    <div className="bodyHome">
      <div className="imageHome">
        <img src={imageCocktail} alt="image_home_of_coktail" />
      </div>
      <div className="descriptionHome">
        <h2 className="Title">Popular Drinks</h2>
        <Carousel
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          active={0}
          onImageClick={handleImageClick}
        />
        {selectedDrinkId !== null && (
          <Card selectedDrinkId={selectedDrinkId} onClose={handleCardClose} />
        )}
        <h2 className="secondTitle">Random Drinks</h2>
        <SecondCarousel
          items={randomDrinkIds}
          active={0}
          onImageClick={handleImageClick}
        />
        {selectedDrinkId !== null && (
          <Card selectedDrinkId={selectedDrinkId} onClose={handleCardClose} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
