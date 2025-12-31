// تأثير الهيدر عند التمرير
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Fade in sections
const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

function openMedia(src, type) {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const video = document.getElementById("lightbox-video");

  box.style.display = "flex";

  if (type === "image") {
    img.src = src;
    img.style.display = "block";
    video.style.display = "none";
    video.pause();
  } else {
    video.src = src;
    video.style.display = "block";
    img.style.display = "none";
    video.play();
  }
}

function closeMedia() {
  const box = document.getElementById("lightbox");
  const video = document.getElementById("lightbox-video");

  video.pause();
  box.style.display = "none";
}
