import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './ContentPages.css';

const FilmProjector = () => {
  const navigate = useNavigate();

  return (
    <div className="content-page">
      <div className="container">
        <div className="page-header-flex">
          <button className="back-btn" onClick={() => navigate(-1)} aria-label="Atrás">
            <ArrowLeft size={24} color="#fff" />
          </button>
          <h1 className="page-title mb-0">Proyector de filminas</h1>
        </div>

        <div className="content-card shadow-md">
          <h2 className="card-headline">Donde la luz se vuelve descanso.</h2>
          
          <p className="card-text">
            Sabemos que el celular es, a menudo, lo último que vemos antes de dormir y lo primero que nos quita la paz. Queríamos romper ese ciclo, y por eso nació el proyector de Punto.
          </p>
          
          <p className="card-text">
            Transforma tu techo en un lienzo de tranquilidad. En lugar de navegar por el caos de las redes sociales, permite que Punto te guíe hacia el sueño con secuencias visuales diseñadas para relajar tu mente.
          </p>

          <div className="highlight-box yellow-bg">
            <p>
              <strong>Tu alternativa analógica:</strong> Olvida la luz azul. Punto proyecta secuencias suaves, estéticas y envolventes que invitan al descanso profundo.
            </p>
          </div>

          <div className="highlight-box outline-purple-thick">
            <p>
              <strong>Un universo de calma:</strong> Con 21 filminas intercambiables y 7 secuencias únicas en cada una, tienes a tu disposición un catálogo de paz que puedes adaptar según tu estado de ánimo o necesidad de la noche.
            </p>
          </div>

          <div className="highlight-box yellow-bg">
            <p>
              <strong>Independencia total:</strong> Diseñado para adaptarse a cualquier espacio, Punto funciona de forma autónoma. No requiere conexiones complejas ni pantallas; simplemente, colócalo, enciéndelo y deja que el entorno se transforme en tu refugio personal.
            </p>
          </div>
        </div>

        <div className="footer-quote text-center">
          <p className="font-bold-purple">
            Tu noche no necesita más información; necesita más calma. Deja que Punto ilumine tu descanso, no tu ansiedad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilmProjector;
