/* ----- Tasks.js ----- */
import React from "react";
import "./Tasks.scss";

//Packages

//Components
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function Tasks() {
  return (
    <div className="tasks">
      <div className="tasks__navbar">
        <Navbar />
      </div>
      <div className="tasks__body">
        <div className="tasks__sidebar">
          <Sidebar page="tasks" />
        </div>
        <div className="tasks__content">
          {/* Mint 1 */}
          <div className="tasks__mint">
            <div className="tasks__mint__content">
              <div className="tasks__mint__content__header">
                <div className="tasks__mint__content__header__topic">
                  <p>Mint</p>
                </div>
                <div className="tasks__mint__content__header__icon">
                  <div className="tasks__mint__content__header__icon__container">
                    <p>Selected Wallet</p>
                  </div>
                </div>
              </div>
              <div className="tasks__mint__content__body">
                <div className="tasks__mint__content__body__r1">
                  <div className="tasks__mint__content__body__r1__item1">
                    <p>Contract Address</p>
                    <p>0x686c626E48bfC5DC98a30a9992897766fed4Abd3</p>
                  </div>
                  <div className="tasks__mint__content__body__r1__item2">
                    <p>NFT Price</p>
                    <p>5000 ETH</p>
                  </div>
                  <div className="tasks__mint__content__body__r1__item3">
                    <p>Mint Amount</p>
                    <p>05/10</p>
                  </div>
                </div>
                <div className="tasks__mint__content__body__r2">
                  <div className="tasks__mint__content__body__r2__item1">
                    <p>Created Time</p>
                    <p>5d ago</p>
                  </div>
                  <div className="tasks__mint__content__body__r2__item2">
                    <p>NFT Transfer Address</p>
                    <p>0x686c626E48bfC5DC98a30a9992897766fed4Abd3</p>
                  </div>
                  <div className="tasks__mint__content__body__r2__item3">
                    <p>Gas Setting</p>
                    <p>Medium</p>
                  </div>
                </div>
              </div>
              <div className="tasks__mint__content__footer">
                <div className="tasks__mint__content__footer__icon">
                  <div className="tasks__mint__content__footer__icon__container">
                    <div></div>
                    <p>Active</p>
                  </div>
                </div>
                <div className="tasks__mint__content__footer__text">
                  <p>Amount 0/5</p>
                </div>
              </div>
            </div>
            <div className="tasks__mint__controls">
              <div className="tasks__mint__controls__top">
                <img
                  src="./images/sidebar_icons/pause-circle-solid-svgrepo-com.svg"
                  alt=""
                />
              </div>
              <div className="tasks__mint__controls__bottom">
                <img
                  src="./images/sidebar_icons/delete-svgrepo-com.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Mint 1 */}
          <div className="tasks__mint">
            <div className="tasks__mint__content">
              <div className="tasks__mint__content__header">
                <div className="tasks__mint__content__header__topic">
                  <p>Mint</p>
                </div>
                <div className="tasks__mint__content__header__icon">
                  <div className="tasks__mint__content__header__icon__container">
                    <p>Selected Wallet</p>
                  </div>
                </div>
              </div>
              <div className="tasks__mint__content__body">
                <div className="tasks__mint__content__body__r1">
                  <div className="tasks__mint__content__body__r1__item1">
                    <p>Contract Address</p>
                    <p>0x686c626E48bfC5DC98a30a9992897766fed4Abd3</p>
                  </div>
                  <div className="tasks__mint__content__body__r1__item2">
                    <p>NFT Price</p>
                    <p>5000 ETH</p>
                  </div>
                  <div className="tasks__mint__content__body__r1__item3">
                    <p>Mint Amount</p>
                    <p>05/10</p>
                  </div>
                </div>
                <div className="tasks__mint__content__body__r2">
                  <div className="tasks__mint__content__body__r2__item1">
                    <p>Created Time</p>
                    <p>5d ago</p>
                  </div>
                  <div className="tasks__mint__content__body__r2__item2">
                    <p>NFT Transfer Address</p>
                    <p>0x686c626E48bfC5DC98a30a9992897766fed4Abd3</p>
                  </div>
                  <div className="tasks__mint__content__body__r2__item3">
                    <p>Gas Setting</p>
                    <p>Medium</p>
                  </div>
                </div>
              </div>
              <div className="tasks__mint__content__footer">
                <div className="tasks__mint__content__footer__icon">
                  <div className="tasks__mint__content__footer__icon__container">
                    <div></div>
                    <p>Active</p>
                  </div>
                </div>
                <div className="tasks__mint__content__footer__text">
                  <p>Amount 0/5</p>
                </div>
              </div>
            </div>
            <div className="tasks__mint__controls">
              <div className="tasks__mint__controls__top">
                <img
                  src="./images/sidebar_icons/pause-circle-solid-svgrepo-com.svg"
                  alt=""
                />
              </div>
              <div className="tasks__mint__controls__bottom">
                <img
                  src="./images/sidebar_icons/delete-svgrepo-com.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Mint 1 */}
          <div className="tasks__mint">
            <div className="tasks__mint__content">
              <div className="tasks__mint__content__header">
                <div className="tasks__mint__content__header__topic">
                  <p>Mint</p>
                </div>
                <div className="tasks__mint__content__header__icon">
                  <div className="tasks__mint__content__header__icon__container">
                    <p>Selected Wallet</p>
                  </div>
                </div>
              </div>
              <div className="tasks__mint__content__body">
                <div className="tasks__mint__content__body__r1">
                  <div className="tasks__mint__content__body__r1__item1">
                    <p>Contract Address</p>
                    <p>0x686c626E48bfC5DC98a30a9992897766fed4Abd3</p>
                  </div>
                  <div className="tasks__mint__content__body__r1__item2">
                    <p>NFT Price</p>
                    <p>5000 ETH</p>
                  </div>
                  <div className="tasks__mint__content__body__r1__item3">
                    <p>Mint Amount</p>
                    <p>05/10</p>
                  </div>
                </div>
                <div className="tasks__mint__content__body__r2">
                  <div className="tasks__mint__content__body__r2__item1">
                    <p>Created Time</p>
                    <p>5d ago</p>
                  </div>
                  <div className="tasks__mint__content__body__r2__item2">
                    <p>NFT Transfer Address</p>
                    <p>0x686c626E48bfC5DC98a30a9992897766fed4Abd3</p>
                  </div>
                  <div className="tasks__mint__content__body__r2__item3">
                    <p>Gas Setting</p>
                    <p>Medium</p>
                  </div>
                </div>
              </div>
              <div className="tasks__mint__content__footer">
                <div className="tasks__mint__content__footer__icon">
                  <div className="tasks__mint__content__footer__icon__container">
                    <div></div>
                    <p>Active</p>
                  </div>
                </div>
                <div className="tasks__mint__content__footer__text">
                  <p>Amount 0/5</p>
                </div>
              </div>
            </div>
            <div className="tasks__mint__controls">
              <div className="tasks__mint__controls__top">
                <img
                  src="./images/sidebar_icons/pause-circle-solid-svgrepo-com.svg"
                  alt=""
                />
              </div>
              <div className="tasks__mint__controls__bottom">
                <img
                  src="./images/sidebar_icons/delete-svgrepo-com.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Mint 1 */}
          <div className="tasks__mint">
            <div className="tasks__mint__content">
              <div className="tasks__mint__content__header">
                <div className="tasks__mint__content__header__topic">
                  <p>Mint</p>
                </div>
                <div className="tasks__mint__content__header__icon">
                  <div className="tasks__mint__content__header__icon__container">
                    <p>Selected Wallet</p>
                  </div>
                </div>
              </div>
              <div className="tasks__mint__content__body">
                <div className="tasks__mint__content__body__r1">
                  <div className="tasks__mint__content__body__r1__item1">
                    <p>Contract Address</p>
                    <p>0x686c626E48bfC5DC98a30a9992897766fed4Abd3</p>
                  </div>
                  <div className="tasks__mint__content__body__r1__item2">
                    <p>NFT Price</p>
                    <p>5000 ETH</p>
                  </div>
                  <div className="tasks__mint__content__body__r1__item3">
                    <p>Mint Amount</p>
                    <p>05/10</p>
                  </div>
                </div>
                <div className="tasks__mint__content__body__r2">
                  <div className="tasks__mint__content__body__r2__item1">
                    <p>Created Time</p>
                    <p>5d ago</p>
                  </div>
                  <div className="tasks__mint__content__body__r2__item2">
                    <p>NFT Transfer Address</p>
                    <p>0x686c626E48bfC5DC98a30a9992897766fed4Abd3</p>
                  </div>
                  <div className="tasks__mint__content__body__r2__item3">
                    <p>Gas Setting</p>
                    <p>Medium</p>
                  </div>
                </div>
              </div>
              <div className="tasks__mint__content__footer">
                <div className="tasks__mint__content__footer__icon">
                  <div className="tasks__mint__content__footer__icon__container">
                    <div></div>
                    <p>Active</p>
                  </div>
                </div>
                <div className="tasks__mint__content__footer__text">
                  <p>Amount 0/5</p>
                </div>
              </div>
            </div>
            <div className="tasks__mint__controls">
              <div className="tasks__mint__controls__top">
                <img
                  src="./images/sidebar_icons/pause-circle-solid-svgrepo-com.svg"
                  alt=""
                />
              </div>
              <div className="tasks__mint__controls__bottom">
                <img
                  src="./images/sidebar_icons/delete-svgrepo-com.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Mint 1 */}
          <div className="tasks__mint">
            <div className="tasks__mint__content">
              <div className="tasks__mint__content__header">
                <div className="tasks__mint__content__header__topic">
                  <p>Mint</p>
                </div>
                <div className="tasks__mint__content__header__icon">
                  <div className="tasks__mint__content__header__icon__container">
                    <p>Selected Wallet</p>
                  </div>
                </div>
              </div>
              <div className="tasks__mint__content__body">
                <div className="tasks__mint__content__body__r1">
                  <div className="tasks__mint__content__body__r1__item1">
                    <p>Contract Address</p>
                    <p>0x686c626E48bfC5DC98a30a9992897766fed4Abd3</p>
                  </div>
                  <div className="tasks__mint__content__body__r1__item2">
                    <p>NFT Price</p>
                    <p>5000 ETH</p>
                  </div>
                  <div className="tasks__mint__content__body__r1__item3">
                    <p>Mint Amount</p>
                    <p>05/10</p>
                  </div>
                </div>
                <div className="tasks__mint__content__body__r2">
                  <div className="tasks__mint__content__body__r2__item1">
                    <p>Created Time</p>
                    <p>5d ago</p>
                  </div>
                  <div className="tasks__mint__content__body__r2__item2">
                    <p>NFT Transfer Address</p>
                    <p>0x686c626E48bfC5DC98a30a9992897766fed4Abd3</p>
                  </div>
                  <div className="tasks__mint__content__body__r2__item3">
                    <p>Gas Setting</p>
                    <p>Medium</p>
                  </div>
                </div>
              </div>
              <div className="tasks__mint__content__footer">
                <div className="tasks__mint__content__footer__icon">
                  <div className="tasks__mint__content__footer__icon__container">
                    <div></div>
                    <p>Active</p>
                  </div>
                </div>
                <div className="tasks__mint__content__footer__text">
                  <p>Amount 0/5</p>
                </div>
              </div>
            </div>
            <div className="tasks__mint__controls">
              <div className="tasks__mint__controls__top">
                <img
                  src="./images/sidebar_icons/pause-circle-solid-svgrepo-com.svg"
                  alt=""
                />
              </div>
              <div className="tasks__mint__controls__bottom">
                <img
                  src="./images/sidebar_icons/delete-svgrepo-com.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
