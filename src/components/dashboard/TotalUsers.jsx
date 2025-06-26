import React, { useState } from "react";
// import { FaEdit, FaTrash, FaBan } from "react-icons/fa"; // ⛔️ Commented out for now

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

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Total Users</h2>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <table style={styles.table}>
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
              <td>{user.id}</td>
              <td>
                {user.name}
                <br />
                <span style={styles.viewLink}>View Details</span>
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td style={styles.actions}>
                <div style={styles.linkGroup}>
                  <span style={styles.actionLink}>Edit User</span>
                  <span style={styles.actionLink}>Suspend User</span>
                  <span style={styles.actionLink}>Delete User</span>
                </div>
                {/* Uncomment to restore icons:
                <FaEdit title="Edit" style={{ color: "#3498db", cursor: "pointer" }} />
                <FaTrash title="Delete" style={{ color: "#e74c3c", marginLeft: 10, cursor: "pointer" }} />
                <FaBan title="Suspend" style={{ color: "#f39c12", marginLeft: 10, cursor: "pointer" }} />
                */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Inline CSS
const styles = {
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa"
  },
  heading: {
    textAlign: "center",
    color: "#2c7b34",
    marginBottom: 20
  },
  searchContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 15
  },
  searchInput: {
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
    width: "250px",
    transition: "all 0.3s ease"
  },
  viewLink: {
    fontSize: 12,
    color: "#2c7b34",
    textDecoration: "underline",
    cursor: "pointer"
  },
  actionLink: {
    fontSize: 12,
    color: "#2c7b34",
    textDecoration: "underline",
    cursor: "pointer",
    display: "block",
    marginBottom: 4
  },
  linkGroup: {
    display: "flex",
    flexDirection: "column"
  },
  table: {
    width: "100%",
    background: "#fff",
    borderCollapse: "collapse",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    overflow: "hidden"
  },
  actions: {
    verticalAlign: "top"
  }
};

export default TotalUsers;
