 import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { authState, logout } = useAuth();

  return (
    <div>
      <nav>
        <Link to="/login">Login</Link>
        {authState.token && authState.role === 'admin' && <Link to="/admin-dashboard">Admin Dashboard</Link>}
        {authState.token && authState.role === 'employee' && <Link to="/employee-dashboard">Employee Dashboard</Link>}
        {authState.token && <button onClick={logout}>Logout</button>}
      </nav>
    </div>
  );
};

export default Navbar;