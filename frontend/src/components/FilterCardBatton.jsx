import { useState } from "react";
import { FixedSizeList as List } from "react-window";

import PropTypes from "prop-types";

function FilterCardButton({ list, rut, setTargetName, setTargetId }) {
  const [valuex, setValuex] = useState(true);
  const hendelClick = (e) => {
    setTargetName(e.target.name);
    setTargetId(e.target.id);
  };

  return (
    <div className="filter">
      <button
        type="button"
        onClick={() => {
          setValuex(!valuex);
        }}
      >
        {rut}
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
                onChange={hendelClick}
                id={list[index]}
                name={rut}
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
  list: PropTypes.string.isRequired,
  rut: PropTypes.string.isRequired,
  setTargetName: PropTypes.string.isRequired,
  setTargetId: PropTypes.string.isRequired,
};
export default FilterCardButton;
