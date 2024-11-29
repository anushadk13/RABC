import React, { useState } from "react";

const permissionsData = ["Read", "Write", "Delete"];

function PermissionManagement() {
  const [permissions, setPermissions] = useState(permissionsData);
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const togglePermission = (permission) => {
    setSelectedPermissions((prev) => {
      if (prev.includes(permission)) {
        return prev.filter((p) => p !== permission);
      } else {
        return [...prev, permission];
      }
    });
  };

  return (
    <div>
      <h2>Permission Management</h2>
      <div>
        {permissions.map((permission) => (
          <label key={permission}>
            <input
              type="checkbox"
              checked={selectedPermissions.includes(permission)}
              onChange={() => togglePermission(permission)}
            />
            {permission}
          </label>
        ))}
      </div>
    </div>
  );
}

export default PermissionManagement;
