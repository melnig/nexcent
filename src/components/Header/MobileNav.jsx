import React from "react";
import { useState } from "react";
import list from "../../assets/img/list.svg";
import close from "../../assets/img/close.svg";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="header-mobile__menu">
      <div>
        <img
          onClick={() => {
            setMenu(!menu);
          }}
          src={menu ? close : list}
          alt=""
        />
      </div>
      {menu ? (
        <div className="header-mobileMenu">
          <nav className="header-nav">
            <a href="#home">Головна</a>
            <a href="#about">Про нас</a>
            <a href="#services">Послуги</a>
            <a href="#portfolio">Портфоліо</a>
            <a href="#blog">Блог</a>
            <a href="#contact">Контакти</a>
          </nav>
          <div className="header-right">
            <button className="btn login">Login</button>
            <button className="btn signup">Sign Up</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileNav;
