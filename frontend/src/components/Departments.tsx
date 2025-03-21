import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Departments: React.FC = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await axios.get('http://localhost:5003/api/departments'); // Adjust the API endpoint as needed
        setDepartments(res.data);
      } catch (err) {
        console.error('Error fetching departments:', err);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map((department: any) => (
          <li key={department._id}>{department.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;