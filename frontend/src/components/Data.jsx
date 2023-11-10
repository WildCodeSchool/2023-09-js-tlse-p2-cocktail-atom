import { useState, useEffect } from "react";
import "./Data.scss";
import axios from "axios";

import FilterCardButton from "./FilterCardBatton";

import FilterMiniCard from "./FilterMiniCard";

function Data() {
  //   const [alcoholIngredientAPI, setAlcoholIngredientAPI] = useState([]);

  //   const [alcohols, setAlcohols] = useState("");
  //   const [ingredients, setIngredients] = useState[null];
  //   useEffect(() => {
  //     axios
  //       .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
  //       .then((res) => setAlcoholIngredientAPI(res.data.drinks));
  //   }, []);
  const [category, setCategori] = useState("");
  const [targetName, setTargetName] = useState(null);
  const [targetId, setTargetId] = useState(null);
  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((res) => setCategori(res.data.drinks));
  }, []);
  // console.log(category[1]);
  const alcoholIngredient = [
    { strIngredient1: "Light rum", alcohol: true },
    { strIngredient1: "Applejack", alcohol: true },
    { strIngredient1: "Gin", alcohol: true },
    { strIngredient1: "Dark rum", alcohol: true },
    { strIngredient1: "Sweet Vermouth", alcohol: true },
    { strIngredient1: "Strawberry schnapps", alcohol: true },
    { strIngredient1: "Scotch", alcohol: true },
    { strIngredient1: "Apricot brandy", alcohol: true },
    { strIngredient1: "Triple sec", alcohol: true },
    { strIngredient1: "Southern Comfort", alcohol: true },
    { strIngredient1: "Orange bitters", alcohol: true },
    { strIngredient1: "Brandy", alcohol: true },
    { strIngredient1: "Lemon vodka", alcohol: true },
    { strIngredient1: "Blended whiskey", alcohol: true },
    { strIngredient1: "Dry Vermouth", alcohol: true },
    { strIngredient1: "Amaretto", alcohol: true },
    { strIngredient1: "Tea", alcohol: false },
    { strIngredient1: "Champagne", alcohol: true },
    { strIngredient1: "Coffee liqueur", alcohol: true },
    { strIngredient1: "Bourbon", alcohol: true },
    { strIngredient1: "Tequila", alcohol: true },
    { strIngredient1: "Vodka", alcohol: true },
    { strIngredient1: "Añejo rum", alcohol: true },
    { strIngredient1: "Bitters", alcohol: true },
    { strIngredient1: "Sugar", alcohol: false },
    { strIngredient1: "Kahlua", alcohol: true },
    { strIngredient1: "Demerara Sugar", alcohol: false },
    { strIngredient1: "Dubonnet Rouge", alcohol: true },
    { strIngredient1: "Watermelon", alcohol: false },
    { strIngredient1: "Lime juice", alcohol: false },
    { strIngredient1: "Irish whiskey", alcohol: true },
    { strIngredient1: "Apple brandy", alcohol: true },
    { strIngredient1: "Carbonated water", alcohol: false },
    { strIngredient1: "Cherry brandy", alcohol: true },
    { strIngredient1: "Creme de Cacao", alcohol: true },
    { strIngredient1: "Grenadine", alcohol: false },
    { strIngredient1: "Port", alcohol: true },
    { strIngredient1: "Coffee brandy", alcohol: true },
    { strIngredient1: "Red wine", alcohol: true },
    { strIngredient1: "Rum", alcohol: true },
    { strIngredient1: "Grapefruit juice", alcohol: false },
    { strIngredient1: "Ricard", alcohol: true },
    { strIngredient1: "Sherry", alcohol: true },
    { strIngredient1: "Cognac", alcohol: true },
    { strIngredient1: "Sloe gin", alcohol: true },
    { strIngredient1: "Apple juice", alcohol: false },
    { strIngredient1: "Pineapple juice", alcohol: false },
    { strIngredient1: "Lemon juice", alcohol: false },
    { strIngredient1: "Sugar syrup", alcohol: false },
    { strIngredient1: "Milk", alcohol: false },
    { strIngredient1: "Strawberries", alcohol: false },
    { strIngredient1: "Chocolate syrup", alcohol: false },
    { strIngredient1: "Yoghurt", alcohol: false },
    { strIngredient1: "Mango", alcohol: false },
    { strIngredient1: "Ginger", alcohol: false },
    { strIngredient1: "Lime", alcohol: false },
    { strIngredient1: "Cantaloupe", alcohol: false },
    { strIngredient1: "Berries", alcohol: false },
    { strIngredient1: "Grapes", alcohol: false },
    { strIngredient1: "Kiwi", alcohol: false },
    { strIngredient1: "Tomato juice", alcohol: false },
    { strIngredient1: "Cocoa powder", alcohol: false },
    { strIngredient1: "Chocolate", alcohol: false },
    { strIngredient1: "Heavy cream", alcohol: false },
    { strIngredient1: "Galliano", alcohol: true },
    { strIngredient1: "Peach Vodka", alcohol: true },
    { strIngredient1: "Ouzo", alcohol: true },
    { strIngredient1: "Coffee", alcohol: false },
    { strIngredient1: "Spiced rum", alcohol: true },
    { strIngredient1: "Water", alcohol: false },
    { strIngredient1: "Espresso", alcohol: false },
    { strIngredient1: "Angelica root", alcohol: false },
    { strIngredient1: "Orange", alcohol: false },
    { strIngredient1: "Cranberries", alcohol: false },
    { strIngredient1: "Johnnie Walker", alcohol: true },
    { strIngredient1: "Apple cider", alcohol: false },
    { strIngredient1: "Everclear", alcohol: true },
    { strIngredient1: "Cranberry juice", alcohol: false },
    { strIngredient1: "Egg yolk", alcohol: false },
    { strIngredient1: "Egg", alcohol: false },
    { strIngredient1: "Grape juice", alcohol: false },
    { strIngredient1: "Peach nectar", alcohol: false },
    { strIngredient1: "Lemon", alcohol: false },
    { strIngredient1: "Firewater", alcohol: true },
    { strIngredient1: "Lemonade", alcohol: false },
    { strIngredient1: "Lager", alcohol: true },
    { strIngredient1: "Whiskey", alcohol: true },
    { strIngredient1: "Absolut Citron", alcohol: true },
    { strIngredient1: "Pisco", alcohol: true },
    { strIngredient1: "Irish cream", alcohol: true },
    { strIngredient1: "Ale", alcohol: true },
    { strIngredient1: "Chocolate liqueur", alcohol: true },
    { strIngredient1: "Midori melon liqueur", alcohol: true },
    { strIngredient1: "Sambuca", alcohol: true },
    { strIngredient1: "Cider", alcohol: true },
    { strIngredient1: "Sprite", alcohol: false },
    { strIngredient1: "7-Up", alcohol: false },
    { strIngredient1: "Blackberry brandy", alcohol: true },
    { strIngredient1: "Peppermint schnapps", alcohol: true },
    { strIngredient1: "Creme de Cassis", alcohol: true },
  ];
  const listAlcohol = [];
  const listIngredient = [];
  const listCategory = [];
  for (let i = 0; i < alcoholIngredient.length; i += 1) {
    if (alcoholIngredient[i].alcohol) {
      listAlcohol.push(alcoholIngredient[i].strIngredient1);
    } else {
      listIngredient.push(alcoholIngredient[i].strIngredient1);
    }
  }
  for (let i = 0; i < category.length; i += 1) {
    listCategory.push(category[i].strCategory);
  }
  return (
    <div>
      <div className="data">
        <FilterCardButton
          list={listAlcohol}
          rut="alcohol"
          setTargetName={setTargetName}
          setTargetId={setTargetId}
        />
        <FilterCardButton
          list={listIngredient}
          rut="ingridient"
          setTargetName={setTargetName}
          setTargetId={setTargetId}
        />
        <FilterCardButton
          list={listCategory}
          rut="category"
          setTargetName={setTargetName}
          setTargetId={setTargetId}
        />
      </div>
      <FilterMiniCard targetName={targetName} targetId={targetId} />
    </div>
  );
}

export default Data;
