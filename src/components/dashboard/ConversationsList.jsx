import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const dummyUsers = [
  { id: 1, name: "Ali Khan" },
  { id: 2, name: "Ayesha Iqbal" },
  { id: 3, name: "Bilal Raza" },
  { id: 4, name: "Fatima Sheikh" },
  { id: 5, name: "Usman Javed" }
];

const dummyMessages = {
  1: [
    { from: "user", text: "Hello Ali!", time: "10:00 AM" },
    { from: "Ali", text: "Hi there, how can I help you?", time: "10:02 AM" }
  ],
  2: [
    { from: "user", text: "Hey Ayesha!", time: "9:00 AM" },
    { from: "Ayesha", text: "Hi! I'm available for support.", time: "9:05 AM" }
  ]
};

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [search, setSearch] = useState("");

  const handleSend = () => {
    if (!messageText.trim()) return;
    const newMessage = {
      from: "user",
      text: messageText,
      time: new Date().toLocaleTimeString()
    };
    dummyMessages[selectedUser.id] = [
      ...(dummyMessages[selectedUser.id] || []),
      newMessage
    ];
    setMessageText("");
  };

  const filteredUsers = dummyUsers.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const getLastMessage = (userId) => {
    const messages = dummyMessages[userId] || [];
    return messages.length
      ? messages[messages.length - 1]
      : { text: "No messages yet", time: "" };
  };
   const goBackToDashboard = () => {
    // Replace with your actual Dashboard route if using React Router
    window.location.href = "/";
  };

  const styles = {
    messagesContainer: {
      display: "flex",
      height: "90vh",
      borderRadius: "10px",
      overflow: "hidden",
      background: "#f9f9f9",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      flexDirection: window.innerWidth <= 768 ? "column" : "row"
    },
    sidebar: {
      width: window.innerWidth <= 768 ? "100%" : "25%",
      backgroundColor: "#f0f4f8",
      borderRight: window.innerWidth <= 768 ? "none" : "1px solid #ddd",
      borderBottom: window.innerWidth <= 768 ? "1px solid #ddd" : "none",
      display: "flex",
      flexDirection: "column",
      padding: 20
    },
    searchBar: {
      padding: 10,
      border: "1px solid #ccc",
      borderRadius: 8,
      marginBottom: 15
    },
    userList: {
      flex: 1,
      overflowY: "auto"
    },
    userItem: (isActive) => ({
      padding: "10px 12px",
      borderRadius: 8,
      marginBottom: 10,
      cursor: "pointer",
      backgroundColor: isActive ? "#b0f7b7" : "#fff",
      transition: "background 0.3s",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.03)",
      transform: isActive ? "scale(0.98)" : "scale(1)"
    }),
    userName: {
      fontWeight: "bold",
      marginBottom: 4
    },
    lastMessage: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      color: "#666"
    },
    time: {
      fontSize: 12,
      color: "#999"
    },
    chatScreen: {
      width: window.innerWidth <= 768 ? "100%" : "75%",
      backgroundColor: "#fcfcfc",
      display: "flex",
      flexDirection: "column",
      padding: window.innerWidth <= 768 ? 15 : 20
    },
    chatHeader: {
      fontWeight: "bold",
      fontSize: 18,
      color: "#2c7b34",
      marginBottom: 15,
      borderBottom: "1px solid #ddd",
      paddingBottom: 10
    },
    chatMessages: {
      flex: 1,
      overflowY: "auto",
      paddingRight: 10
    },
    message: (from) => ({
      maxWidth: window.innerWidth <= 768 ? "85%" : "65%",
      alignSelf: from === "user" ? "flex-end" : "flex-start",
      marginBottom: 10,
      padding: "10px 14px",
      fontSize: 14,
      lineHeight: 1.4,
      wordWrap: "break-word",
      border: "1px solid",
      borderColor: from === "user" ? "#cde9d2" : "#ddd",
      backgroundColor: from === "user" ? "#e1f7e4" : "#f0f0f0"
    }),
    msgTime: {
      display: "block",
      marginTop: 4,
      fontSize: 12,
      color: "#999",
      textAlign: "right"
    },
    chatInput: {
      display: "flex",
      gap: 10,
      paddingTop: 10,
      borderTop: "1px solid #ddd"
    },
    inputField: {
      flex: 1,
      padding: 10,
      border: "1px solid #ccc",
      borderRadius: 8
    },
    sendButton: {
      backgroundColor: "#2c7b34",
      color: "white",
      border: "none",
      padding: "10px 16px",
      borderRadius: 8,
      cursor: "pointer"
    },
    chatPlaceholder: {
      textAlign: "center",
      color: "#999",
      marginTop: "40%",
      fontSize: 18
    }
  };

  return (
    <div style={styles.messagesContainer}>
      <div onClick={goBackToDashboard} className="back-icon">
                                    <FaArrowLeft />
                                  </div>
      <div style={styles.sidebar}>
        <input
          type="text"
          placeholder="Search..."
          style={styles.searchBar}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div style={styles.userList}>
          {filteredUsers.map(user => {
            const lastMsg = getLastMessage(user.id);
            return (
              <div
                key={user.id}
                style={styles.userItem(selectedUser?.id === user.id)}
                onClick={() => setSelectedUser(user)}
              >
                <div style={styles.userName}>{user.name}</div>
                <div style={styles.lastMessage}>
                  <span>{lastMsg.text}</span>
                  <span style={styles.time}>{lastMsg.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={styles.chatScreen}>
        {selectedUser ? (
          <>
            <div style={styles.chatHeader}>Chat with {selectedUser.name}</div>
            <div style={styles.chatMessages}>
              {(dummyMessages[selectedUser.id] || []).map((msg, idx) => (
                <div key={idx} style={styles.message(msg.from)}>
                  <div>{msg.text}</div>
                  <span style={styles.msgTime}>{msg.time}</span>
                </div>
              ))}
            </div>
            <div style={styles.chatInput}>
              <input
                type="text"
                placeholder="Type your message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                style={styles.inputField}
              />
              <button onClick={handleSend} style={styles.sendButton}>
                Send
              </button>
            </div>
          </>
        ) : (
          <div style={styles.chatPlaceholder}>Select a user to start conversation</div>
        )}
      </div>
    </div>
  );
};

export default Messages;
