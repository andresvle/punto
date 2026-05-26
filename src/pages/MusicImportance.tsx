import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import spotifyPlaylistImage from '../assets/spotify-playlist.png';
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

const MusicImportance = () => {
  const navigate = useNavigate();

  return (
    <div className="content-page">
      <div className="container">
        <div className="page-header-flex">
          <button className="back-btn" onClick={() => navigate(-1)} aria-label="Atrás">
            <ArrowLeft size={24} color="#fff" />
          </button>
          <h1 className="page-title mb-0">La importancia de la Música</h1>
        </div>

        <div className="content-card shadow-md">
          <h2 className="card-headline">Más allá del silencio: cómo la música prepara tu mente para descansar.</h2>
          
          <p className="card-text">
            ¿Alguna vez has sentido que el silencio de la noche es, en realidad, demasiado ruidoso? Cuando apagamos la luz, el cerebro suele subir el volumen de los pendientes. Es ahí donde la música se convierte en nuestra mejor aliada para la transición.
          </p>
          
          <p className="card-text font-medium" style={{ marginBottom: '16px' }}>
            Lo que sucede en tu cuerpo cuando eliges el sonido correcto:
          </p>

          <div className="highlight-box yellow-bg">
            <p>
              <strong>Baja el ritmo:</strong> La música con un tempo lento (entre 60 y 80 pulsaciones por minuto) ayuda a que tu corazón y tu respiración se sincronicen con la calma.
            </p>
          </div>

          <div className="highlight-box light-purple-bg">
            <p>
              <strong>Reduce el cortisol:</strong> El sonido adecuado ayuda a disminuir los niveles de la hormona del estrés, permitiendo que tus músculos se relajen de verdad.
            </p>
          </div>

          <div className="highlight-box outline-purple-thick">
            <p>
              <strong>Bloquea la intrusión:</strong> Actúa como un escudo sonoro que suaviza los ruidos externos y calma el flujo incesante de pensamientos creativos que no te dejan parar.
            </p>
          </div>

          {/* Spotify Container */}
          <div className="spotify-container">
            <div className="spotify-image-col">
              <img 
                src={spotifyPlaylistImage} 
                alt="Playlist Recomendaciones de Punto" 
                className="spotify-playlist-img" 
              />
            </div>
            <div className="spotify-text-col">
              <p className="spotify-desc">
                En Punto, sabemos que el descanso es parte esencial de tu proceso creativo. Por eso, hemos diseñado una playlist en Spotify con recomendaciones musicales pensadas para ayudarte a bajar las revoluciones y preparar el terreno para un sueño profundo.
              </p>
              <p className="spotify-desc">
                No es solo música de fondo; es el primer paso para liberar tu mente y recuperar tu energía.
              </p>
              <a 
                href="https://open.spotify.com/playlist/4xNeRqOgePCLDSX8KG8ZEu?si=fjs7OCxXTGCPzlppPtT8ww&pi=7GALEM4yTLyRl&nd=1&dlsi=20d39cfcaf3a495d" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="spotify-btn-link"
              >
                <div className="spotify-btn-content">
                  <SpotifyIcon size={22} />
                  <span>Recomendaciones de Punto</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicImportance;
