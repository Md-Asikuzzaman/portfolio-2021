import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

import './components.css';

const Social = ({ animate }) => {
  return animate ? (
    <div>
      <h6
        data-aos='zoom-in'
        data-aos-duration='200'
        data-aos-easing='linear'
        data-aos-offset='0'
        className='social__title mb-2'
      >
        Connect With me
      </h6>
      <div className='social__links d-flex gap-3 justify-content-center align-items-center'>
        <a
          data-aos='zoom-in'
          data-aos-duration='200'
          data-aos-delay='300'
          data-aos-easing='linear'
          data-aos-offset='0'
          href='https://github.com/md-asikuzzaman'
          target='_blank'
        >
          <BsGithub />
        </a>
        <a
          data-aos='zoom-in'
          data-aos-duration='200'
          data-aos-delay='400'
          data-aos-easing='linear'
          data-aos-offset='0'
          href='https://www.linkedin.com/in/md-asikuzzaman'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a
          data-aos='zoom-in'
          data-aos-duration='200'
          data-aos-delay='500'
          data-aos-easing='linear'
          data-aos-offset='0'
          href='https://www.facebook.com/asikuzzaman.en'
          target='_blank'
        >
          <BsFacebook />
        </a>
      </div>
    </div>
  ) : (
    <>
      <h6 className='social__title mb-2'>Connect With me</h6>
      <div className='social__links d-flex gap-3 justify-content-center align-items-center'>
        <a href='https://github.com/md-asikuzzaman' target='_blank'>
          <BsGithub />
        </a>
        <a href='https://www.linkedin.com/in/md-asikuzzaman' target='_blank'>
          <BsLinkedin />
        </a>
        <a href='https://www.facebook.com/asikuzzaman.en' target='_blank'>
          <BsFacebook />
        </a>
      </div>
    </>
  );
};

export default Social;
