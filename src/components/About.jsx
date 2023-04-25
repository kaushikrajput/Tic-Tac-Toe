import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="text-section">
              <h1 className="about-head">Welcome to our company</h1>
              <p className="small-heading">
                Lorem ipsum dolor sit hsja sajkhd .
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                alias aliquid ratione expedita perferendis rerum praesentium
                maxime in, atque doloribus repellat dolore perspiciatis libero
                reiciendis non enim magnam, quaerat facere eveniet assumenda
                
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                numquam praesentium pariatur asperiores expedita, temporibus
                odio nisi, explicabo voluptatibus, inventore cupiditate ullam
                minima tempore corporis molestiae dignissimos officiis deserunt
                velit.
              </p>
              <button className="button">know more</button>
            </div>
          </div>
            <div className="col-md-5">
              <div className="images-section">
                <img src="assets/img1.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
