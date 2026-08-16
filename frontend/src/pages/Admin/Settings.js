import React from 'react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          <div>
            <label className="label-field">Hospital Name</label>
            <input type="text" className="input-field" value="SAFWANCARE HEALTH SOLUTIONS" />
          </div>
          <div>
            <label className="label-field">Email</label>
            <input type="email" className="input-field" value="info@safwancare.com" />
          </div>
          <div>
            <label className="label-field">Phone</label>
            <input type="text" className="input-field" value="+254 700 000 000" />
          </div>
          <button className="btn-primary">Save Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
