import React, { useState, useEffect } from 'react';
import { FaUserMd, FaStethoscope, FaCalendarCheck, FaHospital, FaClock, FaUserPlus, FaPrescription } from 'react-icons/fa';
import StatsCard from '../../components/Common/StatsCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DoctorDashboard = () => {
  const [stats, setStats] = useState({
    assignedPatients: 12,
    totalTreatments: 45,
    todayTreatments: 3,
    pendingPrescriptions: 2,
  });

  const treatmentData = [
    { day: 'Mon', patients: 5 },
    { day: 'Tue', patients: 3 },
    { day: 'Wed', patients: 7 },
    { day: 'Thu', patients: 4 },
    { day: 'Fri', patients: 6 },
    { day: 'Sat', patients: 2 },
    { day: 'Sun', patients: 1 },
  ];

  const recentPatients = [
    { name: 'Ahmed Hassan', diagnosis: 'Malaria', status: 'In Treatment', time: '10:30 AM' },
    { name: 'Mary Wanjiru', diagnosis: 'Hypertension', status: 'Stable', time: '09:15 AM' },
    { name: 'Peter Ochieng', diagnosis: 'Diabetes Type 2', status: 'Under Observation', time: 'Yesterday' },
    { name: 'Grace Muthoni', diagnosis: 'Pneumonia', status: 'Recovering', time: 'Yesterday' },
  ];

  const upcomingAppointments = [
    { patient: 'John Kamau', time: '11:00 AM', type: 'Follow-up' },
    { patient: 'Sarah Akinyi', time: '02:30 PM', type: 'Initial Consultation' },
    { patient: 'Michael Oduor', time: '04:00 PM', type: 'Lab Results Review' },
  ];

  const statCards = [
    { title: 'Assigned Patients', value: stats.assignedPatients, icon: FaUserMd, color: 'blue' },
    { title: 'Total Treatments', value: stats.totalTreatments, icon: FaStethoscope, color: 'green' },
    { title: "Today's Patients", value: stats.todayTreatments, icon: FaCalendarCheck, color: 'purple' },
    { title: 'Pending Prescriptions', value: stats.pendingPrescriptions, icon: FaPrescription, color: 'yellow' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Doctor Dashboard</h1>
          <p className="text-gray-500">Welcome back, Dr. James! Here's your patient overview.</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-primary flex items-center space-x-2">
            <FaUserPlus />
            <span>Quick Patient</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <FaPrescription />
            <span>Prescriptions</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Patient Visits</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={treatmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="patients" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
          <div className="space-y-3">
            {upcomingAppointments.map((appt, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaClock className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{appt.patient}</p>
                    <p className="text-sm text-gray-500">{appt.type}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-purple-600">{appt.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Patients</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Diagnosis</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentPatients.map((patient, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-700 font-semibold text-sm">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="ml-3 font-medium text-gray-900">{patient.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{patient.diagnosis}</td>
                  <td className="px-4 py-3">
                    <span className={`badge ${
                      patient.status === 'In Treatment' ? 'badge-info' :
                      patient.status === 'Stable' ? 'badge-success' :
                      patient.status === 'Under Observation' ? 'badge-warning' :
                      'badge-gray'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">{patient.time}</td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-primary-600 hover:text-primary-800 font-medium text-sm">
                      View Record
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

export default DoctorDashboard;
