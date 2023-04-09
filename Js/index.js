const toggle = document.querySelector('.nav-responsive');
const menu = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });