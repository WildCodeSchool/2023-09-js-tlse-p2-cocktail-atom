import React from "react";
import imageCocktail from "../assets/images/home-cocktail.jpg";
import Carousel from "./Carousel";
import SecondCarousel from "./SecondCarousel";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="bodyHome">
      <div className="imageHome">
        <img src={imageCocktail} alt="image_home_of_coktail" />
      </div>
      <div className="descriptionHome">
        <h2 className="Title">Popular Drinks</h2>
        <Carousel items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} active={0} />
        <h2 className="secondTitle">Random Drinks</h2>
        <SecondCarousel items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} active={0} />
      </div>
    </div>
  );
}

export default HomePage;
