// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import AdminDashboard from './AdminDashboard';
// import EmployeeDashboard from './EmployeeDashboard'; 
// import ChangePassword from './ChangePassword';
// import AllLeaves from './AllLeaves';
// import Departments from './Departments';

// const Dashboard: React.FC = () => {
//   // Retrieve user role from localStorage
//   const role = localStorage.getItem('role');

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar />
//       <div style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
//         <Routes>
//           {/* Show different dashboard based on role */}
//           {role === 'admin' && <Route path="/admindashboard" element={<AdminDashboard />} />}
//           {role === 'employee' && <Route path="/employeedashboard" element={<EmployeeDashboard />} />}
          
//           <Route path="/allleaves" element={<AllLeaves />} />
//           <Route path="/departments" element={<Departments />} />
//           <Route path="/change-password" element={<ChangePassword />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// frontend/src/components/Dashboard.tsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import AdminDashboard from './AdminDashboard';
import EmployeeDashboard from './EmployeeDashboard'; 
import ChangePassword from './ChangePassword';
import AllLeaves from './AllLeaves';
import Departments from './Departments';

const Dashboard: React.FC = () => {
  // Retrieve user role from localStorage
  const role = localStorage.getItem('role');

  if (!role) {
    // If the user isn't logged in or role is missing, redirect to login page
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
        <Routes>
          {/* Show different dashboard based on role */}
          {role === 'admin' && <Route path="/admindashboard" element={<AdminDashboard />} />}
          {role === 'employee' && <Route path="/employeedashboard" element={<EmployeeDashboard />} />}
          
          {/* Other routes */}
          <Route path="/allleaves" element={<AllLeaves />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
