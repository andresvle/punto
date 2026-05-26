import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './ContentPages.css';

const ThoughtManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="content-page">
      <div className="container">
        <div className="page-header-flex">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={24} color="#fff" />
          </button>
          <h1 className="page-title mb-0">Gestión de pensamientos</h1>
        </div>

        <div className="content-card shadow-md">
          <h2 className="card-headline">Suelta el ruido, recupera tu descanso.</h2>
          
          <p className="card-text">
            ¿Alguna vez has intentado dormir pero tu mente se ha quedado trabajando? Es natural: nuestras mejores ideas y nuestras mayores preocupaciones suelen aparecer justo cuando apagamos la luz.
          </p>
          
          <p className="card-text">
            En Punto, entendemos que un buen descanso no empieza al cerrar los ojos, sino en la capacidad de liberar todo lo que acumulamos durante el día. Por eso, hemos diseñado dos espacios para transformar tu ritual nocturno:
          </p>

          <div className="highlight-box purple-bg">
            <p>
              <strong>La Ruleta de Pensamientos:</strong> No se trata de olvidar, sino de liberar. Es el lugar donde depositas tus ideas, pendientes o inquietudes. Al registrarlas, las sacas de tu sistema mental y las dejas seguras, listas para ser retomadas con calma al día siguiente.
            </p>
          </div>

          <div className="highlight-box yellow-bg">
            <p>
              <strong>El Espacio de Escritura:</strong> Un rincón íntimo y definido, creado para que conviertas la reflexión en un ritual personal. Ya sea para volcar tus pensamientos en la ruleta o simplemente para leer y escribir antes de dormir, este es tu espacio seguro para bajar el ritmo y reconectar contigo.
            </p>
          </div>
        </div>

        <div className="footer-quote">
          <p>Dormir no debería ser un esfuerzo. Con Punto, conviertes el caos de la noche en un remanso de paz.</p>
          <p className="quote-italic">"Deja que Punto cuide tus ideas"</p>
        </div>
      </div>
    </div>
  );
};

export default ThoughtManagement;
