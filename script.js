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

// Animate nav links
anime({
  targets: 'nav a',
  translateY: [-20, 0],
  opacity: [0, 1],
  delay: anime.stagger(150, { start: 500 }),
  duration: 800,
  easing: 'easeOutQuad'
});

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

// Theme toggle checkbox logic
const themeToggle = document.getElementById('theme-toggle');
function setThemeCheckbox(mode) {
  document.body.classList.toggle('light-mode', mode === 'light');
  themeToggle.checked = mode === 'light';
  localStorage.setItem('theme', mode);
}
themeToggle.addEventListener('change', () => {
  const mode = themeToggle.checked ? 'light' : 'dark';
  setThemeCheckbox(mode);
});
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setThemeCheckbox(savedTheme);
});

// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: '#ff4c4c' },
    shape: { type: 'circle' },
    opacity: { value: 0.3 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ff4c4c',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      out_mode: 'out'
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' }
    }
  },
  retina_detect: true
});
function typewriterEffect(target, text, delay = 100) {
  const element = document.querySelector(target);
  element.textContent = ''; // Clear existing text

  anime({
    targets: { count: 0 },
    count: text.length,
    round: 1,
    easing: 'linear',
    duration: text.length * delay,
    update: function(anim) {
      const current = Math.floor(anim.animations[0].currentValue);
      element.textContent = text.substring(0, current);
    }
  });
}

// Run on DOM load
window.addEventListener('DOMContentLoaded', () => {
  typewriterEffect('#hero-title', 'Crimson Package Manager', 80);
});
setTimeout(() => {
  document.querySelector('#hero-title').classList.add('no-cursor');
}, text.length * delay + 200); // Adjust timing as needed

