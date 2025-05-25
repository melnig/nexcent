import React from "react";
import Hero from "./Hero/Hero";
import Clients from "./Clients/Clients";
import Manage from "./Manage/Manage";
import Spend from "./Spend/Spend";
import Help from "./Help/Help";
import Design from "./Design/Design";
import Meet from "./Meet/Meet";
import Blog from "./Blog/Blog";
import Demo from "./Demo/Demo";

const Content = () => {
  return (
    <section className="content">
      <div className="line"></div>
      <Hero />
      <div className="line"></div>
      <Clients />
      <div className="line"></div>
      <Manage />
      <div className="line"></div>
      <Spend />
      <div className="line"></div>
      <Help />
      <div className="line"></div>
      <Design />
      <div className="line"></div>
      <Meet />
      <div className="line"></div>
      <Blog />
      <div className="line"></div>
      <Demo />
    </section>
  );
};

export default Content;
