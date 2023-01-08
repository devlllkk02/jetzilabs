/* ----- Wallets.js ----- */
import React from "react";
import "./Wallets.scss";

//Packages

//Components
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Navfooter from "../Navfooter/Navfooter";

function Wallets() {
  return (
    <div className="wallets">
      <div className="wallets__navbar">
        <Navbar />
      </div>
      <div className="wallets__body">
        <div className="wallets__sidebar">
          <Sidebar page="wallets" />
        </div>
        <div className="wallets__content">
          {/* Mint 1 */}
          <div className="wallets__mint">
            <div className="wallets__mint__content__header">
              <p>0x686c626E48bfC5DC98a30a9992897766fed4Abd3</p>
            </div>
            <div className="wallets__mint__content__body">
              <div className="wallets__mint__content__body__left">
                <input type="password" name="" id="" />
              </div>
              <div className="wallets__mint__content__body__right">
                <button>Transfer From Web3 Wallet</button>
              </div>
            </div>
            <div className="wallets__mint__content__footer">
              <div className="wallets__mint__content__footer__icon">
                <div className="wallets__mint__content__footer__icon__container">
                  <p>ETH : 500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wallets__footer">
        <Navfooter page="wallets" />
      </div>
    </div>
  );
}

export default Wallets;
