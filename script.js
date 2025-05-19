// Code pour rendre le menu responsive (si nécessaire)
const navbar = document.querySelector('.navbar');

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    navbar.style.flexDirection = 'column';
  } else {
    navbar.style.flexDirection = 'row';
  }
});