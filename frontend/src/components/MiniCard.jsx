import React, { useState } from "react";
import "./MiniCard.scss";
import PropTypes from "prop-types";
// import Card from "./Card";

function MiniCard({ dataMap }) {
  const [cardClick, setCardClick] = useState(false);
  const [idDrink, setIdDrink] = useState([]);
  const hendelclick = (id) => {
    setCardClick(true);
    setIdDrink(id);
  };

  return (
    <div className="mini-card">
      <h1>{idDrink}</h1>
      <h1>{cardClick}</h1>
      {dataMap.length < 150 &&
        dataMap.map((elem) => (
          <button
            type="button"
            className="card"
            key={elem.idDrink}
            onClick={() => hendelclick(elem.idDrink)}
          >
            <img src={elem.strDrinkThumb} alt={elem.strDrink} />
            <div className="ingridient">
              <h1>{elem.strDrink}</h1>
              {elem.strIngredient1 && <h3>{elem.strIngredient1}</h3>}
              {elem.strIngredient2 && <h3>{elem.strIngredient2}</h3>}
              {elem.strIngredient3 && <h3>{elem.strIngredient3}</h3>}
              {elem.strIngredient4 && <h3>{elem.strIngredient4}</h3>}
              {elem.strIngredient5 && <h3>{elem.strIngredient5}</h3>}
              {elem.strIngredient6 && <h3>{elem.strIngredient6}</h3>}
              {elem.strIngredient7 && <h3>{elem.strIngredient7}</h3>}
              {elem.strIngredient8 && <h3>{elem.strIngredient8}</h3>}
              {elem.strIngredient9 && <h3>{elem.strIngredient9}</h3>}
              {elem.strIngredient10 && <h3>{elem.strIngredient10}</h3>}
              {elem.strIngredient11 && <h3>{elem.strIngredient11}</h3>}
              {elem.strIngredient12 && <h3>{elem.strIngredient12}</h3>}
              {elem.strIngredient13 && <h3>{elem.strIngredient13}</h3>}
            </div>
          </button>
        ))}
      {/* {cardClick && <Card idDrink={idDrink} />} */}
    </div>
  );
}
MiniCard.propTypes = {
  dataMap: PropTypes.string.isRequired,
};

export default MiniCard;
