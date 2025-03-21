// import React, { Fragment, useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import Login from './components/Login';
// import RegistrationForm from './components/RegistrationForm'; // Import RegistrationForm
// import AdminPage from './pages/AdminPage'; // Import AdminPage
// import EmployeePage from './pages/EmployeePage'; // Import EmployeePage
// import Navbar from './components/Navbar';
// import { useAuth } from './context/AuthContext';
// import AdminDashboard from './components/AdminDashboard';
// import EmployeeDashboard from './components/EmployeeDashboard';

// const App: React.FC = () => {
//   const { authState } = useAuth();
//   // const navigate = useNavigate();

//   // const handleRegister = (username: string, password: string, role: string) => {
//   //   // Add the new user to the registered users list
//   //   // This is where you would typically send a request to your backend to register the user
//   //   // For now, we will just log it
//   //   console.log('Registered User:', { username, password, role });
//   //   // Redirect to the login page after successful registration
//   //   navigate('/login');
//   // };

//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<RegistrationForm />} /> {/* Home route with RegistrationForm */}
//         {authState.token && authState.role === 'admin' && (
//           <Route path="/admin" element={<AdminPage />} />
//         )}
//         {authState.token && authState.role === 'employee' && (
//          <> 
      
//          <Route path="/employee" element={<EmployeePage />} />
//           <Route path="/admindashboard" element={<AdminDashboard />} />
//           <Route path="/employeedashboard" element={<EmployeeDashboard />} />
//           </>
//         )}
        
//       </Routes>
//     </div>
//   );
// };

// export default App;
// frontend/src/App.tsx or Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  // Import Navigate here
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Protected route for Dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />} />

        {/* Default route, redirect to login if no route matches */}
        <Route path="*" element={<Navigate to="/login" />} /> {/* Use Navigate for redirection */}
      </Routes>
    </Router>
  );
};

export default App;
