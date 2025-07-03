import React from "react";
import {
  FaUsers,
  FaShoppingCart,
  FaBoxOpen,
  FaExclamationCircle,
  FaMotorcycle,
  FaLightbulb,
  FaComments,
  FaThList,
  FaBell,
  FaBars
} from "react-icons/fa";
import "./Dashboard.css";

const iconMap = {
  "Total Users": <FaUsers className="dashboard-icon" />,
  "Total Orders": <FaShoppingCart className="dashboard-icon" />,
  "Total Products": <FaBoxOpen className="dashboard-icon" />,
  "Complaints": <FaExclamationCircle className="dashboard-icon" />,
  "Riders": <FaMotorcycle className="dashboard-icon" />,
  "Product Suggestions": <FaLightbulb className="dashboard-icon" />,
  "Conversations": <FaComments className="dashboard-icon" />,
  "Product Categories": <FaThList className="dashboard-icon" />,
  "Notifications": <FaBell className="dashboard-icon" />
};

const DashboardCard = ({ title, value, onClick }) => (
  <div className="dashboard-card">
    <div className="card-header">
      <h4>{title}</h4>
      {iconMap[title]}
    </div>
    <p>{value}</p>
    <button className="view-btn" onClick={onClick}>View all</button>
  </div>
);

// ✅ Accept setShowSidebar as a prop
const Dashboard = ({ onNavigate, setShowSidebar }) => {
  const stats = {
    "Total Users": 1430,
    "Total Orders": 980,
    "Total Products": 234,
    "Complaints": 12,
    "Riders": 45,
    "Product Suggestions": 24,
    "Conversations": 8,
    "Product Categories": 15,
    "Notifications": 5
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        {/* ✅ Hamburger icon visible only on mobile */}
        <FaBars className="hamburger-icon" onClick={() => setShowSidebar(true)} />
      </div>
      <div className="dashboard-grid">
        {Object.entries(stats).map(([key, value]) => (
          <DashboardCard
            key={key}
            title={key}
            value={value}
            onClick={() => onNavigate(key)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
