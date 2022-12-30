/* ----- Navbar.js ----- */
import React from "react";
import "./Navbar.scss";

//Pacakages
import { colors } from "../../util/styles/Colors";
import { Link } from "react-router-dom";

function Navbar({ page }: any) {
  //Functions
  const setStyles = (current: any) => {
    if (page === current) {
      return {
        iconStyles: {
          filter:
            "invert(87%) sepia(32%) saturate(789%) hue-rotate(163deg) brightness(102%) contrast(106%)",
        },
      };
    } else {
      return {
        iconStyles: {
          filter:
            "invert(55%) sepia(2%) saturate(1641%) hue-rotate(194deg)brightness(91%) contrast(90%)",
        },
      };
    }
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <p>JETZILABS</p>
      </div>
      <div className="navbar__middle"></div>
      {/* Notifications */}
      <div className="navbar__notifications">
        <Link to="/notifications">
          <img
            src="./images/sidebar_icons/bell-fill-svgrepo-com.svg"
            alt=""
            style={setStyles("notifications").iconStyles}
          />
          <div className="navbar__notifications__new"></div>
        </Link>
      </div>
      {/* User */}
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
