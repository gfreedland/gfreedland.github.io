const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelector('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle the nav bar
    nav.classList.toggle('nav-active');
    // Animate the links
    navLinks.forEach((item, index) => {
      if (item.style.animation) item.style.animation = '';
      else {
        item.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 1
        }s`;
      }
    });
  });
};

const app = () => {
  navSlide();
};

app();
