import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import MainLayout from './components/Layout/MainLayout';

// Auth Pages
import Login from './pages/Login';

// Admin Pages
import AdminDashboard from './pages/Admin/AdminDashboard';
import Users from './pages/Admin/Users';
import Settings from './pages/Admin/Settings';

// Doctor Pages
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import PatientManagement from './pages/Doctor/PatientManagement';
import TreatmentForm from './pages/Doctor/TreatmentForm';
import DoctorAdmissions from './pages/Doctor/Admissions';

// Receptionist Pages
import ReceptionistDashboard from './pages/Receptionist/ReceptionistDashboard';
import Patients from './pages/Receptionist/Patients';
import Admissions from './pages/Receptionist/Admissions';
import Pharmacy from './pages/Receptionist/Pharmacy';
import Stock from './pages/Receptionist/Stock';
import Billing from './pages/Receptionist/Billing';
import Payments from './pages/Receptionist/Payments';
import Debts from './pages/Receptionist/Debts';
import Suppliers from './pages/Receptionist/Suppliers';
import Reports from './pages/Receptionist/Reports';
import Dashboard from './pages/Dashboard';

// Protected Route Component
const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      }>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* Admin Routes */}
        <Route path="admin/dashboard" element={
          <PrivateRoute allowedRoles={['ADMIN']}>
            <AdminDashboard />
          </PrivateRoute>
        } />
        <Route path="users" element={
          <PrivateRoute allowedRoles={['ADMIN']}>
            <Users />
          </PrivateRoute>
        } />
        <Route path="settings" element={
          <PrivateRoute allowedRoles={['ADMIN']}>
            <Settings />
          </PrivateRoute>
        } />

        {/* Doctor Routes */}
        <Route path="doctor/dashboard" element={
          <PrivateRoute allowedRoles={['DOCTOR']}>
            <DoctorDashboard />
          </PrivateRoute>
        } />
        <Route path="doctor/patients" element={
          <PrivateRoute allowedRoles={['DOCTOR']}>
            <PatientManagement />
          </PrivateRoute>
        } />
        <Route path="doctor/treatments/new" element={
          <PrivateRoute allowedRoles={['DOCTOR']}>
            <TreatmentForm />
          </PrivateRoute>
        } />
        <Route path="doctor/admissions" element={
          <PrivateRoute allowedRoles={['DOCTOR']}>
            <DoctorAdmissions />
          </PrivateRoute>
        } />

        {/* Receptionist Routes */}
        <Route path="receptionist/dashboard" element={
          <PrivateRoute allowedRoles={['RECEPTIONIST']}>
            <ReceptionistDashboard />
          </PrivateRoute>
        } />
        <Route path="receptionist/patients" element={
          <PrivateRoute allowedRoles={['RECEPTIONIST']}>
            <Patients />
          </PrivateRoute>
        } />
        <Route path="receptionist/admissions" element={
          <PrivateRoute allowedRoles={['RECEPTIONIST']}>
            <Admissions />
          </PrivateRoute>
        } />
        <Route path="receptionist/pharmacy" element={
          <PrivateRoute allowedRoles={['RECEPTIONIST']}>
            <Pharmacy />
          </PrivateRoute>
        } />
        <Route path="receptionist/stock" element={
          <PrivateRoute allowedRoles={['RECEPTIONIST']}>
            <Stock />
          </PrivateRoute>
        } />
        <Route path="receptionist/billing" element={
          <PrivateRoute allowedRoles={['RECEPTIONIST']}>
            <Billing />
          </PrivateRoute>
        } />
        <Route path="receptionist/payments" element={
          <PrivateRoute allowedRoles={['RECEPTIONIST']}>
            <Payments />
          </PrivateRoute>
        } />
        <Route path="receptionist/debts" element={
          <PrivateRoute allowedRoles={['RECEPTIONIST']}>
            <Debts />
          </PrivateRoute>
        } />
        <Route path="receptionist/suppliers" element={
          <PrivateRoute allowedRoles={['RECEPTIONIST']}>
            <Suppliers />
          </PrivateRoute>
        } />
        <Route path="receptionist/reports" element={
          <PrivateRoute allowedRoles={['RECEPTIONIST']}>
            <Reports />
          </PrivateRoute>
        } />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
