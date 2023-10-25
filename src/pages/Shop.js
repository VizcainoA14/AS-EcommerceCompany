import React from "react";
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
      <div className="title-shop">Our Products!</div>
      <div className="grid-container">
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
              <Link to="/buy-product" className="link-shop">Headphones XYZ-300</Link>
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
        {Images.map((image, index) => (
          <div key={index} className="grid-item">
            <div className="card-image-container">
              <img src={shop_01} alt={`shop_${index + 1}`} />
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
        ))}
      </div>
      <button onClick={addItem}>Agregar Imagen</button>
      <button onClick={clearImages}>Borrar Imagenes Nuevas</button>
      <button onClick={clearLastItem}>Borrar ultima imagen</button>
    </main>
  );
};

export default Shop;
