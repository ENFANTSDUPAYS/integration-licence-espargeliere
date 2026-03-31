document.addEventListener('DOMContentLoaded', () => {
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const overlay = document.getElementById('mobile-overlay');

    // Ouvrir le menu
    menuOpen.addEventListener('click', () => {
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    });

    // Fermer le menu
    menuClose.addEventListener('click', () => {
        overlay.classList.remove('is-open');
        document.body.style.overflow = 'auto';
    });
});