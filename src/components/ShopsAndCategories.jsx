import React from "react";
import "./ShopsAndCategories.css";

const shops = [
  { id: 1, name: "Store A", location: "Peshawar Saddar", status: "Active" },
  { id: 2, name: "Store B", location: "Hayatabad", status: "Inactive" },
  { id: 3, name: "Pharmacy 1", location: "University Town", status: "Active" },
];

const categories = [
  { id: 1, name: "Fruits & Vegetables" },
  { id: 2, name: "Dairy & Eggs" },
  { id: 3, name: "Snacks" },
  { id: 4, name: "Cleaning Supplies" },
  { id: 5, name: "Baby Care" },
];

const subcategories = {
  "Fruits & Vegetables": ["Fresh Fruits", "Fresh Vegetables"],
  "Dairy & Eggs": ["Milk", "Cheese", "Butter"],
  Snacks: ["Chips", "Biscuits", "Chocolate"],
};

const ShopsAndCategories = () => {
  return (
    <div className="shops-categories">
      <h2>Shops & Categories</h2>

      <div className="section">
        <h3>All Shops</h3>
        <table>
          <thead>
            <tr>
              <th>Shop Name</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <tr key={shop.id}>
                <td>{shop.name}</td>
                <td>{shop.location}</td>
                <td>{shop.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h3>Categories</h3>
        <ul className="category-list">
          {categories.map((cat) => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Subcategories</h3>
        <div className="subcategory-blocks">
          {Object.entries(subcategories).map(([cat, subs]) => (
            <div key={cat} className="subcategory-group">
              <strong>{cat}</strong>
              <ul>
                {subs.map((sub, idx) => (
                  <li key={idx}>{sub}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopsAndCategories;
