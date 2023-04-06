import React from 'react';
import { SlArrowUp } from 'react-icons/sl';

const TopBtn = () => {
  return (
    <div className='top__btn pointer' title='Go to top'>
      <SlArrowUp className='top__icon' />
    </div>
  );
};

export default TopBtn;
