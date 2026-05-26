import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import './OrderFlow.css';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    numeroTarjeta: '',
    nombreTitular: '',
    fechaExpiracion: '',
    cvv: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentData.numeroTarjeta && paymentData.nombreTitular && paymentData.fechaExpiracion && paymentData.cvv) {
      // Simulate payment delay
      setTimeout(() => {
        navigate('/confirmacion');
      }, 1000);
    } else {
      alert('Por favor completa todos los datos de la tarjeta.');
    }
  };

  return (
    <div className="order-page">
      <div className="container">
        <div className="order-card shadow-md">
          <div className="payment-header">
            <CreditCard size={32} color="var(--primary)" />
            <h2 className="order-title mb-0">Pago Seguro</h2>
          </div>
          <p className="order-subtitle">Ingresa los datos de tu tarjeta de crédito o débito.</p>
          
          <form onSubmit={handlePayment} className="order-form">
            <div className="form-group">
              <label>Número de Tarjeta *</label>
              <input 
                type="text" 
                name="numeroTarjeta"
                className="input-field" 
                value={paymentData.numeroTarjeta}
                onChange={handleChange}
                placeholder="0000 0000 0000 0000"
                maxLength={19}
                required
              />
            </div>
            <div className="form-group">
              <label>Nombre del Titular *</label>
              <input 
                type="text" 
                name="nombreTitular"
                className="input-field" 
                value={paymentData.nombreTitular}
                onChange={handleChange}
                placeholder="Juan Pérez"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group half-width">
                <label>Fecha Exp. *</label>
                <input 
                  type="text" 
                  name="fechaExpiracion"
                  className="input-field" 
                  value={paymentData.fechaExpiracion}
                  onChange={handleChange}
                  placeholder="MM/AA"
                  maxLength={5}
                  required
                />
              </div>
              <div className="form-group half-width">
                <label>CVV *</label>
                <input 
                  type="password" 
                  name="cvv"
                  className="input-field" 
                  value={paymentData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  maxLength={4}
                  required
                />
              </div>
            </div>
            
            <div className="order-actions mt-4">
              <button type="button" className="btn-outline" onClick={() => navigate(-1)}>Volver</button>
              <button type="submit" className="btn-secondary">Pagar pedido</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
