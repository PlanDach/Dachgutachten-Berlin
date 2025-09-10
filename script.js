// Hamburger Menü
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  // Hauptmenü öffnen/schließen
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Alle Submenus automatisch erkennen (jede ul direkt unter li.has-submenu)
  const submenuLinks = navMenu.querySelectorAll('li.has-submenu > a');

  submenuLinks.forEach(link => {
    const submenu = link.nextElementSibling;
    if(submenu && submenu.tagName === 'UL') {
      link.addEventListener('click', function(e) {
        if(window.innerWidth <= 768){
          e.preventDefault();  // verhindert Link-Navigation
          submenu.classList.toggle('active');
        }
      });
    }
  });

  // Cleanup beim Resize
  window.addEventListener('resize', () => {
    if(window.innerWidth > 768){
      navMenu.classList.remove('show');
      document.querySelectorAll('nav ul li ul.active').forEach(s => s.classList.remove('active'));
    }
  });
}
