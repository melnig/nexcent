import React from "react";
import "./Clients.scss";
import images from "./data";

const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <h1 className="clients-title">Our Clients</h1>
        <p className="clients-subtitle">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="clients-content">
          {images.map((item, index) => (
            <div key={index} className="clients-item">
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
