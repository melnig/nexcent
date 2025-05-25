import React from "react";
import "./Blog.scss";
import items from "./data";

export default function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <h2 className="blog-title">Caring is the new marketing</h2>
        <p className="blog-subtitle">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
        <div className="blog-wrapper">
          {items.map((item, index) => (
            <div key={index} className="blog-wrapper__item">
              <img src={item.img} />
              <div className="blog-wrapper__item-block">
                <h4>{item.title}</h4>
                <div>
                  <a href="#">
                    {item.link}
                    <img src={item.arrow} alt="" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
