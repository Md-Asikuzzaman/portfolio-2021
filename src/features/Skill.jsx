const Skill = () => {
  return (
    <section className='skill__section py-5 clear' id='skill'>
      <div className='container'>
        <h2 className='page__heading mb-4'>My Skill...</h2>
        <div className='row gx-5'>
          <div className='col-lg-7'>
            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>HTML5 / CSS3 / SASS</div>
              <div className='html'></div>
            </div>

            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>
                Material UI / Tailwind css
              </div>
              <div className='framework'></div>
            </div>

            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>JavaScript / jQuery</div>
              <div className='js'></div>
            </div>

            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>TypeScript</div>
              <div className='ts'></div>
            </div>

            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>React JS</div>
              <div className='react'></div>
            </div>

            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>React Native</div>
              <div className='native'></div>
            </div>

            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>Next JS</div>
              <div className='next'></div>
            </div>

            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>Node / Express JS</div>
              <div className='node'></div>
            </div>

            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>Redux</div>
              <div className='redux'></div>
            </div>

            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>MongoDB / SQL</div>
              <div className='database'></div>
            </div>

            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>OAuth / NextAuth</div>
              <div className='oauth'></div>
            </div>

            <div className='skill__box py-3'>
              <div className='skill__title mb-2'>Git / Github</div>
              <div className='tools'></div>
            </div>
          </div>
          <div className='col-lg-5 mt-4 mt-lg-0'>
            <div className='row'>
              <div className='col-lg-6 text-center'>
                <div className='skill__circleItem'>
                  <svg
                    className='radial-progress'
                    data-percentage='95'
                    viewBox='0 0 80 80'
                  >
                    <circle
                      className='incomplete'
                      cx='40'
                      cy='40'
                      r='35'
                    ></circle>
                    <circle
                      className='complete'
                      cx='40'
                      cy='40'
                      r='35'
                    ></circle>
                    <text
                      className='percentage'
                      x='50%'
                      y='57%'
                      transform='matrix(0, 1, -1, 0, 80, 0)'
                    >
                      95%
                    </text>
                  </svg>
                  <p className='circle__title'>Communication</p>
                </div>
              </div>

              <div className='col-lg-6 text-center'>
                <div className='skill__circleItem'>
                  <svg
                    className='radial-progress'
                    data-percentage='75'
                    viewBox='0 0 80 80'
                  >
                    <circle
                      className='incomplete'
                      cx='40'
                      cy='40'
                      r='35'
                    ></circle>
                    <circle
                      className='complete'
                      cx='40'
                      cy='40'
                      r='35'
                    ></circle>
                    <text
                      className='percentage'
                      x='50%'
                      y='57%'
                      transform='matrix(0, 1, -1, 0, 80, 0)'
                    >
                      75%
                    </text>
                  </svg>
                  <p className='circle__title'>Team Work</p>
                </div>
              </div>

              <div className='col-lg-6 text-center'>
                <div className='skill__circleItem'>
                  <svg
                    className='radial-progress'
                    data-percentage='85'
                    viewBox='0 0 80 80'
                  >
                    <circle
                      className='incomplete'
                      cx='40'
                      cy='40'
                      r='35'
                    ></circle>
                    <circle
                      className='complete'
                      cx='40'
                      cy='40'
                      r='35'
                    ></circle>
                    <text
                      className='percentage'
                      x='50%'
                      y='57%'
                      transform='matrix(0, 1, -1, 0, 80, 0)'
                    >
                      85%
                    </text>
                  </svg>
                  <p className='circle__title'>Management</p>
                </div>
              </div>

              <div className='col-lg-6 text-center'>
                <div className='skill__circleItem'>
                  <svg
                    className='radial-progress'
                    data-percentage='85'
                    viewBox='0 0 80 80'
                  >
                    <circle
                      className='incomplete'
                      cx='40'
                      cy='40'
                      r='35'
                    ></circle>
                    <circle
                      className='complete'
                      cx='40'
                      cy='40'
                      r='35'
                    ></circle>
                    <text
                      className='percentage'
                      x='50%'
                      y='57%'
                      transform='matrix(0, 1, -1, 0, 80, 0)'
                    >
                      80%
                    </text>
                  </svg>
                  <p className='circle__title'>Creativity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
