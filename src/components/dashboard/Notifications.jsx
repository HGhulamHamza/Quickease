import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const initialNotifications = [
  {
    id: 1,
    title: "System Update",
    message: "A new system update will be applied tonight at 2 AM.",
    timestamp: "2025-06-26T10:00:00.000Z",
  },
  {
    id: 2,
    title: "New Order",
    message: "Order #12345 has been placed successfully.",
    timestamp: "2025-06-27T17:45:00.000Z",
  },
];

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [newTitle, setNewTitle] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleCreate = () => {
    if (!newTitle || !newMessage) return;
    const newNotification = {
      id: Date.now(),
      title: newTitle,
      message: newMessage,
      timestamp: new Date().toISOString(),
    };
    setNotifications([newNotification, ...notifications]);
    setNewTitle("");
    setNewMessage("");
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const handleEdit = (id) => {
    const toEdit = notifications.find((n) => n.id === id);
    if (toEdit) {
      setNewTitle(toEdit.title);
      setNewMessage(toEdit.message);
      handleDelete(id);
      setShowForm(true);
    }

  };

  const sortedNotifications = [...notifications].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
      const goBackToDashboard = () => {
    // Replace with your actual Dashboard route if using React Router
    window.location.href = "/";
  };

  const styles = {
    screen: {
      padding: 20,
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      position: "relative",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 30,
    },
    heading: {
      fontSize: 24,
      color: "#2c7b34",
    },
    openFormBtn: {
      backgroundColor: "#2c7b34",
      color: "white",
      padding: "10px 18px",
      fontSize: 15,
      border: "none",
      borderRadius: 6,
      cursor: "pointer",
      transition: "0.3s",
    },
    backdrop: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(5px)",
      zIndex: 9,
    },
    overlayForm: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 10,
      width: "90%",
      maxWidth: 450,
    },
    overlayFormCentered: {
      background: "white",
      padding: "25px 20px",
      borderRadius: 10,
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 15,
    },
    formHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    formTitle: {
      margin: 0,
      fontSize: 18,
      color: "#2c7b34",
    },
    closeBtn: {
      background: "none",
      border: "none",
      fontSize: 22,
      cursor: "pointer",
      color: "#444",
      transition: "0.3s",
    },
    input: {
      padding: "10px 14px",
      border: "1px solid #ccc",
      borderRadius: 6,
      fontSize: 14,
      outline: "none",
    },
    textarea: {
      padding: "10px 14px",
      border: "1px solid #ccc",
      borderRadius: 6,
      fontSize: 14,
      outline: "none",
      minHeight: 80,
      resize: "vertical",
    },
    sendBtn: {
      backgroundColor: "#2c7b34",
      color: "white",
      border: "none",
      padding: 10,
      borderRadius: 6,
      fontSize: 14,
      cursor: "pointer",
      transition: "0.3s",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: 15,
    },
    card: {
      background: "white",
      padding: "12px 18px",
      borderLeft: "5px solid #2c7b34",
      borderRadius: 10,
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
      transition: "0.3s ease",
    },
    cardHover: {
      transform: "scale(1.02)",
    },
    noteHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 5,
    },
    noteTitle: {
      fontSize: 16,
      color: "#2c7b34",
      margin: 0,
    },
    timestamp: {
      fontSize: 12,
      color: "#777",
    },
    noteMessage: {
      fontSize: 14,
      color: "#444",
      margin: "5px 0 10px 0",
    },
    noteActions: {
      display: "flex",
      gap: 10,
    },
    editBtn: {
      padding: "6px 12px",
      fontSize: 13,
      border: "none",
      borderRadius: 5,
      cursor: "pointer",
      backgroundColor: "#2980b9",
      color: "white",
      transition: "0.3s",
    },
    deleteBtn: {
      padding: "6px 12px",
      fontSize: 13,
      border: "none",
      borderRadius: 5,
      cursor: "pointer",
      backgroundColor: "#e74c3c",
      color: "white",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.screen}>
         <div onClick={goBackToDashboard} className="back-icon">
                                <FaArrowLeft />
                              </div>
      <div style={styles.header}>
        <h2 style={styles.heading}>Notification Center</h2>
        <button style={styles.openFormBtn} onClick={() => setShowForm(true)}>
          Send Notification
        </button>
      </div>

      {showForm && (
        <>
          <div style={styles.backdrop} onClick={() => setShowForm(false)} />
          <div style={styles.overlayForm}>
            <div style={styles.overlayFormCentered}>
              <div style={styles.formHeader}>
                <h3 style={styles.formTitle}>Send Notification</h3>
                <button style={styles.closeBtn} onClick={() => setShowForm(false)}>
                  ×
                </button>
              </div>
              <input
                type="text"
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                style={styles.input}
              />
              <textarea
                placeholder="Message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                style={styles.textarea}
              />
              <button onClick={handleCreate} style={styles.sendBtn}>
                Send
              </button>
            </div>
          </div>
        </>
      )}

      <div style={styles.list}>
        {sortedNotifications.map((note) => (
          <div key={note.id} style={styles.card}>
            <div style={styles.noteHeader}>
              <h3 style={styles.noteTitle}>{note.title}</h3>
              <span style={styles.timestamp}>
                {new Date(note.timestamp).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </span>
            </div>
            <p style={styles.noteMessage}>{note.message}</p>
            <div style={styles.noteActions}>
              <button style={styles.editBtn} onClick={() => handleEdit(note.id)}>
                Edit
              </button>
              <button style={styles.deleteBtn} onClick={() => handleDelete(note.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationScreen;
