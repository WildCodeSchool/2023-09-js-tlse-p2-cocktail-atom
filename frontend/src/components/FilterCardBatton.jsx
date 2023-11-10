import { useState } from "react";
import { FixedSizeList as List } from "react-window";

import PropTypes from "prop-types";

function FilterCardButton({ list, category, setTargetName, setTargetId }) {
  const [valuex, setValuex] = useState(true);
  const handelChange = (e) => {
    setTargetName(e.target.name);
    setTargetId(e.target.id);
  };

  return (
    <div className="filter">
      <button
        className="cardButton"
        type="button"
        onClick={() => {
          setValuex(!valuex);
        }}
      >
        {category}
      </button>
      {valuex && (
        <List
          className="List"
          height={150}
          itemCount={list.length}
          itemSize={35}
          width={300}
        >
          {({ index, style }) => (
            <button type="button" className="ListItemEven" style={style}>
              <input
                type="checkbox"
                onChange={handelChange}
                id={list[index]}
                name={category}
              />
              <label htmlFor={list[index]}>{list[index]}</label>
            </button>
          )}
        </List>
      )}
    </div>
  );
}
FilterCardButton.propTypes = {
  list: PropTypes.arrayOf.isRequired,
  category: PropTypes.string.isRequired,
  setTargetName: PropTypes.func.isRequired,
  setTargetId: PropTypes.func.isRequired,
};
export default FilterCardButton;
