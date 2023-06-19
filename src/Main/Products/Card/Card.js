import React from "react";
import "./Card.css";

export default function Card(props) {

  return (
    
      <div
        className="card"
      >
        <img
          src={props.imagePath}
          alt="Image"
          className="fashion-image"
        />
        <h1 className="title">
          {props.name}
        </h1>
        <p>
          {props.price}
        </p>
       
        <div className="button-box">
          <button className="purchase" onClick={()=>alert(`${props.name} added to cart.`)}>
            Add to Cart
          </button>
        </div>
      </div>
  );
}
