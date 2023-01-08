/* ----- Navfooter.js ----- */
import React from "react";
import "./Navfooter.scss";

//Packages
import { colors } from "../../util/styles/Colors";
import { Link } from "react-router-dom";

function Navfooter({ page }: any) {
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
          // backgroundColor: colors.greyRegular,
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
    <div className="navfooter ">
      <div className="navfooter__container">
        {/* Auto Minting Tool */}
        <div className="navfooter__item">
          <div className="navfooter__item__icon">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src="./images/sidebar_icons/robot-svgrepo-com.svg"
                alt=""
                style={setStyles("autominting").iconStyles}
              />
            </Link>
          </div>
        </div>
        {/* Tasks */}
        <div className="navfooter__item">
          <div className="navfooter__item__icon">
            <Link to="/tasks" style={{ textDecoration: "none" }}>
              <img
                src="./images/sidebar_icons/task-svgrepo-com.svg"
                alt=""
                style={setStyles("tasks").iconStyles}
              />
            </Link>
          </div>
        </div>
        {/* Secondary Wallets */}
        <div className="navfooter__item">
          <div className="navfooter__item__icon">
            <Link to="/wallets" style={{ textDecoration: "none" }}>
              <img
                src="./images/sidebar_icons/wallet-money-cash-svgrepo-com.svg"
                alt=""
                style={setStyles("wallets").iconStyles}
              />
            </Link>
          </div>
        </div>
        {/* Stake */}
        <div className="navfooter__item">
          <div className="navfooter__item__icon">
            <Link to="/stake" style={{ textDecoration: "none" }}>
              <img
                src="./images/sidebar_icons/triangle-svgrepo-com.svg"
                alt=""
                style={setStyles("stake").iconStyles}
              />
            </Link>
          </div>
        </div>
        {/* Config */}
        <div className="navfooter__item">
          <div className="navfooter__item__icon">
            <Link to="/config" style={{ textDecoration: "none" }}>
              <img
                src="./images/sidebar_icons/settings-svgrepo-com.svg"
                alt=""
                style={setStyles("config").iconStyles}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navfooter;
