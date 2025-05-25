import React from "react";
import { useState, useEffect } from "react";
import "./Header.scss";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import MobileNav from "./MobileNav";
import logo from "../../assets/img/logo.svg";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Логотип */}
          <Logo logo={logo} />
          {/* Навігація */}
          {width > 768 ? <HeaderNav /> : <MobileNav />}
          {/* Кнопки */}
        </div>
      </div>
    </header>
  );
};

export default Header;
