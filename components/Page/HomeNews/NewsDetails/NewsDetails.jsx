import Container from '@/components/ui/Container/Container';
import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeTodayNews from '../HomeTodayNews/HomeTodayNews';
import NewsTitle from '../NewsTitle/NewsTitle';
import HomeOtherNews from '../HomeOtherNews/HomeOtherNews';
import SingleNewsPostDetails from './SingleNewsPostDetails';

const NewsDetails = () => {
  return (
    <div>
      <HomeBanner />
      <Container>
        <div className='grid grid-cols-3 gap-10 my-8'>
          <div className='col-span-2'>
            <SingleNewsPostDetails />
          </div>
          <div className='col-span-1'>
            <HomeTodayNews />
            <NewsTitle />
          </div>
        </div>
        <HomeOtherNews />
      </Container>
    </div>
  );
};

export default NewsDetails;