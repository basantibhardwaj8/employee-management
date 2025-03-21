import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';

// Define the shape of the authentication state
interface AuthState {
  token: string | null;
  role: string;
}

// Define the shape of the context value
interface AuthContextType {
  authState: AuthState;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || 'employee', // default role
  });

  const login = async (username: string, password: string) => {
    try {
      const res = await axios.post('http://localhost:5003/api/users/login', { username, password });
      const token = res.data.token;
      localStorage.setItem('token', token);
      localStorage.setItem('role', res.data.role); // Store role in localStorage
      setAuthState({ token, role: res.data.role });
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setAuthState({ token: null, role: 'employee' });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};