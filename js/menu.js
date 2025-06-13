    document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-container nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});

