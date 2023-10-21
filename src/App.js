import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Shop from "./pages/Shop";
import "./App.css";
// Cambia la importación de Principal
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  // Defining the state of the user
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Header />
          {/* Las rutas muestran el contenido principal */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}


export default App;
