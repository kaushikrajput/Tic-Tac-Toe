import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-begin">
          <div className="text-zone">
            <p className="p-text">We are Certified Engineers</p>
            <h1 className="main-heading">
              Contruction Services <br /> <span>Creative & Professional</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium aut laboriosam blanditiis esse. Neque, placeat
              laborum? Natus maiores exercitationem optio odio voluptates totam
              similique, quibusdam ducimus magni culpa at earum deleniti,
              aspernatur repellendus veritatis cumque nulla ad. Qui ab in cum
              distinctio ipsum numquam enim eveniet, iusto nostrum nihil vitae?
            </p>
          <button className="button">Know more</button>
          <button className="button">View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
