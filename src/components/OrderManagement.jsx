import React, { useState } from "react";
import "./OrderManagement.css";

import { FaArrowLeft } from "react-icons/fa";

const allOrders = [
  { id: "O001", name: "Ali Khan", email: "ali@email.com", phone: "03001234567", status: "Pending", date: "2025-06-25" },
  { id: "O002", name: "Ayesha Iqbal", email: "ayesha@email.com", phone: "03001231234", status: "Ongoing", date: "2025-06-26" },
  { id: "O003", name: "Bilal Raza", email: "bilal@email.com", phone: "03221234567", status: "Completed", date: "2025-06-26" },
  { id: "O004", name: "Fatima Sheikh", email: "fatima@email.com", phone: "03111234567", status: "Cancelled", date: "2025-06-24" },
  { id: "O005", name: "Usman Javed", email: "usman@email.com", phone: "03451234567", status: "Completed", date: "2025-06-19" },
  { id: "O006", name: "Zara Noor", email: "zara@email.com", phone: "03331234567", status: "Pending", date: "2025-06-23" }
];

const getFilteredOrders = (type) => {
  const now = new Date();
  switch (type) {
    case "daily":
      return allOrders.filter(order => order.date === now.toISOString().slice(0, 10));
    case "weekly":
      return allOrders.filter(order => {
        const diff = (now - new Date(order.date)) / (1000 * 60 * 60 * 24);
        return diff <= 7;
      });
    case "monthly":
      return allOrders.filter(order => {
        const diff = (now - new Date(order.date)) / (1000 * 60 * 60 * 24);
        return diff <= 30;
      });
    case "pending":
    case "ongoing":
    case "completed":
    case "cancelled":
      return allOrders.filter(order => order.status.toLowerCase() === type);
    default:
      return allOrders;
  }
};

const OrderManagement = () => {
  const [activeTab, setActiveTab] = useState("total");

  const filteredOrders = {
    total: allOrders,
    daily: getFilteredOrders("daily"),
    weekly: getFilteredOrders("weekly"),
    monthly: getFilteredOrders("monthly"),
    pending: getFilteredOrders("pending"),
    ongoing: getFilteredOrders("ongoing"),
    completed: getFilteredOrders("completed"),
    cancelled: getFilteredOrders("cancelled"),
  };
    const goBackToDashboard = () => {
    // Replace with your actual Dashboard route if using React Router
    window.location.href = "/dashboard";
  };

  return (
    <div className="user-management-container">
       <div onClick={goBackToDashboard} className="back-icon">
                        <FaArrowLeft />
                      </div>
      <h2 className="page-heading">Order Management</h2>

      <div className="user-tabs">
        {Object.keys(filteredOrders).map((key) => (
          <button
            key={key}
            className={`user-tab ${activeTab === key ? "active" : ""}`}
            onClick={() => setActiveTab(key)}
          >
            {`${key.charAt(0).toUpperCase() + key.slice(1)} Orders (${filteredOrders[key].length})`}
          </button>
        ))}
      </div>

      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders[activeTab].map((order) => (
              <tr key={order.id}>
                <td data-label="Order ID">{order.id}</td>
                <td data-label="Name">{order.name}</td>
                <td data-label="Email">{order.email}</td>
                <td data-label="Phone">{order.phone}</td>
                <td data-label="Status">{order.status}</td>
                <td data-label="Date">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
