// // frontend/src/components/Login.tsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';


// const Login: React.FC = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     role: 'employee'
//   });
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError(null);
//     setIsLoading(true);
  
//     try {
//       const response = await axios.post('http://localhost:5003/api/users/login', {
//         username: formData.username,
//         password: formData.password
//       });
  
//       const { token, role, username } = response.data;
  
//       // Store auth data
//       localStorage.setItem('token', token);
//       localStorage.setItem('role', role);
//       localStorage.setItem('username', username);
  
//       // Configure axios defaults for future requests
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
//       // Redirect based on role
//       if (role === 'admin') {
//         navigate('/admindashboard');  // Issue here
//  // Admin dashboard
//       } else {
//         navigate('/employeedashboard');  // Employee dashboard
//       }
//     } catch (err: any) {
//       console.error('Login error:', err);
//       setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };
  

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Login</h2>
//         {error && <div className="error-message">{error}</div>}
        
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//             className="form-control"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="form-control"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="role">Role:</label>
//           <select
//             id="role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="form-control"
//           >
//             <option value="employee">Employee</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>

//         <button 
//           type="submit" 
//           className="submit-button"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;





// frontend/src/components/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'employee'
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5003/api/users/login', {
        username: formData.username,
        password: formData.password,
      });

      const { token, role, username } = response.data;

      // Clear any existing role or user data before setting new values
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('username');

      // Store new auth data in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('username', username);

      // Configure axios defaults for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Redirect based on role
      if (role === 'admin') {
        // Navigate to Admin Dashboard
        navigate('/dashboard/admindashboard');  
      } else {
        // Navigate to Employee Dashboard
        navigate('/dashboard/employeedashboard');  
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="form-control"
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
