import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './ContentPages.css';

const EmotionalManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="content-page">
      <div className="container">
        <div className="page-header-flex">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={24} color="#fff" />
          </button>
          <h1 className="page-title mb-0">Gestión emocional</h1>
        </div>

        <div className="content-card shadow-md">
          <h2 className="card-headline">Menos cuentas, más calma.</h2>
          
          <div className="highlight-box outline-purple">
            <p>
              ¿Te ha pasado que despiertas a mitad de la noche y lo primero que haces es mirar el reloj? Tu mente empieza inmediatamente a calcular: "Si me duermo ahora, solo me quedan 4 horas...". Ese cálculo matemático es, irónicamente, el mayor enemigo de tu descanso.
            </p>
          </div>
          
          <p className="card-text">
            En Punto, hemos decidido sustituir la presión del reloj por un corazón.
          </p>

          <p className="card-text font-medium">
            Sabemos que a las 3 a.m. no necesitas saber la hora exacta; lo que realmente necesitas es sentirte a salvo. El corazón es tu indicador de paz: en lugar de mostrarte números que generan ansiedad, te acompaña con luz suave y colores que te recuerdan que este es tu espacio de descanso.
          </p>
        </div>

        <div className="footer-quote">
          <p>Tu única tarea no es contar horas, es permitirte habitar el sueño. Cambiamos la obsesión por el tiempo por la seguridad de un ritmo que te cuida.</p>
        </div>
      </div>
    </div>
  );
};

export default EmotionalManagement;
