// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login: React.FC = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('employee'); // Default role
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       // Make a request to your backend API to authenticate the user
//       const response = await axios.post('http://localhost:5000/api/users/login', { username, password });
//       const { token, role } = response.data;

//       // Store the token and role in local storage or context
//       localStorage.setItem('token', token);
//       localStorage.setItem('role', role);

//       // Redirect to the dashboard
//       navigate('/dashboard');
//     } catch (err) {
//       setError('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="role">Select Role:</label>
//         <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
//           <option value="employee">Employee</option>
//           <option value="admin">Admin</option>
//         </select>
//       </div>
//       <button type="submit">Login</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </form>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee'); // Default role
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      // Make a request to your backend API to authenticate the user
      const response = await axios.post('http://localhost:5002/api/users/login', { username, password });
      const { token, role } = response.data;

      // Store the token and role in local storage or context
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="role">Select Role:</label>
        <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Login;