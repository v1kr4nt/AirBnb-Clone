import React from "react";
import logo from "../images/katie-zaferes.png";
import star from "../images/star.png";

function Card(props) {
  return (
    <div className="card">
      <img src={logo} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
