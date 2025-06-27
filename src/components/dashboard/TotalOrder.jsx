import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const TotalOrder = () => {
  const dummyOrders = [
    {
      id: "ORD001",
      trackingId: "TRK001",
      customerId: "C123",
      name: "Ali Khan",
      customerPhone: "03001234567",
      customerEmail: "customer1@gmail.com",
      orderStatus: "Shipped"
    },
    {
      id: "ORD002",
      trackingId: "TRK002",
      customerId: "C124",
      name: "Sara Iqbal",
      customerPhone: "03111234567",
      customerEmail: "customer2@gmail.com",
      orderStatus: "Processing"
    },
    {
      id: "ORD003",
      trackingId: "TRK003",
      customerId: "C125",
      name: "Usman Tariq",
      customerPhone: "03221234567",
      customerEmail: "usman@gmail.com",
      orderStatus: "Delivered"
    },
    {
      id: "ORD004",
      trackingId: "TRK004",
      customerId: "C126",
      name: "Hira Fatima",
      customerPhone: "03331234567",
      customerEmail: "hira@gmail.com",
      orderStatus: "Cancelled"
    },
    {
      id: "ORD005",
      trackingId: "TRK005",
      customerId: "C127",
      name: "Bilal Sheikh",
      customerPhone: "03441234567",
      customerEmail: "bilal@gmail.com",
      orderStatus: "Pending"
    },
    {
      id: "ORD006",
      trackingId: "TRK006",
      customerId: "C128",
      name: "Fatima Rizvi",
      customerPhone: "03551234567",
      customerEmail: "fatima@gmail.com",
      orderStatus: "Returned"
    }
  ];

  const [search, setSearch] = useState("");

  const filteredOrders = dummyOrders.filter(order =>
    Object.values(order).some(val =>
      val.toLowerCase().includes(search.toLowerCase())
    )
  );

  const goBackToDashboard = () => {
    // Replace with your actual Dashboard route if using React Router
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <style>
        {`
          .total-order-container {
            padding: 20px;
            background-color: #f8f9fa;
            position: relative;
          }

          .back-icon {
            color: #2c7b34;
            font-size: 20px;
            cursor: pointer;
            margin-bottom: 10px;
          }

          .total-order-heading {
            text-align: center;
            color: #2c7b34;
            margin-bottom: 20px;
          }

          .search-container {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 15px;
          }

          .search-input {
            padding: 8px 12px;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 14px;
            outline: none;
            width: 250px;
            transition: all 0.3s ease;
          }

          .orders-table {
            width: 100%;
            background: #fff;
            border-collapse: collapse;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }

          .orders-table th,
          .orders-table td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #eee;
          }

          .view-link {
            font-size: 12px;
            color: #2c7b34;
            text-decoration: underline;
            cursor: pointer;
          }

          @media screen and (max-width: 768px) {
            .orders-table,
            .orders-table thead,
            .orders-table tbody,
            .orders-table th,
            .orders-table td,
            .orders-table tr {
              display: block;
              width: 100%;
            }

            .orders-table thead {
              display: none;
            }

            .orders-table tr {
              margin-bottom: 15px;
              background: #fff;
              border-radius: 8px;
              box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
              overflow: hidden;
            }

            .orders-table td {
              text-align: left;
              padding: 12px 16px;
              padding-left: 130px;
              position: relative;
              border-bottom: 1px solid #eee;
              white-space: normal;
              word-wrap: break-word;
            }

            .orders-table td::before {
              content: attr(data-label);
              position: absolute;
              left: 0;
              top: 0;
              width: 120px;
              height: 100%;
              background-color: #2c7b34;
              color: white;
              padding: 12px;
              font-weight: bold;
              font-size: 13px;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              border-right: 1px solid #ddd;
              box-sizing: border-box;
            }
          }
        `}
      </style>

      <div className="total-order-container">
        {/* Back Arrow */}
        <div onClick={goBackToDashboard} className="back-icon">
          <FaArrowLeft />
        </div>

        <h2 className="total-order-heading">Total Orders</h2>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Tracking ID</th>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id}>
                <td data-label="Order ID">{order.id}</td>
                <td data-label="Tracking ID">{order.trackingId}</td>
                <td data-label="Customer ID">{order.customerId}</td>
                <td data-label="Name">{order.name}</td>
                <td data-label="Phone">{order.customerPhone}</td>
                <td data-label="Email">{order.customerEmail}</td>
                <td data-label="Status">{order.orderStatus}</td>
                <td data-label="Action">
                  <span className="view-link">View Details</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalOrder;
