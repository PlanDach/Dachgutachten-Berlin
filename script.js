// script.js - robuster Nav-Handler

// lade Elemente
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu') || document.querySelector('nav .nav-menu') || document.querySelector('nav > ul');

// Safety: wenn kein nav gefunden -> nichts tun
if (hamburger && navMenu) {
  // öffnet/schließt das mobile Hauptmenü
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('show'); // für Kompatibilität mit alten Seiten
  });

  // Submenu-Triggers: fügen Klick-Handler nur zu Links hinzu, die direkt ein .submenu folgen
  const anchors = navMenu.querySelectorAll('a');
  anchors.forEach(a => {
    const next = a.nextElementSibling;
    if (next && next.classList && next.classList.contains('submenu')) {
      // sicherstellen, dass Toggle-Klasse existiert (hilft zum Styling)
      a.classList.add('submenu-toggle');

      a.addEventListener('click', (e) => {
        // nur mobile: prevent default, togglen des Submenus
        if (window.innerWidth <= 768) {
          e.preventDefault();

          // schließe andere geöffnete Submenus (optional: verhindert Layout-Verschiebungen)
          document.querySelectorAll('.submenu.active').forEach(s => {
            if (s !== next) s.classList.remove('active');
          });
          next.classList.toggle('active');

          // markiere den Link aktiv/inaktiv (z.B. Pfeil drehen)
          a.classList.toggle('active');
        }
        // auf Desktop bleibt das Hover-Verhalten wie gehabt (kein preventDefault)
      });
    }
  });

  // beim Resize mobile->desktop: cleanup (vermeidet hängenbleibende mobile-states)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active', 'show');
      document.querySelectorAll('.submenu.active').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('nav a.active').forEach(a => a.classList.remove('active'));
    }
  });
}
