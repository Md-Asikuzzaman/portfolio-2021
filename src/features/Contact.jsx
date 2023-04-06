import React from 'react';
import { IoLocation } from 'react-icons/io5';
import { BsFillEnvelopeFill, BsFillPhoneFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <section className='contact__section py-5 clear' id='contact'>
      <div className='container'>
        <h2 className='page__heading mb-2'>Contact With Me</h2>
        <p className='mb-5'>If you have any questions, please ask me!</p>

        <div className='row'>
          <div
            className='col-lg-4'
            data-aos='zoom-in'
            data-aos-duration='200'
            data-aos-easing='linear'
          >
            <div className='card text-center py-5 mt-4 mt-lg-0 border-0 pointer'>
              <a href='tel:+8801995-580669'>
                <span className='contact__icon' title='click for phone call'>
                  <BsFillPhoneFill style={{ color: '#800080' }} />
                </span>
              </a>
              <h3 className='mt-3'>Call me today</h3>
              <p className='mb-0'>WhatsApp: +8801995-580559</p>
            </div>
          </div>

          <div
            className='col-lg-4'
            data-aos='zoom-in'
            data-aos-duration='200'
            data-aos-delay='200'
            data-aos-easing='linear'
          >
            <div className='card text-center py-5 mt-4 mt-lg-0 border-0 pointer'>
              <a href='mailto:mdasikuzzaman.en@gmail.com'>
                <span className='contact__icon' title='click for send email'>
                  <BsFillEnvelopeFill style={{ color: '#800080' }} />
                </span>
              </a>
              <h3 className='mt-3'>Send me Email</h3>
              <p className='mb-0'>Email: mdasikuzzaman.en@gmail.com</p>
            </div>
          </div>

          <div
            className='col-lg-4'
            data-aos='zoom-in'
            data-aos-duration='200'
            data-aos-delay='400'
            data-aos-easing='linear'
          >
            <div className='card text-center py-5 mt-4 mt-lg-0 border-0 pointer'>
              <span className='contact__icon' title='my location'>
                <IoLocation style={{ color: '#800080' }} />
              </span>
              <h3 className='mt-3'>My Location</h3>
              <p className='mb-0'>Khulna, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
