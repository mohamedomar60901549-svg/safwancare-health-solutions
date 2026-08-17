import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaUser, FaLock, FaHospital, FaChevronDown, FaUserMd, FaUsers, FaUserShield } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const demoAccounts = [
    { 
      role: 'Admin', 
      email: 'admin@safwancare.com', 
      password: '123',
      icon: <FaUserShield className="text-red-500" />,
      color: 'bg-red-50 border-red-200'
    },
    { 
      role: 'Doctor', 
      email: 'doctor@safwancare.com', 
      password: '123',
      icon: <FaUserMd className="text-blue-500" />,
      color: 'bg-blue-50 border-blue-200'
    },
    { 
      role: 'Receptionist', 
      email: 'reception@safwancare.com', 
      password: '123',
      icon: <FaUsers className="text-green-500" />,
      color: 'bg-green-50 border-green-200'
    },
  ];

  const handleDemoSelect = (account) => {
    setEmail(account.email);
    setPassword(account.password);
    setShowDropdown(false);
    toast.success(`Selected ${account.role} account`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await login(email, password);
    setLoading(false);
    
    if (result.success) {
      navigate('/dashboard');
    }
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
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

          {/* Demo Accounts Dropdown */}
          <div className="mt-6">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full flex items-center justify-between px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm text-gray-600">🚀 Quick Login with Demo Account</span>
                <FaChevronDown className={`text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showDropdown && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-fade-in">
                  {demoAccounts.map((account, index) => (
                    <button
                      key={index}
                      onClick={() => handleDemoSelect(account)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 ${account.color}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        {account.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-semibold text-gray-800">{account.role}</p>
                        <p className="text-xs text-gray-500">{account.email}</p>
                      </div>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">Click to use</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              <span className="font-semibold">💡 Tip:</span> Click the button above to auto-fill demo credentials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
