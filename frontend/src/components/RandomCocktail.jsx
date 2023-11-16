import React, { useEffect, useState } from "react";
import "./RandomCocktail.scss";
import { useData } from "../contexts/ApiContext";
import Card from "./Card";

function RandomCocktail() {
  const { data } = useData();
  const [randomDrinkId, setRandomDrinkId] = useState(null);

  useEffect(() => {
    const getRandomDrinkId = () => {
      if (!data || data.length === 0) {
        return null;
      }

      const randomIndex = Math.floor(Math.random() * data.length);
      const randomId = data[randomIndex].idDrink;

      return randomId;
    };

    const randomId = getRandomDrinkId();
    setRandomDrinkId(randomId);
  }, [data]);

  return (
    <div>
      {randomDrinkId && <Card idDrink={randomDrinkId} />}
      <div className="buttonRandom">
        <button type="button" onClick={() => setRandomDrinkId(null)}>
          Cocktail Random
        </button>
      </div>
    </div>
  );
}

export default RandomCocktail;
