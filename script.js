// Toggle sidebar
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  
    // Word-by-word animation
    const heroText = document.getElementById('hero-text');
    const words = heroText.innerText.split(' ');
    heroText.innerHTML = '';
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.innerText = word + ' ';
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.animation = `fadeIn 0.5s ease forwards ${index * 0.4}s`;
      heroText.appendChild(span);
    });
  
    // Create simple hover-responsive particles (placeholder logic)
    const effects = document.getElementById('background-effects');
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement('div');
      dot.className = 'particle';
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.left = `${Math.random() * 100}%`;
      effects.appendChild(dot);
    }
  
    document.addEventListener('mousemove', e => {
      document.querySelectorAll('.particle').forEach(dot => {
        const dx = e.clientX - dot.offsetLeft;
        const dy = e.clientY - dot.offsetTop;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 150) {
          dot.style.transform = 'scale(1.5)';
        } else {
          dot.style.transform = 'scale(1)';
        }
      });
    });
  });
  
  // CSS for particles (can be added into style.css)
  const style = document.createElement('style');
  style.innerHTML = `
    .particle {
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(100, 149, 237, 0.5);
      transition: transform 0.2s ease;
    }
  
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);