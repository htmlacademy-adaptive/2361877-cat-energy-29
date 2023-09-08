//открывает-закрывает меню, но нет картинки бургера и крестика



if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

const menuBtn = document.querySelector('.nav__toggle');
const menuNav = document.querySelector('.nav');


if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault;
    menuNav.classList.toggle('is-open');
  });
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
