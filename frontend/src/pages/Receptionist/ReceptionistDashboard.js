import React, { useState, useEffect } from 'react';
import { 
  FaUserPlus, FaHospital, FaMoneyBillWave, FaPills, 
  FaUsers, FaChartLine, FaArrowUp, FaArrowDown,
  FaClock, FaCalendarAlt, FaPrescription, FaFileInvoice 
} from 'react-icons/fa';
import StatsCard from '../../components/Common/StatsCard';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ReceptionistDashboard = () => {
  const [stats, setStats] = useState({
    todayPatients: 12,
    currentAdmissions: 8,
    todayRevenue: 45000,
    lowStockCount: 3,
    totalPatients: 156,
    pendingBills: 23,
    todayAppointments: 15,
    totalMedicines: 234,
  });

  const revenueData = [
    { day: 'Mon', amount: 12000 },
    { day: 'Tue', amount: 8500 },
    { day: 'Wed', amount: 15000 },
    { day: 'Thu', amount: 9800 },
    { day: 'Fri', amount: 21000 },
    { day: 'Sat', amount: 18000 },
    { day: 'Sun', amount: 14000 },
  ];

  const admissionData = [
    { day: 'Mon', admissions: 3 },
    { day: 'Tue', admissions: 2 },
    { day: 'Wed', admissions: 5 },
    { day: 'Thu', admissions: 4 },
    { day: 'Fri', admissions: 6 },
    { day: 'Sat', admissions: 2 },
    { day: 'Sun', admissions: 1 },
  ];

  const patientTypeData = [
    { name: 'Outpatient', value: 65 },
    { name: 'Inpatient', value: 25 },
    { name: 'Emergency', value: 10 },
  ];

  const COLORS = ['#3b82f6', '#22c55e', '#ef4444'];

  const recentPatients = [
    { name: 'Ahmed Hassan', time: '2 min ago', type: 'New Registration', status: 'Active' },
    { name: 'Mary Wanjiru', time: '15 min ago', type: 'Admission', status: 'Active' },
    { name: 'John Ochieng', time: '45 min ago', type: 'Discharge', status: 'Discharged' },
    { name: 'Grace Muthoni', time: '1 hour ago', type: 'New Registration', status: 'Active' },
    { name: 'Peter Kamau', time: '2 hours ago', type: 'Admission', status: 'Active' },
  ];

  const lowStockMedicines = [
    { name: 'Paracetamol 500mg', stock: 5, threshold: 50, category: 'Analgesic' },
    { name: 'Amoxicillin 500mg', stock: 8, threshold: 30, category: 'Antibiotic' },
    { name: 'Cetrizine 10mg', stock: 3, threshold: 40, category: 'Antihistamine' },
  ];

  const upcomingAppointments = [
    { patient: 'Sarah Wanjiku', time: '10:30 AM', doctor: 'Dr. James', type: 'Checkup' },
    { patient: 'Michael Oduor', time: '11:00 AM', doctor: 'Dr. Sarah', type: 'Follow-up' },
    { patient: 'Faith Akinyi', time: '02:00 PM', doctor: 'Dr. James', type: 'Consultation' },
  ];

  const statCards = [
    { title: "Today's Patients", value: stats.todayPatients, icon: FaUserPlus, color: 'blue' },
    { title: 'Current Admissions', value: stats.currentAdmissions, icon: FaHospital, color: 'green' },
    { title: "Today's Revenue", value: `KSh ${stats.todayRevenue.toLocaleString()}`, icon: FaMoneyBillWave, color: 'yellow' },
    { title: 'Low Stock Items', value: stats.lowStockCount, icon: FaPills, color: 'red' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Receptionist Dashboard</h1>
          <p className="text-gray-500">Welcome back, Sarah! Here's your daily overview.</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-primary flex items-center space-x-2">
            <FaUserPlus />
            <span>Quick Register</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <FaFileInvoice />
            <span>New Bill</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Patients</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalPatients}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FaUsers className="text-2xl text-blue-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-green-600 flex items-center">
              <FaArrowUp className="mr-1" /> 5%
            </span>
            <span className="text-gray-500 ml-2">this week</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Bills</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.pendingBills}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <FaFileInvoice className="text-2xl text-yellow-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-red-600 flex items-center">
              <FaArrowUp className="mr-1" /> 3
            </span>
            <span className="text-gray-500 ml-2">need attention</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Today's Appointments</p>
              <p className="text-2xl font-bold text-purple-600">{stats.todayAppointments}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FaCalendarAlt className="text-2xl text-purple-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-green-600 flex items-center">
              <FaArrowUp className="mr-1" /> 2
            </span>
            <span className="text-gray-500 ml-2">more than yesterday</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Medicines</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalMedicines}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FaPills className="text-2xl text-green-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-green-600 flex items-center">
              <FaArrowUp className="mr-1" /> 12
            </span>
            <span className="text-gray-500 ml-2">in stock</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Revenue</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip formatter={(value) => `KSh ${value.toLocaleString()}`} />
              <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Admissions</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={admissionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="admissions" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentPatients.map((patient, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    patient.status === 'Active' ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <span className={`font-semibold text-sm ${
                      patient.status === 'Active' ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{patient.name}</p>
                    <p className="text-sm text-gray-500">{patient.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`badge ${
                    patient.status === 'Active' ? 'badge-success' : 'badge-gray'
                  }`}>
                    {patient.status}
                  </span>
                  <span className="text-xs text-gray-400">{patient.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Patient Distribution</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={patientTypeData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {patientTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-4 mt-2">
            {patientTypeData.map((item, index) => (
              <div key={index} className="flex items-center space-x-1">
                <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index] }}></div>
                <span className="text-xs text-gray-600">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">⚠️ Low Stock Alert</h2>
          {lowStockMedicines.length > 0 ? (
            <div className="space-y-3">
              {lowStockMedicines.map((med) => (
                <div key={med.name} className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{med.name}</p>
                    <p className="text-sm text-gray-500">{med.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-red-600 font-bold text-lg">{med.stock}</span>
                    <p className="text-xs text-gray-500">Min: {med.threshold}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">All medicines are well stocked ✅</p>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
          <div className="space-y-3">
            {upcomingAppointments.map((appt, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-blue-50 border border-blue-100 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaClock className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{appt.patient}</p>
                    <p className="text-sm text-gray-500">{appt.doctor} • {appt.type}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-blue-600">{appt.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceptionistDashboard;
