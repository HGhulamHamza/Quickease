import React, { useState } from "react";
import { FaPlus, FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const categoriesWithSub = {
  "Fruits & Vegetables": ["Fresh Fruits", "Fresh Vegetables"],
  "Dairy & Eggs": ["Milk", "Cheese", "Butter"],
  Snacks: ["Chips", "Biscuits", "Chocolate"],
  "Cleaning Supplies": ["Detergent", "Toilet Cleaner"],
  "Baby Care": ["Diapers", "Baby Oil"],
};

const ShopsAndCategories = ({ setActiveTab, setSelectedCategory }) => {
  const [categorySearch, setCategorySearch] = useState("");
  const [subCategorySearch, setSubCategorySearch] = useState("");

  const filteredData = Object.entries(categoriesWithSub).filter(
    ([cat, subs]) => {
      const matchesCategory = categorySearch
        ? cat.toLowerCase().includes(categorySearch.toLowerCase())
        : true;

      const matchesSub = subCategorySearch
        ? subs.some((sub) =>
            sub.toLowerCase().includes(subCategorySearch.toLowerCase())
          )
        : true;

      return matchesCategory && matchesSub;
    }
  );

  const handleNavigate = (category) => {
    setSelectedCategory(category);
    setActiveTab("Products Manager");
  };
const goBackToDashboard = () => {
    
    window.location.href = "/";
  };
  return (
    <div className="main-container">
      <div onClick={goBackToDashboard} className="back-icon">
                <FaArrowLeft />
              </div>
      <style>{`
        .main-container {
          display: flex;
          min-height: 100vh;
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
        }

        .left-panel {
          width: 300px;
          padding: 20px;
          background-color: #ffffff;
          border-right: 2px solid #ddd;
        }

        .input-group {
          margin-bottom: 30px;
        }

        .input-group input {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        .add-link {
          display: flex;
          align-items: center;
          color: #2c7b34;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
          margin-top: 8px;
          text-decoration: underline;
          gap: 6px;
        }

        .right-panel {
          flex: 1;
          padding: 30px;
        }

        .category-block {
          margin-bottom: 10px;
          background: white;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .category-title {
          font-size: 16px;
          font-weight: bold;
          color: #2c7b34;
        }

        .subcategories {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 10px 0 20px 10px;
        }

        .sub-item {
          background: #fff;
          padding: 8px 14px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 13px;
        }

        @media screen and (max-width: 768px) {
          .main-container {
            flex-direction: column;
          }

          .left-panel {
            width: 100%;
            border-right: none;
            border-bottom: 2px solid #ddd;
          }

          .right-panel {
            padding: 20px;
          }
        }
      `}</style>

      <div className="left-panel">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search Category"
            value={categorySearch}
            onChange={(e) => setCategorySearch(e.target.value)}
          />
          <div className="add-link">
            <FaPlus />
            <span>Add Category</span>
          </div>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Search Sub Category"
            value={subCategorySearch}
            onChange={(e) => setSubCategorySearch(e.target.value)}
          />
          <div className="add-link">
            <FaPlus />
            <span>Add Sub Category</span>
          </div>
        </div>
      </div>

      <div className="right-panel">
        {filteredData.length === 0 ? (
          <p>No matching results found.</p>
        ) : (
          filteredData.map(([category, subs]) => (
            <div key={category}>
              <div className="category-block">
                <div className="category-title">{category}</div>
                <FaArrowRight
                  style={{ color: "#2c7b34", cursor: "pointer" }}
                  onClick={() => handleNavigate(category)}
                />
              </div>
              <div className="subcategories">
                {subs
                  .filter((sub) =>
                    subCategorySearch
                      ? sub
                          .toLowerCase()
                          .includes(subCategorySearch.toLowerCase())
                      : true
                  )
                  .map((sub, index) => (
                    <div key={index} className="sub-item">
                      {sub}
                    </div>
                  ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShopsAndCategories;
