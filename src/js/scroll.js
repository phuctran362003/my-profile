// Scroll functionality with performance optimization
const scrollIndicator = document.querySelector('.scroll-indicator');
const contentScroll = document.getElementById('contentscroll');

// Throttle function to limit scroll event handling
const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

// Show/hide scroll indicator based on scroll position
const toggleScrollIndicator = throttle(() => {
  requestAnimationFrame(() => {
    if (contentScroll.scrollTop > 300) {
      scrollIndicator.classList.add('visible');
    } else {
      scrollIndicator.classList.remove('visible');
    }
  });
}, 100); // Throttle to 100ms

// Smooth scroll to top with easing
const scrollToTop = () => {
  const currentScroll = contentScroll.scrollTop;
  if (currentScroll > 0) {
    requestAnimationFrame(() => {
      contentScroll.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

// Add sequential animation to info items with performance optimization
const initInfoItemsAnimation = () => {
  const infoItems = document.querySelectorAll('.info-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.setProperty('--item-index', index);
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, {
    threshold: 0.2,
    root: contentScroll
  });

  infoItems.forEach(item => observer.observe(item));
};

// Optimized command hover effect
const addCommandHoverEffect = () => {
  const commands = document.querySelectorAll('.command');
  const root = document.documentElement;
  const accentColor = getComputedStyle(root).getPropertyValue('--color-accent');
  const commandColor = getComputedStyle(root).getPropertyValue('--color-command');

  commands.forEach(cmd => {
    cmd.addEventListener('mouseenter', () => {
      cmd.style.color = accentColor;
      cmd.style.cursor = 'pointer';
    });

    cmd.addEventListener('mouseleave', () => {
      cmd.style.color = commandColor;
    });

    cmd.addEventListener('click', () => {
      const input = document.getElementById('texter');
      input.value = cmd.textContent;
      input.focus();
    });
  });
};

// Enable smooth scrolling for content
const enableSmoothScroll = () => {
  contentScroll.style.scrollBehavior = 'smooth';
  contentScroll.style.overflowY = 'auto';
  contentScroll.style.height = 'calc(100vh - 120px)'; // Adjust height to account for header and footer
};

// Initialize all scroll functionality
const initializeScroll = () => {
  if (contentScroll) {
    enableSmoothScroll();
    contentScroll.addEventListener('scroll', toggleScrollIndicator, { passive: true });
    initInfoItemsAnimation();
    addCommandHoverEffect();
  }
};

// Export functions for use in main.js
window.scrollToTop = scrollToTop;
window.addCommandHoverEffect = addCommandHoverEffect;
window.toggleScrollIndicator = toggleScrollIndicator;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initializeScroll); 