import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllLeaves: React.FC = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const res = await axios.get('http://localhost:5002/api/leaves'); // Adjust the API endpoint as needed
        setLeaves(res.data);
      } catch (err) {
        console.error('Error fetching leaves:', err);
      }
    };
    fetchLeaves();
  }, []);

  return (
    <div>
      <h2>All Leaves</h2>
      <ul>
        {leaves.map((leave: any) => (
          <li key={leave._id}>
            <strong>Leave Type:</strong> {leave.leaveType} - <strong>Status:</strong> {leave.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllLeaves;