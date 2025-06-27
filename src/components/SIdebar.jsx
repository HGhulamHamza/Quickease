import React from "react";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaMotorcycle,
  FaCommentDots,
  FaStore,
  FaBoxOpen,
  FaChartLine,
  FaEnvelope,
  FaUsers,
  FaTimes,
} from "react-icons/fa";
import "./SIdebar.css";

const menuItems = [
  { label: "Dashboard", icon: <FaTachometerAlt /> },
  { label: "Order Management", icon: <FaShoppingCart /> },
  { label: "Riders Pannel", icon: <FaMotorcycle /> },
  { label: "Complaints and Feedback", icon: <FaCommentDots /> },
  { label: "Shops and Categories", icon: <FaStore /> },
  { label: "Products Manager", icon: <FaBoxOpen /> },
  { label: "Analytics and Behaviour", icon: <FaChartLine /> },
  { label: "Messages and Conversations", icon: <FaEnvelope /> },
  { label: "Users Panel", icon: <FaUsers /> },
];

const Sidebar = ({ activeTab, setActiveTab, showSidebar, setShowSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar ? "sidebar-mobile" : ""}`}>
      {/* Close button only for mobile */}
      <div className="mobile-close" onClick={() => setShowSidebar(false)}>
        <FaTimes />
      </div>
      <div className="logo">Quickease Admin</div><hr></hr>
      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={activeTab === item.label ? "active" : ""}
            onClick={() => {
              setActiveTab(item.label);
              setShowSidebar(false); // auto close on selection (mobile)
            }}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
