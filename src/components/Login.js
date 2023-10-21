import React from "react";
import './Header.css'; 
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();   

  return <button className="header-login-signup-button" onClick={() => loginWithRedirect()}>Log In</button>; 
};

export default LoginButton;
