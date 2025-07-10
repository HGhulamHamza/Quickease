import React, { useState } from "react";
import "../dashboard/OrderManagement.css";

const allOrders = [
  {
    id: "O001",
    trackingId: "T001",
    customerId: "U001",
    name: "Ali Khan",
    phone: "03001234567",
    email: "ali@email.com",
    status: "Pending",
    date: "2025-06-25",
    amount: 2000,
    deliveryFee: 200,
    platformFee: 100,
    paymentMethod: "COD",
    shippingAddress: {
      addressLine1: "Street 1",
      addressLine2: "House 10",
      city: "Lahore",
      area: "Model Town",
    },
    products: ["Product A", "Product B"],
  },
  {
    id: "O002",
    trackingId: "T002",
    customerId: "U002",
    name: "Ayesha Iqbal",
    phone: "03001231234",
    email: "ayesha@email.com",
    status: "Ongoing",
    date: "2025-06-26",
    amount: 1500,
    deliveryFee: 150,
    platformFee: 80,
    paymentMethod: "Card",
    shippingAddress: {
      addressLine1: "Apt 12",
      addressLine2: "Main Road",
      city: "Karachi",
      area: "Clifton",
    },
    products: ["Product C"],
  },
  {
    id: "O003",
    trackingId: "T003",
    customerId: "U003",
    name: "Bilal Raza",
    phone: "03221234567",
    email: "bilal@email.com",
    status: "Completed",
    date: "2025-06-24",
    amount: 3000,
    deliveryFee: 250,
    platformFee: 120,
    paymentMethod: "Bank Transfer",
    shippingAddress: {
      addressLine1: "Street 5",
      addressLine2: "Block C",
      city: "Islamabad",
      area: "G-11",
    },
    products: ["Product D", "Product E", "Product F"],
  },
  {
    id: "O004",
    trackingId: "T004",
    customerId: "U004",
    name: "Fatima Sheikh",
    phone: "03111234567",
    email: "fatima@email.com",
    status: "Cancelled",
    date: "2025-06-25",
    amount: 500,
    deliveryFee: 100,
    platformFee: 50,
    paymentMethod: "COD",
    shippingAddress: {
      addressLine1: "Flat 8",
      addressLine2: "Phase 2",
      city: "Peshawar",
      area: "Hayatabad",
    },
    products: ["Product G"],
  },
  {
    id: "O005",
    trackingId: "T005",
    customerId: "U005",
    name: "Hassan Tariq",
    phone: "03451234567",
    email: "hassan@email.com",
    status: "Pending",
    date: "2025-06-20",
    amount: 1800,
    deliveryFee: 200,
    platformFee: 90,
    paymentMethod: "COD",
    shippingAddress: {
      addressLine1: "Street 22",
      addressLine2: "House 9A",
      city: "Multan",
      area: "Cantt",
    },
    products: ["Item A", "Item B", "Item C"],
  },
  {
    id: "O006",
    trackingId: "T006",
    customerId: "U006",
    name: "Marium Zafar",
    phone: "03061234567",
    email: "marium@email.com",
    status: "Completed",
    date: "2025-06-18",
    amount: 3200,
    deliveryFee: 250,
    platformFee: 100,
    paymentMethod: "Card",
    shippingAddress: {
      addressLine1: "Street 11",
      addressLine2: "Flat 2B",
      city: "Rawalpindi",
      area: "Saddar",
    },
    products: ["Item D"],
  },
  {
    id: "O007",
    trackingId: "T007",
    customerId: "U007",
    name: "Zain Shah",
    phone: "03131234567",
    email: "zain@email.com",
    status: "Ongoing",
    date: "2025-06-21",
    amount: 2400,
    deliveryFee: 180,
    platformFee: 85,
    paymentMethod: "Bank Transfer",
    shippingAddress: {
      addressLine1: "House 45",
      addressLine2: "Street 7",
      city: "Faisalabad",
      area: "People's Colony",
    },
    products: ["Item E", "Item F"],
  },
  {
    id: "O008",
    trackingId: "T008",
    customerId: "U008",
    name: "Noor Fatima",
    phone: "03241234567",
    email: "noor@email.com",
    status: "Cancelled",
    date: "2025-06-15",
    amount: 900,
    deliveryFee: 100,
    platformFee: 40,
    paymentMethod: "COD",
    shippingAddress: {
      addressLine1: "Block D",
      addressLine2: "House 123",
      city: "Quetta",
      area: "Satellite Town",
    },
    products: ["Item G"],
  },
  {
    id: "O009",
    trackingId: "T009",
    customerId: "U009",
    name: "Ahmed Raza",
    phone: "03471234567",
    email: "ahmed@email.com",
    status: "Pending",
    date: "2025-06-22",
    amount: 2800,
    deliveryFee: 200,
    platformFee: 120,
    paymentMethod: "Card",
    shippingAddress: {
      addressLine1: "Sector H",
      addressLine2: "House 88",
      city: "Gujranwala",
      area: "Wapda Town",
    },
    products: ["Item H", "Item I"],
  },
  {
    id: "O010",
    trackingId: "T010",
    customerId: "U010",
    name: "Imran Bashir",
    phone: "03481234567",
    email: "imran@email.com",
    status: "Completed",
    date: new Date().toISOString().split("T")[0], // today
    amount: 2200,
    deliveryFee: 180,
    platformFee: 70,
    paymentMethod: "Bank Transfer",
    shippingAddress: {
      addressLine1: "Sector A",
      addressLine2: "Plot 34",
      city: "Islamabad",
      area: "F-11",
    },
    products: ["Item J", "Item K"],
  },
  {
    id: "O011",
    trackingId: "T011",
    customerId: "U011",
    name: "Sara Nadeem",
    phone: "03091234567",
    email: "sara@email.com",
    status: "Pending",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0], // 2 days ago
    amount: 1500,
    deliveryFee: 100,
    platformFee: 50,
    paymentMethod: "COD",
    shippingAddress: {
      addressLine1: "Main Bazar",
      addressLine2: "Shop 3",
      city: "Hyderabad",
      area: "Latifabad",
    },
    products: ["Item L"],
  },
  {
    id: "O012",
    trackingId: "T012",
    customerId: "U012",
    name: "Usman Ali",
    phone: "03151234567",
    email: "usman@email.com",
    status: "Ongoing",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0], // 5 days ago
    amount: 2750,
    deliveryFee: 190,
    platformFee: 85,
    paymentMethod: "Card",
    shippingAddress: {
      addressLine1: "House 67",
      addressLine2: "Sector Z",
      city: "Sialkot",
      area: "Defense Road",
    },
    products: ["Item M", "Item N"],
  },
  {
    id: "O013",
    trackingId: "T013",
    customerId: "U013",
    name: "Kiran Shahid",
    phone: "03211234567",
    email: "kiran@email.com",
    status: "Cancelled",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0], // 10 days ago
    amount: 1300,
    deliveryFee: 110,
    platformFee: 45,
    paymentMethod: "COD",
    shippingAddress: {
      addressLine1: "Flat 44",
      addressLine2: "Plaza Square",
      city: "Bahawalpur",
      area: "City Center",
    },
    products: ["Item O"],
  },
  {
    id: "O014",
    trackingId: "T014",
    customerId: "U014",
    name: "Noman Khalid",
    phone: "03561234567",
    email: "noman@email.com",
    status: "Completed",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0], // 7 days ago
    amount: 2600,
    deliveryFee: 160,
    platformFee: 100,
    paymentMethod: "Card",
    shippingAddress: {
      addressLine1: "Green Street",
      addressLine2: "Building 9",
      city: "Sargodha",
      area: "University Road",
    },
    products: ["Item P", "Item Q"],
  },
  {
    id: "O015",
    trackingId: "T015",
    customerId: "U015",
    name: "Mehwish Saeed",
    phone: "03331234567",
    email: "mehwish@email.com",
    status: "Ongoing",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0], // 1 day ago
    amount: 1800,
    deliveryFee: 140,
    platformFee: 60,
    paymentMethod: "Bank Transfer",
    shippingAddress: {
      addressLine1: "House 2B",
      addressLine2: "Main Avenue",
      city: "Sahiwal",
      area: "Model Town",
    },
    products: ["Item R", "Item S"],
  },
  {
    id: "O016",
    trackingId: "T016",
    customerId: "U016",
    name: "Zoya Rehman",
    phone: "03681234567",
    email: "zoya@email.com",
    status: "Pending",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0], // 3 days ago
    amount: 1950,
    deliveryFee: 120,
    platformFee: 90,
    paymentMethod: "COD",
    shippingAddress: {
      addressLine1: "Lane 6",
      addressLine2: "Street 3",
      city: "Abbottabad",
      area: "Kakul",
    },
    products: ["Item T"],
  },
  {
    id: "O017",
    trackingId: "T017",
    customerId: "U017",
    name: "Adeel Murtaza",
    phone: "03411234567",
    email: "adeel@email.com",
    status: "Completed",
    date: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0], // 9 days ago
    amount: 3300,
    deliveryFee: 300,
    platformFee: 110,
    paymentMethod: "Card",
    shippingAddress: {
      addressLine1: "Block A",
      addressLine2: "House 15",
      city: "Rahim Yar Khan",
      area: "Airport Road",
    },
    products: ["Item U", "Item V"],
  },
  {
    id: "O018",
    trackingId: "T018",
    customerId: "U018",
    name: "Asma Irfan",
    phone: "03391234567",
    email: "asma@email.com",
    status: "Cancelled",
    date: new Date(Date.now() - 0.5 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0], // today (within 12 hours)
    amount: 1050,
    deliveryFee: 90,
    platformFee: 40,
    paymentMethod: "COD",
    shippingAddress: {
      addressLine1: "Near Park",
      addressLine2: "Flat 6",
      city: "Larkana",
      area: "City Area",
    },
    products: ["Item W"],
  },
  {
    id: "O019",
    trackingId: "T019",
    customerId: "U019",
    name: "Fahad Javed",
    phone: "03611234567",
    email: "fahad@email.com",
    status: "Ongoing",
    date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0], // 6 days ago
    amount: 2900,
    deliveryFee: 210,
    platformFee: 95,
    paymentMethod: "Card",
    shippingAddress: {
      addressLine1: "Main Road",
      addressLine2: "Plaza 101",
      city: "Okara",
      area: "Jinnah Colony",
    },
    products: ["Item X", "Item Y", "Item Z"],
  },
  {
    id: "O020",
    trackingId: "T020",
    customerId: "U020",
    name: "Ali hassan",
    phone: "03645234567",
    email: "ali@email.com",
    status: "Ongoing",
    date: new Date(new Date().setMonth(new Date().getMonth() - 5))
      .toISOString()
      .split("T")[0], // 5 months ago
    amount: 2700,
    deliveryFee: 210,
    platformFee: 75,
    paymentMethod: "Card",
    shippingAddress: {
      addressLine1: "Main Road",
      addressLine2: "Plaza 101",
      city: "Okara",
      area: "Jinnah Colony",
    },
    products: ["Item X", "Item Y", "Item Z"],
  },
];

const OrderManagement = () => {
  const [orderRange, setOrderRange] = useState("total");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const now = new Date();

  // Status options
  const statusOptions = ["all", "pending", "ongoing", "completed", "cancelled"];

  // Filter orders by selected range
  const filteredByRange = allOrders.filter((order) => {
    const dateDiff = (now - new Date(order.date)) / (1000 * 60 * 60 * 24);
    return (
      orderRange === "total" ||
      (orderRange === "daily" && dateDiff <= 1) ||
      (orderRange === "weekly" && dateDiff <= 7) ||
      (orderRange === "monthly" && dateDiff <= 30)
    );
  });

  // Filtered orders based on range + status + search
  const filteredOrders = filteredByRange.filter((order) => {
    const statusMatch =
      statusFilter === "all" || order.status.toLowerCase() === statusFilter;
    const searchMatch = order.name.toLowerCase().includes(searchTerm.toLowerCase());
    return statusMatch && searchMatch;
  });

  return (
    <div className="order-management-container">
      <h2 className="order-page-heading">Order Management</h2>

      <div className="order-filters-row">
        <select
          className="order-filter-dropdown"
          value={orderRange}
          onChange={(e) => setOrderRange(e.target.value)}
        >
          <option value="total">Total Orders ({allOrders.length})</option>
          <option value="daily">
            Daily Orders (
            {
              allOrders.filter(
                (order) =>
                  (now - new Date(order.date)) / (1000 * 60 * 60 * 24) <= 1
              ).length
            }
            )
          </option>
          <option value="weekly">
            Weekly Orders (
            {
              allOrders.filter(
                (order) =>
                  (now - new Date(order.date)) / (1000 * 60 * 60 * 24) <= 7
              ).length
            }
            )
          </option>
          <option value="monthly">
            Monthly Orders (
            {
              allOrders.filter(
                (order) =>
                  (now - new Date(order.date)) / (1000 * 60 * 60 * 24) <= 30
              ).length
            }
            )
          </option>
        </select>

        <select
          className="order-filter-dropdown"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {statusOptions.map((status) => {
            const count = filteredByRange.filter(
              (order) => status === "all" || order.status.toLowerCase() === status
            ).length;
            const label =
              status === "all"
                ? `All Statuses (${count})`
                : `${status.charAt(0).toUpperCase() + status.slice(1)} Orders (${count})`;
            return (
              <option key={status} value={status}>
                {label}
              </option>
            );
          })}
        </select>
      </div>

      <div className="order-search-row">
        <input
          type="text"
          className="order-search-bar"
          placeholder="Search by customer name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="order-list-table">
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
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td data-label="Order ID">{order.id}</td>
              <td data-label="Tracking ID">{order.trackingId}</td>
              <td data-label="Customer ID">{order.customerId}</td>
              <td data-label="Name">{order.name}</td>
              <td data-label="Phone">{order.phone}</td>
              <td data-label="Email">{order.email}</td>
              <td data-label="Status">{order.status}</td>
              <td data-label="Action">
                <button className="order-view-btn" onClick={() => setSelectedOrder(order)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="order-details-overlay">
          <div className="order-details-modal">
            <button className="order-modal-close-btn" onClick={() => setSelectedOrder(null)}>
              &times;
            </button>
            <h3>Order Details</h3>
            <div className="order-details-cards-row">
              <div className="order-details-card">
                <p>
                  <strong>Order ID:</strong> {selectedOrder.id}
                </p>
                <p>
                  <strong>Tracking Number:</strong> {selectedOrder.trackingId}
                </p>
                <p>
                  <strong>Customer ID:</strong> {selectedOrder.customerId}
                </p>
                <p>
                  <strong>Name:</strong> {selectedOrder.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedOrder.email}
                </p>
                <p>
                  <strong>Status:</strong> {selectedOrder.status}
                </p>
                <p>
                  <strong>Date:</strong> {selectedOrder.date}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedOrder.phone}
                </p>
              </div>
              <div className="order-details-card">
                <p>
                  <strong>Total Amount:</strong> Rs {selectedOrder.amount}
                </p>
                <p>
                  <strong>Delivery Fee:</strong> Rs {selectedOrder.deliveryFee}
                </p>
                <p>
                  <strong>Platform Fee:</strong> Rs {selectedOrder.platformFee}
                </p>
                <p>
                  <strong>Payment Method:</strong> {selectedOrder.paymentMethod}
                </p>
              </div>
            </div>
            <div className="order-details-card">
              <h4>Shipping Address</h4>
              <p>{selectedOrder.shippingAddress.addressLine1}</p>
              <p>{selectedOrder.shippingAddress.addressLine2}</p>
              <p>
                {selectedOrder.shippingAddress.city},{" "}
                {selectedOrder.shippingAddress.area}
              </p>
            </div>
            <div className="order-details-card order-details-last-card">
              <h4>Items</h4>
              <div className="order-details-items-list">
                {selectedOrder.products.map((item, i) => (
                  <span className="order-details-item-tag" key={i}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;