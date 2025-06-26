import React, { useState } from "react";

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

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Total Orders</h2>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <table style={styles.table}>
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
              <td>{order.id}</td>
              <td>{order.trackingId}</td>
              <td>{order.customerId}</td>
              <td>{order.name}</td>
              <td>{order.customerPhone}</td>
              <td>{order.customerEmail}</td>
              <td>{order.orderStatus}</td>
              <td>
                <span style={styles.viewLink}>View Details</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Unified styles matching `TotalUsers`
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
  table: {
    width: "100%",
    background: "#fff",
    borderCollapse: "collapse",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    overflow: "hidden"
  },
  viewLink: {
    fontSize: 12,
    color: "#2c7b34",
    textDecoration: "underline",
    cursor: "pointer"
  }
};

export default TotalOrder;
