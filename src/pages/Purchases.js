import React, { useEffect, useState } from "react";
import "./Inventory.css";
import { useFetcher } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PopupForm from "../components/AddItem";
import UpdateItem from "../components/UpdateItem";

export const Purchases = () => {
    const [purchases, setpurchases] = useState([]);
    const [loading, setLoading] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    const get_token = useAuth0().getIdTokenClaims();
    const [error, setError] = useState(null);
    const { getIdTokenClaims } = useAuth0();
    const [showEditForm, setShowEditForm] = useState();
    const [editProductDetails, seteditProductDetails] = useState();

    const get_purchases = async () => {
        try {
            let accessToken = await get_token;
            get_token.then((result) => {
                setAccessToken(result.__raw);
            });
            const token = accessToken.__raw;
            setLoading(true);
            const response = await fetch(
                "https://backend-ecommerce-api-fcrd.onrender.com/GET-PURCHASES/",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ` + token,
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            const json = await response.json();
            setpurchases(json);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const removepurchases = async (id) => {
        try {
            let accessToken = await get_token;
            get_token.then((result) => {
                setAccessToken(result.__raw);
            });

            const token = accessToken.__raw;
            await fetch(
                "https://backend-ecommerce-api-fcrd.onrender.com/DELETE_PRODUCT/?id_product=" +
                id,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            get_purchases();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const get_token = await getIdTokenClaims();
                get_purchases(get_token);
            } catch (error) {
                // Manejar errores aquí
                console.error("Error al obtener el token: ", error);
            }
        };

        fetchData();
    }, []);

    if (loading)
        return (
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );

    return (
        <main>
            <div className="grid-container-inventory">
                <h1 className="title-inventory">Purchases</h1>
                <table className="table">
                    <thead>
                        <tr className="table-header">
                            <th>ID Purchase</th>
                            <th>Client name</th>
                            <th>Date</th>
                            <th>Shipping address</th>
                            <th>Phone contact</th>  
                            <th>Total paid</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchases.map((purchases) => (
                            <tr key={purchases.id_purchase} className="table-row">
                                <td>{purchases.id_purchase}</td>
                                <td>{purchases.user_name}</td>
                                <td>{purchases.date_of_purchase}</td>
                                <td>{purchases.shipping_address}</td>
                                <td>{purchases.phone_contact}</td>
                                <td>{purchases.total_purchase}</td>
                                <td>
                                    <div className="buttons-inventory-order">
                                        <button
                                            className="removeButton"
                                            onClick={() => removepurchases(purchases.id_product)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Purchases;