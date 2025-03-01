import React, { useState } from 'react';

const RegistrationForm: React.FC<{ onRegister: (username: string, password: string, role: string) => void }> = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee'); // Default role
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (username && password) {
      onRegister(username, password, role); // Pass role to onRegister
      setSuccess('Registration successful! You can now log in.');
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
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
      <button type="submit">Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
};

export default RegistrationForm;
