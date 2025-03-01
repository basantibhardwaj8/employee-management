import React from 'react';
import EmployeeDashboard from '../components/EmployeeDashboard';
import LeaveRequest from '../components/LeaveRequest';

const EmployeePage: React.FC = () => {
  return (
    <div>
      <h1>Employee Page</h1>
      <p>Welcome to the Employee Portal. Here you can manage your leave requests and view your details.</p>
      
      <h2>Your Leave Requests</h2>
      <EmployeeDashboard /> {/* Include the EmployeeDashboard component to view leave requests */}
      
      <h2>Apply for Leave</h2>
      <LeaveRequest /> {/* Include the LeaveRequest component for submitting leave requests */}
    </div>
  );
};

export default EmployeePage;