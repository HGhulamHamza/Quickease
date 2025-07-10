// Top-level imports (no change)
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TotalUsers = () => {
  const navigate = useNavigate();

  const defaultUsers = [
    { id: "U001", name: "Ali Khan", email: "ali@gmail.com", phone: "03001234567", type: "monthly" },
    { id: "U002", name: "Sara Iqbal", email: "sara@gmail.com", phone: "03111234567", type: "weekly" },
    { id: "U003", name: "Ahmed Raza", email: "ahmed@gmail.com", phone: "03221234567", type: "daily" },
    { id: "U004", name: "Zara Ahmed", email: "zara@gmail.com", phone: "03331234567", type: "weekly" },
    { id: "U005", name: "Bilal Sheikh", email: "bilal@gmail.com", phone: "03441234567", type: "monthly" },
    { id: "U006", name: "Hira Noor", email: "hira@gmail.com", phone: "03551234567", type: "new" },
    { id: "U007", name: "Usman Ali", email: "usman@gmail.com", phone: "03661234567", type: "new" },
    { id: "U008", name: "Fatima Rizvi", email: "fatima@gmail.com", phone: "03771234567", type: "daily" }
  ];

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({ name: "", phone: "" });
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [filterType, setFilterType] = useState("total");

  useEffect(() => {
    const stored = localStorage.getItem("usersData");
    if (stored) {
      setUsers(JSON.parse(stored));
    } else {
      setUsers(defaultUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(users));
  }, [users]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedUser({ name: users[index].name, phone: users[index].phone });
  };

  const handleSave = (index) => {
    const updated = [...users];
    updated[index].name = editedUser.name;
    updated[index].phone = editedUser.phone;
    setUsers(updated);
    setEditIndex(null);
  };

  const handleOpenDeleteDialog = (index) => {
    setSelectedUserIndex(index);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedUserIndex(null);
  };

  const handleConfirmDelete = () => {
    const updatedUsers = [...users];
    updatedUsers.splice(selectedUserIndex, 1);
    setUsers(updatedUsers);
    handleCloseDialog();
  };

  const getFilteredByType = () => {
    if (filterType === "total") return users;
    return users.filter((user) => user.type === filterType);
  };

  const filteredUsers = getFilteredByType().filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const counts = {
    total: users.length,
    new: users.filter((u) => u.type === "new").length,
    daily: users.filter((u) => u.type === "daily").length,
    weekly: users.filter((u) => u.type === "weekly").length,
    monthly: users.filter((u) => u.type === "monthly").length,
  };

  const goBackToDashboard = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <style>{`
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
          justify-content: space-between;
          margin-bottom: 15px;
        }
        .dropdown-filter {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .search-input {
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
          outline: none;
          width: 250px;
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
      `}</style>

      <div className="total-users-container">
        <div onClick={goBackToDashboard} className="back-icon">
          <FaArrowLeft />
        </div>

        <h2 className="total-users-heading">Total Users</h2>

        <div className="search-container">
          <div className="dropdown-filter">
            <FormControl size="small">
              <Select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                style={{ minWidth: 180 }}
              >
                <MenuItem value="total">Total Users</MenuItem>
                <MenuItem value="new">New Users This Week</MenuItem>
                <MenuItem value="daily">Daily Active Users</MenuItem>
                <MenuItem value="weekly">Weekly Active Users</MenuItem>
                <MenuItem value="monthly">Monthly Active Users</MenuItem>
              </Select>
            </FormControl>
            <Typography fontSize="14px" color="#2c7b34" fontWeight="bold">
               {counts[filterType]}
            </Typography>
          </div>

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
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      value={editedUser.name}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, name: e.target.value })
                      }
                    />
                  ) : (
                    <>
                      {user.name}
                      <br />
                      <span
                        className="view-link"
                        onClick={() => navigate("/user-details", { state: { user } })}
                      >
                        View Details
                      </span>
                    </>
                  )}
                </td>
                <td>{user.email}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      value={editedUser.phone}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, phone: e.target.value })
                      }
                    />
                  ) : (
                    user.phone
                  )}
                </td>
                <td>
                  <div className="link-group">
                    {editIndex === index ? (
                      <span className="action-link" onClick={() => handleSave(index)}>
                        Save
                      </span>
                    ) : (
                      <>
                        <span className="action-link" onClick={() => handleEdit(index)}>
                          Edit User
                        </span>
                        <span className="action-link">Suspend User</span>
                        <span className="action-link" onClick={() => handleOpenDeleteDialog(index)}>
                          Delete User
                        </span>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle
          sx={{
            color: "#2C7B34",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Confirm Deletion
          <IconButton onClick={handleCloseDialog} sx={{ color: "#2C7B34" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this user?
            <br />
            <strong>If you delete the user, all information will be lost.</strong>
          </Typography>
        </DialogContent>
        <DialogActions sx={{ paddingRight: 3, paddingBottom: 2 }}>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            sx={{ backgroundColor: "red", color: "#fff" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TotalUsers;
