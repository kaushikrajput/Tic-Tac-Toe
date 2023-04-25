import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg1">
      <div className="container">
        <div className="navbar">
          <div className="heading">
            <h1>
              {" "}
              <i>Contruction</i>{" "}
            </h1>
            <p>Your Company TagLine Here</p>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Page</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/components">Components</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <div className="searchBox">
                  <input
                    type="text"
                    className="searchText"
                    placeholder="search"
                  />
                  <a href="#" className="searchBtn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
