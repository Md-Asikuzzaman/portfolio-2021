import React, { useEffect } from 'react';
import Social from './Social';

const MobileMenu = () => {
  useEffect(() => {
    var nav__items = document.querySelectorAll('.mobile-item');
    var html = document.querySelector('html');
    var mobile__menu = document.querySelector('.mobile__menu');
    var menu__bar = document.querySelector('.menu__bar');
    var mobile__overlay = document.querySelector('.mobile__overlay');

    nav__items.forEach((item) => {
      item.addEventListener('click', () => {
        html.style.overflowY = 'scroll';
        mobile__menu.classList.remove('mobile__menu--active');
        mobile__overlay.classList.remove('mobile__overlay--active');
        menu__bar.classList.remove('menu__bar--active');
      });
    });
  }, []);

  return (
    <div className='mobile__menu d-none align-items-center justify-content-center'>
      <div
        className='nav__items mobile__navbar d-flex align-items-center  flex-column mb-0'
        style={{ gap: '30px' }}
      >
        <span className='active mobile-item'>
          <a className='text-decoration-none' href={'#'}>
            Home
          </a>
        </span>

        <span className='mobile-item'>
          <a className='text-decoration-none' href={'#skill'}>
            Skill
          </a>
        </span>

        <span className='mobile-item'>
          <a className='text-decoration-none' href={'#about'}>
            About
          </a>
        </span>

        <span className='mobile-item'>
          <a className='text-decoration-none' href={'#testimonial'}>
            Testimonial
          </a>
        </span>
        <span className='mobile-item'>
          <a className='text-decoration-none' href={'#contact'}>
            Contact
          </a>
        </span>

        <div className='mt-5'>
          <Social animate={true} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
