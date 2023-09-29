'use script';
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const menuEl = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

// open menu
menuBtn.addEventListener('click', () => {
  menuEl.classList.add('slideFromRight');
  overlay.classList.add('fullOpacity');
});

// close menu
closeBtn.addEventListener('click', () => {
  menuEl.classList.remove('slideFromRight');
  overlay.classList.remove('fullOpacity');
});
