import React, { useState } from "react";
import "./ComplaintsFeedback.css";
import { useLocation, useNavigate } from "react-router-dom";

const complaintsData = [
  {
    id: "U001",
    name: "Ali Khan",
    phone: "03001234567",
    type: "Service Delay",
    description: "Order was delivered 2 days late.",
    date: "2025-06-25"
  },
  {
    id: "U002",
    name: "Ayesha Iqbal",
    phone: "03001231234",
    type: "Product Issue",
    description: "Item received was damaged.",
    date: "2025-06-26"
  },
  {
    id: "U003",
    name: "Bilal Raza",
    phone: "03221234567",
    type: "Customer Support",
    description: "No response from support team.",
    date: "2025-06-24"
  }
];

const feedbackData = [
  {
    id: "U001",
    email: "ali@email.com",
    type: "App Experience",
    content: "The app is smooth and user-friendly.",
    date: "2025-06-25"
  },
  {
    id: "U002",
    email: "ayesha@email.com",
    type: "Service Feedback",
    content: "Delivery was on time and well-packed.",
    date: "2025-06-26"
  },
  {
    id: "U003",
    email: "bilal@email.com",
    type: "Suggestions",
    content: "Consider adding more payment options.",
    date: "2025-06-24"
  }
];

const ComplaintsFeedback = () => {
  const [activeSection, setActiveSection] = useState("");
  const [searchComplaints, setSearchComplaints] = useState("");
  const [searchFeedback, setSearchFeedback] = useState("");

  const complaintTotal = complaintsData.length;
  const complaintThisWeek = complaintsData.filter(c => new Date(c.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length;
  const feedbackTotal = feedbackData.length;
  const feedbackThisWeek = feedbackData.filter(f => new Date(f.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length;

  const filteredComplaints = complaintsData.filter(item =>
    item.name.toLowerCase().includes(searchComplaints.toLowerCase()) ||
    item.id.toLowerCase().includes(searchComplaints.toLowerCase()) ||
    item.phone.includes(searchComplaints)
  );

  const filteredFeedback = feedbackData.filter(item =>
    item.email.toLowerCase().includes(searchFeedback.toLowerCase()) ||
    item.id.toLowerCase().includes(searchFeedback.toLowerCase())
  );

  return (
    <div className="cf-container">
      <h2 className="cf-heading">Complaints & Feedback</h2>

      <div className="cf-cards">
        <div className="cf-card">
          <h3>User Complaints</h3>
          <p>Total: <strong>{complaintTotal}</strong></p>
          <p>This Week: <strong>{complaintThisWeek}</strong></p>
          <button
            className="cf-btn"
            onClick={() => setActiveSection(activeSection === "complaints" ? "" : "complaints")}
          >
            {activeSection === "complaints" ? "Hide Details" : "View Details"}
          </button>
        </div>

        <div className="cf-card">
          <h3>User Feedback</h3>
          <p>Total: <strong>{feedbackTotal}</strong></p>
          <p>This Week: <strong>{feedbackThisWeek}</strong></p>
          <button
            className="cf-btn"
            onClick={() => setActiveSection(activeSection === "feedback" ? "" : "feedback")}
          >
            {activeSection === "feedback" ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>

      {activeSection === "complaints" && (
        <div className="cf-complaints-section">
          <input
            type="text"
            placeholder="Search by name, ID or phone..."
            value={searchComplaints}
            onChange={(e) => setSearchComplaints(e.target.value)}
            className="complaints-search"
          />

          <table className="complaints-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Complaint Type</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.type}</td>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeSection === "feedback" && (
        <div className="cf-complaints-section">
          <input
            type="text"
            placeholder="Search by user ID or email..."
            value={searchFeedback}
            onChange={(e) => setSearchFeedback(e.target.value)}
            className="complaints-search"
          />

          <table className="complaints-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>Feedback Type</th>
                <th>Feedback</th>
                <th>Submitted On</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeedback.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.type}</td>
                  <td>{item.content}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ComplaintsFeedback;