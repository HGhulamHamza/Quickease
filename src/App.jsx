import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/dashboard/SIdebar";
import Dashboard from "./components/dashboard/Dashboard";
import UserManagement from "./components/dashboard/UserManagement";
import OrderManagement from "./components/dashboard/OrderManagement";
import ShopsAndCategories from "./components/dashboard/ShopsAndCategories";
import TotalUsers from "./components/dashboard-overview/TotalUsers";
import TotalOrder from "./components/dashboard-overview/TotalOrder";
import RidersList from "./components/dashboard/RidersList";
import RiderDetails from "./components/dashboard/RiderDetails";
import ProductsList from "./components/dashboard/ProductsList";
import ComplaintsFeedback from "./components/dashboard/ComplaintsFeedback";
import Conversations from "./components/dashboard/ConversationsList"
import Notifications from "./components/dashboard/Notifications"
import SuggestedProducts from "./components/dashboard-overview/SuggestedProducts";
import UserDetails from "./components/dashboard-overview/UserDetails";


import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showSidebar, setShowSidebar] = useState(false);
  const [subPage, setSubPage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(""); // ✅ added

  const handleNavigate = (title) => {
    setSubPage(title);
    setActiveTab("SubPage");
  };

  const Layout = () => (
    <div className="app-container">
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
          <Dashboard onNavigate={handleNavigate} setShowSidebar={setShowSidebar} />
        )}
        {activeTab === "Users Panel" && <UserManagement />}
        {activeTab === "Order Management" && <OrderManagement />}
        {activeTab === "Shops and Categories" && (
          <ShopsAndCategories
            setActiveTab={setActiveTab}
            setSelectedCategory={setSelectedCategory} // ✅ pass setter
          />
        )}
        {activeTab === "Riders Pannel" && <RidersList />}
        {activeTab === "Complaints and Feedback" && <ComplaintsFeedback />}
        {activeTab === "Products Manager" && (
          <ProductsList selectedCategory={selectedCategory} /> // ✅ pass selected
        )}
                {activeTab === "Messages and Conversations" && <Conversations />}
                    {activeTab === "Notifications" && <Notifications />}

        {activeTab === "SubPage" &&
          (() => {
            switch (subPage) {
              case "Total Users":
                return <TotalUsers />;
              case "Total Orders":
                return <TotalOrder />;
               case "Product Suggestions" :
                return <SuggestedProducts />;
                case "Total Products":
                  return <ProductsList />;
                 case "Riders":
                  return <RidersList/>; 
                  case "Complaints":
                    return <ComplaintsFeedback />;
                   case "Conversations":
                   return <Conversations />; 
                   case "Product Categories":
                    return <ShopsAndCategories />;
                   case "Notifications":
                    return <Notifications />; 
              default:
                return <div>Page Not Found</div>;
            }
          })()}
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/rider-details" element={<RiderDetails />} />
      <Route path="/user-details" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
