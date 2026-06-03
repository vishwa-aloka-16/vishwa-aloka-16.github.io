const mobileMenu = document.getElementById("mobileMenu");
const hamburgerButton = document.querySelector(".hamburger");
const revealElements = document.querySelectorAll("section, .skills-section, .contact-section, .stats-bar");
const progressBar = document.getElementById("progress-bar");

const projectImageFallback = `
  <div class="project-img-placeholder">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
    <span>Add screenshot</span>
  </div>
`;

function setMenuState(isOpen) {
  mobileMenu.classList.toggle("open", isOpen);
  hamburgerButton.setAttribute("aria-expanded", String(isOpen));
}

function toggleMenu() {
  setMenuState(!mobileMenu.classList.contains("open"));
}

function updateProgressBar() {
  const doc = document.documentElement;
  const scrollableHeight = doc.scrollHeight - doc.clientHeight;
  const progress = scrollableHeight > 0 ? (doc.scrollTop / scrollableHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}

hamburgerButton.addEventListener("click", toggleMenu);

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("click", (event) => {
  if (!mobileMenu.contains(event.target) && !hamburgerButton.contains(event.target)) {
    setMenuState(false);
  }
});

document.querySelectorAll(".project-img").forEach((image) => {
  image.addEventListener("error", () => {
    image.parentElement.innerHTML = projectImageFallback;
  });
});

document.querySelectorAll(".article-thumb").forEach((image) => {
  image.addEventListener("error", () => {
    image.parentElement.innerHTML = '<div class="article-thumb-placeholder">Cover</div>';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.06 });

revealElements.forEach((element) => observer.observe(element));

window.addEventListener("scroll", updateProgressBar);
updateProgressBar();
