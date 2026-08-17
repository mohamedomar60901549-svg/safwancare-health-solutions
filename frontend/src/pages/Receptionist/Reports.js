import React, { useState } from 'react';
import { 
  FaFileAlt, FaChartBar, FaChartPie, FaChartLine, 
  FaDownload, FaPrint, FaCalendarAlt, FaUsers, 
  FaPills, FaMoneyBillWave, FaEye
} from 'react-icons/fa';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, Legend, AreaChart, Area 
} from 'recharts';

const Reports = () => {
  const [dateRange, setDateRange] = useState('today');

  // Revenue Data
  const revenueData = [
    { day: 'Mon', revenue: 12000, patients: 12 },
    { day: 'Tue', revenue: 8500, patients: 8 },
    { day: 'Wed', revenue: 15000, patients: 15 },
    { day: 'Thu', revenue: 9800, patients: 10 },
    { day: 'Fri', revenue: 21000, patients: 18 },
    { day: 'Sat', revenue: 18000, patients: 7 },
    { day: 'Sun', revenue: 14000, patients: 5 },
  ];

  // Patient Distribution
  const patientDistribution = [
    { name: 'Outpatient', value: 65, color: '#3b82f6' },
    { name: 'Inpatient', value: 25, color: '#22c55e' },
    { name: 'Emergency', value: 10, color: '#ef4444' },
  ];

  // Monthly Revenue Data
  const monthlyRevenue = [
    { month: 'Jan', revenue: 35000, expenses: 20000 },
    { month: 'Feb', revenue: 42000, expenses: 22000 },
    { month: 'Mar', revenue: 38000, expenses: 18000 },
    { month: 'Apr', revenue: 48000, expenses: 25000 },
    { month: 'May', revenue: 52000, expenses: 28000 },
    { month: 'Jun', revenue: 45000, expenses: 23000 },
  ];

  // Top Medicines
  const topMedicines = [
    { name: 'Paracetamol', sold: 450, revenue: 4500 },
    { name: 'Amoxicillin', sold: 320, revenue: 9600 },
    { name: 'Cetrizine', sold: 280, revenue: 4200 },
    { name: 'Omeprazole', sold: 200, revenue: 5000 },
    { name: 'Ibuprofen', sold: 180, revenue: 2520 },
  ];

  const COLORS = ['#3b82f6', '#22c55e', '#ef4444', '#f59e0b', '#8b5cf6'];

  const reportCards = [
    { 
      title: 'Patient Reports', 
      icon: FaUsers, 
      color: 'blue',
      description: 'New patients, admissions, discharges',
      stats: '124 new patients this month',
      chart: 'patients'
    },
    { 
      title: 'Financial Reports', 
      icon: FaMoneyBillWave, 
      color: 'green',
      description: 'Revenue, payments, debts',
      stats: 'KSh 450,000 revenue',
      chart: 'financial'
    },
    { 
      title: 'Pharmacy Reports', 
      icon: FaPills, 
      color: 'purple',
      description: 'Stock, sales, prescriptions',
      stats: '1,245 items sold',
      chart: 'pharmacy'
    },
    { 
      title: 'Revenue Report', 
      icon: FaChartLine, 
      color: 'yellow',
      description: 'Daily, weekly, monthly revenue',
      stats: '+15% growth',
      chart: 'revenue'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports Dashboard</h1>
          <p className="text-gray-500">Generate and view comprehensive reports with charts</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center space-x-2">
            <FaCalendarAlt />
            <span>Date Range</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <FaDownload />
            <span>Export</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <FaPrint />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Date Range Buttons */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex gap-4 mb-6 flex-wrap">
          {['Today', 'This Week', 'This Month', 'This Year', 'Custom'].map((range) => (
            <button
              key={range}
              onClick={() => setDateRange(range.toLowerCase().replace(' ', '-'))}
              className={`px-4 py-2 rounded-lg transition ${
                dateRange === range.toLowerCase().replace(' ', '-')
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaChartBar className="mr-2 text-primary-600" />
            Daily Revenue
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip formatter={(value) => `KSh ${value.toLocaleString()}`} />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-2 text-center text-sm text-gray-500">
            Total Revenue: KSh {revenueData.reduce((sum, d) => sum + d.revenue, 0).toLocaleString()}
          </div>
        </div>

        {/* Daily Patients Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaChartLine className="mr-2 text-primary-600" />
            Daily Patient Visits
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="patients" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-2 text-center text-sm text-gray-500">
            Total Patients: {revenueData.reduce((sum, d) => sum + d.patients, 0)}
          </div>
        </div>

        {/* Patient Distribution Pie Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaChartPie className="mr-2 text-primary-600" />
            Patient Distribution
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={patientDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {patientDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 text-center text-sm text-gray-500">
            Total Patients: 100%
          </div>
        </div>

        {/* Monthly Revenue & Expenses */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaChartBar className="mr-2 text-primary-600" />
            Monthly Revenue vs Expenses
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `KSh ${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Revenue" />
              <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Medicines */}
        <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaPills className="mr-2 text-primary-600" />
            Top Selling Medicines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topMedicines.map((med, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-800">{med.name}</p>
                    <p className="text-sm text-gray-500">Units Sold: {med.sold}</p>
                  </div>
                  <span className="text-sm font-semibold text-primary-600">
                    KSh {med.revenue.toLocaleString()}
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 rounded-full h-2 transition-all"
                    style={{ width: `${(med.sold / topMedicines[0].sold) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Export */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <FaDownload className="mr-2 text-primary-600" />
          Quick Export
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition text-center">
            <FaFileAlt className="text-2xl mx-auto text-gray-400" />
            <p className="text-sm text-gray-600 mt-2">Excel</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition text-center">
            <FaFileAlt className="text-2xl mx-auto text-gray-400" />
            <p className="text-sm text-gray-600 mt-2">PDF</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition text-center">
            <FaFileAlt className="text-2xl mx-auto text-gray-400" />
            <p className="text-sm text-gray-600 mt-2">CSV</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition text-center">
            <FaFileAlt className="text-2xl mx-auto text-gray-400" />
            <p className="text-sm text-gray-600 mt-2">JSON</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
