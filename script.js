// script.js — robustes mobile toggle + nur die getesteten Submenus öffnen

const hamburger = document.getElementById('hamburger');
// navMenu: entweder #navMenu (wenn vorhanden) oder erstes nav ul
const navMenu = document.getElementById('navMenu') || document.querySelector('header nav ul');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    // schließe alle Untermenüs beim Öffnen/Schließen neu
    document.querySelectorAll('.submenu').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.has-submenu > a').forEach(a => a.classList.remove('open'));
  });
}

// Alle "Leistungen"-Toggles (anchor direkt unter .has-submenu)
const submenuToggles = document.querySelectorAll('.has-submenu > a');

submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    // nur mobil: verhindern, dass Klick zur Seite navigiert
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parentLi = toggle.parentElement;
      const submenu = parentLi.querySelector('.submenu');

      if (!submenu) return;

      const isOpen = submenu.classList.contains('active');

      // schließe alle anderen Submenus, um Layout-Shift zu vermeiden
      document.querySelectorAll('.submenu').forEach(s => {
        if (s !== submenu) s.classList.remove('active');
      });
      document.querySelectorAll('.has-submenu > a').forEach(a => {
        if (a !== toggle) a.classList.remove('open');
      });

      // toggle das angeklickte Submenu
      submenu.classList.toggle('active', !isOpen);
      toggle.classList.toggle('open', !isOpen);

      // stelle sicher, dass die gesamte Nav sichtbar ist (erhöht max-height)
      if (navMenu && !navMenu.classList.contains('show')) {
        navMenu.classList.add('show');
      }
    }
  });
});

// bei Resize: wenn Desktop, alles mobile-close entfernen
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    if (navMenu) navMenu.classList.remove('show');
    document.querySelectorAll('.submenu').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.has-submenu > a').forEach(a => a.classList.remove('open'));
  }
});
