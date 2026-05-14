// Простой пример "нестандартного элемента": переключатель темы.
// TODO студент: замени или дополни своим.

const text = "Booting CV profile... C++ student detected... loading skills...";

const el = document.querySelector(".cv__terminal-text");

let i = 0;

function type() {
  if (!el) return;

  el.textContent = text.slice(0, i);
  i++;

  if (i <= text.length) {
    setTimeout(type, 60);
  }
}

type();

const STORAGE_KEY = 'cv-theme';

const getInitialTheme = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
};

const toggle = document.getElementById('theme-toggle');
applyTheme(getInitialTheme());

toggle?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  applyTheme(current === 'dark' ? 'light' : 'dark');
});
