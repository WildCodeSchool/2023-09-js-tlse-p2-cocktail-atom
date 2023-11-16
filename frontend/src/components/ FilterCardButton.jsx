import { useState } from "react";

import PropTypes from "prop-types";

import "./FilterCardButton.scss";

function FilterCardButton({ listCategory, category, setTargetId }) {
  const [value, setValue] = useState(true);

  const handleChange = (e) => {
    const result = [e.target.name];
    const condition = e.target.checked;
    result.push(condition);
    setTargetId(result);
  };

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
        <div className="list-container">
          {listCategory.map((listElement) => {
            return (
              <label htmlFor={listElement} className="label-category">
                <input
                  type="checkbox"
                  name={listElement}
                  id={listElement}
                  onChange={handleChange}
                  className="input-category"
                />
                {listElement}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}
FilterCardButton.propTypes = {
  listCategory: PropTypes.arrayOf.isRequired,
  category: PropTypes.string.isRequired,
  setTargetId: PropTypes.func.isRequired,
};
export default FilterCardButton;
