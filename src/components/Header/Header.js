import React from "react";
import OrderButton from "../OrderButton/OrderButton";
import img__1 from "../../images/img__1.png";
import img__2 from "../../images/img__2.png";
import "./Header.css";

function Header() {
  return (
    <main className="header__container">
      <div class="main__grid">
        <div class="row__1">
          <h2 class="main__heading__1">Enjoy Delicous</h2>

          <h2 class="main__heading__2">
            <img src={img__2} alt="img__2" className="img__2" />
            Sushi Food
          </h2>
          <p class="main__paragraph">
            Enjoy a good dinner with the best <br />
            dishes in the restaurant and <br />
            improve your day.
          </p>
          <OrderButton />
        </div>
        <div class="row__2">
          <img src={img__1} alt="img__1" className="img__1" />
        </div>
      </div>
    </main>
  );
}

export default Header;
