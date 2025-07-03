import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const RiderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const rider = location.state?.rider;

  const goBack = () => navigate(-1);

  const dummyOrders = [
    { orderId: "O101", customerName: "Zain Ahmed", phone: "03012345678" },
    { orderId: "O102", customerName: "Sana Malik", phone: "03111234567" },
    { orderId: "O103", customerName: "Usman Rafiq", phone: "03221234567" },
    { orderId: "O104", customerName: "Areeba Shah", phone: "03331234567" },
  ];

  if (!rider) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p style={{ color: "red" }}>No rider data found.</p>
      </div>
    );
  }

  return (
    <div>
      <style>{`
        .rider-details-container {
          padding: 20px;
          background-color: #f9f9f9;
        }

        .back-icon {
          font-size: 20px;
          cursor: pointer;
          margin-bottom: 10px;
        }

        .main-heading {
          text-align: center;
          font-size: 26px;
          font-weight: bold;
          color: #2c7b34;
          margin-bottom: 30px;
        }

        .card {
          background: #ffffff;
          border: 3px solid #2c7b34;
          border-radius: 12px;
          padding: 24px;
          width: 90%;
          max-width: 480px;
          margin: 0 auto 40px auto;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: scale(1.02);
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.15);
        }

        .card-heading {
          font-size: 20px;
          color: #2c7b34;
          font-weight: bold;
          margin-bottom: 20px;
          border-bottom: 1px solid #2c7b34;
          padding-bottom: 10px;
          text-align: center;
        }

        .info-row {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
          text-align: center;
          flex-wrap: wrap;
        }

        .info-label {
          font-weight: bold;
          color: #444;
          margin-right: 6px;
        }

        .info-value {
          color: #222;
        }

        .order-history-heading {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          color: #2c7b34;
          margin: 40px 0 20px;
        }

        .order-table {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          background: #fff;
          border-collapse: collapse;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .order-table th,
        .order-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        .view-link {
          font-size: 13px;
          color: #2c7b34;
          text-decoration: underline;
          cursor: pointer;
        }

        @media screen and (max-width: 768px) {
          .card {
            padding: 16px;
          }

          .card-heading {
            font-size: 18px;
          }

          .info-row {
            flex-direction: column;
            align-items: center;
          }

          .info-label {
            margin: 0;
            margin-bottom: 4px;
          }

          .order-table,
          .order-table thead,
          .order-table tbody,
          .order-table th,
          .order-table td,
          .order-table tr {
            display: block;
            width: 100%;
          }

          .order-table thead {
            display: none;
          }

          .order-table tr {
            margin-bottom: 15px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
          }

          .order-table td {
            text-align: left;
            padding: 12px 16px;
            padding-left: 130px;
            position: relative;
            border-bottom: 1px solid #eee;
          }

          .order-table td::before {
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
            box-sizing: border-box;
          }
        }
      `}</style>

      <div className="rider-details-container">
        <div onClick={goBack} className="back-icon">
          <FaArrowLeft />
        </div>

        <h2 className="main-heading">Rider Details</h2>

        <div className="card">
          <div className="card-heading">Personal Information</div>
          <div className="info-row">
            <span className="info-label">Rider ID:</span>
            <span className="info-value">{rider.id}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Name:</span>
            <span className="info-value">{rider.name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Phone:</span>
            <span className="info-value">{rider.phone}</span>
          </div>
          <div className="info-row">
            <span className="info-label">CNIC:</span>
            <span className="info-value">{rider.cnic}</span>
          </div>
        </div>

        {/* Order History Section */}
        <h2 className="order-history-heading">Order History</h2>

        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Customer Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order) => (
              <tr key={order.orderId}>
                <td data-label="Order ID">{order.orderId}</td>
                <td data-label="Customer Name">{order.customerName}</td>
                <td data-label="Customer Phone">{order.phone}</td>
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

export default RiderDetails;
