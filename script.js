//alert("hola mundo este es mi javascribs");

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Evento de clic en el botón de hamburguesa para abrir/cerrar el menú
    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Evento de clic en cualquier lugar fuera del menú para cerrarlo
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickInsideToggleButton = toggleButton.contains(event.target);
        
        if (!isClickInsideNav && !isClickInsideToggleButton) {
            nav.classList.remove('active');
        }
    });
});