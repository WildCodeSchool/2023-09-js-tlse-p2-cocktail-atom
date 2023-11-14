import { useState } from "react";
import { FixedSizeList as List } from "react-window";

import PropTypes from "prop-types";

function FilterCardButton({ list, category }) {
  const [value, setValue] = useState(true);

  return (
    <div className="filter">
      <button
        className="cardButton"
        type="button"
        onClick={() => {
          setValue(!value);
        }}
      >
        {category}
      </button>
      {value && (
        <List
          className="List"
          height={150}
          itemCount={list.length}
          itemSize={35}
          width={300}
        >
          {({ index, style }) => (
            <button type="button" className="ListItemEven" style={style}>
              <input type="checkbox" id={list[index]} />
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
};
export default FilterCardButton;
