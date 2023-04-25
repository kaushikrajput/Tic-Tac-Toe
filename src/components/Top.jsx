import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <div className="bg">
      <div className="container ">
        <div className="details">
          <div className="contact-details">
            <p>
              <i class="fa-solid fa-mobile"></i>1234 4372 4220
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>
               kaushikrajput0926@gmail.com
            </p>
            <p>
              <i class="fa-solid fa-clock"></i>Sat 9:00:19:00
            </p>
          </div>
          <div className="social-links">
            <ul>
              <li>
                <a href="https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2F" target="_blank">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/feed/" target="_blank">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
