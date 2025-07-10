const body = document.querySelector('body');
const themeKey = 'terminal-portfolio-theme';

// Theme transition class
const addThemeTransition = () => {
  body.style.transition = 'background-color 0.3s ease, background-image 0.3s ease';
  document.documentElement.style.setProperty('--theme-transition', '0.3s');
};

// Remove transition after it's complete
const removeThemeTransition = () => {
  setTimeout(() => {
    body.style.transition = '';
    document.documentElement.style.setProperty('--theme-transition', '');
  }, 300);
};

// Toggle theme with transition
const toggleTheme = () => {
  addThemeTransition();
  body.classList.toggle('theme-anime');
  localStorage.setItem(themeKey, body.classList.contains('theme-anime') ? 'anime' : 'default');
  removeThemeTransition();
};

// Initialize theme
const initTheme = () => {
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme === 'anime') {
    body.classList.add('theme-anime');
  }
};

// Add theme command to window object
window.toggleTheme = toggleTheme;

// Initialize theme on load
document.addEventListener('DOMContentLoaded', initTheme);

// Add theme transition to all themed elements
document.documentElement.style.setProperty('--theme-transition', '0.3s');
document.querySelectorAll('*').forEach(element => {
  const styles = window.getComputedStyle(element);
  if (styles.getPropertyValue('color').includes('var(--color-') ||
      styles.getPropertyValue('background-color').includes('var(--color-') ||
      styles.getPropertyValue('border-color').includes('var(--color-')) {
    element.style.transition = 'color var(--theme-transition), background-color var(--theme-transition), border-color var(--theme-transition)';
  }
});
