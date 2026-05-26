import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard } from 'lucide-react';
import './OrderFlow.css';
import blankFilmina from '../assets/blank-filmina.jpg';

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    direccion: '',
    departamento: 'Sin complemento',
    municipio: '',
    barrio: '',
    aptoCasa: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'pse' | 'card'>('card');
  const [giftWrap, setGiftWrap] = useState(false);

  const [fileName] = useState(() => {
    return localStorage.getItem('punto_file') || 'Filmina Personalizada';
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGiftWrapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGiftWrap(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.direccion && formData.municipio && formData.barrio) {
      // Map new Mockup B fields to the format expected by Confirmation page
      const shippingData = {
        nombre: 'Cliente Punto',
        telefono: 'N/A',
        direccion: `${formData.direccion} - Barrio: ${formData.barrio} ${formData.aptoCasa ? `(${formData.aptoCasa})` : ''}`,
        ciudad: `${formData.municipio}, Depto: ${formData.departamento}`,
        infoAdicional: giftWrap ? 'Con empaque de regalo' : ''
      };
      
      localStorage.setItem('punto_shipping', JSON.stringify(shippingData));
      
      if (paymentMethod === 'card') {
        navigate('/pago');
      } else {
        // PSE payment simulation - navigate straight to confirmation
        navigate('/confirmacion');
      }
    } else {
      alert('Por favor completa los campos obligatorios: Dirección, Municipio y Barrio.');
    }
  };

  // Calculations
  const subtotal = 25000;
  const shipping = 8000;
  const giftWrapPrice = giftWrap ? 2000 : 0;
  const total = subtotal + shipping + giftWrapPrice;

  // Format currency
  const formatCurrency = (val: number) => {
    return `$ ${val.toLocaleString('es-CO')} COP`;
  };

  return (
    <div className="checkout-page">
      <div className="container">
        {/* Back Link Button */}
        <button className="back-link-btn" onClick={() => navigate(-1)}>
          <div className="arrow-circle">
            <ArrowLeft size={16} />
          </div>
          <span>Atrás</span>
        </button>

        <h1 className="checkout-main-title">Ingresa la información</h1>

        <form onSubmit={handleSubmit} className="checkout-grid-container">
          {/* Left Column: Delivery and Payment */}
          <div className="checkout-left-col">
            <div className="checkout-card-form shadow-md">
              <h3>Dirección o lugar de entrega</h3>
              
              <div className="form-group mt-3">
                <input 
                  type="text" 
                  name="direccion"
                  className="input-field-custom" 
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Ej:Carrera 79D #123-45 sur"
                  required
                />
              </div>

              <div className="form-row-custom mt-3">
                <div className="form-group half-width-custom">
                  <label>Departamento</label>
                  <input 
                    type="text" 
                    name="departamento"
                    className="input-field-custom" 
                    value={formData.departamento}
                    onChange={handleChange}
                    placeholder="Departamento"
                    required
                  />
                </div>
                <div className="form-group half-width-custom">
                  <label>Municipio</label>
                  <input 
                    type="text" 
                    name="municipio"
                    className="input-field-custom" 
                    value={formData.municipio}
                    onChange={handleChange}
                    placeholder="Municipio"
                    required
                  />
                </div>
              </div>

              <div className="form-group mt-3">
                <label>Barrio</label>
                <input 
                  type="text" 
                  name="barrio"
                  className="input-field-custom" 
                  value={formData.barrio}
                  onChange={handleChange}
                  placeholder="Barrio"
                  required
                />
              </div>

              <div className="form-group mt-3">
                <label>Apto/Casa (opcional)</label>
                <input 
                  type="text" 
                  name="aptoCasa"
                  className="input-field-custom" 
                  value={formData.aptoCasa}
                  onChange={handleChange}
                  placeholder="Apto/Casa (opcional)"
                />
              </div>

              <h3 className="payment-section-title">Elige como pagar</h3>
              
              <div className="payment-options-container">
                {/* Option 1: PSE */}
                <button 
                  type="button" 
                  className={`payment-option-btn ${paymentMethod === 'pse' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('pse')}
                >
                  <div className="pse-logo-placeholder">PSE</div>
                  <span>PSE</span>
                </button>

                {/* Option 2: Credit Card */}
                <button 
                  type="button" 
                  className={`payment-option-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard size={20} className="card-icon" />
                  <span>Tarjeta debito/credito</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="checkout-right-col">
            <div className="order-summary-card shadow-md">
              <h3>Resumen del pedido</h3>
              <span className="summary-item-count">1 Elemento</span>

              <div className="product-summary-card">
                <div className="product-summary-img-wrapper">
                  <img src={blankFilmina} alt="Filmina personalizada" className="img-product-summary" />
                </div>
                <div className="product-summary-info">
                  <h4>Filmina personalizada</h4>
                  <div className="product-filename-tag">
                    {fileName.toUpperCase()}
                  </div>
                  <span className="product-qty">Cantidad: 1</span>
                  <label className="gift-wrap-checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={giftWrap}
                      onChange={handleGiftWrapChange} 
                    />
                    <span>Empaque de regalo</span>
                  </label>
                </div>
              </div>

              <div className="divider-line"></div>

              <div className="summary-price-details">
                <div className="price-row">
                  <span>Subtotal:</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="price-row">
                  <span>Envío:</span>
                  <span>{formatCurrency(shipping)}</span>
                </div>
                {giftWrap && (
                  <div className="price-row">
                    <span>Empaque de regalo:</span>
                    <span>{formatCurrency(giftWrapPrice)}</span>
                  </div>
                )}
                <div className="price-row total-row">
                  <span>Total:</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>

            {/* Submit Action Button */}
            <div className="submit-action-container">
              <button type="submit" className="btn-secondary checkout-submit-btn">
                Completar mi pedido
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
