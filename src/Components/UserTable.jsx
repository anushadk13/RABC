import React, { useState } from "react";

const usersData = [
  { id: 1, name: "Alice", email: "alice@example.com", status: "Active" },
  { id: 2, name: "Bob", email: "bob@example.com", status: "Inactive" },
];

function UserManagement() {
  const [users, setUsers] = useState(usersData);
  const [newUser, setNewUser] = useState({ name: "", email: "", status: "Active" });

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: "", email: "", status: "Active" });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEditUser = (id, updatedUser) => {
    setUsers(users.map(user => user.id === id ? { ...user, ...updatedUser } : user));
  };

  return (
    <div>
      <h2>User Management</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <select
          value={newUser.status}
          onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                <button onClick={() => handleEditUser(user.id, { status: user.status === 'Active' ? 'Inactive' : 'Active' })}>
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
