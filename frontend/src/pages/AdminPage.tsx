import React from 'react';
import AdminDashboard from '../components/AdminDashboard';
import LeaveRequest from '../components/LeaveRequest';

const AdminPage: React.FC = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome to the Admin Panel. Here you can manage leave requests and other administrative tasks.</p>
      
      <h2>Manage Leave Requests</h2>
      <AdminDashboard /> {/* Include the AdminDashboard component to manage leave requests */}
      
      <h2>Submit Leave Request</h2>
      <LeaveRequest /> {/* Include the LeaveRequest component for submitting leave requests */}
    </div>
  );
};

export default AdminPage;