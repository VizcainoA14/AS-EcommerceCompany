import React from "react";
import imgAboutSection1 from "../assets/img/imgAboutSection1.png";
import "./About.css";
import Applelogo from "../assets/img/Applelogo.png";
import hplogo from "../assets/img/hplogo.png";
import ztechlogo from "../assets/img/ztechlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SoundMastersLogo from "../assets/img/SoundMastersLogo.png";
import {
  faTruck,
  faExchangeAlt,
  faPercent,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <div className="about">
      <section className="__div-section-1">
        <div className="container-about-section-1">
          <h2>About Us</h2>
          <p>
            {/*
          Dear customers, It is a pleasure to introduce you to our electronic
          products sales company. In our online store, we offer a wide variety
          of high-quality electronic products, from mobile phones to smart TVs
          and audio devices. At our company, we strive to offer the highest
          quality products at competitive prices. We ensure that our products
          are from well-known brands and proven quality, so that our customers
          can be sure that they are purchasing reliable and long-lasting
          products. Additionally, our customer service team is always available
          to help our customers with any questions or issues they may have. We
          are proud to offer exceptional customer service and are committed to
          ensuring our customers' satisfaction. Sincerely, The E-Commerce
          Company Team*/}
            Dear customers, It is a pleasure to introduce you to our electronic
            products sales company. In our online store, we offer a wide variety
            of high-quality electronic products, from mobile phones to smart TVs
            and audio devices
          </p>
        </div>
        <div className="">
          <img src={imgAboutSection1} alt="Computers" />
        </div>
      </section>
      <section className="__div-section-2">
        <div>
          <div>
            <p className="title-about">Our Services</p>
            <p className="flex-container-about-section-2-span-1">
              At our company, we strive to offer the highest quality products at
              competitive prices.
            </p>
          </div>
        </div>
        <div className="__div_section-2-father-about">
          <div className="transition-section-2-about shadow">
            <div className="__div_section-2-child-about">
              <div>
                <FontAwesomeIcon
                  icon={faTruck}
                  className="about-icons-section-2"
                />
              </div>
              <h2>Delivery Services</h2>
            </div>
          </div>
          <div className="transition-section-2-about shadow">
            <div className="__div_section-2-child-about">
              <div>
                <FontAwesomeIcon
                  icon={faExchangeAlt}
                  className="about-icons-section-2"
                />
              </div>
              <h2>Shipping & Return</h2>
            </div>
          </div>
          <div className="transition-section-2-about shadow">
            <div className="__div_section-2-child-about">
              <div>
                <FontAwesomeIcon
                  icon={faPercent}
                  className="about-icons-section-2"
                />
              </div>
              <h2>Promotion</h2>
            </div>
          </div>
          <div className="transition-section-2-about shadow">
            <div className="__div_section-2-child-about">
              <div>
                <FontAwesomeIcon
                  icon={faUser}
                  className="about-icons-section-2"
                />
              </div>
              <h2>24 Hours Service</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="__div-section-3">
        <div className="__about--div-section-3-child">
          <div className="__about--div-section-3-child-inner">
            <p className="title-about">Our Brands</p>
            <p>
              We offer the best brands on the market so that you have the best
              quality of products 
            </p>
          </div>
          <div className="__about--div--section-3-child-inner-div ">
            <div className="__about--div--section-3-child-inner-div-img-1">
              <img src={hplogo} alt="Hp logo" />
            </div>
            <div className="__about--div--section-3-child-inner-div-img-2">
              <img src={Applelogo} alt="Apple logo" />
            </div>
            <div className="__about--div--section-3-child-inner-div-img-3">
              <img src={ztechlogo} alt="ztech-logo" />
            </div>
            <div className="__about--div--section-3-child-inner-div-img-4">
              <img src={SoundMastersLogo} alt="SoundMastersLogo" />
            </div>
          </div>
        </div>
      </section>
      <section className="__div-section-4"></section>
    </div>
  );
};

export default About;
