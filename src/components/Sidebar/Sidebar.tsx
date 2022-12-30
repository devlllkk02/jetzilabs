/* ----- Sidebar.js ----- */
import React from "react";
import "./Sidebar.scss";
import { colors } from "../../util/styles/Colors.js";

//Packages
import { Link } from "react-router-dom";

function Sidebar({ page }: any) {
  //Functions
  const setStyles = (current: any) => {
    if (page === current) {
      return {
        backgroundStyles: {
          backgroundColor: colors.greyDark,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
        colorStyles: { color: colors.blueRegular },
        iconStyles: {
          filter:
            "invert(87%) sepia(32%) saturate(789%) hue-rotate(163deg) brightness(102%) contrast(106%)",
        },
      };
    } else {
      return {
        backgroundStyles: {
          backgroundColor: colors.greyRegular,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0)",
        },

        colorStyles: { color: colors.greyLight },
        iconStyles: {
          filter:
            "invert(55%) sepia(2%) saturate(1641%) hue-rotate(194deg)brightness(91%) contrast(90%)",
        },
      };
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        {/* Auto Minting Tool */}
        <div
          className="sidebar__item"
          style={setStyles("autominting").backgroundStyles}
        >
          <div className="sidebar__item__icon">
            <img
              src="./images/sidebar_icons/robot-svgrepo-com.svg"
              alt=""
              style={setStyles("autominting").iconStyles}
            />
          </div>
          <div className="sidebar__item__text">
            <Link to="/" style={{ textDecoration: "none" }}>
              <p style={setStyles("autominting").colorStyles}>
                Auto Minting Tool
              </p>
            </Link>
          </div>
        </div>
        {/* Tasks */}
        <div
          className="sidebar__item"
          style={setStyles("tasks").backgroundStyles}
        >
          <div className="sidebar__item__icon">
            <img
              src="./images/sidebar_icons/task-svgrepo-com.svg"
              alt=""
              style={setStyles("tasks").iconStyles}
            />
          </div>
          <div className="sidebar__item__text">
            <Link to="/tasks" style={{ textDecoration: "none" }}>
              <p style={setStyles("tasks").colorStyles}>Tasks</p>
            </Link>
          </div>
        </div>
        {/* Secondary Wallets */}
        <div
          className="sidebar__item"
          style={setStyles("wallets").backgroundStyles}
        >
          <div className="sidebar__item__icon">
            <img
              src="./images/sidebar_icons/wallet-money-cash-svgrepo-com.svg"
              alt=""
              style={setStyles("wallets").iconStyles}
            />
          </div>
          <div className="sidebar__item__text">
            <Link to="/wallets" style={{ textDecoration: "none" }}>
              <p style={setStyles("wallets").colorStyles}>Secondary Wallets</p>
            </Link>
          </div>
        </div>
        {/* Stake */}
        <div
          className="sidebar__item"
          style={setStyles("stake").backgroundStyles}
        >
          <div className="sidebar__item__icon">
            <img
              src="./images/sidebar_icons/triangle-svgrepo-com.svg"
              alt=""
              style={setStyles("stake").iconStyles}
            />
          </div>
          <div className="sidebar__item__text">
            <Link to="/stake" style={{ textDecoration: "none" }}>
              <p style={setStyles("stake").colorStyles}>Stake</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
