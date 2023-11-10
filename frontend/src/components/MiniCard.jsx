import React from "react";

import PropTypes from "prop-types";

import "./MiniCard.scss";

function MiniCard({ mapValueArrayFinal }) {
  return (
    <div className="miniCard">
      {mapValueArrayFinal &&
        mapValueArrayFinal.map((elem) => (
          <div key={elem.idDrink}>
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
          </div>
        ))}
    </div>
  );
}
MiniCard.propTypes = {
  mapValueArrayFinal: PropTypes.string.isRequired,
};

export default MiniCard;
