import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../contexts/ApiContext";

function CocktailBySearch() {
  const { name } = useParams();
  const { data } = useData();
  const [searchArray, setSearchArray] = useState();
  if (!data) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    function fetchDataSearch() {
      const filterSearch = data.filter((drink) => {
        return Object.values(drink).find((e) => {
          return e && e.includes(name.toLowerCase());
        });
      });

      setSearchArray(filterSearch);
    }

    fetchDataSearch();
  }, [name]);

  if (!searchArray) {
    return <p>No data {name}</p>;
  }

  if (searchArray.length === 0) {
    return <p>No cocktail found for {name}</p>;
  }

  return (
    <div>
      {searchArray.map((cocktail) => (
        <div key={cocktail.idDrink}>
          <h3>{cocktail.strDrink}</h3>
          {/* Render other details of the cocktail as needed */}
        </div>
      ))}
    </div>
  );
}

export default CocktailBySearch;
