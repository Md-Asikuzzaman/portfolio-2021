// var mixer = mixitup(".project");

$('.counter').counterUp({
  delay: 10,
  time: 1000,
});

$(document).on('click', 'ul li', function (e) {
  e.preventDefault();
  $(this)
    .addClass('menu__itemEnable')
    .siblings()
    .removeClass('menu__itemEnable');
});

$('.owl-carousel').owlCarousel({
  margin: 10,
  loop: true,
  nav: true,
  autoplay: true,
  slideTransition: 'linear',
  autoplaySpeed: 1200,
  autoplayTimeout: 5000,
  // rtl: true,
  autoplayHoverPause: true,
  responsive: {
    100: {
      items: 1,
    },
    600: {
      items: 1,
    },
    900: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

// Typed js

new Typed('.typed', {
  strings: [
    'Full Stack Web Developer',
    'Professional Freelancer',
    'CSE Student',
  ],
  typeSpeed: 40,
  backSpeed: 10,
  smartBackspace: true,
  loop: true,
  cursorChar: '_',
  shuffle: true,
});

// Animate in scroll
AOS.init();
