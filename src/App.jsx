import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import SubPage from "./components/SubPage";
import UserManagement from "./components/UserManagement";
import OrderManagement from "./components/OrderManagement";
import ShopsAndCategories from "./components/ShopsAndCategories";
import "./App.css";
import { FaBars } from "react-icons/fa";
import TotalUsers from "./components/dashboard/TotalUsers";
import TotalOrder from "./components/dashboard/TotalOrder";


function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showSidebar, setShowSidebar] = useState(false);
  const [subPage, setSubPage] = useState(null);

  const handleNavigate = (title) => {
    setSubPage(title);
    setActiveTab("SubPage");
  };

  return (
    <div className="app-container">
      {/* Removed the old hamburger icon here */}

      <Sidebar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSubPage(null);
        }}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <div className="main-content">
        {activeTab === "Dashboard" && (
          <Dashboard onNavigate={handleNavigate} />
        )}
        {activeTab === "Users Panel" && <UserManagement />}
        {activeTab === "Order Management" && <OrderManagement />}
        {activeTab === "Shops and Categories" && <ShopsAndCategories />}
        {activeTab === "SubPage" &&
  (() => {
    switch (subPage) {
      case "Total Users":
        return <TotalUsers />;
        case "Total Orders":
          return <TotalOrder/>;
      default:
        return <SubPage title={subPage} />;
    }
  })()}

      </div>
    </div>
  );
}


export default App;
