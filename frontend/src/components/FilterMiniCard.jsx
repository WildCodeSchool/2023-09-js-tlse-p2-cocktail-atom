import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useData } from "../contexts/ApiContext";
import MiniCard from "./MiniCard";

function FilterMiniCard({ targetId }) {
  const { data } = useData();
  const [dataMap, setDataMap] = useState([]);
  const [filterValue, setFilterValue] = useState([]);
  useEffect(() => {
    setDataMap(data);
  }, [data]);

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
  }, [targetId, data]);

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
  }, [filterValue, data]);

  return (
    <div>
      <MiniCard dataMap={dataMap} />
    </div>
  );
}
FilterMiniCard.propTypes = {
  targetId: PropTypes.string.isRequired,
};
export default FilterMiniCard;
