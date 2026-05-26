import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './OrderFlow.css';

interface ShippingData {
  nombre: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  infoAdicional?: string;
}

const Confirmation = () => {
  const { user } = useAuth();
  
  const [shippingData] = useState<ShippingData | null>(() => {
    const shipping = localStorage.getItem('punto_shipping');
    return shipping ? JSON.parse(shipping) : null;
  });
  
  const [fileName] = useState<string>(() => {
    return localStorage.getItem('punto_file') || '';
  });

  return (
    <div className="order-page">
      <div className="container">
        <div className="order-card shadow-md text-center">
          <CheckCircle size={64} color="#6BA424" className="mx-auto mb-4" />
          <h2 className="order-title text-green">¡Pago Exitoso!</h2>
          <p className="order-subtitle">Tu pedido ha sido procesado correctamente.</p>
          
          <div className="summary-box">
            <h3>Resumen del Pedido</h3>
            <div className="summary-details">
              <div className="summary-item">
                <span className="summary-label">Archivo seleccionado:</span>
                <span className="summary-value font-medium text-primary">{fileName || 'Sin archivo'}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Cliente:</span>
                <span className="summary-value">{user?.name || shippingData?.nombre || 'Usuario'}</span>
              </div>
              {shippingData && (
                <>
                  <div className="summary-item">
                    <span className="summary-label">Dirección de entrega:</span>
                    <span className="summary-value">{shippingData.direccion}, {shippingData.ciudad}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Teléfono de contacto:</span>
                    <span className="summary-value">{shippingData.telefono}</span>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="mt-4">
            <p className="mb-4">Nuestro equipo comenzará a trabajar en tu filmina. Te enviaremos actualizaciones a tu correo electrónico.</p>
            <Link to="/" className="btn-secondary">Volver al Inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
