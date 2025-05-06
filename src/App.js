import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CheckHealthPage from './pages/CheckHealth';
import AppointmentPage from './pages/AppointmentForm';
import DiseaseDetail from './pages/DiseaseDetails';  // <-- Import this

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/check-health" element={<CheckHealthPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/disease/:name" element={<DiseaseDetail />} />  {/* Dynamic route */}
      </Routes>
    </Router>
  );
}
