/* ----- Navbar.js ----- */
import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <p>JETZILABS</p>
      </div>
      <div className="navbar__middle"></div>
      <div className="navbar__user">
        <div className="navbar__user__container">
          <div className="navbar__user__container__icon">
            <img src="" alt="" />
          </div>
          <div className="navbar__user__container__text">
            <p>DXGIDRTYUHTT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
