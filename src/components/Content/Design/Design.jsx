import React from "react";
import img from "./pana.svg";
import "./Design.scss";
export default function Design() {
  return (
    <div className="design">
      <div className="container">
        <div className="design-wrapper">
          <div className="design-img">
            <img src={img} alt="img" />
          </div>
          <div className="design-content">
            <h2 className="design-content__title">
              How to design your site footer like <br /> we did
            </h2>
            <p className="design-content__subtitle">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
