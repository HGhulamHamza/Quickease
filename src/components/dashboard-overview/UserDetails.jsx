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

  const complaints = [
    {
      id: "CMP001",
      title: "Late Delivery",
      description: "The order was delivered two days late without any notice.",
    },
    {
      id: "CMP002",
      title: "Damaged Product",
      description: "The received item was broken and packaging was torn.",
    },
  ];

  const lists = [
    {
      id: "LIST001",
      name: "Wishlist - Electronics",
      description: "Saved favorite electronic items for later purchase.",
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        "https://images.unsplash.com/photo-1503602642458-232111445657",
      ],
    },
    {
      id: "LIST002",
      name: "Gift Ideas",
      description: "Curated items for family gifts.",
      images: [
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        "https://images.unsplash.com/photo-1571687949920-bcc907e50800",
        "https://images.unsplash.com/photo-1580717560384-b4c3b3fc197b",
      ],
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
          font-size: 24px;
          font-weight: bold;
          color: #2c7b34;
          margin-bottom: 25px;
        }

        .section-card {
          background: #DDDADA;
          border-radius: 12px;
          padding: 18px;
          margin: 20px auto;
          max-width: 600px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .section-title {
          font-size: 18px;
          font-weight: bold;
          color: #2c7b34;
          margin-bottom: 10px;
          text-align: center;
        }

        .sub-card {
          background-color:rgba(255, 255, 255, 0.45);
          border: 1px solid black;
          border-radius: 10px;
          padding: 12px;
          margin-bottom: 12px;
        }

        .sub-card.default-border {
          border-color: #2c7b34;
        }

        .card-heading {
          font-size: 16px;
          color: #2c7b34;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .info-row {
          margin: 4px 0;
          font-size: 14px;
        }

        .badge {
          display: inline-block;
          background-color: #2c7b34;
          color: white;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 8px;
          margin-bottom: 6px;
        }

        .image-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .list-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #2c7b34;
        }
      `}</style>

      <div className="user-details-container">
        <div onClick={goBack} className="back-icon">
          <FaArrowLeft />
        </div>

        <h2 className="main-heading">User Details</h2>

        {/* Personal Info */}
        <div className="section-card">
          <div className="section-title">Personal Information</div>
          <div className="info-row"><strong>User ID:</strong> {user.id}</div>
          <div className="info-row"><strong>Name:</strong> {user.name}</div>
          <div className="info-row"><strong>Email:</strong> {user.email}</div>
          <div className="info-row"><strong>Phone:</strong> {user.phone}</div>
        </div>

        {/* Addresses */}
        <div className="section-card">
          <div className="section-title">Addresses</div>
          {addresses.map((addr) => (
            <div key={addr.id} className={`sub-card ${addr.isDefault ? "default-border" : ""}`}>
              {addr.isDefault && <div className="badge">Default</div>}
              <div className="info-row"><strong>Street:</strong> {addr.street}</div>
              <div className="info-row"><strong>City:</strong> {addr.city}</div>
              <div className="info-row"><strong>Phone:</strong> {addr.phone}</div>
            </div>
          ))}
        </div>

        {/* Complaints */}
        <div className="section-card">
          <div className="section-title">Complaints</div>
          {complaints.map((comp) => (
            <div key={comp.id} className="sub-card">
              <div className="info-row"><strong>ID:</strong> {comp.id}</div>
              <div className="info-row"><strong>Title:</strong> {comp.title}</div>
              <div className="info-row"><strong>Description:</strong> {comp.description}</div>
            </div>
          ))}
        </div>

        {/* Lists */}
        <div className="section-card">
          <div className="section-title">Lists</div>
          {lists.map((list) => (
            <div key={list.id} className="sub-card">
              <div className="card-heading">{list.name}</div>
              <div className="info-row"><strong>Description:</strong> {list.description}</div>
              <div className="info-row"><strong>Items:</strong></div>
              <div className="image-row">
                {list.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`item-${idx}`} className="list-image" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
