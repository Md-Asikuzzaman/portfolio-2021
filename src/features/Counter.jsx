import {
  FcCalendar,
  FcCustomerSupport,
  FcApproval,
  FcBusinessman,
} from 'react-icons/fc';

const Counter = () => {
  return (
    <section className='counter__section clear'>
      <div className='container'>
        <div className='counter__container my-3'>
          <div className='row'>
            <div
              data-aos='fade-in'
              data-aos-easing='linear'
              data-aos-duration='400'
              className='col-lg-3 col-md-6'
            >
              <div className='text-center'>
                <FcCalendar className='counter__icon mb-3' />
                <h4 className='counter__title'>
                  <span className='counter'>5</span>+
                </h4>
                <h5 className='counter__subtitle mb-0'>Years of Experience</h5>
              </div>
            </div>

            <div
              data-aos='fade-in'
              data-aos-delay='200'
              data-aos-duration='400'
              data-aos-easing='linear'
              className='col-lg-3 col-md-6 mt-lg-0 mt-4'
            >
              <div className='text-center'>
                <FcApproval className='counter__icon mb-3' />
                <h4 className='counter__title'>
                  <span className='counter'>270</span>+
                </h4>
                <h5 className='counter__subtitle mb-0'>Success project</h5>
              </div>
            </div>

            <div
              data-aos='fade-in'
              data-aos-delay='300'
              data-aos-duration='400'
              data-aos-easing='linear'
              className='col-lg-3 col-md-6 mt-md-4 mt-lg-0 mt-4'
            >
              <div className='text-center'>
                <FcBusinessman className='counter__icon mb-3' />
                <h4 className='counter__title'>
                  <span className='counter'>30</span>+
                </h4>
                <h5 className='counter__subtitle mb-0'>Happy Client</h5>
              </div>
            </div>

            <div
              data-aos='fade-in'
              data-aos-delay='400'
              data-aos-duration='400'
              data-aos-easing='linear'
              className='col-lg-3 col-md-6 mt-md-4 mt-lg-0 mt-4'
            >
              <div className='text-center'>
                <FcCustomerSupport className='counter__icon mb-3' />
                <h4 className='counter__title'>
                  <span className='counter'>100</span>+
                </h4>
                <h5 className='counter__subtitle mb-0'>Meeting</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
