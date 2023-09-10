import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-leftPart">
        <div className="">
          <p className="headline">Eat and Enjoy In Our restaurant</p>
          <p>Award Winning Seafood And Where Everyone Wants To Be.</p>
          <p>The Fresh Fish, Succulent Shelfish</p>
        </div>

        <div className="hero-leftPart-bottom">
          <div className="img">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_640.jpg"
              alt=""
            />
          </div>
          <div className="button-div">

            <button>Explore Menu</button>
          </div>
        </div>
      </div>
      <div className="hero-rightPart">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
