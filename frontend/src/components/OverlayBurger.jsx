import "./OverlayBurger.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function OverlayBurger({ isOpen, onClose }) {
  return (
    <div>
      {isOpen && (
        <div className="overlay" onClick={onClose} aria-hidden="true">
          <ul className="overlay_container">
            <Link to="/" className="home-button burger-button" type="button">
              Home
            </Link>
            <Link
              to="/favorite"
              className="favorite-button burger-button"
              type="button"
            >
              Favorite
            </Link>
            <Link
              to="/random"
              className="random-button burger-button"
              type="button"
            >
              Random Drink
            </Link>
            <Link
              to="/about"
              className="about-button burger-button"
              type="button"
            >
              About us
            </Link>
          </ul>
          <footer>Alcohol is to be consumed in moderation</footer>
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
