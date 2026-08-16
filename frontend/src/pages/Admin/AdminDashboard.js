import React from 'react';
import { FaUsers, FaHospital, FaPills, FaMoneyBillWave } from 'react-icons/fa';
import StatsCard from '../../components/Common/StatsCard';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Patients', value: '1,234', icon: FaUsers, color: 'blue' },
    { title: 'Active Admissions', value: '45', icon: FaHospital, color: 'green' },
    { title: 'Medicines in Stock', value: '234', icon: FaPills, color: 'purple' },
    { title: "Today's Revenue", value: 'KSh 45,000', icon: FaMoneyBillWave, color: 'yellow' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div>
                <p className="text-sm font-medium text-gray-800">New patient registered</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
              <span className="badge badge-success">New</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div>
                <p className="text-sm font-medium text-gray-800">Payment received</p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
              <span className="badge badge-success">KSh 5,000</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">System Overview</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Users</span>
              <span className="font-semibold">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Doctors</span>
              <span className="font-semibold">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Revenue</span>
              <span className="font-semibold">KSh 450,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
