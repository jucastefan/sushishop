import React from "react";
import img__5 from "../../images/img__5.png";
import img__6 from "../../images/img__6.png";
import img__7 from "../../images/img__7.png";
import "./Popular.css";

function Popular() {
  return (
    <section className="popular__container">
      <div className="popular__title">
        <h3>The Best Food</h3>
        <h1>Popular Dishes</h1>
      </div>
      <div className="popular__grid">
        <div className="row__popular__1">
          <img src={img__5} alt="img__4" />
          <h4>Onigiri</h4>
          <h5>Japanese Dish</h5>
          <h6>$10.99</h6>
        </div>
        <div className="row__popular__2">
          <img src={img__6} alt="img__6" />
          <h4>Spring Rools</h4>
          <h5>Japanese Dish</h5>
          <h6>$10.99</h6>
        </div>
        <div className="row__popular__3">
          <img src={img__7} alt="img__7" />
          <h4>Winter Fish</h4>
          <h5>Japanese Dish</h5>
          <h6>$19.99</h6>
        </div>
      </div>
    </section>
  );
}

export default Popular;
