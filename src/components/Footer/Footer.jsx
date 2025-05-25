import React from "react";
import "./Footer.scss";
import logo from "./imgs/logo.svg";
import instagram from "./imgs/icons/instagram.svg";
import redit from "./imgs/icons/redit.svg";
import twitter from "./imgs/icons/twitter.svg";
import youtube from "./imgs/icons/youtube.svg";
import letter from "./imgs/icons/letter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          {/* Лівий блок */}
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo} alt="Logo" className="footer-logo" />
              <span>Nexcent</span>
            </div>
            <div className="footer-copy">
              <p>Copyright © 2020 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
            <div className="footer-socials">
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#">
                <img src={redit} alt="redit" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>

          {/* Правий блок */}
          <div className="footer-right">
            {/* Меню 1 */}
            <div className="footer-menu">
              <h4 className="footer-menu__title">Company</h4>
              <ul className="footer-menu__list">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Testomonials</a>
                </li>
              </ul>
            </div>

            {/* Меню 2 */}
            <div className="footer-menu">
              <h4 className="footer-menu__title">Support</h4>
              <ul className="footer-menu__list">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </div>

            {/* Форма */}
            <div className="footer-form">
              <h4 className="footer-form__title">Stay up to date</h4>
              <form>
                <div className="form-input__wrapper">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="footer-form__input"
                  />
                  <span>
                    <img src={letter} alt="" />
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
