import React, { useEffect } from 'react';

const Overlay = () => {
  useEffect(() => {
    var html = document.querySelector('html');
    var mobile__menu = document.querySelector('.mobile__menu');
    var menu__bar = document.querySelector('.menu__bar');
    var mobile__overlay = document.querySelector('.mobile__overlay');

    mobile__overlay.addEventListener('click', () => {
      html.style.overflowY = 'scroll';
      mobile__menu.classList.remove('mobile__menu--active');
      mobile__overlay.classList.remove('mobile__overlay--active');
      menu__bar.classList.remove('menu__bar--active');
    });
  });

  return <div className='mobile__overlay'></div>;
};

export default Overlay;
