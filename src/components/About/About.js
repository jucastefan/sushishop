import React from "react";
import img__3 from "../../images/img__3.png";
import "./About.css";

const About = () => {
  return (
    <section className="about__container">
      <div className="grid__about">
        <div class="row__about__1">
          <img src={img__3} alt="img__3" className="img__3" />
        </div>
        <div class="row__about__2">
          <h1 className="about__heading__1">About US</h1>
          <h3 className="about__heading__2">
            We provide
            <br />
            Healthy Food
          </h3>
          <p className="about__paragraph">
            Food comes to us from our relatives, whether they have wings or
            roots. This is how we consider food, it also has a culture history
            that passes drom generation to generation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
