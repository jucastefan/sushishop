import React from "react";
import img__8 from "../../images/img__8.png";
import OrderButton from "../OrderButton/OrderButton";
import "./Recently.css";

function Recently() {
  return (
    <section className="recently__container">
      <div className="grid__recently">
        <div class="row__recently__1">
          <h1 className="recently__heading__1">Recently Added</h1>
          <h3 className="recently__heading__2">
            Sushi Crab
            <br />
            Fresh Sea Fruit
          </h3>
          <p className="recently__paragraph">
            Take a look at what's new. And do not deprive yourself of a good
            meal, enjoy and be happy
          </p>
          <OrderButton />
        </div>
        <div class="row__recently__2">
          <img src={img__8} alt="img__8" className="img__8" />
        </div>
      </div>
    </section>
  );
}

export default Recently;
