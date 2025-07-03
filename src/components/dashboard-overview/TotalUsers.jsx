import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const TotalUsers = () => {
  const dummyUsers = [
    { id: "U001", name: "Ali Khan", email: "ali@gmail.com", phone: "03001234567" },
    { id: "U002", name: "Sara Iqbal", email: "sara@gmail.com", phone: "03111234567" },
    { id: "U003", name: "Ahmed Raza", email: "ahmed@gmail.com", phone: "03221234567" },
    { id: "U004", name: "Zara Ahmed", email: "zara@gmail.com", phone: "03331234567" },
    { id: "U005", name: "Bilal Sheikh", email: "bilal@gmail.com", phone: "03441234567" },
    { id: "U006", name: "Hira Noor", email: "hira@gmail.com", phone: "03551234567" },
    { id: "U007", name: "Usman Ali", email: "usman@gmail.com", phone: "03661234567" },
    { id: "U008", name: "Fatima Rizvi", email: "fatima@gmail.com", phone: "03771234567" }
  ];

  const [search, setSearch] = useState("");

  const filteredUsers = dummyUsers.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  const goBackToDashboard = () => {
    // Replace with your actual Dashboard route if using React Router
    window.location.href = "/";
  };
  return (
    <div>
      <style>
        {`
          .total-users-container {
            padding: 20px;
            background-color: #f8f9fa;
          }

          .total-users-heading {
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

          .users-table {
            width: 100%;
            background: #fff;
            border-collapse: collapse;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }

          .users-table th,
          .users-table td {
          
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #eee;
          }
.users-table thead {
  background-color: #2C7B34;
}

.users-table th {
  color: white;
  font-weight: bold;
}

          .view-link,
          .action-link {
            font-size: 12px;
            color: #2c7b34;
            text-decoration: underline;
            cursor: pointer;
          }

          .link-group {
            display: flex;
            flex-direction: column;
          }

  @media screen and (max-width: 768px) {
  .users-table,
  .users-table thead,
  .users-table tbody,
  .users-table th,
  .users-table td,
  .users-table tr {
    display: block;
    width: 100%;
  }

  .users-table thead {
    display: none;
      
  }
  

  .users-table tr {
    margin-bottom: 15px;
    background:#2C7B34;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .users-table td {
    text-align: left;
    padding: 12px 16px;
    padding-left: 130px; /* enough space for label */
    position: relative;
    border-bottom: 1px solid #eee;
    white-space: normal;
    word-wrap: break-word;
  }

  .users-table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    top: 0;
    width: 120px;
    height: 100%;
    background-color: #2C7b34;
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

      <div className="total-users-container">
         <div onClick={goBackToDashboard} className="back-icon">
                  <FaArrowLeft />
                </div>
        
        <h2 className="total-users-heading">Total Users</h2>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <table className="users-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td data-label="User ID">{user.id}</td>
                <td data-label="Name">
                  {user.name}
                  <br />
                  <span className="view-link">View Details</span>
                </td>
                <td data-label="Email">{user.email}</td>
                <td data-label="Phone">{user.phone}</td>
                <td data-label="Action">
                  <div className="link-group">
                    <span className="action-link">Edit User</span>
                    <span className="action-link">Suspend User</span>
                    <span className="action-link">Delete User</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalUsers;
