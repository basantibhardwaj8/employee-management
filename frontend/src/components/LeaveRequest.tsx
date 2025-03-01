import React, { useState } from 'react';

const LeaveRequest: React.FC = () => {
  const [name, setName] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const leaveRequest = {
      name,
      leaveType,
      startDate,
      endDate,
      comments,
    };

    // Here you would typically send the leaveRequest to your API
    console.log('Leave Request Submitted:', leaveRequest);
  };

  return (
    <div>
      <h2>Leave Request</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          required
        >
          <option value="">Select Leave Type</option>
          <option value="sick">Sick Leave</option>
          <option value="vacation">Vacation Leave</option>
          <option value="personal">Personal Leave</option>
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
        <textarea
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default LeaveRequest;