// document.querySelector('.c-hamburger').addEventListener('click', function(e) {
//   e.preventDefault();
//   this.classList.toggle('is-active');
// })


const hum = document.querySelector('.c-hamburger');
const menu = document.querySelector('.menu');

const isActive = (e) => {
  e.preventDefault();
  if (hum.classList.contains('is-active') && menu.classList.contains('nav-active')) {
    hum.classList.remove('is-active');
    menu.classList.remove('nav-active');
    document.body.classList.remove('body-active');
  } else {
    hum.classList.add('is-active');
    menu.classList.add('nav-active');
    document.body.classList.add('body-active');
  }
  // hum.classList.toggle('is-active');
}

hum.addEventListener('click', isActive);

