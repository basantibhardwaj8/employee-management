import React, { useState } from 'react';
import axios from 'axios';

const EmployeeDashboard: React.FC = () => {
  const [leaveType, setLeaveType] = useState('sick');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleApplyLeave = async () => {
    const leaveRequest = { leaveType, startDate, endDate };
    await axios.post('http://localhost:5002/api/leaves/apply', leaveRequest);
  };

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <form onSubmit={handleApplyLeave}>
        <select onChange={(e) => setLeaveType(e.target.value)} value={leaveType}>
          <option value="sick">Sick Leave</option>
          <option value="casual">Casual Leave</option>
        </select>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <button type="submit">Apply for Leave</button>
      </form>
    </div>
  );
};

export default EmployeeDashboard;