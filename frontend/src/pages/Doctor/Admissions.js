import React, { useState } from 'react';
import { FaSearch, FaHospital, FaBed, FaUserMd, FaCalendarAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const Admissions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const admissions = [
    { 
      id: 'AD-2026-0001',
      patient: 'Ahmed Hassan',
      room: '101',
      bed: 'A',
      admissionDate: '2026-08-10',
      diagnosis: 'Malaria',
      status: 'Active',
      doctor: 'Dr. James Mwangi'
    },
    { 
      id: 'AD-2026-0002',
      patient: 'Mary Wanjiru',
      room: '203',
      bed: 'B',
      admissionDate: '2026-08-12',
      diagnosis: 'Hypertension',
      status: 'Active',
      doctor: 'Dr. James Mwangi'
    },
    { 
      id: 'AD-2026-0003',
      patient: 'Peter Ochieng',
      room: '105',
      bed: 'C',
      admissionDate: '2026-08-08',
      diagnosis: 'Diabetes Type 2',
      status: 'Discharged',
      doctor: 'Dr. James Mwangi'
    },
  ];

  const filteredAdmissions = admissions.filter(a => 
    a.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeAdmissions = admissions.filter(a => a.status === 'Active');
  const dischargedAdmissions = admissions.filter(a => a.status === 'Discharged');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admissions</h1>
          <p className="text-gray-500">View and manage patient admissions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Admissions</p>
              <p className="text-2xl font-bold text-gray-900">{admissions.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FaHospital className="text-2xl text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Admissions</p>
              <p className="text-2xl font-bold text-green-600">{activeAdmissions.length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FaClock className="text-2xl text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Discharged</p>
              <p className="text-2xl font-bold text-gray-600">{dischargedAdmissions.length}</p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <FaCheckCircle className="text-2xl text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search admissions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Discharged">Discharged</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Admission</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room/Bed</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Diagnosis</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAdmissions.map((admission) => (
                <tr key={admission.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <span className="font-medium text-gray-900">{admission.id}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-700 font-semibold text-sm">
                          {admission.patient.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-900">{admission.patient}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <FaBed className="text-gray-400" />
                      <span className="text-sm text-gray-600">Room {admission.room} / Bed {admission.bed}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{admission.admissionDate}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{admission.diagnosis}</td>
                  <td className="px-4 py-3">
                    <span className={`badge ${admission.status === 'Active' ? 'badge-success' : 'badge-gray'}`}>
                      {admission.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-primary-600 hover:text-primary-800 font-medium text-sm">
                      View Details
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

export default Admissions;
