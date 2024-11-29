export const api = {
    fetchUsers: () => new Promise(resolve => setTimeout(() => resolve(usersData), 500)),
    addUser: (user) => new Promise(resolve => setTimeout(() => resolve(user), 500)),
    deleteUser: (id) => new Promise(resolve => setTimeout(() => resolve(id), 500)),
    updateUser: (id, updatedUser) => new Promise(resolve => setTimeout(() => resolve(updatedUser), 500)),
    fetchRoles: () => new Promise(resolve => setTimeout(() => resolve(rolesData), 500)),
    addRole: (role) => new Promise(resolve => setTimeout(() => resolve(role), 500)),
    deleteRole: (id) => new Promise(resolve => setTimeout(() => resolve(id), 500)),
    updateRole: (id, updatedRole) => new Promise(resolve => setTimeout(() => resolve(updatedRole), 500)),
  };
  