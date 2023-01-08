/* ----- PopupSuccess.js ----- */
import React from "react";
import "./PopupSuccess.scss";

function PopupSuccess() {
  return (
    <div className="popupSuccess">
      <div className="popupSuccess__container">
        <div className="popupSuccess__icon">
          <img
            src="./images/popup_icons/success-svgrepo-com.svg"
            alt=""
            // style={setStyles("config").iconStyles}
          />
        </div>
        <div className="popupSuccess__title">
          <p>Yoo!</p>
        </div>
        <div className="popupSuccess__message">
          <p>Looks like you are on the right path.</p>
        </div>
        <div className="popupSuccess__button">
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default PopupSuccess;
