import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserManagement />} />
        <Route path="/roles" element={<RoleManagement />} />
        <Route path="/permissions" element={<PermissionManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
