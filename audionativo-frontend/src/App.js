import React, { useState } from 'react';
import './App.css';

/**
 * COMPONENTE PRINCIPAL: Audio Nativo Frontend
 * Este módulo gestiona la interfaz de acceso (Login) cumpliendo con
 * los estándares de codificación del componente formativo.
 */
function App() {
  // Estados para manejar los datos del formulario (Hooks)
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  // Función para procesar el ingreso
  const manejarIngreso = (e) => {
    e.preventDefault();
    // Aquí se aplicará la lógica de conexión con el Backend (Servlet)
    console.log("Validando usuario:", usuario);
    alert("Conectando con el servidor de Audio Nativo...");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AUDIO NATIVO</h1>
        <p>Módulo de Autenticación - React JS</p>
        
        <form onSubmit={manejarIngreso} className="login-form">
          <div className="input-group">
            <label>Usuario (Correo):</label>
            <input 
              type="email" 
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)} 
              placeholder="garcialopez@ejemplo.com"
              required 
            />
          </div>

          <div className="input-group">
            <label>Contraseña:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit">INGRESAR</button>
        </form>
      </header>
    </div>
  );
}

export default App;