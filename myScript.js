const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
setInterval(() => {
    let day = new Date();
    let ss = day.getSeconds() + (day.getMilliseconds() / 1000);
    let mm = day.getMinutes() + (ss / 60);
    let hh = day.getHours() + (mm / 60);

    hr.style.transform = `rotateZ(${hh * 30}deg)`;
    mn.style.transform = `rotateZ(${mm * deg}deg)`;
    sc.style.transform = `rotateZ(${ss * deg}deg)`;
    (() => {
        'use strict'
      
        const getStoredTheme = () => localStorage.getItem('theme');
        const setStoredTheme = theme => localStorage.setItem('theme', theme);
      
        const getPreferredTheme = () => {
          const storedTheme = getStoredTheme();
          if (storedTheme) {
            return storedTheme;
          }
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        };
      
        const setTheme = theme => {
          if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
          } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
          }
      
      
          const clock = document.querySelector('.clock');
          if (theme === 'dark') {
            clock.style.backgroundColor = '#05161A';
            clock.style.borderColor = '#072E33';
          } else {
            clock.style.backgroundColor = '#99CDD8';
            clock.style.borderColor = '#FDE8D3';
          }
        };
      
        const showActiveTheme = (theme, focus = false) => {
          const themeSwitcher = document.querySelector('#bd-theme');
          if (!themeSwitcher) {
            return;
          }
      
          const themeSwitcherText = document.querySelector('#bd-theme-text');
          const activeThemeIcon = document.querySelector('.theme-icon-active use');
          const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
          const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href');
      
          document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
            element.classList.remove('active');
            element.setAttribute('aria-pressed', 'false');
          });
      
          btnToActive.classList.add('active');
          btnToActive.setAttribute('aria-pressed', 'true');
          activeThemeIcon.setAttribute('href', svgOfActiveBtn);
          const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
          themeSwitcher.setAttribute('aria-label', themeSwitcherLabel);
      
          if (focus) {
            themeSwitcher.focus();
          }
        };
      
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
          const storedTheme = getStoredTheme();
          if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme());
          }
        });
      
        window.addEventListener('DOMContentLoaded', () => {
          showActiveTheme(getPreferredTheme());
      
          document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
            toggle.addEventListener('click', () => {
              const theme = toggle.getAttribute('data-bs-theme-value');
              setStoredTheme(theme);
              setTheme(theme);
              showActiveTheme(theme, true);
            });
          });
      
          
          document.getElementById('lightMode').addEventListener('click', function() {
            setStoredTheme('light');
            setTheme('light');
            showActiveTheme('light', true);
          });
      
          document.getElementById('darkMode').addEventListener('click', function() {
            setStoredTheme('dark');
            setTheme('dark');
            showActiveTheme('dark', true);
          });
        });
      })();
      
});