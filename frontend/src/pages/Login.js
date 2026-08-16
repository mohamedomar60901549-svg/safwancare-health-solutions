import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaUser, FaLock, FaHospital } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Demo login without backend
    const demoUsers = {
      'admin@safwancare.com': { name: 'System Admin', role: 'ADMIN' },
      'doctor@safwancare.com': { name: 'Dr. James Mwangi', role: 'DOCTOR' },
      'reception@safwancare.com': { name: 'Sarah Akinyi', role: 'RECEPTIONIST' },
    };

    if (demoUsers[email] && password.length >= 3) {
      const user = demoUsers[email];
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', 'demo-token');
      toast.success(`Welcome back, ${user.name}!`);
      setTimeout(() => {
        navigate('/dashboard');
      }, 500);
    } else {
      toast.error('Invalid credentials. Use demo accounts below.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                <FaHospital className="text-4xl text-primary-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">SAFWANCARE</h1>
            <p className="text-sm text-gray-500 mt-1">HEALTH SOLUTIONS</p>
            <h2 className="text-xl font-semibold text-gray-700 mt-4">Welcome Back</h2>
            <p className="text-sm text-gray-500">Sign in to access the system</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="admin@safwancare.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your password (any 3+ chars)"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              <span className="font-semibold">Demo Credentials:</span><br />
              👨‍💼 Admin: admin@safwancare.com / any password<br />
              👨‍⚕️ Doctor: doctor@safwancare.com / any password<br />
              🏥 Reception: reception@safwancare.com / any password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
