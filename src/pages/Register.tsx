import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      login({ email, name });
      navigate('/');
    } else {
      alert('Por favor llena todos los campos obligatorios');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre Completo *</label>
            <input 
              type="text" 
              className="input-field" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan Pérez"
            />
          </div>
          <div className="form-group">
            <label>Correo electrónico *</label>
            <input 
              type="email" 
              className="input-field" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
            />
          </div>
          <div className="form-group">
            <label>Contraseña *</label>
            <input 
              type="password" 
              className="input-field" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
            Registrarse
          </button>
        </form>
        <p className="auth-footer">
          ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
