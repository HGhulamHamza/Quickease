import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const dummyRiders = [
  { id: "R001", name: "Ali Khan", phone: "03001234567", cnic: "35201-1234567-1" },
  { id: "R002", name: "Ayesha Iqbal", phone: "03111234567", cnic: "35201-7654321-2" },
  { id: "R003", name: "Bilal Raza", phone: "03221234567", cnic: "35201-2345678-3" },
  { id: "R004", name: "Fatima Sheikh", phone: "03331234567", cnic: "35201-8765432-4" },
];

const RidersList = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredRiders = dummyRiders.filter((rider) =>
    Object.values(rider).some((val) =>
      val.toLowerCase().includes(search.toLowerCase())
    )
  );


     const goBackToDashboard = () => {
    
    window.location.href = "/";
  };

  return (
    <div>
      <style>
        {`
          .rider-container {
            padding: 20px;
            background-color: #f8f9fa;
            position: relative;
          }

          .back-icon {
            
            font-size: 20px;
            cursor: pointer;
            margin-bottom: 10px;
          }

          .rider-heading {
            text-align: center;
            color: #2c7b34;
            margin-bottom: 20px;
          }

          .search-container {
            margin-bottom: 15px;
            text-align: right;
          }

          .search-input {
            padding: 8px 14px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 6px;
            outline: none;
            transition: border-color 0.3s ease;
            width: 260px;
          }

          .search-input:focus {
            border-color: #2c7b34;
          }

          .rider-table {
            width: 100%;
            background: #fff;
            border-collapse: collapse;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }

          .rider-table th,
          .rider-table td {
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
            .rider-table,
            .rider-table thead,
            .rider-table tbody,
            .rider-table th,
            .rider-table td,
            .rider-table tr {
              display: block;
              width: 100%;
            }

            .rider-table thead {
              display: none;
            }

            .rider-table tr {
              margin-bottom: 15px;
              background: #fff;
              border-radius: 8px;
              box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
              overflow: hidden;
            }

            .rider-table td {
              text-align: left;
              padding: 12px 16px;
              padding-left: 130px;
              position: relative;
              border-bottom: 1px solid #eee;
              white-space: normal;
              word-wrap: break-word;
            }

            .rider-table td::before {
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

      <div className="rider-container">
        <div onClick={goBackToDashboard} className="back-icon">
          <FaArrowLeft />
        </div>

        <h2 className="rider-heading">Rider Panel</h2>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search riders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <table className="rider-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>CNIC</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRiders.map((rider) => (
              <tr key={rider.id}>
                <td data-label="ID">{rider.id}</td>
                <td data-label="Name">{rider.name}</td>
                <td data-label="Phone">{rider.phone}</td>
                <td data-label="CNIC">{rider.cnic}</td>
                <td data-label="Action">
                  <span
                    className="view-link"
                    onClick={() => navigate("/rider-details", { state: { rider } })}
                  >
                    View Details
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RidersList;
