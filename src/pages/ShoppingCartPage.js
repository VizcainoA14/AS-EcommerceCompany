import React, { useEffect } from "react";
import "./ShoppingCartPage.css";
import { useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useAuth0 } from "@auth0/auth0-react";

export const ShoppingCartFront = () => {
  const [Images, setImages] = useState([]);
  const [products, setProducts] = useState([]);
 const [amount, setAmount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { data, setData } = ShoppingCart();
  const [accessToken, setAccessToken] = useState("");
  const get_token = useAuth0().getIdTokenClaims();

  const GetShoppingCartProducts = async () => {
    try {
      let accessToken = await get_token;
      get_token.then((result) => {
        setAccessToken(result.__raw);
      });
        const token = accessToken.__raw;
      setLoading(true);
      const response = await fetch(
        "https://backend-ecommerce-api-fcrd.onrender.com/SEE-SHOOPING-CART/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ` + token,
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const json = await response.json();
      setProducts(json.list_product);
      setAmount(json.list_amount)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetShoppingCartProducts();
  }, []);

  return (
    <div className="shopping-cart-content">
      <main className="shopping-cart-main-content">
        {/* Main content*/}
        <span className="text-align-center">SOY EL MAIN</span>
        {products.map((products, index) => (
          <div key={index} className="shopping-cart-item">
            <div className="img-shopping-front-item-container">
              <img
                className="img-shopping-front-item"
                src={products.image_1}
                alt={`shop_${index + 1}`}
              />
            </div>
            <div className="description-container-shoppping-front">
              <span>{products.name_product} </span>
              <span>
                <b>Price: </b>${products.price}{" "}
              </span>
              <span>
                <b>Brand: </b> {products.brand}{" "}
              </span>
              <span>
                <b>Quantity: </b>
                    {amount[index]}
              </span>
            </div>
          </div>
        ))}
      </main>
      <aside className="shopping-cart-aside">
        {" "}
        {/*Secondary Content */}
        <h1 className="title-aside-shopping-front text-align-center">
          SOY EL ASIDE
        </h1>
        <h2 className="text-align-start">Total Buy:</h2>
      </aside>
    </div>
  );
};

export default ShoppingCartFront;
