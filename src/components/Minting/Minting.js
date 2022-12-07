/* ----- Minting.js ----- */
import React from "react";
import "./Minting.scss";

//Packages

//Components
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

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
        <div className="mining__content"></div>
      </div>
    </div>
  );
}

export default Minting;
