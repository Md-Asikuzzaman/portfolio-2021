import dev from './../img/dev__about.jpg';

const About = () => {
  return (
    <section className='about__section py-5 clear' id='about'>
      <div className='container'>
        <h2 className='page__heading mb-5'>My Story...</h2>
        <div className='dev__about'>
          <img
            style={{ borderRadius: '50%' }}
            height={140}
            width={140}
            src={dev}
            alt='md asikuzzaman'
          />
        </div>
        <h5>Hello There!</h5>
        <p>
          My name is Md Asikuzzaman. I'm a React developer and I absolutely love
          my passion. I am enjoying learn new things. You'll find me
          hardworking, fast learning, and fiercely ambitious. My expertise on
          MERN stack development such as (Mongodb, Express, React & Node). 😊
        </p>
        <p>
          I love challenges and i know -there is always a solution. At my age,
          my unwavering focus is to be recognised as on of the best coders in
          tech. I love my clients, i enjoy my project and respect my teammates.
          ✅
        </p>

        <div className='row mt-5'>
          <div className='col-lg-4'>
            <h4 className='mb-3'>Language:</h4>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Node JS</li>
              <li>Dart</li>
              <li>Python</li>
              <li>PHP</li>
              <li>HTML5/CSS3</li>
            </ul>
          </div>

          <div className='col-lg-4'>
            <h4 className='mb-3'>Technology:</h4>
            <ul>
              <li>React.js / Next.js</li>
              <li>Express JS</li>
              <li>Material UI</li>
              <li>Bootstrap5 / Tailwind Css</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>Webpack</li>
              <li>Git, GitHub</li>
            </ul>
          </div>

          <div className='col-lg-4'>
            <h4 className='mb-3'>Database:</h4>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
