import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const UserDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  const goBack = () => navigate(-1);

  const addresses = [
    {
      id: 1,
      street: "House 123, Street 45, G-11/3",
      city: "Islamabad",
      phone: user?.phone || "03001234567",
      isDefault: true,
    },
    {
      id: 2,
      street: "Flat 9-B, Block C, North Nazimabad",
      city: "Karachi",
      phone: "03123456789",
      isDefault: false,
    },
  ];

  if (!user) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p style={{ color: "red" }}>No user data found.</p>
      </div>
    );
  }

  return (
    <div>
      <style>{`
        .user-details-container {
          padding: 15px;
          background-color: #f5f5f5;
        }

        .back-icon {
          font-size: 18px;
          cursor: pointer;
          margin-bottom: 8px;
        }

        .main-heading {
          text-align: center;
          font-size: 22px;
          font-weight: bold;
          color: #2c7b34;
          margin-bottom: 25px;
        }

        .card {
          background: #ffffff;
          border: 2px solid #ccc;
          border-radius: 10px;
          padding: 14px;
          margin: 15px auto;
          width: 95%;
          max-width: 500px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
          position: relative;
          font-size: 14px;
        }

        .default-border {
          border-color: #2c7b34;
        }

        .card-heading {
          font-size: 16px;
          color: #2c7b34;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .info-row {
          margin: 5px 0;
          color: #333;
        }

        .badge {
          position: absolute;
          top: -10px;
          right: -10px;
          background-color: #2c7b34;
          color: #fff;
          padding: 4px 8px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 600;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
        }

        .section-title {
          text-align: center;
          font-size: 18px;
          color: #2c7b34;
          margin-top: 30px;
          margin-bottom: 10px;
          font-weight: bold;
        }
      `}</style>

      <div className="user-details-container">
        <div onClick={goBack} className="back-icon">
          <FaArrowLeft />
        </div>

        <h2 className="main-heading">User Details</h2>

        <div className="card default-border">
          <div className="card-heading">Personal Information</div>
          <div className="info-row"><strong>User ID:</strong> {user.id}</div>
          <div className="info-row"><strong>Name:</strong> {user.name}</div>
          <div className="info-row"><strong>Email:</strong> {user.email}</div>
          <div className="info-row"><strong>Phone:</strong> {user.phone}</div>
        </div>

        {/* Addresses Section */}
        <h2 className="section-title">Addresses</h2>

        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`card ${addr.isDefault ? "default-border" : ""}`}
          >
            {addr.isDefault && <div className="badge">Default Address</div>}
            <div className="card-heading">Address {addr.id}</div>
            <div className="info-row"><strong>Street:</strong> {addr.street}</div>
            <div className="info-row"><strong>City:</strong> {addr.city}</div>
            <div className="info-row"><strong>Phone:</strong> {addr.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
