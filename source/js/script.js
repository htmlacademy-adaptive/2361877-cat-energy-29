const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__toggle');

if (navBtn) {
  navBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  })
}
