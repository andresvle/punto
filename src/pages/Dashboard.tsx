import { Link } from 'react-router-dom';
import './Dashboard.css';
import { ArrowRight, Heart, Cloud, Music, Wind } from 'lucide-react';
import productMain from '../assets/product-main.png';

const MustacheIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ display: 'block' }}
  >
    <path d="M12 12c-1.5-2.5-4.5-2.5-6 0a3 3 0 0 0 3 3c2.5 0 3-3 3-3s.5 3 3 3a3 3 0 0 0 3-3c-1.5-2.5-4.5-2.5-6 0z"/>
  </svg>
);

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Bienvenido a Punto</h1>
          <p className="hero-subtitle">Tu punto de inicio para un sueño más real</p>
          <Link to="/personalizacion" className="btn-primary" style={{ marginTop: '20px' }}>
            Personaliza tu filmina <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Qué es Punto Section */}
      <section className="what-is-section container">
        <h2 className="section-title">¿Qué es Punto?</h2>
        <div className="what-is-content">
          <div className="what-is-text">
            <p>
              Sistema de objetos orientado a la regulación del sueño, conformado por un proyector de filminas, un espacio de escritura y un módulo de expresión libre que permiten al usuario externalizar pensamientos e ideas antes de dormir, y un dispositivo central en forma de corazón que emite códigos de color en función de los ciclos de sueño, facilitando una interpretación intuitiva del estado del usuario.
            </p>
          </div>
          <div className="what-is-image">
            <img src={productMain} alt="Dispositivo Punto" className="img-product-main" />
          </div>
        </div>

        <h3 className="section-subtitle-centered">Conoce más sobre:</h3>
        <div className="cards-flex-container">
          <div className="card-flex-item">
            <div className="icon-wrapper gold">
              <MustacheIcon />
            </div>
            <h4>Proyector de filminas</h4>
            <p>Conoce la alternativa que proponemos a la hora de dormir</p>
          </div>
          <Link to="/gestion-emocional" className="card-flex-item link-card">
            <div className="icon-wrapper gold">
              <Heart size={20} />
            </div>
            <h4>Regulación emocional</h4>
            <p>Conoce la nueva forma de informarte y calmarte</p>
          </Link>
          <Link to="/gestion-pensamientos" className="card-flex-item link-card">
            <div className="icon-wrapper gold">
              <Cloud size={20} />
            </div>
            <h4>Gestión de pensamientos</h4>
            <p>Conoce la importancia de soltar pensamiento antes de dormir</p>
          </Link>
          <div className="card-flex-item">
            <div className="icon-wrapper gold">
              <Music size={20} />
            </div>
            <h4>La importancia de la música</h4>
            <p>Conoce las recomendaciones musicales de Punto</p>
          </div>
          <div className="card-flex-item">
            <div className="icon-wrapper gold">
              <Wind size={20} />
            </div>
            <h4>Date un descanso</h4>
            <p>Conoce la importancia de saber respirar en momentos de tensión</p>
          </div>
        </div>
      </section>

      {/* Comunidad Punto Section */}
      <section className="community-section container">
        <h2 className="section-title left-align">Comunidad Punto</h2>
        <p>Nos encantaría que formes parte de la comunidad de punto</p>
        <div className="cards-grid two-cols mt-4">
          <div className="card yellow-card">
            <h4>Personalización de Filminas</h4>
            <p>Por medio de nuestra página web puedes diseñar la filmina del tema que desees.</p>
            <Link to="/personalizacion" className="small-link">Conoce más dando click aqui</Link>
          </div>
          <div className="card purple-card">
            <h4>Evento del Mes</h4>
            <p>Contamos con un evento cada mes en el que por realizar una compra puedes ser el elegido para ganarte un adelanto de nuestra siguiente colaboración</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title left-align">¿Tienes algún problema?</h2>
          <p><strong>Contactanos:</strong></p>
          <p>Lineas nacionales:<br/>+57 3125040759  +57 3016146717</p>
          <p>Correo electronico:<br/>Punto.bienestar@punto.com</p>
          <p>www.Punto.com.co</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
