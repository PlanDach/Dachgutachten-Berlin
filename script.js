// Hamburger-Menü ein-/ausblenden
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Submenüs mobil öffnen/schließen + Pfeil-Drehung
const submenuToggles = document.querySelectorAll('.has-submenu > a');

submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    // Nur mobil: wenn Breite <= 768px
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const submenu = toggle.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle('active'); // zeigt/versteckt Submenu
        toggle.classList.toggle('active');  // dreht Pfeil
      }
    }
  });
});

// Menügröße angleichen: Höhe immer gleich wie Desktop
function setNavHeight() {
  const navLinks = document.querySelectorAll('.nav-menu > ul > li > a');
  let maxHeight = 0;
  navLinks.forEach(link => {
    link.style.height = 'auto'; // Reset
    if (link.offsetHeight > maxHeight) maxHeight = link.offsetHeight;
  });
  navLinks.forEach(link => link.style.height = maxHeight + 'px');
}

// Initial und bei Fenstergröße ändern
window.addEventListener('load', setNavHeight);
window.addEventListener('resize', setNavHeight);
