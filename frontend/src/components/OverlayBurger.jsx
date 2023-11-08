import "./OverlayBurger.scss";
import PropTypes from "prop-types";

function OverlayBurger({ isOpen, onClose }) {
  return (
    <div>
      {isOpen && (
        <div className="overlay" onClick={onClose} aria-hidden="true">
          <ul className="overlay_container">
            <button className="home-button" type="button">
              Home
            </button>
            <button className="favorite-button" type="button">
              Favorite
            </button>
            <button className="random-button" type="button">
              Random Drink
            </button>
            <button className="contact-button" type="button">
              Contact us
            </button>
          </ul>
          <footer>Alcohol to be consumed in moderation</footer>
        </div>
      )}
    </div>
  );
}

OverlayBurger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OverlayBurger;
