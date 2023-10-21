import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div>
      <section className="__div-section-1">
        <h2>About Us</h2>
        <p>
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
          Company Team
        </p>
      </section>
      <section className="__div-section-2">
        <div>
          <div>
            <h1>Our services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="__div_section-2-father-about">
          <div className=" shadow">
            <div>
              <i></i>
            </div>
            <h2>Delivery Services</h2>
          </div>
          <div className=" shadow">caja 2</div>
          <div className=" shadow">caja 3</div>
          <div className=" shadow">caja 4</div>
        </div>
      </section>
      <section className="__div-section-3"></section>
    </div>
  );
};

export default About;
