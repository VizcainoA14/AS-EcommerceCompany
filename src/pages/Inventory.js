import React, { useEffect, useState } from "react";
import "./Inventory.css";
import { useFetcher } from "react-router-dom";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";

export const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const get_token = useAuth0().getIdTokenClaims();
  const [error, setError] = useState(null);

  const get_products = async () => {
    let accessToken = await get_token;
    get_token.then((result) => {
      setAccessToken(result.__raw);
    });
    const token = accessToken.__raw;

    setLoading(true);
    fetch("http://127.0.0.1:8000/GET_PRODUCT/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        Content_type: "application/json",
      },
    })
      .then((Response) => {
        if (!Response.ok) {
          throw new Error(`Network response was not OK`);
        }
        return Response.json();
      })
      .then((json) => setProducts(json))
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  const addproducts = () => {
    const newproducts = {
      id: products.length + 1,
      name: `products ${products.length + 1}`,
      price: "$10.000",
      brand: "JBL",
      category: "Computer",
      description: "Default",
      stock: 0,
    };
    setProducts([...products, newproducts]);
  };

  const removeproducts = async (id) => {
    const data = "";
    let accessToken = await get_token;
    get_token.then((result) => {
      setAccessToken(result.__raw);
    });

    const token = accessToken.__raw;
    fetch("http://127.0.0.1:8000/DELETE_PRODUCT/?id_product=" + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        Content_type: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        get_products();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    get_products();
  }, []);

  if (loading) return "Loading...";

  return (
    <main>
      <h1 className="title-inventory">INVENTORY</h1>
      <div className="grid-container-inventory">
        <button className="add-button" onClick={addproducts}>
          Add Product
        </button>
        <table className="table">
          <thead>
            <tr className="table-header">
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((products) => (
              <tr key={products.id_product} className="table-row">
                <td>{products.id_product}</td>
                <td>{products.name_product}</td>
                <td>{products.price}</td>
                <td>{products.brand}</td>
                <td>{products.category}</td>
                <td>{products.description}</td>
                <td>{products.stock}</td>
                <td>
                  <button
                    className="removeButton"
                    onClick={() => removeproducts(products.id_product)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Inventory;
