import "./Home.css";
import Propaganda from "../assets/img/Propaganda.png";


export const Home = () => {
  // Tu lógica y JSX aquí
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
      <button className="shop-now">SHOP NOW</button>
      <section className="section">
        <div className="show-by-category">
          <h2 className="shop-by-category">Show By Category</h2>
        </div>
        <button className="product-category">Product Category</button>
        <button className="product-category">Product Category</button>
        <button className="product-category">Product Category</button>
      </section>
    </div>
  );
};

export default Home;
