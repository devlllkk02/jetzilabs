/* ----- Config.js ----- */
import React from "react";
import "./Config.scss";

//Packages

//Components
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Navfooter from "../Navfooter/Navfooter";

function Config() {
  return (
    <div className="config">
      <div className="config__navbar">
        <Navbar page="config" />
      </div>
      <div className="config__body">
        <div className="config__sidebar">
          <Sidebar page="config" />
        </div>
        <div className="config__content">
          {/* Mint 1 */}
          <div className="config__mint">
            <div className="config__mint__content__header">
              <p>Main Wallet</p>
            </div>
            <div className="config__mint__content__body">
              <div className="config__mint__content__body__left">
                <input type="text" name="" id="" />
                <input type="text" name="" id="" placeholder="Private Key" />
              </div>
              <div className="config__mint__content__body__right">
                <button>Transfer</button>
              </div>
            </div>
            <div className="config__mint__content__footer">
              <div className="config__mint__content__footer__icon">
                <div className="config__mint__content__footer__icon__container">
                  <p>ETH : 500</p>
                </div>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="config__button">
            <button>Create / Delete Master Wallet</button>
          </div>
          {/* Email */}
          <div className="config__email">
            <div className="config__email__content__body">
              <div className="config__email__content__body__left">
                <input type="text" name="" id="" placeholder="Email" />
              </div>
              <div className="config__email__content__body__right">
                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="config__footer">
        <Navfooter page="config" />
      </div>
    </div>
  );
}

export default Config;
