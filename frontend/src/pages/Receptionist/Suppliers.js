import React from 'react';

const Suppliers = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Suppliers</h1>
        <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition">Add Supplier</button>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-500">Supplier list will appear here...</p>
      </div>
    </div>
  );
};

export default Suppliers;
