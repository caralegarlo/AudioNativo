// Esperar a que la página cargue
window.onload = function() {
    
    // Página de iniciar sesión
    let formularioLogin = document.getElementById('form-login');
    if (formularioLogin) {
        console.log('Página de login cargada');
        
        formularioLogin.onsubmit = function(evento) {
            evento.preventDefault();
            
            let correo = document.getElementById('correo').value;
            let password = document.getElementById('password').value;
            
            // Verificaciones
            if (correo === '') {
                alert('Escribe tu correo');
                return false;
            }
            
            if (!correo.includes('@')) {
                alert('El correo debe tener @');
                return false;
            }
            
            if (password === '') {
                alert('Escribe tu contraseña');
                return false;
            }
            
            // Si todo está bien, se redirige a página pricipal
            window.location.href = 'perfil.html';
        };
        
        // Enlace "Olvidé contraseña"
        document.getElementById('olvido').onclick = function() {
            alert('Te enviaremos un correo para recuperar la contraseña');
        };
        
        // Enlace "Registrarse"
        document.getElementById('registro').onclick = function() {
            alert('Te redirigiremos a la página de registro');
        };
    }
    
    // Página princiapl
    let botonesFavorito = document.querySelectorAll('.btn-favorito');
    if (botonesFavorito.length > 0) {
        console.log('Página principal cargada');
        
        // Botones "Me gusta"
        botonesFavorito.forEach(function(boton) {
            boton.onclick = function() {
                if (boton.textContent === 'Me gusta') {
                    boton.textContent = 'Me gusta';
                    alert('Audio agregado a favoritos');
                } 
            };
        });
        
        // Botones "Descargar"
        let botonesDescargar = document.querySelectorAll('.btn-descargar');
        botonesDescargar.forEach(function(boton) {
            boton.onclick = function() {
                alert('Descargando audio (Para descargar se necesita membresía)');
            };
        });
        
        // Botón cerrar sesión
        let cerrarSesion = document.querySelector('.cerrar-sesion');
        if (cerrarSesion) {
            cerrarSesion.onclick = function(e) {
                e.preventDefault(); // Esto evita que el enlace haga nada
                if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
                    window.location.href = 'inicio.html';
                }
            };
        }
    }
    
};