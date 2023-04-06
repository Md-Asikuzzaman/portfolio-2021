import React, { useEffect, useState } from 'react';

const MenuBar = () => {
  useEffect(() => {
    var html = document.querySelector('html');
    var mobile__menu = document.querySelector('.mobile__menu');
    var menu__bar = document.querySelector('.menu__bar');
    var mobile__overlay = document.querySelector('.mobile__overlay');

    menu__bar.addEventListener('click', () => {
      if (!mobile__menu.classList.contains('mobile__menu--active')) {
        setTimeout(() => {
          mobile__menu.classList.add('mobile__menu--active');
        }, 200);
        mobile__overlay.classList.add('mobile__overlay--active');
        menu__bar.classList.add('menu__bar--active');
        html.style.overflowY = 'hidden';
      } else {
        setTimeout(() => {
          mobile__overlay.classList.remove('mobile__overlay--active');
        }, 300);
        mobile__menu.classList.remove('mobile__menu--active');
        menu__bar.classList.remove('menu__bar--active');
        html.style.overflowY = 'scroll';
      }
    });
  }, []);

  return (
    <div className={`menu__bar pointer`}>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuBar;
