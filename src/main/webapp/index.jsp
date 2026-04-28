<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audioteca Colombiana</title>
    <!-- Enlace al archivo CSS externo -->
    <link rel="stylesheet" href="css/styles_Inicio.css">

</head>
<body>

    <!-- Contenedor principal dividido -->
    <div class="contenedor-principal">
        <!-- Sección izquierda: imagen -->
        <div class="imagen-lado">
            <img src="assets/inicio_sesion.jpg" alt="Imagen representativa de la Audioteca Colombiana">
        </div>

        <!-- Sección derecha: formulario -->
        <div class="formulario-lado">
            <header>
                <h1 class="logo">Audioteca Colombiana</h1>
            </header>

            <main>
                <section class="login-contenedor">
                    <h2>Iniciar sesión</h2>

                    <!-- Formulario de inicio de sesión -->
                    <form id="form-login">
                        <label for="correo">Correo electrónico</label>
                        <input type="email" id="correo" name="correo" placeholder="Ingresa tu correo" required>

                        <label for="password">Contraseña</label>
                        <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required>

                        <button type="submit" id="btn-login">Iniciar sesión</button>

                        <!-- Enlaces adicionales -->
                        <div class="links">
                            <a href="#" id="olvido">¿Olvidaste tu contraseña?</a>
                            <a href="#" id="registro">¿No tienes cuenta? Regístrate</a>
                        </div>
                    </form>
                </section>
            </main>

            <footer>
                <p>© 2025 Audioteca Colombiana</p>
            </footer>
        </div>
    </div>

    <!-- Archivo JavaScript externo -->
    <script src="script.js"></script>
</body>
</html>