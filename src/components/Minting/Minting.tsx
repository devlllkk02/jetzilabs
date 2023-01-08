/* ----- Minting.js ----- */
import React from "react";
import "./Minting.scss";

//Packages

//Components
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import PopupSuccess from "../Popups/PopupSuccess/PopupSuccess";
import PopupFailure from "../Popups/PopupFailure/PopupFailure";
import Navfooter from "../Navfooter/Navfooter";

function Minting() {
  return (
    <div className="minting">
      <div className="minting__navbar">
        <Navbar />
      </div>
      <div className="minting__body">
        <div className="minting__sidebar">
          <Sidebar page="autominting" />
        </div>
        <div className="minting__content">
          <div className="minting__content_s1">
            {/* Contract Address */}
            <div className="minting__content__item">
              <div className="minting__content__item__text">
                <p>Contract Address</p>
              </div>
              <div className="minting__content__item__control">
                <input type="text" name="" id="" />
              </div>
            </div>
            {/* Select Function & Max Mint Per Wallet */}
            <div className="minting__content__divider">
              <div className="minting__content__divider__left">
                {/* Select Function */}
                <div className="minting__content__item">
                  <div className="minting__content__item__text">
                    <p>Select Function</p>
                  </div>
                  <div className="minting__content__item__control">
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>
              <div className="minting__content__divider__right">
                {/* Max Mint Per Wallet */}
                <div className="minting__content__item">
                  <div className="minting__content__item__text">
                    <p>Max Mint Per Wallet</p>
                  </div>
                  <div className="minting__content__item__control">
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>
            </div>
            {/* NFT Price & Total Quantity */}
            <div className="minting__content__divider">
              <div className="minting__content__divider__left">
                {/* NFT price */}
                <div className="minting__content__item">
                  <div className="minting__content__item__text">
                    <p>NFT Price</p>
                  </div>
                  <div className="minting__content__item__control">
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>
              <div className="minting__content__divider__right">
                {/* Total Quantity */}
                <div className="minting__content__item">
                  <div className="minting__content__item__text">
                    <p>Total Quantity</p>
                  </div>
                  <div className="minting__content__item__control">
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>
            </div>
            {/* TODO: Gas Preset For Fund Distribution */}
            <div className="minting__content__divider">
              <div className="minting__content__divider__left">
                <div className="minting__content__item"></div>
              </div>
              <div className="minting__content__divider__right">
                <div className="minting__content__item">
                  <p
                    style={{
                      fontSize: "10px",
                      textAlign: "right",
                      color: "#333333",
                    }}
                  >
                    TODO : Radio Buttons
                  </p>
                </div>
              </div>
            </div>
            {/* NFT Transfer Address */}
            <div className="minting__content__item">
              <div className="minting__content__item__text">
                <p>NFT Transfer Address</p>
              </div>
              <div className="minting__content__item__control">
                <input type="text" name="" id="" />
              </div>
            </div>
            {/* Secondary Wallet Creation Gas */}
            <div className="minting__content__divider">
              <div className="minting__content__divider__left">
                <div className="minting__content__item">
                  <p
                    style={{
                      fontSize: "10px",
                      textAlign: "right",
                      color: "#333333",
                    }}
                  >
                    TODO : Radio Buttons
                  </p>
                </div>
              </div>
              <div className="minting__content__divider__right">
                <div className="minting__content__item">
                  <p
                    style={{
                      fontSize: "10px",
                      textAlign: "right",
                      color: "#333333",
                    }}
                  >
                    TODO : Radio Buttons
                  </p>
                </div>
              </div>
            </div>
            {/* Create Task */}
            <div className="minting__content__button">
              <button>Create Task</button>
            </div>
          </div>
          <div className="minting__content_s2"></div>
        </div>
      </div>
      <div className="minting__popup">
        {/* <PopupSuccess /> */}
        {/* <PopupFailure /> */}
      </div>
      <div className="minting__footer">
        <Navfooter page="autominting" />
      </div>
    </div>
  );
}

export default Minting;
