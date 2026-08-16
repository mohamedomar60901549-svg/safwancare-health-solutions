import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === 'ADMIN') {
        navigate('/admin/dashboard', { replace: true });
      } else if (user.role === 'DOCTOR') {
        navigate('/doctor/dashboard', { replace: true });
      } else if (user.role === 'RECEPTIONIST') {
        navigate('/receptionist/dashboard', { replace: true });
      }
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading dashboard...</p>
      </div>
    </div>
  );
};

export default Dashboard;
