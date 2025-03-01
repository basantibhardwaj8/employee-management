import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm'; // Import RegistrationForm
import AdminPage from './pages/AdminPage'; // Import AdminPage
import EmployeePage from './pages/EmployeePage'; // Import EmployeePage
import Navbar from './components/Navbar';
import { useAuth } from './context/AuthContext';

const App: React.FC = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (username: string, password: string, role: string) => {
    // Add the new user to the registered users list
    // This is where you would typically send a request to your backend to register the user
    // For now, we will just log it
    console.log('Registered User:', { username, password, role });
    // Redirect to the login page after successful registration
    navigate('/login');
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RegistrationForm onRegister={handleRegister} />} /> {/* Home route with RegistrationForm */}
        {authState.token && authState.role === 'admin' && (
          <Route path="/admin" element={<AdminPage />} />
        )}
        {authState.token && authState.role === 'employee' && (
          <Route path="/employee" element={<EmployeePage />} />
        )}
      </Routes>
    </div>
  );
};

export default App;