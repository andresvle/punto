import './Conocenos.css';
import productNightstand from '../assets/product-nightstand.png';
import creatorMariana from '../assets/creator-mariana.jpg';
import creatorFelipe from '../assets/creator-felipe.jpg';

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="instagram-icon"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Conocenos = () => {
  return (
    <div className="conocenos-page">
      {/* Sección 2: ¿De donde nace punto? (Fondo Amarillo) */}
      <section className="origin-section-page">
        <div className="container">
          <h2 className="section-title-page">¿De donde nace punto?</h2>
          <p className="section-text-page">
            Surge dentro del entorno universitario como una herramienta diseñada para abordar el estrés excesivo y la necesidad crítica de mejorar la higiene del sueño en los estudiantes. No es un personaje estático, sino una respuesta al desafío de cómo bajar el "ruido" mental antes de ir a dormir.
          </p>
        </div>
      </section>

      {/* Sección 3: ¿Cuál es su propósito? (Fondo Púrpura y dos columnas) */}
      <section className="purpose-section-page">
        <div className="container purpose-grid">
          <div className="purpose-text-col">
            <h2 className="section-title-page white-text">¿Cuál es su propósito?</h2>
            <p className="section-text-page white-text mb-4">
              Su misión fundamental es acompañar a las personas en los momentos de mayor carga, convirtiéndose en un puente hacia el descanso y el equilibrio. Está ahí para decirles que, tras una jornada intensa, es posible encontrar un "punto" de pausa, un espacio seguro para desconectar y priorizar el bienestar.
            </p>
            <p className="section-text-page white-text">
              Es, en esencia, un compañero para esos momentos donde la presión académica debe ceder espacio al descanso necesario.
            </p>
          </div>
          <div className="purpose-image-col">
            <img src={productNightstand} alt="Mesa de noche con Punto" className="img-nightstand" />
          </div>
        </div>
      </section>

      {/* Sección 4: Creadores de Punto (Fondo Amarillo) */}
      <section className="creators-section">
        <div className="container">
          <h2 className="section-title-page centered-title">Creadores de Punto</h2>
          <div className="creators-grid">
            {/* Card 1: Mariana */}
            <div className="creator-card shadow-md">
              <div className="upb-badge">UPB</div>
              <div className="creator-image-wrapper">
                <img src={creatorMariana} alt="Mariana Arroyave" className="img-creator" />
              </div>
              <div className="creator-info">
                <h3>Mariana Arroyave</h3>
                <span className="creator-age">19 años</span>
                <p className="creator-role">
                  Diseñadora Industrial en formación de la universidad UPB sede Medellín
                </p>
                <p className="creator-subtext">
                  Proyecto realizado en el módulo de bienestar
                </p>
                <a href="https://instagram.com/marianitapxx" target="_blank" rel="noopener noreferrer" className="creator-social">
                  <InstagramIcon size={18} />
                  <span>@marianitapxx</span>
                </a>
              </div>
            </div>

            {/* Card 2: Felipe */}
            <div className="creator-card shadow-md">
              <div className="upb-badge">UPB</div>
              <div className="creator-image-wrapper">
                <img src={creatorFelipe} alt="Felipe Palomino" className="img-creator" />
              </div>
              <div className="creator-info">
                <h3>Felipe Palomino</h3>
                <span className="creator-age">20 años</span>
                <p className="creator-role">
                  Diseñador Industrial en formación de la universidad UPB sede Medellín
                </p>
                <p className="creator-subtext">
                  Proyecto realizado en el módulo de bienestar
                </p>
                <a href="https://instagram.com/05_palomino" target="_blank" rel="noopener noreferrer" className="creator-social">
                  <InstagramIcon size={18} />
                  <span>@05_palomino</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Contacto */}
      <section className="contact-section-page">
        <div className="container">
          <h2 className="contact-title-page">¿Tienes algún problema?</h2>
          <div className="contact-info-block">
            <p className="contact-subtitle-bold">Contactanos:</p>
            <p className="contact-detail-text">
              Lineas nacionales :<br />
              +57 3125040759 +57 3016146717
            </p>
            <p className="contact-detail-text">
              Correo electronico:<br />
              Punto.bienestar@punto.com
            </p>
            <p className="contact-detail-text">www.Punto.com.co</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conocenos;
