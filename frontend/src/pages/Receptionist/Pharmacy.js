import React, { useState } from 'react';
import { FaPlus, FaSearch, FaEdit, FaEye, FaPills, FaBox } from 'react-icons/fa';

const Pharmacy = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const medicines = [
    { id: 1, name: 'Paracetamol 500mg', category: 'Analgesic', stock: 45, price: 10, expiry: '2026-12-31', status: 'In Stock' },
    { id: 2, name: 'Amoxicillin 500mg', category: 'Antibiotic', stock: 28, price: 30, expiry: '2026-10-15', status: 'Low Stock' },
    { id: 3, name: 'Cetrizine 10mg', category: 'Antihistamine', stock: 3, price: 15, expiry: '2026-08-20', status: 'Critical' },
    { id: 4, name: 'Omeprazole 20mg', category: 'Antacid', stock: 35, price: 25, expiry: '2026-11-30', status: 'In Stock' },
    { id: 5, name: 'Ibuprofen 400mg', category: 'Anti-inflammatory', stock: 42, price: 14, expiry: '2026-09-15', status: 'In Stock' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'In Stock': return 'badge-success';
      case 'Low Stock': return 'badge-warning';
      case 'Critical': return 'badge-danger';
      default: return 'badge-gray';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pharmacy Management</h1>
          <p className="text-gray-500">Manage medicines and prescriptions</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-primary flex items-center space-x-2">
            <FaPlus />
            <span>Add Medicine</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <FaBox />
            <span>Stock Purchase</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500">Total Medicines</p>
          <p className="text-2xl font-bold text-gray-900">156</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500">Low Stock</p>
          <p className="text-2xl font-bold text-yellow-600">12</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500">Critical Stock</p>
          <p className="text-2xl font-bold text-red-600">3</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-500">Total Value</p>
          <p className="text-2xl font-bold text-primary-600">KSh 45,000</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">All Categories</option>
            <option value="Analgesic">Analgesic</option>
            <option value="Antibiotic">Antibiotic</option>
            <option value="Antihistamine">Antihistamine</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Medicine</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price (KSh)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expiry</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {medicines.map((med) => (
                <tr key={med.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <FaPills className="text-primary-600" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{med.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{med.category}</td>
                  <td className="px-4 py-3">
                    <span className={`font-semibold ${
                      med.stock <= 5 ? 'text-red-600' :
                      med.stock <= 20 ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {med.stock}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">KSh {med.price}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{med.expiry}</td>
                  <td className="px-4 py-3">
                    <span className={`badge ${getStatusColor(med.status)}`}>
                      {med.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <FaEye />
                      </button>
                      <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg">
                        <FaEdit />
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

export default Pharmacy;
