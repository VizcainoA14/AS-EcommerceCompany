import React, { useEffect } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import shop_01 from "../assets/img/shop_01.jpg";
import shop_02 from "../assets/img/shop_02.jpg";
import shop_03 from "../assets/img/shop_03.jpg";
import shop_04 from "../assets/img/shop_04.jpg";
import shop_05 from "../assets/img/shop_05.jpg";
import shop_06 from "../assets/img/shop_06.jpg";
import shop_07 from "../assets/img/shop_07.jpg";
import shop_08 from "../assets/img/shop_08.jpg";
import shop_09 from "../assets/img/shop_09.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Shop = () => {
  const [Images, setImages] = useState([]);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const get_products = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://backend-ecommerce-api-fcrd.onrender.com/GET_PRODUCT/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const json = await response.json();
      setProducts(json);
      console.log(products);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    get_products();
  }, []);


  return (
    <main className="main-content-shop">
      <h1 className="title-shop">Our Products!</h1>
      <div className="grid-container">
        {products.map((products, index) => (
          <div key={index} className="grid-item">
            <div className="card-image-container">
              <img src={products.image_1} alt={`shop_${index + 1}`} />
            </div>
            <div className="card-text-container">
              <Link to={`/buy-product/${products.id_product}`} className="link-shop">{products.name_product}</Link>
              <div className="card-text-container-sizes">
                <p>{products.brand}</p>
              </div>
              <div className="flex-container-star-shop">
                <div className="star">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="star">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="star">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="star">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="star">
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className="price-container-shop">
                <p>${products.price}</p>
              </div>
            </div>
          </div>
        ))}

      </div>{" "}
      {/* End Grid-Container */}
    </main>
  );
};

export default Shop;
