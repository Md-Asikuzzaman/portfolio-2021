import { useEffect } from 'react';
import { BsFillStarFill } from 'react-icons/bs';

const Testimonial = () => {
  return (
    <section className='testimonial__section py-5 clear' id='testimonial'>
      <div className='container'>
        <h2 className='page__heading mb-2'>Client testimonials...</h2>
        <p className='mb-5'>What's world wide client say about me</p>
        <div className='testimonial__box pb-5'>
          <div className='owl-carousel'>
            <div className='item p-4'>
              <div className='d-flex gap-3'>
                <img
                  style={{ height: '50px', width: '50px' }}
                  src='https://img.icons8.com/color/1x/germany-circular.png'
                  alt='germany'
                />
                <div>
                  <h5 className='fw-bold'>July Alia</h5>
                  <h6 className='testimonial__pro'>Graphics Designer</h6>
                </div>
              </div>
              <div className='d-flex align-items-center gap-3 mt-2'>
                <div className='testimonial__stars d-flex align-items-center gap-1'>
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                </div>
                <span className='fw-bold d-inline-block mb-0'>5.00</span>
              </div>
              <p className='testimonial__desc mt-3 fst-italic mb-0'>
                "He is a good developer and good communicator."
              </p>
            </div>

            <div className='item p-4'>
              <div className='d-flex gap-3'>
                <img
                  style={{ height: '50px', width: '50px' }}
                  src='https://img.icons8.com/color/1x/usa-circular.png'
                  alt='usa'
                />

                <div>
                  <h5 className='fw-bold'>Jack Jhon</h5>
                  <h6 className='testimonial__pro'>Content Creator</h6>
                </div>
              </div>
              <div className='d-flex align-items-center gap-3 mt-2'>
                <div className='testimonial__stars d-flex align-items-center gap-1'>
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                </div>
                <span className='fw-bold d-inline-block mb-0'>5.00</span>
              </div>
              <p className='testimonial__desc mt-3 fst-italic mb-0'>
                "Great developer to work with, Really good job. Appreciate!!!"
              </p>
            </div>

            <div className='item p-4'>
              <div className='d-flex gap-3'>
                <img
                  style={{ height: '50px', width: '50px' }}
                  src='https://img.icons8.com/color/1x/bangladesh-circular.png '
                  alt='bangladesh'
                />

                <div>
                  <h5 className='fw-bold'>Akhtar Hussian</h5>
                  <h6 className='testimonial__pro'>Freelancer</h6>
                </div>
              </div>
              <div className='d-flex align-items-center gap-3 mt-2'>
                <div className='testimonial__stars d-flex align-items-center gap-1'>
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                </div>
                <span className='fw-bold d-inline-block mb-0'>5.00</span>
              </div>
              <p className='testimonial__desc mt-3 fst-italic mb-0'>
                "He's designing skills is awesome. talented developer."
              </p>
            </div>

            <div className='item p-4'>
              <div className='d-flex gap-3'>
                <img
                  style={{ height: '50px', width: '50px' }}
                  src='https://img.icons8.com/color/1x/south-africa-circular.png'
                  alt='africa'
                />

                <div>
                  <h5 className='fw-bold'>Ziyaad Parker</h5>
                  <h6 className='testimonial__pro'>Businessman</h6>
                </div>
              </div>
              <div className='d-flex align-items-center gap-3 mt-2'>
                <div className='testimonial__stars d-flex align-items-center gap-1'>
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                </div>
                <span className='fw-bold d-inline-block mb-0'>5.00</span>
              </div>
              <p className='testimonial__desc mt-3 fst-italic mb-0'>
                "Great Developer, I can 100% recommend him to any future
                client."
              </p>
            </div>

            <div className='item p-4'>
              <div className='d-flex gap-3'>
                <img
                  style={{ height: '50px', width: '50px' }}
                  src='https://img.icons8.com/color/1x/bangladesh-circular.png '
                  alt='bangladesh'
                />

                <div>
                  <h5 className='fw-bold'>Ramjan Molla</h5>
                  <h6 className='testimonial__pro'>Digital marketing export</h6>
                </div>
              </div>
              <div className='d-flex align-items-center gap-3 mt-2'>
                <div className='testimonial__stars d-flex align-items-center gap-1'>
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                  <BsFillStarFill className='star' />
                </div>
                <span className='fw-bold d-inline-block mb-0'>5.00</span>
              </div>
              <p className='testimonial__desc mt-3 fst-italic mb-0'>
                "Absolutely skilled developer, the works was good. recommended!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
