import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  FaHome, FaUsers, FaUserMd, FaHospital, FaPills, FaBoxes,
  FaMoneyBillWave, FaCreditCard, FaHandshake, FaFileAlt, FaCog,
  FaSignOutAlt, FaUser, FaStethoscope
} from 'react-icons/fa';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getNavItems = () => {
    const commonItems = [
      { path: '/dashboard', icon: FaHome, label: 'Dashboard' },
    ];

    if (user?.role === 'ADMIN') {
      return [
        ...commonItems,
        { path: '/users', icon: FaUsers, label: 'Users' },
        { path: '/receptionist/patients', icon: FaUser, label: 'Patients' },
        { path: '/receptionist/admissions', icon: FaHospital, label: 'Admissions' },
        { path: '/receptionist/pharmacy', icon: FaPills, label: 'Pharmacy' },
        { path: '/receptionist/stock', icon: FaBoxes, label: 'Stock' },
        { path: '/receptionist/billing', icon: FaMoneyBillWave, label: 'Billing' },
        { path: '/receptionist/payments', icon: FaCreditCard, label: 'Payments' },
        { path: '/receptionist/debts', icon: FaHandshake, label: 'Debts' },
        { path: '/receptionist/reports', icon: FaFileAlt, label: 'Reports' },
        { path: '/settings', icon: FaCog, label: 'Settings' },
      ];
    }

    if (user?.role === 'DOCTOR') {
      return [
        ...commonItems,
        { path: '/doctor/patients', icon: FaUsers, label: 'Patients' },
        { path: '/doctor/admissions', icon: FaHospital, label: 'Admissions' },
        { path: '/doctor/patients', icon: FaStethoscope, label: 'Treatments' },
      ];
    }

    if (user?.role === 'RECEPTIONIST') {
      return [
        ...commonItems,
        { path: '/receptionist/patients', icon: FaUser, label: 'Patients' },
        { path: '/receptionist/admissions', icon: FaHospital, label: 'Admissions' },
        { path: '/receptionist/pharmacy', icon: FaPills, label: 'Pharmacy' },
        { path: '/receptionist/stock', icon: FaBoxes, label: 'Stock' },
        { path: '/receptionist/billing', icon: FaMoneyBillWave, label: 'Billing' },
        { path: '/receptionist/payments', icon: FaCreditCard, label: 'Payments' },
        { path: '/receptionist/debts', icon: FaHandshake, label: 'Debts' },
        { path: '/receptionist/suppliers', icon: FaBoxes, label: 'Suppliers' },
        { path: '/receptionist/reports', icon: FaFileAlt, label: 'Reports' },
      ];
    }

    return commonItems;
  };

  const navItems = getNavItems();

  return (
    <aside className="w-64 bg-gradient-to-b from-primary-700 to-primary-900 text-white flex flex-col shadow-xl min-h-screen">
      <div className="p-4 border-b border-primary-600">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <FaHospital className="text-2xl" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">SAFWANCARE</h1>
            <p className="text-xs text-primary-200">Health Solutions</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-primary-600">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <FaUserMd className="text-sm" />
            </div>
            <div>
              <p className="text-sm font-semibold truncate max-w-[140px]">{user?.name || 'User'}</p>
              <p className="text-xs text-primary-200 capitalize">{user?.role?.toLowerCase() || 'Role'}</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-primary-100 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            <item.icon className="text-lg" />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-primary-600">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 w-full rounded-lg text-primary-100 hover:bg-white/10 hover:text-white transition-all duration-200"
        >
          <FaSignOutAlt className="text-lg" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
