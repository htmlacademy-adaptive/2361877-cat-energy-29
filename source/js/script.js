//открывает-закрывает меню, но нет картинки бургера и крестика

const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__toggle');

if (navBtn) {
  navBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  })
}



//код из обучающего видео, не работает

//let navMain = document.querySelector('.nav');
//let navToggle = document.querySelector('nav__toggle');

//navMain.classList.remove('nav--nojs');

//navToggle.addEventListener('click', function () {
 // if (navMain.classList.contains('nav__toggle--closed')) {
 //   navMain.classList.remove('nav__toggle--closed');
  //  navMain.classList.add('nav__toggle--opened');
 // } else {
 //   navMain.classList.add('nav__toggle--closed');
//    navMain.classList.remove('nav__toggle--opened');
//  }
//}
//)
