import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { SignUpbutton } from "./signup";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import "./App.css";
import "./index.css";

function App() {
  // Definining the state of the user
  const { isAuthenticated } = useAuth0();

  // <header className="App-header"></header>
  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <div className="container-logout">
            <Profile className="profile" />
            <LogoutButton className="button" />
          </div>
        </>
      ) : (
        // Div className body which contains all of the content of the first (main) page
        <div className="body">
          <h1 className="main-title">Welcome to our page!</h1>
          <div className="container-login">
            <p className="title">Try this!</p>
            <LoginButton />
            <SignUpbutton />
            <p>Learn React</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
