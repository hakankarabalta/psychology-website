const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Aç/Kapat Fonksiyonu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Mobil menü açıkken herhangi bir linke tıklanırsa menüyü kapat
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));