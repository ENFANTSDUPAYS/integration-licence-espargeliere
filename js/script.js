document.addEventListener('DOMContentLoaded', () => {
    // ---- Gestion du Menu Mobile ----
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const overlay = document.getElementById('mobile-overlay');

    if (menuOpen && menuClose && overlay) {
        // Ouvrir le menu
        menuOpen.addEventListener('click', () => {
            overlay.classList.add('is-open');
            document.body.style.overflow = 'hidden'; // Empêche le scroll derrière
        });

        // Fermer le menu
        menuClose.addEventListener('click', () => {
            overlay.classList.remove('is-open');
            document.body.style.overflow = 'auto'; // Réactive le scroll
        });
    }

    // ---- Gestion de la Popup "Get Talknotes +" ----
    const popupOverlay = document.getElementById('talknotes-plus-popup');
    const closePopupBtn = document.getElementById('close-popup');
    
    // Sélectionner les boutons qui doivent ouvrir la popup
    const openPopupDesktopBtn = document.getElementById('open-popup-desktop');
    const openPopupMobileBtn = document.getElementById('open-popup-mobile');

    // Fonction pour ouvrir la popup
    const openPopup = (e) => {
        e.preventDefault(); // Empêche le comportement par défaut si c'est un lien
        popupOverlay.classList.add('is-visible');
        document.body.style.overflow = 'hidden'; // Empêche le scroll de la page derrière
        
        // Si le menu mobile est ouvert, on le ferme pour que la popup s'affiche proprement
        if (overlay && overlay.classList.contains('is-open')) {
            overlay.classList.remove('is-open');
        }
    };

    // Fonction pour fermer la popup
    const closePopup = () => {
        popupOverlay.classList.remove('is-visible');
        document.body.style.overflow = 'auto'; // Réactive le scroll
    };

    // Attacher les écouteurs d'événements pour ouvrir
    if (openPopupDesktopBtn) {
        openPopupDesktopBtn.addEventListener('click', openPopup);
    }
    if (openPopupMobileBtn) {
        openPopupMobileBtn.addEventListener('click', openPopup);
    }

    // Attacher l'écouteur pour fermer via la croix
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', closePopup);
    }

    // Optionnel : Fermer la popup en cliquant à l'extérieur (sur l'overlay sombre)
    if (popupOverlay) {
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                closePopup();
            }
        });
    }
});