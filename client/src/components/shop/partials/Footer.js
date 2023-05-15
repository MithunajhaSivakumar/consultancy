import React, { Fragment } from "react";
import moment from "moment";

import "./Footer.css";
import logo from "../../../asset/logo.jpeg";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer_row">
          <div className="footer_col">
            <img className="footer_logo" src={logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada lacus quis eros lobortis, sit amet bibendum dui
              facilisis. Nunc malesuada, sapien in malesuada vestibulum, dolor
              nisi ornare lectus, eu bibendum augue neque vitae erat. Integer
              blandit nisl vel turpis commodo consequat. Maecenas malesuada
              tellus vitae lobortis suscipit.
            </p>
          </div>
          <div className="footer_col">
            <h3>
              ChoChi Foods
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>221, Gandhiji Street, Kollampalayam,</p>
            <p>Erode - 638 002</p>
            <p>Tamil Nadu, India</p>
            <p>LLPIN: AAX-3301</p>
            <p className="email-id">abc@gmail.com</p>
            <p>73973 97779</p>
          </div>
          <div className="footer_col">
            <h3>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul className="footer_ul">
              <li className="footer_li">
                <a href="#abc">Home</a>
              </li>
              <li className="footer_li">
                <a href="#abc">About</a>
              </li>
              <li className="footer_li">
                <a href="#abc">Benefits</a>
              </li>
              <li className="footer_li">
                <a href="#abc">Shop</a>
              </li>
              <li className="footer_li">
                <a href="#abc">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h3>
              FeedBack
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <form className="footer_form">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Enter your email id" required />
              <button type="submit">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
            <div className="footer_social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
        <hr />
        <p className="footer_copyright">
          ChoChi LTD © Copyright {moment().format("YYYY")}
        </p>
      </footer>
    </>
  );
}

export default Footer;
