import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useData } from "../contexts/ApiContext";
import MiniCard from "./MiniCard";

function FilterMiniCard({ targetId }) {
  const { data } = useData();
  const [dataMap, setDataMap] = useState(data);
  const [filterValue, setFilterValue] = useState([]);
  useEffect(() => {
    if (targetId) {
      if (targetId[1]) {
        if (filterValue) {
          setFilterValue([...filterValue, targetId[0]]);
        } else {
          setFilterValue(targetId[0]);
        }
      } else {
        setDataMap(data);
        setFilterValue((prevFilterValue) =>
          prevFilterValue.filter((id) => id !== targetId[0])
        );
      }
    }
  }, [targetId]);

  useEffect(() => {
    if (filterValue.length > 0) {
      for (let i = 0; i < filterValue.length; i += 1) {
        const obj = dataMap.filter((el) => {
          return Object.values(el).find((e) => {
            return e && e.includes(filterValue[i]);
          });
        });
        setDataMap(obj);
      }
    }
  }, [filterValue]);

  return (
    <div>
      <MiniCard dataMap={dataMap} />
    </div>
  );
}
FilterMiniCard.propTypes = {
  targetId: PropTypes.arrayOf.isRequired,
};
export default FilterMiniCard;
