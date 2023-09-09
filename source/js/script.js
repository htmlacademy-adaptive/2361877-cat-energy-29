const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__toggle');

if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

if (navBtn) {
  navBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  })
}
