import React from "react";
import "./Hero.css";
import Button from "../shared/Button";

function Hero() {
  return (
    <div className="hero-container">
      <span className="hero-title">Way beyond your expectation</span>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button> */}
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          <span className="button-style">Find Out More</span>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
