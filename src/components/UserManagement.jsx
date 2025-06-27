import React, { useState } from "react";
import "./UserManagement.css";
import { FaArrowLeft } from "react-icons/fa";

const allUsers = [
  { id: "U001", name: "Ali Khan", email: "ali@email.com", phone: "03001234567", joined: "2024-06-01" },
  { id: "U002", name: "Ayesha Iqbal", email: "ayesha@email.com", phone: "03001231234", joined: "2025-06-22" },
  { id: "U003", name: "Bilal Raza", email: "bilal@email.com", phone: "03221234567", joined: "2025-06-25" },
  { id: "U004", name: "Fatima Sheikh", email: "fatima@email.com", phone: "03111234567", joined: "2025-06-23" },
  { id: "U005", name: "Usman Javed", email: "usman@email.com", phone: "03451234567", joined: "2025-06-10" },
  { id: "U006", name: "Zara Noor", email: "zara@email.com", phone: "03331234567", joined: "2025-06-17" },
];

const getFilteredUsers = (type) => {
  const now = new Date();
  switch (type) {
    case "new":
      return allUsers.filter(user => {
        const joined = new Date(user.joined);
        const diff = (now - joined) / (1000 * 60 * 60 * 24);
        return diff <= 7;
      });
    case "daily":
      return allUsers.slice(0, 2);
    case "weekly":
      return allUsers.slice(0, 4);
    case "monthly":
      return allUsers;
    default:
      return allUsers;
  }
};

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("");

  const filteredUsers = {
    total: allUsers,
    new: getFilteredUsers("new"),
    daily: getFilteredUsers("daily"),
    weekly: getFilteredUsers("weekly"),
    monthly: getFilteredUsers("monthly"),
  };

  const goBackToDashboard = () => {
    window.location.href = "/dashboard"; // Update if you're using React Router
  };

  const renderUsers = () => {
    if (!activeTab) return null;

    return (
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers[activeTab].map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.name}
                <br />
                <span className="view-link">View Details</span>
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="user-management-container">
      <div onClick={goBackToDashboard} className="back-icon">
        <FaArrowLeft />
      </div>

      <h2 className="page-heading">User Panel</h2>

      <div className="user-tabs">
        <button
          className={`user-tab ${activeTab === "total" ? "active" : ""}`}
          onClick={() => setActiveTab("total")}
        >
          Total Users
          <p className="summary-number">1430</p>
        </button>
        <button
          className={`user-tab ${activeTab === "new" ? "active" : ""}`}
          onClick={() => setActiveTab("new")}
        >
          New Users This Week
          <p className="summary-number">180</p>
        </button>
        <button
          className={`user-tab ${activeTab === "daily" ? "active" : ""}`}
          onClick={() => setActiveTab("daily")}
        >
          Daily Active Users
          <p className="summary-number">30</p>
        </button>
        <button
          className={`user-tab ${activeTab === "weekly" ? "active" : ""}`}
          onClick={() => setActiveTab("weekly")}
        >
          Weekly Active Users
          <p className="summary-number">130</p>
        </button>
        <button
          className={`user-tab ${activeTab === "monthly" ? "active" : ""}`}
          onClick={() => setActiveTab("monthly")}
        >
          Monthly Active Users
          <p className="summary-number">430</p>
        </button>
      </div>

      <div className="user-table-container">{renderUsers()}</div>
    </div>
  );
};

export default UserManagement;
