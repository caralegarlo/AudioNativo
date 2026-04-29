<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AUDIO NATIVO - Perfil</title>
    <link rel="stylesheet" href="css/styles_Perfil.css">
</head>
<body>

    <aside class="sidebar">
        <div class="logo">
            <h1>AUDIO<span>NATIVO</span></h1>
        </div>
        <nav class="menu">
            <a href="#" class="menu__link active" data-target="inicio">1. Inicio</a>
            <a href="#" class="menu__link" data-target="sec-sonidos">2. Sonidos</a>
            <a href="#" class="menu__link" data-target="preservacion">3. Preservación</a>
            <a href="salir.jsp" class="cerrar-sesion">Cerrar Sesión</a>
        </nav>
    </aside>

    <main class="main-content">
        
        <section id="inicio" class="seccion-contenido active">
            <div class="c-hero">
                <h2>Bienvenido, <%= session.getAttribute("usuarioNombre") %></h2>
                <p>Explora el patrimonio sonoro de Colombia.</p>
            </div>
            <div class="c-info-container">
                <div class="c-info-card">
                    <h3>Nuestra Visión</h3>
                    <p>Ser el archivo digital más importante de sonidos naturales y culturales del país, apoyando la industria audiovisual y la conservación ambiental.</p>
                </div>
            </div>
        </section>

        <section id="sec-sonidos" class="seccion-contenido">
            <div class="c-hero">
                <h2>Explorar la Audioteca</h2>
                <div class="c-buscador">
                    <input type="text" placeholder="¿Qué quieres escuchar hoy?">
                    <button>Buscar</button>
                </div>
            </div>

            <div class="cajas-flex">
                <div class="caja-inteligente">
                    <div class="caja-inteligente__cabecera">
                        <h3>FX (Efectos)</h3>
                        <span>▼</span>
                    </div>
                    <ul class="caja-inteligente__submenu">
                        <li><a href="#" data-target="sec-bioacustica">Bioacústica</a></li>
                        <li><a href="#" data-target="sec-naturaleza">Naturaleza</a></li>
                        <li><a href="#" data-target="sec-cultura">Cultura</a></li>
                    </ul>
                </div>

                <div class="caja-inteligente">
                    <div class="caja-inteligente__cabecera">
                        <h3>Foley</h3>
                        <span>▼</span>
                    </div>
                    <ul class="caja-inteligente__submenu">
                        <li><a href="#" data-target="sec-pasos">Pasos</a></li>
                        <li><a href="#" data-target="sec-interacciones">Interacciones</a></li>
                    </ul>
                </div>

                <div class="caja-inteligente">
                    <div class="caja-inteligente__cabecera">
                        <h3>Ambientes</h3>
                        <span>▼</span>
                    </div>
                    <ul class="caja-inteligente__submenu">
                        <li><a href="#" data-target="sec-paisajes-nat">Naturales</a></li>
                        <li><a href="#" data-target="sec-paisajes-urb">Rurales</a></li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="preservacion" class="seccion-contenido">
            <div class="c-impacto">
                <h3>Huella de Conservación</h3>
                <p>AUDIO NATIVO destina parte de sus recursos al mantenimiento de equipos de grabación en zonas de difícil acceso de la Amazonía.</p>
                <div class="mapa-placeholder">MAPA DE IMPACTO</div>
            </div>
        </section>

        <section id="sec-bioacustica" class="seccion-contenido">
            <button class="btn-volver" data-target="sec-sonidos">← Volver a Sonidos</button>
            <h2 class="titulo-seccion">Bioacústica</h2>
            <div class="audios-grid">
                <div class="c-card-audio">
                    <h4>Rugido de Jaguar</h4>
                    <audio controls></audio>
                </div>
            </div>
        </section>

    </main>

    <script src="js/audio/AudioPlayer.js"></script>
</body>
</html>