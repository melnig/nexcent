import React from "react";
import items from "./data";
import "./Help.scss";

const Help = () => {
  return (
    <div className="help">
      <div className="container">
        <div className="help-wrapper">
          <div className="help-left">
            <h2 className="help-left__title">Helping a local</h2>
            <h2 className="help-left__subtitle">business reinvent itself</h2>
            <p className="help-left__descr">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="help-right">
            {items.map((item) => (
              <div key={item.id} className="help-right__box">
                <img src={item.image} alt="Icon 1" />
                <div className="help-rigth__box-content">
                  <h4>{item.title}</h4>
                  <p>{item.descr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
