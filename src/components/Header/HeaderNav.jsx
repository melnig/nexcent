import React, { Component } from "react";

const HeaderNav = () => {
  return (
    <div className="header-desktop__menu">
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#about">Service</a>
        <a href="#services">Feature</a>
        <a href="#portfolio">Product</a>
        <a href="#blog">Testimonial</a>
        <a href="#contact">FAQ</a>
      </nav>
      <div className="header-right">
        <button className="btn login">Login</button>
        <button className="btn btn-signup">Sign Up</button>
      </div>
    </div>
  );
};

export default HeaderNav;
