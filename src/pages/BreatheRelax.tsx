import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './ContentPages.css';

const SpotifyIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    style={{ color: '#1DB954', display: 'block' }}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.894-.982-.336.076-.67-.135-.747-.472-.077-.336.136-.67.472-.747 3.856-.88 7.15-.509 9.822 1.13.295.18.387.563.207.864zm1.225-2.72c-.227.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.075-1.185-.413.127-.85-.106-.977-.52-.127-.413.106-.85.52-.977 3.67-1.114 8.24-.57 11.346 1.342.368.228.488.708.26 1.08zm.105-2.833C14.462 8.81 8.784 8.622 5.5 9.618c-.506.153-1.04-.137-1.193-.642-.153-.505.137-1.04.642-1.193 3.77-1.143 10.03-.923 14.07 1.478.455.27.606.857.337 1.312-.27.455-.857.606-1.312.337z"/>
  </svg>
);

const BreatheRelax = () => {
  const navigate = useNavigate();

  return (
    <div className="content-page">
      <div className="container">
        <div className="page-header-flex">
          <button className="back-btn" onClick={() => navigate(-1)} aria-label="Atrás">
            <ArrowLeft size={24} color="#fff" />
          </button>
          <h1 className="page-title mb-0">Aprende a Respirar</h1>
        </div>

        <div className="content-card shadow-md">
          <h2 className="card-headline">Respira con Punto.</h2>
          
          <p className="card-text">
            Cuando el cerebro está en modo "creativo" o "alerta", nuestra respiración se vuelve corta y superficial, enviando señales de estrés al cuerpo. Para entrar en un estado de descanso profundo antes de dormir, puedes aplicar estos tres tips de respiración consciente:
          </p>

          <div className="highlight-box yellow-bg">
            <p>
              <strong>La técnica 4-7-8:</strong> Inhala por la nariz durante 4 segundos, mantén el aire por 7 y exhala suavemente por la boca durante 8 segundos. Este ritmo actúa como un tranquilizante natural para el sistema nervioso.
            </p>
          </div>

          <div className="highlight-box light-purple-bg">
            <p>
              <strong>Respiración Abdominal:</strong> Coloca una mano en tu pecho y otra en tu abdomen. Al inhalar, asegúrate de que sea tu abdomen el que se eleve, no tus hombros. Esto activa el nervio vago, responsable de la relajación.
            </p>
          </div>

          <div className="highlight-box outline-purple-thick">
            <p>
              <strong>Exhalaciones Prolongadas:</strong> Si te cuesta seguir una cuenta, simplemente intenta que tu exhalación sea el doble de larga que tu inhalación. Soltar el aire lentamente es la señal biológica de que estás a salvo y listo para dormir.
            </p>
          </div>

          {/* Tips Spotify block */}
          <div className="breathe-tips-spotify-block">
            <p className="card-text" style={{ margin: 0 }}>
              <strong>El tip extra:</strong> Acompaña estos ejercicios con nuestra playlist de Spotify. El tempo de las canciones está diseñado para sincronizarse con estos ritmos respiratorios, ayudándote a que la transición sea automática. No es solo música de fondo; es el primer paso para liberar tu mente y recuperar tu energía.
            </p>
            <a 
              href="https://open.spotify.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="spotify-inline-btn"
            >
              <SpotifyIcon size={20} />
              <span>Recomendaciones de Punto</span>
            </a>
          </div>
        </div>

        <div className="footer-quote text-center">
          <p className="font-bold-purple">
            Suelta el aire, libera la mente y recupera tu centro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreatheRelax;
