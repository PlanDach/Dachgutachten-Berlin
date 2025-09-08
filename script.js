// Hamburger-Menü sanft ein-/ausblenden
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Submenüs mobil öffnen/schließen + Pfeil-Drehung + Stagger
const submenuToggles = document.querySelectorAll('.submenu-toggle');

submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = toggle.nextElementSibling;

    // Toggle Submenu
    submenu.classList.toggle('active');

    // Toggle Pfeil-Drehung
    toggle.classList.toggle('active');
  });
});
