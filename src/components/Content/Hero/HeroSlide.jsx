import React from "react";

const HeroSlide = ({ slide, active }) => {
  return (
    <div className={`hero-slide ${active ? "active" : ""}`}>
      <div className="hero-content">
        <h1>{slide.title}</h1>
        <h2>{slide.subtitle}</h2>
        <p>{slide.descr}</p>
        <button className="btn signup">Register</button>
      </div>
      <div className="hero-image">
        <img src={slide.image} alt="Slide" />
      </div>
    </div>
  );
};

export default HeroSlide;
