import React, { useEffect, useState } from "react";
import "./BuyProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";

export const Buy = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [products, setProducts] = useState([]);

  const get_product = async (id) => {
    try {
      const response = await fetch(
        `https://backend-ecommerce-api-fcrd.onrender.com/GET_PRODUCT/?id_product=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    get_product(id);
  }, []);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="main-content-buy-product">
      <section className="section-1-buy-product">
        {products.map((products) => (
          <div className="section-buy-product-div">
            <div className="section-buy-product-div-specification-content-1">
              <div className="buy-product-main-img-container">
                <img src={products.image_1} alt="main-img-example" />
              </div>
            </div>
            <div className="section-buy-product-div-specification-content-2">
              <h2 className="buy-product-name">{products.name_product}</h2>
              <h3 className="buy-product-price">${products.price}</h3>
              <div className="buy-product-stars">
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
              <span>
                <b>Brand: </b>
                {products.brand}
              </span>
              <span>
                <b>Category: </b>
                {products.category}
              </span>
              <span className="bold-text span-buy-product-content-2">
                Description:
              </span>{" "}
              <p className="paragraph-buy-product-content-2">
                {products.description}
              </p>
              
              <span htmlFor="quantity" className="bold-text span-buy-product-content-2 ">
                  Quantity: 
              </span>
              <select id="quantity" value={quantity} onChange={handleQuantityChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
              
              <form className="form-buy-product">
                <button className="buy-product-submit-button" type="submit">
                  Buy
                </button>
                <button className="buy-product-submit-button" type="submit">
                  Add To Cart
                </button>
              </form>
            </div>
          </div>
        ))}
      </section>
      {/**<section className="section-2-buy-product">Esta es la sección 2</section>  */}
    </div>
  );
};

export default Buy;
