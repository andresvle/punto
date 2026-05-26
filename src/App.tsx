import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Conocenos from './pages/Conocenos';
import Upload from './pages/Upload';
import ThoughtManagement from './pages/ThoughtManagement';
import EmotionalManagement from './pages/EmotionalManagement';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import { useAuth } from './context/AuthContext';

import React from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="conocenos" element={<Conocenos />} />
          <Route path="personalizacion" element={<Upload />} />
          <Route path="gestion-pensamientos" element={<ThoughtManagement />} />
          <Route path="gestion-emocional" element={<EmotionalManagement />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="pago" element={<Payment />} />
          <Route path="confirmacion" element={<Confirmation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
