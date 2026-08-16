import React, { useState } from 'react';
import { 
  FaFileAlt, FaChartBar, FaChartPie, FaChartLine, 
  FaDownload, FaPrint, FaCalendarAlt, FaUsers, 
  FaPills, FaMoneyBillWave 
} from 'react-icons/fa';

const Reports = () => {
  const [dateRange, setDateRange] = useState('today');

  const reportCards = [
    { 
      title: 'Patient Reports', 
      icon: FaUsers, 
      color: 'blue',
      description: 'New patients, admissions, discharges',
      stats: '124 new patients this month'
    },
    { 
      title: 'Financial Reports', 
      icon: FaMoneyBillWave, 
      color: 'green',
      description: 'Revenue, payments, debts',
      stats: 'KSh 450,000 revenue'
    },
    { 
      title: 'Pharmacy Reports', 
      icon: FaPills, 
      color: 'purple',
      description: 'Stock, sales, prescriptions',
      stats: '1,245 items sold'
    },
    { 
      title: 'Revenue Report', 
      icon: FaChartLine, 
      color: 'yellow',
      description: 'Daily, weekly, monthly revenue',
      stats: '+15% growth'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-500">Generate and view comprehensive reports</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportCards.map((report) => (
          <div key={report.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-start justify-between">
              <div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${report.color}-100 text-${report.color}-600`}>
                  <report.icon className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-3">{report.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{report.description}</p>
                <p className="text-sm font-medium text-primary-600 mt-2">{report.stats}</p>
              </div>
              <button className="text-primary-600 hover:text-primary-700">
                <FaFileAlt className="text-xl" />
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex space-x-3">
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">View Details</button>
              <button className="text-sm text-gray-500 hover:text-gray-700">Download PDF</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Export</h2>
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
