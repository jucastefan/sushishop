import React from "react";
import img__9 from "../../images/img__9.png";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter__container">
      <div className="newsletter__grid">
        <div className="newsletter__row__1">
          <img src={img__9} alt="img__9" />
        </div>
        <div className="newsletter__row__2">
          <h4>Newsletter</h4>
          <h2>
            Subscribe For <br />
            Offer Updates
          </h2>
          <SubscribeButton />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
