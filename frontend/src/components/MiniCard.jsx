import React, { useEffect, useState } from "react";
import "./MiniCard.scss";
import PropTypes from "prop-types";
import Card from "./Card";

function MiniCard({ dataMap }) {
  const [idDrink, setIdDrink] = useState([]);
  const [buttons, setButtons] = useState([0]);
  const [buttonClick, setButtonClick] = useState(1);
  const [dataMapClice, setdataMapClice] = useState([]);

  const hendelclick = (id) => {
    setIdDrink(id);
  };
  const handleCardClose = () => {
    setIdDrink(null);
  };
  useEffect(() => {
    const chunkSize = 12;
    const element = [];
    for (let i = 0; i < Math.ceil(dataMap.length / chunkSize); i += 1) {
      element.push(i + 1);
    }
    setButtons(element);
    setButtonClick(1);
  }, [dataMap]);
  useEffect(() => {
    const newData = dataMap.slice(buttonClick * 12 - 12, buttonClick * 12);
    setdataMapClice(newData);
  }, [buttonClick, dataMap]);
  const handleClick = (elem) => {
    setButtonClick(elem);
  };
  return (
    <div>
      <div className="mini-card">
        {dataMapClice.map((elem) => (
          <button
            type="button"
            className="card-min"
            key={elem.idDrink}
            onClick={() => hendelclick(elem.idDrink)}
          >
            <img src={elem.strDrinkThumb} alt={elem.strDrink} />
            <div className="ingridient">
              <h1>{elem.strDrink}</h1>
              <ul>
                {Array.from(
                  { length: 13 },
                  (_, index) =>
                    elem[`strIngredient${index + 1}`] && (
                      <li key={index}>{elem[`strIngredient${index + 1}`]}</li>
                    )
                )}
              </ul>
            </div>
          </button>
        ))}
      </div>
      <div className="button-container">
        <div>
          {buttonClick !== 1 && (
            <button
              type="button"
              className="slice-button"
              onClick={() => setButtonClick(buttonClick - 1)}
            >
              ←
            </button>
          )}
          {buttons.length > 1 &&
            buttons.map((elem) => (
              <button
                type="button"
                className="slice-button"
                key={elem}
                id={elem}
                onClick={() => handleClick(elem)}
                style={{
                  color: buttonClick === elem ? "rgb(148, 231, 15)" : "white",
                }}
              >
                {elem}
              </button>
            ))}
          {buttonClick !== buttons.length && (
            <button
              type="button"
              className="slice-button"
              onClick={() => setButtonClick(buttonClick + 1)}
            >
              →
            </button>
          )}
        </div>
      </div>
      <div>
        {idDrink && (
          <Card selectedDrinkId={idDrink} onClose={handleCardClose} />
        )}
      </div>
    </div>
  );
}
MiniCard.propTypes = {
  dataMap: PropTypes.string.isRequired,
};

export default MiniCard;
