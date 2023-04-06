import './layout.css';
import { BiCodeCurly } from 'react-icons/bi';
import { useEffect } from 'react';
import MenuBar from '../components/MenuBar';
import MobileMenu from '../components/MobileMenu';

const Header = () => {
  useEffect(() => {
    let options = document.querySelectorAll('.nav__items span');

    options.forEach((option, i) => {
      option.addEventListener('click', () => {
        options.forEach((op) => {
          op.classList.remove('active');
        });

        options[i].classList.add('active');
      });
    });
  });

  return (
    <header>
      <div className='container'>
        <nav className='d-flex align-items-center justify-content-between'>
          <div className='logo d-flex align-items-center gap-1'>
            <BiCodeCurly />
            <span className='logo__dev'>dev asik</span>
          </div>

          <div className='nav__items desktop__navbar d-flex align-content-center gap-5 mb-0'>
            <span className='active'>
              <a className='text-decoration-none' href={'#'}>
                Home
              </a>
            </span>

            <span>
              <a className='text-decoration-none' href={'#skill'}>
                Skill
              </a>
            </span>

            <span>
              <a className='text-decoration-none' href={'#about'}>
                About
              </a>
            </span>

            <span>
              <a className='text-decoration-none' href={'#testimonial'}>
                Testimonial
              </a>
            </span>
            <span>
              <a className='text-decoration-none' href={'#contact'}>
                Contact
              </a>
            </span>
          </div>

          <MenuBar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
