import React, { useState } from 'react';
import { FaSave, FaPlus, FaTrash, FaPrescription, FaStethoscope, FaNotesMedical } from 'react-icons/fa';

const TreatmentForm = () => {
  const [treatment, setTreatment] = useState({
    patientId: '',
    symptoms: '',
    diagnosis: '',
    treatmentNotes: '',
    procedures: '',
    followUp: '',
  });

  const [prescriptions, setPrescriptions] = useState([
    { medicine: '', quantity: '', dosage: '', frequency: '', duration: '' }
  ]);

  const handleAddPrescription = () => {
    setPrescriptions([...prescriptions, { medicine: '', quantity: '', dosage: '', frequency: '', duration: '' }]);
  };

  const handleRemovePrescription = (index) => {
    const newPrescriptions = prescriptions.filter((_, i) => i !== index);
    setPrescriptions(newPrescriptions);
  };

  const handlePrescriptionChange = (index, field, value) => {
    const updated = [...prescriptions];
    updated[index][field] = value;
    setPrescriptions(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Treatment:', treatment);
    console.log('Prescriptions:', prescriptions);
    alert('Treatment saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create Treatment Plan</h1>
          <p className="text-gray-500">Record patient diagnosis and prescribe medication</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaStethoscope className="mr-2 text-primary-600" />
            Patient Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="">Select patient...</option>
                <option value="1">Ahmed Hassan</option>
                <option value="2">Mary Wanjiru</option>
                <option value="3">Peter Ochieng</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Admission</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="">Select admission...</option>
                <option value="1">AD-2026-0001</option>
                <option value="2">AD-2026-0002</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaNotesMedical className="mr-2 text-primary-600" />
            Diagnosis & Treatment
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Symptoms</label>
              <textarea
                value={treatment.symptoms}
                onChange={(e) => setTreatment({...treatment, symptoms: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows="3"
                placeholder="Describe the patient's symptoms..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis</label>
              <input
                type="text"
                value={treatment.diagnosis}
                onChange={(e) => setTreatment({...treatment, diagnosis: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter diagnosis..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Treatment Notes</label>
              <textarea
                value={treatment.treatmentNotes}
                onChange={(e) => setTreatment({...treatment, treatmentNotes: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows="3"
                placeholder="Detailed treatment notes..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Procedures</label>
              <input
                type="text"
                value={treatment.procedures}
                onChange={(e) => setTreatment({...treatment, procedures: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Any procedures performed..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Follow-up Instructions</label>
              <textarea
                value={treatment.followUp}
                onChange={(e) => setTreatment({...treatment, followUp: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows="2"
                placeholder="Follow-up instructions..."
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <FaPrescription className="mr-2 text-primary-600" />
              Prescriptions
            </h2>
            <button type="button" onClick={handleAddPrescription} className="btn-primary text-sm flex items-center space-x-1">
              <FaPlus />
              <span>Add Medicine</span>
            </button>
          </div>

          {prescriptions.map((prescription, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Medicine</label>
                  <input
                    type="text"
                    value={prescription.medicine}
                    onChange={(e) => handlePrescriptionChange(index, 'medicine', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Medicine name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                  <input
                    type="number"
                    value={prescription.quantity}
                    onChange={(e) => handlePrescriptionChange(index, 'quantity', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dosage</label>
                  <input
                    type="text"
                    value={prescription.dosage}
                    onChange={(e) => handlePrescriptionChange(index, 'dosage', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., 2 tablets"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                  <input
                    type="text"
                    value={prescription.frequency}
                    onChange={(e) => handlePrescriptionChange(index, 'frequency', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., 2 times/day"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <input
                    type="text"
                    value={prescription.duration}
                    onChange={(e) => handlePrescriptionChange(index, 'duration', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., 5 days"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={() => handleRemovePrescription(index)}
                    className="btn-danger text-sm flex items-center space-x-1"
                  >
                    <FaTrash />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex space-x-3">
          <button type="submit" className="btn-primary flex items-center space-x-2 px-6 py-3">
            <FaSave />
            <span>Save Treatment</span>
          </button>
          <button type="reset" className="btn-secondary px-6 py-3">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default TreatmentForm;
