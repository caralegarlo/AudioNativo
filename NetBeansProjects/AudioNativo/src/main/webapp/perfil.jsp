<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    // Recuperar el nombre guardado en el Servlet
    String nombre = (String) session.getAttribute("usuarioNombre");
    
    // Validar si la sesión existe
    if (nombre == null) {
        nombre = "Invitado";
        // Opcional: response.sendRedirect("index.jsp"); // Protege la página
    }
%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Perfil - Audio Nativo</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
        .nav { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px; }
        .nav a { margin-right: 15px; text-decoration: none; color: #0066cc; }
        .category { font-weight: bold; margin-top: 20px; }
    </style>
</head>
<body>
    <h1>AUDIONATIVO</h1>
    
    <div class="nav">
        <a href="#">1. Inicio</a>
        <a href="#">2. Sonidos</a>
        <a href="#">3. Preservación</a>
        <a href="salir.jsp">Cerrar Sesión</a>
    </div>

    <h2>Bienvenido, <%= nombre %></h2>
    <p>Explora el patrimonio sonoro de Colombia.</p>

    <h3>Nuestra Visión</h3>
    <p>Ser el archivo digital más importante de sonidos naturales y culturales del país.</p>

    <hr>

    <h3>Explorar la Audioteca</h3>
    <input type="text" placeholder="¿Qué quieres escuchar hoy?">
    <button>Buscar</button>

    <div class="category">FX (Efectos)</div>
    <ul>
        <li>Bioacústica</li>
        <li>Naturaleza</li>
        <li>Cultura</li>
    </ul>

    <div class="category">Foley</div>
    <ul>
        <li>Pasos</li>
        <li>Interacciones</li>
    </ul>

    <div class="category">Ambientes</div>
    <ul>
        <li>Naturales</li>
        <li>Rurales</li>
    </ul>

    <div style="margin-top: 30px; background: #f4f4f4; padding: 15px;">
        <strong>Huella de Conservación</strong>
        <p>AUDIO NATIVO destina parte de sus recursos al mantenimiento de equipos en la Amazonía.</p>
    </div>
</body>
</html>