import React from "react";
import img from "./rafiki.svg";
import "./Spend.scss";

const Spend = () => {
  return (
    <div className="spend">
      <div className="container">
        <div className="spend-wrapper">
          <div className="spend-img">
            <img src={img} alt="img" />
          </div>
          <div className="spend-content">
            <h2 className="spend-content__title">
              The unseen of spending three <br /> years at Pixelgrade
            </h2>
            <p className="spend-content__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spend;
