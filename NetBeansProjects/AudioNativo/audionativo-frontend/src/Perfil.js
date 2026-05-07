import React from 'react';
import './App.css'; 

// Importa los íconos si los tienes, o usa emojis temporalmente
const IconoFX = () => <span role="img" aria-label="fx">🍃</span>;
const IconoAmbiente = () => <span role="img" aria-label="ambiente">🌎</span>;
const IconoFoley = () => <span role="img" aria-label="foley">👣</span>;
const IconoCatalogo = () => <span role="img" aria-label="catalogo">➕</span>;

function Perfil({ nombre, alSalir }) {
  return (
    <div className="perfil-fullscreen">
      {/* Barra Lateral (Sidebar) */}
      <aside className="perfil-sidebar">
        <div className="sidebar-header">
          <div className="colombia-logo-mini"></div> {/* Logo pequeño */}
          <h1>AUDIO NATIVO</h1>
          <p>Preservación Sonora</p>
        </div>
        
        <div className="sesion-info">
          <h3>SESIÓN ACTIVA</h3>
          <p className="bienvenida-text">Bienvenido de nuevo,</p>
          <p className="usuario-nombre">{nombre}</p>
          <p className="usuario-desc">Has ingresado a la audioteca nacional. Tienes acceso total a los recursos de preservación.</p>
          <button onClick={alSalir} className="btn-cerrar-sesion">Cerrar Sesión</button>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="perfil-main-content">
        <header className="main-header">
          <h2>Explorar Audioteca</h2>
          <p>Selecciona una categoría para comenzar la gestión de archivos:</p>
        </header>

        <section className="categorias-grid">
          <div className="categoria-card">
            <IconoFX />
            <h3>FX Bioacústica</h3>
          </div>
          <div className="categoria-card">
            <IconoAmbiente />
            <h3>Ambientes Naturales</h3>
          </div>
          <div className="categoria-card">
            <IconoFoley />
            <h3>Foley de Interacciones</h3>
          </div>
          <div className="categoria-card gestionar-card">
            <IconoCatalogo />
            <h3>Gestionar Catálogo</h3>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Perfil;