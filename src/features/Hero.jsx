import Social from '../components/Social';
import dev from './../img/dev.jpg';

const Hero = () => {
  return (
    <section className='hero__section clear'>
      <div className='container '>
        <div className='text-center hero__wrapper'>
          <img
            className='dev__img'
            style={{ borderRadius: '50%' }}
            height={160}
            width={160}
            src={dev}
            alt='md asikuzzaman'
            title='Md Asikuzzaman'
          />
          <h2 className='dev__title-sm mb-3 mt-5'>Hello There!!!</h2>
          <h1 className='dev__title mb-0'>I'm Asik</h1>
          <h4 className='dev__subtitle mb-5'>
            <span className='typed'></span>
          </h4>
          <Social animate={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
