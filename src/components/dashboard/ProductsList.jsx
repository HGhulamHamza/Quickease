import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // 👈 Adjust path if file is elsewhere

const ProductsManager = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    price: "",
    id: "",
    category: "",
  });

  const categorySelectRef = useRef(null);

  // ✅ Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const fetched = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetched.push({
            product_id: doc.id,
            product_title: data.title || "Untitled",
            product_price: data.price || "N/A",
            product_image: data.imageUrl || data.cached_url || "https://via.placeholder.com/150",
            quantity: data.quantity || 0,
            category: data.category || "Uncategorized",
          });
        });
        setProducts(fetched);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Preselect category and scroll to it
  useEffect(() => {
    if (selectedCategory) {
      setFilters((prev) => ({ ...prev, category: selectedCategory }));
      setTimeout(() => {
        categorySelectRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [selectedCategory]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const goBackToDashboard = () => {
    window.location.href = "/";
  };

  const filteredProducts = products.filter((product) => {
    const matchTitle = product.product_title.toLowerCase().includes(filters.title.toLowerCase());
    const matchPrice = filters.price === "" || product.product_price === filters.price;
    const matchId = product.product_id.toLowerCase().includes(filters.id.toLowerCase());
    const matchCategory = filters.category === "" || product.category === filters.category;
    return matchTitle && matchPrice && matchId && matchCategory;
  });

  return (
    <div className="main-wrapper">
      <div onClick={goBackToDashboard} className="back-iconn">
        <FaArrowLeft />
      </div>
      <h2 className="heading">Search Products</h2>

      <div className="filters">
        <input
          type="text"
          name="title"
          placeholder="Search by Title"
          value={filters.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Search by Price"
          value={filters.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="id"
          placeholder="Search by Product ID"
          value={filters.id}
          onChange={handleChange}
        />
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          ref={categorySelectRef}
        >
          <option value="">All Categories</option>
          <option value="Fruits & Vegetables">Fruits & Vegetables</option>
          <option value="Dairy & Eggs">Dairy & Eggs</option>
          <option value="Snacks">Snacks</option>
          <option value="Cleaning Supplies">Cleaning Supplies</option>
          <option value="Baby Care">Baby Care</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.product_id}>
            <img src={product.product_image} alt={product.product_title} />
            <div className="product-title">{product.product_title}</div>
            <div className="product-price">Price: Rs.{product.product_price}</div>
            <div className="product-price">Qty: {product.quantity}</div>
            <div className="action-buttons">
              <button>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .main-wrapper {
          padding: 40px 20px;
          background-color: #f9f9f9;
          min-height: 100vh;
          text-align: center;
        }

        .back-iconn {
          margin-left: -790px;
          cursor: pointer;
        }

        .heading {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 30px;
          color: #2c7b34;
        }

        .filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 40px;
        }

        .filters input,
        .filters select {
          width: 220px;
          padding: 10px 14px;
          border: 1px solid #ccc;
          border-radius: 8px;
          outline: none;
          font-size: 14px;
          text-align: center;
          background-color: #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }

        .products-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .product-card {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          padding: 14px;
          width: 240px;
          text-align: center;
        }

        .product-card img {
          width: 100%;
          height: 140px;
          object-fit: contain;
          margin-bottom: 10px;
        }

        .product-title {
          font-weight: bold;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .product-price {
          color: #555;
          margin-bottom: 5px;
          font-size: 13px;
        }

        .action-buttons {
          display: flex;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .action-buttons button {
          padding: 5px 10px;
          border: 2px solid #2c7b34;
          background-color: white;
          color: #2c7b34;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-buttons button:hover {
          background-color: #2c7b34;
          color: white;
        }

        @media screen and (max-width: 768px) {
          .filters {
            flex-direction: column;
            align-items: center;
          }

          .filters input,
          .filters select {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductsManager;
