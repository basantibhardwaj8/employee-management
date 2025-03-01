import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard: React.FC = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      const res = await axios.get('http://localhost:5002/api/leaves');
      setLeaveRequests(res.data);
    };
    fetchLeaveRequests();
  }, []);

  const handleLeaveAction = async (id: string, status: string) => {
    await axios.put('http://localhost:5002/api/leaves/handle', { leaveId: id, status });
    setLeaveRequests(leaveRequests.filter((req: any) => req._id !== id));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        {leaveRequests.map((request: any) => (
          <div key={request._id}>
            <p>Leave Type: {request.leaveType}</p>
            <p>Status: {request.status}</p>
            <button onClick={() => handleLeaveAction(request._id, 'approved')}>Approve</button>
            <button onClick={() => handleLeaveAction(request._id, 'rejected')}>Reject</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;