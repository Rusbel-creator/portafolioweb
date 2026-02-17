const menuToggle = document.getElementById('menu-toggle');
const navContainer = document.getElementById('nav-container');
const menuOverlay = document.getElementById('menu-overlay');
const menuIcon = menuToggle.querySelector('i');
const toggleBtn = document.getElementById('light-mode');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const toggleMenu = () => {
    navContainer.classList.toggle('active');
    menuOverlay.classList.toggle('active');

    if (navContainer.classList.contains('active')) {
        menuIcon.classList.replace('bx-menu', 'bx-x');
        body.style.overflow = 'hidden';
    } else {
        menuIcon.classList.replace('bx-x', 'bx-menu');
        body.style.overflow = 'auto';
    }
};

menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-container a').forEach(link => {
    link.addEventListener('click', () => {
        if (navContainer.classList.contains('active')) toggleMenu();
    });
});

function updateThemeIcon(isLight) {
    themeIcon.className = isLight ? 'bx bxs-moon' : 'bx bxs-sun';
}

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    updateThemeIcon(true);
}

toggleBtn.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon(isLight);
});

const socialTrigger = document.getElementById('social-trigger');
const socialMenu = document.getElementById('social-menu');
const arrowIcon = document.getElementById('arrow-icon');

socialTrigger.addEventListener('click', () => {

    socialMenu.classList.toggle('show');

    arrowIcon.classList.toggle('rotate-arrow');
});

const $form = document.querySelector('#form');
const $botonEnviar = document.querySelector('#boton-enviar');
$form.addEventListener('submit', (event) => {

    const nombre = document.querySelector('#nombre').value.trim();
    const email = document.querySelector('#email').value.trim();
    const asunto = document.querySelector('#asunto').value.trim();
    const mensaje = document.querySelector('#mensaje').value.trim();
    const advertencias = document.querySelector('#warnings');

    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
        event.preventDefault();
        advertencias.style = ("color: #fff; width: 100%; background-color: #de5656; border: 2px solid #f00; border-radius: 0.3rem; padding: 10px 0;");
        advertencias.textContent = 'Ups, todos los campos son obligatorios';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        event.preventDefault();
        advertencias.style = ("color: #fff; width: 100%; background-color: #de5656; border: 2px solid #f00; border-radius: 0.3rem; padding: 10px 0;");
        advertencias.textContent = 'Por favor, introduce un correo electrónico válido.';
        return;
    }

    advertencias.style = ("color: #000; width: 100%; background-color: rgb(173, 254, 173); border: 2px solid rgb(0, 202, 0); border-radius: 0.3rem; padding: 10px 0;");
    advertencias.textContent = 'Formulario enviado :)';
});