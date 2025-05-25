import React from "react";
import items from "./data";
import "./Manage.scss";

const Manage = () => {
  return (
    <div className="manage">
      <div className="container">
        <h1 className="manage-title">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="manage-subtitle">Who is Nextcent suitable for?</p>
        <div className="manage-content">
          {items.map((item, index) => (
            <div key={index} className="manage-content__item">
              <img src={item.img} />
              <h4 className="manage-content__item-title">{item.title}</h4>
              <p className="manage-content__item-descr">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
