//NAVBAR
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const navLinks = navMenu.querySelectorAll("li");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("no-scroll");
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function handleScroll() {
  if (window.scrollY > 150) {
    nav.classList.add("sticky-nav");
  } else {
    nav.classList.remove("sticky-nav");
  }
}
window.addEventListener("scroll", handleScroll);

//TYPING DELETING TEXT
function initTypedText() {
  const options = {
    strings: [
      "Hello, We are Codes &amp; Bytes,",
      "A Software Solutions Firm,",
      "From Hyderabad, India.",
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    fadeOut: true,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500, // Delay before fade out starts
    fadeIn: true,
    fadeInClass: "typed-fade-in",
    fadeInDelay: 500, // Delay before fade in starts
  };
  const typed = new Typed("#typed-text", options);
}

initTypedText();

//FILTER OPTIONS
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter button");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");
      filterProjects(filterValue);
    });
  });

  function filterProjects(category) {
    projectCards.forEach((card) => {
      const projectCategory = card.getAttribute("data-category");
      if (category === "all" || projectCategory === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});
