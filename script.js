function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Alle Submenu-Toggles hinzufügen
document.addEventListener("DOMContentLoaded", () => {
  const submenuParents = document.querySelectorAll(".has-submenu > a");

  submenuParents.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Verhindert direktes Laden
      const submenu = link.nextElementSibling;
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
  });
});
