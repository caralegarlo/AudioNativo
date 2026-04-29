<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audioteca Colombiana</title>
    <link rel="stylesheet" href="css/styles_Inicio.css">
</head>
<body>

    <div class="contenedor-principal">
        <div class="imagen-lado">
            <img src="assets/inicio_sesion.jpg" alt="Imagen representativa de la Audioteca Colombiana">
        </div>

        <div class="formulario-lado">
            <header>
                <h1 class="logo">Audioteca Colombiana</h1>
            </header>

            <main>
                <section class="login-contenedor">
                    <h2>Iniciar sesión</h2>

                    <form id="form-login" action="LoginServlet" method="post">
                        <label for="correo">Correo electrónico</label>
                        <input type="email" id="correo" name="correo" placeholder="Ingresa tu correo" required>

                        <label for="password">Contraseña</label>
                        <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required>

                        <button type="submit" id="btn-login">Iniciar sesión</button>

                        <div class="links">
                            <a href="#" id="olvido">¿Olvidaste tu contraseña?</a>
                            <a href="#" id="registro">¿No tienes cuenta? Regístrate</a>
                        </div>
                    </form>

                    <%-- VARIABLE 3: Elemento JSP para manejo de errores dinámicos --%>
                    <% if(request.getParameter("error") != null) { %>
                        <div style="margin-top: 15px; text-align: center;">
                            <p style="color: #ff4d4d; font-weight: bold; font-size: 0.9em;">
                                Credenciales incorrectas. Intente de nuevo.
                            </p>
                        </div>
                    <% } %>
                </section>
            </main>

            <footer>
                <p>© 2026 Audioteca Colombiana</p>
            </footer>
        </div>
    </div>

    </body>
</html>