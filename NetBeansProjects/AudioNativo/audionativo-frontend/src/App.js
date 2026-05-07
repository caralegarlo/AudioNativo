import React, { useState } from 'react';
import './App.css';
import logo from './logo.png'; 
import Perfil from './Perfil'; // Importamos el nuevo componente

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [usuario, setUsuario] = useState(null); // Guardamos el nombre aquí

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const respuesta = await fetch('http://localhost:8080/AudioNativo/LoginServlet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      const datos = await respuesta.json();
      
      if (datos.valido) {
        const resNombre = await fetch('http://localhost:8080/AudioNativo/LoginServlet',{credentials: 'include'});
        const dataNombre = await resNombre.json();
        setUsuario(dataNombre.nombre);
      } else {
        setError("Correo o contraseña incorrectos.");
      }
    } catch (err) {
      setError("Error de conexión con el servidor.");
    }
  };

  // Si hay un usuario identificado, mostramos el Perfil
  if (usuario) {
    return <Perfil nombre={usuario} alSalir={() => setUsuario(null)} />;
  }

  // Si no, mostramos el Login de siempre
  return (
    <div className="login-card">
      <img src={logo} alt="Logo Audio Nativo" className="project-logo" />
      <h1>AUDIO NATIVO</h1>
      <form onSubmit={manejarEnvio}>
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="btn-login">Ingresar</button>
      </form>
    </div>
  );
}

export default App;