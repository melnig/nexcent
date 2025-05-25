import React from "react";
import img from "./tesla.png";
import arrow from "./images/Right.svg";
import "./Meet.scss";
import img1 from "./images/logo-1.svg";
import img2 from "./images/logo-2.svg";
import img3 from "./images/logo-3.svg";
import img4 from "./images/logo-4.svg";
import img5 from "./images/logo-5.svg";
import img6 from "./images/logo-6.svg";

export default function Meet() {
  return (
    <div className="meet">
      <div className="container">
        <div className="meet-wrapper">
          <div className="meet-img">
            <img src={img} alt="img" />
          </div>
          <div className="meet-content">
            <p className="meet-content__title">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h3 className="meet-content__author">Tim Smith</h3>
            <p className="meet-content__position">
              British Dragon Boat Rasing Association
            </p>
            <div className="meet-footer">
              <div className="meet-imgs">
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
                <img src={img4} alt="img4" />
                <img src={img5} alt="img5" />
                <img src={img6} alt="img6" />
              </div>
              <a href="#">
                Meet all customers <img src={arrow} alt="" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
