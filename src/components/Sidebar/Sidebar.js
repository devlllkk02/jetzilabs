/* ----- Sidebar.js ----- */
import React from "react";
import "./Sidebar.scss";
import { colors } from "../../util/styles/Colors.js";

//Packages
import { Link } from "react-router-dom";

function Sidebar({ page }) {
  //Functions
  const setStyles = (current) => {
    if (page === current) {
      return {
        backgroundStyles: {
          backgroundColor: colors.greyDark,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
        colorStyles: { color: colors.blueRegular },
      };
    } else {
      return {
        backgroundStyles: { backgroundColor: colors.greyRegular },
        colorStyles: { color: colors.greyLight },
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0)",
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
          <div className="sidebar__item__text">
            <Link to="/tasks" style={{ textDecoration: "none" }}>
              <p style={setStyles("tasks").colorStyles}>Tasks</p>
            </Link>
          </div>
        </div>
        {/* Secondary Wallets */}
        <div
          className="sidebar__item"
          style={setStyles("secondarywallets").backgroundStyles}
        >
          <div className="sidebar__item__text">
            <Link to="/secondarywallets" style={{ textDecoration: "none" }}>
              <p style={setStyles("secondarywallets").colorStyles}>
                Secondary Wallets
              </p>
            </Link>
          </div>
        </div>
        {/* Stake */}
        <div
          className="sidebar__item"
          style={setStyles("stake").backgroundStyles}
        >
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
