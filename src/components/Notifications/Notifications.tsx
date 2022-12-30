/* ----- Notifications.js ----- */
import React from "react";
import "./Notifications.scss";

//Packages

//Components
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function Notifications() {
  return (
    <div className="notifications">
      <div className="notifications__navbar">
        <Navbar page="notifications" />
      </div>
      <div className="notifications__body">
        <div className="notifications__sidebar">
          <Sidebar page="notifications" />
        </div>
        <div className="notifications__content">
          {/* Notification 1 */}
          <div className="notifications__mint">
            <div className="notifications__mint__content__body">
              <div className="notifications__mint__content__body__left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  est ab atque omnis molestiae ullam dolore quae modi aperiam,
                  asperiores corrupti doloribus. Nemo a officiis odio, nobis
                  obcaecati aperiam id debitis iste non, qui similique dicta
                  itaque quis minus deserunt dolor aut, adipisci nesciunt unde
                  amet. Earum deserunt assumenda voluptas?
                </p>
              </div>
              <div className="notifications__mint__content__body__middle">
                <p>15 mins</p>
              </div>
              <div className="notifications__mint__content__body__right">
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

export default Notifications;
