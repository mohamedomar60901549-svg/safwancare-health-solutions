import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Demo users for testing
    const demoUsers = {
      'admin@safwancare.com': { name: 'System Admin', role: 'ADMIN' },
      'doctor@safwancare.com': { name: 'Dr. James Mwangi', role: 'DOCTOR' },
      'reception@safwancare.com': { name: 'Sarah Akinyi', role: 'RECEPTIONIST' },
    };

    // For demo, accept any password with length >= 3
    if (demoUsers[email] && password.length >= 3) {
      const userData = demoUsers[email];
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', 'demo-token-' + Date.now());
      setUser(userData);
      toast.success(`Welcome back, ${userData.name}!`);
      return { success: true, user: userData };
    } else {
      toast.error('Invalid credentials. Please use the demo accounts listed below.');
      return { success: false, error: 'Invalid credentials' };
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    toast.success('Logged out successfully');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'ADMIN',
    isDoctor: user?.role === 'DOCTOR',
    isReceptionist: user?.role === 'RECEPTIONIST',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
