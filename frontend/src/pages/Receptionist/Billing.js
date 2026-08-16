import React, { useState } from 'react';
import { FaSearch, FaFileInvoice, FaPrint, FaDownload, FaEye } from 'react-icons/fa';

const Billing = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const bills = [
    { id: 'INV-2026-001', patient: 'Ahmed Hassan', date: '2026-08-15', total: 5000, paid: 3000, status: 'Partial' },
    { id: 'INV-2026-002', patient: 'Mary Wanjiru', date: '2026-08-15', total: 7500, paid: 7500, status: 'Paid' },
    { id: 'INV-2026-003', patient: 'John Ochieng', date: '2026-08-14', total: 3000, paid: 0, status: 'Unpaid' },
    { id: 'INV-2026-004', patient: 'Grace Muthoni', date: '2026-08-14', total: 12000, paid: 10000, status: 'Partial' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Paid': return 'badge-success';
      case 'Partial': return 'badge-warning';
      case 'Unpaid': return 'badge-danger';
      default: return 'badge-gray';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing</h1>
          <p className="text-gray-500">Manage patient invoices and payments</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <FaFileInvoice />
          <span>Create Invoice</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500">Total Bills</p>
          <p className="text-2xl font-bold text-gray-900">156</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-2xl font-bold text-green-600">KSh 450,000</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500">Outstanding</p>
          <p className="text-2xl font-bold text-red-600">KSh 125,000</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500">Today's Sales</p>
          <p className="text-2xl font-bold text-primary-600">KSh 45,000</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search invoices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">All Status</option>
            <option value="paid">Paid</option>
            <option value="partial">Partial</option>
            <option value="unpaid">Unpaid</option>
          </select>
          <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Paid</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bills.map((bill) => (
                <tr key={bill.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <span className="font-medium text-gray-900">{bill.id}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{bill.patient}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{bill.date}</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">KSh {bill.total}</td>
                  <td className="px-4 py-3 text-green-600">KSh {bill.paid}</td>
                  <td className="px-4 py-3 font-semibold text-red-600">KSh {bill.total - bill.paid}</td>
                  <td className="px-4 py-3">
                    <span className={`badge ${getStatusColor(bill.status)}`}>
                      {bill.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <FaEye />
                      </button>
                      <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg">
                        <FaPrint />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                        <FaDownload />
                      </button>
                    </div>
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

export default Billing;
