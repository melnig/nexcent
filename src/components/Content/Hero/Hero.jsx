import React from "react";
import "./Hero.scss";
import slides from "./data";
import HeroSlide from "./HeroSlide";
import { useState, useEffect } from "react";

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-slider">
          {slides.map((slide, i) => (
            <HeroSlide key={i} slide={slide} active={i === index} />
          ))}
        </div>
        <div className="hero-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
