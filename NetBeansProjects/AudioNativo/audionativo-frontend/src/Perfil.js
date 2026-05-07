import React from 'react';
import logo from './logo.png';

function Perfil({ nombre, alSalir }) {
  return (
    <div className="profile-card">
      {/* Encabezado del Perfil */}
      <div className="profile-header">
        <div>
          <h1>AUDIO NATIVO</h1>
          <p style={{ margin: 0, color: '#888', fontSize: '14px' }}>
            Sistema de Preservación y Catalogación Sonora
          </p>
        </div>
        <img src={logo} alt="Logo" style={{ height: '60px', width: 'auto' }} />
      </div>
      
      {/* Contenido Principal */}
      <div className="profile-content">
        
        {/* Panel lateral de usuario */}
        <div className="user-info-panel">
          <h3>Sesión Activa</h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Bienvenido de nuevo,</p>
          <h2 style={{ color: '#1b5e20', margin: '0 0 15px 0', fontSize: '22px' }}>{nombre}</h2>
          
          <div style={{ fontSize: '13px', color: '#777', lineHeight: '1.6' }}>
            <p>Has ingresado a la audioteca nacional. Tienes acceso total a los recursos de preservación.</p>
          </div>

          <button onClick={alSalir} className="btn-logout">
            Cerrar Sesión
          </button>
        </div>

        {/* Sección de navegación/categorías */}
        <div className="categories-container">
          <h3>Explorar Audioteca</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Selecciona una categoría para comenzar la gestión de archivos:
          </p>
          
          <ul className="category-list">
            <li className="category-item">
              <span style={{ fontSize: '20px', marginRight: '15px' }}>🍃</span>
              FX Bioacústica
            </li>
            <li className="category-item">
              <span style={{ fontSize: '20px', marginRight: '15px' }}>🌊</span>
              Ambientes Naturales
            </li>
            <li className="category-item">
              <span style={{ fontSize: '20px', marginRight: '15px' }}>👣</span>
              Foley de Interacciones
            </li>
            <li className="category-item" style={{ background: '#f9f9f9', borderStyle: 'dashed' }}>
              <span style={{ fontSize: '20px', marginRight: '15px' }}>➕</span>
              Gestionar Catálogo
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Perfil;