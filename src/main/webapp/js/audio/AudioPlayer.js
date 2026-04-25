class AudioPlayer {
    constructor() {
        this.links = document.querySelectorAll('[data-target]');
        this.sections = document.querySelectorAll('.seccion-contenido');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('data-target');
                
                // Cambiar sección
                this.sections.forEach(s => s.classList.remove('active'));
                document.getElementById(targetId).classList.add('active');

                // Estilo menú
                if (link.classList.contains('menu__link')) {
                    this.links.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new AudioPlayer());