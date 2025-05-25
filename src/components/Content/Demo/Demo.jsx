import React from "react";
import "./Demo.scss";
import arrow from "./Right.svg";

export default function Demo() {
  return (
    <div className="demo">
      <div className="container">
        <h2 className="demo-title">
          Pellentesque suscipit fringilla libero eu.
        </h2>

        <button className="btn">
          Get a demo <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}
