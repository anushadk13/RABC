import React, { useState } from "react";

const rolesData = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "User", permissions: ["Read"] },
];

function RoleManagement() {
  const [roles, setRoles] = useState(rolesData);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const handleAddRole = () => {
    setRoles([...roles, { ...newRole, id: roles.length + 1 }]);
    setNewRole({ name: "", permissions: [] });
  };

  const handleEditRole = (id, updatedRole) => {
    setRoles(roles.map(role => role.id === id ? { ...role, ...updatedRole } : role));
  };

  return (
    <div>
      <h2>Role Management</h2>
      <div>
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <button onClick={handleAddRole}>Add Role</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button onClick={() => handleEditRole(role.id, { permissions: ["Read", "Write"] })}>
                  Edit Permissions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleManagement;
