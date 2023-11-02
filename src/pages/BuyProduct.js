import React, { useEffect, useState } from "react";
import "./BuyProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import shop_02 from "../assets/img/shop_02.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";



export const Buy = () => {
  const { id } = useParams();
  const get_token = useAuth0().getIdTokenClaims();
  const [error, setError] = useState(null);
  const { getIdTokenClaims } = useAuth0();
  const [accessToken, setAccessToken] = useState("");


  const showproduct = async (id) => {
    try {
      let accessToken = await get_token;
      get_token.then((result) => {
        setAccessToken(result.__raw);
      });
      const token = accessToken.__raw;
      await fetch(`https://backend-ecommerce-api-fcrd.onrender.com/GET_PRODUCT/${id}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  // Resto de tu código...
  
  useEffect(() => {
    console.log(id);
    showproduct(id);
  }, []);
  







  
  return (
    <div className="main-content-buy-product">
      <section className="section-1-buy-product">
        <div className="section-buy-product-div">
          <div className="section-buy-product-div-specification-content-1">
            <h2>AQUI VA LA IMAGEN</h2>
            <div className="buy-product-main-img-container">
            <img src={shop_02} alt="main-img-example"/>
            </div>
          </div>
          <div className="section-buy-product-div-specification-content-2">
            <h2 className="buy-product-name">NOMBRE DEL PRODUCTO</h2>
            <h3 className="buy-product-price">$25.000</h3>
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
            <span className="bold-text span-buy-product-content-2">Description:</span> <p className="paragraph-buy-product-content-2">Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod temp
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.
            Donec condimentum elementum convallis. Nunc sed orci a diam ultrices
            aliquet interdum quis nulla.</p>
            <span className="bold-text span-buy-product-content-2 ">Available (Stock): 4{/* Here comes stock*/}</span>
            <form className="form-buy-product">
              <button className="buy-product-submit-button" type="submit">Buy</button>
              <button className="buy-product-submit-button" type="submit">Add To Cart</button>
            </form>
          </div>
        </div>
      </section>
      <section className="section-2-buy-product"></section>
    </div>
  );
};

export default Buy;
