import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="bg1">
      <div className="container">
        <div className="navbar">
          <div className="heading">
            <h1><i>Contruction</i> </h1>
            <p>Your Company TagLine Here</p>
          </div>
          <div className="nav-links">
              <ul>
                <li>
                  <a href="#">Home</a>
                  <a href="#">Page</a>
                  <a href="#">Blog</a>
                  <a href="#">Portfolio</a>
                  <a href="#">Components</a>
                  <a href="#">Contacts</a>
                  <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                </li>
              </ul>
          </div>
        </div>
      </div>
   </div>
  );
};

export default Navbar;
