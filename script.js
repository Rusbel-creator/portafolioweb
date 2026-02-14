// Seleccionamos los elementos
const menuToggle = document.getElementById('menu-toggle');
const navContainer = document.getElementById('nav-container');
const menuOverlay = document.getElementById('menu-overlay');
const menuIcon = menuToggle.querySelector('i');
const toggleBtn = document.getElementById('light-mode');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// --- 1. LÓGICA DEL MENÚ HAMBURGUESA ---
const toggleMenu = () => {
    navContainer.classList.toggle('active');
    menuOverlay.classList.toggle('active');

    // Cambiar icono de hamburguesa a X
    if (navContainer.classList.contains('active')) {
        menuIcon.classList.replace('bx-menu', 'bx-x');
        body.style.overflow = 'hidden'; // Bloquea scroll
    } else {
        menuIcon.classList.replace('bx-x', 'bx-menu');
        body.style.overflow = 'auto'; // Habilita scroll
    }
};

menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-container a').forEach(link => {
    link.addEventListener('click', () => {
        if (navContainer.classList.contains('active')) toggleMenu();
    });
});

// --- 2. LÓGICA MODO LUZ / OSCURO (Corregida) ---
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
    // Desplegar menú
    socialMenu.classList.toggle('show');
    
    // Rotar flecha
    arrowIcon.classList.toggle('rotate-arrow');
});