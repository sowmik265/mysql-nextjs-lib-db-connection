"use client";
import AddUserModal from "@/components/AddUserModal";
import UpdateUserModal from "@/components/UpdateUserModal";
import UsersTable from "@/components/UsersTable";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  //get all users
  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/users");
      const res = await response.json();
      setUsers(res.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Add a user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (response.ok) {
        fetchUserData();
        setName("");
        setEmail("");
        document.getElementById("my_modal_1").close();
      } else {
        console.error("Failed to add user");
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Delete a user
  const handleDelete = async (id) => {
    try {
      const response = await fetch("/api/users", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (response.ok) fetchUserData();
      else console.error("Failed to delete user");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Update a user
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedUser.user_id, name, email }),
      });
      if (response.ok) {
        fetchUserData();
        setSelectedUser(null);
        document.getElementById("update_modal").close();
      } else console.error("Failed to update user");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Edit button handler
  const onEdit = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setEmail(user.email);
    document.getElementById("update_modal").showModal();
  };

  return (
    <div>
      <div className="flex justify-end m-10">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add User
        </button>
        <AddUserModal
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
        <UpdateUserModal
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          handleUpdate={handleUpdate}
        />
      </div>

      <h1 className="text-4xl text-center">Users List</h1>
      <UsersTable users={users} handleDelete={handleDelete} onEdit={onEdit} />
    </div>
  );
};

export default Users;
