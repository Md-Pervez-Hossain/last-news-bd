import React from 'react';
import Navigation from './Navigation/Navigation';
import MiddleMenu from './MiddleMenu/MiddleMenu';
import Menubar from './Menubar/Menubar';

const Headers = () => {
  return (
    <div className=''>
      <Navigation />
      <MiddleMenu />
      <Menubar />
    </div>
  );
};

export default Headers;