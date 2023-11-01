import React from "react";
import { Link } from "react-router-dom";
import iconImage from "../assets/img/iconImage.png";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  const [roles, setRoles] = useState([]);
  const [fetchData, setFetchData] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const get_token = useAuth0().getIdTokenClaims();

  useEffect(() => {
    if (isAuthenticated && !fetchData) {
      // Realizar la primera solicitud fetch para obtener los roles
      fetchRoles();
      setFetchData(true); // Establecer fetchData a true para evitar futuras solicitudes
    }
  }, [isAuthenticated, fetchData]);

  const fetchRoles = async () => {
    let accessToken = await get_token;
    get_token.then((result) => {
      setAccessToken(result.__raw);
    });
    const token = accessToken.__raw;

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ` + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const token_auth0 = await fetch(
      `https://backend-ecommerce-api-fcrd.onrender.com/GET_MANAGEMENT_TOKEN/`,
      requestOptions
    );
    const data_token = await token_auth0.json();

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ` + data_token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://dev-b6nqtl5cxl0okx61.us.auth0.com/api/v2/users/${user.sub}/roles`,
      requestOptions
    );
    const data = await response.json();

    if (Array.isArray(data)) {
      setRoles(data);

      let rolesStr = data.map((role) => role.name).join(", ");
      if (rolesStr === "") {
        rolesStr = "Client";
      }

      // Realizar la segunda solicitud fetch después de obtener los roles
      await fetch("https://backend-ecommerce-api-fcrd.onrender.com/ADD_USER/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.sub,
          user_name: user.name,
          email: user.email,
          role: rolesStr,
        }),
      });
    } else {
      console.error("Invalid data format:", data);
    }
  };

  return (
    <div className="header-container">
      {isAuthenticated ? (
        <>
          <nav className="nav-before-header">
            <div className="container-nav-before-header">
              <div className="faEnvelope">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <span className="text-light span-nav-before-header">
                info@company.com
              </span>

              <div className="faEnvelope">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <span className="text-light span-nav-before-header">
                01-8000-9955
              </span>  
            </div>
          </nav>
          <header className="header">
            <img className="logo-img" src={iconImage} alt="Icon" />
            <nav className="nav">
              <ul className="ul-list">
                <li className="header-li">
                  <Link className="link-header" to="/">
                    Home
                  </Link>
                </li>
                <li className="header-li">
                  <Link className="link-header" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="header-li">
                  <Link className="link-header" to="/about">
                    About us
                  </Link>
                </li>
                <li className="header-li">
                  <Link className="link-header" to="/inventory">
                    Inventory
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="input-search-container">
              <input
                className="input-search"
                type="text"
                placeholder="Search"
              />
              <div className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            <div className="__header-logout-container">
              <Profile />
              <LogoutButton />
            </div>
          </header>
        </>
      ) : (
        <>
          <header className="header">
            <img className="logo-img" src={iconImage} alt="Icon" />
            <nav className="nav">
              <ul className="ul-list">
                <li className="header-li">
                  <Link className="link-header" to="/">
                    Home
                  </Link>
                </li>
                <li className="header-li">
                  <Link className="link-header" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="header-li">
                  <Link className="link-header" to="/about">
                    About us
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="input-search-container">
              <input
                className="input-search"
                type="text"
                placeholder="Search"
              />
              <div className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            <div className="login-header-container">
              <LoginButton />
            </div>
          </header>
        </>
      )}
    </div>
  );
};

export default Header;
