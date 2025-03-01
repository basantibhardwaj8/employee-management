import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div style={{ width: '200px', float: 'left', padding: '20px', borderRight: '1px solid #ccc' }}>
      <h3>Dashboard</h3>
      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/leaves">All Leaves</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/change-password">Change Password</Link></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;