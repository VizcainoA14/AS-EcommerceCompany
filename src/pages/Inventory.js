import React, { useState } from "react";
import "./Inventory.css";

export const Inventory = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
      price: "$10.000",
      brand: "JBL",
      category: "Computer",
      description: "Default",
      stock: 10,
    },
    {
      id: 2,
      name: "Item 2",
      price: "$10.000",
      brand: "JBL",
      category: "Computer",
      description: "Default",
      stock: 5,
    },
    {
      id: 3,
      name: "Item 3",
      price: "$10.000",
      brand: "JBL",
      category: "Computer",
      description: "Default",
      stock: 3,
    },
  ]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
      price: "$10.000",
      brand: "JBL",
      category: "Computer",
      description: "Default",
      stock: 0,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <main>
      <h1 className="title-inventory">INVENTORY</h1>
      <div className="grid-container">
        <button className="add-button" onClick={addItem}>
          Add Product
        </button>
        <table className="table">
          <thead>
            <tr className="table-header">
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="table-row">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.stock}</td>
                <td>
                  <button
                    className="removeButton"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Inventory;
