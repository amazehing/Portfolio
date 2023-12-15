document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // verwijderd active link
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
      });

      // Klikt is nu actief
      link.classList.add("active");

      // scrollen naar de juist geklikte pagina
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// logo refresh
document.addEventListener("DOMContentLoaded", function () {
  // selecteert logo element
  const logoElement = document.querySelector(".logo");

  // Voegt een klik event listener
  logoElement.addEventListener("click", function () {
    // scroll naar de juiste plek
    window.scrollTo(0, 0);
    // pagina herlaad wanneer je logo klikt
    setTimeout(function () {
      location.reload();
    }, 700);
    // pagina herlaad op home pagina
    event.preventDefault();
  });
});
