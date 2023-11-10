import "./Home.css";
import Propaganda from "../assets/img/Propaganda.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="__content-container-text">
          <div className="last-day-container">
            <img
              className="fire last-day-container-items"
              alt="fire"
              src="https://cdn.animaapp.com/projects/652ad6caa175714794fcef38/releases/652c52a4bf695d65ea08484f/img/image-10.png"
            />
            <p className="last-days last-day-container-items">Last Days</p>
            <img
              className="fire last-day-container-items"
              alt="fire"
              src="https://cdn.animaapp.com/projects/652ad6caa175714794fcef38/releases/652c52a4bf695d65ea08484f/img/image-10.png"
            />
          </div>
          <p className="dto">40% DTO</p>
          <p className="selected-products">Selected products</p>
        </div>
        <img className="publicity-img" src={Propaganda} alt="Publicidad"></img>
      </div>
      <Link to="/shop" className="shop-now">
        SHOP NOW
      </Link>
      <section className="section">
        <div className="show-by-category">
          <h2 className="shop-by-category">Show By Category</h2>
        </div>
        <div className="product-category-home-container">
          <Link to="/shop" className="product-category-home">
            Product Category
          </Link>
          <Link to="/shop" className="product-category-home">
            Product Category
          </Link>
          <Link to="/shop" className="product-category-home">
            Product Category
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
