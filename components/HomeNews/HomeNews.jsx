import React from 'react';
import Container from '../ui/Container/Container';
import HomeBanner from './HomeBanner/HomeBanner';
import BreakingNews from './BreakingNews/BreakingNews';

const HomeNews = () => {
  return (
    <div>
      <HomeBanner />
      <div className='py-8'>
        <BreakingNews />
      </div>
    </div>
  );
};

export default HomeNews;