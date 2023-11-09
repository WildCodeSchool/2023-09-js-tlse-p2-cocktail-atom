import { useEffect, useState } from "react";
import axios from "axios";

import PropTypes from "prop-types";

import MiniCard from "./MiniCard";

function FilterMiniCard({ targetName, targetId }) {
  const [clickValue, setClickValue] = useState(null);
  const [mapValue, setMapValue] = useState(null);

  const [mapValueArrayFinal, setMapValueArrayFinal] = useState([]);
  const alcohoAray = [];
  const alcoholArayName = [];

  useEffect(() => {
    if (targetName === "alcohol" || targetName === "ingridient") {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${targetId}`
        )
        .then((res) => {
          setClickValue(res.data.drinks);
        });
    } else if (targetName === "category")
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${targetId}`
        )
        .then((res) => {
          setClickValue(res.data.drinks);
        });
  }, [targetId]);

  const mapFilter = (alco1, alco2) => {
    for (let i = 0; i < alco1.length; i += 1) {
      for (let j = 0; j < alco2.length; j += 1) {
        if (alco1[i] === alco2[j]) {
          alcohoAray.push(alco1[i]);
        }
      }
    }
  };

  useEffect(() => {
    if (clickValue) {
      for (let i = 0; i < clickValue.length; i += 1) {
        alcoholArayName.push(clickValue[i].strDrink);
      }
      if (mapValue) {
        mapFilter(alcoholArayName, mapValue);
        setMapValue(alcohoAray);
      } else {
        setMapValue(alcoholArayName);
      }
    }
  }, [clickValue]);

  useEffect(() => {
    if (mapValue) {
      setMapValueArrayFinal([]);
      if (mapValue.length < 50) {
        for (let i = 0; i < mapValue.length; i += 1) {
          const shersh = mapValue[i];
          axios
            .get(
              `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${shersh}`
            )
            .then((res) =>
              setMapValueArrayFinal((oldMap) => [...oldMap, res.data.drinks[0]])
            );
        }
      } else {
        for (let i = 0; i < 50; i += 1) {
          const shersh = mapValue[i];
          axios
            .get(
              `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${shersh}`
            )
            .then((res) =>
              setMapValueArrayFinal((oldMap) => [...oldMap, res.data.drinks[0]])
            );
        }
      }
    }
  }, [mapValue]);

  return (
    <div>
      <MiniCard mapValueArrayFinal={mapValueArrayFinal} />
    </div>
  );
}
FilterMiniCard.propTypes = {
  targetName: PropTypes.string.isRequired,
  targetId: PropTypes.string.isRequired,
};
export default FilterMiniCard;
