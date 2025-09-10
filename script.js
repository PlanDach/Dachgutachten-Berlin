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

    // Nur das aktuelle Submenü öffnen, andere schließen
    document.querySelectorAll('.submenu').forEach(menu => {
      if (menu !== submenu) {
        menu.classList.remove('active');
        menu.previousElementSibling.classList.remove('active');
      }
    });

    submenu.classList.toggle('active'); // zeigt/versteckt Submenu
    toggle.classList.toggle('active');  // dreht Pfeil
  });
});
