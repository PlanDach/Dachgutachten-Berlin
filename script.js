// Hamburger-Menü ein-/ausblenden
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Submenüs mobil öffnen/schließen + Pfeil-Drehung
const submenuToggles = document.querySelectorAll('.submenu-toggle');

submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = toggle.nextElementSibling;

    submenu.classList.toggle('active'); // zeigt/versteckt Submenu
    toggle.classList.toggle('active');  // dreht Pfeil
  });
});
