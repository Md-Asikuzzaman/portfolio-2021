import Skill from './features/Skill';
import Hero from './features/Hero';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Counter from './features/Counter';
import About from './features/About';
import Testimonial from './features/Testimonial';
import Faq from './features/Faq';
import Contact from './features/Contact';
import Preloader from './components/Preloader';
import { useEffect } from 'react';
import TopBtn from './components/TopBtn';
import Internet from './components/Internet';
import MobileMenu from './components/MobileMenu';
import Overlay from './components/Overlay';

const App = () => {
  useEffect(() => {
    const loader__wrapper = document.querySelector('.loader__wrapper');
    const html = document.querySelector('html');
    window.addEventListener('load', () => {
      loader__wrapper.classList.add('loaded');
      html.style.overflowY = 'scroll';
    });

    // top btn
    const topBtn = document.querySelector('.top__btn');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        topBtn.classList.add('top__btn--active');
      } else {
        topBtn.classList.remove('top__btn--active');
      }
    });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Skill />
      <Counter />
      <About />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
      <Internet />
      <Preloader />
      <TopBtn />
      <Overlay />
      <MobileMenu />
    </>
  );
};

export default App;
