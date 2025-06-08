// Animate sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({
        targets: entry.target,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutQuad'
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = 0;
  observer.observe(section);
});

// Animate feature boxes
anime({
  targets: '.feature-box',
  translateX: [-30, 0],
  opacity: [0, 1],
  delay: anime.stagger(200, { start: 1000 }),
  duration: 1000,
  easing: 'easeOutQuad'
});

// Animate package cards
anime({
  targets: '.pkg-card',
  translateY: [30, 0],
  opacity: [0, 1],
  delay: anime.stagger(200, { start: 800 }),
  duration: 1000,
  easing: 'easeOutExpo'
});

// Animate hero title
anime({
  targets: '#hero-title',
  translateY: [-50, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: 'easeOutExpo'
});

// Animate footer
const footer = document.querySelector('footer');
footer.style.opacity = 0;

const footerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({
        targets: footer,
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutQuad'
      });
      footerObserver.unobserve(footer);
    }
  });
}, { threshold: 0.1 });

footerObserver.observe(footer);

// Theme toggle logic
const toggleIcon = document.getElementById('theme-toggle');

function setTheme(mode) {
  document.body.classList.toggle('light-mode', mode === 'light');
  toggleIcon.className = mode === 'light' ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', mode);
}

toggleIcon.addEventListener('click', () => {
  const currentMode = document.body.classList.contains('light-mode') ? 'dark' : 'light';
  setTheme(currentMode);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
});
const themeToggle = document.getElementById('theme-toggle');

function setTheme(mode) {
  document.body.classList.toggle('light-mode', mode === 'light');
  themeToggle.checked = mode === 'light';
  localStorage.setItem('theme', mode);
}

themeToggle.addEventListener('change', () => {
  const mode = themeToggle.checked ? 'light' : 'dark';
  setTheme(mode);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
});
