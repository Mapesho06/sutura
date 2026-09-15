//CONTROL DEL MENÚ HAMBURGUESA EN MÓVILES

//1. Seleccionamos los dos elementos del DOM que necesitamos

const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.querySelector('.main-nav');

//2. Comprobamos que existan en la página actual para evitar errores en consola

if (menuToggle && mainNav) {
    //3. Escuchamos el evento de clic sobre el botón de las rayitas
    menuToggle.addEventListener('click', () => {
        //Alterna la clase 'nav-open' (si la tiene se la quita, si no la tiene se la pone)
        mainNav.classList.toggle('nav-open');
    });

    //4. Cierra automáticamente el menú al pulsar cualquier enlace interior
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('nav-open');
        });
    });
}
