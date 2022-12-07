/* ----- Minting.js ----- */
import React from "react";
import "./Minting.scss";

//Packages

//Components
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import RadioButton from "../../UI/RadioButton/RadioButton";

function Minting() {
  return (
    <div className="mining">
      <div className="mining__navbar">
        <Navbar />
      </div>
      <div className="mining__body">
        <div className="mining__sidebar">
          <Sidebar page="autominting" />
        </div>
        <div className="mining__content">
          <div className="mining__content_s1">
            {/* Contract Address */}
            <div className="mining__content__item">
              <div className="mining__content__item__text">
                <p>Contract Address</p>
              </div>
              <div className="mining__content__item__control">
                <input type="text" name="" id="" />
              </div>
            </div>
            {/* Select Function & Max Mint Per Wallet */}
            <div className="mining__content__divider">
              <div className="mining__content__divider__left">
                {/* Select Function */}
                <div className="mining__content__item">
                  <div className="mining__content__item__text">
                    <p>Select Function</p>
                  </div>
                  <div className="mining__content__item__control">
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>
              <div className="mining__content__divider__right">
                {/* Max Mint Per Wallet */}
                <div className="mining__content__item">
                  <div className="mining__content__item__text">
                    <p>Max Mint Per Wallet</p>
                  </div>
                  <div className="mining__content__item__control">
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>
            </div>
            {/* NFT Price & Total Quantity */}
            <div className="mining__content__divider">
              <div className="mining__content__divider__left">
                {/* NFT price */}
                <div className="mining__content__item">
                  <div className="mining__content__item__text">
                    <p>NFT Price</p>
                  </div>
                  <div className="mining__content__item__control">
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>
              <div className="mining__content__divider__right">
                {/* Total Quantity */}
                <div className="mining__content__item">
                  <div className="mining__content__item__text">
                    <p>Total Quantity</p>
                  </div>
                  <div className="mining__content__item__control">
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>
            </div>
            {/* TODO: Gas Preset For Fund Distribution */}
            <div className="mining__content__divider">
              <div className="mining__content__divider__left">
                <div className="mining__content__item"></div>
              </div>
              <div className="mining__content__divider__right">
                <div className="mining__content__item">
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
            <div className="mining__content__item">
              <div className="mining__content__item__text">
                <p>NFT Transfer Address</p>
              </div>
              <div className="mining__content__item__control">
                <input type="text" name="" id="" />
              </div>
            </div>
            {/* Secondary Wallet Creation Gas */}
            <div className="mining__content__divider">
              <div className="mining__content__divider__left">
                <div className="mining__content__item">
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
              <div className="mining__content__divider__right">
                <div className="mining__content__item">
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
            <div className="mining__content__button">
              <button>Create Task</button>
            </div>
          </div>
          <div className="mining__content_s2"></div>
        </div>
      </div>
    </div>
  );
}

export default Minting;
