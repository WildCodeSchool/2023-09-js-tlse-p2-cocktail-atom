import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../contexts/ApiContext";
import MiniCard from "./MiniCard";

function CocktailBySearch() {
  const { name } = useParams();
  const { data } = useData();
  const [dataMap, setDataMap] = useState();
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

      setDataMap(filterSearch);
    }

    fetchDataSearch();
  }, [name]);

  if (!dataMap) {
    return <p>No data {name}</p>;
  }

  if (dataMap.length === 0) {
    return <p>No cocktail found for {name}</p>;
  }

  return (
    <div>
      <MiniCard dataMap={dataMap} />
    </div>
  );
}

export default CocktailBySearch;
