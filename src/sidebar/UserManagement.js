// Add this import at the top of the file
import React, { useState } from "react";
 
import CreateUser from './CreateUser'; 

const UserCard = ({ user }) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px",
      maxWidth: "200px",
    }}
  >
    <div style={{ fontWeight: "bold" }}>{user.fullName}</div>
    <div>{user.email}</div>
    <div>{user.role}</div> 
    {/* Add more details as needed */}
  </div>
);

const UserManagement = () => {
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleCreateUser = (userData) => {
    // Add the new user to the list of users
    setUsers((prevUsers) => [...prevUsers, userData]);
    // Close the Create User form
    setShowCreateUser(false);
    console.log('User created:', userData);

    // Assume the user is logged in after creating an account
    setLoggedInUser(userData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }} 
    >
      <button
        onClick={() => setShowCreateUser(true)}
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        + Create User
      </button>
      {showCreateUser && <CreateUser onCreateUser={handleCreateUser} />}
      {/* Display the logged-in user icon with initials */}
      {loggedInUser && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "lightblue",
            borderRadius: "50%",
            padding: "5px",
          }}
        >
          {getInitials(loggedInUser.fullName)}
        </div>
      )}
      {/* Display user cards */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <UserCard key={user.userId} user={user} />
        ))}
      </div>
    </div>
  );
};

// Function to get initials from a full name
const getInitials = (fullName) => {
  const names = fullName.split(" ");
  return names.map((name) => name[0]).join("");
};

export default UserManagement; 
