import React, { useState } from "react";
import Modal from "react-modal";
import "./Additem.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

Modal.setAppElement("#root");

export const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="add-button" onClick={togglePopUp}>
        Add Product
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={togglePopUp}
        contentLabel="Example Modal"
        className="popup-content"
      >
        <form className="popup-form">
          <label className="popup-form-child">Name</label>
          <input className="popup-form-child" type="text" />

          <label className="popup-form-child">Price</label>
          <input className="popup-form-child" type="text" />
          <label className="popup-form-child">Brand</label>
          <input className="popup-form-child" type="text" />
          <label className="popup-form-child">Category</label>
          <input className="popup-form-child" type="text" />
          <label className="popup-form-child">Description</label>
          <input className="popup-form-child" type="text" />
          <label className="popup-form-child">Stock</label>
          <input className="popup-form-child" type="text"></input>
          <label className="popup-form-child">Image 1</label>
          <input className="popup-form-child" type="text" />
          <label className="popup-form-child">Image 2</label>
          <input className="popup-form-child" type="text" />
          <label className="popup-form-child">Image 3</label>
          <input className="popup-form-child" type="text" />
          <div className="center-items">
            <button
              className="popup-form-child button-form-add-item"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
        <div className="flex-container">
          <div>
            <button className="close" onClick={togglePopUp}>
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PopupForm;
