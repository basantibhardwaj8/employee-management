import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
// import ChangePassword from './ChangePassword'; // Create this component for changing password
 import AdminDashboard from './AdminDashboard';
import EmployeeDashboard from './EmployeeDashboard'; // Import Employee Dashboard
import ChangePassword from './ChangePassword';
import AllLeaves from './AllLeaves';
import Departments from './Departments';

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} /> {/* Default to Admin Dashboard */}
          <Route path="/allleaves" element={<AllLeaves />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/employees" element={<EmployeeDashboard/>} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;