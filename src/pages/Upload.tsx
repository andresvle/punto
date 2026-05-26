import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloudUpload, Eye, ArrowRight } from 'lucide-react';
import './Upload.css';
import blankFilmina from '../assets/blank-filmina.png';

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleContinue = () => {
    if (file) {
      localStorage.setItem('punto_file', file.name);
    } else {
      localStorage.setItem('punto_file', 'Filmina Personalizada');
    }
    navigate('/checkout');
  };

  const handlePreviewClick = () => {
    setShowPreview(true);
  };

  if (showPreview) {
    return (
      <div className="preview-page">
        <div className="container">
          <div className="preview-layout shadow-md">
            <div className="preview-image-column">
              <div className="preview-card-image">
                <img src={blankFilmina} alt="Vista previa de la filmina" className="img-blank-filmina" />
              </div>
            </div>
            <div className="preview-text-column">
              <h1 className="preview-title">Vista Previa</h1>
              <p className="preview-description">
                Nuestro equipo de diseño ayudara a hacer realidad tu proyecto
              </p>
              <div className="preview-actions">
                <button className="btn-primary yellow-btn full-width" onClick={() => setShowPreview(false)}>
                  Volver
                </button>
                <button className="btn-secondary purple-btn full-width mt-3" onClick={handleContinue}>
                  Continuar con el registro &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="upload-page">
      <div className="container">
        <div className="upload-header">
          <h1 className="page-title">Personaliza tu filmina</h1>
          <p className="page-subtitle">Sube una imagen escaneada y previsualízala</p>
        </div>

        <div className="upload-content">
          <div className="upload-card shadow-md">
            <h3>Subir una imagen</h3>
            <div 
              className="dropzone" 
              onDragOver={handleDragOver} 
              onDrop={handleDrop}
            >
              <input 
                type="file" 
                id="file-upload" 
                className="hidden-input" 
                accept="image/png, image/jpeg, application/pdf"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload" className="dropzone-label">
                <CloudUpload size={48} color="var(--text-muted)" />
                <p>Click para subir o arrastra y suelta</p>
                <span className="file-formats">PNG o JPG</span>
                {file && <p className="selected-file">Archivo seleccionado: {file.name}</p>}
              </label>
            </div>

            <div className="upload-actions">
              <button className="btn-primary full-width justify-center" onClick={handlePreviewClick}>
                <Eye size={18} /> Ver vista previa
              </button>
              <button 
                className="btn-secondary full-width justify-center mt-3"
                onClick={handleContinue}
              >
                Continuar con el registro <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="info-card shadow-md">
            <h3>Información</h3>
            
            <div className="info-box blue-box">
              <h4>Formato Recomendado</h4>
              <ul>
                <li>Resolución: 1920x1080 pixeles o superior</li>
                <li>Formato: JPG o PNG</li>
                <li>Tamaño máximo: 10 MB</li>
              </ul>
            </div>

            <div className="info-box purple-border-box">
              <h4>Consejos de Diseño</h4>
              <ul>
                <li>Usa colores contrastantes para mejor legibilidad</li>
                <li>Evita textos</li>
                <li>Mantén los elementos importantes en el centro</li>
                <li>Recuerda que los filminas son pequeñas, reduce la mayor cantidad de detalles.</li>
              </ul>
            </div>

            <div className="info-box green-box">
              <h4>¿Qué incluye?</h4>
              <ul>
                <li>Filmina personalizada impresa</li>
                <li>Revisión por parte de equipo de diseño de Punto</li>
                <li>Posibilidad de caja de regalo según indique el cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
