import React from "react"
import "../index.css"
import { useAuth0 } from "@auth0/auth0-react"

export const SignUpbutton = () => {
    const { loginWithRedirect } = useAuth0(); 
    return < button className="button" onClick={() => loginWithRedirect({ authorizationParams:{ screen_hint: 'signup'}})}>Sign Up</button>
};

export default SignUpbutton;