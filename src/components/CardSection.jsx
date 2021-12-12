import React from "react";
import CardItem from "./CardItem";
import "./CardSection.css";

function CardSection() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../images/coffee-brewery.jpg"
              text="Brewed with Love from our finest brewer hands"
              label="Brewery"
              path="/services"
            />
            <CardItem
              src="../images/coffee-crescent.jpg"
              text="Best with a cresent in a sparkling morning"
              label="Food"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../images/coffee-cup.jpg"
              text="Get a cup specially made for you"
              label="Food"
              path="/services"
            />
            <CardItem
              src="../images/coffee-morning.jpg"
              text="Start the day with THE best coffee in town"
              label="Motivate"
              path="/products"
            />
            <CardItem
              src="../images/coffee-share.jpg"
              text="Share your thoughts with us while having a coffee"
              label="Share"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
