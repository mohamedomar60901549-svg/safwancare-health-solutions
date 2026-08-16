import React, { useState } from 'react';
import { FaSearch, FaMoneyBillWave, FaWallet } from 'react-icons/fa';

const Debts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const debts = [
    { patient: 'Ahmed Hassan', total: 5000, paid: 3000, balance: 2000, lastPayment: '2026-08-10', status: 'Overdue' },
    { patient: 'John Ochieng', total: 3000, paid: 0, balance: 3000, lastPayment: 'Never', status: 'Critical' },
    { patient: 'Grace Muthoni', total: 12000, paid: 10000, balance: 2000, lastPayment: '2026-08-12', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Debt Management</h1>
          <p className="text-gray-500">Track and manage patient debts</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-primary flex items-center space-x-2">
            <FaWallet />
            <span>Record Payment</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500">Total Outstanding</p>
          <p className="text-2xl font-bold text-red-600">KSh 125,000</p>
          <p className="text-xs text-gray-500 mt-1">Across 23 patients</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500">Overdue Debts</p>
          <p className="text-2xl font-bold text-orange-600">KSh 45,000</p>
          <p className="text-xs text-gray-500 mt-1">8 patients overdue</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500">Critical Debts</p>
          <p className="text-2xl font-bold text-red-600">KSh 15,000</p>
          <p className="text-xs text-gray-500 mt-1">3 patients critical</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients with debts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">All Status</option>
            <option value="overdue">Overdue</option>
            <option value="pending">Pending</option>
            <option value="critical">Critical</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Bill</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount Paid</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Payment</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {debts.map((debt, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{debt.patient}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">KSh {debt.total}</td>
                  <td className="px-4 py-3 text-sm text-green-600">KSh {debt.paid}</td>
                  <td className="px-4 py-3 font-semibold text-red-600">KSh {debt.balance}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{debt.lastPayment}</td>
                  <td className="px-4 py-3">
                    <span className={`badge ${
                      debt.status === 'Critical' ? 'badge-danger' :
                      debt.status === 'Overdue' ? 'badge-warning' :
                      'badge-info'
                    }`}>
                      {debt.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="btn-primary text-sm flex items-center space-x-1">
                      <FaMoneyBillWave />
                      <span>Pay</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Debts;
