import React, { useState } from 'react';
import { FaSearch, FaUserPlus, FaEdit, FaEye, FaTrash, FaPhone, FaEnvelope } from 'react-icons/fa';

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const patients = [
    { id: 1, name: 'Ahmed Hassan', phone: '+254 700 000 100', email: 'ahmed@example.com', gender: 'Male', age: 38, status: 'Active' },
    { id: 2, name: 'Mary Wanjiru', phone: '+254 700 000 101', email: 'mary@example.com', gender: 'Female', age: 42, status: 'Active' },
    { id: 3, name: 'John Ochieng', phone: '+254 700 000 102', email: 'john@example.com', gender: 'Male', age: 55, status: 'Discharged' },
    { id: 4, name: 'Grace Muthoni', phone: '+254 700 000 103', email: 'grace@example.com', gender: 'Female', age: 29, status: 'Active' },
  ];

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.phone.includes(searchTerm) ||
    p.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Patient Management</h1>
          <p className="text-gray-500">Manage patient records and information</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <FaUserPlus />
          <span>Register New Patient</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients by name, phone, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="discharged">Discharged</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-700 font-semibold">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{patient.name}</p>
                        <p className="text-xs text-gray-500">ID: #{patient.id.toString().padStart(4, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <FaPhone className="w-3 h-3 mr-2" />
                        {patient.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FaEnvelope className="w-3 h-3 mr-2" />
                        {patient.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{patient.gender}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{patient.age} years</td>
                  <td className="px-4 py-3">
                    <span className={`badge ${patient.status === 'Active' ? 'badge-success' : 'badge-gray'}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="View">
                        <FaEye />
                      </button>
                      <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition" title="Edit">
                        <FaEdit />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Delete">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">Showing {filteredPatients.length} of {patients.length} patients</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 bg-primary-600 text-white rounded-lg text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
