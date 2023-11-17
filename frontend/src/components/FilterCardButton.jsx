import PropTypes from "prop-types";

import "./FilterCardButton.scss";
import { useData } from "../contexts/ApiContext";

function FilterCardButton({ listCategory, category, setTargetId }) {
  const { valueMobile, setValueMobile } = useData();
  const handleChange = (e) => {
    const result = [e.target.name];
    const condition = e.target.checked;
    result.push(condition);
    setTargetId(result);
  };

  return (
    <div className="filter">
      <button
        className="cat-button"
        type="button"
        onClick={() => {
          setValueMobile(!valueMobile);
        }}
      >
        {category}
      </button>
      {valueMobile && (
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
