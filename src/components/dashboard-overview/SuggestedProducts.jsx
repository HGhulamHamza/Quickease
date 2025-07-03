import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const allProducts = [
  { id: 1, name: "Wireless Earbuds", category: "Electronics", description: "Compact and high quality sound.", userId: "U001", date: "2025-07-03" },
  { id: 2, name: "Leather Wallet", category: "Accessories", description: "Durable and stylish for daily use.", userId: "U002", date: "2025-07-01" },
  { id: 3, name: "Smart Watch", category: "Gadgets", description: "Track your health and notifications.", userId: "U003", date: "2025-06-29" },
  { id: 4, name: "Portable Charger", category: "Gadgets", description: "Fast-charging power bank.", userId: "U004", date: "2025-06-25" },
  { id: 5, name: "Sunglasses", category: "Fashion", description: "Stylish UV protection.", userId: "U005", date: "2025-06-24" },
  { id: 6, name: "Bluetooth Speaker", category: "Electronics", description: "Wireless music experience.", userId: "U006", date: "2025-06-20" },
];

const filterByDate = (range) => {
  const now = new Date();
  return allProducts.filter(product => {
    const productDate = new Date(product.date);
    const diff = (now - productDate) / (1000 * 60 * 60 * 24);

    if (range === "daily") return diff <= 1;
    if (range === "weekly") return diff <= 7;
    if (range === "monthly") return diff <= 30;
    return true;
  });
};

const SuggestedProducts = () => {
  const [activeTab, setActiveTab] = useState("total");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs = [
    { id: "total", label: "All Suggestions" },
    { id: "daily", label: "Daily Suggestions" },
    { id: "weekly", label: "Weekly Suggestions" },
    { id: "monthly", label: "Monthly Suggestions" },
  ];

  const filtered = activeTab === "total" ? allProducts : filterByDate(activeTab);
    const goBackToDashboard = () => {
    // Replace with your actual Dashboard route if using React Router
    window.location.href = "/";
  };

  const styles = {
    container: {
      padding: 20,
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
    },
    title: {
      color: "#000",
      textAlign: "center",
      marginBottom: 20,
    },
    dropdownFilter: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      marginBottom: 30,
    },
    dropdownToggle: {
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      padding: "10px 20px",
      borderRadius: 8,
      cursor: "pointer",
      fontSize: 15,
      transition: "0.3s ease",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
    },
    dropdownMenu: {
      position: "absolute",
      top: "110%",
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
      width: "100%",
      maxWidth: 250,
    },
    dropdownItem: {
      padding: "10px 16px",
      cursor: "pointer",
      fontSize: 14,
      borderBottom: "1px solid #eee",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: 20,
    },
    card: {
      background: "#fff",
      padding: 16,
      borderRadius: 10,
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "scale(1.02)",
      boxShadow: "0 4px 10px rgba(44, 123, 52, 0.15)",
    },
    cardTitle: {
      marginBottom: 8,
      color: "#2c7b34",
      fontSize: 16,
    },
    category: {
      fontSize: 13,
      color: "#2c7b34",
      fontWeight: 500,
      marginBottom: 6,
    },
    description: {
      fontSize: 13,
      color: "#333",
      marginBottom: 6,
    },
    user: {
      fontSize: 12,
      color: "#666",
    },
    date: {
      fontSize: 12,
      color: "#666",
    },
  };

  return (
    <div style={styles.container}>
            <div onClick={goBackToDashboard} className="back-icon">
                        <FaArrowLeft />
                      </div>
      <h2 style={styles.title}>Suggested Products</h2>

      <div style={styles.dropdownFilter}>
        <button
          style={styles.dropdownToggle}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {tabs.find(t => t.id === activeTab)?.label}
        </button>
        {dropdownOpen && (
          <div style={styles.dropdownMenu}>
            {tabs.map(tab => (
              <div
                key={tab.id}
                style={styles.dropdownItem}
                onClick={() => {
                  setActiveTab(tab.id);
                  setDropdownOpen(false);
                }}
                onMouseOver={e => {
                  e.target.style.backgroundColor = "#eaf4ea";
                  e.target.style.color = "#2c7b34";
                }}
                onMouseOut={e => {
                  e.target.style.backgroundColor = "";
                  e.target.style.color = "";
                }}
              >
                {tab.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={styles.grid}>
        {filtered.map(product => (
          <div
            key={product.id}
            style={styles.card}
            onMouseOver={e => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <h4 style={styles.cardTitle}>{product.name}</h4>
            <p style={styles.category}>Category: {product.category}</p>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.user}>User ID: {product.userId}</p>
            <p style={styles.date}>
              {new Date(product.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;
