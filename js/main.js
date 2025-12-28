window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  console.log("✨ Hero animations loaded");
});

const sections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      section.classList.add("show");
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll animation
const sections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      section.classList.add("show");
    }
  });
});
