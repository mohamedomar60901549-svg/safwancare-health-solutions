import React, { useState } from 'react';
import { FaSearch, FaEye, FaStethoscope, FaPrescription, FaHistory, FaPhone, FaEnvelope } from 'react-icons/fa';

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const patients = [
    { 
      id: 1, 
      name: 'Ahmed Hassan', 
      phone: '+254 700 000 100', 
      email: 'ahmed@example.com',
      diagnosis: 'Malaria',
      lastVisit: '2026-08-15',
      status: 'In Treatment',
      history: ['Malaria (2024)', 'Typhoid (2023)']
    },
    { 
      id: 2, 
      name: 'Mary Wanjiru', 
      phone: '+254 700 000 101', 
      email: 'mary@example.com',
      diagnosis: 'Hypertension',
      lastVisit: '2026-08-14',
      status: 'Stable',
      history: ['Hypertension (2022)', 'Diabetes (2023)']
    },
    { 
      id: 3, 
      name: 'Peter Ochieng', 
      phone: '+254 700 000 102', 
      email: 'peter@example.com',
      diagnosis: 'Diabetes Type 2',
      lastVisit: '2026-08-13',
      status: 'Under Observation',
      history: ['Diabetes Type 2 (2024)']
    },
  ];

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Patients</h1>
          <p className="text-gray-500">Manage your patients and treatment plans</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients by name or diagnosis..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">All Status</option>
            <option value="In Treatment">In Treatment</option>
            <option value="Stable">Stable</option>
            <option value="Under Observation">Under Observation</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <div key={patient.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-semibold text-lg">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                    <p className="text-sm text-gray-500">ID: #{patient.id.toString().padStart(4, '0')}</p>
                  </div>
                </div>
                <span className={`badge ${
                  patient.status === 'In Treatment' ? 'badge-info' :
                  patient.status === 'Stable' ? 'badge-success' :
                  'badge-warning'
                }`}>
                  {patient.status}
                </span>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <FaPhone className="w-3 h-3 mr-2" />
                  {patient.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaEnvelope className="w-3 h-3 mr-2" />
                  {patient.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaStethoscope className="w-3 h-3 mr-2" />
                  Diagnosis: <span className="font-medium ml-1">{patient.diagnosis}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaHistory className="w-3 h-3 mr-2" />
                  Last Visit: {patient.lastVisit}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex space-x-2">
                <button className="flex-1 btn-primary text-sm flex items-center justify-center space-x-1">
                  <FaEye />
                  <span>View</span>
                </button>
                <button className="flex-1 btn-secondary text-sm flex items-center justify-center space-x-1">
                  <FaPrescription />
                  <span>Prescribe</span>
                </button>
              </div>

              {patient.history && (
                <div className="mt-3 pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Medical History:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {patient.history.map((item, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientManagement;
