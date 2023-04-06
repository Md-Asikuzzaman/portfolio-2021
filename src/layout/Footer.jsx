import { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(2000);

  useEffect(() => {
    const getYear = new Date().getFullYear();
    setYear(getYear);
  }, []);

  return (
    <footer>
      <p className='text-center mb-0'>
        &copy; {year}. All rights reserved by dev asik. - v3.0
      </p>
    </footer>
  );
};

export default Footer;
