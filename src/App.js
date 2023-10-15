import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Login";
import { SignUpbutton } from "./components/signup";
import { LogoutButton } from "./components/Logout";
import { Profile } from "./components/Profile";
import Home from "./pages/Home";
import "./App.css";
// Cambia la importación de Principal
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Inventory from "./pages/Inventory";

function App() {
  // Definining the state of the user
  const { isAuthenticated } = useAuth0();

  // <header className="App-header"></header>
  return (
    <div>
      <Header />
      {/* Las rutas muestran el contenido principal */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
        </Routes>
      </div>
      {isAuthenticated ? (
        <>
          {/* <div className="container-logout">
              <Profile className="profile" />
              <LogoutButton className="button" />
            </div> 
          </> */}
        </>
      ) : (
        11
        // Div className body which contains all of the content of the first (main) page
        /* <div className="body">
            <h1 className="main-title">Welcome to our page!</h1>
            <div className="container-login">
              <p className="title">Try this!</p>
              <LoginButton />
              <SignUpbutton />
              <p>Learn React</p>
            </div>
          </div>  */
      )}
      <Footer />
    </div>
  );
}

export default App;
