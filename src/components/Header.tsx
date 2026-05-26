import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Home, Upload, Heart, LogOut, LogIn } from 'lucide-react';
import './Header.css';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Top Header Bar for Desktop and slim header for Mobile */}
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="logo-container">
            <div className="logo-circle"></div>
            <span className="logo-text">Punto</span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <nav className="nav-links desktop-nav">
            <Link to="/" className={isActive('/')}>Inicio</Link>
            <Link to="/conocenos" className={isActive('/conocenos')}>Conocenos</Link>
            <Link to="/personalizacion" className={isActive('/personalizacion')}>Personalización</Link>
            {isAuthenticated ? (
              <button onClick={logout} className="btn-outline" style={{ padding: '4px 12px', fontSize: '0.9rem' }}>
                Salir
              </button>
            ) : (
              <Link to="/login" className="btn-outline" style={{ padding: '4px 12px', fontSize: '0.9rem' }}>
                Entrar
              </Link>
            )}
          </nav>

          {/* Mobile Top Bar Action (logout/login icon) */}
          <div className="mobile-header-actions">
            {isAuthenticated ? (
              <button onClick={logout} className="mobile-action-btn" aria-label="Salir">
                <LogOut size={20} />
              </button>
            ) : (
              <Link to="/login" className="mobile-action-btn" aria-label="Entrar">
                <LogIn size={20} />
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Tab Navigation */}
      <nav className="bottom-nav">
        <Link to="/" className={`bottom-nav-item ${isActive('/')}`}>
          <Home size={20} />
          <span>Inicio</span>
        </Link>
        <Link to="/personalizacion" className={`bottom-nav-item ${isActive('/personalizacion')}`}>
          <Upload size={20} />
          <span>Personalizar</span>
        </Link>
        <Link to="/conocenos" className={`bottom-nav-item ${isActive('/conocenos')}`}>
          <Heart size={20} />
          <span>Conócenos</span>
        </Link>
        {isAuthenticated ? (
          <button onClick={logout} className="bottom-nav-item btn-nav-action">
            <LogOut size={20} />
            <span>Salir</span>
          </button>
        ) : (
          <Link to="/login" className={`bottom-nav-item ${isActive('/login')}`}>
            <LogIn size={20} />
            <span>Entrar</span>
          </Link>
        )}
      </nav>
    </>
  );
};

export default Header;

