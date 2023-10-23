import React from "react";
import { Link } from "react-router-dom";
import iconImage from "../assets/img/iconImage.png";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  const [roles, setRoles] = useState([]);
  const [fetchData, setFetchData] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const get_token = useAuth0().getIdTokenClaims();
  get_token.then((result) => {
    setAccessToken(result.__raw);
  });
  const token = accessToken.__raw;

  useEffect(() => {
    if (isAuthenticated) {
      // Realizar la primera solicitud fetch para obtener los roles
      fetchRoles();
    }
  }, [isAuthenticated, fetchData]);

  const fetchRoles = async () => {
    let accessToken = get_token;
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
    try {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", `Bearer ` + token);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const token_auth0 = await fetch(
        `http://127.0.0.1:8000/GET_MANAGEMENT_TOKEN/`,
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
        await fetch("http://127.0.0.1:8000/ADD_USER/", {
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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="header-container">
      {isAuthenticated ? (
        <>
          <header className="header">
            <img className="icon-img" src={iconImage} alt="Icon" />
            <nav className="nav">
              <ul className="ul-list">
                <li className="header-li">
                  <Link to="/">Home</Link>
                </li>
                <li className="header-li">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="header-li">
                  <Link to="/about">About us</Link>
                </li>
                <li className="header-li">
                  <Link to="/inventory">Inventory</Link>
                </li>
              </ul>
            </nav>
            <div className="input-search-container">
              <input
                className="input-search"
                type="text"
                placeholder="Search"
              />
              <div className="icon-fa-search">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            <div className="__header-logout-container">
              <div className="__header_div-profile-component __header-logout-container-item">
                {" "}
                <Profile />
              </div>
              <div className="__header_div-logout-component __header-logout-container-item">
                <LogoutButton />
              </div>
      </div>
          </header>
        </>
      ) : (
        <>
          <header className="header">
            <img className="icon-img" src={iconImage} alt="Icon" />
            <nav className="nav">
              <ul className="ul-list">
                <li className="header-li">
                  <Link to="/">Home</Link>
                </li>
                <li className="header-li">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="header-li">
                  <Link to="/about">About us</Link>
                </li>
                <li className="header-li">
                  <Link to="/inventory">Inventory</Link>
                </li>
              </ul>
            </nav>
            <div className="input-search-container">
              <input
                className="input-search"
                type="text"
                placeholder="Search"
              />
              <div className="icon-fa-search">
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
