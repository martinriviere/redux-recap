import React from "react";
import arrowPng from "../arrow.png";

function Arrow({ rotate }) {
  return (
    <div
      style={{
        backgroundImage: `url(${arrowPng})`,
        marginRight: "25vw",
        width: 300,
        height: 300,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        marginLeft: "35vw",
        marginBottom: -150,
        marginTop: 72,
        transform: `rotate(${rotate}deg)`
      }}
    ></div>
  );
}

export default Arrow;
