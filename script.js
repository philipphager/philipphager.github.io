/* ══════════════════════════════════════════════
   THEME TOGGLE
   Persists choice in localStorage; respects system
   preference until the user explicitly toggles.
══════════════════════════════════════════════ */

(function () {
  const root   = document.documentElement;
  const button = document.getElementById('theme-toggle');
  const media  = window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
  }

  function currentTheme() {
    return root.getAttribute('data-theme') || 'dark';
  }

  // Toggle on click
  if (button) {
    button.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  // Follow system changes only if user hasn't made an explicit choice
  media.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
