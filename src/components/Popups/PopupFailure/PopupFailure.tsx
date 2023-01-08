/* ----- PopupFailure.js ----- */
import React from "react";
import "./PopupFailure.scss";

function PopupFailure() {
  return (
    <div className="popupFailure">
      <div className="popupFailure__container">
        <div className="popupFailure__icon">
          <img
            src="./images/popup_icons/close-circle-svgrepo-com.svg"
            alt=""
            // style={setStyles("config").iconStyles}
          />
        </div>
        <div className="popupFailure__title">
          <p>Oops!</p>
        </div>
        <div className="popupFailure__message">
          <p>Something went wrong, on the way!</p>
        </div>
        <div className="popupFailure__button">
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default PopupFailure;
