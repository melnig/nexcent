import React from "react";

const Logo = ({ logo }) => {
  return (
    <div className="header-brand">
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <span className="logo-text">Nexcent</span>
    </div>
  );
};

export default Logo;
