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
      const response = await fetch("http://127.0.0.1:8000/GET_PRODUCT/", {
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

  const addItem = () => {
    // Agregar nueva imagen
    const newImage = { shop_01 };
    setImages([...Images, newImage]);
  };

  const clearImages = () => {
    // Borrar todas las imagenes
    setImages([]);
  };

  const clearLastItem = () => {
    if (Images.length > 0) {
      setImages(Images.slice(0, Images.length - 1));
    }
  };

  return (
    <main className="main-content-shop">
      <h1>Our Products!</h1>
      <div className="grid-container">
        {products.map((products, index) => (
          <div key={index} className="grid-item">
            <div className="card-image-container">
              <img src={products.image_1} alt={`shop_${index + 1}`} />
            </div>
            <div className="card-text-container">
              <Link className="link-shop">{products.name_product}</Link>
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
        <div className="grid-item">
          <div>
            <div className="card-image-container">
              <img src={shop_01} alt="shop_01" />
            </div>
            <div className="card-text-container">
              <Link to="/buy-product" className="link-shop">
                Smartwatch Z-Connect
              </Link>
              <div className="card-text-container-sizes">
                <p>ZTech</p>
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
                <p>$149.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div>
            <div className="card-image-container">
              <img src={shop_02} alt="shop_01" />
            </div>
            <div className="card-text-container">
              <Link to="/buy-product" className="link-shop">
                Headphones XYZ-300
              </Link>
              <div className="card-text-container-sizes">
                <p>SoundMasters</p>
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
                <p>$79.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div>
            <div className="card-image-container">
              <img src={shop_03} alt="shop_01" />
            </div>
            <div className="card-text-container">
              <Link className="link-shop">Laptop HP Pavilion</Link>
              <div className="card-text-container-sizes">
                <p>HP</p>
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
                <p>$799.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div>
            <div className="card-image-container">
              <img src={shop_04} alt="shop_01" />
            </div>
            <div className="card-text-container">
              <Link className="link-shop">iPad mini 2021</Link>
              <div className="card-text-container-sizes">
                <p>Apple</p>
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
                <p>$589.20</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div>
            <div className="card-image-container">
              <img src={shop_05} alt="shop_01" />
            </div>
            <div className="card-text-container">
              <Link className="link-shop">SAMSUNG Odyssey ARK </Link>
              <div className="card-text-container-sizes">
                <p>Samsung</p>
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
                <p>$3300.63</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div>
            <div className="card-image-container">
              <img src={shop_06} alt="shop_01" />
            </div>
            <div className="card-text-container">
              <Link className="link-shop">iPhone 12 Pro Max 128GB</Link>
              <div className="card-text-container-sizes">
                <p>Apple</p>
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
                <p>$660.13</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div>
            <div className="card-image-container">
              <img src={shop_07} alt="shop_01" />
            </div>
            <div className="card-text-container">
              <Link className="link-shop">DualShock 4 PS4 Controller</Link>
              <div className="card-text-container-sizes">
                <p>Sony</p>
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
                <p>$18.16</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div>
            <div className="card-image-container">
              <img src={shop_08} alt="shop_01" />
            </div>
            <div className="card-text-container">
              <Link className="link-shop">Mouse Gamer T-Dagger</Link>
              <div className="card-text-container-sizes">
                <p>Lieutenant</p>
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
                <p>$20.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div>
            <div className="card-image-container">
              <img src={shop_09} alt="shop_01" />
            </div>
            <div className="card-text-container">
              <Link className="link-shop">JBL Partybox Encore</Link>
              <div className="card-text-container-sizes">
                <p>JBL</p>
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
                <p>$212.19</p>
              </div>
            </div>
          </div>
        </div>       

      </div> {/* End Grid-Container */}
    </main>
  );
};

export default Shop;
