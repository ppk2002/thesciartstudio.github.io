// Toggle the side navigation bar
function toggleSideNav() {
  const nav = document.getElementById('sideNav');
  nav.classList.toggle('open');
}

// Animate 'The SciArt Studio' word-by-word on the Home page
document.addEventListener('DOMContentLoaded', () => {
  const animatedTitle = document.getElementById('animated-title');
  if (!animatedTitle) return;

  const text = animatedTitle.textContent;
  animatedTitle.textContent = '';

  const words = text.split(' ');
  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.textContent = word + (i < words.length - 1 ? ' ' : '');
    span.style.opacity = '0';
    span.style.transition = `opacity 0.5s ease ${i * 0.4}s`;
    animatedTitle.appendChild(span);
  });

  // Trigger animation after a short delay
  setTimeout(() => {
    Array.from(animatedTitle.children).forEach(span => {
      span.style.opacity = '1';
    });
  }, 100);

  // Add mousemove effect for the Home page's special elements (if you add them later)
});